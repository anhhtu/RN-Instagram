import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
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
      <View style={{marginTop: 4}} key={index}>
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
      "https://lh3.googleusercontent.com/uoYV0fMQtUpYhsitWNzvmYX1XsoXaMRTNooaduhDAKRF4NuIq9v27n7CssXfJvtM3XcnOJwDhXM0wdPnN6f8n2ANwOODSdSSNuqZQfeu0kn2cd3QMjIC-wgrphHTDgXHyewy-7ukeGaDaNggbe9Kct7-u1oh_5h3OK0ccTj7jDE92SpF0zYpW9aoPHLE4VW-IGg-r3oseiEhoD9xSN-AbbCWMuyGPgBw9tsEAVodk2D82BnSmStXObIPem_zLGBKFvumoaEBrA1ycP_8tK3M2-_RD-enjQAGKKOupK4y7wi6yv5uP_N_XYD7nymUD6_iK5JsKIbknzhYSA1avKaeKyGs_E_97b7nkx-MFSGwHYN4ChkHHea_AINxQ4zxEhPEhcw8PIuzMpjpec5cp8s7wnVPII3J9LBFckzgSVw_cGMlmfZ3xXhCZ5_xn33MNZImqTQgJhNH-_XUm-vVFOAD2LWiJxUCM4aqSJGiQoOpqbByzbmBlNTsfMJLTvnn1GE7_8QK9L2sSupzuxDOOyO6WM_ZAA-3a8QGp1C81errwNRd5Py0YvUrz7EIBAj9MVJaYE-UZi9MHhEwTnV1DOFLnEteK4Zm52hmKXZeT7bX1VctoLC4p_9rjNmwubDtF7CyDMiM5JidenYJt5xwImuavYXlGCjhRIKL1RLaqiUULNhOZ83HdMSmsLVx-sz-mx3SsZSpUvB7FjwJu5_-Tkt66j2M5dQjW0uw4Cxduk3oi0JF7oaaDgm5I-9cUOYQWclv_jVWTQhG7GayvJ8OJimIWPgx4ulgNPYXNc8MRLe92BTl8VKxJ-ilofZKjbKTJIVXXd97DZuAHLdX-VUUfjq_uVIh5y9uaUwAkM3RFpWiKiEfqjalstzUMEQxbdNIOTk_DCxOZwoYVO3Rm9PcfExwaxy0FgwvbEn7vha7iok-ljLsAnubffK4KMSzdqNVR3K5Vnm4o39MTXVGfeqNwpU=w128-h128-s-no?authuser=0",
    likedImageURL:
      "https://lh3.googleusercontent.com/C1OfyTverdImV90jm1GRYMzlMzDnQGw_Vn0lo8YJ8IYCgoAu-skOeBMdMGQQUOuDCRveRDRIqwPuF4W7Ap5gJtphmTzeyOip4O4jfqTQRJ4u6gR6pMkerwP4vpb_UzmBihbxqy4LinZ2ps4wno5FlGhhvGNjfHx8U5bsUq_aUuTxpP2r3tcdByS7ft2SEFr5OZlSeOA72N3xHmEojKArw0QDtVDbwlWOT-MtX9Koo1vczRdJf7iZZ5DMNChJEXzfOFclr9an0Ft1orkylGmrdtxbmlWrS0swYGCd2FVXgS8w322q9KMcbnuDEGPQf3ZSUs4Z9IUb3c2KD8J1EhaO9ZuBrEafBOc3cYUM728YaJ9ejHfMcHposTh1vBmCg6PpJujfvFLM19gQpESuM02a9weGu5hCmLB2LuxIZk4JYxy0JyYS2s_77gpsomM84Bce18EoZ4a3f44Y2tdoMk_0esUGy8sAkb7GVsbQh7DpyqUCs5pC0oXkr1BUw40OHu7ouutnJC2zW-nrN7AHOxZvBLbLfaUZGPvjmsMDnjIi6v01GzhWqtKIoOi1hWH2_6IAA7XMG4VK1RSQNZ03Vw4N8o2LaV5tWy0AIzmnHro6naIKOXV-ppqxUJGiTR4GsSVxv-FxD2jGqEN3G5W5TZcYkZcLQK0B-OSl6SbHBgBLKWrwsiJJGNzNHjIlfinLHaDchajYP9oPv5BEUsLMw_IrsVYI0MfdRTOxa_tBMXqBxBZ9CU6jFUTXlQZhYovlfwNmKH37_I498pn9pS2FDf0HBWQhjtdyiL9Sgzh-ox_cl3hIJjFyJtIEu_vNbAW_EcnQgTuQfMJ82wSH-QeWa0WXFX-wbV8fz-hNNz4uxP0XiNUA_YzlvqfReDnJ86TkgnyU8N7JWOHLzglJCMECVG1gPD5xoivJNOSdWW9n4Cji9R_5n-c9w7uvjS7pDyM-jCPKY6inVn1n4HdaUdzhgms=w128-h128-s-no?authuser=0",
  },
  {
    name: "Comment",
    imageURL:
      "https://lh3.googleusercontent.com/t0ZkB7iNe3Idpxw2boOod02BDNVlMVzdoFpM7X1lLbTD02XkJrYBtna8VfCxgvL-QJtWYDWfrCfkNVg2NEPg-1VByibcK6px8_lxAUMilENx9GL8BbUJpy97AUFZoIeUUN9YCYLpkf-wHxVColtYONdkgBtZRseVCXzkHczjtzpMCPetwsR9ZQ5dzCZinlcUH3jcq3nuR_SuzX4XD6fSXGLM2YS9QsSGNEyMuNjqBcck4T8WUnWBcnb1bVRKh6QkXvn-97dBMYgWyYtD9oRJVUcooSwRExwJXHQ978_UMA75Z99vnT9Odtmmh2sH5Mo89qGlVmrTC-3qnbJxGJsv7fBY75xDEK_xdgjRGIQBmGI3HPltAIuFhSvbJW8g8kK7t9CEBEEQUKzAGeYzQWqeol9cDOmm69D71lkxJxQbPzsGj7nEl7LFCxYgsPJF-yiZ4g3Dvw9WAIVA5wAI2KK2RE-BirLCpvcJ9Y-xRB_PSzAAE63oSn441tdjfkkSgK5C4IxqVImGdyN5AuB0DShxfFSQ7_IYI8SwMbF0A8bt3J8OGBfG-9ZGFOLvpnO7RSEvqTdTU8YRU0kJZ9x_yW6tpqB3mi7h-XIqddLO6U91n6lvip48tTdm_bl26CiIPoRyqeorab_2t8wP9Ho8hlfGIhiB09gv39E7b9x4u_jrryY6AEfULB5BOSJ-qfUMme9GVLfzf8CVt4zFPsfV9_i8DlP1p11RF4XIJIy4EPsLA2ZvtwcSMA1ErZcLdNBMSlXPe5gJ3HK-cOQc2AIP2arLPDRPbquFxSB2P9lFBI6tyyDc72sJj8Dqkj-RmRa53S5VMk8D-HZNWLI1dAnZDacxMt0uWy92NvUVkJPabJ8BREfGbDAvm32CICFWIbZViRcK73k0Q_uq1xEBmw_Sd3VO5Gvbqp3aOlX-0TGkWcwYbt_KgSLtgFPbXrHTCc3dFa_leCbawGjcQ6f8bX0kJVY=w128-h128-s-no?authuser=0",
  },
  {
    name: "Share",
    imageURL:
      "https://lh3.googleusercontent.com/IXSOtR8BPXJJuqTRke7EhfZGb7bGdi6VsCFlcySCIlrz8NM_y4D4r79ubA8iGM60u1rlY4mMN4u6bphXS0HuvcuyiQXD-okaaqrePFzagPm3GtfHdAAoe-7NgFZUlnYsxdH2IjTuaNgvZv57leh1ZVEDHhhP7QIYEhIsIxmIiaAVvYWh47LHKg8JcCHcvOjyhfz-sQnfvTq78-_EEUMY8gcTBIamdBA6q0OgkTRt-VtiGz9iIxfNnb3HdKIJrc5cH5FNEDTDBWUYqP2DvoCcOys8QRSEU3Cvrn--FGR9v18-1xbygtffMLa235QHdTUPfG9u_-nNRK0Zr9Q26ujSFZf1bfpq2s8uLBPwi0rwwlwkttUbpArpp0TPlCeLO37B-QyMvVe37KHzvITbdgCMX45_YneV3KIwx7qzTy_g6yrskv635MAGN75GYw3xncJ5Ysa4p7kWThFSw_vRKo0yz449bvw7qat4kBPEt3QnG2GjrvI8m05UHOYQDhCZRzeJIun5GXuWDG6xdNnvufxrdeaFLo4kVph05VkBuArqscQv-KTWqmdVN5ShMLEUsPYJjYDb4tkAVeCmcnVppuLiDexA5WWyHhwSsxZ_y_Iz8WHhNpDR5lwkQN-gTcRmSuKsuM6ZPGYmBlj9zX16S2BDlBIBcvb6UeGm2xGw1tRWh_0Ordwsf6VKavPlJ8ojVC8fmsYc7VrmUTBF5GA03CC9VAjj44jvADUQXWAtzi_S9Rj6B5gMHNMfrueaurdT51pkQEMio8M6kQ1JPf2o8at5ar1nhr-T4p4t-vFx5F5c8S4p3btTTZ1jq89ryYJfveGs4h9rJ8uUvT4LEfteRM-KLTcsT6G60x-GBQNaymL2oo_It7xokSJkZRde2-9Fta7uxNDfEW8qpB1D6ayMLJ0fx6PkiJRxdqGO6mO8uA-qH-hi-pqaTGJtrX5lC0b40s8Pc4AJGm_4PbPal3V2Scc=w128-h128-s-no?authuser=0",
  },
  {
    name: "Save",
    imageURL:
      "https://lh3.googleusercontent.com/SgFCBpfKFct9iwjz1FQClKOeSOfy6QIQXmsnRw47M8nZGEHUIMaQ5Td9JDqQwixqxrX62QNwgSmoJva9lqdWBo9_3TE21dDSDJuVnAeugRrwE6SsQzkKHv-I9PEqKZgS8yO7VHSa9pAGHWCFnBie8636hf9Zy9HZ4RakkLPETEi4yzMOyjVrDLyJza6-hhOP6ewvKm3dxiItEBs8R667ZMDmgSGPKtfVY1lLSeC8hIoCH94sPpfDTOR49P8Hdia0dTN1dKrP-2oGXmLXUtpWMfvr8LLLl7CkmwCAZvWVbvafgUqu6JlcORAeE4WaNIxBQRXOeqTNPpvkWPY09sWDww7c9XR7JNhZoWMm5aEcdwu3Z7Vm-X71yG-7GqpvOn0oVdJGDKsTfKQGEz0M53hu5BxyShQ8Gg2JKGyv7dj2WRHLIeU_HonQj-NGhstm0qaLN6odu_OASSl2esJOSDQhboGw2bDTRJPc_gI-BQWI16ibMLU_ELCKLk8U9e95XMO0Wei2gvmQ6WKW54kDlFf0tiS1eF8wraQ6NmNies_2ZMPH8k39cybKp9yIV6vdSvYuaEXN5mG_4kTpLCOV8EFd62ESef-Q-K3_gSHPZw9i2LPW5GqdzR29VqyEDBlj5hLWA0zlkraO3pF8GBHHt1-BLK9i2K3vjV9-cXqqATUh6VSvr09AxGwFfmpuB0hgk_zq8AjFhkJ4QyT-DIY_YWCOX7ZeahVKZJh38a8srp377KlAivBkSSBaJvha72KHjneeKeT6mFkoc35c51d1AOyWvyBva2Nxpmegd8tt5axNaf5PIdyEubnZG0p4EVTIFzP9Qvy2grlckLO1C9R2M2jN4GSiXPHFebfa7GyT4HvQlYGE1fQkbJjeBucfJ18hyS8QHn0D6ERzVhrrtKw5_K2Dfk79JQAIYT399WDq2LRtWDXIbIdTnIbCUfrxMZoLJ292a3fqQN-iIY5qq0o7vf8=w128-h128-s-no?authuser=0",
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
