import { Router } from 'express'

import connectionsRouter from './connetionsRouter'
import classesRouter from './classesRouter'

const routes = Router()

routes.get('/', (req, res) => res.status(200).json({ status: 'Online api' }))

routes.use(connectionsRouter)
routes.use(classesRouter)

export default routes
