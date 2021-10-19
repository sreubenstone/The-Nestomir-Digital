import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import GlossaryMap from "./GlossaryMap";
import { ProgressStyles } from "../../../Stylesheet";

interface IProps {
  navigation: any;
}

export default class GlossaryEntry extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <ImageBackground source={require("../../../assets/images/title.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={ProgressStyles.container}>
          <View style={{ width: "100%" }}>
            <Text style={ProgressStyles.title}>Glossary</Text>
            <Text style={ProgressStyles.subTitle}>Learn more about code.</Text>
            <GlossaryMap navigation={navigation} />
          </View>
        </View>
      </View>
    );
  }
}
