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

export default class Forum extends Component<IProps> {
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30
            }}
          >
            <Text>by sbart</Text>
            <View style={{ backgroundColor: "#5EBA7D", borderRadius: 5 }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  padding: 2,
                  paddingLeft: 6,
                  paddingRight: 6
                }}
              >
                179
              </Text>
            </View>
            <Text style={{ color: "#0195FF" }}>Where is Draconia located?</Text>
            <Text style={{ color: "#6B737C" }}>3 min ago</Text>
          </View>
        </View>
      </View>
    );
  }
}
