import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import Push from "./Push";
import ProgressMap from "./ProgressMap";
import { ProgressStyles } from "../../Stylesheet";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  data: any;
}

export default class ProgressContainer extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation, data } = this.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <ImageBackground source={require("../../assets/images/solarsystem.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={ProgressStyles.container}>
          <View style={{ width: "100%" }}>
            <Text style={ProgressStyles.title}>The Nestomir</Text>
            <Text style={ProgressStyles.subTitle}>
              The epic journey
              <Text style={{ fontStyle: "italic" }}> awaits.</Text>
            </Text>
            <ProgressMap navigation={navigation} bookmark={data} />
          </View>
        </View>
        <Push />
      </View>
    );
  }
}
