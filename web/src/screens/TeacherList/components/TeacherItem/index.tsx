import React from 'react'

import { TeacherResponse } from '../../../../models/teacherModel'
import { formatterCurrencyValue } from '../../../../utils/formatter'
import { useConnectionsEffects } from '../../../../providers/connectionsProvider'
import { onlyNumbers } from '../../../../utils/numbers'

import whatsappIcon from '../../../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface Props {
  teacher: TeacherResponse
}

const TeacherItem = ({ teacher }: Props) => {
  const { createNewConnection } = useConnectionsEffects()

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{formatterCurrencyValue(teacher.cost)}</strong>
        </p>
        <a
          href={`https://wa.me/${onlyNumbers(teacher.whatsapp)}`}
          onClick={() => createNewConnection(teacher.user_id)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
