import knex from 'knex'
import config from '../config'

const db = knex({
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

export { db }