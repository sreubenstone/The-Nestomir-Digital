import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import Logo from "../Logo";
import MapChapters from "./MapChapters";
import { ChapterStyles } from "../../Stylesheet";
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
        <View style={ChapterStyles.container}>
          <Text style={ChapterStyles.title}>
            The Adventures of Jake & Dendro
          </Text>
          <Text style={ChapterStyles.subTitle}>
            Learn Computer Science
            <Text style={{ fontStyle: "italic" }}> the right</Text> way.
          </Text>
          <MapChapters navigation={navigation} />
        </View>
      </View>
    );
  }
}
