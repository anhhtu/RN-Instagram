import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import NewsFeed from '../components/NewsFeed'
import BottomBar from '../components/BottomBar'
import Stories from '../components/Stories'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
      <NewsFeed/>
      <BottomBar/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    alignSelf: 'center',
  }
})