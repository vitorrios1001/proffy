import knex from 'knex'
import path from 'path'

const filename = process.env.NODE_ENV === 'production'
  ? path.resolve(__dirname, '..', '..', '..', 'database', 'database.sqlite')
  : path.resolve(__dirname, '..', '..', 'database', 'database.sqlite')

const db = knex({
  client: 'sqlite3',
  connection: {
    filename,
  },
  useNullAsDefault: true,
})

export { db }