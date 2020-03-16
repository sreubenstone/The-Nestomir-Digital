import React, { FC, useState } from "react";
import { View, Text, ImageBackground, TextInput } from "react-native";
import styled from "styled-components";
import { ProgressStyles } from "../../Stylesheet";

interface IProps {}

const Login: FC<IProps> = props => {
  return (
    <View style={{ height: "100%" }}>
      <View style={{ height: "21%" }}>
        <ImageBackground
          source={require("../../assets/images/dragon.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={ProgressStyles.container}>
        <Text style={ProgressStyles.title}>Sign up or Login </Text>
        <Text style={ProgressStyles.subTitle}>Welcome to the Adventure</Text>
        <TextInput>asdf</TextInput>
      </View>
    </View>
  );
};

export default Login;
