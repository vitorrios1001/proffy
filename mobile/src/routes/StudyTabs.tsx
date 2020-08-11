import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../screens/TeacherList'
import Favorites from '../screens/Favorites'

import { COLORS } from '../constants/colors'
import { FONTS } from '../constants/fonts'

const { Navigator, Screen } = createBottomTabNavigator()

const StudyTabs = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },

        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },

        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },

        labelStyle: {
          fontFamily: FONTS.Archivo_700Bold,
          fontSize: 13,
          marginLeft: 16,
        },

        inactiveBackgroundColor: COLORS.inactiveTabBg,
        activeBackgroundColor: COLORS.activeTabBg,
        
        inactiveTintColor: COLORS.inactiveTabColor,
        activeTintColor: COLORS.activeTabColor,

      }}
    >
      <Screen
        name="teacher-list"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-easel"
              color={focused ? COLORS.primary : color}
              size={size}
            />
          )
        }}
      />
      <Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart"
              color={focused ? COLORS.primary : color}
              size={size}
            />
          )
        }}
      />
    </Navigator>
  )
}

export default StudyTabs
