import { Router } from 'express'

import { ConnectionsController } from '../controllers/ConnectionsController'
import { ConnectionsRepository } from '../repositories/implementations/ConnectionsRepository'
import { ConnectionsService } from '../services/ConnectionsService'
import { UsersRepository } from '../repositories/implementations/UsersRepository'

const router = Router()

const connectionsRepository = new ConnectionsRepository()
const usersRepository = new UsersRepository()

const connectionsService = new ConnectionsService(
  connectionsRepository,
  usersRepository,
)

const connectionsController = new ConnectionsController(connectionsService)

router.get('/connections', (req, res) => {
  return connectionsController.index(req, res)
})

router.post('/connections', (req, res) => {
  return connectionsController.create(req, res)
})


export default router
