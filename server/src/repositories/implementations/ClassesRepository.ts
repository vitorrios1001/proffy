import { IClassesRepository } from "../IClassesRepository";
import { ClassModel } from "../../models/ClassModel";
import { db } from "../../database/connection";
import { User } from "~/models/User";
import { ScheduleItem } from "~/models/Schedule";
import { convertHourToMinutes } from "~/utils/convertHourToMinutes";

export class ClassesRepository implements IClassesRepository {
  async getClassesFiltered(week_day: number, subject: string, timeInMinutes: number): Promise<ClassModel[]> {
    const classes = await db<ClassModel>('classes')
      .whereExists(function() {
        this.select('*')
          .from('class_schedule')
          .whereRaw('class_schedule.class_id = classes.id')
          .whereRaw('class_schedule.week_day = ??', [week_day])
          .whereRaw('class_schedule.from <= ??', [timeInMinutes])
          .whereRaw('class_schedule.to > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']).returning('classes')

    return classes
  }

  async save(user: User, subject: string, cost: number, schedule: ScheduleItem[]): Promise<void> {
    const trx = await db.transaction()

     try {
      const [user_id] = await trx('users').insert(user).returning('id')

      const [class_id] = await trx('classes').insert({
        subject,
        cost,
        user_id,
      }).returning('id')
  
      const classesSchedule = schedule.map((scheduleItem: ScheduleItem) => ({
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
        class_id,
      }))
  
      await trx('class_schedule').insert(classesSchedule)
  
      await trx.commit()
    } catch (error) {
      // console.log(error)
      await trx.rollback()
      throw new Error(error.message);
    }
  }
}