import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";
import Logo from "../Logo";
import ProgressMap from "./ProgressMap";
import { ProgressStyles } from "../../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
  modal: boolean;
}

export default class StoryProgress extends Component<IProps, IState> {
  static navigationOptions = {
    header: null
    // headerTitle: () => <Logo />
  };

  state = {
    modal: false
  };

  modal = () => {
    this.setState({ modal: !this.state.modal });
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
        <View style={ProgressStyles.container}>
          <Text style={ProgressStyles.title}>
            The Adventures of Jake & Dendro
          </Text>
          <Text style={ProgressStyles.subTitle}>
            Learn Computer Science
            <Text style={{ fontStyle: "italic" }}> the right</Text> way.
          </Text>

          <ProgressMap navigation={navigation} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 10
            }}
          >
            <TouchableOpacity onPress={() => this.modal()}>
              <Image
                source={require("../../assets/images/co.png")}
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modal}
        >
          <Text
            style={{
              marginTop: 100,
              marginLeft: 15,
              fontFamily: "gelasio-med",
              fontSize: 19
            }}
          >
            Add Co-Readers
          </Text>
          <Text
            style={{
              marginTop: 100,
              marginLeft: 15,
              fontFamily: "gelasio-med",
              fontSize: 19
            }}
          >
            Current Co-Readers
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                marginLeft: 15,
                marginRight: 20
              }}
              source={{
                uri: `https://d2zcsajde7b23y.cloudfront.net/o/06ba157ab5ad2036290e76c5cc47e267a6855254.jpg`
              }}
            />
            <Text style={{ marginTop: 6 }}>Robin Bart -- Parent</Text>
          </View>
        </Modal>
      </View>
    );
  }
}
