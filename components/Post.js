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
      <Divider width={0.5} color="#828282" />
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
      "https://lh3.googleusercontent.com/4At3001TYdQly5COrFK6Unm0zii4RTC24wMopMTiIoE7EnaT8fCf9M3dMYQkvopp3uaMgG9m3cBLrtcvCioeSUTL0QPXJiPZk5CtwG7N05d94_rrvDLWHgdy4hadkhPGD2XFqIgK5goNhBIJN0rADkDzZT8_V4NIRDjyum8MakTzDrP_Af795ydZVkyfTfTLnXYXmkK9-MHNLApT1hJo1l9-QPVAMDQvcq8fK1f238Xceouhg1OTRdb7lQw5tP1LMwEiWzEA0T3Uuo2iu41P_lShyCGvlkN6HYY-jzs4RF_K-CVJOJwengCEbDjxcEtJw2rHFqi1FmPcLmOiP15FNpQexp0t_IDWkxl8yPYMXnuayToyBZi4L23wfuWU-M05Zqres1YLO0qkRGJSj1r-vmpbj1TH_YiVdl4ei99j0YZVK3yTSosQ44nMQsWMWi9MTREqePsJuRqa8qf_yAJxtHayoAY4vqin8oPOGJ78GpsM1G2dvr8L7r7nibsZIDtc6PxwNk2oDJjnQhuH-HPToHiTteb8C_-_Sz77MYji3W0k7d8d2MM41ViFXcp1kXdaxyPonH2MMyALuYz5qz8wjVXA4x9UED8nj6bty3kmGOMwuLbIbZL4k3VpGgxMEjY9GIwFkAPDhj9OcYct65dnZ5YmuOXkKfQoBPsEh2ouuTskRdT3GBXTjCUi__zvi-BdTyf3Tv9bjsgkC08s6i9KDtfFrlMM5ygtJcEVML2LWD2ByErM5NHzMfeH8m4nVb18h5xzV1G1HJrSiAO8fUAfR4GA6p8-AeOIdk7BoS84R5SBRLIHterHzv3-T1LaPQtByKuC9RSzlbHtwBdoFsYA-tIZOIeuZcNWU6tGTQhI4OJ71Maf4_X1tXkvHSNyxtWms4oFnPx3P9Eq8r7cBF5WeqMvXfqmxlT5dpr73oG-KzFqlF-g3aEbssAikqkZzlc5852KlECyVXQwIUB688o=w128-h128-s-no?authuser=0",
    likedImageURL:
      "https://lh3.googleusercontent.com/AfEWrb2dWgpqe7R9FG0LrfZRmUlkQgo2JrmzvszQxrhOPB97tUjE5vD2NdfZhQ0LFUl1fNXneGVMeI9rKzFF0756v8ON5U74O4fthBAinIRLksvtQevqAmlD5RaWfuqrKwZxkSAktbYB8Eyc2mLZ6CBkUAMD_jBrfUeIKRj1t9xqKfq8b16T3NNY2mIzAwIEf8Pr7hhJEmxyfUZD9N9YUeOKbMg-S-iDPCyey9RrxzkFtlE6xKokp6AkTEmsT9-MLeYFdtr8ZdZjkSXGhkdihBU8yi91vTHjAgbKZB-IylBeCDg6s68mmW-r14rn-3DxLvENn3cx-PJ4MdzM8WaaGHH2DTtNxHl6owndAg-vJoGe5QtOGlf15E9MwaRe30mvDjZb0y37scr5kJdRwQyRrD5wWigtGN04BaqRVizbJrXjPJK3OfCrM0We5DFbnv7NgbzwOl1vhVBBjfzAhV_jcheYjNFurWzFQeM0dqnRTzRvWePYCtJBREQ62_01g9lRcZDevojsQ464hzN05DtOPNJBzhmv1cWjszb-CpOmib72IlCtocQay4bEEcAUbaEb2gKhfVHEEWWcdoV6fgRC7wAbZ87ZlpN4Opj8T-dVnx-uRMCAqJL9NbOfrZzFNlYs75zJDpz8WaI2ZCN1oOZBX3J5idISHaSmLgSKiTfb2EaptHVGbY7nW-F7b5NoB2fbMtuUM1EhWr1BxyeDzCIMjumZSlpja2puxs9sUBKGnAPnCR-PkPPeB4dqlzj2CUeS8LSPBRZGcQe-_WUw5qANn2n7NFAIZMmseu8yxEpB3oAuHjDvFchjW7Q8QJW0hyS9z_MjbU2BW5W4B0KF5h3Ya_1fSuZr21QdTRXtKfF67Lv5G_3k-NHdz7IFcrmrz3VBw19E7XVBm27zAi8O1-dKndgnJijQgDjevLNP3xoevXlI-U9pvHhQEaqCpeldJAMGhcE7togV3deroJ7QOJ8=w128-h128-s-no?authuser=0",
  },
  {
    name: "Comment",
    imageURL:
      "https://lh3.googleusercontent.com/QCdd7ong5zvSgvEvqK5J0I5ym0gW3n9MSjIFb0e7QHuCqhjeids05F9FnjuHf7w4tkPVYO9-0N7Sw-G3GPAPK8DbgEEFNs70cG2BLZna-lrbNrwP0yTQflaREHSHo1SEWtiT2ZyvZB7Vf94suN7xCcgHVz9OtR9gchWuJqEkldcopWl0LUsU6Pg9gYldqmTQJla0ftB83Ya77128VnArFnMAfPHG9TB19uRZjnOb3K9dvdG_k1tkAsX5u4RDv_Oxb85qCJdmzfQCCqaTFwkAbofCOi6Akd2AUR2qMkEOdlDGobhS3YpHgVIGD_Ehv0ox83ACpV0NvfbEVWqyMJ-LuSzonR2EE2LLVrcSiCZ-sUg-yP8cpycXNOS943-wmWmtvVf8DVXZv2APdEQD29DBh3BqkbrGmDUqEzTQ2IlTZBXnic0Vkx_9yV1YbpZDZ5ZmYNayUIzPvWJNtWGJvuPZhCM_nasJ9CC5-Mlj58eXeBoHScI-ejh4yECJsPGXFIv5sWrymRK1us_pEOsbhoU52yoZqz5C9jzVx_L767Gtr2IozYMzB8ghZnPhBjjukdRcfqC8wWsM5p1lHQf4euM_QZgyjyXKIEZXFwZhTLPYAlXKWwn_B10hrhgRx9ldR6Sg37hZZtfjLNUR2cDZVEMOjSKzmi9hjsKH17rL5_3ynqiGtwTvVrLSsdFKsvuM4lc017cOIOISkg7XMZbDKHpmTLeDK4WQ-7RgCcCiT_S3Q6mbbaQQMjpizmGtDfQTVpMwdBLN6J3Zu0O2FDYqJZaUxfMjUReCZ0EPIAXNsEIrJRz8y6Imwod-KckFE2QJAsGbEFKRMLQB8GYM1v7r9sK2K78gMzrlzKEp3bVlcPwOLtqJwrXbzUgUlWeD7xLePZH5LPK3Djyn4XU9IeEgV1HX7N_vnF_7IZ_nniFHenCZ7_4uNNS6s4EZW-3gGHVHcPFEdq8pm8j7jWm5XBLEHWE=w128-h128-s-no?authuser=0",
  },
  {
    name: "Share",
    imageURL:
      "https://lh3.googleusercontent.com/nBFd3D4a7nBHLZLRKq-mJCfCQ81YYSJgxrLWt20f9DZCYRxN40Tv91lrFWb-tIBr4Qn1p0aQRRf7kJ033oFTsWvDKbevqJAEf_tq2gLSv3NYHwo6Ys1u6sCLMwBOu7jKrBL2T3efat0gwqHpsqL-c0SuikhBgu3FcbIPL1RA-0-kyUtyFX0ly6q7PxcC0dlrM3sjV5boUZYQiYP0PWnWNmsWUlWj7gPQ5DiwkpdWlMrRygVSwx7CetZel-MVzCa9UKgbqQQ9XpBYsrlMNZPA8IpyLgvNXDDRvRHanNPGBDERKZWTybOtOZ5IUAoRfZnVV1Ne_OL1849E8_IIudn0-AYEAoqvYbrpw2pI0xEkAikErpVI068LsO0bJKRmsvjLggeyTjjqKwkfYb8tdn3b-sUgFCp9qTyXBdzkcC6xHWTWx9EqxpeujnkDhJSYn26N1nx5ylPqMAY9miqOMLcvBKZlbRPvnKigLLWPbgLvIOpCKBWiLUclBPGvuMNZAFjfCyNqUFPBJ6rHDHQhip5j_e2cIifGXa3TvPc4_BcSF6IV9pmzzXPQxRLu-o8IeGOPNAY9NprbijzSey8HNUYEnKxFiD5YoZXOQv5lyUvjtig0l064JGXjsPoaaLnLL8md-gcBIDSrYxt9mL-u05Y0NVb6TbPfeRuDs7IRy_9QfoOI1hfLj1UJzF-6kK-joYiTeE87Blgs1ST6Z3UGevYW-h4VHT8NCV48GDV3wB4LN3eojvwQ_zcNLnWstebYtfhON5TW1rFRUf9h6wVF7gVhyKy12Q-xXta8bHIqfqGCTIioaXr8FFfRFD4gQtBxKEz2wjYfwrUnxYNiwbIL4YdfLkT93TOKI4Y1iHaglPwtMLq801PCnYO55g7iEPrYl4ak329Hzk3KekLpdtNyqHzkYIoga4h42RMm83Oe0pbyKyVWTH6aJ12hnt1kLjIwHsqmzIkHZTgQIyZD39TOyyQ=w128-h128-s-no?authuser=0",
  },
  {
    name: "Save",
    imageURL:
      "https://lh3.googleusercontent.com/w2Y-DV6zWI1JHUK4guxI229SGdHX94JPPoGemnR6oulNsznTHKoCiQfzdN1Agx28ys6BiMuaQygILTJ1RX6Hlm7WSSDrs0nts0v2sKTIH-GghwqISR9FzRoSluJ2o7q8dEPpr6GgTLVNgl1embgCzIG5rstKk_cbfpeOcPT5TmeTZ4OlXMgRxzmZx-LaWuDzsXfjbnMfM2tKS-z3meRzLU71Se41fjk-iSnjINzdXZIK6zDHUYkmFlFXj0lP8RlCS6dRfgwIyvZcwXv-3-PVFtQiOb6EoCLTzM9thPmF2UlZt7bVBkZzR2p-PcqK9LuzRMj32I1KODzruaJXfh9XNYC-sFArJGmo28QLBASJCSFA9f-HmDhIUH1vVFy6tkE98_9R655-jhLkVIMaF107RGXi-HtxmzYVJ3E7rOPYzvdL_1KKS1SeIZfpiiqAaAK3QWHCfpHygWdtJ4B7-RgpCmFKZ1Xdn7raIBN150lMC0YOwyMkVJfTqGT9tnguTZHN7XtSBbApj9RByPztefZErGBuIjqts_t-YvGV13tRdmtB7bnJXWGrlK2akHhzpc718jWXxki4Ai2_SM4wlZb9roG9VcffP5pc19T_NMjgebww6dM9xnrrRxmIUAnNJKh4S6qn-Y_pmqJ-lgAIdVhRGFW83Dk-La3rNxgTiAJ3ChAUniUdUZ_yUrEzXv7XHLMVzPZ-43UnkU4fIH1q7E1YnFnWXBTzUfF0eonOhcs-aP_a4ljiYTxbbO7t3p3wW6tUxWA2du-9Sv7nNREYhCWHJhMDXOlctN645_myVzKTn3GnB0k7pR2pX7HrqDdwYUkj4v-hAlQjaJcbIPqM6ORFqi_9b2ilJrLhXzd1IOB9k275KKhQOPEPKVJ4HIJKyEhE7nBn4mkfJcwACeNacYOB--fj12zQ-_xLlv4J77JWqDZYFS_n2PJB1HE5tdcUpXeklLIgsMVw9MbGmX22d1Y=w128-h128-s-no?authuser=0",
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
