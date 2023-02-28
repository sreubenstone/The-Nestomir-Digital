import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../Other/Stylesheet";
import GlossaryWord from "../Glossary/inline/GlossaryWord";
import Egg from "../Egg/EggInline";

interface IProps {
  toggleGlossary: (id: string) => void;
  toggleEggModal: (quiz_number: number) => void;
}

export default class Prologue extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Prologue</Text>
        <Text style={GlobalStyles.chapterSubTitle}>Tuesday Night</Text>

        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://res.cloudinary.com/dshxqbjrf/image/upload/v1633998380/chapter_symbol_sfj0ji.png`,
            }}
          />
        </View>
        {
          // Section 1 Below
        }
        <Text style={BookStyles.bookFont}>
          The pilot of the <Text style={{ fontFamily: "gelasibro-italic" }}>FS Gravis</Text> checked his <GlossaryWord lookup_string="Quantumstarmap" word="quantum starmap" toggleGlossary={this.props.toggleGlossary} />. He was closing in on his
          destination-and now it was time to phase back into <GlossaryWord lookup_string="Realspace" word="real-space" toggleGlossary={this.props.toggleGlossary} />. He initiated the{" "}
          <GlossaryWord lookup_string="Interstellarbooster" word="interstellar drive's" toggleGlossary={this.props.toggleGlossary} /> five second phase-down sequence by hitting the glowing blue button in front of him and waving his hand over the
          ship's engine control screen. A few seconds later, the familiar sounds of warped space opening itself up, and then stitching itself back together, echoed through the freighter. After a loud clang and a blinding flash of light, the ship sat
          in the target system as if it had been there all along.{"\n"}
          {"\n"}Radar confirmed that he was positioned inside of a uni-starred solar system with nine planets. <Text style={{ fontFamily: "gelasibro-italic" }}>We’ve arrived</Text>, he thought. A feeling of satisfaction and relief surged through him
          as he scanned the vast expanse of this new galaxy. He tapped his leather seat handle.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Thank you for getting me—us—here. I can’t believe I purchased you for one hundred thousand Naronian Kroners! What a steal.</Text>
          {"\n"}
          {"\n"}The yellow star in the center of this system caught the pilot’s attention. It looked similar to Stella, the larger of the two stars that illuminated his home planet.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I guess we all come from similar beginnings,</Text> he thought<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> But the greenish blue planet, his target, sitting twenty thousand
          kilometers in front of him was unlike any planet he’d ever seen. Seven continents immersed in clear blue oceans. A white atmosphere as crisp as his grandmother’s iced vanilla wafer pudding.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder what it’s like down there.</Text> He hit two silver switches on his dashboard to prepare for planetary descent.{"\n"}
          {"\n"}The radar system began to clatter. The pilot peered at his vessel-detection readout. INCOMING THREAT: SHIP REAR. As he shifted to the back view of his ship, he prayed the alert was triggered by a small asteroid or comet coming too
          close.{"\n"}
          {"\n"}But to his dismay, it was not.{"\n"}
          {"\n"}It was a silver Vagabond II Stealth Fighter, with vacuum torpedoes armed and ready to fire. It was one kilometer behind him and approaching fast.
        </Text>
      </View>
    );
  }
}
