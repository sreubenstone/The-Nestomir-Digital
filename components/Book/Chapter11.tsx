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

export default class Chapter11 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 11</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://paintingvalley.com/sketches/beach-scene-sketch-3.jpg`,
            }}
          />
        </View>

        {
          // Section 1 Below
        }
        <Text style={BookStyles.bookFont}>
          The hum of Casablanca's morning prayer radiated through the streets as the cyberpunk alarm clock on his night table hit 9:34 AM. He pulled himself up and looked through the blinds. The sun was already shining brightly. His mind shifted to a
          nebulous memory of a dream from last night. It centered around data and its different shapes—dictionaries, lists and other digital formations—moving through the wires of the Earth. He threw himself out of the bed, put on his silver chain,
          jeans, and a brand new grey Puma t-shirt. When he entered the kitchen he saw a note scribbled on the kitchen wall.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>Had to handle a few important errands. Please go out and get some food for yourself. I left money on the counter...should be home after lunch. — Dendro</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Great. I'm alone in a foreign city again</Text>, he thought. {"\n"}
          {"\n"}He walked over the metal-paneled floor to examine the globe on the night table. He brought his head closer and watched as it hovered in mid-air. When he studied the glowing surface, he noticed that the outline of Earth's continents
          were not just glowing faintly, but small pink ripples moved from unique points on the map and radiated outwards in peculiar patterns. <Text style={{ fontFamily: "gelasibro-italic" }}>What is this thing?</Text> There were a few undulations
          emerging from where he thought Morocco should be, but when he looked at the continent of North America, the internal area was dark. He spun the globe with his hand a few times, and on one of the revolutions, he could have sworn he saw a
          faint blue ring pulse outwards from exactly where he imagined Grapefield was located. <Text style={{ fontFamily: "gelasibro-italic" }}>Odd</Text>.{"\n"}
          {"\n"}Then the thought of spicy lamb kebabs hit him; it was time to get breakfast with the few Moroccan <Text style={{ fontFamily: "gelasibro-italic" }}>Dirhams</Text> Dendro left on the counter. But, as he exited the building and turned
          onto Tangier's street, he felt a warm hand squeeze down on his right bicep, which caused him to turn around suddenly. It was a slender woman, wearing a hijab, and aviator glasses with silver lenses.{"\n"}
          {"\n"}"I was wondering where you were," Zena said.{"\n"}
          {"\n"}"What..what..are you doing here?" Jake stammered.{"\n"}
          {"\n"}"It's breakfast time, and I am responsible for you today," she said. "Zimmer is caught up with some business and Dendro is busy with some tasks."{"\n"}
          {"\n"}"Oh," Jake said. "ok. I was just going out to grab some food."{"\n"}
          {"\n"}"Well you can grab some food with me!" Zena replied. She turned around abruptly and began walking down the street. Jake stood there for a moment watching her strut down Tangiers.{"\n"}
          {"\n"}"What are you waiting for? Let's go!" Zena called out. She showed no signs of slowing down. Jake jogged to catch up to her.{"\n"}
          {"\n"}"So..where are we going? Are you at least going to take me somewhere authentic?" Jake asked.{"\n"}
          {"\n"}"Just you wait and see," Zena replied.{"\n"}
          {"\n"}They continued walking down a narrow boulevard until they turned onto a road running parallel with the coastline, called <Text style={{ fontFamily: "gelasibro-italic" }}>Rue D' Antoine</Text>. They walked a few more blocks until they
          stopped at a restaurant with a white sign that read: <Text style={{ fontFamily: "gelasibro-italic" }}>Bid Farha Cafe</Text>. Patrons sat at outdoor tables drinking coffee from white porcelain mugs and eating a variety of interesting looking
          foods off of wooden plates. The inside appeared to contain a large bakery.{"\n"}
          {"\n"}"Best breakfast in the city," Zena said.{"\n"}
          {"\n"}The maître d took them to an outdoor table by the edge of the street and after quickly perusing the menu they both ordered the Fried Eggs with Olives, and double espressos, upon Zena's strong recommendation. As they sat there, waiting
          for their food, Jake could hear the pulse of fast paced Moroccan music playing from a speaker somewhere nearby.{"\n"}
          {"\n"}"How did you sleep?" Zena asked.{"\n"}
          {"\n"}"Pretty well, I was exhausted," Jake replied.{"\n"}
          {"\n"}"So, this must be all too overwhelming for you. I can't even imagine. I heard most of the story," Zena said.{"\n"}
          {"\n"}Jake explained to her his desire to get home, the tale of how he left school early that day, the shots fired from the factory, his learnings, and his growing intrigue with Zena's world. The waiter placed two wooden plates of Moroccan
          eggs and olives and two double espressos on the table. Zena took a few bites, then looked at him as he took down a gulp of his food.{"\n"}
          {"\n"}"How do you explain what happened on the rink?" Zena said. "Yes, Zimmer told me about the fight."{"\n"}
          {"\n"}He wasn't expecting the question. He swallowed a scoop of eggs and olives slowly. "It just kind of happened. I saw these characters floating across my vision. It was like...I don't know...it wasn't Jake...I wasn't myself," he said.
          "It was bizarre, but pretty cool when I look back."{"\n"}
          {"\n"}"Hm. You know that is extremely peculiar. I've never heard of any one possessing those benefits without passing the lessons. Maybe there's more to you than meets the eye?" Zena said. {"\n"}
          {"\n"}"Maybe," Jake grinned.{"\n"}
          {"\n"}"Where are you from again, Wiz Johnson?" Zena asked.{"\n"}
          {"\n"}Jake laughed out loud. "Wisconsin. It's a state in America."{"\n"}
          {"\n"}She looked at him incredulously, but continued eating. "What are you interested in?" She asked a few bites later.{"\n"}
          {"\n"}He felt more eggs and coffee fall into his stomach. "Me, well I love to play flag football. I'm a pretty big gamer, even though I've been looking for new titles to play as of late. I, uhm, do find electronics interesting." He thought
          of the ground spinners, then of Nassir's robotics stand at Rush Park but he wasn't sure why. "I spend a lot of time taking care of my younger brother," Jake replied. "What about you?"{"\n"}
          {"\n"}Zena put her aviators on the table, which exposed her keen purple eyes. "I guess you could say I have quite a few interests. Training, learning logistics, sharpening my software skills, studying Ld'Shab Philosophy...you know, all that
          good stuff."{"\n"}
          {"\n"}"So you can code?" Jake inquired.{"\n"}
          {"\n"}She smiled. "Yes. I trained rigorously on Naronia. And in other places around my galaxy."{"\n"}
          {"\n"}"It's amazing that you all code. I hope one day I can really begin to grasp all of this. I'm still a bit of a noob," Jake said. "And where did you grow up?"{"\n"}
          {"\n"}"Well, I grew up on Tarvezius," she said. Jake studied her cheekbones, and perfectly formed lips as she spoke. Her chin and jawline came together in an exquisite three dimensional form. She was an archetype for beauty, in any galaxy.
          "It's the fourth outermost planet in The Nestomir, Star System A. It's a long story," she added as she took another sip of her espresso. "Was a long time ago. My family still lives there."{"\n"}
          {"\n"}"Why did you leave your home planet?" Jake asked.{"\n"}
          {"\n"}She wiped some coffee off of her lips with her napkin. "I don't think I'll ever really know...it just kind of happened naturally. At least that's what I tell myself. I was always looking for something more. On Tarvezius, I had my
          family. But I was missing the freedom I craved. The continent I hail from on Tarvezius is quite corrupt. I love our people, and our culture, but our rights are limited. Sure, you can make a decent life for yourself, but something was
          different about my soul I think as compared to the rest of my family members. I desired freedom, and exploration, and leading something of my own. At least that was my gut feeling when I was growing up. My sister was different. She studied
          galactic economics and now has a family on Tarvezius, and a good job at a bank. But that was her. And this is me."{"\n"}
          {"\n"}"I immigrated to Naronia originally to study Ld'Shab philosophy. The Ld'Shab learning communities on Naronia are unrivaled. My young soul dreamt of this every night on Tarvezius. I heard the stories. I read the books, like the famous{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Soul Learned</Text>, by Atilka Souri," Zena recounted.{"\n"}
          {"\n"}Jake could not imagine living on a different planet than his family. "Do you still talk to your sister and the rest of your family?" Jake asked.{"\n"}
          {"\n"}"Yes, every few weeks over long band," Zena replied. "They are doing well. They want me to come home."{"\n"}
          {"\n"}"Do you ever get to visit them?" Jake asked.{"\n"}
          {"\n"}"I am desperate to, but I can't. Immigrating into Naronia is a tough process. I got to Naronia on a Nestomir II Shield, which allows immigrants to study in Naronia. However, the catch is that you must finish your entire Learner's
          Program before you can return to your home planet. It's many years of dedication and serious study. The Naronian Senate uses the shields to limit the number of people applying for these passes. It also allows them to make sure you're
          committed to your Learner's Program. But I, let's say, kind of put my official Learner's Program on pause, you see. And if you do go back home, without completing your program, you are never allowed to return to your native planet."{"\n"}
          {"\n"}"Wow. That is rough," Jake said.{"\n"}
          {"\n"}"The universe can be rough," Zena responded.{"\n"}
          {"\n"}"So how did you end up working with Zimmer? Is he your boyfriend?" Jake asked.{"\n"}
          {"\n"}Zena chuckled. "No, no, we are just business partners," she responded. "It's a long story of how we formed our venture. I'm a little embarrassed to discuss it, to be honest", Zena said.{"\n"}
          {"\n"}"Oh, ok," Jake said as he forked in a mouthful of scrambled eggs.{"\n"}
          {"\n"}"How is it?" Zena asked.{"\n"}
          {"\n"}"Ridiculously good," he replied as a few pieces of egg fell onto this lap. {"\n"}
          {"\n"}"Excellent, because I have an active day planned ahead of us. Finish up your eggs!" she exulted.{"\n"}
          {"\n"}Jake took down as much of the food as he could. Soon after, Zena lay some cash on the table, got up, and headed for the street, and Jake followed.{"\n"}
          {"\n"}"Where are we going?" Jake asked.﻿{"\n"}
          {"\n"}"The beach, of course," she replied.﻿{"\n"}
          {"\n"}They walked south down the boardwalk, passing Saturday joggers and beachgoers. Soon, they turned left onto a small side street called <Text style={{ fontFamily: "gelasibro-italic" }}>Palace' Di Vina</Text>. It wound and turned down a
          sandy path. Eventually, they came upon a white sign that read in blue letters: <Text style={{ fontFamily: "gelasibro-italic" }}>Plage Aïn Diab</Text>.﻿ They walked ahead and arrived at a small beach. Zena took off her shoes and Jake
          followed her across the sand to a shack up ahead.{"\n"}
          {"\n"}"Ayy, Zeena, my girl, what will it be today for yah, my lady?" The large man in the white hat and dark sunglasses said in a caribbean accent as they approached.{"\n"}
          {"\n"}"Two Ld'Shab Riders, my good friend," Zena said.﻿{"\n"}
          {"\n"}"Coming right up fer ya," the man responded.﻿{"\n"}
          {"\n"}He came back from behind a small shed holding two boogie-like boards. As he lay them on the counter, Jake could see they had a hardened epoxy resin coating on the surface, similar to a surfboard, and that curiously, in the center of
          each one, sat an etching of a pink rose overlaid on top of an alien-like glyph. As Zena picked them up, Jake noticed their bottoms were made of a dense, cloudy metal. {"\n"}
          {"\n"}"Thank you, my fine sir!" Zena shouted.{"\n"}
          {"\n"}Jake followed her down the beach until they hit a tall pile of rocks. To his surprise, she began to climb up them.{"\n"}
          {"\n"}"Follow me," she shouted.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>.</Text>Jake complied.They climbed up and over the rockpile and entered a much smaller, isolated cove. The beach they had come from was no longer visible. Zena placed the boards down onto the
          sand, and then did something Jake did not expect. She took off her hijab, and her long, shiny, black hair rolled down over her shoulders and back. As she undressed, Jake could see she was wearing a one-piece bathing suit underneath.{"\n"}
          {"\n"}"That's better," she said as she shook her head to get the kinks out of her hair. Her elf shaped ears poked out and became visible. "Today we are going to ride the Ld'Shab Board, or as some call it, The Naronian Spirit Board," Zena
          said.﻿{"\n"}
          {"\n"}"A Naronian Spirit Board? Is that just what you call a boogie-board? I'm not bad at that," Jake said.{"\n"}
          {"\n"}Zena smiled. ﻿"Well, then show me how it's done." Her black hair swayed in the sea breeze. "I brought you a bathing suit. You can change right there. I'll turn around."{"\n"}
          {"\n"}Jake took the blue suit, which she had kept in her small bag, and changed quickly, frightened Zena might turn around too soon﻿.{"\n"}
          {"\n"}"Ok, I'm ready," he called at her.{"\n"}
          {"\n"}Zena turned around, then nodded her head in the direction of the water.{"\n"}
          {"\n"}Jake picked up a board, walked down to the shoreline, and placed it in the shallow water. He showed off by using an old trick he learned during his vacations at Grape Lake. ﻿He took a running start and pushed off the sand, jumping
          carefully onto the board. But his body slid directly across it, there was no momentum transfer whatsoever, and he spun into the water head first. It was as if the board was stuck in the water. But that didn't make any sense.{"\n"}
          {"\n"}When he came up for air, he shouted: "What the heck?" He used his hands to try and get the board to budge, but it would not give even a millimeter. When he looked underneath, he could see nothing impeding its ability to move. It was
          just sitting on water.{"\n"}
          {"\n"}Zena signaled for Jake to come back. {"\n"}
          {"\n"}"This is a Spirit Board, not a boogie board. Open your mind a bit. Your world has changed," she said. She picked up the other board and rested it against her hip. "The spirit board requires us to{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>believe</Text>. She is the only way known for non-military members of society to experience a <Text style={{ fontFamily: "gelasibro-italic" }}>physical</Text> Utma benefit, or physical
          superpower."{"\n"}
          {"\n"}"There is no other way? To believe in <Text style={{ fontFamily: "gelasibro-italic" }}>what</Text>?" Jake asked. {"\n"}
          {"\n"}"To believe we can achieve our purpose," Zena responded. {"\n"}
          {"\n"}Jake looked at her, confused. {"\n"}
          {"\n"}"You see, life is a quest. Or at least, that is what us Naronians believe. A quest to unlock our true self. Our true self <Text style={{ fontFamily: "gelasibro-italic" }}>is</Text> our purpose. When we find our true self, we get as
          close as we can get to the source of life of all living things," Zena said.{"\n"}
          {"\n"}"Our true self is our purpose?" Jake asked, unsure by what she meant.{"\n"}
          {"\n"}"Yes. Now watch me.﻿ Spirit Boarding is simple in concept, but difficult to execute. The goal is to <Text style={{ fontFamily: "gelasibro-italic" }}>envision our path</Text>," Zena asserted.{"\n"}
          {"\n"}She walked to the shoreline and dropped her board flat on top of the water. She stood there with her feet on the sand, closed her eyes and began breathing deeply as if she were meditating, then stepped forward, gently placing her
          right foot on the slightly curved acrylic surface, and then her left. Small waves crashed around her feet. She stood still on the foreign object for a minute with her hands extended in front of her.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck is she doing?</Text> But then, the board began to move forward, slowly at first. <Text style={{ fontFamily: "gelasibro-italic" }}>How in the world is it moving?</Text> Zena bent
          her knees to allow herself to remain balanced. And then she began to sing as the spirit board began to accelerate. {"\n"}
          {"\n"}"Lavanà, hadmarà, my maker, thank you for my spirit and my mind. Thank you for the heart beats of the beings around me. I am here now, with you, as I've always been," she sang in a sullen sounding tune. {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>She's singing?</Text> Zena repeated the process, singing, meditating, and shifting her weight delicately from side to side and she began to move faster, and faster, until she was too far away
          for Jake to hear her. He could see she had opened her eyes and put her right foot in front of the other, and began to ride the water like a surfboard with her arms stretched outward, zigzagging through the small crests.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Wow, she has some serious skills.</Text> A short while later, she came back around and hit a larger wave. "Woahh!", Jake shouted instinctively, as Zena popped up nearly ten feet in the air
          and landed smoothly. He continued to watch her navigate the ocean.{"\n"}
          {"\n"}A few minutes later she rode back into shore. She walked up to him, smilked, and put her board against his chest. "Your turn," she said.{"\n"}
          {"\n"}"That was...neat," he muttered. "But what do I even do?"{"\n"}
          {"\n"}"Find your <Text style={{ fontFamily: "gelasibro-italic" }}>path</Text>," she said.{"\n"}
          {"\n"}Jake walked down to the shoreline, put the board in the water, then stood up on it slowly as white foam splashed around his ankles.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How do I find my path? What does that mean? Why doesn't she answer me?</Text> He closed his eyes and listened to the waves, but it was hard to focus on anything knowing Zena was watching him.
          But slowly the sound of the ocean calmed him. <Text style={{ fontFamily: "gelasibro-italic" }}>Just relax.</Text> He thought of launching the rocket at Pond Park last Fall. He thought of Nassir. He imagined sitting down at his dinner table
          eating hot noodles with his mom and brother. He felt a simmer of a positive energy flow through him and he felt ever so slightly more connected with the object beneath him. His thoughts shifted to the rink. Then to hovering axes. Then to
          Dylan Jenkins. Then his mind sifted deeper, to thoughts of his father. He felt confused and angry, but he forced the image out of his head. <Text style={{ fontFamily: "gelasibro-italic" }}>What is my path?</Text> He thought of his speaker
          project, then of code. He opened his eyes, but nothing was moving. He closed them again. <Text style={{ fontFamily: "gelasibro-italic" }}>Is this a joke?</Text> He forced himself to take it seriously.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I can do this.</Text> He thought of Python, variables, control flow, ecosystems of open source creation. <Text style={{ fontFamily: "gelasibro-italic" }}>There must be something here.</Text>{" "}
          He clenched his jaw and imagined being born a different person. And then a weird thought popped into his head: a group of alien workers constructing a new world out of a void. A new world? A void? Where did that come from? He opened his
          eyes and the board began to move. It accelerated forward without his control. <Text style={{ fontFamily: "gelasibro-italic" }}>Woah. Now how do I slow it down!?</Text> A large wave broke ten feet ahead of him, and he sped towards it, out of
          control. He collided with the energetic water, catapulted into the air, and smashed back down into the Earth defining liquid once again. His face rose back to the surface. "Crap," he muttered. He saw Zena, grinning and signalling to come
          back to the shore. He paddled back, leaving the board in the water behind him. {"\n"}
          {"\n"}"You did well, kid. It can take some folks years to be able to figure out the spirit board. That was impressive," Zena said. "And don't worry about the board, I will get it when we leave."{"\n"}
          {"\n"}"Don't you want to know what I imagined?" Jake asked.{"\n"}
          {"\n"}"No, what is envisioned on the spirit board is for you alone," Zena said.{"\n"}
          {"\n"}"Come here, let's have a seat on the beach. Let's enjoy this sun," Zena insisted.{"\n"}
          {"\n"}As they looked out onto the waves, Jake could see his spirit board floating; a freckle or two may have popped up on his pale complexion as the sun blazed above. "That was...it didn't feel real," Jake said.{"\n"}
          {"\n"}"It was you interfacing with your, our, source of life. When the board begins to move, it means we are getting closer to envisioning our path. Our Ld'Shab philosophy goes very deep, but ultimately, things always drive towards the same
          thing: finding our path, or our purpose. That's why so much of our core teachings are underpinned by <Text style={{ fontFamily: "gelasibro-italic" }}>La'Tishvah</Text>," Zena said.{"\n"}
          {"\n"}"Learning with purpose?" Jake asked.{"\n"}
          {"\n"}"Correct." She moved the warm sand between her toes. "The Benefit Teachings you have begun to undertake help open our minds, and inspire us to learn more. But what they are really attempting to do is to encourage us to become masters
          of learning by making us avid practitioners of building things. You may have gotten that vibe from the real world tasks you had to complete to earn those two markings," she said as she eyed his right hand.{"\n"}
          {"\n"}Jake thought of the factory command room, then of the program he wrote to update the ship's aileron settings. Then he looked down at the markings on his wrist. "But in life, after the lessons, how do we know what to build?",Jake
          asked.{"\n"}
          {"\n"}"That is a great question, Earthling. What I can tell you is to follow your gut, and don't be afraid to fail. When I first got to Naronia, and joined The First Temple, I immersed myself in all elements of The Learning Force. I studied
          the Spiritual Planes. I locked myself in my dormitory for days and fully engulfed my body and mind in the Sub-Forces Doctrine. And when studying the force of Computation, I picked numerous projects. Ideas. Things I tried to create to help
          me learn new topics faster. Each project pushed me. I wrote a program to plot the shipping logistics of freighters in the Kuwali bay. I used a Python library to help me predict the populations of endangered species living inside the Ezekad
          Rainforest. There were countless other projects to name. Each project grew me as a person. I made so many mistakes. But through those mistakes I learned," Zena recounted.{"\n"}
          {"\n"}"But, what can I build?" Jake asked.{"\n"}
          {"\n"}"It will come to you...soon," Zena said.
        </Text>
      </View>
    );
  }
}
