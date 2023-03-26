import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}></View>

      <View style={styles.middleView}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/Instagram.png")}/>
        </View>
        <TextInput/>
        <TextInput/>

      </View>

      <View style={styles.bottomView}></View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },

    topView: {
        flex: 1,
        backgroundColor: 'cyan',
    },


    middleView: {
        flex: 12,
        backgroundColor: 'white',
    },
    logoContainer: {
        height: 200,
        backgroundColor: 'pink',
        alignItems: 'center'
    },
    logo: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain',
    },

    bottomView: {
        flex: 1,
        backgroundColor: 'cyan',

    }

})