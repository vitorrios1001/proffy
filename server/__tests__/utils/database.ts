import { db } from '../../src/database/connection'

const tables = [
  'users',
  'classes',
  'class_schedule',
  'connections',
]

function truncate () {
  return Promise.all(tables.map(table => {
    return db.raw(`DELETE FROM ${table}`)
  }))
};

export {
  truncate
}
