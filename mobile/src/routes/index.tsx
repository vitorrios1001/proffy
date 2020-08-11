import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../screens/Landing'
import GiveClasses from '../screens/GiveClasses'
import StudyTabs from './StudyTabs'

const { Navigator, Screen } = createStackNavigator()

const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }} >
          <Screen name="landing" component={Landing} />
          <Screen name="give-classes" component={GiveClasses} />
          <Screen name="study" component={StudyTabs} />
        </Navigator>
      </NavigationContainer>
    </>
  )
}

export default Routes

