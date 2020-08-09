import React from 'react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import Header from '../../components/Header'
import TeacherItem from './components/TeacherItem'
import Input from '../../components/Forms/Input'
import Select from '../../components/Forms/Select'

import { setMessageErrors } from '../../utils/formValidation'
import { useTeacherEffects, useTeacherState } from '../../providers/teacherProvider'
import { WEEK_DAYS, SUBJECT_LIST } from '../../constants'

import searchIcon from '../../assets/images/icons/search.svg'

import './styles.css'

interface FormData {
  week_day: string
  subject: string
  time: string
}

const schema = Yup.object().shape({
  subject: Yup.string().required('Selecione a matéria'),
  week_day: Yup.string().required('Informe o dia da semana'),
  time: Yup.string().required('Informe o horário'),
});

const TeacherList = () => {
  const formRef = React.useRef<FormHandles>(null)

  const { getTeachers } = useTeacherEffects()
  const { teachers } = useTeacherState()

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await schema.validate(data, { abortEarly: false })

      formRef.current?.setErrors({})

      const { subject, time, week_day } = data

      await getTeachers(week_day, subject, time)
    } catch (error) {
      setMessageErrors(error, formRef.current)
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis">
        <Form ref={formRef} onSubmit={handleSubmit} id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={SUBJECT_LIST}
          />
          
          <Select
            name="week_day"
            label="Dia da Semana"
            options={WEEK_DAYS}
          />
          <Input name="time" type="time" label="Hora" />

          <button type="submit">
            <img src={searchIcon} alt="Filtrar" />
            <span>
              Filtrar
            </span>
          </button>
        </Form>
      </Header>

      <main>
        {
          teachers.map((teacher) => (
            <TeacherItem teacher={teacher} key={teacher.id}/>
          ))
        }
      </main>
    </div>
  )
}

export default TeacherList
