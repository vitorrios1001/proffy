import React from 'react'
import { View, ScrollView } from 'react-native'

import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'

import { useFavoriteState } from '../../providers/favoriteProvider'

import styles from './styles'

const FavoritesContainer = () => {
  const { favoriteds } = useFavoriteState()

  return (
    <View style={styles.constainer}>
      <Header title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {
          favoriteds.map(teacher => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default FavoritesContainer
