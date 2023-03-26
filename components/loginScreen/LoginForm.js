import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-elements";

const LoginForm = () => {
  return (
    <View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Phone number, username or email"
          placeholderTextColor={"#8D8D8D"}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={false}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"#8D8D8D"}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType={"password"}
          style={styles.textInput}
        />
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity>
          <Text style={{ fontWeight: "600", color: "#008BDD", marginTop: 5 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <Pressable style={styles.loginButton}>
        <Text
          style={{ color: "white", alignSelf: "center", fontWeight: "600" }}
        >
          Log in
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#171717",
    borderColor: "#282828",
  },

  loginButton: {
    marginTop: 30,
    backgroundColor: "#008BDD",
    padding: 15,
    borderRadius: 5,
  },
});
