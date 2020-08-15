import express from 'express'
import { ClassesController } from '../controllers/ClassesController'
import { ConnectionsController } from '../controllers/ConnectionsController'

import { validateRecaptcha } from '../middlewares/recaptcha'

const routes = express.Router()
const classesController = new ClassesController()
const connectionsController = new ConnectionsController()

routes.get('/', (req, res) => res.status(200).json({ status: 'Online api' }))

routes.get('/classes', classesController.index )
routes.post('/classes', validateRecaptcha, classesController.create )

routes.get('/connections', connectionsController.index )
routes.post('/connections', connectionsController.create )

export default routes
