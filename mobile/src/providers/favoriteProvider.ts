import constate from 'constate'
import { Teacher } from '../models/teacherModel'
import useStatePersisted from '../hooks/useStatePersisted'

const KEY_TEACHERS_FAVORITED = 'KEY_TEACHERS_FAVORITED'

const useFavorite = () => {
  const [favoriteds, setFavoriteds] = useStatePersisted<Teacher[]>(KEY_TEACHERS_FAVORITED, [])

  const toggleFavoriteTeacher = (teacherSelected: Teacher) => {
    const teacherFound = favoriteds.find(teacher  => teacher.id === teacherSelected.id)

    if (teacherFound) {
      const newList = favoriteds.filter(teacher => teacher.id !== teacherSelected.id)

      setFavoriteds(newList)
      return
    }

    if (teacherSelected) {
      setFavoriteds([...favoriteds, teacherSelected])
    }
  }

  return {
    state: {
      favoriteds,
    },
    effects: {
      toggleFavoriteTeacher,
    }
  }
}

const [FavoriteProvider, useFavoriteState, useFavoriteEffects] = constate(
  useFavorite,
  value => ({ ...value.state }),
  value => ({ ...value.effects })
)

export { FavoriteProvider, useFavoriteState, useFavoriteEffects }
