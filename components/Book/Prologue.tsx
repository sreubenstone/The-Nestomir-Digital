import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import { Prologue1, Prologue2, Prologue3, Prologue4 } from './storyassets';
import styled from 'styled-components';


interface IProps {
  modal: (id: number) => void;
}

const Checkpoint = styled.Image`
height: 50px; 
width: 50px;
align-self: center;
margin-bottom: 20px;
`;


export default class Prologue extends Component<IProps> {
  static navigationOptions = {
    header: null
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
    console.log("rendered prologue");
    const NO_WIDTH_SPACE = '​';
    const highlight = string => (
      <Text onPress={(e) => this.props.modal(1)}>
        {string.split(' ').map((word, i) => (
          <Text key={i}>
            <Text style={[BookStyles.bookFont, { backgroundColor: '#97FFFC' }]}>{word} </Text>
            {NO_WIDTH_SPACE}
          </Text>
        ))}
      </Text>);

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
        {/* <Text style={BookStyles.bookFont}>{Prologue1} {highlight(Prologue2)}{Prologue3}</Text> */}
        <TouchableOpacity onPress={(e) => this.props.modal(1)}>
          <Checkpoint source={require("../../assets/images/checkpoint.png")} />
        </TouchableOpacity>
        <Text style={BookStyles.bookFont}>{Prologue4}</Text>
      </View>
    );
  }
}
