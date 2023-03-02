import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

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