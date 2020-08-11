import React from 'react'
import { View, Text, ImageBackground, Linking, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import imgBgGiveClasses from '../../assets/images/give-classes-background.png'

import styles from './styles'

const urlWebPlataform = 'https://google.com.br'

const GiveClassesContainer = () => {
  const handleOpenWebPlataform = () => {
    Linking.canOpenURL(urlWebPlataform).then(supported => {
      if (supported) {
        Linking.openURL(urlWebPlataform)
      } else {
        Alert.alert('Seu dispositivo não possui suporte para abrir páginas web')
      }
    })
  }

  return  (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={imgBgGiveClasses}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleOpenWebPlataform} style={styles.button}>
        <Text style={styles.textButton}>Vamos lá</Text>
      </RectButton>
    </View>
  )
}

export default GiveClassesContainer
