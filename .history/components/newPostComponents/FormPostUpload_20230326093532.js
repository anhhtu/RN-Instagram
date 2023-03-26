import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, Divider } from "react-native-elements";
import validUrl from '''

const PLACEHOLDER_IMG =
  "https://cvws.icloud-content.com/B/Ac7YAaOzPAocQ7yVIFEfgxmKWBxZAZsMb5YDdnBY-zVBBsC-oygWVQ-f/pictures.png?o=AqK5KM4A_YPBEV6StL3dxxFR5g0swgeEXCyPTgtrEXDx&v=1&x=3&a=CAog2da1cIQtPJgkUxX6_5nRaQ4na6w6hZSBvaN1AnVThAkSbxD3-cnw7zAY99al8u8wIgEAUgSKWBxZWgQWVQ-faic9MfdC0Rz84QmNTNQJAKQuehNTKXCxT4xyvxjY_c_6xjD_of_--6hyJ_BM_OUrWir8XdVrqeIVmjNC-QjVOuTtxCxvd9wsjYBagGYxIJG4Gg&e=1679303469&fl=&r=65e1f96d-76be-4f29-a3fa-5658d4c227fd-1&k=fADUCphSCITYrMpmXIzLCw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=53&s=jSTWeYIJK5cY-Hzd39-5wcZn3H4&cd=i";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character"),
});

const FormPostUpload = ({navigation}) => {
  const [thumbnailUrl, setThumnailUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values)
        navigation.goBack()
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View style={styles.formContainer}>
            <Image
              source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100, backgroundColor: "#DBDBDB" }}
            />
            <View style={{ marginLeft: 10 }}>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="Write a caption"
                placeholderTextColor={"gray"}
                multiline={true}
                onChangeText={handleChange("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.5} color={"#383838"} />
          <TextInput
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter image URL"
            placeholderTextColor={"gray"}
            onChange={(e) => setThumnailUrl(e.nativeEvent.text)}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}

          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormPostUpload;

const styles = StyleSheet.create({
  formContainer: {
    margin: 20,
    flexDirection: "row",
  },
});
