import React from 'react'
import { useHistory } from 'react-router-dom'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'

import Header from '../../components/Header'
import Input from '../../components/Forms/Input'
import Select from '../../components/Forms/Select'
import Textarea from '../../components/Forms/Textarea'
import warningIcon from '../../assets/images/icons/warning.svg'
import CurrencyInput from '../../components/Forms/CurrencyInput'
import MaskedInput from '../../components/Forms/MaskedInput'

import { ScheduleItem, FormDataTeacher } from '../../models/teacherModel'
import { SUBJECT_LIST, WEEK_DAYS } from '../../constants'
import { useTeacherEffects } from '../../providers/teacherProvider'
import { setMessageErrors} from '../../utils/formValidation'
import { schema } from './validation'

import './styles.css'

const INITIAL_SCHEDULE: ScheduleItem = {
  week_day: 0,
  from: '',
  to: '',
}

const TeacherForm = () => {
  const history = useHistory()
  const formRef = React.useRef<FormHandles>(null)
  const [scheduleItems, setScheduleItems] = React.useState<ScheduleItem[]>([INITIAL_SCHEDULE])

  const { saveTeacher } = useTeacherEffects()

  const addNewScheduleItem = () => {
    setScheduleItems((items) => ([ ...items, INITIAL_SCHEDULE]))
  }

  const handleSubmit: SubmitHandler<FormDataTeacher> = async (data) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      const result = await saveTeacher(data)

      if (result) {
        history.push('/')
      }
    } catch (error) {
      setMessageErrors(error, formRef.current)
    }
  }

  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer das aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"  
      />

      <main>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="name" label="Nome completo" />
            <Input name="avatar" label="Avatar" />
            
            <MaskedInput
              mask="(99) 9 9999-9999"
              name="whatsapp"
              label="WhatsApp"
            />
            
            <Textarea name="bio" label="Biografia" />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              placeholder="Selecione uma matéria"
              options={SUBJECT_LIST}
            />

            <CurrencyInput
              name="cost"
              label="Custo da sua hora por aula"
            />
          
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button onClick={addNewScheduleItem} type="button">
                + Novo horário
              </button>
            </legend>

            {
              scheduleItems.map((item, idx) => (
                <div key={idx} className="schedule-item">
                  <Select
                    name={`schedule[${idx}].week_day`}
                    label="Dia da semana"
                    options={WEEK_DAYS}
                  />

                  <Input name={`schedule[${idx}].from`} label="Das" type="time" />
                  <Input name={`schedule[${idx}].to`} label="Até" type="time" />
                </div>
              ))
            }
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button onClick={() => formRef.current?.submitForm()} type="button">
              Salvar cadastro
            </button>
          </footer>
        </Form>
      </main>
    </div>
  )
}

export default TeacherForm
