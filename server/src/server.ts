import express from 'express'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import { config } from './config/config'
import categories from './routes/categoryRoutes'
import items from './routes/itemRoutes'

const app = express()

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))
  app.get('*', (_, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
} else {
  app.get('/', (_, res) => {
    res.send('API is running')
  })
}

app.use('/api/categories', categories)
app.use('/api/items', items)

app.listen(config.server, () => {
  console.log(`Server running on ${config.server.hostname}:${config.server.port}`)
})
