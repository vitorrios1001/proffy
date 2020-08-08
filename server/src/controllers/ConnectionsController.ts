import { Request, Response } from "express"
import { db } from "../database/connection"

class ConnectionsController {
  async index(req: Request, res: Response) {
    const [totalConnections] = await db('connections').count('* as total')

    const { total } = totalConnections

    return res.status(200).json({ total })
  }
  
  async create(req: Request, res: Response) {
    const { user_id } = req.body

    if (!user_id) {
      return res.status(400).json({
        error: 'Field user_id is required'
      })
    }

    const [userFound] = await db('users').where('users.id', '=', user_id)

    if (!userFound) {
      return res.status(400).json({
        error: 'User not found'
      })
    }

    await db('connections').insert({ user_id })

    return res.status(200).send()
  }
}

export { ConnectionsController }