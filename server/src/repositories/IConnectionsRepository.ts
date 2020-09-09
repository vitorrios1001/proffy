export interface IConnectionsRepository {
  getTotalConnections(): Promise<number>;
  createConnection(user_id: number): Promise<void>;
}