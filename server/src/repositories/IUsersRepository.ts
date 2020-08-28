import { User } from "~/models/User";

export interface IUsersRepository {
  getUserById(id: number): Promise<User>
  createUser(user: User): Promise<number>
}