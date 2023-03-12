import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={
          require('../assets/Instagram.png')
        }
      />
      <View style={styles.abc}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'pink',
    height: 100,
    width: '100%',
},

  logo: {
    flex: 1,
    aspectRatio: 6,
    resizeMode: 'contain',
  },
});
