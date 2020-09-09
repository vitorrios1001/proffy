import { Transaction } from "knex";
import { IUsersRepository } from "~/repositories/IUsersRepository";
import { db } from "~/database/connection";
import { User } from "~/models/User";

export class UsersRepository implements IUsersRepository {
  async getUserById(id: number) {
    try {
      const [user] = await db('users').where('id', id).select('*')

      return user
    } catch (error) {
      return error
    }
  }

  async createUser(user: User) {
    const [id] = await db('users').insert(user).returning('id')

    return id
  }
}