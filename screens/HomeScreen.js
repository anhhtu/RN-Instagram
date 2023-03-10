import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import BottomBar from "../components/BottomBar";
import Stories from "../components/Stories";
import { POSTS } from "../data/posts";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <View style={{ flex: 12 }}>
        <ScrollView>
          {POSTS.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ScrollView>
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
  },
});
