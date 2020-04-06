import React, { Component } from "react";
import { ChapterOne1 } from "./Story_Assets/Chapter1";

import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

export default class Chapter1 extends Component {
  static navigationOptions = {
    // headerTitle: "Chapter 1"
    header: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 1</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://library.kissclipart.com/20180831/bww/kissclipart-cartoon-high-school-hallway-clipart-cartoon-middle-9d475ddfa4b8008e.png`
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}>{ChapterOne1}</Text>
        <Text style={GlobalStyles.chapterTitle}>✧</Text>
      </View>
    );
  }
}
