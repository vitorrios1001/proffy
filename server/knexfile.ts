import path from 'path'
import config from './src/config'

module.exports = {
  client: 'pg',
  version: '7.2',
  connection: {
    host : config.DB.HOST,
    user : config.DB.USER,
    password : config.DB.PASSWORD,
    database : config.DB.NAME
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  useNullAsDefault: true,
};