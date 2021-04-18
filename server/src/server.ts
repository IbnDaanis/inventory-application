import express from 'express'
import { config } from './config/config'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(config.server, () => {
  console.log(`Server running on ${config.server.hostname}:${config.server.port}`)
})
