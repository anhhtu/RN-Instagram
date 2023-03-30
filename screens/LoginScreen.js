import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../components/loginScreen/LoginForm";
import { TouchableOpacity } from "react-native-gesture-handler";
import SignupScreen from "./SignupScreen";

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image
          style={{ width: 25, height: 25 }}
          source={{
            uri: "https://cvws.icloud-content.com/B/Ab_VNJVkY_j2wuPpRbzWM_bgeQ14ARSsVxtRlPMpuEZcK-rV5VguH8MS/close.png?o=AhlgiZ8K70h7ZQ9DlPQlBVSHcEb7-oKWUrCs9OmeUwv2&v=1&x=3&a=CAogSUvbbdU6GXfFNDdm7FxR-3k-osExBWsPLbbima46FrwSbxCX64jq8TAYl8jk6_EwIgEAUgTgeQ14WgQuH8MSaidcflMd1AL5E9IQg91METRsm8nJpM7pCxtmGcBJaFRHaK3dEnK1cf5yJzmA1VXddhtrUAm0lfTVZ2yriyZoUGD6y4aXHzro_jDvyXoGL7Q33g&e=1679826691&fl=&r=089fc083-c7bb-462d-8b37-7c106cc466a2-1&k=kzcctwM72LzH52qDVDNKLQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=LFlCs39auhsYvnHAdpZl88K9Q_Y&cd=i",
          }}
        />
      </View>

      <View style={styles.middleView}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/Instagram.png")}
          />
        </View>
        <LoginForm />
      </View>

      <View style={styles.bottomView}>
        <Text style={{ color: "#8D8D8D" }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
          <Text style={{ color: "#008BDD", fontWeight: "600" }}> Sign Up.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },

  topView: {
    flex: 1,
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },

  middleView: {
    flex: 12,
    justifyContent: "center",
    marginHorizontal: 15,
  },
  logoContainer: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  logo: {
    flex: 1,
    aspectRatio: 2.5,
    resizeMode: "contain",
  },

  bottomView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
