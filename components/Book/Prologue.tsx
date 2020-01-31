import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IState {
  pos: number;
}

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const body1 = `It was a star filled night in Grapefield, Wisconsin. The sky looked a bit like a purple dome to an observer staring at the heavens above. The mixture of the night’s moist air and the light from the town-center gave a periwinkle appearance to everything on the ground. 

The cornfield next to Lemmingfield, the less up-kept part of Grapefield, was bristling  as a cool breeze came in from the north-west. It would be considered chilly tonight to anyone who grew up in these parts. But there were no souls in this cornfield on this night in Grapefield, Wisconsin. If there were, they would have seen something like a reddish-white firework exploding a few miles above them. They would have seen a great big fiery white streak coming down at them fast, very fast...and then they would have heard a big BOOOM.
`;

export default class Prologue extends Component<IProps, IState> {
  static navigationOptions = {
    header: null
  };

  state = {
    pos: null
  };

  setPos = e => {
    this.setState({ pos: e.nativeEvent.contentOffset.y });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ position: "relative" }}>
        <ScrollView style={[GlobalStyles.container1]} onScroll={this.setPos}>
          <Text style={GlobalStyles.chapterTitle}>Prologue</Text>
          <View style={GlobalStyles.flexCenter}>
            <Image
              style={GlobalStyles.chapterImage}
              source={{
                uri: `https://media.istockphoto.com/vectors/moon-rising-over-the-farm-vector-id165531993?k=6&m=165531993&s=612x612&w=0&h=HI3wQbvlWq-b-s8fgr8PwUAirdQuMB6IHyZ6UqGJFQU=`
              }}
            />
          </View>
          <Text style={BookStyles.bookFont}>{body1}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("StoryProgress")}
          >
            <Text>Finished reading?</Text>
          </TouchableOpacity>
          <Text style={GlobalStyles.chapterTitle}>✧</Text>
        </ScrollView>
        <View
          style={{
            position: "absolute",
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Image
            source={require("../../assets/images/bookmarked.png")}
            style={{ height: 70, width: 35, marginRight: 20, marginTop: 40 }}
          />
        </View>
      </View>
    );
  }
}
