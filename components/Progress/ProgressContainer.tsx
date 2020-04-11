import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import ProgressMap from "./ProgressMap";
import { ProgressStyles } from "../../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  data: any
}

export default class ProgressContainer extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation, data } = this.props;
    console.log('data here:', data)
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



