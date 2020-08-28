import request from 'supertest'
import app from '../../src/server'
import { truncate } from '../utils/database'

describe('Connections route', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should be get total of connections', async () => {
    const resp = await request(app).get('/connections')

    expect(resp.status).toBe(200)
  });

  it('should be error to create a connection without user_id', async () => {
    const resp = await request(app).post('/connections')

    expect(resp.status).toBe(400)
  })

  afterAll((done) => {
   done()
  })
})
