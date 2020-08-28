import { IConnectionsRepository } from "../repositories/IConnectionsRepository";
import { IUsersRepository } from "~/repositories/IUsersRepository";

export class ConnectionsService {
  constructor(
    private connectionsRepository: IConnectionsRepository,
    private usersRepository: IUsersRepository
  ) {}

  async totalConnnections() {
    const result = await this.connectionsRepository.getTotalConnections()
    
    return result
  }

  async createConnection(user_id: number) {
    const userFound = await this.usersRepository.getUserById(user_id)

    if (!userFound) {
      throw new Error('User not exists.');
    }

    return await this.connectionsRepository.createConnection(user_id)
  }
}