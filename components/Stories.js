import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { USERS } from "../data/users";

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.storyWrapper}>
          <Image
            style={styles.addStory}
            source={require("../assets/user.png")}
          />
          <View style={styles.addStoryIcon}>
            <Image source={require('../assets/add.png')} style={{width: 11, height: 11}}/>
          </View>
          <Text style={{color: '#DBDBDB'}}>Your story</Text>
        </View>

        {USERS.map((story, index) => (
          <View style={styles.storyWrapper} key={index}>
            <View style={styles.storyAvatarWrapper}>
              <Image
                source={{ uri: story.avatar }}
                style={styles.storyAvatar}
              />
            </View>

            <Text style={styles.storyName}>
              {story.name.length > 11
                ? story.name.slice(0, 10).toLowerCase() + "..."
                : story.name.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },

  storyAvatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "black",
  },

  storyName: {
    color: "white",
    fontSize: 11.5,
  },

  storyWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },

  storyAvatarWrapper: {
    borderWidth: 2.5, 
    borderColor: '#FFBFA9', 
    borderRadius: 50, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 6
  },

  addStory: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginBottom: 5,
  },

  addStoryIcon: {
    width: 25,
    height: 25,
    backgroundColor: '#0095FC',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 42,
    top: 48,
  }
});
