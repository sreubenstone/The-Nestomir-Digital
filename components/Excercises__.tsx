import React, { Component } from "react";
import { View, Text } from "react-native";
import { GlobalStyles } from "../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class Excercises extends Component<IProps> {
  static navigationOptions = {
    header: null
    // headerTitle: () => <Logo />
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={GlobalStyles.container1}>
        <Text style={{ marginTop: 50, fontWeight: "bold" }}>Scott Bart</Text>

        <Text style={{ marginTop: 20 }}>Chapters Completed: 4</Text>
        <Text style={{ marginTop: 20 }}>
          Parent Child Conversations Completed: 2
        </Text>

        <Text style={{ marginTop: 20 }}>Parent: Ronna Bart</Text>
      </View>
    );
  }
}
