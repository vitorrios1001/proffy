import * as dotEnvSafe from 'dotenv-safe'
import * as path from 'path'

if (process.env.NODE_ENV !== 'production') {
  let envPath = '.env'

  if (process.env.NODE_ENV) {
    envPath = `${envPath}.${process.env.NODE_ENV}`
  }

  dotEnvSafe.config({
    allowEmptyValues: true,
    example: path.resolve(__dirname, '..', '..', '.env.example'),
    path: path.resolve(process.cwd(), envPath),
  })
}

interface Config {
  readonly DB: {
    readonly HOST: string
    readonly NAME: string
    readonly PASSWORD: string
    readonly PORT: number
    readonly USER: string
  }

  readonly NODE_ENV: string
  readonly SERVER_PORT: number
}

const {
  SERVER_PORT = '3333',
  NODE_ENV = 'development',
  DB_HOST = '',
  DB_NAME = '',
  DB_PASSWORD = '',
  DB_PORT = '5432',
  DB_USERNAME = '',
} = process.env

const config: Config = {
  DB: {
    HOST: DB_HOST,
    NAME: DB_NAME,
    PASSWORD: DB_PASSWORD,
    PORT: parseInt(DB_PORT, 10),
    USER: DB_USERNAME
  },
  NODE_ENV,
  SERVER_PORT: parseInt(SERVER_PORT, 10)
}

export default config
