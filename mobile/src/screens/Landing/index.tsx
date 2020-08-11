import React from 'react'

import LandingContainer from '../../containers/LandingContainer'
import { ConnectionsProvider } from '../../providers/connectionsProvider'

const Landing = () => {
  
  return  (
    <ConnectionsProvider>
      <LandingContainer />
    </ConnectionsProvider>
  )
}

export default Landing
