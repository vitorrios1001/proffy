import * as dotEnvSafe from 'dotenv-safe'
import * as path from 'path'
let envPath = '.env'

if (process.env.NODE_ENV !== 'production') {
  envPath = `${envPath}.development`
}

dotEnvSafe.config({
  allowEmptyValues: true,
  path: path.resolve(process.cwd(), envPath),
})

type EnvType = 'development' | 'production'

type LoggingLevelType = 
  |'error'
  |'warn'
  |'info'
  |'http'
  |'verbose'
  |'debug'
  |'silly'

type LoggingType = 'tiny' | 'short' | 'combined' | 'common' | 'dev'

interface Config {
  readonly DB: {
    readonly HOST: string
    readonly NAME: string
    readonly PASSWORD: string
    readonly PORT: number
    readonly USER: string
  }

  readonly RECAPTCHA: {
    readonly SECRET_KEY: string
  }

  readonly LOGGING: {
    readonly TYPE: LoggingType
    readonly LEVEL: LoggingLevelType
    readonly ERROR_FILE: string
    readonly COMBINED_FILE: string
  }

  readonly NODE_ENV: EnvType
  readonly SERVER_PORT: number
}

const {
  SERVER_PORT = '3333',
  NODE_ENV = 'development',
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT = '5432',
  DB_USERNAME,
  RECAPTCHA_SECRET_KEY,
  LOGGING_COMBINED_FILE = 'combined.log',
  LOGGING_ERROR_FILE = 'server.log',
  LOGGING_LEVEL = 'info',
  LOGGING_TYPE = 'short',
} = process.env

const config: Config = {
  DB: {
    HOST: DB_HOST as string,
    NAME: DB_NAME as string,
    PASSWORD: DB_PASSWORD as string,
    PORT: parseInt(DB_PORT, 10),
    USER: DB_USERNAME as string
  },

  RECAPTCHA: {
    SECRET_KEY: RECAPTCHA_SECRET_KEY as string
  },

  LOGGING: {
    COMBINED_FILE: LOGGING_COMBINED_FILE as string,
    ERROR_FILE: LOGGING_ERROR_FILE as string,
    LEVEL: LOGGING_LEVEL as LoggingLevelType,
    TYPE: LOGGING_TYPE as LoggingType,
  },

  NODE_ENV: NODE_ENV as EnvType,
  SERVER_PORT: parseInt(SERVER_PORT, 10)
}

export default config
