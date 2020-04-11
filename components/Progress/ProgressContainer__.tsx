import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import ProgressMap from "./ProgressMap";
import { ProgressStyles } from "../../Stylesheet";
import * as SecureStore from "expo-secure-store";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class ProgressContainer extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <ImageBackground source={require("../../assets/images/dragon.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={ProgressStyles.container}>
          <Text style={ProgressStyles.title}>The Nestomir</Text>
          <Text style={ProgressStyles.subTitle}>Start The Epic Journey.
          <Text style={{ fontStyle: "italic" }}> Find Your Learning Force.</Text>
          </Text>
          <ProgressMap navigation={navigation} />
          {/* <TouchableOpacity onPress={() => SecureStore.deleteItemAsync("jwt")}>
            <Text style={{ fontSize: 9 }}>clear store</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}
