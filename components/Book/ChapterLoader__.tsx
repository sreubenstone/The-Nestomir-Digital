import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  InteractionManager,
} from "react-native";
import { GlobalStyles, ChapterLoaderStyles } from "../../Stylesheet";
import ForumModal from "../Forum/ForumModal";
import Prologue from "./Prologue";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

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
    bookmark: null,
    screenPos: null,
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
    const {
      bookmark,
      screenPos,
      overLay,
      id,
      modal,
      animationComplete,
    } = this.state;
    const chapter = navigation.getParam("chapter");
    const diff = Math.abs(screenPos - bookmark);
    const CurrentChapter = this.chapters[chapter];
    return (
      <View style={{ position: "relative" }}>
        <ScrollView
          style={[GlobalStyles.container1]}
          scrollEventThrottle={100}
          onScroll={this.setPos}
          onTouchEnd={(e) => {
            this.toggleOverLay();
          }}
          onScrollBeginDrag={() => this.setState({ scrolling: true })}
          onScrollEndDrag={() => this.setState({ scrolling: false })}
        >
          {animationComplete ? <CurrentChapter modal={this.modal} /> : null}
        </ScrollView>
        <View
          style={[
            ChapterLoaderStyles.overlaybox,
            { display: overLay ? "flex" : "none" },
          ]}
        >
          <TouchableOpacity onPress={() => this.setBookMark()}>
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
        <Modal animationType="slide" transparent visible={modal}>
          <ForumModal modal={this.modal} id={id} />
        </Modal>
      </View>
    );
  }
}
