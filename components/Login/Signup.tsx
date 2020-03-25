import React, { Component } from "react";
import * as SecureStore from "expo-secure-store";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { ProgressStyles } from "../../Stylesheet";
import Env from "./../../config";

interface IProps {
  toggle: any;
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

export default class Signup extends Component<IProps> {
  state = {
    email: "",
    username: "",
    pw: "",
    error: null
  };

  signUp = async () => {
    const url = `${Env.server}/signup`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const server = await response.json();
      if (server.status === "success") {
        const token = server.token;
        // const result = await SecureStore.setItemAsync("fbToken", token);
        // refetch();
      } else {
        this.setState({ error: server.error });
      }
    } catch (error) {
      console.error("Error here:", error);
    }
  };

  validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  render() {
    const { username, email, pw, error } = this.state;
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
          <View style={{ marginTop: 15 }}>
            <Title>USERNAME</Title>
            <Insert
              onChangeText={text => this.setState({ username: text })}
              value={username}
              autoCapitalize="none"
            />
            <Title>EMAIL</Title>
            <Insert
              onChangeText={text => this.setState({ email: text })}
              value={email}
              autoCapitalize="none"
            />
            <Title>PASSWORD</Title>
            <Insert
              onChangeText={text => this.setState({ pw: text })}
              value={pw}
              autoCapitalize="none"
            />
          </View>
          {error ? <ErrorText>{error}</ErrorText> : null}
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={() => {
                if (!username || !pw || !email) {
                  this.setState({
                    error: "Username, Email, or Password can not be blank!"
                  });
                  return;
                }
                if (!this.validateEmail(email)) {
                  this.setState({ error: "Invalid email format." });
                  return;
                }
                this.signUp();
              }}
            >
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
            </TouchableOpacity>
            <Text style={{ textAlign: "center", marginTop: 9, fontSize: 10 }}>
              Already have an account?{" "}
              <Text
                style={{ color: "#8367AF" }}
                onPress={() => this.props.toggle(false)}
              >
                Log in.
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
