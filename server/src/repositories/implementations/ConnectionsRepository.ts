import { IConnectionsRepository } from '../IConnectionsRepository';
import { db } from '~/database/connection';

export class ConnectionsRepository implements IConnectionsRepository {
  async createConnection(user_id: number): Promise<void> {
    try {
      await db('connections').insert({ user_id })
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getTotalConnections(): Promise<number> {
    try {
      const [totalConnections] = await db('connections').count('* as total')
  
      const { total } = totalConnections
  
      return parseInt(total)
    } catch (error) {
      throw new Error(error.message);
    }
  }
}