import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const body1 = `It was a star filled night in Grapefield, Wisconsin. The sky looked a bit like a purple dome to an observer staring at the heavens above. The mixture of the night’s moist air and the light from the town-center gave a periwinkle appearance to everything on the ground. 

The cornfield next to Lemmingfield, the less up-kept part of Grapefield, was bristling  as a cool breeze came in from the north-west. It would be considered chilly tonight to anyone who grew up in these parts. But there were no souls in this cornfield on this night in Grapefield, Wisconsin. If there were, they would have seen something like a reddish-white firework exploding a few miles above them. They would have seen a great big fiery white streak coming down at them fast, very fast...and then they would have heard a big BOOOM.
`;

export default class Prologue extends Component<IProps> {
  static navigationOptions = {
    headerTitle: "Prologue"
    // header: null
  };

  render() {
    return (
      <ScrollView style={GlobalStyles.container1}>
        <Text style={GlobalStyles.chapterTitle}>Prologue</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `http://byprithviraj.com/wp-content/uploads/2018/03/night_scene_illustration.jpg`
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}>{body1}</Text>
        <Text style={GlobalStyles.chapterTitle}>✧</Text>
        <Text>Finished reading?</Text>
      </ScrollView>
    );
  }
}
