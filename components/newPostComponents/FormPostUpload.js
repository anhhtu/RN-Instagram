import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const PLACEHOLDER_IMG =
  "https://cvws.icloud-content.com/B/AZ2NmC5q17Xtw6SgehTUN88E0mZwATa3IaOv6U0fUKMG1HSuEBrGqfau/user+%281%29.png?o=AviM-ZT00nqYo2S0LTagXsB78aAQseEJjSLVp5GL3cTI&v=1&x=3&a=CAogBJqhIm1Ndp6Q_rIa7oXO87-8O8lvsGby5YPU8m6qxzUSbxCQwYPp7zAYkJ7f6u8wIgEAUgQE0mZwWgTGqfauaicduZFl3Oe7Le6zc2HpYlvxzroQuKQkjzfN5WEHrbjjLCAfc00N1SZyJ27On3z3xD-grXqDX8xO0MBGn46NRht2O65uCG5EUZB55VASm6D8WQ&e=1679287635&fl=&r=a68e78b6-7d22-4dbe-9f20-dd261d979254-1&k=_Uq9P6LXK8gK1ATSekwJhg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=f87KQUkiKc5DPisiL6gzVNVvLWY&cd=i";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character"),
});

const FormPostUpload = () => {
  const [thumbnailUrl, setThumnailUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
    >
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) =>
      <>
      <View>
        <Image/>
      </View>

      <TextInput
      placeholder='Write a caption' placeholderTextColor={'gray'}/>
      <TextInput
      placeholder='Enter image URL' placeholderTextColor={'gray'}/>
      </>
      }
    </Formik>
  );
};

export default FormPostUpload;

const styles = StyleSheet.create({});
