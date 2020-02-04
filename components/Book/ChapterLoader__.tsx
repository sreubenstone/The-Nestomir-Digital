import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { GlobalStyles, ChapterLoaderStyles } from "../../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";
import Prologue from "./Prologue";

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

  setBookMark = diff => {
    const { bookmark, screenPos } = this.state;
    if (bookmark && diff < 50) {
      this.setState({ bookmark: 0 });
      return;
    }
    if (bookmark) {
      this.setState({ bookmark: screenPos });
      return;
    }
    this.setState({ bookmark: screenPos });
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

  render() {
    const { bookmark, screenPos, overLay } = this.state;
    const { navigation } = this.props;
    const diff = Math.abs(screenPos - bookmark);
    return (
      <View style={{ position: "relative" }}>
        <ScrollView
          style={[GlobalStyles.container1]}
          scrollEventThrottle={16}
          onScroll={this.setPos}
          onTouchEnd={() => this.toggleOverLay()}
          onScrollBeginDrag={() => this.setState({ scrolling: true })}
          onScrollEndDrag={() => this.setState({ scrolling: false })}
        >
          <Prologue />
        </ScrollView>
        <View
          style={[
            ChapterLoaderStyles.overlaybox,
            { display: overLay ? "flex" : "none" }
          ]}
        >
          <TouchableOpacity onPress={() => this.setBookMark(diff)}>
            <Image
              source={
                !bookmark
                  ? require("../../assets/images/bookmark.png")
                  : diff < 50
                  ? require("../../assets/images/bookmarked.png")
                  : require("../../assets/images/bookmark.png")
              }
              style={ChapterLoaderStyles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
