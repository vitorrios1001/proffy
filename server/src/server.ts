import express, { Response, Request } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import httpStatus from 'http-status'
import compression from 'compression'

import routes from './routes'
import config from './config'
import { handleErrors } from './middlewares/handleErrors'

const app = express()

if (config.NODE_ENV !== 'test') {
  app.use(
    morgan(config.LOGGING.TYPE, {
      skip: (req: Request, res: Response) => res.statusCode < httpStatus.BAD_REQUEST,
      stream: process.stderr,
    }),
  )
  
  app.use(
    morgan(config.LOGGING.TYPE, {
      skip: (req: Request, res: Response) => res.statusCode >= httpStatus.BAD_GATEWAY,
      stream: process.stdout,
    }),
  )
}


app.use(cors())
app.use(compression())
app.use(express.json())

app.use(routes)

app.use(handleErrors)

export default app