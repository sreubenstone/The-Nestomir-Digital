import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";
import GlossaryWord from "../Glossary/inline/GlossaryWord";

const StoryGraphic = styled.Image`
  width: 360px;
  height: 200px;
  border-radius: 20px;
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

export default class Chapter6 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 6</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://res.cloudinary.com/dshxqbjrf/image/upload/v1633998380/chapter_symbol_sfj0ji.png`,
            }}
          />
        </View>

        {
          // Section 1 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Rough patches were not the exact words Jake wanted to hear. But there was nothing he could do. Joysticks shifted, knobs throttled, and lights pulsed as the ship’s pitch adjusted downward in preparation for entry into Salt Lake City
          airspace. The seatbelt straps tugged against Jake’s chest, chafing the skin underneath his shirt. It reminded him of the sensation he felt on the Megalith roller coaster at Wisco Flags.{"\n"}
          {"\n"}Dendro’s hand stayed steady on the joystick as he adjusted something on a screen. “We are ten clicks out. Lithium Radar wants me to put her down just off to the southwest of the factory mount. We should be clean out of line of sight.”
          {"\n"}
          {"\n"}The ship ailerons sculpted a stable flight path through the cold night air. Jake felt his body become lighter as they descended. He could see the sprawling lights of a city off the front right of the ship’s nose. The ship then banked
          left and began to rapidly descend.{"\n"}
          {"\n"}Jake slowly breathed in and out (a meditation technique his health teacher had recommended). The silver medallion gently bounced against his chest. It gave him a sense of comfort, yet he did not know why. He thought about the code on
          Dendro’s computer, the sensitivity variable, and opening up <GlossaryWord lookup_string="Memory" word="memory" toggleGlossary={this.props.toggleGlossary} /> slots inside the machine. He envisioned having the power to control the flow and
          movement of information.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>A coder’s job is to move information around as efficiently as possible,</Text> Dendro had said. The statement stuck in his head. He thought about the floating axe.{"\n"}
          {"\n"}Another warm chill ran throughout his body. <Text style={{ fontFamily: "gelasibro-italic" }}>This man, this creature, had incontrovertible powers. Could he get them too?</Text>
          {"\n"}
          {"\n"}As they dipped beneath the clouds a snowcapped range of mountains came into view. Jagged white and brown cliff faces reflected dim light from the not-too-far-off city and distant stars.{"\n"}
          {"\n"}When they were only a few thousand feet above the mountain range, the radar screen shifted to a full-blown terrain read out, like a Google Earth on steroids. Dendro moved his head closer to the screen, then peered over the cockpit
          panorama. He pointed just over the center of the nose. “Our target should be just beyond these three peaks in front of us.”{"\n"}
          {"\n"}The mountains they approached were bigger than Jake realized. <Text style={{ fontFamily: "gelasibro-italic" }}>Those are enormous.</Text> He gripped onto the seat handles. He squeezed his eyes nearly shut so that only a sliver of
          vision was still accessible. The irregular slabs of rock on the mountain top quickly approached. <Text style={{ fontFamily: "gelasibro-italic" }}>We're gonna crash!</Text> But a few moments later the snowcapped peaks in front of them had
          come and gone. Jake felt his body get lighter as they continued their descent.{"\n"}
          {"\n"}“There she is.” Dendro said, pointing.{"\n"}
          {"\n"}Jake caught sight of a rectangular edifice nestled onto the top of a tall, slender mountain just off to their right. Faint light poured from the bottom of the structure, but the nature of the building was still too far to make out
          clearly.{"\n"}
          {"\n"}“That’s it? That’s the factory?” Jake asked.{"\n"}
          {"\n"}“Affirmative. Chiral Laboratories,” Dendro replied.{"\n"}
          {"\n"}Jake studied the structure. It resembled some kind of man-made bird’s nest by the way it sat almost nestled into the top of the mountain. As they approached, Jake could see its form more clearly. The building’s foundation appeared
          built into the top of the mountain and its walls seemed to bend slightly inward.{"\n"}
          {"\n"}The laboratory fortress seemed impossible to reach without a helicopter or plane. There was a road curving up the face of the mountain into what appeared to be the front of the laboratory fortress. Jake traced it down the mountain,
          but it curved somewhere out of sight.{"\n"}
          {"\n"}“How can we possibly land?” Jake asked.{"\n"}
          {"\n"}“Vertical landing, kid.” Dendro stuck out his finger. “Right over there, to the left, is a flatter patch of snow, right below the ridgeline. We’ll put her out of view of any security or line of sight recon.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Line of sight recon?</Text> “This thing can land vertically?” Jake asked.{"\n"}
          {"\n"}“Yes, she can,” Dendro said, nodding.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Oh man.</Text> Jake thought. <Text style={{ fontFamily: "gelasibro-italic" }}>I can’t wait.</Text>
          {"\n"}
          {"\n"}Three stubby concrete chimneys sat on the top of the building, and it was terribly odd that there were no visible windows. The only light came from a phosphorescence coming from the very bottom of the structure. “That is a creepy
          looking place,” Jake blurted out.{"\n"}
          {"\n"}“Kind of place you build if you don’t want people to know what you’re doing,” Dendro agreed. “Hold on. I’m going to bring her in tight and steady.” He pulled the ship a few degrees to the left, then punched something into his armrest
          keypad. Three quick beeps blasted out from the cockpit dashboard. A high-powered chopping sound began rattling from the ship, rattling the floorboards underneath them.{"\n"}
          {"\n"}Jake gripped back down on his seat handles as they approached the peak. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>A second later, there was an abrupt momentum transfer. Their velocity slowed down to nil, and they began
          to drop. Jake’s insides felt out of order and he once again felt like he was going to throw up.{"\n"}
          {"\n"}“We’re falling!” Jake shouted as they plunged downward, but Dendro was intently focused on the radar readouts in front of him.{"\n"}
          {"\n"}“We are engaged in full vertical landing. Remain still. There will be no landing gear. Too much precipitate,” Dendro said. His hand gently shifted the joystick.{"\n"}
          {"\n"}Jake squeezed on the seat handles harder than he thought was possible as the ship began to vibrate. He could see the ground speeding up on them through the cockpit window.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Does this guy know what he’s doing?</Text>
          {"\n"}
          {"\n"}A few moments later they collided with the ground, jerking both of them upward. If it weren't for Jake’s seatbelt, he imagined he would have popped in the air and collided with the ceiling. He ran his hand down his spine, then glared
          at Dendro. “That hurt my back.”{"\n"}
          {"\n"}Dendro unbuckled his straps. “You’ll be fine. Nothing I could do about that, sorry. We’d actually classify that as a decent landing in the forces in these conditions.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Great.</Text>
          {"\n"}
          {"\n"}Dendro checked a few applications on his monitors, then turned the red knob to his front left. The fan sounding engine throttled off.{"\n"}
          {"\n"}“We’re here,” Dendro said. He flipped another switch which caused the cockpit lights to go out. They were in the dark, except for the light of the screens in front of them. He was able to, however, begin to make out the landscape in
          front of the cockpit as the snow subsided. All he could see was ice, dark rocks, and snow.{"\n"}
          {"\n"}Dendro raised his left forearm to his face. “Initiate local area network probe!” He rolled up his left sleeve and examined the screen built into his arm (by now Jake was pretty sure Dendro referred to this as his{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Lithium Radar</Text>). A rotating alien character, which resembled a kind of twisted ‘h,’ spun clockwise in front of them, as if to indicate something was loading. They sat there in silence,
          waiting, as a light flurry began to fall down on the nose of the ship.{"\n"}
          {"\n"}A minute went by before the screen flickered again. A white file filled with various diagrams and alien text loaded onto Dendro’s Lithium Radar screen.{"\n"}
          {"\n"}Dendro studied the read out for a moment. “Lithium Radar has successfully hacked into the factory’s 256-bit encrypted LAN.” He scrolled down the page with his gloved finger. “It appears the factory-laboratory runs at full staffing
          capacity until midnight, GMT.  There are an estimated two hundred and forty factory personnel working at this hour.”{"\n"}
          {"\n"}“Two hundred forty!” Jake shouted. “You can’t be serious!”{"\n"}
          {"\n"}Dendro stuck his hand up to silence him. “Employee entrance is located on the north side of the compound. That is the side that faced away from us when we approached. But that will be no good, too many eyes. The security depot
          entrance is located on the western wall, towards the north corner. That is the wall right above this ridge.” He scrolled further down the white document. “There appears to be two guards on duty at this hour, and one security camera. The
          security depot leads directly onto the main factory floor. Lithium Radar lists this as our safest point of entry.” He scanned more of the illuminated diagrams present on the screen. “I’ve got the rest. Let’s go.” Dendro abruptly stood up.
          He grabbed the golden axe from its wall mount and clipped it to his belt.{"\n"}
          {"\n"}“Dude, wait up!” Jake said. “We aren’t about to attempt to break into a factory filled with two hundred and forty employees, are we?” He chased the soldier down the short hallway. “Where’d you go?”{"\n"}
          {"\n"}There was a sound of clacking footsteps on stairs, and soon after, Dendro appeared from a door adjacent to his sleeping quarters. He held out a dark fuzzy object. “Take this. Got it from the storage locker.”{"\n"}
          {"\n"}Jake caught the soft thing and unfolded it.  <Text style={{ fontFamily: "gelasibro-italic" }}>It’s a robe.</Text> He felt the fur-like material lining its insides. He tossed it over his shoulders and nestled into the alien threads.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Feels decent.</Text>
          {"\n"}
          {"\n"}“Solar Force’s finest,” Dendro said. “It’ll keep you warm out there.”{"\n"}
          {"\n"}“Out there? Out there? Why should I come? I thought this was a quick in and out?” Jake squeaked. “Why are we going outside? This can’t <Text style={{ fontFamily: "gelasibro-italic" }}>possibly</Text> be your plan?”{"\n"}
          {"\n"}Dendro positioned himself below the entry hatch on the roof, which opened up to the snowy night sky above them. A small ladder funneled downward.{"\n"}
          {"\n"}“I also said there might be some rough patches. I did not expect this many personnel inside of the facility at this time of night. I’m going to need your help,” Dendro said, impassively.{"\n"}
          {"\n"}“Isn’t it dangerous?”{"\n"}
          {"\n"}“If we follow Lithium Radar’s instructions, this should be a no-brainer operation. We get the suits, we hit the floor, we get the card, then we get the{" "}
          <GlossaryWord lookup_string="Radium" word="radium" toggleGlossary={this.props.toggleGlossary} />, and we’re out of here as quickly as we came. But I won’t lie to you. Anything can happen in{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>any</Text> operation. I need your help here, son. Then we can get you home, I promise,” Dendro said.{"\n"}
          {"\n"}Jake stood there. His heart was beating in his throat. <Text style={{ fontFamily: "gelasibro-italic" }}>What can I do?</Text> Where could he hide anyway if he said no?{"\n"}
          {"\n"}“Let’s roll,” Dendro said.{"\n"}
          {"\n"}Jake’s face made contact with the icy air as he climbed up the first few rungs of the ship ladder. <Text style={{ fontFamily: "gelasibro-italic" }}>That is seriously cold.</Text> A moment later, he stood on top of the ship, glancing
          across the snow covered contours of its metal exterior. Dendro was already on the ground standing beside the ship. The warrior peered upward, facing the tall, sloping ridge, apparently determining the best way to traverse it.{"\n"}
          {"\n"}Dendro helped Jake off the wing. They stood together glaring up the ridge face. “I see the way up. Follow my lead,” Dendro said sternly.{"\n"}
          {"\n"}There was a boulder at the foot of the ridge. Dendro put his foot on it. He then grabbed a large rock, which was partially buried into the ridge slightly above his head. He used his powerful legs to push himself upward. Jake watched
          as the creature ascended. He stepped, jumped, and hopped across differently shaped rocks buried into the mountain wall. He seemed to know what he was doing. Thirty seconds later, he had completed two thirds of the climb.{"\n"}
          {"\n"}The slope did not appear as intimidating when he stood directly in front of it. <Text style={{ fontFamily: "gelasibro-italic" }}>It is possible.</Text> Jake saw a relatively clear way up, based on Dendro’s reconnaissance.{"\n"}
          {"\n"}Jake put his hands against the freezing ridge wall. His plan was to copy Dendro’s every move. He began his way up by placing his right foot on the first boulder Dendro had propelled off, then he moved upward, tracking Dendro's
          footprints. He deliberately pawed the texture of every rock as he gripped them. He grabbed each rock cautiously, making sure his feet were properly positioned before reaching up to one higher up.{"\n"}
          {"\n"}The icy wind came in bursts, burning his face, but it was not intense enough to impact his ability to climb.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>It’s a heck of a lot colder out here than in Wisconsin. And what is this guy’s game plan once we’re up there?</Text> Jake looked down. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          He had climbed at least twenty feet. He suppressed the simmering fear that he might slip and roll down the rocky face. <Text style={{ fontFamily: "gelasibro-italic" }}>I got...this.</Text> He spat a few icicles off of his tongue and pushed
          forward. Over the course of about a minute, he had ascended most of the sloped ridge. He saw Dendro standing on the level above, peering down at him. “You got it, kid. Last five feet.”{"\n"}
          {"\n"}Jake propelled himself up the last segment of the climb, making sure not to bang his knees or shoulders on any sharp edges. He ignored Dendro’s outstretched hand and pulled himself up onto the flat ground.{"\n"}
          {"\n"}A cutting horizontal wind brought cold oxygen into their lungs. There were no souls visible anywhere. The paved road was quiet. <Text style={{ fontFamily: "gelasibro-italic" }}>Where are the guards? Where are the people?</Text>
          {"\n"}
          {"\n"}Dendro put his arm down and kicked the snow off his boots.  “So, this mission officially begins. Keep your voice down. There could be decibel detection closer to the perimeter. Try and stay low.” Dendro pointed in the direction of the
          side wall of the factory. “The security depot entrance is up here.” Dendro began to tread forward. “Stay on my six. When we get to the aluminum fence, get on your stomach and stay behind it. I will deal with the personnel.” Dendro’s slow
          walk morphed into a crouching jog.{"\n"}
          {"\n"}Jake attempted to keep up with Dendro, but the alien soldier was moving much too fast. A few moments later his heart plunged when he lost sight of the warrior.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Did he go around that dark arrangement up ahead? Is that the fence?</Text> He ran a bit further. The arrangement became easier to see.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Yes, this is a fence</Text>. He saw the outline of a figure a few seconds later. Dendro appeared to have popped out from the back of the far side of the gated area. He was waving his arms up
          and down, signaling to Jake to lie flat down in the snow.{"\n"}
          {"\n"}Jake dropped cautiously to the ground and crawled forward. He was low enough now to see beneath the fabric that covered the fence. About thirty feet away, by the factory wall, there were two rifle-toting figures in full white hazmat
          suits guarding a door. <Text style={{ fontFamily: "gelasibro-italic" }}>Oh, jeez.</Text> A security camera oscillated back and forth above the doorway. Jake’s throat tightened, to the point it was hard to swallow.{"\n"}
          {"\n"}As he rested his chin against the snow, he caught sight of Dendro’s boots through the adjacent side of the fenced-in perimeter. <Text style={{ fontFamily: "gelasibro-italic" }}>What is his plan?</Text> After a few moments, Jake
          couldn’t help but pull himself a few inches left to peer around the corner. Dendro was on his knees in the snow, and his hands were cupped near his face, as if he were praying.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What is with this dude?</Text>
          {"\n"}
          {"\n"}Then Dendro leaned back, crouched his legs even further, and blasted upward. The creature’s dark figure flipped gracefully over the metal barricade and landed clean footed ten feet in front of the two guards. They immediately hopped
          backward in surprise, beginning to raise their weapons, but Dendro was too swift. He darted forward in silence, his arm gracefully scooping the golden axe from his leather belt, spun it upward, and punched forward with the blunt face of the
          weapon, colliding it with the first guard’s forehead before the man had time to bring his gun upward. The guard felt face forward in the snow, immobile. <Text style={{ fontFamily: "gelasibro-italic" }}>Whoa.</Text>
          {"\n"}
          {"\n"}The second guard backed up, nearly getting his weapon into firing position, but Dendro was too nimble of an opponent. Dendro sidestepped him, skidding to the man’s right, leaving a trail in the snow as the mighty golden axe wrapped
          through the air, belting the guard squarely in the chest with a heavy <Text style={{ fontFamily: "gelasibro-italic" }}>thump</Text>. The guard barreled over, and the rifle fell to the ground.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That’s got to hurt.</Text> As the camera oscillated back towards them, Dendro jumped up and sliced it off the wall. It fell silently into the snow.{"\n"}
          {"\n"}Then Jake heard a high-pitched whistle.{"\n"}
          {"\n"}When Jake walked through the front gate, Dendro was on his knees attempting to pull the hazmat suit off one of the guards. “Pull the other one off, kid!” Dendro said.{"\n"}
          {"\n"}“How? It’s on him! Is he dead?” Jake asked, tremulously.{"\n"}
          {"\n"}“No, son; they are unconscious. The mighty axe has that effect. They will be fine. We avoid fatalities at all costs. Do not rip the suit. Zip it down the front, then pull from below,” Dendro said.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Oh man. This is not what I signed up for.</Text> Jake dropped to his knees and dragged the unconscious guard towards him. Dendro had already gotten the hazmat suit off the body and was now
          struggling to put it on. <Text style={{ fontFamily: "gelasibro-italic" }}>This is so creepy</Text>. He unzipped the suit’s face covering, then pulled it down below the man’s torso. The guard’s eyes were closed. A minute later, he had pulled
          the rest of the suit off the guard’s legs and feet. He could see the man was dressed in a standard security uniform underneath.{"\n"}
          {"\n"}“Ugh, this is tight.” Dendro said, scratching his back. His shoulder and bicep muscles bulged through the white outfit. His yellow eyes were still visible through the visor. Small indents bulged from the headpiece.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>His ears.</Text>
          {"\n"}
          {"\n"}Jake stood up and hopped into the suit. He pulled it up over his knees, then his chest, and then flopped over the head piece and zipped it shut. He wriggled around in it for a moment. The hazmat suit was loose, but usable. However, it
          smelled like sweat and was still warm from the guard’s body heat. <Text style={{ fontFamily: "gelasibro-italic" }}>Nasty.</Text> His robe fit awkwardly into the leg section, causing the mid-section to bulge, and his underside to feel
          moderately uncomfortable.{"\n"}
          {"\n"}Dendro pulled open the heavy metal door and signaled Jake to follow him inside.{"\n"}
          {"\n"}There was nothing remarkable about the security room when they entered. A few monitors stood stacked on top of each other streaming different views of the facility. One of them emitted static.{"\n"}
          {"\n"}The door in front of them was slightly ajar, and it let in a soft yellow light. They took turns sliding up adjacent to the door, peeping through the crevice. Hundreds of people in white hazmat suits buzzed around a tremendous factory
          floor and there were assembly lines going off in different directions.{"\n"}
          {"\n"}“How do we get through there!? Jake asked in a loud whisper as he pulled his head back towards the room.{"\n"}
          {"\n"}Dendro rolled up his sleeve. “Lithium Radar, please bring up documentation on facility layout. Wish to confirm previous insights.”{"\n"}
          {"\n"}The screen beeped a few seconds later. “Confirmed. The Radium containers are inside the Command Room vault. The room is hard wired. This will require a manual override.”{"\n"}
          {"\n"}“What does that mean?” Jake asked.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Shrrvooooooot.</Text>
          {"\n"}
          {"\n"}The backside of Dendro’s Hazmat suit tore open. <Text style={{ fontFamily: "gelasibro-italic" }}>Oh, crap.</Text> Jake could see the tension in Dendro’s face through the mask.{"\n"}
          {"\n"}“Tell me this thing didn’t just rip!” Dendro spun around. “How bad is it?”{"\n"}
          {"\n"}Dendro’s hazmat suit had ripped apart completely, at the seam. His entire back side was exposed, along with his golden axe, which had been tucked tightly against his side, was now visible from the hip up.{"\n"}
          {"\n"}“Bad,” Jake responded.{"\n"}
          {"\n"}Dendro shook his head in frustration. “I cannot go in there like this. My disguise is blown. They will see the axe. I need another way in.” Dendro examined the ceiling. “I will use the ducts. Too dangerous for you – they could break,
          and you could not bear the fall. You will have to walk the floor alone.”{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>. . .<Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          </Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How can I possibly pull this off?</Text> Jake’s hands shook.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The floor manager? The key? The computer? What if they recognize me somehow?</Text> Dendro told him not to think about it, to focus on the mission. The sooner they got this over with, the
          sooner he’d be home.{"\n"}
          {"\n"}Jake crouched against the wall. The orb Dendro had given him pushed against his chest slightly. Should he blame himself for being here? Should he roll over and cower? From a corner of his mind, came the same thought he had on the
          ship: he had to step up and play a positive role in his own survival.{"\n"}
          {"\n"}He took a deep breath and peered through the crack. The floor buzzed with hazmat-toting employees, but no one appeared to be looking anywhere near the vicinity of the security room door.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Let’s do this.</Text>
          {"\n"}
          {"\n"}He slid through the crack and stepped onto the bustling factory level. There were conveyor belts moving in all directions. He could see yellow forklifts maneuvering off in the distance.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I need to find the floor manager.</Text> A group of factory workers passed him, but there were no signs of concern, no looks of surprise.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They are immersed in their own business, calm down. I look like them.</Text> He passed a few machines, keeping his eye out for anyone that might resemble a floor manager.{"\n"}
          {"\n"}Then he stubbed his foot hard against the floor. He tripped awkwardly, and almost lost his balance. A factory worker on an assembly line glanced at him, then went back to his business.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>You idiot. Calm down.</Text>
          {"\n"}
          {"\n"}“Hey you! 8-4-8!” someone shouted from a distance.{"\n"}
          {"\n"}Adrenaline shot through him. Was Murphy’s Law kicking in? He looked at the number printed on his suit. 848. <Text style={{ fontFamily: "gelasibro-italic" }}>I’m absolutely screwed.</Text>
          {"\n"}
          {"\n"}“8-4-8 get on Line 2! We need an extra body!”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They want me? Me?</Text> He stared at the imprinted numbers. <Text style={{ fontFamily: "gelasibro-italic" }}>I cannot freaking believe this.</Text>
          {"\n"}
          {"\n"}He spotted Line 2 two rows ahead—a number two printed in yellow on the bottom of the assembly line conveyor belt. Hesitantly, he walked forward. A few of the workers on the line looked up at him when he approached. Bile bubbled up his
          throat. He almost tripped again.{"\n"}
          {"\n"}“Hi,” Jake said timidly. Awkwardness surged through him. His heart rate accelerated.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Dude, they don’t know I’m an imposter. They don’t know. Relax. I can do this. Just mimic what they’re doing.</Text>
          {"\n"}
          {"\n"}The worker on the far side of the belt nodded. There was a bucket with robotic wheels across from the man.{"\n"}
          {"\n"}Jake’s heart pounded as he walked up to the container filled <Text style={{ fontFamily: "gelasibro-italic" }}></Text>with some translucent rectangular casings. The other workers pulled rubber wheels from the buckets and snapped them
          into sockets on the sides of each case. He examined the workers’ movements. Wheel out, case up, snap in, tighten. <Text style={{ fontFamily: "gelasibro-italic" }}>Not impossible</Text>.{"\n"}
          {"\n"}He took the first wheel out and grabbed an open case from the line. He snapped in the six wheels in succession and put the contraption back down on the line. On the second try, the wheel didn’t click in as easily as he thought it
          would. It sprung outward from his hands, bounced onto the belt, then rolled onto the factory floor. A few of the workers looked at him. Someone scooped it up from the floor.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Strike two.</Text>
          {"\n"}
          {"\n"}About fifteen chassis assemblies later, there was a ruckus coming from some distance across the factory floor. Past a few assembly lines on his left, Jake caught sight of someone who appeared to be berating a group of factory workers.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That dude.</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>He’s got the silver key card! That must be floor manager! How can I get it?</Text>
          {"\n"}
          {"\n"}Jake snapped <Text style={{ fontFamily: "gelasibro-italic" }}></Text>another wheel into a plastic casing. <Text style={{ fontFamily: "gelasibro-italic" }}>He’s distracted. Now is the best chance.</Text> He stood on his tippy toes
          again. He looked upward at the ventilation ducts. <Text style={{ fontFamily: "gelasibro-italic" }}>Dendro could be up there.</Text> He peered at the far back corner of the main floor. There was a gray gate with yellow stripes.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That must be the Command Room.</Text> No one was within fifty feet of it.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I gotta move.</Text> He stepped off the line and entered the central factory floor passageway. A few salty sweat beads dropped down his face. He picked up his pace. He was nearly running.
          Then it became a full-on sprint. <Text style={{ fontFamily: "gelasibro-italic" }}>What am I doing?</Text> Linebacker. L stick forward, R2 down. He bobbed and weaved at full speed through the groups of workers, until the target group
          appeared again.{"\n"}
          {"\n"}“Jay had us on Line 6! Are you kidding me!  I’m supposed to clock out at 8! I got a family to feed!” one of the workers yelled.{"\n"}
          {"\n"}Jake collided into him.{"\n"}
          {"\n"}The man’s ribs took most of the impact. The man tumbled over into the man beside him. They both moaned loudly before hitting the ground. Jake fell with them and, operating off the crude choreography he had imagined a few moments
          before, he pushed off the floor and fell backward onto the admin’s knees.{"\n"}
          {"\n"}“Awwhhrrrr! Dang, man!” the short, pudgy man hollered. He tumbled over backwards as Jake rolled into him.{"\n"}
          {"\n"}“Get off me! What the heck are you doing!”{"\n"}
          {"\n"}Laying on his back, in the midst of the temporary chaos, with the moans of aching backs discharging through the air, Jake saw the silver key card on the admin’s belt. The man was now flipped on his side trying to get up. Jake took his
          chance. He extended his arm, gripped the nearer edge of the card with his outstretched fingers, and pulled it clean off the floor admin’s belt. <Text style={{ fontFamily: "gelasibro-italic" }}>It worked.</Text>
          {"\n"}
          {"\n"}He pushed himself up and backpedaled away from the scene. A group of concerned employees ran over to them.{"\n"}
          {"\n"}“8-4-8, you idiot!” the floor manager shouted at him as the man stood up.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>“</Text>I’m sorry, sir. I’m sorry,” Jake said.{"\n"}
          {"\n"}Jake maneuvered around the crowds of workers and a few feet later he entered an all-out sprint once again when hit the large aisle that led to the Command Room gate.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>So many darn workers</Text>! He collided hard into one accidentally as he turned right. “My bad!” he shouted.{"\n"}
          {"\n"}“Grab him! My key! It’s gone! Stop that man. Ahead. Main aisle. 8-4-8!” he heard the admin yell just as Jake caught sight of the gate.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Oh, crap.</Text>
          {"\n"}
          {"\n"}Jake’s mind raced as his legs churned.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Zig zag. Too much adrenaline. Juke left! Cut right! Assembly Line seven. Gotta pick up the pace! Hundred meter dash. They are closing in on me!</Text>
          {"\n"}
          {"\n"}His factory worker assailants were some fifty feet behind him. Workers on the aisles to his right looked at him but had no idea what was happening.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Where is the key card reader?</Text> He scanned the command room entrance from afar. He had no time for mistakes. He had to swab the key at the correct spot. There was a panel on the left,
          but it appeared to be a fire alarm. Then Jake saw an aluminum box with a smaller protruding black case positioned on the wall. <Text style={{ fontFamily: "gelasibro-italic" }}>That could be it.</Text> His lungs burned as he sprinted the
          remaining thirty feet.{"\n"}
          {"\n"}“Stop that guy!” someone else shouted.{"\n"}
          {"\n"}He held out the key and placed it in front of the blinking black case. <Text style={{ fontFamily: "gelasibro-italic" }}>C'mon, please open.</Text> He heard two high pitched beeps and then the striped metal gate ascended. Jake darted
          underneath the entrance as the gate continued to slide up. His pursuers were only twenty feet behind him. As he entered, he immediately spotted the red emergency button on the wall that Dendro had mentioned.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That’s it. He said I couldn’t miss it.</Text>  Jake sprinted to it, tapped it hard, and prayed. The gate slid down forcefully, and an alarm began to ring.{"\n"}
          {"\n"}“TEN MINUTE EMERGENCY LOCKDOWN INITIATED,” a computerized voice blasted from somewhere inside the room.{"\n"}
          {"\n"}He pressed his back against the wall. <Text style={{ fontFamily: "gelasibro-italic" }}>This is madness</Text>. He spent a second catching his breath, then he looked around. Giant sets of monitors with video feeds hung on each of the
          concrete walls. Weird looking purple spheres sat on a few of the desks. In the back, there was a room that was gated shut with a metal door.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That must be the Radium vault. Is Dendro inside yet? He said the only accessible duct led directly into the Radium vault.</Text> He turned to the concrete ramp in the back left of the room.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That’s how we get out of here.</Text> In the dead center of the room was a desktop computer connected to a variety of monitors. He looked at the office chair, and then he looked at the small
          man sitting inside of it. They stared at each other for a few brief moments.{"\n"}
          {"\n"}“I…uh…” Jake blurted out.{"\n"}
          {"\n"}“Who the heck are you? How did you get in here?” the man said indignantly. He wore a hazmat suit without the headgear.{"\n"}
          {"\n"}“I don’t...don’t know. I’m sorry. We snuck inside.” The alarm continued to pulsate inside Jake’s ears. “But I need to get on that computer.” Jake stammered, hoping his voice carried.{"\n"}
          {"\n"}“You can’t be in <Text style={{ fontFamily: "gelasibro-italic" }}>here</Text>! They’ll have my head! Why did you hit the emergency shut down? Are you drunk!? Who are you?” the man shouted.{"\n"}
          {"\n"}“I…I have to get the Radium. I need to help...my friend. We are not here to hurt anyone, I swear! My friend—he needs to get home. My family. Please.” A nervous heat wave rolled through Jake. His hands continued to shake.{"\n"}
          {"\n"}Someone banged hard on the command room gate.{"\n"}
          {"\n"}“INTRUDER. YOU HAVE NOWHERE TO RUN! WE HAVE YOU LOCKED IN. LAY DOWN YOUR WEAPONS AND GET DOWN ON THE GROUND!”{"\n"}
          {"\n"}Jake’s throat and chest tighten. He probably should have worn a diaper on this mission.{"\n"}
          {"\n"}“8-4-8 IS AN INTRUDER. INCAPACITATE HIM. I REPEAT, INCAPACITATE 8-4-8. WHATEVER YOU DO, DO NOT LET HIM ACCESS THAT COMPUTER!”{"\n"}
          {"\n"}The portly man stood up. His eyes glowered. “<Text style={{ fontFamily: "gelasibro-italic" }}>Get on the ground!</Text>”<Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}Jake backed up a few inches. “I mean you no trouble, sir! I just need to get on that computer for one minute. We just need the Radium. The Radium only! I need nothing else. It’s not what you think!” He tried to sound as genuine as was
          humanly possible, to no avail.{"\n"}
          {"\n"}The man’s mug contorted, a bizarre facial expression shining through his eyes. He ducked down to the side of his desk and came up holding a large fire extinguisher above his head as if it were something he could throw or swing.{"\n"}
          {"\n"}“Dude, chill out!” Jake shouted. He had no idea what to do next. <Text style={{ fontFamily: "gelasibro-italic" }}>Where is Dendro?! He’s supposed to be in the vault! But I have to unlock the door!</Text>
          {"\n"}
          {"\n"}“Get down on the ground,” the man yelled. “Or I will be forced to immobilize your person!”{"\n"}
          {"\n"}Jake scanned the room again. There were no objects readily available to use for defense.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How can any of this be real? I’m gonna get knocked out by a thirty-pound fire extinguisher!</Text> Then he remembered the ground spinners in his pocket.{"\n"}
          {"\n"}Jake unzippered the hazmat suit and took a ground spinner out of his jean pocket. He flipped it around in his hand a few times. He chomped hard with his teeth on the fuse.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Here goes nothing.</Text> His teeth pulled. The fuse ignited, sparks flying all over.{"\n"}
          {"\n"}He looked at his startled target. <Text style={{ fontFamily: "gelasibro-italic" }}>I can’t miss this one.</Text> He cocked back the sparkling firework in his arm.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Always follow through, and keep your feet planted,</Text> his dad used to tell him. He stepped forward and launched it. He watched it sail through the air. The man’s eyes widened as far as
          wide could possibly go. He tried to duck, but the ground spinner hit him solidly in between his neck and shoulder.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>“Owwww!” the man hollered.{"\n"}
          {"\n"}At first it appeared to be a benign hit. But an instant later, he watched a few sparks take hold on the man’s ruffled white hazmat suit. Tiny embers turned into small orange flames.{"\n"}
          {"\n"}The man dropped the fire extinguisher and began patting his neck and shoulders wildly.  “HELP ME! SOMEONE, PLEASE, HELP ME! I’M ON FIRE!” He rolled onto the ground.{"\n"}
          {"\n"}There was more aggressive banging on the door and sounds of men shouting, “YOU HAVE NO WAY OUT!”{"\n"}
          {"\n"}Jake looked at the guy he had just set on fire. <Text style={{ fontFamily: "gelasibro-italic" }}>Oh, crap. What have I done?</Text>
          {"\n"}
          {"\n"}He picked up the extinguisher and hustled to the man. He ripped out the pin and squeezed down on the throttle. A few seconds later, the flames were out.{"\n"}
          {"\n"}He stood over the crying man, holding the extinguisher steady in his hands.{"\n"}
          {"\n"}“Please. Do not hurt me. I am just doing my job. Take what you want,” the man sobbed.{"\n"}
          {"\n"}But Jake had no more time. He had never really hurt anyone before, not even for self-defense. But he had to get on the computer. He couldn’t trust this strange man, even <Text style={{ fontFamily: "gelasibro-italic" }}>if</Text> he
          was on the ground. This was his only way home.{"\n"}
          {"\n"}Jake rotated his hips, swinging the extinguisher forward. The bottom of it butted into the man’s forehead, and the man collapsed back down on the ground. He looked at the unconscious body for a moment.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I can’t believe I just did that.</Text>
          {"\n"}
          {"\n"}He heard a banging from the vault behind him.{"\n"}
          {"\n"}He hustled over. “Dendro?”{"\n"}
          {"\n"}He heard two knocks.{"\n"}
          {"\n"}“I can’t hear you! Can you hear me?” Jake shouted.{"\n"}
          {"\n"}He heard two knocks again.{"\n"}
          {"\n"}“I’m going to try to implement the key card permissions change as you said!” Jake yelled.{"\n"}
          {"\n"}He ran back to the command chair. It was still warm when he sat down in it. There was a black keyboard, a wired mouse, and a massive monitor sitting in front of him. The screen had a picture of an exotic beach as its background image.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Guess this guy was dreaming of getting out of here</Text>. He looked back down at the unconscious body with regret, but he had no choice but to move on and focus on how he could survive this
          ordeal. He fiddled his fingers as he peered across the bottom of the screen. <Text style={{ fontFamily: "gelasibro-italic" }}>Where is the icon? Where is the icon?</Text>
          {"\n"}
          {"\n"}He hunted for the <Text style={{ fontFamily: "gelasibro-italic" }}>Code Studio</Text> icon. <Text style={{ fontFamily: "gelasibro-italic" }}>Dendro said two gray curly brackets inside a white bubble</Text>.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Where the heck is it!</Text> He moved the mouse across the icon bar. Then he hit the last icon in the dock. <Text style={{ fontFamily: "gelasibro-italic" }}>That’s it</Text>! He clicked.
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Phew!</Text>
          {"\n"}
          {"\n"}A program, whose window was colored in by a dark green maximized across the screen. A few icons were stacked vertically along the left margin. On the top were tabs...thirty or more. On the bottom was an isolated window labeled
          TERMINAL.{"\n"}
          {"\n"}He clicked on the first tab, which was named <Text style={{ fontFamily: "gelasibro-italic" }}>factory_ventilation_config.py</Text>. The tab loaded, and a screen containing endless lines of code displayed in front of him. Jake scrolled
          through it. This file didn’t seem to end. <Text style={{ fontFamily: "gelasibro-italic" }}>I’ll never find it in here</Text>, he thought. He opened the next two tabs,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>factory_materials.py</Text> and <Text style={{ fontFamily: "gelasibro-italic" }}>personnel_wrapper.py</Text>. He scrolled through them. Same thing. Too much information. Too little time.
          {"\n"}
          {"\n"}The command room gate smashed again. They were trying to get inside.{"\n"}
          {"\n"}“LIEUTENANT RIVIERA IS ONE MINUTE OUT. YOU HAVE NO PLACE TO HIDE.”{"\n"}
          {"\n"}Jake looked at the file tabs again and exhaled. <Text style={{ fontFamily: "gelasibro-italic" }}>I’m looking for anything to do with key permissions</Text>. He clicked through more of the tabs. Same endless files of text, code, and
          mysterious symbols. <Text style={{ fontFamily: "gelasibro-italic" }}>How can I possibly find anything intelligible?</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            Wait. Dendro mentioned a search. <GlossaryWord lookup_string="Controlf" word="Control-F" toggleGlossary={this.props.toggleGlossary} />.
          </Text>{" "}
          He quickly hit <Text style={{ fontFamily: "gelasibro-italic" }}>control-f</Text> on the giant black keyboard. A search modal popped up. He typed in ‘key fob permissions.’ To his surprise, something popped up. It appeared to be a link to a
          file where this phrase had been found in the codebase. He clicked it.{"\n"}
          {"\n"}A new tab popped up,
          <Text style={{ fontFamily: "gelasibro-italic" }}> factory_key_permissions_config.py. </Text>
          The text <GlossaryWord lookup_string="Texteditor" word="editor" toggleGlossary={this.props.toggleGlossary} /> automatically scrolled halfway down the file. There were swaths of code above and below, but in the dead center of the screen he
          saw:
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson2_1.png")} />
        </View>
        {/* <Caption>(View of code file)</Caption> */}

        {
          // Section 2 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          He put his left hand on his chin and began to itch his face nervously. <Text style={{ fontFamily: "gelasibro-italic" }}>Is this what I’m looking for?</Text>
          {"\n"}
          {"\n"}“RIVIERA IS PULLING UP TO THE FACILITY. LAY DOWN YOUR WEAPONS.”{"\n"}
          {"\n"}For a moment, Jake thought this might be a way to dupe him into surrendering, but out of the corner of his eye he saw something moving on one of the monitors on the front wall. It was a surveillance camera feed. CAMERA 8 - SEPTON RD
          sat in the bottom right corner of the display. A caravan of white Humvees were driving single file past a few structures he didn't recognize. It didn’t appear to be the main factory, but it must have been somewhere down the road leading up
          to the cargo bay.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They really are coming. How long is that road? Would they shoot me? Kill me? Arrest me?</Text>
          {"\n"}
          {"\n"}He focused on the two-color coded lines of code.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            Dendro said I only get one chance at this; the permissions can only be updated once every twelve hours. Control-F took me here. Vault access and cargo access look like the permissions we need. What else could it be? These have to be
            variables storing information about the permissions. No additional files popped up. I have to go for it.
          </Text>{" "}
          He looked up at the video feed. <Text style={{ fontFamily: "gelasibro-italic" }}>There is no time.</Text>
          {"\n"}
          {"\n"}He put the pointer next to the first <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson2_2.png")} />
        </View>

        {
          // Section 3 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            This is a Python <GlossaryWord lookup_string="Variable" word="variable" toggleGlossary={this.props.toggleGlossary} /> called
          </Text>{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>floor_manager_vault_access</Text>. <Text style={{ fontFamily: "gelasibro-italic" }}>Somewhere in memory this variable is set to</Text>{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>. <Text style={{ fontFamily: "gelasibro-italic" }}>This has to mean that the floor manager does not have access to open the vault! If I set this to</Text>{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>, <Text style={{ fontFamily: "gelasibro-italic" }}>hopefully that will allow this card to open the gate</Text>. He quickly flipped the value.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson2_3.png")} />
        </View>

        {
          // Section 4 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          <Text style={{ fontFamily: "gelasibro-italic" }}>And here the second variable</Text>, <Text style={{ color: "#0C2443", fontFamily: "code" }}>floor_manager_cargo_access</Text>,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>is set to</Text> <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This must indicate the floor manager's key card cannot open the cargo bay door</Text>. He set this variable to <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>. The screen
          now read:
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson2_4.png")} />
        </View>

        {
          // Section 5 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          <Text style={{ fontFamily: "gelasibro-italic" }}>Could this be all that is needed?</Text> He hit <Text style={{ fontFamily: "gelasibro-italic" }}>command-S</Text> to save the file. A few alerts went off in the program, but they did not look
          bad.{"\n"}
          {"\n"}Knock. Knock. Knock. Knock. It came from the Radium vault. Dendro needed him now. He saw the <Text style={{ fontFamily: "gelasibro-italic" }}>UPDATE SERVER</Text> button on the top right of the screen.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Here goes nothing.</Text> He clicked it.{"\n"}
          {"\n"}A message appeared a few seconds later in a rich magenta text:{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ textAlign: "center" }}>SERVER UPDATE SUCCESSFUL.</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Ahh</Text>. He ripped his arm out of his hazmat suit and rolled up the sleeve of his hoodie. He felt an intense burning sensation near his wrist.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the–?</Text> A black mark appeared to have branded itself into his skin<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> He brushed it with his fingers, there was no blood, or
          ink, just the etching of a weird looking character, similar to an <Text style={{ fontFamily: "gelasibro-italic" }}>A</Text>, but it was curved and tilted. <Text style={{ fontFamily: "gelasibro-italic" }}>Is this a freaking tattoo?</Text>{" "}
          The silver orb felt warm.{"\n"}
          {"\n"}He heard Dendro knocking again. He put his arm back into his suit and shot up, running to the vault’s receiver as he held out the key. A yellow light flashed for a moment until it went solid, then the vault’s heavy metal gate rose
          into the ceiling. <Text style={{ fontFamily: "gelasibro-italic" }}>It actually worked?</Text>
          {"\n"}
          {"\n"}Inside, stacks of metal crates sat up against the walls of what looked to be an oversized refrigerator. Dendro walked out of the front holding a crate against his chest. Jake noticed an LCD screen on the lid and a radiation hazard
          symbol on one of its sides. “Nice work with the computer, kid. It’s time for us to leave this place. Buzz open the cargo bay door!” Dendro commanded.{"\n"}
          {"\n"}Jake sprinted with him across the command room, descending the cargo bay ramp a few moments later. He held the key card up to the receiver on the wall. The garage door let out a high pitched creak, then began opening.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Ten minutes have passed,</Text> Jake thought. <Text style={{ fontFamily: "gelasibro-italic" }}>The gate to the factory floor will open any instant.</Text>
          {"\n"}
          {"\n"}They waited a moment for the garage door to rise far enough for them to duck under. <Text style={{ fontFamily: "gelasibro-italic" }}>Faster, please.</Text> When they rolled under the garage-door opening, Jake's vision was immediately
          immersed by shifting yellow lights and snowfall. He could hear the revving of car engines and skidding tires—five white trucks were speeding towards them.{"\n"}
          {"\n"}“Follow me!” Dendro instructed as he veered right, off the mountain road, heading straight for the top of the ridge.{"\n"}
          {"\n"}“IMMEDIATE TAKE OFF REQUIRED. No runway available!” Dendro shouted into his <GlossaryWord lookup_string="Lithiumradar" word="Lithium Radar" toggleGlossary={this.props.toggleGlossary} />.{"\n"}
          {"\n"}Jake’s feet catapulted through the snow as he followed Dendro. <Text style={{ fontFamily: "gelasibro-italic" }}>So freaking hard to run in this suit!</Text> He couldn’t help but turn his head around to see what was coming for them.
          Five white hummers screeched to a stop in front of the cargo entrance where they had been seconds before. The car doors opened, and multiple men popped out. They held long rifles in their hands, and they were pointed in Jake’s direction.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This is not what I signed up for.</Text> Red lasers danced across the powder to his left and right. <Text style={{ fontFamily: "gelasibro-italic" }}>Is this where I die?</Text>
          {"\n"}
          {"\n"}“STOP OR WE WILL SHOOT!” a voice shouted over a megaphone.{"\n"}
          {"\n"}White puffs of snow exploded on Jake’s left. <Text style={{ fontFamily: "gelasibro-italic" }}>What the...? Oh, no.</Text> “They are shooting at us!” Jake yelled. But his words were slurred—his mind began to enter a state of shock.
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Keep running. Keep running.</Text>
          {"\n"}
          {"\n"}“WE WILL IMMOBILIZE YOU!” the megaphone blasted again.{"\n"}
          {"\n"}More snow exploded to his right.{"\n"}
          {"\n"}“Keep running, kid!” Dendro shouted. “Slide down behind me!” He dropped on his rear and pushed himself over the top of the ridge. He flew down effortlessly, dodging sharp rocks. When he was halfway down the slope, he kicked upward,
          shot into the air, and flipped forward in a high arc, landing cleanly in front of the ship.{"\n"}
          {"\n"}Jake’s eyes had followed the soldier as he flew through the air. <Text style={{ fontFamily: "gelasibro-italic" }}>Holy moly,</Text> he had thought. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>But his body was temporarily
          frozen.{"\n"}
          {"\n"}Dendro shouted from below, “Slide down the side right there. Watch out for the two sharp ones. Like a sled. Get on your butt, now!”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I’m not getting out of here, am I?</Text> The rifle toting men were only a hundred feet behind him, and the laser beams were still dancing in the snow besides his shoes. He willed his body to
          move. He stepped forward, dropped to his bottom, and wiggled over the edge. As he accelerated down the slope, his body was pulled in a variety of uncomfortable directions. He hit a patch of unobstructed snow and zipped along even faster,
          nearly clipping a jagged-toothed rock.{"\n"}
          {"\n"}Bump. Bump. Bump. Bump. Bump. His body rotated uncontrollably as he flew downward. Somewhere during the fall, his right hip banged into a sharp boulder. <Text style={{ fontFamily: "gelasibro-italic" }}>Ouch</Text>. Pain shot through
          him. He was going really fast. Thirty feet. <Text style={{ fontFamily: "gelasibro-italic" }}>Don’t hit that one!</Text> Then twenty feet. <Text style={{ fontFamily: "gelasibro-italic" }}>Spin!</Text> The back of his head banged against the
          snow hard. Ten feet. Then his butt hit a larger bump, and he jettisoned a few feet into the air. An instant later, he crashed into the bottom of the slope, tumbling the last five feet onto the flat ground, barely missing a patch of sharp
          rocks to his left. Dendro lifted him up.{"\n"}
          {"\n"}“I’m gonna toss you up on the wing!” Dendro yelled. He put the crate down and raised Jake’s body upward on top of the ship. Then <Text style={{ fontFamily: "gelasibro-italic" }}></Text>he grabbed the crate and pulled his own body up.
          {"\n"}
          {"\n"}Jake stood up on the snow-covered wing, gazing blankly at the ominous blue jet stream coming from the ship’s engines which were now liquifying the snowbank behind them.{"\n"}
          {"\n"}Dendro Darted past him towards the ship ladder.  “C'mon kid, snap out of it!” he shouted.{"\n"}
          {"\n"}“STOP RIGHT THERE. WE WILL SHOOT TO KILL,” the megaphone-voice shouted from above the ridge.{"\n"}
          {"\n"}Jake saw light blue sparks ricocheting off the wing.{"\n"}
          {"\n"}The hatch automatically opened. “GET IN!” Dendro yelled. Jake was motionless for a few moments, but some force within him pushed him forward. He hit the floor of the ship and followed Dendro into the cockpit.{"\n"}
          {"\n"}“Strap in, son!” Dendro hollered.{"\n"}
          {"\n"}Jake languidly approached his seat. Dendro looked at him as he lethargically buckled himself in.{"\n"}
          {"\n"}“We’ll be alright, kid,” he said. “Stay with me.”{"\n"}
          {"\n"}A shower of bullets ricocheted off the ship’s exterior.{"\n"}
          {"\n"}Dendro flicked a metal switch on the dashboard and pulled down on the throttle. Jake heard the vertical fan engines rev to life and a few seconds later they were lifting off the ground. The bullets began to hit the underside of the
          ship, but Jake continued to stare blankly. When they were about fifty feet above the ground, Dendro shifted the Sentauri Beacon a few degrees to the left, the nose of the ship turning away from their assailants. The leftmost radar screen
          displayed a thermographic read out of the bodies on top of the ridge and indicated five human heat signatures were aiming their gun barrels at the ship.{"\n"}
          {"\n"}“Hold on tight, kid,” Dendro said. He spun a dial on the joystick. The fan engines simmered down, and the main engines zoomed to life. He pushed the throttle forward and the acceleration-induced G force ripped Jake back into his seat.
          They sped forward over the cliff.{"\n"}
          {"\n"}The acceleration helped Jake regain alertness, even though he felt as if an elephant was sitting on his chest. He grabbed his aching hip. Then the Sentauri Beacon’s nose aimed downward.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Woah.</Text>
          {"\n"}
          {"\n"}As the diving ship skimmed the face of the mountain, Jake looked at Dendro, holding on to his seat handles. <Text style={{ fontFamily: "gelasibro-italic" }}>Are we now going to crash after we just survived that debacle?</Text> Jake
          stared at the fast-approaching ground below, but a mere five hundred feet from the Earth, Dendro pulled backward on the throttle, which caused the ship to level off quickly then ascend. A few moments later the ship entered a nearly vertical
          climb, like a rocket propelling into space. <Text style={{ fontFamily: "gelasibro-italic" }}>Is this okay on my organs?</Text> When they leveled off in the cloud, Jake gasped, finally able to suck in oxygen.{"\n"}
          {"\n"}“Thought I lost you for a moment,” Dendro said.{"\n"}
          {"\n"}He rubbed his hip again before he stood up and pulled off the white hazmat suit. “What happened to me?”{"\n"}
          {"\n"}“You went into shock. It happens,” Dendro said.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Shock?</Text> The stream of previous events ran through his mind. “They could have killed us! I had to knock a man unconscious with a fire extinguisher!”{"\n"}
          {"\n"}“I apologize, son, but I’ve never been stranded on a planet before with no knowledge of my unit’s whereabouts, especially without a{" "}
          <GlossaryWord lookup_string="Communicationsreceiver" word="comms receiver" toggleGlossary={this.props.toggleGlossary} />. I never expected it to get this...hectic. But missions can go sideways, and we must adapt. With the
          survival-probabilities delivered to me by Lithium Radar, getting the Radium in this fashion was still the safest way to get both of us home. I know it sounds nutty, but you got caught up in a tragic mess when you stumbled upon this ship. I
          am sorry, I really am. I knew those men would not shoot to kill, only to intimidate us. I am doing everything in my power to keep you safe. Trust me, kid.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Great.</Text> Jake thought. “Won’t they be on high alert now? They saw us escape in a fighter ship!” Jake asked, pointedly.{"\n"}
          {"\n"}“We train specifically for these off-planet situations. The radar avoidance polymers embedded in this ship will prevent any Earth entity from spotting us through any radar or sensors. We were not in the field of view of any cameras
          either.  There will be no record of us anywhere, by any Earth built system. This will likely get logged officially as a robbery done by an organized crime organization. But it won’t go past that.”{"\n"}
          {"\n"}Jake said back into his seat. <Text style={{ fontFamily: "gelasibro-italic" }}>Great. So, I’m an organized criminal now.</Text>
          {"\n"}
          {"\n"}“We got what we needed, son. You did incredible work on that computer,” Dendro said. “You should be very proud of yourself. You have gained a thorough understanding of the fundamentals of variables in the eyes of the Utma.”{"\n"}
          {"\n"}Jake rolled up his sleeve, remembering the marking. “And this! My mom will kill me! Will this go away?”{"\n"}
          {"\n"}Dendro shook his head. “No. A marking by the Utma never fades. But the Utma has granted you your first <Text style={{ fontFamily: "gelasibro-italic" }}>benefit</Text>. That marking there is a symbol that represents an Utma-generated
          power, called <Text style={{ fontFamily: "gelasibro-italic" }}>Initma</Text>. It grants the power to calm ourselves down in battle.”{"\n"}
          {"\n"}Jake looked at Dendro with a quizzical look. “The power to calm ourselves down in battle?”{"\n"}
          {"\n"}“Yes. The power to use the energy around us to calm down our hearts and anxious minds,” Dendro said.{"\n"}
          {"\n"}“You’re telling me I have a superpower now? I don’t feel any different,” Jake said.{"\n"}
          {"\n"}“Our <GlossaryWord lookup_string="Utmabenefits" word="benefits" toggleGlossary={this.props.toggleGlossary} /> blossom within us over time. But there is no doubt the Utma has planted{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Initma</Text> inside of you.” Dendro flashed a grin as he examined the marking on Jake’s forearm.
          {"\n"}
          {"\n"}Jake sat down, overcome by a wave of emotions. <Text style={{ fontFamily: "gelasibro-italic" }}>Have I really been infused with this new superpower? No way.</Text> He did, however, understand code slightly better. He even felt a
          slight sense of pride when had a moment to recollect what he pulled off on the computer. It reminded him of a scene from <Text style={{ fontFamily: "gelasibro-italic" }}>Mission Impossible</Text>.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>He looked at the marking on his arm. He felt his hip aching.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What would those men have thought about seeing a stealth fighter rise from the snow? Well, at least we got the hardest part over with,</Text> he thought.
        </Text>
      </View>
    );
  }
}
