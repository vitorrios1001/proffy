import { Router } from 'express'
import { ClassesRepository } from '~/repositories/implementations/ClassesRepository'
import { ClassesService } from '~/services/ClassesService'
import { ClassesController } from '~/controllers/ClassesController'
import { UsersRepository } from '~/repositories/implementations/UsersRepository'

const router = Router()

const classesRepository = new ClassesRepository()
const usersRepository = new UsersRepository()

const classesService = new ClassesService(
  classesRepository,
  usersRepository,
)

const classesController = new ClassesController(classesService)

router.get('/classes', (req, res) => {
  return classesController.index(req, res)
})

router.post('/classes', (req, res) => {
  return classesController.create(req, res)
})

export default router
