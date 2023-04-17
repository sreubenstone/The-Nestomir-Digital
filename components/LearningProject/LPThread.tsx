import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ThreadLoader from "../Forum/ThreadLoader";

interface IProps {
  navigation: any;
  route: any;
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

export default class LPThread extends Component<IProps> {
  render() {
    const thread_id = 8;
    return (
      <View style={{ height: "100%" }}>
        <View
          style={{
            height: "21%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ImageBackground source={require("../../assets/images/zena.png")} style={{ width: "100%", height: "100%", flexDirection: "row" }}>
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
