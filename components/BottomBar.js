import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const BottomBar = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image style={styles.icon} source={{ uri: icon.inactive }} />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
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
      "https://cvws.icloud-content.com/B/ASMJz5PqSM3VuDw3Rtrx-R1BFAinAbjvMACIiLU6W3THavj3vBcUb2Rc/home+%281%29.png?o=AsHrb1NN-5I6qjqCb9wZKOqAUbvt1qFJ2S1t75eveWaB&v=1&x=3&a=CAogXrCQIfBCh8GAdIbJJ6WVgR17reuun_D-D23gRhlh1nUSbxDzht-d7zAY8-O6n-8wIgEAUgRBFAinWgQUb2RcaicbcFmcA7tKpke0n-PIJ9qgW8p4rWexgN12mAy_huj83BgirWqKhkhyJ_5xIiWUK9zvh6ODTR0cbEP6xc9Eo3huc38oubynZ60vkiQ7gvKEKA&e=1679129752&fl=&r=32bd5a69-a4f3-45eb-89ab-8fafddf86e4e-1&k=PWXc31704Mub11YPyz9z6w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=U5Mkh9GrR30TsRSdXyKhTnMG53A&cd=i",
    inactive:
      "https://cvws.icloud-content.com/B/ASa1JBDnP65zJFZedsHk5cUS4ATMAZmNdwbtbix-EOTGzyR-HDsZILSb/home.png?o=AnsSef2K3cUgqYTEalh2I2ge3CeNWYY_CDrI7agxpImL&v=1&x=3&a=CAogW-PlJIapDLqqBGINqpypx0qSNThlQjV6xQ3kdTFKY7ISbxDui9-d7zAY7ui6n-8wIgEAUgQS4ATMWgQZILSbaidK8xid4wGMF4Dn8RCjnWc_UAg7XanwReLEml8SWYLdkCbUvQMzpg9yJ6ri2BZs_bnw2iJ100e0wOa4ontpJ_2G1-KknVgghol3WkOmvI4OSw&e=1679129752&fl=&r=a3756526-ece8-4d94-ab8f-1311f83d70a1-1&k=2hFXrZhLGzzP8oxizBJ8_w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=SHjV9UGX4b-55jH0_0QHzVsDPLo&cd=i",
  },
  {
    name: "Search",
    active:
      "https://cvws.icloud-content.com/B/AebVAnYLZjmbAlGGtvNdn4FAfrQFAS7FfMsuUP9_06kSrL_nnJpJbXiq/magnifying-glass.png?o=Ank1xRSIZw26VRLmKNzenf186oIZ1uu7OaTWyKir5tLW&v=1&x=3&a=CAogT_-GjzXx2IzdVv_QjrrOmCtoeAYaeTMNbIqFb0i8ugcSbxC0-N6d7zAYtNW6n-8wIgEAUgRAfrQFWgRJbXiqaicbR43DUCFynA0x6X722Pkk8QZWmmSB_RjF-cT8IsXyf4XajzQ6tgZyJ5MCeF9y04tq8Wehg288G9VJrSpFEu7L6QLJyolCjoi6pTy0QRQv8w&e=1679129750&fl=&r=9235160e-a2d9-4b52-9deb-5d2272949df1-1&k=s7JmY_e0OpP0Aiaw__BuyQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=S3-tvETan_Jy2ixvjVbR093QJ3M&cd=i",
    inactive:
      "https://cvws.icloud-content.com/B/Aej9sv58MoRcOC1ug3_vFk6qnA7LAX_bPr4UhyFmjqlY5lk8xxDQRjM0/search-interface-symbol.png?o=Ar635oHVNZRLnc4a5xrCkb4c1nJGdRowChTsk1dJkLIL&v=1&x=3&a=CAogB8niHapNWue2LR47jUdyHQ3Wgwb3aXuV8r7c6V0Y6vQSbxDP-96d7zAYz9i6n-8wIgEAUgSqnA7LWgTQRjM0aidP6j_SGoTneiM4m778YxIpVAM3syYgGz9xyqsYOC9MjebwyQ29LG1yJ0Wfqubm-CJyRiwKWInQIBxfXdieu7DdXUKlpWbMPd6sW-vlqtNucA&e=1679129750&fl=&r=19482d53-66ce-4080-a09c-2af5edf3fc98-1&k=3qrzH6zHRf_0lA23qOrXgw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=fjRHqqQGnY-0f17eu6BcM9SpLno&cd=i",
  },
  {
    name: "Reels",
    active:
      "https://cvws.icloud-content.com/B/AfK5D6CPBc9Ia99_QHOkwHTrb2tDATpKFfyxrkXMICWoNdEqRkPpt_p5/video+%281%29.png?o=AlyqgtaHBuf4Ai2H1ci_L6IIR19aVqb0MmsF6giJO8DN&v=1&x=3&a=CAogpYwSLnXJkXVHore26dnICbnfviMYLbzY0wK5hGECo40SbxCw6N6d7zAYsMW6n-8wIgEAUgTrb2tDWgTpt_p5aicNg98SGqX6BxcQv95o7hqT_fpbY6aSuJlhOx5vawt559HsHobcisByJ0REy2lo3-eOXVDPDn0Y7HRQrGYbZLqD99HLdX3lCKKxzrZopS3Eyg&e=1679129748&fl=&r=d8aa16cc-f406-4bbe-b259-84152ea4008f-1&k=dBrOqiGHhBK5-OgcSoYUSQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=fF392jMVUDWC2AloBq1PooTAE1k&cd=i",
    inactive:
      "https://cvws.icloud-content.com/B/AfjKTMbzpBefVmsXx12wwjOg1VXIAaPQOYWKrbe0b8j12RFA1eAntNO_/video.png?o=AuYnZrip9EloclefWlbG5wzbUv62RP5Hx47I2WuH8xt0&v=1&x=3&a=CAogRS9CtnWSHVer83e-xG60uoZ6_ZltX_QOWRfd1_ppTxQSbxDe8t6d7zAY3s-6n-8wIgEAUgSg1VXIWgQntNO_aie_PsPNekC98KrvVsRnP0DVB_WhlUjzYPvotCOSlwch9bKfjtJl7rByJzcTlDxcccyG0yZArP6CCEJIyVpnAoT1ONfSW_uwkeQrsyq7Zkx_OQ&e=1679129749&fl=&r=3691fc33-6c39-4725-93e1-0c5c729b6d40-1&k=zdZod8VNR6bmsJ7_UhlEfw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=tDFPFBs10oLtz6R8oNjG9c6IDgU&cd=i",
  },
  {
    name: "Notifications",
    active:
      "https://cvws.icloud-content.com/B/AebQmjk05-T-GLw_nug6MyfMhwNkAUVUPO6ewYsDc_ako_ztkUIX3o7l/like.png?o=AuTb-9939KM0mwWCL7K_otKNv3k9s6otlVDzQAw6WFuD&v=1&x=3&a=CAogM7V73XnAyIiKyWyLjhMcv8AZ4ICT0P2Cc_470IKHIk0SbxCQ496d7zAYkMC6n-8wIgEAUgTMhwNkWgQX3o7laicqKrYjB8SetmG7_BUUAuAr3l5TTVb4l3qzR1sbtnQtqeqaElyj6JZyJy55xTbuMbEEOU3FcCf5s-lQw5VAls5d81YjYgq2wBrpyTL25Z07lw&e=1679129747&fl=&r=05728a24-3e82-41b7-8056-3a8172223b80-1&k=CI-MFWUdoAUZbce3Ytp8xA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=6v3wPkIMlR6jErlg3YFL8K-aIXE&cd=i",
    inactive:
      "https://cvws.icloud-content.com/B/AcSN3at8FBhIBMh-OzRgcB0Merx4ASyd0rI-AZCLQ0xbjS6uA8uaXRJ7/heart.png?o=Ao0MZ09kSJUwnSUK3gtTXk-zMDO2Rcq5Sa-jq6kK86XY&v=1&x=3&a=CAog-MR4V-RB5scHt4LEDzKW4_C0-DXZHzdLPc2fBL9jprsSbxC18uCd7zAYtc-8n-8wIgEAUgQMerx4WgSaXRJ7aidet5kh5bZnr-M_Hn34W-ZBTP62UMPmpRxu0AXi949M6LcOxg5a4AJyJxrztxLnvtddEqH3j9X_aYhSbIPrBVP1d67zcH7rBAR7ykAnynSSxg&e=1679129782&fl=&r=6a4697d6-e32e-472c-adfd-3baaff36f2a6-1&k=J4jgofIbbriiDaCysb3xHw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=_DdqbW0Ea0zYMjPK0R8wVxZ4bX0&cd=i",
  },
  {
    name: "Profile",
    active:
      "https://cvws.icloud-content.com/B/AZ2NmC5q17Xtw6SgehTUN88E0mZwATa3IaOv6U0fUKMG1HSuEBrGqfau/user+%281%29.png?o=Al-y3278WowlUNecTsqfA4Zji7n0ZkBrgxPlR1A0cNL9&v=1&x=3&a=CAogt1o7EtHlZLQ1ZxSWLe8mtYFzemKmF8TPsltRNp-QpaASbxDo0d6d7zAY6K66n-8wIgEAUgQE0mZwWgTGqfauaifu3EDvDAccTqLBvZUg6xY94L5wONxVLvAPxVxtDCgNGtyIzNW6EglyJ_-dI1Smp4oB8NT0wphQRvYNH7ETwbQX8XTqqNEMRhM80fTG8KRYMA&e=1679129745&fl=&r=34fdb508-0f51-420e-8c7d-dc396e075192-1&k=_Uq9P6LXK8gK1ATSekwJhg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=ACkGKF0zfc4TAxANKTu9JkDXIPw&cd=i",
    inactive:
      "https://cvws.icloud-content.com/B/AQnCF9lSMEbUTHeNyGdh5guaZbf0AXHfoYE1CgRhD_PvBw6uO3EsS5iQ/user.png?o=AqDlXcW1xzqfQXncGZySgU_0bcHH6JKk8vomLw6jCjSx&v=1&x=3&a=CAog5IJMcGkRrl8CRBixMYS53SK94hyCDLxMi4nS42aWeyASbxDu4N6d7zAY7r26n-8wIgEAUgSaZbf0WgQsS5iQaieCiCN3TF5yakSVdIZLCrKA2KusNSMCzG92BUGMimBDD_khn4PmRmRyJ4t5hvatIoXwRDrYJB5tNTiz2unLhhsI17xqwkpYUUrXuw1hrhqnAw&e=1679129747&fl=&r=4ad1690a-2cd4-47d8-88b2-86a5b4dadefb-1&k=QSGTbRiq_Z-ZusL7Gm5z7w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=ox5JGaIEWY58JBmdyt0HLVaFwMA&cd=i",
  },
];

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  icon: {
    width: 24,
    height: 24,
  },
});
