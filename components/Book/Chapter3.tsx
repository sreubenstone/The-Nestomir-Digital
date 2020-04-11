import React, { Component } from "react";
import {
  ChapterThree1,
  ChapterThree2,
  ChapterThree3,
} from "./Story_Assets/Chapter3";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";

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
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 3</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://us.123rf.com/450wm/weter78/weter781801/weter78180100006/92789859-starry-sky-background-flat-vector-illustration-white-stars-.jpg?ver=6`,
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}>{ChapterThree1}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/faucetd.png")} />
        </View>
        <Caption>(Zenshi Hedoku’s diagram)</Caption>
        <Text style={BookStyles.bookFont}>{ChapterThree2}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/tr.png")} />
        </View>
        <Caption>
          (Chester Eclaire’s first sketch of a transistor he built at his desk
          **should include NPN subtly)
        </Caption>
        <Text style={BookStyles.bookFont}>{ChapterThree3}</Text>
      </View>
    );
  }
}
