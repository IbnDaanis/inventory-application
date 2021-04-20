import express from 'express'
import path from 'path'
import morgan from 'morgan'
import { config } from './config/config'
import { pool } from './config/database'

const app = express()

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))
  app.get('*', (_, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
} else {
  app.get('/', (_, res) => {
    res.send('API is running')
  })
}

app.get('/api/categories', (_, res) => {
  pool.query('SELECT * FROM category', (error, results) => {
    if (error) {
      res.send(error.message)
      throw error.message
    }
    console.log(results.rows)
    res.json(results.rows)
    pool.end()
  })
})

app.post('/', async (req, res) => {
  try {
    const { title } = req.body
    const newCategory = await pool.query('INSERT INTO category (title) VALUES($1) RETURNING *', [
      title
    ])
    res.json(newCategory)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(config.server, () => {
  console.log(`Server running on ${config.server.hostname}:${config.server.port}`)
})
