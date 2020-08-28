import { ConnectionsRepository } from '../../src/repositories/implementations/ConnectionsRepository'
import { ClassesRepository } from '../../src/repositories/implementations/ClassesRepository'
import { truncate } from '../utils/database'
import { aleatory } from '../factories'

describe('Connections', () => {
  beforeEach(async () => {
    await truncate()
  })

  const connectionsRepository = new ConnectionsRepository()
  const classesRepository = new ClassesRepository()

  it('should be get 0 connections', async () => {
    const totalConnections = await connectionsRepository.getTotalConnections()

    expect(totalConnections).toBe(0)
  })

  it('should be get 1 connections', async () => {
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

    await connectionsRepository.createConnection(1)

    const totalConnections = await connectionsRepository.getTotalConnections()

    expect(totalConnections).toBe(1)
  })
})