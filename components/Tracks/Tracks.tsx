import React, { Component } from "react";
import { View, Text } from "react-native";
import Stylesheet from "../../Stylesheet";
import MyTracks from "./MyTracks";
import Logo from "../Logo";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class Track extends Component<IProps> {
  static navigationOptions = {
    headerTitle: () => <Logo />
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={Stylesheet.container1}>
        <Text style={Stylesheet.textHeader}>My Tracks</Text>
        <MyTracks navigation={navigation} />
      </View>
    );
  }
}
