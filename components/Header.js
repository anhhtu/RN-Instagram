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
          <View style={styles.iconsWrapper}>
            <Image
              source={require("../assets/more.png")}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.iconsWrapper}>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>1</Text>
            </View>
            <Image
              source={require("../assets/messenger.png")}
              style={styles.icon}
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

  icon: {
    width: 28,
    height: 28,
  },

  iconsWrapper: {
    padding: 5,
  },

  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 21,
    width: 20,
    height: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  }
});
