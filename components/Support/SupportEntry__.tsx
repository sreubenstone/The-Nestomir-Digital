import React, { Component } from "react";
import { View } from "react-native";
import Form from "./Form";

import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class Support extends Component<IProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Support & Feedback",
    };
  };

  render() {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ width: "75%", marginTop: 14.5 }}>
          <Form navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
