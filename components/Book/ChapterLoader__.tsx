import React, { Component } from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { GlobalStyles, ChapterLoaderStyles } from "../../Stylesheet";
import Prologue from "./Prologue";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IState {
  bookmark: number;
  screenPos: number;
  overLay: boolean;
  scrolling: boolean;
}

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class ChapterLoader extends Component<IProps, IState> {
  static navigationOptions = {
    header: null
  };

  state = {
    bookmark: null,
    screenPos: null,
    overLay: false,
    scrolling: false
  };

  chapters = {
    Prologue: Prologue,
    Chapter1: Chapter1,
    Chapter2: Chapter2
  };

  setPos = e => {
    this.setState({ screenPos: e.nativeEvent.contentOffset.y });
  };

  toggleOverLay = () => {
    if (this.state.scrolling) {
      return;
    }
    this.setState({ overLay: !this.state.overLay });
  };

  setBookMark = () => {
    const { bookmark, screenPos } = this.state;
    const diff = Math.abs(screenPos - bookmark);
    if (bookmark) {
      if (diff < 50) {
        this.setState({ bookmark: 0 });
      } else {
        this.setState({ bookmark: screenPos });
      }
    } else {
      this.setState({ bookmark: screenPos });
    }
  };

  render() {
    const { navigation } = this.props;
    const chapter = navigation.getParam("chapter");
    const { bookmark, screenPos, overLay } = this.state;
    const diff = Math.abs(screenPos - bookmark);
    const CurrentChapter = this.chapters[chapter];
    return (
      <View style={{ position: "relative" }}>
        <ScrollView
          style={[GlobalStyles.container1]}
          scrollEventThrottle={100}
          onScroll={this.setPos}
          onTouchEnd={() => this.toggleOverLay()}
          onScrollBeginDrag={() => this.setState({ scrolling: true })}
          onScrollEndDrag={() => this.setState({ scrolling: false })}
        >
          <CurrentChapter />
        </ScrollView>


        <View style={[{
          position: "absolute",
          width: "100%",
          flexDirection: "row",
          justifyContent: 'flex-end',
          marginTop: 200
        }, { display: overLay ? "flex" : "flex" }]}>



          <Image source={require("../../assets/images/forum.png")} style={{
            height: 60,
            width: 60,
            marginRight: 20,
            marginTop: 40
          }} />



        </View>



        <View style={[ChapterLoaderStyles.overlaybox, { display: overLay ? "flex" : "none" }]}>
          <TouchableOpacity onPress={() => this.setBookMark()}>
            <Image source={!bookmark ? require("../../assets/images/bookmark.png") : diff < 50
              ? require("../../assets/images/bookmarked.png")
              : require("../../assets/images/bookmark.png")}
              style={ChapterLoaderStyles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
