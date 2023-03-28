import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const LoginForm = () => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(8, "Password has to have at least 8 characters"),
  });

  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Phone number, username or email"
                placeholderTextColor={"#8D8D8D"}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={"#8D8D8D"}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType={"password"}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.textInput}
              />
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity>
                <Text
                  style={{ fontWeight: "600", color: "#008BDD", marginTop: 5 }}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
            <Pressable style={styles.loginButton}>
              <Text
                style={{
                  color: "white",
                  alignSelf: "center",
                  fontWeight: "600",
                }}
              >
                Log in
              </Text>
            </Pressable>
          </>
        )}
      </Formik>
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
