import React, { FC, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { ProgressStyles } from "../../Stylesheet";

interface IProps {
  toggle: any;
}

const Title = styled.Text`
  color: grey;
  font-weight: 700;
  font-size: 10px;
`;

const Button = styled.View`
  background-color: #50cd9e;
  border-radius: 18px;
`;

const Insert = styled.TextInput`
  background-color: #fff;
  height: 30px;
  border-color: grey;
  border-bottom-width: 0.5px;
  margin-bottom: 20px;
`;

const Signup: FC<IProps> = props => {
  return (
    <View style={{ height: "100%" }}>
      <View style={{ height: "21%" }}>
        <ImageBackground
          source={require("../../assets/images/dragon.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={ProgressStyles.container}>
        <Text style={ProgressStyles.title}>Sign up</Text>
        <Text style={ProgressStyles.subTitle}>Welcome to the Adventure</Text>
        <Title>FIRST NAME</Title>
        <Insert />
        <Title>LAST NAME</Title>
        <Insert />
        <Title>EMAIL</Title>
        <Insert />
        <Title>PASSWORD</Title>
        <Insert />
        <Button>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              paddingTop: 8,
              paddingBottom: 8
            }}
          >
            SIGN UP
          </Text>
        </Button>
        <Text style={{ textAlign: "center", marginTop: 9 }}>
          Already have an account?{" "}
          <Text
            style={{ color: "#8367AF" }}
            onPress={() => props.toggle(false)}
          >
            Log in.
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
