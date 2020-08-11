import React, { ReactNode, ReactNodeArray } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import iconBack from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles'

interface Props {
  title: string
  headerRight?: ReactNode
  children?: ReactNode | ReactNodeArray
}

const Header = ({ title, headerRight, children }: Props) => {
  const { navigate } = useNavigation()
  const goBack = () =>{
    navigate('landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={goBack}>
          <Image source={iconBack} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" /> 
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>

        {headerRight}
      </View>

      {children}
    </View>
  )
}

export default Header
