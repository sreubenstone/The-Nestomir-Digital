import React, { Component } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import Logo from "./Logo";
import {
  ProgressStyles,
  GlobalStyles,
  ProgressCardStyles
} from "../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class Profile extends Component<IProps> {
  static navigationOptions = {
    header: null
    // headerTitle: () => <Logo />
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <ImageBackground
            source={require("../assets/images/sky.png")}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </View>
        <View style={ProgressStyles.container}>
          <Image
            source={require("../assets/images/kid.png")}
            style={{
              width: 125,
              height: 125,
              borderRadius: 9,
              position: "absolute",
              top: -74,
              left: "37.5%"
            }}
          />
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              fontWeight: "800",
              fontSize: 19
            }}
          >
            Scott Bart
          </Text>
          <Text style={{ textAlign: "center", fontSize: 10, marginTop: 3 }}>
            Middle school student in Scottsdale, AZ.
          </Text>

          <View
            style={[
              GlobalStyles.flexRowSpace,
              {
                backgroundColor: "#fff",
                marginTop: 20,
                height: 70,
                borderRadius: 13,
                padding: 10,
                shadowOffset: { width: 5, height: 10 },
                shadowColor: "#F7F8FA",
                shadowOpacity: 1
              }
            ]}
          >
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 3
                }}
              >
                3
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 11, fontWeight: "100" }}
              >
                Chapters read
              </Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 3
                }}
              >
                2
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 11, fontWeight: "100" }}
              >
                Forum Activity
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginTop: 20,
              fontWeight: "800",
              fontSize: 17,
              marginBottom: 15
            }}
          >
            Forum Activity
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Q</Text>
            <View style={{ backgroundColor: "#5EBA7D", borderRadius: 5 }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  padding: 2,
                  paddingLeft: 6,
                  paddingRight: 6
                }}
              >
                179
              </Text>
            </View>
            <Text style={{ color: "#0195FF" }}>Where is Draconia located?</Text>
            <Text style={{ color: "#6B737C" }}>Sep 22 '19</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Text>A</Text>
            <View style={{ backgroundColor: "#5EBA7D", borderRadius: 5 }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  padding: 2,
                  paddingLeft: 6,
                  paddingRight: 6
                }}
              >
                122
              </Text>
            </View>
            <Text style={{ color: "#0195FF" }}>Dont think of HTML as pure</Text>
            <Text style={{ color: "#6B737C" }}>Oct 29 '19</Text>
          </View>
        </View>
      </View>
    );
  }
}
