import { Request, Response } from "express"
import { convertHourToMinutes } from "../utils/convertHourToMinutes"
import { ScheduleItem } from "../models/Schedule"
import { db } from "../database/connection"

class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query

    const subject = filters.subject as string
    const week_day = Number(filters.week_day)
    const time = filters.time as string

    if (week_day < 0 || !Boolean(subject) || !Boolean(time)) {
      return res.status(400).json({
        error: 'Missing filters to search classes',
      })
    }

    const timeInMinutes = convertHourToMinutes(time)

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [week_day])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])

    return res.status(200).json(classes)
  }
  
  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body
    
    const trx = await db.transaction()
    
    try {
      const [user_id] = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      })
  
      const [class_id] = await trx('classes').insert({
        subject,
        cost,
        user_id,
      })
  
      const classesSchedule = schedule.map((scheduleItem: ScheduleItem) => ({
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
        class_id,
      }))
  
      await trx('class_schedule').insert(classesSchedule)
  
      await trx.commit()
    } catch (error) {
      await trx.rollback()
      
      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  
    return res.status(201).json({ message: 'Class created with success' })
  }
}

export { ClassesController }