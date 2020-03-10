import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
} from "react-native";
import Logo from "../Logo";
import ProgressMap from "./ProgressMap";
import { ProgressStyles } from "../../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
  modal: boolean;
}

export default class ProgressContainer extends Component<IProps, IState> {
  static navigationOptions = {
    header: null
    // headerTitle: () => <Logo />
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <ImageBackground source={require("../../assets/images/dragon.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={ProgressStyles.container}>
          <Text style={ProgressStyles.title}>The Adventures of Jake & Dendro</Text>
          <Text style={ProgressStyles.subTitle}>Learn Computer Science<Text style={{ fontStyle: "italic" }}> the right</Text> way.</Text>
          <ProgressMap navigation={navigation} />
        </View>
      </View>
    );
  }
}
