import { IClassesRepository } from "~/repositories/IClassesRepository";
import { convertHourToMinutes } from "~/utils/convertHourToMinutes";
import { IUsersRepository } from "~/repositories/IUsersRepository";
import { db } from "~/database/connection";
import { User } from "~/models/User";
import { ClassModel } from "~/models/ClassModel";

export class ClassesService {
  constructor(
    private classesRepository: IClassesRepository,
    private usersRepository: IUsersRepository,
  ) {}

  async getClasses(week_day: number, subject: string, time: string) {
    if (week_day < 0 || !Boolean(subject) || !Boolean(time)) {
      throw new Error('Missing filters to search classes.');
    }

    const timeInMinutes = convertHourToMinutes(time)

    const classes = await this.classesRepository.getClassesFiltered(week_day, subject, timeInMinutes)

    return classes
  }

  async createClass(body: any) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = body

    
    const user = new User({ name, bio, avatar, whatsapp })

    await this.classesRepository.save(user, subject, cost, schedule)
  }
}