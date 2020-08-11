import React from 'react'

import TeacherListContainer from '../../containers/TeacherListContainer'
import { TeacherProvider } from '../../providers/teacherProvider'
import { FavoriteProvider } from '../../providers/favoriteProvider'

const TeacherList = () => {
  return (
    <TeacherProvider>
      <FavoriteProvider>
        <TeacherListContainer />
      </FavoriteProvider>
    </TeacherProvider>
  )
}

export default TeacherList
