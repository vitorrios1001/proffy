import { Request, Response } from "express"
import { ConnectionsService } from "../services/ConnectionsService"

class ConnectionsController {
  constructor(
    private connectionsService: ConnectionsService
  )
  {}

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const total = await this.connectionsService.totalConnnections()

      return res.status(200).json({ total })
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
  
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { user_id } = req.body

      if (!user_id) {
        return res.status(400).json({
          error: 'Field user_id is required'
        })
      }

      await this.connectionsService.createConnection(user_id)

      return res.status(200)
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}

export { ConnectionsController }