import { Request, Response } from "express"
import { ClassesService } from "~/services/ClassesService"

class ClassesController {
  constructor(
    private classesService: ClassesService,
  ) { }

  async index(req: Request, res: Response) {
    try {
      const filters = req.query

      const subject = filters.subject as string
      const week_day = Number(filters.week_day)
      const time = filters.time as string

      const classes = await this.classesService.getClasses(week_day, subject, time)

      return res.status(200).json(classes)
    } catch (error) {
      return res.status(400).json({ message: error.message || 'Unexpected error' })
    }
  }

  async create(req: Request, res: Response) {
    try {
      await this.classesService.createClass(req.body)

      return res.status(201).json({ message: 'Class created with success' })
    } catch (error) {
      return res.status(400).json({ message: error.message || 'Unexpected error' })
    }
  }
}

export { ClassesController }