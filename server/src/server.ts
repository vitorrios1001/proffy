import express from 'express'
import routes from './routes'
import cors from 'cors'
import config from './config'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = config.SERVER_PORT

app.listen(PORT, () => {
  console.log(`Running in port: ${PORT}`)
})