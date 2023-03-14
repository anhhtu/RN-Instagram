import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Divider width={0.5} color="#828282" />
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={styles.postHeader}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles.postProfilePicture}
        source={{ uri: post.profilePicture }}
      />
      <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
        {post.username}
      </Text>
    </View>

    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12,
      }}
    >
      <Image
        style={{ width: 22, height: 22 }}
        source={require("../assets/dots.png")}
      />
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{}}>
    <Image
      source={{ uri: post.imageURL }}
      style={{resizeMode: 'cover', aspectRatio:1 }}
    />
  </View>
);

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },

  postHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  postProfilePicture: {
    width: 35,
    height: 35,
    borderRadius: 40,
    margin: 10,
  },
});
