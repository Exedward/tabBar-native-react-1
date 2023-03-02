import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})