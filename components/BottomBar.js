import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <Text>BottomBar</Text>
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        width: '100%'
    }
})