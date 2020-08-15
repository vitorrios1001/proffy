import * as http from 'http'
import config from './config'
import { db } from './database/connection'
import server from './server'

const PORT = config.SERVER_PORT

async function onStart(): Promise<any> {
  try {
    await db('knex_migrations').count()
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err)
    throw err
  }
}

const currentServer = http.createServer({} , server)

currentServer.listen(PORT, onStart)
// tslint:disable-next-line:no-console
console.log(`Server up and running on https://localhost:${PORT}`)
console.log(`Started in env: ${config.NODE_ENV}`)