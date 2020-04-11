import React, { Component } from "react";
import { ChapterTwo1, ChapterTwo2 } from "./Story_Assets/Chapter2";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";
import Checkpoint from "../Forum/Checkpoint";

interface IProps {
  modal: (id: number) => void;
}

const StoryGraphic = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 20px;
`;

const Caption = styled.Text`
  text-align: center;
  font-size: 10px;
  margin-top: 8px;
  font-family: "gelasio";
  margin-bottom: 20px;
`;

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

export default class Chapter2 extends Component<IProps> {
  static navigationOptions = {
    // headerTitle: "Chapter 2"
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log("rendered chapter2");
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 2</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://friendlystock.com/wp-content/uploads/2019/10/11-dangerous-shady-alley-at-night-background-cartoon.jpg`,
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}>{ChapterTwo1}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/faucet.png")} />
        </View>
        <Caption>(Sketch by Zenshi Hedoku)</Caption>
        <Checkpoint checkpoint_id={1} modal={this.props.modal} />
        <Text style={BookStyles.bookFont}>{ChapterTwo2}</Text>
        <Text style={GlobalStyles.chapterTitle}>✧</Text>
      </View>
    );
  }
}
