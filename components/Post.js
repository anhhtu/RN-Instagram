import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Divider width={0.5} color="#383838" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ padding: 15 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
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
      style={{ resizeMode: "cover", aspectRatio: 1 }}
    />
  </View>
);

const PostFooter = () => (
  <View style={styles.postFooterIcons}>
    <View
      style={{
        flexDirection: "row",
        width: "30%",
        justifyContent: "space-between",
      }}
    >
      <Icon imgStyle={styles.footerIcon} imgURL={postFooterIcons[0].imageURL} />
      <Icon imgStyle={styles.footerIcon} imgURL={postFooterIcons[1].imageURL} />
      <Icon imgStyle={styles.footerIcon} imgURL={postFooterIcons[2].imageURL} />
    </View>
    <Icon imgStyle={styles.footerIcon} imgURL={postFooterIcons[3].imageURL} />
  </View>
);

const Icon = ({ imgStyle, imgURL }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgURL }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ marginTop: 10 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <Text style={{ color: "white", marginTop: 6 }}>
    <Text style={{ fontWeight: "600" }}>{post.username} </Text>
    <Text>{post.caption}</Text>
  </Text>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 6 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View{post.comments.length > 1 ? " all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View style={{ marginTop: 4 }} key={index}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment.username}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const postFooterIcons = [
  {
    name: "Like",
    imageURL:
      "https://cvws.icloud-content.com/B/AcSN3at8FBhIBMh-OzRgcB0Merx4ASyd0rI-AZCLQ0xbjS6uA8uaXRJ7/heart.png?o=AtSA0OIFfyln1tPt6mmqLwVtsGJ_BEmTbYDzCgzglWt6&v=1&x=3&a=CAog8RCAliQ4ove8rRYQAN1rfLA_oNsbBRVL_pg4E9M7N70SbxDPtN6d7zAYz5G6n-8wIgEAUgQMerx4WgSaXRJ7aicQppn_E4Jm53lyTgHaFVTh-PzIvUMNXAYLw7fmNLgQ80phFklAAQtyJ5ckuPJ9gn65y4VeuUytKjtSN2qDTluJcp4Ez9swxa8Zsae77squAg&e=1679129741&fl=&r=0f19b11b-e190-49c9-8ed7-dbfdf5f6db4f-1&k=J4jgofIbbriiDaCysb3xHw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=9Td4FjU-kMz0pWmA9dXvFe9vjLs&cd=i",
    likedImageURL:
      "https://cvws.icloud-content.com/B/AZR9iGuzJ3flXRI8lqJTXSfCZUGvAbDejcpspJKujW6xjXLvGUUy4H6n/heart_red.png?o=AkzZFqkprAJdzRiGxCVtIt47s4Tw_D_faQDABi0ypHbb&v=1&x=3&a=CAogNWUjSYEH3Ly5BlschBv1237obci6UyYyWm0Lb4B_W9YSbxCAx96d7zAYgKS6n-8wIgEAUgTCZUGvWgQy4H6naie5FXiZ6td4DH7BVZPZ9NT_bKoQML1TEq_ISU7Zb8922Hg7SxqyKZdyJ0Joq3Vvee3MnwckbRg3X8_Pk9KQLnoYJvEbx37L0hSWZKpEKzKk4w&e=1679129743&fl=&r=70b64623-bbcf-4082-965e-36d28485b300-1&k=vX6-r90WWg9AMdYFxjoiHg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=RcDYOH68w_JnE2WEbAGfyJ9cNDs&cd=i",
  },
  {
    name: "Comment",
    imageURL:
      "https://cvws.icloud-content.com/B/AQhgbYaXH_dwx7E8MSKutGco3daDAaeJmnzjIKvcmUR0BKqd1cb0Gq17/chat.png?o=AuHc-P5SFk4NfK4uvT-ZD0JtBax-28TwiHEznGC7CcLU&v=1&x=3&a=CAogz93cYti26Ql-HEmwRE_Fq_CjDeqh3LHyzXmV-ef_1AYSbxCGvd6d7zAYhpq6n-8wIgEAUgQo3daDWgT0Gq17aife5A9AmDOcvOhmL_3j92W2wTlRSjQ3ReZvgRw3mRtpKKbf5-UG1KdyJ68Rs2kqLFjQyaUg3Qn_hevWhK5pkKc1bM-3BkXTVNcG3zRaFOlNOQ&e=1679129742&fl=&r=e26d7fca-56ea-4dc0-9fba-a422a220cabb-1&k=bEgfUkCtO-BxpC10wDFZ5w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=tQV-0yXpWyjlg1LkBs7UrI0zttY&cd=i",
  },
  {
    name: "Share",
    imageURL:
      "https://cvws.icloud-content.com/B/AfcuaJVN8PUmdXk3zGQ_wK8Ud7rIASW2e6ZS-9M6IYVFSzgmFni06wVp/send.png?o=AiVlIpAToIAVzq41loSM5MG8R6LmhSJs4YcrpGaAfxqp&v=1&x=3&a=CAogJVDBbdRs6df_ekd8eRuyjBXRjDfnZAu2Lv5_xK9bqVsSbxDxzd6d7zAY8aq6n-8wIgEAUgQUd7rIWgS06wVpaidrT8EMwOquJjtFwJ-XKmlqKxOHX9_2SU6flRXyZSnKeKTXS9sFH9ByJ3A-yu9IG2Z61COdKh9xZ7k24CR9bJ34i-flhZR8tPJax3RWu9Af-Q&e=1679129744&fl=&r=c88b3832-9ba8-4657-a3e7-133bf5d1db13-1&k=_zxos0Ab6TfhdtD7p4glEg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=m4LjOVixbJBul9mr-GP6vErWKbY&cd=i",
  },
  {
    name: "Save",
    imageURL:
      "https://cvws.icloud-content.com/B/AWJw4LUmWr2I62a-Vnx4uIdEWLb6AUcy9MULhHu-gzsmc2QlfxHx6cG0/bookmark.png?o=Am68JJCru3a3LLfpTRsGODxvaBf6Wr8wWFHcdCRYiz3D&v=1&x=3&a=CAogcjO7a1M82Lm5_sNbi7xktHkUI4EOBY135qTTd7c-EjUSbxCXuN6d7zAYl5W6n-8wIgEAUgREWLb6WgTx6cG0aifLHLQpdkwXFCy6GJc3QdZXnurXqZ3S-GdVjhmvc68JsVTzDWyKf9ZyJ2Xf1DGR5xw9K0UtEYidJ4WQjwcQ98G-VVShnGbyC9RnA4GujqrbHg&e=1679129741&fl=&r=ec0a9e56-2868-4f1f-a4bf-9ff7b1586d35-1&k=kPl3L0FzCKzSCvzeRdCANA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=KXlm_H6a3VdgT0C0iAYHM99fY0Y&cd=i",
  },
];

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

  footerIcon: {
    width: 24,
    height: 24,
  },

  postFooterIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
