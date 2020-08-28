import path from 'path'
import config from './src/config'

const migrations = {
  directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
}

const connectionDefault = {
  client: 'pg',
  version: '7.2',
  connection: {
    host : config.DB.HOST,
    user : config.DB.USER,
    password : config.DB.PASSWORD,
    database : config.DB.NAME
  },
  migrations,
  useNullAsDefault: true,
}

const connectionTest = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '__tests__', 'database.sqlite'),
  },
  migrations,
  useNullAsDefault: true,
}

const dbConnection = config.NODE_ENV === 'test' ? connectionTest : connectionDefault

module.exports = dbConnection