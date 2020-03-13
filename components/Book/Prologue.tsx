import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import { Prologue1, Prologue2, Prologue3, Prologue4 } from './storyassets';
import Checkpoint from '../Forum/Checkpoint';

interface IProps {
  modal: (id: number) => void;
}

export default class Prologue extends Component<IProps> {
  static navigationOptions = {
    header: null
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
    console.log("rendered prologue");

    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Prologue</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://media.istockphoto.com/vectors/moon-rising-over-the-farm-vector-id165531993?k=6&m=165531993&s=612x612&w=0&h=HI3wQbvlWq-b-s8fgr8PwUAirdQuMB6IHyZ6UqGJFQU=`
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}></Text>
        <Text style={BookStyles.bookFont}>{Prologue1} {Prologue2}{Prologue3}</Text>
        <Checkpoint checkpoint_id={1} modal={this.props.modal} />
        <Text style={BookStyles.bookFont}>{Prologue4}</Text>
      </View>
    );
  }
}
