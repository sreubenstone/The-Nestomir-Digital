import React, { Component } from "react";
import { View, Text } from "react-native";
import Stylesheet from "../../Stylesheet";
import MyTracks from "./MyTracks";
import Logo from "../Logo";

export default class Track extends Component<{}> {
  static navigationOptions = {
    headerTitle: () => <Logo />
  };

  render() {
    return (
      <View style={Stylesheet.container1}>
        <Text style={Stylesheet.textHeader}>My Tracks</Text>
        <MyTracks />
      </View>
    );
  }
}
