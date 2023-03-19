import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const BottomBar = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab == "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Divider width={0.5} color="#383838" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export const bottomBarIcons = [
  {
    name: "Home",
    active:
      "https://cvws.icloud-content.com/B/ASMJz5PqSM3VuDw3Rtrx-R1BFAinAbjvMACIiLU6W3THavj3vBcUb2Rc/home+%281%29.png?o=AhOY6UG0BQjcwiBoT5BMyqLM7PwODOHUntyZm4pA55aU&v=1&x=3&a=CAogYPQT4f57sXOiAzGaLuVynv_ha6D_0Eff6wEJqul9hO8SbxDBrq2m7zAYwYuJqO8wIgEAUgRBFAinWgQUb2RcaiezXTT2wcbE4LsWgVg0YmQ1JBdRWliC-Wj2AUuJBwiJj4lsAIxKORFyJ_p8xJQzz0SxOFO6zmW1SNJ2kEA7VpbciAS97MRDpfK_0gCCfubI4A&e=1679147812&fl=&r=c2da162f-7be8-41b7-bcd3-3002944c9e9a-1&k=PWXc31704Mub11YPyz9z6w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=KLqCR_rYpIOtkozXbbK4x5WalF4&cd=i",
    inactive:
      "https://cvws.icloud-content.com/B/ASa1JBDnP65zJFZedsHk5cUS4ATMAZmNdwbtbix-EOTGzyR-HDsZILSb/home.png?o=AnsSef2K3cUgqYTEalh2I2ge3CeNWYY_CDrI7agxpImL&v=1&x=3&a=CAogW-PlJIapDLqqBGINqpypx0qSNThlQjV6xQ3kdTFKY7ISbxDui9-d7zAY7ui6n-8wIgEAUgQS4ATMWgQZILSbaidK8xid4wGMF4Dn8RCjnWc_UAg7XanwReLEml8SWYLdkCbUvQMzpg9yJ6ri2BZs_bnw2iJ100e0wOa4ontpJ_2G1-KknVgghol3WkOmvI4OSw&e=1679129752&fl=&r=a3756526-ece8-4d94-ab8f-1311f83d70a1-1&k=2hFXrZhLGzzP8oxizBJ8_w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=SHjV9UGX4b-55jH0_0QHzVsDPLo&cd=i",
  },
  {
    name: "Search",
    active:
      "https://cvws.icloud-content.com/B/AebVAnYLZjmbAlGGtvNdn4FAfrQFAS7FfMsuUP9_06kSrL_nnJpJbXiq/magnifying-glass.png?o=AjpVLl-sx_bzd6rJsyveJutrBg_Dl3RVCn3CxclvaxJE&v=1&x=3&a=CAog391q3YWsIwJQhtnPWTy8VVGkGjDWThnODXal4qawnEcSbxCs2q6m7zAYrLeKqO8wIgEAUgRAfrQFWgRJbXiqaiflsLXF70fOsqZ7cYW6c2OcsQQys4xN_roOiP0rErcNVdGnxGKxNtpyJ-pEIimxsFXN9k-Fq1v4imSqxLHx6mcn7EkUCRdxTAT8suEJ-BW6_Q&e=1679147834&fl=&r=d4b2d248-b7b7-4572-a958-4f0ad04af874-1&k=s7JmY_e0OpP0Aiaw__BuyQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=aBSqtnF_HHaqlSbvNdsyeWBF3Zo&cd=i",
    inactive:
      "https://cvws.icloud-content.com/B/Aej9sv58MoRcOC1ug3_vFk6qnA7LAX_bPr4UhyFmjqlY5lk8xxDQRjM0/search-interface-symbol.png?o=Ar635oHVNZRLnc4a5xrCkb4c1nJGdRowChTsk1dJkLIL&v=1&x=3&a=CAogB8niHapNWue2LR47jUdyHQ3Wgwb3aXuV8r7c6V0Y6vQSbxDP-96d7zAYz9i6n-8wIgEAUgSqnA7LWgTQRjM0aidP6j_SGoTneiM4m778YxIpVAM3syYgGz9xyqsYOC9MjebwyQ29LG1yJ0Wfqubm-CJyRiwKWInQIBxfXdieu7DdXUKlpWbMPd6sW-vlqtNucA&e=1679129750&fl=&r=19482d53-66ce-4080-a09c-2af5edf3fc98-1&k=3qrzH6zHRf_0lA23qOrXgw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=fjRHqqQGnY-0f17eu6BcM9SpLno&cd=i",
  },
  {
    name: "Reels",
    active:
      "https://cvws.icloud-content.com/B/AfK5D6CPBc9Ia99_QHOkwHTrb2tDATpKFfyxrkXMICWoNdEqRkPpt_p5/video+%281%29.png?o=As_z4TIBHNuixliVSgMWIjxk71jkCr1G2eijwn8bTqKS&v=1&x=3&a=CAogws5i5agh9vHUS8qHIos4pkOpkVxntcO5cqD353sH5UESbxC3ibCm7zAYt-aLqO8wIgEAUgTrb2tDWgTpt_p5aifI0Oh8YeadZ05ZrXYQIPyPpglOnrCbLXxGShOy97LmGn8FQMyVqaNyJ6qglX9yFz-EKHI3zVBZY7iYzedIa7alE7unPLggUqogckV0aWnheg&e=1679147856&fl=&r=234557c3-a29d-4501-bf8c-5cf7b2e88ef5-1&k=dBrOqiGHhBK5-OgcSoYUSQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=BsqfYI2c_CUSoGYc91NSNo1zXiE&cd=i",
    inactive:
      "https://cvws.icloud-content.com/B/AfjKTMbzpBefVmsXx12wwjOg1VXIAaPQOYWKrbe0b8j12RFA1eAntNO_/video.png?o=AuYnZrip9EloclefWlbG5wzbUv62RP5Hx47I2WuH8xt0&v=1&x=3&a=CAogRS9CtnWSHVer83e-xG60uoZ6_ZltX_QOWRfd1_ppTxQSbxDe8t6d7zAY3s-6n-8wIgEAUgSg1VXIWgQntNO_aie_PsPNekC98KrvVsRnP0DVB_WhlUjzYPvotCOSlwch9bKfjtJl7rByJzcTlDxcccyG0yZArP6CCEJIyVpnAoT1ONfSW_uwkeQrsyq7Zkx_OQ&e=1679129749&fl=&r=3691fc33-6c39-4725-93e1-0c5c729b6d40-1&k=zdZod8VNR6bmsJ7_UhlEfw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=tDFPFBs10oLtz6R8oNjG9c6IDgU&cd=i",
  },
  {
    name: "Notifications",
    active:
      "https://cvws.icloud-content.com/B/AebQmjk05-T-GLw_nug6MyfMhwNkAUVUPO6ewYsDc_ako_ztkUIX3o7l/like.png?o=AuPBRiHjTWnXSNhVw1g7kfdJcQIXWgQGdyHrJtl7gPB-&v=1&x=3&a=CAogFb1OQmlYSAgrC8hHO2Fg6TI4VKFRwSUw_pMN1vDNJu8SbxDu4aim7zAY7r6EqO8wIgEAUgTMhwNkWgQX3o7laidevYOLSCPnrnq7POuKjtKFxJiaIbkh82wEDi-s888MmUSRpIWK2jhyJ-Wy54cpwUMD2q7w9u8mLZXXSy7SmPqU9Tac6kCGSWwdMk1iPdo2tA&e=1679147736&fl=&r=65a9e951-9cc5-48d4-85e1-e1d7da2a60e5-1&k=CI-MFWUdoAUZbce3Ytp8xA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=Pnv8E4_x4fywPbDHiLAn61yDiXw&cd=i",
    inactive:
      "https://cvws.icloud-content.com/B/AcSN3at8FBhIBMh-OzRgcB0Merx4ASyd0rI-AZCLQ0xbjS6uA8uaXRJ7/heart.png?o=Ao0MZ09kSJUwnSUK3gtTXk-zMDO2Rcq5Sa-jq6kK86XY&v=1&x=3&a=CAog-MR4V-RB5scHt4LEDzKW4_C0-DXZHzdLPc2fBL9jprsSbxC18uCd7zAYtc-8n-8wIgEAUgQMerx4WgSaXRJ7aidet5kh5bZnr-M_Hn34W-ZBTP62UMPmpRxu0AXi949M6LcOxg5a4AJyJxrztxLnvtddEqH3j9X_aYhSbIPrBVP1d67zcH7rBAR7ykAnynSSxg&e=1679129782&fl=&r=6a4697d6-e32e-472c-adfd-3baaff36f2a6-1&k=J4jgofIbbriiDaCysb3xHw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=_DdqbW0Ea0zYMjPK0R8wVxZ4bX0&cd=i",
  },
  {
    name: "Profile",
    active:
      "https://i.pinimg.com/564x/59/6c/4c/596c4c4d6fb4d9db452030f179cc65ff.jpg",
    inactive:
      "https://i.pinimg.com/564x/59/6c/4c/596c4c4d6fb4d9db452030f179cc65ff.jpg",
  },
];

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  icon: {
    width: 24,
    height: 24,
  },

  profilePic: (activeTab = "") => ({
    borderWidth: activeTab === "Profile" ? 1.5 : 0,
    borderColor: "white",
    borderRadius: 20,
    width: 28,
    height: 28,
  }),
});
