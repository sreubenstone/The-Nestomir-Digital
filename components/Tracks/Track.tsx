import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Stylesheet from "../../Stylesheet";
import Logo from "../Logo";

export default class Track extends Component<{}> {
  static navigationOptions = {
    headerTitle: () => <Logo />
  };

  render() {
    const text = `It was a star filled night in Grapefield, Wisconsin. The sky looked a bit like a purple dome to an observer staring at the heavens above. The mixture of the night’s moist air and the light from the town-center gave a periwinkle appearance to everything on the ground. 
  
  The cornfield next to Lemmingfield, the less up-kept part of Grapefield, was bristling  as a cool breeze came in from the north-west. It would be considered chilly tonight to anyone who grew up in these parts. But there were no souls in this cornfield on this night in Grapefield, Wisconsin. If there were, they would have seen something like a reddish-white firework exploding a few miles above them. They would have seen a great big fiery white streak coming down at them fast, very fast...and then they would have heard a big BOOOM.
  `;
    return (
      <View style={Stylesheet.container1}>
        <Text style={Stylesheet.bookTitle}>
          The Adventures of Jake & Dendro
        </Text>
        <Text style={Stylesheet.chapterTitle}>Prologue</Text>
        <View style={Stylesheet.flexCenter}>
          <Image
            style={Stylesheet.chapterImage}
            source={{
              uri: `https://vignette.wikia.nocookie.net/joke-battles/images/d/d0/The_dragon.png/revision/latest?cb=20190823232618`
            }}
          />
        </View>
        <Text style={Stylesheet.bookFont}>{text}</Text>
        <Text style={Stylesheet.chapterTitle}>✧</Text>
      </View>
    );
  }
}
