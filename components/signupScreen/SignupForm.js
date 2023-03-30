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
  
  const SignupForm = () => {
    const SignupFormSchema = Yup.object().shape({
      email: Yup.string().email().required("An email is required"),
      username: Yup.string().required().min(4, 'A username is required'),
      password: Yup.string()
        .required()
        .min(8, "Password has to have at least 8 characters"),
    });
  
    return (
      <View>
        <Formik
          initialValues={{ email: "", username: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={SignupFormSchema}
          validateOnMount={true}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <>
              <View
                style={styles.inputView}
              >
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={"#8D8D8D"}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoFocus={true}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  style={[styles.textInput,
                    {
                      borderColor:
                        values.email.length < 1 || Validator.validate(values.email)
                          ? "#282828"
                          : "red",
                    }]}
                />
                <TextInput
                  placeholder="Username"
                  placeholderTextColor={"#8D8D8D"}
                  autoCapitalize="none"
                  textContentType={"username"}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  style={[styles.textInput,
                    {
                      borderColor:
                        values.username.length < 1 || values.username.length >= 4
                          ? "#282828"
                          : "red",
                    }
                  ]}
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={"#8D8D8D"}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  textContentType={"password"}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  style={[styles.textInput,
                    {
                      borderColor:
                        values.password.length < 1 || values.password.length >= 8
                          ? "#282828"
                          : "red",
                    }
                  ]}
                />
              </View>
  
              <Pressable
                style={styles.signupButton(isValid)}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text
                  style={{
                    color: "white",
                    alignSelf: "center",
                    fontWeight: "600",
                  }}
                >
                  Sign up
                </Text>
              </Pressable>
            </>
          )}
        </Formik>
      </View>
    );
  };
  
  export default SignupForm;
  
  const styles = StyleSheet.create({
    textInput: {
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 12,
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: "#171717",
      borderColor: "#282828",
      color: "white",
    },
  
    signupButton: (isValid) => ({
      marginTop: 30,
      backgroundColor: isValid ? "#008BDD" : "#47C4FF",
      padding: 15,
      borderRadius: 5,
    }),
  });
  