import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../Other/Stylesheet";
import styled from "styled-components";
import GlossaryWord from "../Glossary/inline/GlossaryWord";

const StoryGraphic = styled.Image`
  width: ${(props) => (props.width ? props.width : 360)};
  height: ${(props) => (props.height ? props.height : 200)};
  border-radius: ${(props) => (props.radius == "none" ? 0 : 20)};
  margin-top: 25px;
  margin-bottom: 25px;
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

export default class Chapter15 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 15</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://res.cloudinary.com/dshxqbjrf/image/upload/v1633998380/chapter_symbol_sfj0ji.png`,
            }}
          />
        </View>

        {
          // Section 1 Below, Goes Text, Graphic + Graphic ... NOTE THIS SECTION HAS TWO PICTURES NEXT TO EACH OTHER!!
        }
        <Text style={BookStyles.bookFont}>
          Dendro smashed his fists against the countertop. "He deserved better! I should have been there to protect my brother! He would have been there to protect me." He slumped forward over the counter. "It is my fault. I think that thing thought
          he was me." He looked out the window of the medical RV for a few moments, muttering something to himself. Then he turned around to look at Zena. "But we must keep our composure. We must stop dwelling on what we should have done and focus on
          getting him back. Let's address these wounds." Dendro pulled a first aid kit off the wall and sat down in the chair next to Zena.{"\n"}
          {"\n"}"I should never have brought us here," she said solemnly, tears gently rolling down her cheek. "He was my business partner, mentor, and friend. I owe him more than I care to say." She tried to hold back the tears. "They will torture
          him I know it - we cannot let him spend a lifetime in their demonic grips!"{"\n"}
          {"\n"}"We will find him," Dendro said quietly. "We will find a way, somehow."{"\n"}
          {"\n"}"How?!" Zena bellowed.{"\n"}
          {"\n"}"We <Text style={{ fontFamily: "gelasibro-italic" }}>will find a way,</Text>" Dendro said firmly.{"\n"}
          {"\n"}She looked at Dendro incredulously for a few moments, then went silent. He continued to address her wounds. She also appeared to have broken her shoulder in the battle, so Dendro secured her arm in a sling. When he was finished, he
          wrapped a few feet of medical tape around his own shoulder, whose cut had opened back up.{"\n"}
          {"\n"}Jake watched on for a few moments. He felt sympathy for his companions, they had lost their friend. But he also felt awkward. He knew Zimmer, but not that well. He looked to the couch. For some reason he had the urge to take a few
          steps closer to the form that lay covered there. <Text style={{ fontFamily: "gelasibro-italic" }}>I have never been in the presence of death like this before,</Text> he thought<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> A cold
          shiver ran down his spine. It was Captain Tango's body. Dendro had run back into the palace to retrieve his friend. He brought the corpse back to the medical RV and covered it with a linen sheet. Dendro said Captain Tango would be buried
          properly, once they got hold of his wife.{"\n"}
          {"\n"}"That should hold," Dendro said a minute later. As he stood up, he patted down the bandages strewn across his body. He looked at Jake. "There is no time to mourn the loss of Captain Tango - he was a great leader, and the galaxy will
          honor his passing. Now we must get to Zimmer's ship so we can get our friend back. And I must somehow figure out how to reach my men." The edge of his golden axe crept above his black vest as he stood up. He walked past Jake and headed for
          the door. "C’mon friends, let's go," Dendro said. We are all bandaged up. Now, we have work to do."{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ textAlign: "center" }}>. . .</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}Zimmer's ship had been stored in an off-the-grid garage not far from where Dendro had stowed the Sentauri Beacon II. As the Cadillac roared down the A1 interstate, Dendro’s arms were still bleeding slightly as he gripped onto the
          steering wheel.   They had one mission now: get to Zimmer’s interstellar craft.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Does this mean I’m actually going home?</Text> Jake thought as he caught sight of the silver alien disk resting in the cupholder. Dendro had mentioned on the walk to the car the time to
          abandon Spectator One may have come.{"\n"}
          {"\n"}Three hours after they left the festival, they turned onto a narrow desert road. It curled through the wilderness for some time until they approached what looked like an abandoned warehouse sitting in the middle of nowhere. Jake could
          see the roof was angled upward. <Text style={{ fontFamily: "gelasibro-italic" }}>Is that glass?</Text>
          {"\n"}
          {"\n"}As they exited the car, Dendro instructed them to change back into comfortable clothing. When they closed the trunk, the three of them walked up to a metal door on the building's more expansive wall, and Dendro knocked. A few moments
          later, someone approached.{"\n"}
          {"\n"}A small being, wearing thick circular goggles, opened the door. Through the bulky lenses, Jake could see the round frog-like eyes.{"\n"}
          {"\n"}The small creature looked at them suspiciously. "What can I do for you?"{"\n"}
          {"\n"}Dendro cleared his throat. "We are comrades of Zimmer Rexus. He was captured in battle. We must gain access to his ship. We need his <Text style={{ fontFamily: "gelasibro-italic" }}>booster</Text> if we are to get him back safely, and
          time is not on our side."{"\n"}
          {"\n"}The creature's frog-like eyeballs moved across them slowly, eyeing Dendro’s orb, bleeding arms, and dog tag. Then the creature nodded. "Do you have the key?"{"\n"}
          {"\n"}Dendro stuck out his hand. In it was a hexagonally shaped sliver of metal.{"\n"}
          {"\n"}"Please, come with me," the creature said.{"\n"}
          {"\n"}When Jake stepped inside, the building felt much larger than he had anticipated. He couldn’t help but look up at the spectacular ceiling. It was constructed of crisscrossing beams that came together to form angled squares. Inside of
          each space was a stained-glass panel. Light flowed through them gently, illuminating shapes of foreign animals and exotic polygons. <Text style={{ fontFamily: "gelasibro-italic" }}>Is that...a tiger?</Text>
          {"\n"}
          {"\n"}The central hangar area was made up of three docking stations. A small spaceship sat in the one closest; the second was vacant, and when Jake’s eyes arrived at the third, his eyes froze.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That is a monster...how did they get that in here?</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>Are you telling me Zimmer flew that thing?</Text>
          {"\n"}
          {"\n"}Jake's eyes moved up and down to capture the sheer elevation of the machine. <Text style={{ fontFamily: "gelasibro-italic" }}>FS-Gravis</Text> was painted in large white letters on its side, next to an alien insignia, and various
          ropes, ladders, and pulleys assembled to different parts of its radar resistant surfaces. The cockpit at the top front of the hull nearly scraped the hangar ceiling. Retractable doors appeared to sit on the side center of the freighter to
          permit the loading of heavy cargo.{"\n"}
          {"\n"}"The ship took serious blaster damage on its back-sides. The underside floatation system was nearly split in half. We fixed those. Also had to insulate the liquid hydrogen tank and replace the cracked side of the regeneration
          resonator. Now she's almost as good as new. Cleaned up a few other scratches as well," the garage owner said in his glottal accent. "Luckily I worked on the lower-tier brigades back at the old shipyards on Elgro."{"\n"}
          {"\n"}Dendro peered at the ship. "And the booster is unimpaired?"{"\n"}
          {"\n"}"Affirmative. The interstellar booster was not damaged in the action." The fellow adjusted his goggles slightly. "You need a booster transplant. I assume that means you have access to an additional ship?"{"\n"}
          {"\n"}"Yes, sir. My Sentauri Beacon I. I put her down some seven miles from here. I will head out on foot and bring her back if that is permissible," Dendro replied.{"\n"}
          {"\n"}The goggled being nodded. "Put her down on the tarmac out back, and mind you, the transplant will take a few hours, and it will not be cheap–seventeen thousand Naronian Kroners to be exact," the creature remarked.{"\n"}
          {"\n"}"That is not a problem," Dendro stated.{"\n"}
          {"\n"}Zena stepped forward. "Sir, could we use the side room as we wait? We have some urgent business to attend to, and that workbench in there would be quite useful."{"\n"}
          {"\n"}"Go ahead," the man replied, extending his hand.{"\n"}
          {"\n"}“Thank you.” She stuck out her palm. Dendro reached into his interior pocket, pulled out the disc, and dropped it in her hand.{"\n"}
          {"\n"}As Dendro continued his discussion, Jake followed Zena towards the small workshop in the front of the building. When they entered, Jake could see the walls were covered in saws, drills, and other heavy tools, and in the center of the
          room sat a wooden workbench. Zena dropped her bag on the table, sat down, and pulled out her laptop.{"\n"}
          {"\n"}As her computer booted up, she twirled the disc around with her fingers. She brought her eyes closer, to study the foreign object’s reflective surfaces. She gently rubbed the miniscule markings on the metal sleeve. "These are Venthum
          Gorak characters," she explained.{"\n"}
          {"\n"}When the home screen appeared, Zena slid the disc into the side of the machine. She massaged her bandaged shoulder as she waited for something to load. A few moments later, a program popped up; Jake could see a set of unfamiliar
          characters appear in the program’s window: thirty lines of strange looking shapes and characters. <Text style={{ fontFamily: "gelasibro-italic" }}>Those almost look like Greek letters.</Text>
          {"\n"}
          {"\n"}A look of disappointment shone on Zena’s face. “The contents of this disc are not written in plain Venthum Gorak. That <Text style={{ fontFamily: "gelasibro-italic" }}>was</Text> fanciful. This is a{" "}
          <GlossaryWord lookup_string="Cipher" word="cipher" toggleGlossary={this.props.toggleGlossary} />, a secret code. I don't recognize the pattern at all,” she said.{"\n"}
          {"\n"}“Try <GlossaryWord lookup_string="Cipherium" word="Cipherium" toggleGlossary={this.props.toggleGlossary} />
          ,” Dendro spoke out. He had entered the room without them noticing and was leaning against the doorway watching them.{"\n"}
          {"\n"}“There you are!” She nodded and clicked an icon on her application dock. A magenta window appeared, and she proceeded to paste in the string of alien characters she copied from the previous application into a small blinking text field
          on the current screen, then hit enter. A horizontal loading indicator filled itself out. Then the application read:{"\n"}
          {"\n"}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>No relevant cipher detected. Nearest match: .0023%.</Text>
          {"\n"}
          {"\n"}“Nothing coming up on <Text style={{ fontFamily: "gelasibro-italic" }}>Cipherium</Text>, Dendro. Nothing whatsoever,” Zena said. “This is not something <Text style={{ fontFamily: "gelasibro-italic" }}>Cipherium</Text> has come in
          contact with in the past.”{"\n"}
          {"\n"}“I don't know,” Dendro said, as he leaned against the far wall. “I have no idea how to crack an unrecognizable code. That's why I need to get my ship.”{"\n"}
          {"\n"}“What is Cipherium?” Jake asked.{"\n"}
          {"\n"}“It is a special program we can use to help us crack encoded messages.” She continued to massage her shoulder and collarbone. A small grouping of blood began to seep through her shirt. “There is nothing we can do. If{" "}
          <GlossaryWord lookup_string="Cipherium" word="Cipherium" toggleGlossary={this.props.toggleGlossary} /> can’t crack the code, then no other software we have access to can...this requires the help of a specialist.”{"\n"}
          {"\n"}Just then, the small green shop owner appeared. He had apparently been eavesdropping from just outside the open room. He walked over and said: “May I take a look?” Zena glanced at him curiously, then she looked at Dendro, who nodded
          approvingly. “Be my guest<Text style={{ fontFamily: "gelasibro-italic" }}>.”</Text> She spun the computer around so the garage owner could view the contents of the screen.{"\n"}
          {"\n"}He took off his goggles and put his hands on the table, bringing his face closer to the screen. He had thick inset eye sockets, and large, round eyeballs, making him appear almost frog-like. He then pulled out a set of spectacles from
          his toolbelt and held them against his face as he examined the characters. “Very interesting. Extremely interesting,” he muttered.{"\n"}
          {"\n"}Zena looked at the man incredulously.{"\n"}
          {"\n"}He looked up. “Yes. Yes. This is most certainly a variant <Text style={{ fontFamily: "gelasibro-italic" }}>Bulk Cipher</Text>. I've seen this before in the undergrounds of Elgro, my home planet. This is futuristic stuff. Triple
          layered language obfuscation. I was a real cipher-head growing up. I've studied even the most esoteric patterns. All sorts of folk would come to the undergrounds back in my day–whenever they needed to develop new ciphers{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>covertly</Text>. They were rough parts then on Elgro. I used to go to hang out with a rough lot. Smart group of lads, however. Some of the most elite cipher experts you could find in the
          galaxy–some even got recruited to The Forces. They helped design some of the most effective and arcane ciphers in existence. Hanging around there, learning cipher, code, it's when I first got an interest in building things, fixing ships,
          all sorts of things, you know. I still play around with my own encodings, for fun that is, to this day.”{"\n"}
          {"\n"}Zena looked at him in disbelief. “You mean to tell me you've seen this code before? You're telling me this a cipher created on one of The Nestomir’s outback planets?”{"\n"}
          {"\n"}The man pulled off the spectacles and nodded. “Yes. Many black-market technologies were invented in the outback undergrounds. I grew up around it.”{"\n"}
          {"\n"}Zena looked over to Dendro, who was grinning. “It sounds like you're in better hands than we expected. I'll leave you to it then. I am heading for the ship,” Dendro said. He waved, then pranced over to the exit, disappearing out the
          steel plated front door.{"\n"}
          {"\n"}“See you soon,” Zena shouted at him. She looked down at the table. A few moments later, she appeared to have entered a trance. She was thinking hard about something. “<Text style={{ fontFamily: "gelasibro-italic" }}>Bulk Cipher</Text>
          . <Text style={{ fontFamily: "gelasibro-italic" }}>What</Text> does that remind me of?” She patted her fist against the table a few times. “Wait. Jonko. Zimmer's friend. From the forces. Naronian Cyber Intel. He would rant at Gelfer's
          Tavern on 27th block. That guy wouldn't shut up about his boss. On and on about his side projects. But his boss wouldn't listen. Code cracking. Cypher{" "}
          <GlossaryWord lookup_string="Decryption" word="decryption" toggleGlossary={this.props.toggleGlossary} />. Yes. He mentioned that he had built a server. A server to help decode obscure ciphers that were created in outback undergrounds. That
          coders for hire, cryptic masterminds with no loyalty to any party were rumored to create these things. Missionaries of sorts. People with nothing better to do. He may have mentioned a{" "}
          <GlossaryWord lookup_string="Bulkcipher" word="Bulk Cipher" toggleGlossary={this.props.toggleGlossary} />. We may be able to hit his server if it's still online. I knew I’d heard that term before.” She pulled her laptop closer.{"\n"}
          {"\n"}“I will leave you to it then,” the garage owner said. The small man gave a subtle bow then walked back into the hangar.{"\n"}
          {"\n"}“Hit the server?” Jake asked.{"\n"}
          {"\n"}Zena patted down her wound. A tiny bit of blood was seeping through her shirt. “Yes, the server.”{"\n"}
          {"\n"}“Are you okay?” Jake asked.{"\n"}
          {"\n"}“Yes.” She cringed as she put pressure on her wound. “Here. Maybe you can take control.”{"\n"}
          {"\n"}“Me?” Jake asked.{"\n"}
          {"\n"}“Yes, we have an hour or more until Dendro gets back. This may be a good time to teach you a little bit about the internet and how we send information across it.”{"\n"}
          {"\n"}Zena scooted to the side, allowing Jake to control the machine.{"\n"}
          {"\n"}“Okay, then. What did you say? I need to hit Jonko’s server?" Jake hesitated. “What does that mean and how can I learn this so quickly?”{"\n"}
          {"\n"}“Do not worry, I am here to guide you,” she remarked. “The ancient masters believed that each sentient being has ninety-nine million petabytes of learning potential. That's nearly{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>infinite</Text>, no matter our age, gender, shape, or wherever in this Universe we call home. You will learn this just fine, trust yourself, and your mental hardware.”{"\n"}
          {"\n"}“Okay, then. If you say so. I will trust my mental hardware,” he said.{"\n"}
          {"\n"}“Good,” she replied. “Now let’s learn.” She began fidgeting with a wrench that had been left on the table. “To understand the <Text style={{ fontFamily: "gelasibro-italic" }}>server</Text>, we must first understand the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>internet</Text>. The construct of the internet is so stunning it assuages some of the pain in my shoulder when I think about it. Do you have any understanding of how the internet works?” Zena
          asked. “I should mention there is a bridge between Earth’s internet, and the internet of all <GlossaryWord lookup_string="Enlightened" word="Enlightened" toggleGlossary={this.props.toggleGlossary} /> systems, and the Nestomir. The bridge
          has limitations, but it has been constructed through our civilian satellite networks.”{"\n"}
          {"\n"}“That’s wild. And no, not really, I don’t really know how the internet works,” Jake said. I know I use the internet to log into apps and websites. And to play multiplayer games. I mean, yea, almost everything uses the internet. But I
          don't really know what it's doing to make everything connect.”{"\n"}
          {"\n"}Zena replied, “Sometimes it’s good to recognize what we do not know. The internet is simple when you look at it from a high-level. It enables computers from anywhere on your planet, or even the universe, to communicate, incredibly
          fast. It is essentially a network <Text style={{ fontFamily: "gelasibro-italic" }}>of</Text> computer networks. And it operates not much differently than the postal system you use to send physical mail.”{"\n"}
          {"\n"}“You mean like sending letters?” Jake questioned.{"\n"}
          {"\n"}“Yes. Like sending letters. The internet works quite similarly to a postal system,” Zena replied.{"\n"}
          {"\n"}“A postal system, for real? Can you explain?” Jake said.{"\n"}
          {"\n"}Zena nodded. “I can. Let’s say, for example, you set out to mail a birthday postcard to your friend. How might you go about doing that? Let’s say his street address is 24 Peach Street, Chula Vista, California.”{"\n"}
          {"\n"}“Write the address on the postcard. Put a stamp on it. Drop it off at the closest mailbox. Then the mail person picks it up, drives it somewhere, and then it gets delivered,” Jake said. “What does that have to do with the internet?”
          {"\n"}
          {"\n"}“One moment,” she continued, “Pay attention to the point I want to make here: you write your friend’s address on the postcard in a <Text style={{ fontFamily: "gelasibro-italic" }}>standardized</Text> way. There is a format that
          everyone uses...a house number, the street name, the city, state, zip code.”{"\n"}
          {"\n"}“Yea, I see that,” Jake said. “Still the internet?”{"\n"}
          {"\n"}“Before we explain its connection to the internet, let’s examine how the postcard actually reaches your friend,” she commented. “The mail carrier will pick it up from the mailbox and push the letter to the next step in its journey,
          the post office. Then the employee in the post office puts it on a truck that takes it to a post office in California. Then an employee there puts it on a delivery vehicle that takes it to a post office in Chula Vista. The{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>point</Text> is, each employee pushes the letter in the <Text style={{ fontFamily: "gelasibro-italic" }}>general</Text> direction of your friend’s home, until it funnels all the way down to
          the local mail person who will deliver the postcard to your friend’s street address."{"\n"}
          {"\n"}“It's a series of <Text style={{ fontFamily: "gelasibro-italic" }}>nodes,</Text> connecting points on the network<Text style={{ fontFamily: "gelasibro-italic" }}>,</Text> that direct, or{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>route</Text>, our letter. Each node has more information about where the letter should go next, but no node, except the last, actually sends it to exactly where it needs to go, only the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>general</Text> direction. The internet works in a nearly <Text style={{ fontFamily: "gelasibro-italic" }}>identical</Text> fashion. When we send a message over the internet, the message is
          addressed, and then moves through a series of nodes, or post offices, which we call <Text style={{ fontFamily: "gelasibro-italic" }}>routers</Text> in internet terms, until it can be delivered locally to the correct street address, or{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>IP</Text> address.”{"\n"}
          {"\n"}“I think I see what you’re saying. That’s wild,” Jake said. “I never knew the internet worked that way...it’s hard to believe...but I've never even thought about it to be honest...so that's what an{" "}
          <GlossaryWord lookup_string="Ipaddress" word="IP Address" toggleGlossary={this.props.toggleGlossary} /> is? It's like your street address?”{"\n"}
          {"\n"}“Yes,” Zena said. “At least your public IP. But we don't need to get too deep into networking right now.”{"\n"}
          {"\n"}“But how does the internet move things around so fast?” Jake asked.{"\n"}
          {"\n"}“Well, the internet leverages the speed of light. When data moves across the cables and wires that make up the backbone of the internet, it moves at light speed. It's only when things get directed at our internet post offices, our{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Router" word="routers" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          , do things slow down a bit. But even then, because of how efficient computers are at processing information, those delays are very subtle from a human standpoint,” Zena said.
          {"\n"}
          {"\n"}“So, it’s really the speed of light? That's impressive. That's how we can send messages so fast on social networks and play games online. Dang, we really do take it for granted,” Jake remarked.{"\n"}
          {"\n"}“Yes. We do take it for granted,” she replied. “Now, that brings me back to servers. Have you ever heard the terms <Text style={{ fontFamily: "gelasibro-italic" }}>client</Text> or{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>server</Text>? I know I mentioned the term <Text style={{ fontFamily: "gelasibro-italic" }}>hit the server</Text>, but have you ever heard of either of those words individually before? You
          need to understand them both today if we are to make an attempt at decoding this message.”{"\n"}
          {"\n"}“Yes, I’ve heard of servers. Client, I’m not sure,” he said.{"\n"}
          {"\n"}“Let me try and explain them clearly: a <Text style={{ fontFamily: "gelasibro-italic" }}>client</Text> is a piece of software a user of the internet loads up to visualize an application. I'm talking about the apps you open on your
          phone or the websites you load on your browser. They are <GlossaryWord lookup_string="Client" word="clients" toggleGlossary={this.props.toggleGlossary} /> of the internet. A <Text style={{ fontFamily: "gelasibro-italic" }}>server</Text>, on
          the other hand, is a computer that stores, coordinates, and centralizes all the information in an application. For example, I’ve heard of Earth’s Instagram. We have something quite similar in The Nestomir. Now, when you open the Instagram
          app, you are using the Instagram client. The app on your phone <Text style={{ fontFamily: "gelasibro-italic" }}>is</Text> the client and this client requests information from the Instagram server, like the newest pictures that have been
          uploaded by the accounts you follow. Servers can sit anywhere across the world. Clients request information from servers, and servers serve the requested information back to the{" "}
          <GlossaryWord lookup_string="Client" word="client" toggleGlossary={this.props.toggleGlossary} />. By enabling a <Text style={{ fontFamily: "gelasibro-italic" }}>client server architecture</Text>, many users can access the same system, and
          the server can keep information across the application centralized. Almost any app you can imagine will obey this <GlossaryWord lookup_string="Clientserver" word="client server" toggleGlossary={this.props.toggleGlossary} /> relationship.”
          {"\n"}
          {"\n"}“That’s interesting,” Jake said.  “Everything has to be kept in sync.”{"\n"}
          {"\n"}“Precisely,” Zena replied. “Now, if you will excuse me for just one moment, I need to stretch my legs, and I also am going to see if this man has any tea. Do you want any?”{"\n"}
          {"\n"}“Just water,” Jake said.{"\n"}
          {"\n"}“Sounds good.” She stood up and headed for the main room. A few minutes later she returned holding two bird-shaped ceramic mugs.{"\n"}
          {"\n"}Zena took a deliberately slow sip of her libation. “Now where were we? Right, we talked a bit about the internet, and we discussed the client-server model. Next”—she pounded her fist against the table, the metal wrench on the table
          rattled loudly—“we must discuss the language clients and servers use to communicate with one another over the internet.”{"\n"}
          {"\n"}“They have a language?” Jake asked.{"\n"}
          {"\n"}“They most certainly do, kid.” Zena’s eyes lit up. “Sometimes we refer to this language that computers use to communicate between one another as a <Text style={{ fontFamily: "gelasibro-italic" }}>protocol</Text>.{" "}
          <GlossaryWord lookup_string="Protocol" word="Protocol" toggleGlossary={this.props.toggleGlossary} /> is a fancy way of saying language. The English language is a communication protocol. It abides by a strict set of rules, or grammar, that
          enable individuals to understand one another.{"\n"}
          {"\n"}“I never thought about it that way, but yea, I guess that’s how communication works,” Jake remarked.{"\n"}
          {"\n"}“Yes. And that's where <Text style={{ fontFamily: "gelasibro-italic" }}>HTTP protocol</Text> comes into play. <Text style={{ fontFamily: "gelasibro-italic" }}>HTTP</Text> is a{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>protocol</Text>, or <Text style={{ fontFamily: "gelasibro-italic" }}>language</Text>, that engineers designed to allow clients and servers to communicate efficiently over the internet,” Zena
          explained. “Nearly every interaction you make over the internet, whether it be sending a chat, uploading a comment, or liking a YouTube video, or asking for the latest news article from your favorite publication, is executed over the
          internet through an <GlossaryWord lookup_string="Httpmessage" word="HTTP message" toggleGlossary={this.props.toggleGlossary} />
          .”{"\n"}
          {"\n"}“I’ve seen HTTP. You see it on your browser, in the address bar!” Jake replied.{"\n"}
          {"\n"}“Yes, exactly. Your browser uses <GlossaryWord lookup_string="Http" word="HTTP" toggleGlossary={this.props.toggleGlossary} /> protocol to communicate with other computers on the internet,” Zena said. She took another generous swig of
          her tea. “Now, we’ve talked a bit about clients and servers, as well as this language we use called HTTP, but to make everything work effectively, between <Text style={{ fontFamily: "gelasibro-italic" }}>clients</Text> and{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>servers</Text>, we must recognize that the HTTP language, or protocol, follows a communication pattern that we refer to as <Text style={{ fontFamily: "gelasibro-italic" }}>request</Text>-
          <Text style={{ fontFamily: "gelasibro-italic" }}>response</Text>. This might sound fancy, but all it means is that when a client makes a <Text style={{ fontFamily: "gelasibro-italic" }}>request</Text> to a server using HTTP, the server{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>responds</Text> to the client using HTTP. <Text style={{ fontFamily: "gelasibro-italic" }}>Request-response, request-response</Text>.”{"\n"}
          {"\n"}“That’s pretty simple, I guess,” Jake said.{"\n"}
          {"\n"}“Yes, nearly all exchanges happening over the internet take this <Text style={{ fontFamily: "gelasibro-italic" }}>request</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>response</Text> form. And the beauty of HTTP protocol is
          that it makes it easy for us to customize our communications. For example, we can very easily <Text style={{ fontFamily: "gelasibro-italic" }}>address</Text> our HTTP message, choose the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>types of information</Text> we want to send, dictate the <Text style={{ fontFamily: "gelasibro-italic" }}>format of our data</Text>, and even do things to c
          <Text style={{ fontFamily: "gelasibro-italic" }}>onfigure the security</Text> of our requests and responses. And to reiterate, it is these HTTP messages, these requests, and responses, that allow us to do all of the things we love to do on
          the internet. This is what’s taking place underneath the hood when we load and send information in almost all forms.”{"\n"}
          {"\n"}“So it’s all about HTTP. I had no idea. I thought it was just some <Text style={{ fontFamily: "gelasibro-italic" }}>thing</Text> on my address bar,” Jake remarked.{"\n"}
          {"\n"}“Let me bring up some of the first notes I took on the subject, it might help capture some of the things we just discussed.” Zena took the computer and scavenged through a few folders. She eventually clicked on a file. The screen
          loaded up a new program and displayed:{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasio-bold", fontSize: 24 }}>Notes on HTTP</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasio-bold" }}>HTTP Basics</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}• HTTP messages power most of the communication that takes place on the internet.{"\n"}
          {"\n"}• An HTTP message takes the form of either a <Text style={{ fontFamily: "gelasibro-italic" }}>request</Text> (message sent from client to server) or a <Text style={{ fontFamily: "gelasibro-italic" }}>response</Text> (message sent from
          server to client).{"\n"}
          {"\n"}• An HTTP message is made up of two sections, the <Text style={{ fontFamily: "gelasibro-italic" }}>header</Text>, and the <Text style={{ fontFamily: "gelasibro-italic" }}>body</Text>. (HTTP{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Headers</Text> contain high level information (and instructions), i.e., in what <Text style={{ fontFamily: "gelasibro-italic" }}>format</Text> should data be delivered by the server? The HTTP{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Httpbody" word="body" toggleGlossary={this.props.toggleGlossary} />
          </Text>{" "}
          contains information the user actually inserts into the computer <Text style={{ fontFamily: "gelasibro-italic" }}>that we need to send to our server to save</Text>, i.e., the actual text of the comment you want to save (post) to a social
          network.{"\n"}
          {"\n"}• Every HTTP message must indicate a <Text style={{ fontFamily: "gelasibro-italic" }}>request</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>method (very important, see below)</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasio-bold" }}> On HTTP</Text> <Text style={{ fontFamily: "gelasio-bold" }}>Request Methods</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}• The request method indicates the <Text style={{ fontFamily: "gelasibro-italic" }}>overall nature/vibe</Text> of an HTTP request.{"\n"}
          {"\n"}• The two most used request methods are <GlossaryWord lookup_string="Httpget" word="HTTP GET" toggleGlossary={this.props.toggleGlossary} /> and{" "}
          <GlossaryWord lookup_string="Httppost" word="HTTP POST" toggleGlossary={this.props.toggleGlossary} />.{"\n"}
          {"\n"}• HTTP GET signifies we are asking our server to respond with data loaded from a specific resource (an image, file, etc, that exists in a specific folder on the server).{"\n"}
          {"\n"}• HTTP POST method signifies we are sending something to the server to save for later.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasio-bold" }}>On HTTP</Text> <Text style={{ fontFamily: "gelasio-bold" }}>Headers</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}• HTTP Headers can be thought of as the settings we place on our HTTP message.{"\n"}
          {"\n"}• For example, the HTTP{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Httpcontenttype" word="Content-Type" toggleGlossary={this.props.toggleGlossary} />
          </Text>{" "}
          header establishes the <Text style={{ fontFamily: "gelasibro-italic" }}>format</Text> of the data we are sending in our HTTP message (e.g., text, image, csv, pdf, etc).{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasio-bold" }}>On HTTP</Text>
          <Text style={{ fontFamily: "gelasio-bold" }}> Body</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}• The body of our HTTP message is where we usually store the data uploaded by a user.{"\n"} {"\n"}• <GlossaryWord lookup_string="Httpget" word="HTTP GET" toggleGlossary={this.props.toggleGlossary} /> messages usually do not contain a
          body (only headers) because we are not sending anything to the server to save{"\n"}
          {"\n"}• If we place a comment on a picture on our favorite social network, the <Text style={{ fontFamily: "gelasibro-italic" }}>body</Text> of our request would contain the text of the comment, e.g, “Nice cat, dude!”.{"\n"} {"\n"}• The body
          of our HTTP message is sometimes referred to as the <Text style={{ fontFamily: "gelasibro-italic" }}>payload</Text>.{"\n"}
          {"\n"}Jake mumbled out loud as he read through the notes. “Hm...so each message is <Text style={{ fontFamily: "gelasibro-italic" }}>either</Text> a <Text style={{ fontFamily: "gelasibro-italic" }}>request</Text> or a{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>response</Text>, and that depends if it’s going from client <Text style={{ fontFamily: "gelasibro-italic" }}>to</Text> server, or server{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>to</Text> client...makes sense. Now we use{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Httpheader" word="HTTP headers" toggleGlossary={this.props.toggleGlossary} />
          </Text>{" "}
          to place settings on our <Text style={{ fontFamily: "gelasibro-italic" }}>HTTP messages</Text> like something to indicate the format of our data...that’s clear. The <Text style={{ fontFamily: "gelasibro-italic" }}>body</Text> is where we
          store the information the user uploads...but I see here we need to actually specify the overall nature of a request with a <Text style={{ fontFamily: "gelasibro-italic" }}>request method</Text> like GET or POST? Really?”{"\n"}
          {"\n"}“Yes, we must <Text style={{ fontFamily: "gelasibro-italic" }}>always</Text> indicate the HTTP <Text style={{ fontFamily: "gelasibro-italic" }}>request method</Text> when we send an HTTP request. HTTP{" "}
          <GlossaryWord lookup_string="Httprequestmethod" word="request methods" toggleGlossary={this.props.toggleGlossary} /> help our server keep things organized. By making it clear what we want to do with our message, like asking the server for
          information, or asking the server to save information for later, we can make it much easier for our server to accomplish these tasks efficiently. For example, on Jonko’s server, we need to use a POST request when we ask his server to
          decrypt these characters. The reason for this is that we need to send the server a relatively large <GlossaryWord lookup_string="Payload" word="payload" toggleGlossary={this.props.toggleGlossary} />: the cipher we want it to decrypt. His
          server may also save this cipher for later to better train his code decryption <GlossaryWord lookup_string="Algorithm" word="algorithms" toggleGlossary={this.props.toggleGlossary} />
          .” She scrolled down the page. “Here, check this out. This is an example of a real HTTP GET request, and the one below is a real example of an HTTP POST request. You can see, an HTTP request is fairly easy to read–it’s just text.”
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={107} width={300} radius={"none"} source={require("./../../assets/images/lessons/lesson9_1.png")} />
        </View>
        <Caption>(Zena's note: an HTTP message is written with text only!)</Caption>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={160} width={290} radius={"none"} source={require("./../../assets/images/lessons/lesson9_2.png")} />
        </View>
        <Caption>(Zena's note: this is an example HTTP POST Request!)</Caption>

        {
          // Section 2 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “<Text style={{ fontFamily: "gelasibro-italic" }}>Ah</Text>. I see. Your graphics here make this clearer. It’s like addressing a postcard in a fancy format. I get it. I think.” Jake said. “But how can we{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>actually</Text> make a request to a server? Like what do we use to create an HTTP message in the first place?”{"\n"}
          {"\n"}Zena grinned and eyeballed the code editor icon on her application dock.{"\n"}
          {"\n"}“Wait, are you telling me we can use <Text style={{ fontFamily: "gelasibro-italic" }}>Python</Text> to make a request over the internet?” Jake asked.{"\n"}
          {"\n"}“Yes, yes we certainly can, Python can do this job well, and so can other tools–which we don’t have time to discuss now,” Zena said. “There is a very special open-source{" "}
          <GlossaryWord lookup_string="Library" word="library" toggleGlossary={this.props.toggleGlossary} /> in Python, known as <Text style={{ fontFamily: "gelasibro-italic" }}>Requests</Text>, that enables us to make HTTP requests over the
          internet. Here, one moment. I will open up a fresh Python file for us in our code editor.” Zena played with the computer for a moment, then spun it back towards Jake. A blank code file, entitled{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>cipher.py</Text>, displayed on the screen. “Our goal today is to send a POST request to Jonko’s server. To do this, we will send an HTTP message to his server, over the internet. This message
          must contain the correct request headers, the server’s <GlossaryWord lookup_string="Url" word="URL" toggleGlossary={this.props.toggleGlossary} />, as well as our payload, or message body.”{"\n"}
          {"\n"}“So, how do we do this?” Jake asked eagerly.{"\n"}
          {"\n"}“Let's start off by <GlossaryWord lookup_string="Importstatement" word="importing" toggleGlossary={this.props.toggleGlossary} /> the <Text style={{ fontFamily: "gelasibro-italic" }}>requests</Text> library. I have already downloaded
          the requests library with PIP, so we can skip that step today. On the first line, please generate the correct import statement.”{"\n"}
          {"\n"}Jake made his attempt on the screen.  “Like this? I've never used a library before. Dendro only showed me a few examples on the ship.”
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson9_3.png")} />
        </View>

        {
          // Section 3 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Zena eyed his code. “This is correct. Nice work. And don't worry, this is a great opportunity to use a library for a genuine purpose,” she responded. “What you've done here is import the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>requests</Text> library. In Python, an imported library takes the form of a <Text style={{ fontFamily: "gelasibro-italic" }}>module</Text>. A{" "}
          <GlossaryWord lookup_string="Module" word="module" toggleGlossary={this.props.toggleGlossary} /> can be thought of as a collection of <Text style={{ fontFamily: "gelasibro-italic" }}>prewritten</Text>{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>functions</Text>.”{"\n"}
          {"\n"}“So, there is a <GlossaryWord lookup_string="Function" word="function" toggleGlossary={this.props.toggleGlossary} /> buried inside this <Text style={{ fontFamily: "gelasibro-italic" }}>requests</Text> thing
          <Text style={{ fontFamily: "gelasibro-italic" }}>—requests module—</Text>that will allow us to create an HTTP message?” Jake asked.{"\n"}
          {"\n"}“Precisely. Modules allow us to neatly organize imported code. To access a function inside of an imported module we use what’s called the <Text style={{ fontFamily: "gelasibro-italic" }}>dot</Text> syntax. Today we want to access the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>post</Text> function, which is stored inside of <Text style={{ fontFamily: "gelasibro-italic" }}>requests</Text>. The <Text style={{ fontFamily: "gelasibro-italic" }}>post</Text> function
          inside of the <Text style={{ fontFamily: "gelasibro-italic" }}>requests</Text> module permits us to send an HTTP POST request over the internet. Here, let me demonstrate.” Zena added a line below Jake’s.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson9_4.png")} />
        </View>

        {
          // Section 4 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “So that’s how you access a prewritten function stored inside <Text style={{ fontFamily: "gelasibro-italic" }}>requests</Text>? You just go <Text style={{ color: "#0C2443", fontFamily: "code" }}>requests.post</Text>? That’s so simple. I
          think I understand more now why coder’s get obsessed with this stuff,” Jake said. He looked at the screen. “Ok, so now we’ve figured out how to access the <Text style={{ fontFamily: "gelasibro-italic" }}>post</Text> function, but how do we
          pass the information we need to create the correct HTTP message...don’t we need to provide the server URL and the message body?”{"\n"}
          {"\n"}“You are correct. If you remember from your lessons, functions grant us the power to provide them <Text style={{ fontFamily: "gelasibro-italic" }}>inputs</Text>. The first{" "}
          <GlossaryWord lookup_string="Parameter" word="parameter" toggleGlossary={this.props.toggleGlossary} /> of our <Text style={{ fontFamily: "gelasibro-italic" }}>post</Text> function accepts the URL. The second parameter accepts the message
          body, which takes the form of <GlossaryWord lookup_string="Dictionary" word="dictionary" toggleGlossary={this.props.toggleGlossary} />{" "}
          <GlossaryWord lookup_string="Datastructure" word="data structure" toggleGlossary={this.props.toggleGlossary} />. You can start to see how all of the topics we’ve learned about start to come together to enable us to do useful things. Note,
          the url we want to hit on Jonko’s server is http://nww.jonko-creations.nest/ciphers”.{"\n"}
          {"\n"}“So we actually use the <GlossaryWord lookup_string="Input" word="inputs" toggleGlossary={this.props.toggleGlossary} /> of the function...let me think….a dictionary.” He typed for a few moments, modifying Zena’s code, then looked up
          at her.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={186} source={require("./../../assets/images/lessons/lesson9_5.png")} />
        </View>

        {
          // Section 5 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “So exactly, for our first parameter, this is correct, except note, the URL takes a string, so it must be wrapped in quotes,” Zena said.{"\n"}
          {"\n"}“Ah,” Jake remarked. He corrected his mistake. “So now, we have to add the message body as a dictionary? And that <Text style={{ fontFamily: "gelasibro-italic" }}>is</Text> the second parameter of this function?”{"\n"}
          {"\n"}“Yes. Our second parameter will take the form of a dictionary with one key. In this case, if I remember correctly, that key is entitled <Text style={{ fontFamily: "gelasibro-italic" }}>decode</Text>. So, take a stab at creating that
          dictionary, then paste the cipher from the other application window as the value of the decode key.”{"\n"}
          {"\n"}“Okay. Um. Let’s see here…” Jake spent a moment configuring his second parameter, a dictionary.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>A dictionary right here? Passed into the function? It seems a bit weird to add a dictionary as an input, but maybe that’s not weird in the world of coding.</Text> He finished his attempt and
          looked at Zena.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={177} source={require("./../../assets/images/lessons/lesson9_6.png")} />
        </View>
        <Caption>This can be visually intimidating. But all that's happening is Jake is inserting two arguments into the function. The first argument is the URL, the secong argument is a dictionary.</Caption>

        {
          // Section 6 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “This is excellent! You nailed the dictionary on your first try! Now everything you’ve done here with the <Text style={{ fontFamily: "gelasibro-italic" }}>post</Text> function looks correct. We are setting the correct URL, and we are also
          setting the correct message body. And do note, the requests library lets us do all sorts of things with our requests. For example, if we wanted to, we could configure our HTTP headers here, but for this task, the default settings registered
          in <Text style={{ fontFamily: "gelasibro-italic" }}>requests</Text> are good enough,” Zena said. “But there is one absolutely critical thing we're missing to accomplish our objective here. Can you tell what it is?”{"\n"}
          {"\n"}Jake scanned the two lines of code. The syntax seemed correct. What else could be missing? “I really have no idea,” Jake said.{"\n"}
          {"\n"}“We need to <Text style={{ fontFamily: "gelasibro-italic" }}>view</Text> the server's <Text style={{ fontFamily: "gelasibro-italic" }}>response</Text>. Note, and this is very important to get comfortable with, no matter what type of
          request we make, GET, POST, etc., the server will <Text style={{ fontFamily: "gelasibro-italic" }}>always</Text> respond. In the case of Jonko’s server, the response the server provides us will either be the decoded message, or an error
          message–that is if his server cannot decode our cipher successfully but let us pray that does not happen.”{"\n"}
          {"\n"}“So how can we see the server’s response? Where on Earth would that go?” Jake asked frustrated.{"\n"}
          {"\n"}“What’s the other powerful thing functions can do a…?” Zena edged Jake on.{"\n"}
          {"\n"}“A return, and <GlossaryWord lookup_string="Output" word="output" toggleGlossary={this.props.toggleGlossary} />? Are you serious? It’s that cool? The function’s{" "}
          <GlossaryWord lookup_string="Returnstatement" word="return" toggleGlossary={this.props.toggleGlossary} /> is the response from the server? No way!”{"\n"}
          {"\n"}Zena grinned.{"\n"}
          {"\n"}Jake updated his code rapidly. He was beginning to get a better feel for this stuff.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={190} source={require("./../../assets/images/lessons/lesson9_7.png")} />
        </View>
        <Caption>The requests.post function RETURNS a response. We can store that response in a variable, then print it to the terminal screen. This is a key fundamental of working with Python and the internet.</Caption>

        {
          // Section 7 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Like I’ve done before, I set the <Text style={{ fontFamily: "gelasibro-italic" }}>output</Text> of the function to a <Text style={{ fontFamily: "gelasibro-italic" }}>new</Text> variable, then on the next line, I{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>print</Text> it to the screen!” Jake hollered.{"\n"}
          {"\n"}“Precisely, Earthling. You’ve done it. Now, comes the scary part. We have to run this code and send our message through the internet.”{"\n"}
          {"\n"}Jake looked at her, then placed the pointer in the lower window (the terminal window). He typed in <Text style={{ color: "#0C2443", fontFamily: "code" }}>python3 cipher.py</Text> to run this python file.{"\n"}
          {"\n"}“Now?” Jake asked.{"\n"}
          {"\n"}Her eyes widened. She tapped the table nervously. “Go ahead.”{"\n"}
          {"\n"}He hit <Text style={{ fontFamily: "gelasibro-italic" }}>enter</Text>. Some milliseconds later, a message appeared on the terminal window.{"\n"}
          {"\n"}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>The -- Dark Continent. ∑asdfklas;dfklasdfkl..asdfasdfas∑df. Forces.</Text>
          {"\n"}
          {"\n"}“Holy — ”. Zena exclaimed. She pushed herself closer to the screen. “It worked! Or at least Jonko’s <GlossaryWord lookup_string="Server" word="server" toggleGlossary={this.props.toggleGlossary} /> decoded{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>some</Text> of it. The Dark Continent? <Text style={{ fontFamily: "gelasibro-italic" }}>Druinȉtis</Text>?<Text style={{ fontFamily: "gelasibro-italic" }}>”</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>“Ah</Text>.” A squiggly mark burned into Jake's arm, below the other three. “That <Text style={{ fontFamily: "gelasibro-italic" }}>kills</Text>.” He rubbed the marking vigorously. “Now what
          does this darn etching mean? Another power? And what is Druinitis?”{"\n"}
          {"\n"}Zena took his arm and examined the mark. “You will learn about this marking soon enough.” She closed her laptop and stood up and began to pace. “The dark continent? How can this be? What does this portend? I{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>cannot</Text> believe his server is <Text style={{ fontFamily: "gelasibro-italic" }}>still</Text> operational.”{"\n"}
          {"\n"}“What is the dark continent?” Jake asked again, still rubbing his wrist.{"\n"}
          {"\n"}“The Dark Continent, or <Text style={{ fontFamily: "gelasibro-italic" }}>Druinȉtis</Text>, is one of the most poorly understood continents of{" "}
          <GlossaryWord lookup_string="Limora" word="Limora" toggleGlossary={this.props.toggleGlossary} />
          ,” Zena stated.{"\n"}
          {"\n"}“So what does that mean?” Jake asked. “And why can’t you tell me what this marking signifies? I have four marks now; my mother is going to end me.”{"\n"}
          {"\n"}“I do not know what this message means. The cipher was only partially decoded. But <GlossaryWord lookup_string="Druinitis" word="Druinȉtis" toggleGlossary={this.props.toggleGlossary} />
          ...why would a <GlossaryWord lookup_string="Knightofdiukhien" word="Knight of Dieu Khien" toggleGlossary={this.props.toggleGlossary} /> be carrying a message about Druinȉtis? What business would it have there?” Zena uttered. She continued
          pacing. “And that marking you must find out about on your own, I’m afraid. It will come in due time.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Great. More mysteries to crack.</Text>
          {"\n"}
          {"\n"}After some time of watching Zena pace around the room in silence, they walked into the main hangar and rested on a set of couches there until they heard the roar of the Sentauri Beacon’s vertical take-off engines. They ran out onto
          the back tarmac to see the ship land. Dendro stepped out a few moments later. Zena informed him of what they had learned.{"\n"}
          {"\n"}“Nice job, son. You are really finding your way with that editor,” Dendro said. “As for Druinȉtis, I do not understand. That is a mystery to me. That continent has never been known to have a Venthum presence. It is a wicked place
          however, filled with crime, debauchery, and anarchy.”{"\n"}
          {"\n"}They walked back into the hangar and watched in silence as the garage owner coordinated a variety of large robotic machines underneath the towering{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Fsgravis" word="FS-Gravis" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          . Sometime later, after the raucous noises of welding and sawing, a trolley-like robot appeared from underneath Zimmer’s ship. In its grips was an extended silver cylinder, much longer than the communications receiver. Three strips of
          curved metal wrapped around its smooth surface, making it appear something like a thirty foot long churro. <Text style={{ fontFamily: "gelasibro-italic" }}>Is that the interstellar booster?</Text> The robotic trolley wheeled it outside. As
          the robot headed for Dendro’s ship, the garage owner followed behind it, carrying two toolboxes. They were told to watch from inside the hangar. From here all they could see was a shower of sparks and smoke as the installation commenced.
          About an hour later the garage owner came back inside and informed them that the transplant was complete.{"\n"}
          {"\n"}“Thank you for your help,” Dendro said.{"\n"}
          {"\n"}“My pleasure. Until we meet again.” The frog-like man responded. “The Beacon is ready to fly.”{"\n"}
          {"\n"}“Let’s go,” Dendro commanded.
        </Text>
      </View>
    );
  }
}
