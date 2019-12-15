import React, { Component } from "react";
import { View, Text } from "react-native";
import { GlobalStyles } from "../../Stylesheet";
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
    headerTitle: () => <Logo title="test" />
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={GlobalStyles.container1}>
        <Text style={GlobalStyles.textHeader}>My Stories</Text>
        <MyTracks navigation={navigation} />
      </View>
    );
  }
}
