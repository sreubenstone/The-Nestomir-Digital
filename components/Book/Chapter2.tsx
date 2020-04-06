import React, { Component } from "react";
import {
  ChapterTwo1,
  ChapterTwo2,
  ChapterTwo3,
  ChapterTwo4,
  ChapterTwo5,
  ChapterTwo6,
  ChapterTwo7,
  ChapterTwo8,
  ChapterTwo9,
  ChapterTwo10,
  ChapterTwo11,
  ChapterTwo12,
  ChapterTwo13,
  ChapterTwo14
} from "./Story_Assets/Chapter2";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/styles/hljs";
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
  NavigationState
} from "react-navigation";

export default class Chapter2 extends Component<IProps> {
  static navigationOptions = {
    // headerTitle: "Chapter 2"
    header: null
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
              uri: `https://friendlystock.com/wp-content/uploads/2019/10/11-dangerous-shady-alley-at-night-background-cartoon.jpg`
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}>{ChapterTwo1}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic
            source={require("./../../assets/images/differential.png")}
          />
        </View>
        <Caption>(Dendro Hologram Projection: Automotive differential)</Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo2}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/knee.png")} />
        </View>
        <Caption>
          (Dendro Hologram Projection: The knee modeled as a mechanism)
        </Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo3}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic
            source={require("./../../assets/images/leverage.png")}
          />
        </View>
        <Caption>
          (Dendro Hologram Projection: Diagram depicting mechanical leverage
          goes here)
        </Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo4}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/and.png")} />
        </View>
        <Caption>
          (Dendro’s Hologram Projection: Diagram depicting a mechanical AND
          logic gate)
        </Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo5}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/or.png")} />
        </View>
        <Caption>
          (Dendro Hologram Projection: Diagram depicting a mechanical OR logic
          gate)
        </Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo6}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic
            source={require("./../../assets/images/transistor_analogy.png")}
          />
        </View>
        <Caption>
          (Dendo Hologram Projection: A modern transistor is just a faucet for
          electricity)
        </Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo7}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/ex1.png")} />
        </View>
        <Caption>
          (Dendo Hologram Projection: Diagram depicting AND gate built with two
          transistors)
        </Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo8}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/ex2.png")} />
        </View>
        <Caption>
          (Dendro Hologram Projection: Diagram depicting OR gate built with two
          transistors)
        </Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo9}</Text>
        <Checkpoint checkpoint_id={1} modal={this.props.modal} />
        <SyntaxHighlighter
          language="Python"
          style={dracula}
          highlighter={"hljs"}
          customStyle={{
            borderWidth: 0.5,
            borderRadius: 3,
            marginBottom: 28
          }}
        >
          {`# add.py \n\nSum = 2 + 3 \n\nprint(Sum)`}
        </SyntaxHighlighter>
        <Caption>
          (Dendro Hologram Projection: Python script written by Dendro)
        </Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo10}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/adder.png")} />
        </View>
        <Caption>
          (Dendro Hologram Projection: Diagram depicting simplified view of a
          CPU processing instructions)
        </Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo11}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/tt.png")} />
        </View>
        <Caption>(UTMA: Truth Table Template)</Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo12}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/jakett.png")} />
        </View>
        <Caption>(UTMA: Truth Table Template)</Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo13}</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/jakett2.png")} />
        </View>
        <Caption>(UTMA: Truth Table Template)</Caption>
        <Text style={BookStyles.bookFont}>{ChapterTwo14}</Text>
        <Text style={GlobalStyles.chapterTitle}>✧</Text>
      </View>
    );
  }
}
