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
              uri: `https://artignition.com/wp-content/uploads/2017/06/eric-geusz-sci-fi-freighter.jpg`,
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}></Text>

        <Text style={BookStyles.bookFont}>The pilot of the FS Gravis checked his quantum starmap. He was closing in on his interstellar destination—and now it was time to phase back into real-space. He initiated the interstellar drive's five second phase-down sequence by hitting the glowing blue button in front of him, and by then waving his hand over the ship's violet engine-control screen. He waited. A few seconds later, the familiar sounds of warped space opening itself up, and then stitching itself back together, echoed through the freighter’s hull, fuselage, and cargo bay. After a loud sonic clang and a blinding flash of light, the ship sat in the target system as if it had been there all along.{"\n"}{"\n"}Radar confirmed that he was positioned inside of a uni-starred solar system with nine planets. <Text style={{ fontFamily: 'gelasibro-italic' }}>We’ve arrived</Text>, he thought. A feeling of satisfaction and relief surged through him as he scanned the vast expanse of this new galaxy; this had been a risky journey. He tapped his leather seat handle. <Text style={{ fontFamily: 'gelasibro-italic' }}>Thank you for getting me, us, here. I can’t believe I purchased you for one hundred thousand Naronian Kroners! What a steal.</Text>{"\n"}{"\n"}The yellow star in the center of this system caught his attention; it looked similar to Stella, the larger of the two stars that illuminated his home planet. <Text style={{ fontFamily: 'gelasibro-italic' }}>I guess we all come from similar beginnings,</Text> he considered<Text style={{ fontFamily: 'gelasibro-italic' }}>.</Text> But the greenish blue planet, his target, sitting twenty thousand kilometers in front of him was unlike any planet he’d ever seen. Seven continents immersed in entirely clear blue oceans. A white atmosphere as crisp as his grandmother’s iced vanilla wafer pudding. <Text style={{ fontFamily: 'gelasibro-italic' }}>I wonder what it’s like down there,</Text> he pondered. He hit two silver switches on his dashboard to prepare for planetary descent.{"\n"}{"\n"}The radar system began to clatter. The pilot peered at his vessel-detection readout. INCOMING THREAT: SHIP REAR. As he shifted to the back view of his ship, he prayed the alert was triggered by a small asteroid or comet coming too close for comfort. But to his dismay, it was not. It was a silver Vagabond II Stealth Fighter, with its vacuum torpedoes armed and ready to fire. It was one kilometer behind him, and was fast approaching.</Text>

      </View>
    );
  }
}
