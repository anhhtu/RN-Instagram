import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignSelf: 'center',
  }
})