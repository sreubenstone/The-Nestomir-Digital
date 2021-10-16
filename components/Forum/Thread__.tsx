import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ThreadLoader from "./ThreadLoader";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ContainerStyle = {
  height: "100%",
  width: "100%",
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  zIndex: 10,
  position: "absolute",
  top: "0%",
  paddingTop: 6,
  paddingLeft: 15,
  paddingRight: 15,
  backgroundColor: "#FAFBFC",
};

export default class Thread extends Component<IProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate("Forum")}>
          <Image source={require("../../assets/images/back.png")} style={{ width: 20, height: 20, marginLeft: 15.5 }} />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const thread_id = this.props.navigation.getParam("thread_id");
    return (
      <View style={{ height: "100%" }}>
        <View
          style={{
            height: "21%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ImageBackground source={require("../../assets/images/dragon.png")} style={{ width: "100%", height: "100%", flexDirection: "row" }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "gelasio",
                color: "#fff",
              }}
            >
              Forum
            </Text>
          </ImageBackground>
        </View>
        <KeyboardAwareScrollView style={ContainerStyle} enableResetScrollToCoords={false} scrollEnabled>
          <ThreadLoader thread_id={thread_id} navigation={this.props.navigation} />
          <View style={{ marginTop: 20 }} />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
