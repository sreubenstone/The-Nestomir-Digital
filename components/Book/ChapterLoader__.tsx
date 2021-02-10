import React, { Component } from "react";
import {
  View,
  ScrollView,
  InteractionManager,
} from "react-native";
import { GlobalStyles } from "../../Stylesheet";
import BookPane from './BookPane';
import ForumModal from "../Forum/ForumModal";
import Checkpoint from "../Forum/Checkpoint";
import styled from "styled-components";
import Prologue from "./Prologue";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5";
import Chapter6 from "./Chapter6";
import Chapter7 from "./Chapter7";
import Chapter8 from "./Chapter8";
import Chapter9 from "./Chapter9";
import Chapter10 from "./Chapter10";
import Chapter11 from "./Chapter11";
import Chapter12 from "./Chapter12";
import Chapter13 from "./Chapter13";
import Chapter14 from "./Chapter14";
import Chapter15 from "./Chapter15";
import Chapter16 from "./Chapter16";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";



const BreakIcon = styled.Text`
  text-align: center;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
`

interface IState {
  bookmark: number;
  screenPos: number;
  overLay: boolean;
  scrolling: boolean;
  animationComplete: boolean;
}

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class ChapterLoader extends Component<IProps, IState> {
  static navigationOptions = {
    header: null,
  };

  state = {
    bookmark: this.props.navigation.getParam("bookmark"),
    screenPos: 0,
    overLay: false,
    scrolling: false,
    animationComplete: false,
  };

  chapters = {
    Prologue: Prologue,
    Chapter1: Chapter1,
    Chapter2: Chapter2,
    Chapter3: Chapter3,
    Chapter4: Chapter4,
    Chapter5: Chapter5,
    Chapter6: Chapter6,
    Chapter7: Chapter7,
    Chapter8: Chapter8,
    Chapter9: Chapter9,
    Chapter10: Chapter10,
    Chapter11: Chapter11,
    Chapter12: Chapter12,
    Chapter13: Chapter13,
    Chapter14: Chapter14,
    Chapter15: Chapter15,
    Chapter16: Chapter16,
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        animationComplete: true,
      });
    });
  }

  setPos = (e) => {
    this.setState({ screenPos: e.nativeEvent.contentOffset.y });
  };

  toggleOverLay = () => {
    if (this.state.scrolling) {
      return;
    }
    this.setState({ overLay: !this.state.overLay });
  };

  setBookMark = () => {
    // Permitting 0 screen position book mark so creates convolusion in this function should be rewritten
    const { bookmark, screenPos } = this.state;
    const diff = Math.abs(screenPos - bookmark);
    if (bookmark) {
      if (diff < 50) {
        this.setState({ bookmark: null });
      } else {
        this.setState({ bookmark: screenPos });
      }
    } else {
      if (bookmark === 0) {
        this.setState({ bookmark: null });
        return
      }
      this.setState({ bookmark: screenPos });
    }
  };

  render() {
    const { navigation } = this.props;
    const {
      bookmark,
      screenPos,
      overLay,
      animationComplete,
    } = this.state;
    const chapter = navigation.getParam("chapter");
    const chapter_index = navigation.getParam("chapter_index");
    const diff = Math.abs(screenPos - bookmark);
    const CurrentChapter = this.chapters[chapter];

    return (
      <View style={{ position: "relative" }}>
        <ScrollView
          // contentOffset={{ x: 0, y: bookmark }}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollTo({ x: 0, y: bookmark })
          }}
          style={[GlobalStyles.container1]}
          scrollEventThrottle={100}
          onScroll={this.setPos}
          onTouchEnd={(e) => {
            this.toggleOverLay();
          }}
          onScrollBeginDrag={() => this.setState({ scrolling: true })}
          onScrollEndDrag={() => this.setState({ scrolling: false })}
        >
          {animationComplete ?
            <View>
              <CurrentChapter />
              <BreakIcon>✧</BreakIcon>
              <Checkpoint chapter_index={chapter_index} navigation={navigation} />
            </View>
            : null}
        </ScrollView>
        <BookPane navigation={navigation} chapter_index={chapter_index} setBookMark={this.setBookMark} bookmark={bookmark} overLay={overLay} screenPos={screenPos} chapter={chapter} diff={diff} />
      </View>
    );
  }
}
