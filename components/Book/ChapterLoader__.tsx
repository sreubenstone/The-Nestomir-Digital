import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
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
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";



const BreakIcon = styled.Text`
text-align: center;
 font-size: 18px;
 margin-bottom: 30px;
`


interface IState {
  id: number;
  modal: boolean;
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
    modal: false,
    id: null,
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
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        animationComplete: true,
      });
    });
  }


  modal = (id: number): void => {
    this.setState({ modal: !this.state.modal, id: id });
  };

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
      id,
      modal,
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
              <CurrentChapter modal={this.modal} />
              <BreakIcon>✧</BreakIcon>
              <Checkpoint checkpoint_id={1} modal={this.modal} navigation={navigation} />
            </View>
            : null}

        </ScrollView>
        <BookPane navigation={navigation} chapter_index={chapter_index} setBookMark={this.setBookMark} bookmark={bookmark} overLay={overLay} screenPos={screenPos} chapter={chapter} diff={diff} />
        <Modal animationType="slide" transparent visible={modal}>
          <ForumModal modal={this.modal} id={id} />
        </Modal>
      </View>
    );
  }
}
