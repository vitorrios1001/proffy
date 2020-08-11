import React from 'react'

import FavoritesContainer from '../../containers/FavoritesContainer'
import { FavoriteProvider } from '../../providers/favoriteProvider'

const Favorites = () => {
  return (
    <FavoriteProvider>
      <FavoritesContainer />
    </FavoriteProvider>
  )
}

export default Favorites
