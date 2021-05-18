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

export default class Chapter5 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 5</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://ryanclachrie.files.wordpress.com/2012/06/cockpit.jpg`,
            }}
          />
        </View>
        {
          // Section 1 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Jake’s vision came into focus an undetermined amount of time later. He slid his body up, stretched his neck, and put his feet on the ship floor. His head felt a bit clearer. Sleep had its ways of medicating the mind.{"\n"}
          {"\n"}His nap had instilled some positivity in him and a new thought popped into his head. Maybe he could devise a plan to extricate himself from Dendro’s control and return to his family? He tightened up the strings on his hoodie so the
          fabric stretched tighter around his head. The low hum of the ship’s engines were still audible. He looked at the futuristic Kahve maker bubbling on the counter top, and then the retina scanner next to Dendro’s dormitory door.{"\n"}
          {"\n"}He walked back down the short hallway, past the <Text style={{ fontFamily: "gelasibro-italic" }}>caravine</Text>, and into the cockpit. Dendro was huddled over some papers on a pull out tray in front of his chair. He picked up his
          head every few moments to tinker with the display in front of him. “How long was I out?” Jake asked, a hint of sleepiness still in his voice.{"\n"}
          {"\n"}“Not long son. ‘Bout an Earth hour,” he responded. He was keenly focused on his task.{"\n"}
          {"\n"}Jake sat down and strapped on the seat belt, but not as firmly this time; he wanted to make sure he could breath when they accelerated.{"\n"}
          {"\n"}“How did you end up in the military?” Jake asked some time later.{"\n"}
          {"\n"}“Who, me?” Dendro grunted, still focused on the papers in front of him. “Was a capricious decision. Watched too many war movies, you know. I grew up in The Lower Palisades, a neighborhood in Nalia, the capital city of Naronia. A bit
          rough. Not much opportunity for work or anything good, especially as a Tier II race. Walked into the recruiters office one day. Guess that was it.”{"\n"}
          {"\n"}“Did your parents encourage you to join?” Jake asked.{"\n"}
          {"\n"}“Not really,” he snorted. “My father died when I was young. My mother has always been supportive of my desire to protect the Naronian motherland, but she did not support my desire to go into Special Operations, which is the most
          lethal but also the most thrilling part of the Solar Forces military arm.”{"\n"}
          {"\n"}“Do you speak with your mother often? Jake asked.{"\n"}
          {"\n"}“I do. Or, mostly, when I can...every three to four months up here. It’s not easy with the communication restrictions,” Dendro replied in his gravelly voice. Jake examined Dendro’s upturned nose. It was almost goat-like.{"\n"}
          {"\n"}“I see,” Jake said.{"\n"}
          {"\n"}As the ship soared over the North American continent, Jake considered the existence of Dendro's alien world, Naronia, with its different races living together. It made him think of the fantasy books Mrs. Krezia read to his class in
          elementary school. How could any of this be real? His mind raced as he considered the possibilities of a foreign planet. What did the different species on Dendro’s planet look like?  He wondered about the Naronian government, and what it
          would be like to travel through space at light speed.{"\n"}
          {"\n"}Some time later, Jake saw Dendro tap on a green button positioned on the top left center of the ship's joystick. Immediately, underneath the console in front of Dendro, a keyboard popped out and a dark purple colored text editor
          program appeared on the display. Dendro began using the keyboard arrows to tinker with something on the screen.{"\n"}
          {"\n"}What is that? Jake asked.{"\n"}
          {"\n"}“It’s software, code. Python. I’m updating some flight settings on the ship. Our aileron seems clunky.” Dendro stared intently at the screen as he typed.{"\n"}
          {"\n"}“Python? Like what the hackers use on Earth?” Jake asked, baffled.{"\n"}
          {"\n"}Dendro turned and looked at him intently. “Code is <Text style={{ fontFamily: "gelasibro-italic" }}>all</Text> that we are. This is <Text style={{ fontFamily: "gelasibro-italic" }}>all</Text> that I am. I am a Solar Forces fighter —
          and my loyalty is to the Ld’Shab, to The Utma”. Dendro’s yellow eyes looked at Jake intensely, then he let off a subtle grin.{"\n"}
          {"\n"}“Python is all that you are? Ld’Shab? What?”, Jake asked, not sure if Dendro was messing with him. But something told Jake that Dendro didn’t seem like the kind of guy to make jokes in tense moments.{"\n"}
          {"\n"}Dendro cupped the silver medallion hanging from his neck and stroked it gently. “Our culture practices an ancient philosophy, known as Ld’Shab, which is derived from our appreciation, study, and worship of The Learning Force,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Utma.</Text>” Dendro answered.{"\n"}
          {"\n"}Jake’s face contorted. “The Learning Force? The Utma?”{"\n"}
          {"\n"}Dendro minimized a window sitting above the lower part of the application screen. “The Ld’Shab religion, a religion based on learning itself, guides all life in The Naronian republic. The Utma Force has been studied by Naronian
          society—since well — the inception of our civilization. Our societal religion, <Text style={{ fontFamily: "gelasibro-italic" }}>the Ld'Shab</Text>, is based on the critical dogma that{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Utma</Text> was brought into existence by <Text style={{ fontFamily: "gelasibro-italic" }}>Our Creator</Text> to guide our learning process for the purpose of bettering our world.”{"\n"}
          {"\n"}Jake looked confused.{"\n"}
          {"\n"}Dendro lifted his hands off the keys for a moment, looked out the cockpit window, then turned to Jake. "We believe that an intelligent being's purpose is to learn–learning is our ultimate goal, as both individuals and as a collective
          species. To say it more authentically, The Ld’Shab religion believes that life’s purpose is to <Text style={{ fontFamily: "gelasibro-italic" }}>learn with purpose</Text>. In our native tongue, the term for{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>learning with purpose</Text>, is known as <Text style={{ fontFamily: "gelasibro-italic" }}>La’Tishvah."</Text>
          {"\n"}
          {"\n"}Jake's eyes bulged. Thinking of a new galaxy was hard enough to process. But the wonder and freakishness of an entirely different philosophy and religion made his head spin. “Your planetary religion is based on learning itself? But
          what does that have to do with Python?”{"\n"}
          {"\n"}“Yes. Learning itself, but in a deeper form. And Python is but a representation of the skills our mother force feels is most critical to absorb," Dendro said. "We’ve learned that The Learning Force, The Utma, incentivizes us to learn
          specific subjects it feels will better our society, most prominently subjects that cover computing and networking, but there are many other subjects we believe she wants to promote, but we have not fully understood The Utma’s directions
          regarding those topics yet, so to speak. And it was about five hundred years ago that our spiritual teachers discovered the precursors to what we refer to as <Text style={{ fontFamily: "gelasibro-italic" }}>physically tangible</Text> Utma
          Benefits. These are benefits that sentient beings are awarded when studying critical components of The Utma.”{"\n"}
          {"\n"}"What does that mean?" Jake asked, perplexed.{"\n"}
          {"\n"}"It means as we study a certain holy Ld'Shab Curriculum, or to be precise, <Text style={{ fontFamily: "gelasibro-italic" }}>The Holy Curricula</Text>, under certain conditions which our spiritual teachers have honed in secrecy over
          hundreds of years, we are granted metaphysical powers. Powers beyond the explanation of the physical world. Powers granted by The Utma, itself.{"\n"}
          {"\n"}Jake's eyes lit up. "You receive metaphysical benefits for studying something?" His face scringed with skepticism. "How is that even possible? It's like magic?"{"\n"}
          {"\n"}“That, my friend, is not an easy question to answer. And no, we do not call it "magic." It is the <Text style={{ fontFamily: "gelasibro-italic" }}>way</Text> of The Universe. Our teachers believe that The Utma does not want us to turn
          a blind eye to something so essential to the creativity of intelligent beings. Although computers drive <Text style={{ fontFamily: "gelasibro-italic" }}>both</Text> of our worlds, most beings inside of our worlds walk around with no idea
          understanding as to how they function. The Utma wants us to pay closer attention.”{"\n"}
          {"\n"}Jake pondered for a moment. "What powers are you granted?"{"\n"}
          {"\n"}Dendro turned to face Jake. "Powers that enhance our capabilities to fight and defend ourselves against our foes. You must recognize that The Special Operative soldiers of the Solar Forces, and our most prominent spiritual teachers,
          are the only members of society to date to formally train to obtain these powers. From how we wield our Solar Forces weapons—to maneuvering our shields—to enhancing balance—to speeding up how we move—all the way to augmenting how we control
          and master our most important weapon—our minds, we gain new powers as we learn from the <Text style={{ fontFamily: "gelasibro-italic" }}>Holy Curricula</Text>.”{"\n"}
          {"\n"}Dendro picked up his axe from its holder on the wall. He put it near his chest. As he let go, it did not drop, but began to float in mid air beside him. The shining golden edges glimmered in the cockpit light.{"\n"}
          {"\n"}"Woah." Jake blurted aloud. "How the—". He stopped speaking as Dendro flicked his levitating axe, causing it to rotate in place.{"\n"}
          {"\n"}"This power is called <Text style={{ fontFamily: "gelasibro-italic" }}>Weapons Harnessing</Text>. It enables us to wield a Solar Forces weapon in such a way. It is but one of many super powers we are granted for being students of{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Holy Curricula.</Text>"{"\n"}
          {"\n"}Jake stared in awe at the floating golden weapon. What kept it in the air? It appeared to be magic. But Dendro said it was something else.{"\n"}
          {"\n"}Dendro gripped the blade and placed it back on the holding compartment on the ship wall.{"\n"}
          {"\n"}"This is too much for me to handle," Jake said. He looked back at the axe a moment later. "But it is awesome."{"\n"}
          {"\n"}"Yes. Yes it is," Dendro said.{"\n"}
          {"\n"}A chill ran up his spine. There were too many questions formulating in his head.{"\n"}
          {"\n"}"So your soldiers, the special operatives, they are the only ones who train to gain these powers?" Jake asked.{"\n"}
          {"\n"}“Affirmative. Our training. Our focus. Our development. It all revolves around studying the <Text style={{ fontFamily: "gelasibro-italic" }}>Core Understandings</Text> derived from{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Holy Curricula</Text>. Dendro stroked the silver orb hanging from his neck.{"\n"}
          {"\n"}“But Python you said?” Jake looked at the screen. “How can you  learn something so complicated? Jake asked.{"\n"}
          {"\n"}“Well, for one, Naronian society does a much better job at teaching in general—The Solar Forces, our schools, all parts of society—all have a unique take on learning. We appreciate nature and the tools she’s given us. We do not fear
          technical complexity; we learn to delve into the creamy satisfaction of the intricate. But it starts for us with our spiritual teachers. They train our military personnel, and thus bits and pieces of their wisdom slips into our hands. This
          wisdom, and these critical lessons, are taught to us in training. There is <Text style={{ fontFamily: "gelasibro-italic" }}>no choice</Text> but to learn. And as each leader imparts their knowledge, we grow closer to The Utma. And the
          meaning, purpose, and understanding of <Text style={{ fontFamily: "gelasibro-italic" }}>The Holy Curricula</Text> make more sense to us."{"\n"}
          {"\n"}Dendro massaged his elbow for a moment, it appeared to be bothering him. "Growing up in the Lower Palisades, an impoverished neighborhood of Naronia, I had nothing but fighting, girls, and sports on my mind. I didn't think I could
          amount to anything. But once I was introduced to our <Text style={{ fontFamily: "gelasibro-italic" }}>Holy Curricula</Text> in training—and to code I was forever changed.”{"\n"}
          {"\n"}“But I don’t even understand what code is. Where does code <Text style={{ fontFamily: "gelasibro-italic" }}>even go</Text>? Like <Text style={{ fontFamily: "gelasibro-italic" }}>where do you put it</Text>? Even that part throws me
          off. I get it helps us give instructions to a computer, but where does it end up, and what can we do with it?” Jake asked in frustration.{"\n"}
          {"\n"}Some lightning flashed. Thunder cracked around them, causing the ship to rock.{"\n"}
          {"\n"}“Code is language. No different than the letters and punctuation that make up your native tongue, which you call English. You use English to communicate with other beings. But this language of code is a way for sentient beings to
          communicate with computers,” Dendro said. “However, the truth is, as our great spiritual teachers have taught us throughout modern Nestomirian history, it is a bit deeper than that. A computer processes information purely via zeros and
          ones. Ons and offs, per se. That's how its circuitry operates. So we are not exactly communicating with the computer, but providing it with instructions that can be translated down into a language the computer can understand.”{"\n"}
          {"\n"}“What do you mean by <Text style={{ fontFamily: "gelasibro-italic" }}>that’s how its circuitry operates</Text>?” Jake asked.{"\n"}
          {"\n"}“A computer uses a special electrical component, called a transistor, which is a tiny electrical on and off switch, to do everything it does. From playing your video games, to crunching numbers, at the end of the day it's just an
          arrangement, and albeit, a very complex arrangement, of these switches firing together that makes a computer tick. At the lowest levels of the computer, at the transistor level, the computer only understands these ONs and OFFs. We use a
          number system called <Text style={{ fontFamily: "gelasibro-italic" }}>binary</Text> to describe this language of ON and OFF. It consists of only two digits: 0’s and 1s, or ON’S and OFF’S,” Dendro said.{"\n"}
          {"\n"}“Ok, I think I get it. So code is just a way to….translate what we want the computer to do, into these 0’s and 1’s...these ONs and OFFs?” Jake asked.{"\n"}
          {"\n"}“Precisely. We <Text style={{ fontFamily: "gelasibro-italic" }}>could</Text> speak to the computer in 0’s and 1’s, but it would take years to write the most basic instructions. That’s why there was a need for an intermediary. One of
          our great spiritual leaders told us that we can imagine code as a space between the computer and the being; a place where we are able to coexist. This is the space where we write our programs with what we call code and it is the primary
          reason why scientists and engineers in The Nestomir invented coding languages", Dendro said.{"\n"}
          {"\n"}"So Python is that intermediary?" Jake asked, trying to process Dendro's explanation.{"\n"}
          {"\n"}"Yes. The language of choice for many applications in The Forces is Python, which you see here on my ship's screen", Dendro said. It was invented by Bernard Pinkett in 13,997 Sentient. The Earthling, Guido Van Rossum, who gets credit
          on your planet for inventing the language, actually stumbled upon Python during a Naronian government experiment. The architecture of the language was left on his desk by a Naronian agent in an attempt to study how the language would
          proliferate out of the galaxy. Guido took credit for its creation,” Dendro stated.{"\n"}
          {"\n"}“Are you serious?” Jake asked, wide eyed.{"\n"}
          {"\n"}“I would not joke around about something like that”, Dendro responded.{"\n"}
          {"\n"}“Do you mean to tell me your society knows of Earth and has interacted with Earth before?” Jake asked, baffled. “I did hear you mention something about that before, but I wasn’t sure if I heard correctly.”{"\n"}
          {"\n"}“Oh yes. We ventured out of the galaxy some five hundred years ago. Naronian astronomers believe we have most of the hospitable planets mapped. You would be surprised to learn of the reach of our Nestomir. I can tell you more about
          that history later, when we have time.”{"\n"}
          {"\n"}"That is both terrifying and incredible I guess. But one thing I don't understand. How, if a computer only understands zeros and ones, can it process this code, this Python, which is made up of{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>text</Text>?"{"\n"}
          {"\n"}"That is a powerful and intuitive question, but to put it simply son, there is a translation process. Another program can break down our text statements, digest them, and convert them into zeros and ones. We sometimes refer to this
          program as a compiler, or an interpreter. We can spend a lot of time studying the innards of these translation tools, and the hardware itself, and it is fascinating. It is important to note that coding, the art of organizing text based
          instructions for the computer, is still only a subset of understanding the computer.”{"\n"}
          {"\n"}"That is <Text style={{ fontFamily: "gelasibro-italic" }}>wild</Text>. The computer can use its own insides to digest our human statements?” Jake said, thinking out loud. He pondered for a few moments thinking about the implications
          of what Dendro was saying. “But still, what can we actually <Text style={{ fontFamily: "gelasibro-italic" }}>do</Text> with code? What are these hackers I see on TV and in the movies actually doing?” Jake said.{"\n"}
          {"\n"}"A coder's responsibility, first and foremost, is to <Text style={{ fontFamily: "gelasibro-italic" }}>move information around as efficiently as possible</Text>. And ironically, that often means,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>using as little code as possible to achieve a task</Text>. Great coders hate extra fat,” Dendro said.{"\n"}
          {"\n"}"Hmm, that actually makes sense to me; it's like my English teacher told us, less is more," Jake blurted out.{"\n"}
          {"\n"}"Yes. What coders are often doing is examining where information is coming from, and then figuring out the most efficient way to get it where it needs to go. It's about the <Text style={{ fontFamily: "gelasibro-italic" }}>data</Text>,
          the <Text style={{ fontFamily: "gelasibro-italic" }}>information</Text>, that a programmer cares most about, <Text style={{ fontFamily: "gelasibro-italic" }}>and it just so happens</Text> that code is the only tool we have at our disposal
          to move information from one place to another.”{"\n"}
          {"\n"}"Jeez. So we focus on moving information around first, not writing the code?" Jake asked.{"\n"}
          {"\n"}"Yes. It's about the problem-solving thought process of organizing and moving data - information around and getting it to where it needs to go. A great programmer thinks about how the information moves around first, and then writes
          the code to move it.”{"\n"}
          {"\n"}Dendro cleared his windpipe with a deep-throated grunt. “The syntax, the brackets, semi-colons, indents, ‘they don’t mean nothin’, professor Alvarez used to tell us in basic training. What matters is how you break down the problem you
          are trying to solve,” Dendro noted.{"\n"}
          {"\n"}"Interesting. I think I get that. But I still don't fully get why we really use code in the first place, for computer games and apps?" Jake asked.{"\n"}
          {"\n"}“Well yes, there are an infinite number of use cases. We can use code to build a web server to power your new social network, to implement a pattern in your next piece of digital art, or to control your home made music synthesizer. We
          can use code to create a new arcade video game. We can use it to write a program to organize accounting for a new business, or to write the next algorithm that predicts the price of a cryptocurrency—yes, that is popular in the Nestomir as
          well.” Dendro clicked around on his screen. “We can use code to generate software that can aid in our ability to understand and cure deadly diseases. At the end of the day we have to appreciate that sentient beings and computers are a
          powerful combination. That’s why we need to learn to communicate with computers in the first place.”{"\n"}
          {"\n"}“So you think it’s essential to learn code?” Jake asked.{"\n"}
          {"\n"}“Not exactly. The world, or I should say, our Universe, will continue to be revolutionized by code. But it doesn’t mean we all have to become coders. It means we should appreciate the power code gives us, with respect to any industry
          or passion. We can reinvent art, enhance our ability to make music, help our businesses analyze data, and solve a variety of cross functional problems in an unprecedented manner. All fields, medicine, art, science, sports, gaming, can
          benefit. Understanding it <Text style={{ fontFamily: "gelasibro-italic" }}>is</Text> critical. However, becoming a coder is a choice.”{"\n"}
          {"\n"}Dendro scrolled down the page on his screen. “Here I am using a very important programming concept, called a <GlossaryWord word="variable" toggleGlossary={this.props.toggleGlossary} />. A variable stores information in our computer’s
          <GlossaryWord word="memory" toggleGlossary={this.props.toggleGlossary} /> so we can retrieve it later. Here I am using a variable to store the sensitivity value of our aileron, the flap-like things on the wing that help us tilt the ship.
          This sensitivity controls how sharp our turns will feel, especially in a storm.”{"\n"}
          {"\n"}Dendro tapped some keys on his glowing keyboard. “In Python, to declare a new variable, we simply write the name of the variable and use an <Text style={{ color: "#0C2443", fontFamily: "code" }}>=</Text> sign to assign a variable's
          value. See here, I’m updating our aileron’s sensitivity value in our Python program.{"\n"}
          {"\n"}Dendro zoomed in on his screen and shifted the monitor towards Jake.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson1_1.png")} />
        </View>
        <Caption>(Dendro's monitor)</Caption>
        {
          // Section 2 Below
        }
        <Text style={BookStyles.bookFont}>
          “So we have <Text style={{ fontFamily: "gelasibro-italic" }}>named</Text> this variable <Text style={{ fontFamily: "gelasibro-italic" }}>sensitivity</Text>, and we have set its <Text style={{ fontFamily: "gelasibro-italic" }}>value</Text>{" "}
          to 0.78. Python is very flexible in terms of the types of information we can store in a variable. Here we’re storing a decimal...note in Python we refer to this type of data as a{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>floating point</Text> number. We could use a variable to store a string, which is an arrangement of characters, like the name "Jake" or "Dendro". We can also use a variable to store another
          data type, called a <Text style={{ fontFamily: "gelasibro-italic" }}>boolean</Text>. This is a data type that is meant to represent if something is true, or false. And as a result, a boolean variable will store either a{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>True</Text> or <Text style={{ fontFamily: "gelasibro-italic" }}>False</Text> value. Booleans come in handy often in coding, as the most complex of problems often can be simplified to a
          variety of true and false statements. There are other data types we can discuss later on,” Dendro said.{"\n"}
          {"\n"}Dendro pointed at the screen. "I'm telling the computer: <Text style={{ fontFamily: "gelasibro-italic" }}>Open a memory slot for me please, called "sensitivity", and then store the decimal 0.78 insides of it</Text>
          ,” he said. “Variables allow us to store important information quickly, so we can access it later. If you understand that concept, you’re already making headway into understanding code."{"\n"}
          {"\n"}“That’s cool,” Jake said.{"\n"}
          {"\n"}“Here, take this.” Dendro reached underneath his seat, and came up holding a silver chain. It looked similar to the one he was wearing, just shorter. He placed it on Jake’s neck.{"\n"}
          {"\n"}"What is this?" Jake asked as he felt the cold metal against his skin.{"\n"}
          {"\n"}“It is a very special object from our galaxy. An orb containing stardust from the <Text style={{ fontFamily: "gelasibro-italic" }}>Teqwequar Nebula</Text>, the nebula our religion believes to be the singularity point of creation. The{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>dusted orb</Text>, as we sometimes call it, enables you to <Text style={{ fontFamily: "gelasibro-italic" }}>register Utma feedback</Text>. If you gain a{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Core Understanding</Text>, the Utma can now <Text style={{ fontFamily: "gelasibro-italic" }}>reward</Text> you.{"\n"}
          {"\n"}“How?” Jake asked.{"\n"}
          {"\n"}“You shall see,” Dendro responded.{"\n"}
          {"\n"}The cockpit let out a few high pitched beeps.{"\n"}
          {"\n"}Dendro looked at the monitor mounted over his head.  “We must prepare for landing. Make sure you’re buckled in, we will be in the Salt Lake City airspace in the next forty-five minutes. Once on the ground, Lithium Radar should be able
          to tap into local WAN and local WIFI–enabling us to pull up detailed floor and security plans of the lab facility.{"\n"}
          {"\n"}“So, this should be a simple in and out?” Jake asked innocently.{"\n"}
          {"\n"}“It should be. I won’t know for sure until we’re on the ground–there could be some rough patches, but let’s hope for the best. Hold tight,” Dendro said.
        </Text>
      </View>
    );
  }
}
