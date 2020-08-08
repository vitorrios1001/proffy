import React from 'react'

import whatsappIcon from '../../../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {

  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/29044736?s=460&u=e46b41d507610dce38d03e20822607f5a491182b&v=4" alt="Vitor Rios" />

        <div>
          <strong>Vitor Rios</strong>
          <span>Informática</span>
        </div>
      </header>

      <p>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
