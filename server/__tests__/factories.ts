import factory from 'factory-girl'
import faker from 'faker'
import { User } from '../src/models/User'
import { ScheduleItem } from '../src/models/Schedule'

const subjects = ['Calculo', 'Matemática', 'História', 'Geografia', 'Português', 'Biologia', 'Física', 'Química']

export const aleatory = {
  user: (): User => {
    return new User({
      name: faker.name.findName(),
      avatar: faker.internet.avatar(),
      whatsapp: faker.phone.phoneNumber(),
      bio: faker.random.words(10),
    })
  },
  subject: (): string => subjects[faker.random.number({ min: 0, max: subjects.length - 1 })],
  cost: (min?: number, max?: number): number => faker.random.number({ min: min || 10, max: max || 500 }),
  time: (hours?: number, minutes?: number): string => {
    return `${
      hours || faker.random.number({ min: 0, max: 23 })
    }:${
      minutes || faker.random.number({ min: 0, max: 59 })
    }`
  }
}


// export const aleatorySubject = subjects[faker.random.number({ min: 0, max: subjects.length - 1 })]

// factory.define<User>('User', User, {
//   name: faker.name.findName(),
//   avatar: faker.internet.avatar(),
//   whatsapp: faker.phone.phoneNumber(),
//   bio: faker.random.words(30),
// })

// factory.define('Schedule', ScheduleItem, {
//   from: aleatory.time(8, 0),
//   to: aleatory.time(18, 0),
//   week_day: number
// })

export default factory