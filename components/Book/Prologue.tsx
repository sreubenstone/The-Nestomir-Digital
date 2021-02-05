import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import { Prologue1 } from "./Story_Assets/Prologue";

interface IProps {
  modal: (id: number) => void;
}

export default class Prologue extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log("rendered prologue");

    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Prologue</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://cdn.mos.cms.futurecdn.net/2UYJxzeDtUxMYAFkdwo28Z.jpg`,
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}></Text>
        <Text style={BookStyles.bookFont}><Text></Text>I<Text style={{ fontStyle: 'italic', fontFamily: 'gelasio-med' }}>love</Text>dogs</Text>
        {/* <Text style={BookStyles.bookFont}>{Prologue1}</Text> */}
      </View>
    );
  }
}
