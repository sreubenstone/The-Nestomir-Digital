import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";
import GlossaryWord from "../Glossary/GlossaryWord";

const StoryGraphic = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Caption = styled.Text`
  text-align: center;
  font-size: 10px;
  margin-top: 8px;
  font-family: "gelasio";
  margin-bottom: 20px;
`;

interface IProps {
  toggleGlossary: (id: string) => void;
}

export default class Chapter16 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 16</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://ih1.redbubble.net/image.889628986.9419/aps,504x498,small,transparent-pad,600x600,f8f8f8.jpg`,
            }}
          />
        </View>

        {
          // Section 1 Below
        }
        <Text style={BookStyles.bookFont}>
          As the ship tore through the Earth's troposphere, Jake slipped away from consciousness somewhere over the Atlantic ocean. He dreamt of Morocco, grilled lamb kabobs, and spirit boarding with Zena. A few hours later, he reopened his eyes and
          spotted a topographic map of the North American continent emerging on a cockpit display.{"\n"}
          {"\n"}"How far are we?" Jake asked.{"\n"}
          {"\n"}"About an hour," Dendro responded. "We're almost there."{"\n"}
          {"\n"}Maybe this is all coming to an end, he thought. Dendro had explained at take off that he had no choice but to bring Jake home. It was the least dangerous option, with Zimmer gone, Knights of Diu Khien after them, and still no
          communication access to his men. Spectator One would be disobeyed.{"\n"}
          {"\n"}Jake studied the interstellar booster's control screen. The display had been embedded into the cockpit's center console. A multi-colored circular progress meter sat in the center. That is a magical piece of equipment. Dendro now had
          the power to cut through space and traverse the heavens at will.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What are Diana and Jimmy doing right now?</Text> Hundreds of people must have been searching for him. Had he been on the local news? Did they think he had been kidnapped, or worse? No matter
          what his family thought, he had to get back to them. The story he told mattered less.{"\n"}
          {"\n"}As Jake peered at the piece of art Dendro's niece created, which was glimmering on one of the smaller cockpit screens above him, he thought of the alien girl, living in a foreign galaxy called The Nestomir. Then he thought of the ice
          rink, the Casablanca apartment, and the dojo. Was it really just chance that brought him and Dendro together that evening in the cornfield?{"\n"}
          {"\n"}As they began to descend, he watched the clouds pass over the nose of the ship. Then he rolled up the sleeve of his hoodie, exposing the markings on his arm. What would he say about them?{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I have absolutely no idea</Text>, he thought. <Text style={{ fontFamily: "gelasibro-italic" }}>At least the weather will be getting colder—no t-shirts for a while</Text>.{"\n"}
          {"\n"}As they descended through the final layer of clouds, Wisconsin's rectangularly sliced farmland came into view. Then he caught sight of his home city. And then they were only a few hundred feet above Sheffield's Playground, Dendro's
          chosen landing point, initiating their vertical landing.{"\n"}
          {"\n"}The ship shook gently as it made contact with the ground. Through the cockpit window, Jake could see leaves shooting into the air and the empty swing sets rustling in the wind. Dendro shut off the ship lights and unbuckled his belt.
          Then Zena gimped into the cockpit bay; she had been sleeping on the couch in the main cabin. "You are home. We got you back, as Dendro promised, Earthling," she said.{"\n"}
          {"\n"}"Yes, you did," Jake replied quietly.{"\n"}
          {"\n"}Dendro stood up. "Fate brought us together, my friend. And now fate brings us apart—you did not ask me to come on this journey; in fact, you begged not to go, and for good reason. I am profoundly sorry I got you caught up in this
          mess, son."{"\n"}
          {"\n"}Jake's felt some weird emotions pang through him.{"\n"}
          {"\n"}Dendro continued, "But you've been incredibly brave—unexpected for an Earthling of your shape and size. And most importantly—-you've adapted and learned our ways in record time...I hope that you can hold onto these learnings forever.
          Though you will not be allowed to take your Solar forces weapon with you, nor your orb, you will have a new appreciation of the forces that run through <Text style={{ fontFamily: "gelasibro-italic" }}>all</Text> of us."{"\n"}
          {"\n"}When they walked into the main cabin, the ship's hatch was already open; Jake felt a draft of cold air pass by them. <Text style={{ fontFamily: "gelasibro-italic" }}>We're definitely not in Morocco any longer,</Text> he thought.{"\n"}
          {"\n"}As he looked up, Zena grabbed his arm and said, "Jake, I wish you the best of luck. And I encourage you to keep on studying...to keep on learning. And I do hope that fate brings us together again." With that, she gave him a warm
          embrace.{"\n"}
          {"\n"}Jake looked at Zena one final time and said, "Thank you."{"\n"}
          {"\n"}Dendro looked at them. "Let's go, kid. I'll help you off the wing."{"\n"}
          {"\n"}Jake nodded at Zena, and she nodded back. He headed up the ladder, meeting Dendro at the edge of the ship.{"\n"}
          {"\n"}Dendro stood looking over the edge of the wing and uttered, "I'll let you go here, my friend."{"\n"}
          {"\n"}Jake fought back the droplets forming in his eyes and said, "I hope you bring peace to your galaxy, and I hope you find Zimmer. And thank you for teaching me about your world."{"\n"}
          {"\n"}"Don't mention it, Earthling. And we <Text style={{ fontFamily: "gelasibro-italic" }}>will</Text> find our friend and thank you for teaching me about <Text style={{ fontFamily: "gelasibro-italic" }}>your</Text> world, now off you
          go—we wouldn't want your mom worrying a second longer than she needs to," he said.{"\n"}
          {"\n"}As his feet hit the ground, he could sense Dendro standing over him, but he did not look back. He hurried out of the park and down the dark street. He could have sworn he heard the pulsation of the ship's engines hovering above him a
          short time later as he walked, but when he looked up, he saw nothing but the empty early-morning sky. When he turned onto Cedar drive, the lights were off in his house, and his mother's car parked in the driveway.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>It's so quiet,</Text> he thought.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>. . .<Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          </Text>
          {"\n"}
          {"\n"}When Jake had knocked on the front door, the house had been silent. Then the upstairs hallway light had turned on, and Jake had heard the shuffling of footsteps coming down the stairs. His mother had swung open the door and wrapped
          her arms around him, sobbing, without uttering any words. A moment later, his brother had run down the steps in his pajamas and joined the huddle.{"\n"}
          {"\n"}A short time later, after the family had sat down on the couch, half bawling, half thinking in silence, a police officer had stopped by to confirm he was no longer a missing person.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I don't know why I did it...my emotions took over. The pressures of school, frustrations with a project grade, I was feeling...lost,</Text> Jake had told them. As for his whereabouts: he
          slept in an alleyway a town over (he took the train), snatched food from a local grocery store, and sat in a neighborhood park during the day (garnering quite a tan, though his mother found that quite peculiar) thinking about the things
          that were troubling his mind. But there were no talks of Naronia, distant galaxies, or The Utma.{"\n"}
          {"\n"}A few weeks later, as snowy October skies pushed away the temperate weather of September, Jake stood in his bedroom looking into the mirror at his reflection. He had just showered; his arms looked stronger, thicker somehow.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I don't look like me,</Text> he thought.{"\n"}
          {"\n"}Going back to school had not been as awkward as he had imagined. He had been through too much to worry about the name-calling and funny stares. His teachers treated him with discretion, and he had even been ordered to meet with the
          middle school's social worker twice per month. But once he got through the first couple of weeks, things settled back to a relative normal. He yearned to tell Nassir about his learnings and adventures, but he didn't. He only told his friend
          that he had been feeling lost; he repeated the same story he told his family and the police. Nassir didn't press much further, at least not yet.{"\n"}
          {"\n"}As he studied his reflection, he thought about something Dendro had said to him not so long ago. <Text style={{ fontFamily: "gelasibro-italic" }}>We must understand the problem first before we create a solution.</Text> He felt a
          growing hunger, a spark, to develop something. But what problem was he to solve? His mind shifted to thoughts of functions, the internet, conditional statements, and the open-source ecosystem of code, then to another saying of Dendro's:{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Python is just a tool. We must use our hearts and minds to drive forward progress.</Text>
          {"\n"}
          {"\n"}It was Sunday evening, and although football was on, he had something else in his priority queue. He pulled out a textbook from his bag; he had picked it from the local Grapefield Library.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How A Computer Works.</Text> He cracked it open on his desk and began to absorb the material. Sometime later, after reading about memory and operating systems, he rolled up his sleeves to
          look at the tattoos—he wore no chain, but maybe, just maybe, The Utma was listening. He completed another chapter on the evolution of software. His mind was enthralled by the concepts of binary numbers, design patterns, and composition. He
          now understood that this knowledge gave him the power to change worlds.{"\n"}
          {"\n"}As he sat at his desk, he couldn't get the thoughts of Dendro, Zimmer, and Zena out of his mind. Would he ever see them again? He pulled his back against his chair for a moment to stretch.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Was any of it real?</Text> He twiddled the pen in his hand. Then he stood up and walked over to his window. He peered through the branches of the maple tree. Then he gazed into the evening
          sky, past the thick layer of clouds, across the constellations, into the brightest of shining night stars.
        </Text>
      </View>
    );
  }
}
