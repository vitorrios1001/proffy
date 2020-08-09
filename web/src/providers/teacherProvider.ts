import React from 'react'
import constate from 'constate'
import { toast } from 'react-toastify'

import { FormDataTeacher, TeacherResponse } from '../models/teacherModel'

import api from '../service'

const useTeacher = () => {
  const [teachers, setTeachers] = React.useState<TeacherResponse[]>([])

  const getTeachers = async (week_day: string, subject: string, time: string) => {
    const { data, ok } = await api.get<TeacherResponse[]>(`/classes?week_day=${week_day}&subject=${subject}&time=${time}`)

    if (!ok) {
      toast('Ocorreu um erro ao tentar buscar o professores. Verifique os campos e tente novamente!', { type: 'error' })
      return
    }

    if (data) {
      setTeachers(data)
    }
  }

  const saveTeacher = async (dataForm: FormDataTeacher) => {
    const { ok } = await api.post('/classes', dataForm)

    if (!ok) {
      toast('Deu ruim! Verifique os campos e tente novamente.', { type: 'error' })
      return false
    }
    
    toast('Uhuul! Dados cadastrados com sucesso.', { type: 'success' })

    return true
  }

  return {
    state: {
      teachers,
    },
    effects: {
      getTeachers,
      saveTeacher,
    }
  }
}

const [TeacherProvider, useTeacherState, useTeacherEffects] = constate(
  useTeacher,
  value => ({ ...value.state }),
  value => ({ ...value.effects }),
)

export { TeacherProvider, useTeacherState, useTeacherEffects }