import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { useConnectionsState, useConnectionsEffects } from '../../providers/connectionsProvider'

import imgLanding from '../../assets/images/landing.png'
import iconStudy from '../../assets/images/icons/study.png'
import iconGiveClasses from '../../assets/images/icons/give-classes.png'
import iconHeart from '../../assets/images/icons/heart.png'

import styles from  './styles'

const LandingContainer = () => {
  const { navigate } = useNavigation()
  
  const { totalConnections } = useConnectionsState()
  const { getTotalConnections } = useConnectionsEffects()
  
  React.useEffect(() => {
    getTotalConnections()
  }, [])

  const handleNavigateToGiveClassesPage = () => {
    navigate('give-classes')
  }

  const handleNavigateToStudyPages = () => {
    navigate('study')
  }

  return  (
    <View style={styles.container}>
      <Image source={imgLanding} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={iconStudy} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={iconGiveClasses} />

          <Text style={styles.buttonText}>Dar aula</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={iconHeart} />
      </Text>
    </View>
  )
}

export default LandingContainer
