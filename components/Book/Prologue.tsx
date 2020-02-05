import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";

const body1 = `It was a star filled night in Grapefield, Wisconsin. The sky looked a bit like a purple dome to an observer staring at the heavens above. The mixture of the night’s moist air and the light from the town-center gave a periwinkle appearance to everything on the ground. 

The cornfield next to Lemmingfield, the less up-kept part of Grapefield, was bristling  as a cool breeze came in from the north-west. It would be considered chilly tonight to anyone who grew up in these parts. But there were no souls in this cornfield on this night in Grapefield, Wisconsin. If there were, they would have seen something like a reddish-white firework exploding a few miles above them. They would have seen a great big fiery white streak coming down at them fast, very fast...and then they would have heard a big BOOOM.
`;

const testBody = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

export default class Prologue extends Component {
  static navigationOptions = {
    header: null
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
              uri: `https://media.istockphoto.com/vectors/moon-rising-over-the-farm-vector-id165531993?k=6&m=165531993&s=612x612&w=0&h=HI3wQbvlWq-b-s8fgr8PwUAirdQuMB6IHyZ6UqGJFQU=`
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}>{body1}</Text>
        <Text style={BookStyles.bookFont}>{testBody}</Text>
      </View>
    );
  }
}
