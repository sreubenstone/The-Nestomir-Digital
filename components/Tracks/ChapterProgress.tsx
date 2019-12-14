import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import Logo from "../Logo";
import Stylesheet from "../../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class ChapterProgress extends Component<IProps> {
  static navigationOptions = {
    headerTitle: () => <Logo />
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <ImageBackground
            source={require("../../assets/images/dragon.png")}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </View>
        <View
          style={{
            height: "84%",
            width: "100%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "#fff",
            zIndex: 10,
            position: "absolute",
            top: "16%"
          }}
        ></View>
      </View>
    );
  }
}
