import path from 'path'
import knex from 'knex'
import config from '../config'

const dbTest = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '..', '..', '__tests__', 'database.sqlite'),
  },
  useNullAsDefault: true,
})

const dbDefault = knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host : config.DB.HOST,
    user : config.DB.USER,
    password : config.DB.PASSWORD,
    database : config.DB.NAME
  },
  useNullAsDefault: true,
})

const db = config.NODE_ENV === 'test' ? dbTest : dbDefault

export { db }