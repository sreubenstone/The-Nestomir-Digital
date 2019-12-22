import React, { Component } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import Logo from "./Logo";
import {
  ProgressStyles,
  GlobalStyles,
  ProgressCardStyles
} from "../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class Chat extends Component<IProps> {
  static navigationOptions = {
    header: null
    // headerTitle: () => <Logo />
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <ImageBackground
            source={require("../assets/images/code.png")}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </View>
        <View style={ProgressStyles.container}>
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              fontWeight: "800",
              fontSize: 19
            }}
          >
            Forum
          </Text>
        </View>
      </View>
    );
  }
}
