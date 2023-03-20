import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPostComponents/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost/>
    </SafeAreaView>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})