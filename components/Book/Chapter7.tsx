import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";
import GlossaryWord from "../Glossary/inline/GlossaryWord";

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

export default class Chapter7 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 7</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://previews.123rf.com/images/torky/torky1111/torky111100032/11133478-ski-lift-sketch.jpg`,
            }}
          />
        </View>

        {
          // Section 1 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          A high pitched cockpit alert woke Jake up some time later. He opened his eyes. It was still dark outside the cockpit panorama. <Text style={{ fontFamily: "gelasibro-italic" }}>Where is he taking us?</Text> He turned to look at Dendro. The
          Gobrahim warrior appeared to be lost in thought as steered the ship to an unknown destination.{"\n"}
          {"\n"}"Where are we going?" Jake asked emphatically.{"\n"}
          {"\n"}"Somewhere safe to fix the receiver. Lithium Radar has recommended a regrouping point three hundred miles to the southeast, in your state of Colorado. It appears to be an abandoned facility nestled far away from any populated areas,"
          Dendro said.{"\n"}
          {"\n"}"So we can fix the ship, and head home, both of us?" Jake asked.{"\n"}
          {"\n"}"That is the plan. As soon as I communicate back to base." Dendro responded.{"\n"}
          {"\n"}A jolt of hope ran through Jake's heart. <Text style={{ fontFamily: "gelasibro-italic" }}>This soon may be over</Text>. Being gone for less than a day would not be the end of the world, but he would have a lot of explaining to do. He
          imagined sitting down with Nassir and walking him through the events that had taken place. A Gobrahim warrior. The inklings of a war in a galaxy three million light years away. The Utma. Would anyone believe him? Did it matter? What would
          he say about the markings on his arm? Or would he make up a complete lie about it all?{"\n"}
          {"\n"}Dendro tightened his belt. "Commencing descent."{"\n"}
          {"\n"}Jake's stomach floated upward slightly as the ship dropped. About half a minute later, a new mountain range came into view.{"\n"}
          {"\n"}Dendro stuck out his finger and pointed through the cockpit window. "These Rocky Mountains are magnificent," he said. He scratched his chin gently. "Each planet has its own wonders."{"\n"}
          {"\n"}Jake glanced ahead. The rockies <Text style={{ fontFamily: "gelasibro-italic" }}>were a</Text> remarkable image— the vast expanse of snow capped goliaths seemed to have no end.{"\n"}
          {"\n"}Dendro's eyes scanned his yellow-green radar readout every few moments as he soared the ship over the jagged peaks. Jake caught sight of frozen lakes below them reflecting the bright moonlight.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That's intense.</Text> After passing over a large swath of mountain ranges, they approached a large valley. Dendro descended the ship again, and a minute later, they were skimming the snow
          covered surface of the valley<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> Jake's eyes opened wider to process the experience.{"\n"}
          {"\n"}"Gnarley, right?"Dendro grinned."I never let the piloting skills get rusty. Flying always brings peace to the mind." Dendro pushed further down on the throttle. As Jake was pushed back into his seat, he prayed no animals jumped out in
          front of the snow skimming ship.{"\n"}
          {"\n"}"Lithium Radar tells me the abandoned compound is just beyond the twin peaks up ahead," Dendro said.{"\n"}
          {"\n"}With Jake's neck pressed hard back against the headrest, his eyes swerved upward to examine the twin peaks. The large mountains were stacked up against each other, leaving room for what appeared to be a small mountain pass running in
          between them. <Text style={{ fontFamily: "gelasibro-italic" }}>We're not navigating through that I hope, are we?</Text>
          {"\n"}
          {"\n"}Jake's perception of reality began to change in the speeding ship. He was in an interstellar spaceship flying over interstellar terrain. Snow covered wavelets passed through the soft powder below, like magical stones dropped into a
          pond of vibrating time. New possibilities opened up inside of him then, even if he was not consciously aware of it in the moment. {"\n"}
          {"\n"}With two thousand meters separating them from the base of the mountain, and Dendro continuing to steer the ship towards the very narrow pass Jake's heart-rate accelerated.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Dude, what are you doing! We're gonna crash!</Text> Jake squeezed the seat handles and closed his eyes.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Mom, please forgive me for all of my misdoings.</Text> But Dendro pulled the ship vertical at the last possible moment. Jake's neck muscles tensed against the enormous G-Force; his vision
          became immersed with the star filled sky as they rocketed upward. <Text style={{ fontFamily: "gelasibro-italic" }}>Holeeyy moleee</Text>. He heard the engines firing louder. His entire body vibrated. As they approached the mountain summit,
          Dendro jerked the throttle forward aggressively. Jake's perspective flipped upside down and then back again, as though he had taken a spinning flip off of a diving board. Then they were speeding down the far side of the mountain.{"\n"}
          {"\n"}"Holy jeez," He mumbled out loud as his eyes opened wide. "That. That was....did we just flip?"{"\n"}
          {"\n"}"Yes. I thought that might pick up your spirits," Dendro replied. "Old Forces maneuvers are the best."{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I really am next to a fighter pilot.</Text> After the frustration passed,Jake couldn't help but feel some admiration for the alien. He studied Dendro's profile.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>But no one will ever believe me.</Text> {"\n"}
          {"\n"}They sped over a spacious alpine forest that opened up into another snow covered valley. Out in front of them, another large mountain became visible; the moon hung directly above its peak. As they zoomed closer, Jake could see the
          wooden buildings nestled in front of it.  {"\n"}
          {"\n"}"What is that place?"Jake asked, inquisitively. {"\n"}
          {"\n"}"Lithium Radar informed me this used to be—", Dendro brought up a map on his radar screen. "—an abandoned <Text style={{ fontFamily: "gelasibro-italic" }}>ski</Text> resort. Some kind of sport human's engage in on the mountain."{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>A ski resort. That makes sense. That's what those grooves are on the mountain slopes. </Text>
          {"\n"}
          {"\n"}As they approached the settlement, Dendro pulled up on the throttle, ascending the ship directly over the abandoned ski resort compound. Jake peered out the ship's cockpit window studying the mountain face. He saw countless ski trails
          grooving themselves into the jagged mountain slopes, and peering down, he could see the ski lifts and gondolas. <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder how long this place has been abandoned?</Text>
          {"\n"}
          {"\n"}Dendro banked hard right, which caused Jake's rib to ache even harder, but it gave him a clearer view of the setup on the ground below. A variety of paths and other buildings stood in between the forest trees. A few other structures
          were positioned next to the base of the mountain. Jake squinted to try to make out a large, oval opening built into the forest. <Text style={{ fontFamily: "gelasibro-italic" }}>What is that?</Text> The ship continued to circle the facility
          for a few moments, enabling Dendro to execute his flyover reconnaissance. {"\n"}
          {"\n"}A yellow blip blinked on the green radar readout. Dendro pointed out the right corner of the cockpit window. <Text style={{ fontFamily: "gelasibro-italic" }}>We are going to put her down right over here.</Text> Jake looked down and
          saw that another large wooden structure with a sloping, tiled roof nestled in the trees. A small clearing sat adjacent to it, and looked large enough for the ship to land safely.{"\n"}
          {"\n"}"What is that?" Jake asked. {"\n"}
          {"\n"}"It's some kind of barn or maintenance facility." Dendro flicked through the screen adjacent his radar readout. "It looks like it used to house vehicles and larger maintenance equipment. We can put the ship down in the opening here,
          and then get set up inside." He made a few subtle shifts to the joystick, bringing the ship level again as they approached the air space directly above their landing point. Dendro once again flicked the metal switch on the center of the
          ship's dashboard- causing the ship's main thrusters to power down—and the vertical landing engines revved to life. Their forward velocity decelerated, pulling Jake back into his seat, and they began to drop slowly.  {"\n"}
          {"\n"}"Do you ever get used to these maneuvers?"Jake asked. The vertical landing engines emitted a deafening chainsaw noise as they approached the tree line.{"\n"}
          {"\n"}"Takes a bit of time. But our bodies can get used to almost anything,"Dendro responded in a louder voice, attempting to overcome the raucous from the engines. "You're doing great, kid." {"\n"}
          {"\n"}As the ship continued to descend, Dendro's eyes focused acutely on the three screens in front of him. He moved the throttle subtly in different directions, keeping the ship stable, until the Sentauri Beacon had crossed the forest
          canopy, hitting the ground with a gentle <Text style={{ fontFamily: "gelasibro-italic" }}>plop</Text> a few moments later. {"\n"}
          {"\n"}Dendro flipped the ship's engines off and said, "Let's fix this receiver, communicate back to base, and get you home." He popped open a slot in front of him and pulled out what appeared to be a laptop computer. He then stood up,
          grabbed his axe off the hook on the wall, and hustled up the stairs down the hall.{"\n"}
          {"\n"}A skeptical surge of hope ran through Jake's heart. <Text style={{ fontFamily: "gelasibro-italic" }}>This could be our last stop,</Text> he thought. But a growing maturation inside warned him that things do not always go as promised. 
          {"\n"}
          {"\n"}"Keep the robe on, don't want you freezing on me," Dendro said as Jake entered the main cabin.{"\n"}
          {"\n"}Jake looked down at his dark Solar Forces robe. It didn't look particularly special, but it was the warmest thing he had ever worn. <Text style={{ fontFamily: "gelasibro-italic" }}>I feel warmth coming from the inside.</Text>{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Must be some alien tech.</Text> He stretched his upper legs and abs. His hip still ached, but the pain was subsiding.{"\n"}
          {"\n"}Dendro picked up the Radium box from the corner of the room then opened the ship's hatch. <Text style={{ fontFamily: "gelasibro-italic" }}>"After you",</Text> he said, as he punched a black button next to his bedroom door, which
          caused the ladder to recede down to the floor. {"\n"}
          {"\n"}Jake climbed up and walked to the edge of the wing. He dropped onto his bottom, slid forward, then spun himself around so he could hang onto the ship as he extended his body towards the ground. He then let go, dropping the few feet
          and hitting the earth, safely. <Text style={{ fontFamily: "gelasibro-italic" }}>Now I know how to get down without Dendro's help.</Text> The warrior hit the soil beside him a few seconds later.{"\n"}
          {"\n"}Jake studied his surroundings; it was eerie being in an abandoned location like this—a place where so many people used to visit was now utterly desolate. {"\n"}
          {"\n"}"Let's go," Dendro shouted. He walked around the ship and headed for the barn-looking facility twenty feet away. One of it's tall side doors was partially open.{"\n"}
          {"\n"}Jake followed him. When he stepped inside it was pitch black, and he groaned, "It smells awful." {"\n"}
          {"\n"}"This? This is nothing. I once slept with a family of Zengagi Water Elephants on Limora for two weeks on a mission gone awry. Don't complain," Dendro said in the darkness. {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck is a Zengagi water elephant?</Text> Jake thought. A few moments later he heard Dendro place the Radium box on the ground and walk back out of the side door.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Where is he going?</Text> He heard Dendro walk back inside half a minute later, then heard the jostling of something on the ground. A small fire ignited, lighting the room with its orange
          glow.{"\n"}
          {"\n"}"That's more like it," Dendro said. {"\n"}
          {"\n"}Jake peered around the structure as Dendro stepped away from the burning fire pit. They appeared to be standing in some kind of half barn, half maintenance shed. Haystacks were nestled on the far side of the room. Near where they had
          entered was a closed garage door, leading out to the front of the facility.{"\n"}
          {"\n"}"What are you doing over there?"Jake shouted when he saw Dendro begin fidgeting with the pneumatic valves on the wall.{"\n"}
          {"\n"}"I need a half hour before I begin the receiver regeneration process. Going to ice down the wings. Gotta see if these water lines still work," Dendro said.{"\n"}
          {"\n"}Jake looked at the front wall. <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder if the front doors are unlocked?</Text> He walked over to them and pulled one of them open silently. When he looked outside he could see that the
          full moon was still visible and a slight breeze running through the trees. <Text style={{ fontFamily: "gelasibro-italic" }}>What's the harm in a little exploration?</Text> An adventure driven calm rushed over him; a temporary escape. He
          tiptoed out the door, across the grass in front of the building. Dendro didn't seem to notice. {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder if this path leads to the mountain?</Text> He thought to himself as he hit the paved forest road. He looked back at the building for a moment.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Dendro is too busy to notice. I'll only go for a minute.</Text> His intuition told him to turn left. As he walked, he stuck out his tongue to taste the snowfall.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This place is interesting.</Text> He shifted his gaze to a tree on his left when he heard the rattle of a small animal rustling through the branches.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I guess we aren't alone. </Text>
          {"\n"}
          {"\n"}A few minutes later, as he walked through the forest, he approached a clearing to his right. He examined the round-walled construction that was illuminated by the stars above. It's{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>an abandoned ice skating rink!</Text> This was the opening Jake saw from the ship. <Text style={{ fontFamily: "gelasibro-italic" }}>It's an actual rink</Text>! It appeared slightly smaller
          than regulation size, but it was certainly large enough for guests to enjoy after a day out on the slopes. There was even a small wooden shack adjacent to it, with a sign that read: "Mountainous Waffles." His stomach rumbled.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Wish that was still open,</Text> he thought. <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe I'll test out the rink later if we have time.</Text> He shifted his focus back to the
          forest road and continued walking. {"\n"}
          {"\n"}He passed a row of dilapidated cabins, and a short time later, he saw up ahead that the road exited the forest. He trekked on for another fifty feet and exited the trees. He stood on the paved road looking out on the valley they flew
          over. To his right, he could see the imposing mountain and a bunch of large wooden buildings in the distance. He looked up. The stars above him were captivating. Something about the full moon, the subtle, silent snowfall, and the abandoned
          compound, made everything feel surreal and distant. {"\n"}
          {"\n"}Jake walked further ahead, pushing through an unlocked gate. He passed a wooden building on his right that read "Your Local Chili Tavern." Through the windows he could see the chairs were all laid upside down on the tables.{"\n"}
          {"\n"}He soon approached a wooden lodge, which must have been the resort's headquarters. He walked up to the main entrance and peered inside. It was pitch black. <Text style={{ fontFamily: "gelasibro-italic" }}>Freaky</Text>, Jake whispered
          aloud. As he continued walking, he could see that the road curved into a semi-circular rotary ahead, and then led off across the valley into another patch of forest. {"\n"}
          {"\n"}He looked up at the night sky. Had he been here before in a dream? In his mind, a garden creeped into view. He felt older. Much older. As if it were the end of time. It didn't make sense, but he continued scanning the heavens. He
          caught sight of a bulging yellow dot in between a patch of stars. Was that Venus? Or was it just light? {"\n"}
          {"\n"}As he turned right onto the path which led up to the ski lifts, he spotted snow tubes scattered across the bottom of the bunny hill ahead of him. <Text style={{ fontFamily: "gelasibro-italic" }}>They look lonely</Text>, he thought. 
          {"\n"}
          {"\n"}Jake paused for a moment. Then he walked up to the empty tubes laying in the snow and picked one up. It was half black, half white, resembling a donut. He cupped it in his arm, and began jogging up the hill.{"\n"}
          {"\n"}When he got to the bunny hill summit, he did not hesitate; he took a running start, dropped the tube down on the snow, and then dove inside. He felt an adrenaline rush as he picked up speed, zipping down the short slope. After the
          first run, he ran back up the hill, and repeated the run. This time he had to steer around a few bumps in the powder. He hit an icy one which he could not avoid in time, shot up in the air and nearly face-planted.{"\n"}
          {"\n"}"Ahaha," Jake chuckled, as his mouth was fully immersed in the icy precipitate.{"\n"}
          {"\n"}He got up and kicked the tube into the dark night. <Text style={{ fontFamily: "gelasibro-italic" }}>That was fun</Text>, he thought. <Text style={{ fontFamily: "gelasibro-italic" }}>But I should head back</Text>.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Dendro will be looking for me.</Text> He picked up his pace as he headed towards the forest road.{"\n"}
          {"\n"}When Jake entered the barn five minutes later, he noticed a thick hose ran from a valve on the wall out one of the side doors. As he stepped outside to find Dendro, he caught sight of the warrior's powerful figure hosing down parts of
          the ship with the water line. Jake walked up next to him.{"\n"}
          {"\n"}"Getting the ice and dirt off our landing gear." Dendro stated. "Just about complete." He pulled the latch back on the hose nozzle and the flow of water ceased. Jake watched as water dripped off the underside of the wings and the
          bottom landing gear. A puddle formed near the bottom of the ship.{"\n"}
          {"\n"}"Always good to clean her off. Keeps her in elite condition. Now let's fix this receiver," Dendro said. He rolled up his left sleeve and uttered: "Oh receiver where art thou?"{"\n"}
          {"\n"}A rotating, light blue rendering of the ship appeared on his readout. Dendro glanced at it for a moment. "Follow me," he uttered.{"\n"}
          {"\n"}Jake followed him to the front of the ship. As Jake stood directly in front of it, he got the chance to really observe the fantastical machine. The black, sloping nose, the extreme curvature of the wings and the radar resistant
          metal—it almost appeared to be a living entity—a lonely creature that had evolved over millions of years to fly between the stars. {"\n"}
          {"\n"}A few moments later, something beeped and Jake heard the sound of an airlock opening. A cylindrical object began to slide out of a slot on the top of the ship's nose. Dendro reached out, gripped onto the object and slowly pulled the
          heavy thing out from the opening. Twenty seconds later, he held the tall bulky titanium cylinder upright in his arms. {"\n"}
          {"\n"}The receiver was bigger than Jake had imagined. It was his height in length and nearly a foot wide in diameter. Glass compartments containing sizzling purple plasma were positioned on the top and bottom of the device, and each held
          criss-crossing aluminum rods.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>"Let's get this inside," Dendro said.</Text> He headed for the barn carrying the cylindrical receiver against his chest. When he walked inside, he rested the device upright next to the fire.
          {"\n"}
          {"\n"}"Is this thing radioactive?" Jake asked. {"\n"}
          {"\n"}"Take this." Dendro took two thin face masks from his robe pocket, put one on, and handed one to Jake. "The robe will protect everything else."{"\n"}
          {"\n"}He hit something on his Lithium Radar read out, which caused a small aluminum panel in the center of the communications receiver to swing open. Dendro crouched to his knees to peer inside the machine. Jake slung the mask over his head
          and slid over next to Dendro to do the same.{"\n"}
          {"\n"}A small silver plate sat in the center of the chamber. On it, sat a cube, with large electrode prongs assembled to its left and right sides. <Text style={{ fontFamily: "gelasibro-italic" }}>Is that the radium?</Text> Jake thought.
          Gold foil lined the top of the compartment. A bunch of tangled wires sat at the bottom. When Jake looked closer, he could see that the cube was cracked on its diagonal. {"\n"}
          {"\n"}"That'll do it,"Dendro said. {"\n"}
          {"\n"}Dendro stuck his right hand inside. He delicately removed both electrodes, then removed the cracked cube from the chamber, and placed it on the ground. {"\n"}
          {"\n"}He got up and brought the radium crate over to the fire; he hit something on his Lithium Radar and it popped open. As Jake peered inside, he saw a few small silver cubes sitting at the bottom. Dendro picked one up in his gloved hands
          and carried it over to the communications receiver. He placed it on the protruding silver plate and reassembled the electrodes. A few seconds later, LED lights on the front center of the cylinder turned solid green. Dendro walked back a few
          feet and said: "We should be good." He walked around the fire pit and picked up the laptop which he had apparently left on the floor when they first came inside. He came back next to Jake and placed it on the ground and knelt beside it. He
          opened it up, brought up an odd looking program, and tapped something on the keyboard. An instant later, the compartment on the communications receiver closed, and so did the metal radium crate. He looked at his Lithium Radar. "Weak force
          isolation in progress. T-minus thirty minutes until sustainable reaction energy reached." He paused for a moment. "If all goes well, we will have a functional receiver in under an hour."{"\n"}
          {"\n"}Relief flushed over Jake. <Text style={{ fontFamily: "gelasibro-italic" }}>That's good news,</Text> he thought. <Text style={{ fontFamily: "gelasibro-italic" }}>So we are finally getting out of here.</Text> He looked back into the
          flames, pulled the mask off of his face, and let the warmth of the fire wash over his skin.{"\n"}
          {"\n"}"Jake?" Dendro asked as he turned towards him. His strong, inset yellow eyes and black pupils reflected the orange flames. "Although everything is going according to plan, we still need to remain prepared for any danger that may come.
          It is always good to prepare for any...unforeseen circumstances."{"\n"}
          {"\n"}"What are you talking about?"Jake shrilled.{"\n"}
          {"\n"}Dendro removed his space gloves, exposing his long, sharp nailed fingers. He rubbed them together in front of the fire. "I think it's wise to train you on one more Utma Lesson. One, that when completed, will enable you to harness a
          Solar Forces Weapon. I know it sounds a bit much...but you have shown great promise as a learner."{"\n"}
          {"\n"}"A Solar Forces weapon? Why would I need to harness a Solar Forces weapon?" Jake demurred.{"\n"}
          {"\n"}"Because if danger does present itself again, at least you will be able to defend yourself. There is no time right now to give you any real weapons training. But this is at least{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>something</Text>, if something does come," Dendro said, stoically.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>"</Text>You're expecting danger? What am I going to do with a weapon? I can't fight." An image of Dylan throwing him against the locker criss crossed through his mind. "The only battle I've
          ever won in is in Fortnight. Besides, once we get this receiver up and running, and you communicate back to base, won't I be going home?"Jake asked.{"\n"}
          {"\n"}"Jake, I do not expect any drama. But we must prepare for it. <Text style={{ fontFamily: "gelasibro-italic" }}>He who prepares, is always ready.</Text> It is a difficult situation we find ourselves in," Dendo responded. "I ask that
          you allow me to give you this Utma lesson—it will...give me peace of mind."{"\n"}
          {"\n"}Jake thought for a moment. The thought of learning more code was not a negative thing. Neither was obtaining another <Text style={{ fontFamily: "gelasibro-italic" }}>supposed</Text> super power. But would he ever extricate himself
          from this calamity? He thought for a few seconds. "Fine," he responded. But please promise me once we get word back to your base, you'll take me home."{"\n"}
          {"\n"}"I promise you that kid. If we get back to base, which we should, I will take you home," Dendro replied.{"\n"}
          {"\n"}"Alright," Jake responded. "So what am I learning? I already understand variables."{"\n"}
          {"\n"}"There is much, much, more to this thing we call code. This lesson I'd like to commence is called Basic Control flow in Python."{"\n"}
          {"\n"}"Control flow in Python?" Jake asked, with trepidation.{"\n"}
          {"\n"}"Yes. Control flow allows us to grant the power of decision making to our programs. Oftentimes when we code, we have the need to give our program the ability to make a choice. This is where control flow comes in —- it grants us the
          power to give our Python programs the ability to make decisions."{"\n"}
          {"\n"}"Why would our program need to make a decision?" Jake asked, skeptically.{"\n"}
          {"\n"}"Well, almost all useful programs need the ability to make choices. For example, think of the code that operates a vending machine. When a user selects a drink, the program must choose which drink to dispense based on which drink was
          chosen by the user —- if the user selects Drink A then the software must tell the machine to dispense Drink A, but if the user selects Drink B, then the software must tell the machine to dispense Drink B. You wouldn't want to get the wrong
          drink would you? Many choices in computer programs take the form of: if this, then that."{"\n"}
          {"\n"}"That makes sense, I just never imagined it as a decision though. I guess it is, in a way," Jake said." He thought of Nassir's robot turning right and left on the grass at Allen Park as the gizmo took commands from the RC controller.
          {"\n"}
          {"\n"}"Then how do you implement decisions in Python?" Jake asked, eagerly.{"\n"}
          {"\n"}"We use something called an <Text style={{ fontFamily: "gelasibro-italic" }}>if statement</Text>", said Dendro. "An if statement is what is known as a conditional statement. {"\n"}
          {"\n"}"A <Text style={{ fontFamily: "gelasibro-italic" }}>what</Text>?" Jake asked.{"\n"}
          {"\n"}"A conditional <Text style={{ fontFamily: "gelasibro-italic" }}>if statement</Text>. It is a block of code that only fires if a certain <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text> evaluates to True." Dendro
          opened up his laptop and pulled up his purple code editor application. He pulled up a file named <Text style={{ fontFamily: "gelasibro-italic" }}>practice.py</Text> and began typing something inside of it.{"\n"}
          {"\n"}"So there is something actually called an "if-statement"? But wait, what is an <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text>? I don't even know what that is," Jake said.{"\n"}
          {"\n"}"You have a keen mind to spot the concepts you are not familiar with yet. You should be proud of that—there is great potential in you as a pupil," Dendro uttered. "Understanding the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text> is both critical to life and to this lesson. Allow me to explain briefly as we do not have much time. An <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text>{" "}
          is a piece of code, that when computed, ends up simplified to only one singular value." Dendro began to type.{"\n"}
          {"\n"}"Here take a look. The <Text style={{ color: "#0C2443", fontFamily: "code" }}>3 + 3</Text> you see written in our editor here is an example of an expression in code. This is because it simplifies to 6, a singular value," noted Dendro.
          {"\n"}
          {"\n"}Jake looked at the screen. "Ok, I see. You just added the numbers."{"\n"}
          {"\n"}"Yes, in programming, math <Text style={{ fontFamily: "gelasibro-italic" }}>and</Text> logic interconnect frequently," Dendro replied.{"\n"}
          {"\n"}"Ok...so then 9 + 10 + 11 + 100 would also be an expression?" Jake inquired.{"\n"}
          {"\n"}"Yes, it evaluates to <Text style={{ fontFamily: "gelasibro-italic" }}>one</Text> value, 130," Dendro responded.{"\n"}
          {"\n"}"An expression seems not <Text style={{ fontFamily: "gelasibro-italic" }}>that</Text> hard to understand," Jake said.{"\n"}
          {"\n"}"It's not. <Text style={{ fontFamily: "gelasibro-italic" }}>Nothing</Text> really is. It's just a matter of having the right teacher," Dendro replied, with a smirk.{"\n"}
          {"\n"}Dendro held the laptop outward. "The counterpart to the expression, is the <Text style={{ fontFamily: "gelasibro-italic" }}>statement</Text>." Dendro deleted the previous line and began typing in something different. "A{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>statement</Text> is a piece of code that <Text style={{ fontFamily: "gelasibro-italic" }}>directs</Text> something. It represents an action or a command, it does not evaluate to a singular
          value. For example, looking at our screen here, <Text style={{ color: "#0C2443", fontFamily: "code" }}>cat = 4</Text> is a statement. It is a command instructing the computer to set the value of a variable named{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>cat</Text> to the number four, however <Text style={{ fontFamily: "gelasibro-italic" }}>it does not</Text> simplify down to a singular value. All, and I mean{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>all</Text> of code, is a combination of just expressions and statements," Dendro said.{"\n"}
          {"\n"}Jake thought for a moment. "So I know everything now?" Jake said, kidding. He felt the urge to discuss this with Nassir.{"\n"}
          {"\n"}"Not quite. But all masters are masters of the fundamentals of their field. The great spiritual leaders teach us this in the Forces," Dendro said. "But you are moving in the right direction. One very important thing I must not forget
          is that although expressions can simplify down to a single number, they can also evaluate down to other singular things, like a boolean value of <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text> or{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>."{"\n"}
          {"\n"}Jake looked at him puzzled by what Dendro meant by that.{"\n"}
          {"\n"}"Look here." Dendro deleted the previous code and wrote a new line on the screen.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_1.png")} />
        </View>
        <Caption>(Dendro's Code Editor)</Caption>

        {
          // Section 2 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Jake squinted. "What the heck. What is that double equals sign?"{"\n"}
          {"\n"}"The double equals sign <Text style={{ color: "#0C2443", fontFamily: "code" }}>==</Text> is what we call a <Text style={{ fontFamily: "gelasibro-italic" }}>comparison operator</Text>. It compares two values against each other and then
          spits out a singular <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text> or <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text> value. The double equals sign in Python is called the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>equality operator</Text>. It determines if two values are equivalent. The less than <Text style={{ color: "#0C2443", fontFamily: "code" }}>{"<"}</Text> and greater than{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>{">"}</Text> characters are also comparison operators," Dendro said.{"\n"}
          {"\n"}"So these symbols are similar to math," Jake replied.{"\n"}
          {"\n"}"Yes. Now look here closely again. Based on what I just said, what do you think this code, this <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text>, simplifies down to?" Dendro said. "Remember, comparison operators,
          like our double equals sign, compare two things, and then spit out a singular <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text> or <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text> value.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_1.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 3 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Jake looked back at the screen and the blue characters. "Um. I'm not sure. Wait. It's asking <Text style={{ fontFamily: "gelasibro-italic" }}>if three equals four</Text>?"{"\n"}
          {"\n"}"Yes. Your line of thinking is correct. Don't let the fact you're doing something for the first time get in the way of your thought process," Dendro said.{"\n"}
          {"\n"}Jake thought for a moment. "This <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text> will simplify down to <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>? Because 3 does not equal 4?" Jake asked,
          sheepishly.{"\n"}
          {"\n"}"Yes. Precisely. This expression<Text style={{ color: "#0C2443", fontFamily: "code" }}> 3 == 4</Text> will always be simplified by Python down to <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>. You are getting the
          gist, kid, don't worry. Now this brings us back to the <Text style={{ fontFamily: "gelasibro-italic" }}>if statement</Text>. I mentioned before that an <Text style={{ fontFamily: "gelasibro-italic" }}>if statement</Text> runs a piece of
          code <Text style={{ fontFamily: "gelasibro-italic" }}>only</Text> if its corresponding <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text> is equal to <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>. Take a
          look at the following example." Dendro typed something quickly into the file, then turned the laptop towards Jake.{"\n"}
          {"\n"}"If 2 equals 2?" Jake asked, bewildered.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_2.png")} />
        </View>
        <Caption>(This code will only run if the above if-statement expression simplifies to True.)</Caption>

        {
          // Section 4 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "Yes. This example here is trivial, as 2 will always equal 2, but it demonstrates how the if-statement works. Any code we place in the <Text style={{ fontFamily: "gelasibro-italic" }}>if statement code block</Text>, which is{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>indented</Text> below in Python, will run because <Text style={{ color: "#0C2443", fontFamily: "code" }}>2 == 2</Text> always simplifies down to{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>. So no matter what code we put in the if-statement code block, in this scenario, it will always run. Note, that we can use a{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>#</Text> sign to leave a comment in our code—-this is a text based comment that is ignored by Python; it's used to allow for coders to take notes within their code. Leaving these
          comments regularly in our code, or documenting what each step in our program does, is one of the most important things we can do as a coders," Dendro said.{"\n"}
          {"\n"}Jake thought for a moment as he peered at lines 1 and 2. "Ok...I see now...you're showing how the if-statement works. The statement on line 1 evaluates to <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>, so whatever
          code goes indented below it will fire. And comments seem useful. I think I understand," Jake said. "It's pretty simple. If the expression is <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>, the code in the indented block
          runs, if it's <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>, it does not run."{"\n"}
          {"\n"}"Affirmative. If we modified the if-statement expression to something that evaluated to <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>, like <Text style={{ color: "#0C2443", fontFamily: "code" }}>2 == 3</Text> the
          code in the if-statement block would not run."{"\n"}
          {"\n"}Jake thought about it for a moment. The concept made sense to him.{"\n"}
          {"\n"}"Allow me to show you another, more visual example," Dendro said. He typed something else into the code editor.{"\n"}
          {"\n"}Jake looked at the screen.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_3.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 5 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "What is print?"Jake asked, confused.{"\n"}
          {"\n"}Dendro pointed to line 2. "This <Text style={{ color: "#0C2443", fontFamily: "code" }}>print()</Text> command is a tool that the Python creator Bernard Pinkett provided to allow us to view the results of our Python code more easily.{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>Print()</Text> is a function that displays selected pieces of our program to our screen. You have not received formal training in functions yet, but for now recognize that functions are
          prewritten commands that we can store and trigger whenever we so desire. Anytime we want to display a message, or display the value of something like a variable to our screen, we can use{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>print()</Text>. It is extremely useful when we want to understand what's happening inside of our code. See here."{" "}
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_4.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 6 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}></Text>
        <Text style={BookStyles.bookFont}>
          If we ran this code, <Text style={{ color: "#0C2443", fontFamily: "code" }}>‘dog’</Text> would print out on our screen. He scrolled down.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_5.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 7 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "This will display <Text style={{ color: "#0C2443", fontFamily: "code" }}>2</Text> to our screen. We can display the value of variables—-nearly anything we choose using <Text style={{ color: "#0C2443", fontFamily: "code" }}>print()</Text>."
          {"\n"}
          {"\n"}"I see. That's cool. So one line 2 <Text style={{ color: "#0C2443", fontFamily: "code" }}>print</Text> would display the value of the variable <Text style={{ color: "#0C2443", fontFamily: "code" }}>cat</Text>," Jake said.{"\n"}
          {"\n"}"Yes. As our programs get larger, and more steps are involved, printing allows us to trace through the individual steps of our code. This is essential, because as we begin to learn coding, we have the tendency to write all of the code
          necessary to solve a problem before we test it. We <Text style={{ fontFamily: "gelasibro-italic" }}>all</Text> learn the hard way that this is an awful way to do things. It is much more effective to ensure that the first step and second
          step in our program works properly before we write steps three three through ten. Print allows us to see how information moves through the program, and it allows us to see visually if things are working properly," Dendro said.{"\n"}
          {"\n"}"Like being more diligent with your work? My mom is always telling me that," said Jake.{"\n"}
          {"\n"}"Yes. You could look at it like that. Programming is a lot like plumbing. We are moving information through a series of unique steps, and oftentimes, each step modifies the information we are working with slightly. We must, must,
          ensure the information is in the right form before we pass it to the next step in our process. This is the power of <Text style={{ color: "#0C2443", fontFamily: "code" }}>print()</Text>. We can visualize what our information looks like
          after each step. Take a look at this." Dendro punched some keys on the keyboard and a small window popped up on the bottom of the code editor. It had a blinking cursor next to the left margin.{"\n"}
          {"\n"}"What's that thing?"Jake asked<Text style={{ fontFamily: "gelasibro-italic" }}>. "</Text>That looks more matrixy."{"\n"}
          {"\n"}"This is our computer's Terminal," Dendro said.{"\n"}
          {"\n"}Jake looked at him wide-eyed.{"\n"}
          {"\n"}"Don't be intimidated by it. You can even customize the colors." Dendro stuck his tongue out. "It is a graphical interface programmers can use to talk more intimately with our computer, and for our computer to talk to us."{"\n"}
          {"\n"}Jake looked back at the code editor. Dendro brought up the if-statement he wrote a few moments ago.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_6.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 8 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "Watch what happens when I officially run our Python file, <Text style={{ fontFamily: "gelasibro-italic" }}>practice.py</Text>, on our computer here. Keep your eye on the terminal window."{"\n"}
          {"\n"}Jake watched as Dendro's thick fingers typed <Text style={{ color: "#0C2443", fontFamily: "code" }}>python3 practice.py</Text> next to the cursor blinking on the terminal before he hit the enter key. "When we wish to run a Python
          program, we type in <Text style={{ fontFamily: "gelasibro-italic" }}>Python3</Text> and the name of the file we wish to run, assuming Python is installed on your machine, and that our terminal is toggled into the folder our file is saved
          in." Dendro hit the enter key.{"\n"}
          {"\n"}The terminal cursor dropped down a line and displayed: <Text style={{ color: "#0C2443", fontFamily: "code" }}>"This code block is running!"</Text>
          {"\n"}
          {"\n"}Jake looked at the if-statement then back at the message. "The if-statement's code block fired because the if statement's expression is true,<Text style={{ color: "#0C2443", fontFamily: "code" }}>2 == 2!</Text>," Jake blurted out.
          "That's cool when you actually see it. So the terminal is where the print function displays its output?"{"\n"}
          {"\n"}"Precisely", Dendro replied.. "Now I will make a subtle modification":
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_7.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 9 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Dendro typed in <Text style={{ color: "#0C2443", fontFamily: "code" }}>python3 practice.py</Text>, then hit enter. The cursor dropped a line and blinked, but nothing appeared next to it.{"\n"}
          {"\n"}"In this case, nothing will be displayed to the screen, because the if statement evaluates to <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>," Dendro said.{"\n"}
          {"\n"}"I get it," Jake said, confidently.{"\n"}
          {"\n"}"We can build some powerful programs with these basic tools," Dendro explained. "Here, why don't you help me with something." Dendro opened up a different file named{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>flaps_control.py</Text>. "I have the ability to upload a program to our ship computer that enables us to better control our wing flaps—one issue I have been facing in your Earth's atmosphere
          is the unpredictable wind speed. It's about time we gave our flap settings the ability to adjust to the wind speed. Our flaps can either be on or off, and we can control that with this code here. I never finished writing the program,"
          Dendro explained.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_8.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 10 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "Right now, a few lines above which you can not see easily, a <Text style={{ color: "#0C2443", fontFamily: "code" }}>windspeed</Text> variable I created will be updated every 5 seconds when the ship is in flight. You can see that the code
          here automatically sets the flaps to <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text> everytime this code runs. But why don't you try to adjust this code so that <Text style={{ fontFamily: "gelasibro-italic" }}>if</Text>{" "}
          the <Text style={{ color: "#0C2443", fontFamily: "code" }}>windspeed</Text> is above 100 kilometers per hour, we turn the flaps on?"{"\n"}
          {"\n"}"You want me to configure something for the ship? Are you crazy?" Jake asked, incredulously.{"\n"}
          {"\n"}"No. It is time. Take a try. I will guide you if needed," Dendro said sternly.{"\n"}
          {"\n"}Jake couldn't believe Dendro was asking him to configure something that would affect how the ship flew. He let the anxiety pass and he then looked at the screen. {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This code runs every five seconds</Text>, he thought. <Text style={{ fontFamily: "gelasibro-italic" }}>But what do we want to execute?</Text> He concentrated for a couple of minutes.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>We want to change the flaps to on, to</Text> <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}>, if the windspeed is greater than 100 kilometers per hour. IF. I think I see it now. I guess I can use another comparison symbol? And I must indent the statement.</Text>
          {"\n"}
          {"\n"}Jake wrote some new code in the text editor.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_8.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 11 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "Like this?" Jaked asked. "We use the greater than <Text style={{ fontFamily: "gelasibro-italic" }}>comparison operator</Text>, and if the <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text>{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>windspeed {">"} 100</Text> evaluates to <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>, we set the{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>flaps</Text> variable to <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>.{"\n"}
          {"\n"}"Precisely." Dendro gave Jake a friendly tap on the back. "That is excellent, my young friend." Dendro saved the file. "You missed the colon <Text style={{ color: "#0C2443", fontFamily: "code" }}>:</Text> after the{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>if windspeed {">"} 100</Text>, but otherwise perfect. This should improve our flight performance. Now, every five seconds this code will run, and if the windspeed has gone over 100
          kilometers per hour, the flaps will turn on. You see, digging deeper into this topic, was not so bad, was it? I remember a great spiritual teacher of ours once said:{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>"There are many layers to things. As we peel back the onion we become wiser, and when we learn, there should never be a reason to fear the unlayering of these new elements."</Text>
          {"\n"}
          {"\n"}"That's a good saying," Jake said. {"\n"}
          {"\n"}"You now have a general understanding of Python conditionals. There are smaller tidbits of information you will learn later, like the <Text style={{ color: "#0C2443", fontFamily: "code" }}>else</Text> statement, which is really just a
          fancier way to write another if statement, but this is a good start," Dendro added.{"\n"}
          {"\n"}Jake was excited about his newfound knowledge. He then felt an intense heat wave—a burning sensation—pulsate through his body. He pushed himself back. <Text style={{ fontFamily: "gelasibro-italic" }}>Ah.</Text> He rolled up his
          sleeve. A marking that looked like an upside down <Text style={{ fontFamily: "gelasibro-italic" }}>7</Text> was imprinted just a centimeter from the first marking. He ran his fingers over the indelible mark. It was a tattoo, but deeper.
          Like a branding. He looked around the room. <Text style={{ fontFamily: "gelasibro-italic" }}>My mom's gonna kill me. </Text>
          {"\n"}
          {"\n"}"You now have been granted the power of <Text style={{ fontFamily: "gelasibro-italic" }}>Zegmu</Text>, or Weapon's harnessing in the common tongue," Dendro uttered.{"\n"}
          {"\n"}"Ok," Jake said as he looked at the marking. "That's cool, but when do I get to use it?" Jake asked. He was still skeptical of his new powers, even if he had been impressed when he saw Dendro harness them.{"\n"}
          {"\n"}"Hopefully never," Dendro winked. "But the learning shall stay with you."{"\n"}
          {"\n"}Three beeps echoed from Dendro's sleeve. "Ay. The receiver is online, what do you know," Dendro said, excitedly. "I'll be right back." He picked up the laptop and the receiver and headed outside. He came back a minute later tapping
          his Lithium Radar. "Captain to base. Captain to base. Atmosphera do you copy? Comms back online. I repeat comms back online." He repeated the sequence a few more times, but after waiting a few minutes, there was no response. Dendro
          continued to tap on the screen, speaking different commands into it. Jake began to feel a pit growing in his stomach. A few attempts later Dendro sat back down near the fire and stared down into it. {"\n"}
          {"\n"}"What is happening?" Jake asked. {"\n"}
          {"\n"}Dendro's eyes focused on the fire. "I am not receiving a response. Lithium radar confirms the receiver is online and functional. It's as if the actual communication satellites have gone down. Could they have...? Is it even possible?
          Our military lines haven't gone down...since...since they went online over a thousand years ago."{"\n"}
          {"\n"}"So..what do we do now..try again in a few minutes?" Jake asked eagerly, but a high pitched ringtone came from Dendro's arm. {"\n"}
          {"\n"}Dendro's eyes immediately lit up. "My low band receiver? Who could be calling me here, in the Earth system?" He rolled up his sleeve again to look at the screen. Jake caught a glimpse of the read out.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>"⋉⟟⋔⋔⟒⍀ ☊⏃⌰⌰⟟⋏☌"</Text>
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>"Zimmer is calling on low band receiver".</Text>
          {"\n"}
          {"\n"}"Zimmer?" Dendro asked, skeptically. "What the heck?"{"\n"}
          {"\n"}He pressed a button on his screen, apparently setting it into speaker mode.{"\n"}
          {"\n"}"Hello..?" Dendro said. His eyebrows furled.{"\n"}
          {"\n"}"Dendrooooo, buddddayyyyyyyyy, how are ya? You're alive, I see. That's good. Very good. I was a bit worried after seeing you in that state. I couldn't open up that darn ship! Then a Vagabond II Stealth Fighter popped up on my tail! I
          had to pop you out," a drunk sounding voice shouted through the phone. {"\n"}
          {"\n"}Dendro looked deeply confused. "Pop me out? Where are you? You are in-system?"{"\n"}
          {"\n"}The voice on the other end replied, partially slurring the words. "I'mmm on the same planettt as you bud." {"\n"}
          {"\n"}"How?" Dendro contorted his face. "How is this possible?"{"\n"}
          {"\n"}"I broughttt you hereee mann," the voice responded. Background music came through the other end of the call.{"\n"}
          {"\n"}"You brought me here? Do you even know where I am?" Dendro said. {"\n"}
          {"\n"}"Yes. You were on the Gravitas, my freighter baby. I picked you up in the belt," the deep voice hollered. The thumping dance music playing in the background was getting louder.{"\n"}
          {"\n"}"You found me <Text style={{ fontFamily: "gelasibro-italic" }}>after</Text> the battle? But how could you have known?" Dendro asked, his face contorting.{"\n"}
          {"\n"}"I can not say more over the phone, old friend," the voice responded. The dance music continued to pulsate.{"\n"}
          {"\n"}"Where are you? I need to get to you. I need to understand what happened. The military comms lines appear to be down everywhere," Dendro said.{"\n"}
          {"\n"}"I'm in Casablanca," the voice responded.{"\n"}
          {"\n"}"Casablanca?" Dendro asked.{"\n"}
          {"\n"}"Coordinates coming your way. I have a place you can use," the voice said. "See you soon, buddy!"{"\n"}
          {"\n"}"But—" Dendro tried to continue, but another sound echoed through the line.{"\n"}
          {"\n"}"Zimmer, come here baby!" a female voice pleaded through the phone. Then more thumping dance music began to play on the other end of the line. Then some laughter. Then the connection cut off. {"\n"}
          {"\n"}Dendro looked at his arm again. An incoming message appeared.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>"⋉⟟⋔⋔⟒⍀ ☊⟟⋏☌"</Text>
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>"33.5731° N, 7.5898° W".</Text>
          {"\n"}
          {"\n"}"That <Text style={{ fontFamily: "gelasibro-italic" }}>freaking</Text> guy! Dendro shot up and put his hands on his hips. He began to shake his head. "I don't understand...but we need to learn more. He has the nerve to hang up."
          Dendro tapped his arm-screen and appeared to call the number back, but there was no answer.{"\n"}
          {"\n"}"Who is this Zimmer?" Jake asked. {"\n"}
          {"\n"}"Zimmer Rexus. He's an old childhood friend. We served in The Solar Forces together, until he left suddenly." Dendro began to pace around the room. "He brought me here? How is that possible? Did he find me in the belt? But how could
          he have known?" Dendro continued to pace nervously around the fire-lit room. "We have no choice, we must leave now for Casablanca. If the communication lines are down, then we are in more danger than I realized. And you are coming with me,
          friend."{"\n"}
          {"\n"}"You're not serious? Casablanca? Isn't that on the other side of the world?" Jake asked. "My family doesn't even know where I am. I have to get home." {"\n"}
          {"\n"}"It is too perilous. I must learn more before I feel comfortable making a decision as serious as overriding Spectator One—a decision that could get me court martialed unless the reasons were incontrovertibly clear," Dendro said.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What does he think could happen!?</Text> "But how long will this take?" Jake asked. The prospect of more adventure, more escape from his existing world, crept into his mind. It had a unique
          power to alleviate pain. <Text style={{ fontFamily: "gelasibro-italic" }}>Don't think like that,</Text> Jake thought.{"\n"}
          {"\n"}"I do not know. I can not make you any more promises. The ship can get us there in hours. From there, we will meet with my old friend. Hopefully he will have information to guide us{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>both</Text> home, safely," Dendro said. "I know your mother <Text style={{ fontFamily: "gelasibro-italic" }}>will</Text> be worried sick. But I will do everything I can to make that
          temporary."{"\n"}
          {"\n"}Jake sat there, looking at the ground. His thoughts began to race. Would he ever get home? And even more disturbing:{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Why did a part of him ache to make the journey across the world to a place he had never seen before?</Text>
          {"\n"}
          {"\n"}There was a loud rattling of cracking tree branches somewhere off in the distance. The ground vibrated. Some of the dirt on the ground kicked up into the air.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What's going on?</Text> Jake thought. He looked at Dendro, desperately.{"\n"}
          {"\n"}The warrior hustled out the front door. Jake's heart pounded. Dendro stepped back in a few seconds later. "They are here. The Venthum. Most likely a search and destroy battalion. Lithium radar is picking up unidentified infrared
          radiation. They may have caught our molecular dispersion trail. Or intercepted a communication signal. Not good." Dendro patted down his man bun. "This has been a weakness of The Forces as of late; we don't understand their technological
          developments well enough," Dendro said, sullenly. "We need a plan and we need to act quickly if we want to live."{"\n"}
          {"\n"}Jake sat there dumbfounded as he watched Dendro pause, look downward, and close his eyes. {"\n"}
          {"\n"}"What are you doing?" Jake exclaimed.{"\n"}
          {"\n"}Dendro looked up and opened his eyes. "We need a distraction. I am going to set the barn on fire."{"\n"}
          {"\n"}"This place...on fire?"Jake shouted. Sneaking through the factory had been terrifying. But aliens coming for them with one intention, to kill them, was a different level of fear entirely. His legs began to quiver, even as he sat. A
          hint of throwing up formed somewhere near his gut. "Why set this on fire? Please, let's run, or take the ship. I can not fight. I want to live."{"\n"}
          {"\n"}"You will live son if you follow my directions. The fire will give us a chance to throw off their thermographic cameras. This could help break a part their initial formation. We do not want to take flight; we will be too vulnerable
          because they've already located our position. If they are on the ground now, we have a chance to defeat them and escape before any backup arrives. The Venthum forces have always been severely limited with their extra-galaxy resources.I
          doubt they have sent more than one search and destroy squadron to this system. We have no time. We have to hope it's closer to a four man squad than a seven man one. Venthum search and destroy saucers deploy with anywhere from four to seven
          troopers," Dendro said.{"\n"}
          {"\n"}Jake looked out the side entrance of the barn. "But..but why can't we just run!?" Jake pleaded. "I am no use in this fight. And how can..how can you take on a whole squadron by yourself!?"{"\n"}
          {"\n"}"We must try. Fleeing will be useless. They will sniff us out," Dendro said. "We must do what we can to defeat them here, on the ground, I know from experience, unfortunately."{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>We?</Text> Jake began to shiver uncontrollably. A form of vertigo came over him, his legs gave out, and he collapsed onto the ground. Then he closed his eyes and waited for Jimmy to wake him.
          {"\n"}
          {"\n"}A moment later he felt someone pull him up. {"\n"}
          {"\n"}"I don't know what to tell you my five and a half foot friend. Find your courage now, and you may be able to see your family again," Dendro said.{"\n"}
          {"\n"}Jake stood there on his wobbly footing, still trembling, but a few moments later his mother flashed through his mind and his senses came back to him. The nausea subsided. It wasn't a dream, or a fairy tale. His survival instincts had
          kicked in. He had to see his mom and brother again. He straightened his back and peered at Dendro.{"\n"}
          {"\n"}"There you go. Now here's what I need you to do.
        </Text>
      </View>
    );
  }
}
