import React from 'react'
import constate from 'constate'
import api from '../services/api'

import { Teacher } from '../models/teacherModel'
// import useStatePersisted from '../hooks/useStatePersisted'

// const KEY_TEACHERS_FAVORITED = 'KEY_TEACHERS_FAVORITED'

const useTeacher = () => {
  const [teachers, setTeachers] = React.useState<Teacher[]>([])
  // const [favoriteds, setFavoriteds] = useStatePersisted<Teacher[]>(KEY_TEACHERS_FAVORITED, [])

  const getTeachersFiltered = async (subject: string, weekDay: string, time: string) => {
    const { data, ok } = await api.get<Teacher[]>(`/classes?week_day=${weekDay}&subject=${subject}&time=${time}`)

    if (ok && data) {
      setTeachers(data)
    }
  }

  // const toggleFavoriteTeacher = (idTeacher: number) => {
  //   const teacherFound = favoriteds.find(teacher  => teacher.id === idTeacher)

  //   if (teacherFound) {
  //     const newList = favoriteds.filter(teacher => teacher.id !== idTeacher)

  //     setFavoriteds(newList)
  //     return
  //   }

  //   const teacherFavorited = teachers.find(teacher  => teacher.id === idTeacher)

  //   if (teacherFavorited) {
  //     setFavoriteds([...favoriteds, teacherFavorited])
  //   }
  // }

  return {
    state: {
      teachers,
      // favoriteds,
    },
    effects: {
      getTeachersFiltered,
      // toggleFavoriteTeacher,
    }
  }
}

const [TeacherProvider, useTeacherState, useTeacherEffects] = constate(
  useTeacher,
  value => ({ ...value.state }),
  value => ({ ...value.effects })
)

export { TeacherProvider, useTeacherState, useTeacherEffects }
