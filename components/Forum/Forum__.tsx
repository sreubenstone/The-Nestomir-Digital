import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import ForumLoader from "./ForumLoader";
import {
  ProgressStyles,
} from "../../Stylesheet";
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
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <ImageBackground source={require("../../assets/images/code.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={ProgressStyles.container}>
          <Text style={{ textAlign: "center", marginTop: 5, fontWeight: "800", fontSize: 19, marginBottom: 20 }}>Forum</Text>
          <ForumLoader navigation={navigation} />
        </View>
      </View>
    );
  }
}
