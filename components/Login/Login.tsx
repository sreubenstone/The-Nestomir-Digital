import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import styled from "styled-components";
import { ProgressStyles } from "../../Stylesheet";
import Env from "./../../config";
import { Dimensions } from "react-native";

interface IProps {
  toggle: any;
  refetch: any;
}
const Title = styled.Text`
  color: grey;
  font-weight: 700;
  font-size: 10px;
`;

const ErrorText = styled.Text`
  color: red;
  font-weight: 300;
  font-size: 10px;
  text-align: center;
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

export default class Login extends Component<IProps> {
  state = {
    email: "",
    pw: "",
    error: null,
  };

  logIn = async () => {
    const url = `${Env.server}/login`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const server = await response.json();
      if (server.status === "success") {
        const jwt_from_server = server.token;
        const result = await SecureStore.setItemAsync("jwt", jwt_from_server);
        this.props.refetch();
      } else {
        this.setState({ error: server.error });
      }
    } catch (error) {
      console.error("Error here:", error);
    }
  };

  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  render() {
    const windowWidth = Dimensions.get("window").width;
    const { email, pw, error } = this.state;

    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <ImageBackground source={require("../../assets/images/dragon.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={ProgressStyles.container}>
          <View style={{ width: windowWidth > 800 ? "70%" : "100%" }}>
            <Text style={ProgressStyles.title}>Log in</Text>
            <Text style={ProgressStyles.subTitle}>Dive back into the adventure.</Text>
            <View style={{ marginTop: 15 }}>
              <Title>EMAIL</Title>
              <Insert onChangeText={(text) => this.setState({ email: text })} value={email} autoCapitalize="none" />
              <Title>PASSWORD</Title>
              <Insert onChangeText={(text) => this.setState({ pw: text })} value={pw} autoCapitalize="none" />
            </View>
            {error ? <ErrorText>{error}</ErrorText> : null}

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  if (!email || !pw) {
                    this.setState({
                      error: "Username, Email, or Password can not be blank!",
                    });
                    return;
                  }
                  if (!this.validateEmail(email)) {
                    this.setState({ error: "Invalid email format." });
                    return;
                  }
                  this.logIn();
                }}
              >
                <Button>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: "bold",
                      paddingTop: 8,
                      paddingBottom: 8,
                    }}
                  >
                    LOG IN
                  </Text>
                </Button>
              </TouchableOpacity>
              <Text style={{ textAlign: "center", marginTop: 9, fontSize: 10 }}>
                Don't have an account?{" "}
                <Text style={{ color: "#8367AF" }} onPress={() => this.props.toggle(true)}>
                  Sign up{" "}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
