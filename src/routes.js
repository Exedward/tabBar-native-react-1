import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Search from './pages/Search'

import { Ionicons } from '@expo/vector-icons' //No react-native: react-native-vector-icons

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'white',
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
        <Tab.Screen name='Home' component={Home} options={
            {
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name='home' size={size} color={color}/>
                    }
                    return <Ionicons name='home-outline' size={size} color={color}/>
                }
            }
        }/>
        <Tab.Screen name='Profile' component={Profile} options={
            {
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name='person' size={size} color={color}/>
                    }
                    return <Ionicons name='person-outline' size={size} color={color}/>
                }
            }
        }/>
        <Tab.Screen name='Search' component={Search} options={
            {
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name='search' size={size} color={color}/>
                    }
                    return <Ionicons name='search-outline' size={size} color={color}/>
                }
            }
        }/>
        <Tab.Screen name='Favorites' component={Favorites} options={
            {
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name='bookmark' size={size} color={color}/>
                    }
                    return <Ionicons name='bookmark-outline' size={size} color={color}/>
                }
            }
        }/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})