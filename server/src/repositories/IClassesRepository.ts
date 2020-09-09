import { ClassModel } from "~/models/ClassModel";
import { ScheduleItem } from "~/models/Schedule";
import { User } from "~/models/User";

export interface IClassesRepository {
  getClassesFiltered(week_day: number, subject: string, timeInMinutes: number): Promise<ClassModel[]>;
  save(user: User, subject: string, cost: number, schedule: ScheduleItem[]): Promise<void>;
}