import request from 'supertest'
import app from '../../src/server'
import { truncate } from '../utils/database'
import { aleatory } from '../factories'
import { ClassesRepository } from '../../src/repositories/implementations/ClassesRepository'

describe('Connections route', () => {
  beforeEach(async () => {
    await truncate()
  })

  const classesRepository = new ClassesRepository()

  it('should be get total of connections', async () => {
    const resp = await request(app).get('/connections')

    expect(resp.status).toBe(200)
  });

  it('should be error to create a connection without user_id', async () => {
    const resp = await request(app).post('/connections')

    expect(resp.body.message).toBe('Field user_id is required')
  })

  it('should be to create a connection with success', async () => {
    const user = aleatory.user()
    const subject = aleatory.subject()
    const cost = aleatory.cost()
    const schedule = []

    const week = [1,3,4]
    
    week.forEach(week_day => {
      const item = {
        week_day,
        from: aleatory.time(8),
        to: aleatory.time(18),
      }
      schedule.push(item)
    });

    await classesRepository.save(user, subject, cost, schedule)

    await classesRepository.getClassesFiltered(1, subject, 9 * 60)

    const resp = await request(app).post('/connections').send({ user_id: 1 })

    expect(resp.status).toBe(400)
  })

  afterAll((done) => {
   done()
  })
})
