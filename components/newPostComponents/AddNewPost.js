import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormPostUpload from "./FormPostUpload";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormPostUpload />
    </View>
  );
};

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{
          uri: "https://cvws.icloud-content.com/B/AZIqFXgVf1vtxxS7iSl_UV7TxsL3AURs5tJxR8Vxxewo6pvpCNhe51zQ/back.png?o=AjajQvbzA4BqNV1FiBXgTHlc873o4es825oFZnQRbV2i&v=1&x=3&a=CAogQPOP1Ng4vGUB5g7JvSVs8JMDy0tLHMt3swn_5RePpQMSbxDNyNbm7zAYzaWy6O8wIgEAUgTTxsL3WgRe51zQaifPXO3yXrPeKnbX5d9V2o_UeuMCTR6sau1OKvndJWYg3Te7TMpkkXdyJ95aMkj_UNYH5R8cT4KNuZHjTxyZYeSH91r4dTMSEd2TmKRhRn7-pQ&e=1679282705&fl=&r=09c356ad-bdab-4420-93bb-5fcfa0302107-1&k=9rAPA1vLPGlHVlpX9-k91w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=cRuIQng_0zyf8DnTUKFPq8VfWNA&cd=i",
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>

    <Text style={styles.titleText}>New post</Text>
    <TouchableOpacity>
      <Text style={styles.shareText}>Share</Text>
    </TouchableOpacity>
  </View>
);

export default AddNewPost;

const styles = StyleSheet.create({
  container: {},

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  titleText: {
    color: "white",
    fontWeight: "600",
    fontSize: 17,
    paddingLeft: 18,
  },

  shareText: {
    color: "#2a82ed",
    fontWeight: "600",
    fontSize: 17,
  },
});
