import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Search from './pages/Search'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
                position: 'absolute',
                backgroundColor: '#999',
                borderTopWidth: 0,

                bottom: 10,
                lef: 5,
                right: 5,
                elevation: 0,
                borderRadius: 7,
                height: 30,
            }
        }}
    >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Profile' component={Profile}/>
        <Tab.Screen name='Search' component={Search}/>
        <Tab.Screen name='Favorites' component={Favorites}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})