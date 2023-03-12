import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../assets/Instagram.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <View style={styles.icons}>
            <Image
              source={require("../assets/more.png")}
              style={styles.plusButton}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.icons}>
            <Image
              source={require("../assets/messenger.png")}
              style={styles.messenger}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  logo: {
    flex: 1,
    aspectRatio: 2,
    resizeMode: "contain",
  },

  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 95,
  },

  plusButton: {
    width: 28,
    height: 28,
  },

  messenger: {
    width: 28,
    height: 28,
  },

  icons: {
    padding: 5,
  }
});
