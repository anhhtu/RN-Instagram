import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewsFeed = () => {
  return (
    <View style={styles.container}>
      <Text>NewsFeed</Text>
    </View>
  )
}

export default NewsFeed

const styles = StyleSheet.create({
    container: {
        flex: 12,
        backgroundColor: 'pink',
    }
})