import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
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
    // headerTitle: () => <Logo />
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <ImageBackground source={require("../../assets/images/code.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={ProgressStyles.container}>
          <Text style={{ textAlign: "center", marginTop: 5, fontWeight: "800", fontSize: 19 }}>Forum</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Thread')}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 }}>
              <Image
                source={require("../../assets/images/kid.png")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 12,
                }}
              />
              <Text style={{ color: "#0195FF", alignSelf: 'center' }}>When Computers Clicked</Text>
              <Text style={{ color: "#6B737C", alignSelf: 'center' }}>3 min ago</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
