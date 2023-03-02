import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.texto}>Edu 1.</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.texto}>Edu 2.</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.texto}>Edu 3.</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.texto}>Edu 4.</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.texto}>Edu 5.</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.texto}>Edu 6.</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.texto}>Edu 7.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#666',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      width: '90%',
      height:'25%',
      backgroundColor: '#222',
    },
    texto:{
      fontSize: 20,
    }
  });
  