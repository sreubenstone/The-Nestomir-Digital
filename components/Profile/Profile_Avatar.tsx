import React, { FC } from "react";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_PROFILE_PICTURE } from "../Other/queries";
import { View, ActivityIndicator, TouchableNativeFeedback, Platform, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Picture = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 9px;
  position: absolute;
  top: -80px;
  left: 50%;
  margin-left: -62.5px;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 35px;
  left: 50%;
  margin-left: +51.5px;
`;

const ContainerA = styled.View`
  justify-content: center;
  flex-direction: row;
`;

interface IProps {
  uri: string;
  is_me: boolean;
}

let CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dshxqbjrf/upload";

const ProfileAvatar: FC<IProps> = (props) => {
  const { uri, is_me } = props;
  const [saveProfilePicture, { loading: mutationLoading, error: mutationError }] = useMutation(SAVE_PROFILE_PICTURE);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // this tells the application to give an alert if someone doesn't allow //permission.  It will return to the previous screen.
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    // This gets image from phone
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      // We need the image to be base64 in order to be formatted for Cloudinary
      base64: true,
    });
    // this just returns the user to the previous page if they click "cancel"
    if (pickerResult.cancelled === true) {
      return;
    }
    //***IMPORTANT*** This step is necessary.  It converts image from //file path format that imagePicker creates, into a form that cloudinary //requires.
    let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;
    // Here we need to include your Cloudinary upload preset with can be //found in your Cloudinary dashboard.
    let data = {
      file: base64Img,
      upload_preset: "kweu5vjy",
    };
    // sends photo to cloudinary
    fetch(CLOUDINARY_URL, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(async (r) => {
        let data = await r.json();
        saveProfilePicture({ variables: { uri: data.url } });
      })
      .catch((err) => console.log(err));
  };

  // ternary below is due to issue with position absolute on Android

  return (
    <View>
      <Picture source={{ uri }} />
      {is_me &&
        (Platform.OS === "android" ? (
          <TouchableNativeFeedback onPress={() => openImagePickerAsync()}>
            <Icon source={require("../../assets/images/camera.png")} />
          </TouchableNativeFeedback>
        ) : (
          <TouchableOpacity onPress={() => openImagePickerAsync()}>
            <Icon source={require("../../assets/images/camera.png")} />
          </TouchableOpacity>
        ))}
      {mutationLoading && (
        <ContainerA>
          <ActivityIndicator size="small" color="#0000ff" />
        </ContainerA>
      )}
    </View>
  );
};

export default ProfileAvatar;
