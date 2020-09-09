import { db } from '../../src/database/connection'

const tables = [
  'users',
  'classes',
  'class_schedule',
  'connections',
]

async function truncate () {
  return Promise.all(tables.map(table => {
    return db.raw(`TRUNCATE TABLE ${table} CASCADE;`)
  }))
};

export {
  truncate
}
