import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'
import Filter from '../../components/Filter'

import { useTeacherState } from '../../providers/teacherProvider'

import styles from './styles'

const TeacherListContainer = () => {
  const [showFilter, setShowFilter] = React.useState(false)

  const { teachers } = useTeacherState()

  const toggleFilterVisible = () => {
    setShowFilter(!showFilter)
  }

  return (
    <View style={styles.constainer}>
      <Header
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={toggleFilterVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        )}
      >
        {showFilter && <Filter />}
      </Header>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {
          teachers.map(teacher => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default TeacherListContainer
