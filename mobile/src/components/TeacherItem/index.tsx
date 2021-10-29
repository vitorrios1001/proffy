import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { Teacher } from '../../models/teacherModel'
import { useFavoriteEffects, useFavoriteState } from '../../providers/favoriteProvider'

import iconHeartOutline from '../../assets/images/icons/heart-outline.png'
import iconUnFavorite from '../../assets/images/icons/unfavorite.png'
import iconWhatsapp from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

interface Props {
  teacher: Teacher
}

const TeacherItem = ({ teacher }: Props) => {
  const [favorited, setFavorited] = React.useState(false)
  const { toggleFavoriteTeacher } = useFavoriteEffects()
  const { favoriteds } = useFavoriteState()

  React.useEffect(() => {
    setFavorited(!!favoriteds.find(favorited => favorited.id === teacher.id))
    console.log('Mudou')
  }, [favoriteds])

  // const favorited = !!favoriteds.find(favorited => favorited.id === teacher.id)

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.cost}>
          Preço/hora {'    '}
          <Text style={styles.costValue}>
            {teacher.cost}
          </Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={() => toggleFavoriteTeacher(teacher)}
            style={[styles.favoriteButton, favorited && styles.favorited]}
          >
            {
              favorited
                ? <Image source={iconUnFavorite} />
                : <Image source={iconHeartOutline} />
            }
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={iconWhatsapp} />
            <Text style={styles.contactButtonText}>
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
