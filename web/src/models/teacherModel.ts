export interface FormDataTeacher {
  name: string
  avatar: string
  whatsapp: string
  bio: string
  subject: string
  cost: string
  schedule: ScheduleItem[]
}

export interface TeacherResponse {
  id: number
  subject: string
  cost: number
  user_id: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
}

export interface ScheduleItem {
  week_day: number
  from: string
  to: string
}
