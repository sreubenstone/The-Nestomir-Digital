import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";
import GlossaryWord from "../Glossary/inline/GlossaryWord";

const StoryGraphic = styled.Image`
  width: 360px;
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
          A high-pitched alert woke Jake up some time later. He opened his eyes. It was still dark outside the cockpit panorama. <Text style={{ fontFamily: "gelasibro-italic" }}>Where is he taking us?</Text> He turned to look at Dendro. The Gobrahim
          warrior appeared to be lost in thought.{"\n"}
          {"\n"}“Where are we going?” Jake asked.{"\n"}
          {"\n"}“Somewhere safe to fix the receiver. Lithium Radar has recommended a regrouping point three hundred miles to the southeast, in Colorado. It appears to be an abandoned facility far away from any populated areas,” Dendro said.{"\n"}
          {"\n"}“So, we can fix the ship, and head home? Both of us?” Jake asked.{"\n"}
          {"\n"}“That is the plan. As soon as I communicate back to base.” Dendro said.{"\n"}
          {"\n"}A jolt of hope ran through Jake’s heart. <Text style={{ fontFamily: "gelasibro-italic" }}>This soon will be over</Text>. Being gone for less than a day would not be the end of the world, but he would have a lot of explaining to do. He
          imagined sitting down with Nassir and walking him through the events that had taken place. A Gobrahim warrior. The inklings of a war in a galaxy three million light years away. The Utma. Would anyone believe him? Did it matter? What would
          he say about the markings on his arm? Or would he make up a complete lie about it all?{"\n"}
          {"\n"}Dendro tightened his belt. “Commencing descent.”{"\n"}
          {"\n"}Jake’s stomach floated upward as the ship dropped. About half a minute later, a new mountain range came into view.{"\n"}
          {"\n"}Dendro stuck out his finger and pointed through the cockpit window. “These Rocky Mountains are magnificent,” he said. He scratched his chin gently. “Each planet has its own wonders.”{"\n"}
          {"\n"}Jake glanced ahead. The Rockies <Text style={{ fontFamily: "gelasibro-italic" }}>were a</Text> remarkable image. The vast expanse of snowcapped goliaths seemed to have no end.{"\n"}
          {"\n"}Dendro scanned his radar readout every few moments as he soared the ship over the jagged peaks. Jake caught sight of frozen lakes below them reflecting the bright moonlight.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That’s intense.</Text> After passing over a large swath of mountain ranges, they approached a large valley. Dendro descended the ship again, and a minute later, they were skimming the surface
          of the valley<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> Jake’s eyes opened wider to process the experience.{"\n"}
          {"\n"}“Gnarly, right?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Dendro grinned. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>“I never let the piloting skills get rusty. Flying always brings peace to the mind.” 
          Dendro pushed down on the throttle. As Jake was pushed back into his seat, he prayed no animals jumped out in front of the snow-skimming ship.{"\n"}
          {"\n"}“Lithium Radar tells me the abandoned compound is just beyond the twin peaks up ahead,” Dendro said.{"\n"}
          {"\n"}With Jake’s neck pressed hard back against the headrest, his eyes swerved upward to examine the twin peaks. The large mountains were stacked up against each other, leaving room for what appeared to be a small mountain pass running in
          between them. <Text style={{ fontFamily: "gelasibro-italic" }}>We’re not navigating through that I hope, are we?</Text>
          {"\n"}
          {"\n"}Jake’s perception of reality began to change in the speeding ship. He was in an interstellar spaceship flying over interstellar terrain. Snow covered wavelets passed through the soft powder below, like magical stones dropped into a
          pond of vibrating time. New possibilities opened inside of him then, even if he was not consciously aware of it in the moment.{"\n"}
          {"\n"}With two thousand meters separating them from the base of the mountain, and Dendro continuing to steer the ship towards the very narrow pass Jake’s heart rate accelerated.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Dude, what are you doing! We’re gonna crash!</Text> Jake squeezed the seat handles and closed his eyes.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Mom, please forgive me for all my misdoings.</Text> But Dendro pulled the ship vertical at the last possible moment. Jake’s neck muscles tensed, and his vision was filled with the star filled
          sky as they rocketed upward. <Text style={{ fontFamily: "gelasibro-italic" }}>Holy moly</Text>. He heard the engines firing louder. His entire body vibrated. As they approached the mountain summit, Dendro jerked the throttle forward
          aggressively. Jake’s perspective flipped upside down and then back again, as though he had taken a spinning flip off a diving board. Then they were speeding down the far side of the mountain.{"\n"}
          {"\n"}“Holy jeez,” he mumbled out loud as his eyes opened wide. “That. That was....did we just flip?”{"\n"}
          {"\n"}“Yes. I thought that might pick up your spirits,” Dendro replied. “Old Forces maneuvers are the best.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I really am next to a fighter pilot.</Text> After the frustration passed, <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake couldn’t help but feel some admiration for the alien.
          {"\n"}
          {"\n"}They sped over a spacious alpine forest that opened up into another valley. Out in front of them, another large mountain became visible. The moon hung directly above its peak. As they zoomed closer, Jake could see the wooden buildings
          nestled in front of it.{"\n"}
          {"\n"}“What is that place?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake asked.{"\n"}
          {"\n"}Dendro brought up a map on his radar screen. “Abandoned <Text style={{ fontFamily: "gelasibro-italic" }}>ski</Text> resort. Some kind of…sport humans engage in on the mountain.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>A ski resort. That makes sense. That’s what those grooves are on the mountain slopes.</Text>
          {"\n"}
          {"\n"}As they approached the settlement, Dendro pulled up on the throttle, ascending the ship directly over the abandoned ski resort compound. Jake peered out the window studying the mountain face. He saw countless ski trails grooving
          themselves into the jagged mountain slopes and countless ski lifts and gondolas. <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder how long this place has been abandoned?</Text>
          {"\n"}
          {"\n"}Dendro banked hard right, which caused Jake’s ribs to ache even harder, but it gave him a clear view of the setup on the ground below. Jake squinted to try to make out a large, oval opening built into the forest.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What is that?</Text> The ship continued to circle the facility for a few moments, until a yellow blip blinked on the green radar readout. Dendro pointed out the corner of the cockpit window.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>We are going to put her down right over here.</Text> Jake looked down and saw that another large wooden structure with a sloping, tiled roof nestled in the trees. A small clearing sat
          adjacent to it and looked large enough for the ship to land safely.{"\n"}
          {"\n"}“What is that?” Jake asked.{"\n"}
          {"\n"}“It’s some kind of barn or maintenance facility.” Dendro flicked through the screen adjacent to his radar readout. “It looks like it used to house vehicles and larger maintenance equipment. We can put the ship down in the opening
          here, and then get set up inside.” He made a few subtle shifts to the joystick, bringing the ship level as they approached the air space directly above their landing point. Dendro flicked the metal switch on the center of the ship’s
          dashboard, causing the ship’s main thrusters to power down–and the vertical landing engines revved to life. Their forward velocity decelerated, pulling Jake back into his seat as they dropped.{"\n"}
          {"\n"}“Do you ever get used to these maneuvers?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake asked. The vertical landing engines emitted a deafening chainsaw noise as they approached the tree line.{"\n"}
          {"\n"}“Takes a bit of time. But our bodies can get used to almost anything,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Dendro responded loudly, attempting to overcome the noise from the engines. “You’re doing great, kid.”
          {"\n"}
          {"\n"}As the ship continued to descend, Dendro’s eyes focused acutely on the three screens in front of him. He moved the throttle subtly in different directions, keeping the ship stable, until the Sentauri Beacon had crossed the forest
          canopy, hitting the ground with a gentle <Text style={{ fontFamily: "gelasibro-italic" }}>plop</Text>.{"\n"}
          {"\n"}Dendro flipped the ship’s engines off. “Let’s fix this receiver, communicate back to base, and get you home.” He popped open a slot in front of him and pulled out a laptop computer. He grabbed his axe off the hook on the wall and
          hustled up the stairs down the hall.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This could be our last stop,</Text> he thought. But a growing maturation inside warned him that things do not always go as promised.{"\n"}
          {"\n"}“Keep the robe on. Don’t want you freezing on me,” Dendro said as Jake entered the main cabin.{"\n"}
          {"\n"}Jake looked down at his dark Solar Forces robe. It didn’t look particularly special, but it was the warmest thing he had ever worn. <Text style={{ fontFamily: "gelasibro-italic" }}>I feel warmth coming from the inside.</Text>{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Must be some alien tech.</Text>
          {"\n"}
          {"\n"}Dendro picked up the Radium box then opened the ship’s hatch.{"\n"}
          {"\n"}Jake climbed up and walked to the edge of the wing. He dropped onto his bottom, slid forward, then spun himself around so he could hang onto the ship as he extended his body towards the ground. He then let go, dropping the few feet
          and hitting the earth, safely.{"\n"}
          {"\n"}Jake studied his surroundings. It was eerie being in an abandoned location like this, a place where so many people used to visit but was now utterly desolate.{"\n"}
          {"\n"}They headed for the barn-looking facility twenty feet away. One of its tall side doors was partially open. When he stepped inside it was pitch black, and he groaned, "It smells awful."{"\n"}
          {"\n"}“This? This is nothing. I once slept with a family of Zengagi Water Elephants on Limora for two weeks on a mission gone awry. Don’t complain," Dendro said in the darkness.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck is a Zengagi water elephant?</Text> Jake thought. A few moments later he heard Dendro place the Radium box on the ground and walk back out of the side door.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Where is he going?</Text> He heard Dendro walk back inside half a minute later, then heard jostling of something on the ground. A small fire ignited, lighting the room with its orange glow.
          {"\n"}
          {"\n"}“That’s more like it,” Dendro said.{"\n"}
          {"\n"}Jake peered around the structure as Dendro stepped away from the burning fire pit. They appeared to be standing in a half barn, half maintenance shed. Haystacks were nestled on the far side of the room. Near where they had entered was
          a garage door, leading out to the front of the facility.{"\n"}
          {"\n"}“What are you doing over there?” Jake shouted when he saw Dendro begin fidgeting with the valves on the wall.{"\n"}
          {"\n"}“I need a half hour before I begin the receiver regeneration process. Going to ice down the wings. Gotta see if these water lines still work,” Dendro said.<Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}Jake looked at the front wall. <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder if the front doors are unlocked?</Text> He walked over to them and pulled one of them open. When he looked outside, he could see that the full
          moon was still visible and a slight breeze was running through the trees. <Text style={{ fontFamily: "gelasibro-italic" }}>What's the harm in a little exploration?</Text> An adventure driven calm rushed over him, a temporary escape. He
          tiptoed out the door, across the grass in front of the building. Dendro didn’t seem to notice.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder if this path leads to the mountain?</Text> He looked back at the building for a moment.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Dendro is too busy to notice. I’ll only go for a minute.</Text> His intuition told him to turn left. As he walked, he stuck out his tongue to taste the snowfall. There was a rattle of a small
          animal rustling through the branches.{"\n"}
          {"\n"}Jake approached a clearing to his right. He examined the round-walled construction that was illuminated by the stars above. It’s <Text style={{ fontFamily: "gelasibro-italic" }}>an abandoned ice-skating rink!</Text> This was the
          opening Jake saw from the ship. It was slightly smaller than regulation size, but it was certainly large enough for guests to enjoy after a day out on the slopes. There was even a small wooden shack adjacent to it, with a sign that read:
          "Mountainous Waffles." His stomach rumbled. <Text style={{ fontFamily: "gelasibro-italic" }}>Wish that was still open,</Text> he thought.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe I’ll test out the rink later if we have time.</Text> He shifted his focus back to the forest road and continued walking.{"\n"}
          {"\n"}He passed a row of dilapidated cabins, and a short time later, he saw up ahead that the road exited the forest. He trekked on and exited the trees. He stood on the paved road looking out on the valley they flew over. To his right, he
          could see the imposing mountain and a bunch of large wooden buildings in the distance. The stars above him were captivating. Something about the full moon, the subtle, silent snowfall, and the abandoned compound made everything feel surreal
          and distant.{"\n"}
          {"\n"}Jake walked further ahead, pushing through an unlocked gate. He passed a wooden building on his right that read: "Your Local Chili Tavern." Through the windows he could see the chairs were all laid upside down on the tables.{"\n"}
          {"\n"}He soon approached a wooden lodge, which must have been the resort’s headquarters. Inside it was pitch black. <Text style={{ fontFamily: "gelasibro-italic" }}>Freaky</Text>. As he walked on, he looked up at the night sky. Had he been
          here before in a dream? In his mind, a garden creeped into view. He felt older. Much older. As if it were the end of time. It didn't make much sense. He caught sight of a bulging yellow dot in between a patch of stars. Was that Venus? Or
          was it just light?{"\n"}
          {"\n"}As he turned right onto the path which led up to the ski lifts, he spotted snow tubes scattered across the bottom of the bunny hill ahead of him. <Text style={{ fontFamily: "gelasibro-italic" }}>They look lonely</Text>, he thought.
          {"\n"}
          {"\n"}Jake walked up to the empty tubes laying in the snow and picked one up. It was half black, half white, resembling a donut. He cupped it in his arm and began jogging up the hill.{"\n"}
          {"\n"}When he got to the bunny hill summit, he did not hesitate. He took a running start, dropped the tube down on the snow, and then dove inside. He felt an adrenaline rush as he picked up speed, zipping down the short slope. After the
          first run, he ran back up the hill, and repeated the run. This time he had to steer around a few bumps in the powder. He hit an icy one which he could not avoid in time, shot up in the air and nearly face-planted.{"\n"}
          {"\n"}"Ahhhh!" Jake laughed and spat out snow.{"\n"}
          {"\n"}He got up and kicked the tube into the dark night. <Text style={{ fontFamily: "gelasibro-italic" }}>That was fun</Text>, he thought. <Text style={{ fontFamily: "gelasibro-italic" }}>But I should head back</Text>.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Dendro will be looking for me.</Text> He picked up his pace as he headed towards the forest road.{"\n"}
          {"\n"}When Jake entered the barn five minutes later, a thick hose ran from a valve on the wall out one of the side doors. As he stepped outside to find Dendro, he caught sight of the warrior’s powerful figure hosing down parts of the ship
          with the water line.{"\n"}
          {"\n"}“Getting the ice and dirt off our landing gear,” Dendro stated. “Just about complete.” He pulled the latch back on the hose nozzle and the flow of water ceased. Jake watched as water dripped off the underside of the wings and the
          bottom landing gear. A puddle formed near the bottom of the ship.{"\n"}
          {"\n"}“Always good to clean her off. Now let’s fix this receiver,” Dendro said. He rolled up his left sleeve and a rotating, light blue rendering of the ship appeared on his readout. He glanced at it for a moment, then walked to the fore of
          the craft.{"\n"}
          {"\n"}As Jake stood directly in front of the Sentauri Beacon, he was able to more carefully observe the fantastical machine. The black, sloping nose, the extreme curvature of the wings and the radar resistant metal–it almost appeared to be
          a living thing–a lonely creature that had evolved over millions of years to fly between the stars.{"\n"}
          {"\n"}A few moments later, something beeped and an airlock opened. A cylindrical object began to slide out of a slot on the top of the ship's nose. Dendro slowly pulled the heavy thing out from the opening. Twenty seconds later, he held the
          bulky cylinder upright in his arms.{"\n"}
          {"\n"}The receiver was bigger than Jake had imagined. It was his height in length and nearly a foot wide in diameter. Glass compartments containing sizzling plasma were positioned on the top and bottom of the device, and each held
          crisscrossing aluminum rods.{"\n"}
          {"\n"}“Let’s get this inside,” Dendro said. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>He headed for the barn with the cylindrical receiver against his chest. When he walked inside, he rested the device upright next to the
          fire.{"\n"}
          {"\n"}“Is this thing radioactive?” Jake asked.{"\n"}
          {"\n"}“Take this.” Dendro took two thin face masks from his robe pocket, put one on, and handed one to Jake. “The robe will protect everything else.”{"\n"}
          {"\n"}He hit something on his Lithium Radar read out, which caused a small aluminum panel in the center of the communications receiver to swing open. Dendro crouched to his knees to peer inside the machine. Jake slung the mask over his head
          and slid over next to Dendro.{"\n"}
          {"\n"}A small silver plate sat in the center of the chamber. On it, sat a cube, with large electrode prongs assembled to its left and right sides. <Text style={{ fontFamily: "gelasibro-italic" }}>Is that the radium?</Text> Jake thought.
          Gold foil lined the top of the compartment. A bunch of tangled wires sat at the bottom. When Jake looked closer, he could see that the cube was cracked on its diagonal.{"\n"}
          {"\n"}“That’ll do it,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Dendro said.{"\n"}
          {"\n"}Dendro delicately removed both electrodes, then removed the cracked cube from the chamber, and placed it on the ground.{"\n"}
          {"\n"}He got up and brought the radium crate over to the fire. He hit something on his Lithium Radar and it popped open. Inside the crate were a few small silver cubes sitting at the bottom. Dendro placed one of the cubes on the protruding
          silver plate and reassembled the electrodes. A few seconds later, LED lights on the front center of the cylinder turned solid green.{"\n"}
          {"\n"}“We should be good.” Dendro walked around the fire pit and picked up the laptop which he had apparently left on the floor when they first came inside. Dendro opened it up next to Jake, brought up an odd looking program, and tapped
          something on the keyboard. An instant later, the compartment on the communications receiver closed, and so did the metal radium crate. He looked at his Lithium Radar. “Weak force isolation in progress. T-minus thirty minutes until
          sustainable reaction energy is reached.” He paused. “If all goes well, we will have a functional receiver in under an hour.”{"\n"}
          {"\n"}Relief flushed over Jake. <Text style={{ fontFamily: "gelasibro-italic" }}>So, we are finally getting out of here.</Text> He looked back into the flames, pulled the mask off his face, and let the warmth of the fire wash over his skin.
          {"\n"}
          {"\n"}“Jake?” Dendro asked as he turned towards him. His black pupils reflected the orange flames. “Although everything is going according to plan, we still need to remain prepared for any danger that may come. It is always good to prepare
          for any unforeseen circumstances.”{"\n"}
          {"\n"}“What are you talking about?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake said slowly.{"\n"}
          {"\n"}Dendro removed his gloves, exposing his long, sharp nails. He rubbed them together in front of the fire. “I think it’s wise to train you on one more Utma Lesson. One, that when completed, will help you harness a Solar Forces Weapon. I
          know it sounds a bit much, but you have shown great promise as a learner.”{"\n"}
          {"\n"}“A Solar Forces weapon? Why would I need to harness a Solar Forces weapon?” Jake asked.{"\n"}
          {"\n"}“Because if danger presents itself again, you will be able to defend yourself. There is no time right now to give you any real weapons training. But this is at least <Text style={{ fontFamily: "gelasibro-italic" }}>something</Text>,
          if something does come,” Dendro said, stoically.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>“</Text>You're expecting danger? What am I going to do with a weapon? I can't fight.” An image of Dylan throwing him against the locker went through his mind. “The only battle I've ever won
          is in Fortnight. Besides, once we get this receiver up and running, and you communicate back to base, won’t I be going home?” Jake asked.{"\n"}
          {"\n"}“I do not expect any drama. But we must prepare for it. <Text style={{ fontFamily: "gelasibro-italic" }}>He who prepares, is always ready.</Text> It is a difficult situation we find ourselves in," Dendro responded. “I ask that you
          allow me to give you this Utma lesson for my own peace of mind.”{"\n"}
          {"\n"}Jake thought for a moment. The thought of learning more code was not a negative thing. Neither was obtaining another superpower. But would he ever extricate himself from this calamity? He thought for a few seconds. “Fine,” he
          responded. “But please promise me once we get word back to your base, you’ll take me home.”{"\n"}
          {"\n"}“I promise you, kid,” Dendro replied, nodding solemnly.{"\n"}
          {"\n"}“Alright,” Jake responded, “so, what am I learning? I already understand variables.”{"\n"}
          {"\n"}“There is much, much, more to this thing we call code. This lesson I'd like to commence is called Basic Control flow in Python.”{"\n"}
          {"\n"}“Control flow in Python?” Jake repeated.{"\n"}
          {"\n"}“Control flow allows us to grant the power of decision making to our programs. Oftentimes when we code, we have the need to give our program the ability to make a choice. This is where control flow comes in. It grants us the power to
          give our Python programs the ability to make decisions.”{"\n"}
          {"\n"}“Why would our program need to make a decision?”{"\n"}
          {"\n"}“Almost all useful programs need the ability to make choices. For example, think of the code that operates a vending machine. When a user selects a drink, the program must choose which drink to dispense based on which drink was
          chosen. If the user selects Drink A, then the software must tell the machine to dispense Drink A, but if the user selects Drink B, then the software must tell the machine to dispense Drink B. You wouldn't want to get the wrong drink, would
          you? Many choices in computer programs take the form of: if this, then that.”{"\n"}
          {"\n"}“That makes sense, I just never imagined it as a decision though. I guess it is, in a way…the program is making a decision <Text style={{ fontFamily: "gelasibro-italic" }}>based</Text> on the user’s decision, or input,” Jake said.” He
          thought of Nassir's robot turning right and left on the grass at Allen Park as the gizmo took commands from the RC controller.{"\n"}
          {"\n"}“Then how do you implement decisions in Python?” Jake asked, eagerly.{"\n"}
          {"\n"}“We use something called an <Text style={{ fontFamily: "gelasibro-italic" }}>if statement</Text>,”said Dendro. “An if statement is called a conditional statement.{"\n"}
          {"\n"}“A <Text style={{ fontFamily: "gelasibro-italic" }}>what</Text>?” Jake asked.{"\n"}
          {"\n"}“A conditional <Text style={{ fontFamily: "gelasibro-italic" }}>if statement</Text>. It is a block of code that only fires if a certain <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text> is True.” Dendro opened his
          laptop and pulled up his purple code editor application. He pulled up a file named <Text style={{ fontFamily: "gelasibro-italic" }}>practice.py</Text> and began typing.{"\n"}
          {"\n"}“So, there is something actually called an <Text style={{ fontFamily: "gelasibro-italic" }}>if statement</Text>, but what is an <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text>?”{"\n"}
          {"\n"}“You have a keen mind to spot the concepts you are not familiar with yet. You should be proud of that–there is great potential in you as a pupil,” Dendro uttered. “Understanding the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text> is both critical to life and to this lesson. Allow me to explain briefly as we do not have much time. An <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text>{" "}
          is a piece of code, that when computed, ends up simplified to only one single value.” Dendro typed something into the application. “When I say computed, I mean finding the result of a mathematical operation.”{"\n"}
          {"\n"}“Here, take a look. The <Text style={{ color: "#0C2443", fontFamily: "code" }}>3 + 3</Text> you see written in our editor here is an example of an expression in code. This is because it simplifies to 6, a singular value,” explained
          Dendro.{"\n"}
          {"\n"}Jake looked at the screen. “Ok, I see. You just added the numbers.”{"\n"}
          {"\n"}“Yes, in programming, math <Text style={{ fontFamily: "gelasibro-italic" }}>and</Text> logic are interconnected,” Dendro replied.{"\n"}
          {"\n"}“So then 9 + 10 + 11 + 100 would also be an expression?” Jake inquired.{"\n"}
          {"\n"}“Yes, it evaluates to <Text style={{ fontFamily: "gelasibro-italic" }}>one</Text> value, 130,” Dendro responded.{"\n"}
          {"\n"}“An expression doesn’t seem <Text style={{ fontFamily: "gelasibro-italic" }}>that</Text> hard to understand,” Jake said.{"\n"}
          {"\n"}“It's not. <Text style={{ fontFamily: "gelasibro-italic" }}>Nothing</Text> really is. It's just a matter of having the right teacher,” Dendro replied, with a smile.{"\n"}
          {"\n"}Dendro pointed to the laptop screen. “The counterpart to the expression, is the <Text style={{ fontFamily: "gelasibro-italic" }}>statement</Text>.” Dendro deleted the previous line and began typing in something different. “A{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>statement</Text> is a piece of code that <Text style={{ fontFamily: "gelasibro-italic" }}>directs</Text> something. It represents an action or a command to be carried out. A statement does
          not evaluate to a singular value. For example, looking at our screen here, <Text style={{ color: "#0C2443", fontFamily: "code" }}>cat = 4</Text> is a statement. It is a command telling the computer to set the value of a variable named{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>cat</Text> to the number four, however <Text style={{ fontFamily: "gelasibro-italic" }}>it does not</Text> simplify down to a singular value. All, and I mean{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>all</Text> of code, is a combination of just expressions and statements,” Dendro said.{"\n"}
          {"\n"}Jake thought for a moment. “So I know everything now?” Jake said, kidding. He felt the urge to discuss this with Nassir.{"\n"}
          {"\n"}Dendro chuckled. “Not quite. But all masters are masters of the fundamentals of their field. The spiritual leaders teach us this in the Forces,” Dendro said. “But you are moving in the right direction. One very important thing is that
          although expressions can simplify down to a single number, they can also evaluate down to other singular things, like a boolean value of <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text> or{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>.”{"\n"}
          {"\n"}Jake looked at him, puzzled.{"\n"}
          {"\n"}“Look here.” Dendro deleted the previous code and wrote a new line on the screen.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_1.png")} />
        </View>
        {/* <Caption>(Dendro's Code Editor)</Caption> */}

        {
          // Section 2 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Jake squinted. “What is that double equals sign?”{"\n"}
          {"\n"}“The double equals sign <Text style={{ color: "#0C2443", fontFamily: "code" }}>==</Text> is what we call a <Text style={{ fontFamily: "gelasibro-italic" }}>comparison operator</Text>. It compares two values against each other and then
          spits out a singular <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text> or <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text> value. The double equals sign in Python is called the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>equality operator</Text>. It determines if two values are equivalent. The less than <Text style={{ color: "#0C2443", fontFamily: "code" }}>{"<"}</Text> and greater than{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>{">"}</Text> characters are also comparison operators,” Dendro said.{"\n"}
          {"\n"}“So these symbols are like math,” Jake replied.{"\n"}
          {"\n"}“Yes. Now look here closely again. Based on what I just said, what do you think this code, this <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text>, simplifies down to?” Dendro said. “Remember, comparison operators,
          like our double equals sign, compare two things, and then spit out a singular <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text> or <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text> value.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_1.png")} />
        </View>
        <Caption>An expression in Python.</Caption>

        {
          // Section 3 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Jake looked back at the screen and the blue characters. “Um. I'm not sure. Wait. It's asking <Text style={{ fontFamily: "gelasibro-italic" }}>if three equals four</Text>?”{"\n"}
          {"\n"}“Yes. Your line of thinking is correct. Don't let the fact you're doing something for the first time get in the way of your thought process,” Dendro said.{"\n"}
          {"\n"}Jake thought for a moment. “This <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text> will simplify down to <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>? Because three does not equal four?” Jake
          asked, sheepishly.{"\n"}
          {"\n"}“Precisely. This expression <Text style={{ color: "#0C2443", fontFamily: "code" }}>3 == 4</Text> will always be simplified by Python down to <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>. You are getting the
          gist, kid. Now this brings us back to the <Text style={{ fontFamily: "gelasibro-italic" }}>if statement</Text>. I mentioned before that an <Text style={{ fontFamily: "gelasibro-italic" }}>if statement</Text> runs a piece of code{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>only</Text> if its corresponding <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text> is equal to <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>. Take a look
          at the following example.” Dendro typed something, then turned the laptop towards Jake.{"\n"}
          {"\n"}“If 2 equals 2?” Jake asked, bewildered.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_2.png")} />
        </View>
        <Caption>The if-statement's code block will only run if its expression is True.</Caption>

        {
          // Section 4 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Yes. This example here is a bit silly, as two will always equal two, but it demonstrates how the if statement works. Any code we place in the <Text style={{ fontFamily: "gelasibro-italic" }}>if statement code block</Text>, which is{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>indented</Text> below in Python, will run because <Text style={{ color: "#0C2443", fontFamily: "code" }}>2 == 2</Text> always simplifies down to{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>. So no matter what code we put in the if statement code block, in this scenario, it will always run. We can use a{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>#</Text> sign to leave a comment in our code—this is a text-based comment that is ignored by Python. It's used to allow for coders to take notes within their code. Leaving these
          comments regularly in our code, or documenting what each step in our program does, is one of the most important things we can do as coders,” Dendro said.{"\n"}
          {"\n"}Jake thought for a moment as he peered at lines one and two. “I think I get it. You’re showing how the if-statement works. The statement on line one evaluates to <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>, so
          whatever code goes indented below it will fire. And comments seem useful. I think I understand,” Jake said. “It’s pretty simple. If the expression is <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>, the code in the
          indented block runs. If it's <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>, it does not run.”{"\n"}
          {"\n"}“Affirmative. If we modified the if-statement expression to something that evaluated to <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>, like <Text style={{ color: "#0C2443", fontFamily: "code" }}>2 == 3</Text> the
          code in the if-statement block would not run.”{"\n"}
          {"\n"}Jake thought about it for a moment and nodded. The concept made sense to him.{"\n"}
          {"\n"}“Allow me to show you another, more visual example,” Dendro said. He typed something else into the code editor.{"\n"}
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
          “What is <Text style={{ fontFamily: "gelasibro-italic" }}>print</Text>?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake asked, confused.{"\n"}
          {"\n"}Dendro pointed to line two. “This <Text style={{ color: "#0C2443", fontFamily: "code" }}>print()</Text> command is a tool that the Python creator made to let us see the results of our Python code more easily.{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>Print()</Text> is a function that displays selected pieces of our program on our screen. You have not received formal training in functions yet, but for now know that functions are
          prewritten commands that we can store and trigger whenever we want. Anytime we want to display a message or display the value of something like a variable to our screen, we can use{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>print()</Text>. It is extremely useful when we want to understand what's happening inside of our code. See here.”
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_4.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 6 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          If we ran this code, <Text style={{ color: "#0C2443", fontFamily: "code" }}>‘dog’</Text> would print out on our screen. He scrolled down.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_5.png")} />
        </View>
        <Caption>Print allows us to SEE the value of anything in our program.</Caption>

        {
          // Section 7 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “This will display <Text style={{ color: "#0C2443", fontFamily: "code" }}>2</Text> to our screen. We can display the value of variables—nearly anything we choose using <Text style={{ color: "#0C2443", fontFamily: "code" }}>print()</Text>.”
          {"\n"}
          {"\n"}“That's cool. So on line two print would display the value of the variable cat,” Jake said.{"\n"}
          {"\n"}“Yes. As our programs get larger, and more steps are involved, printing allows us to trace through the results of each individual step in our code. This is essential, because as we begin to learn coding, we have the tendency to write
          all of the coding steps necessary to solve a problem before we test any of the individual lines. We must print the results of each step to see if each line is working as intended. We all learn the hard way that not printing out the results
          of each step to our screen is usually an awful way to do things. It is much more effective to ensure that the first step and second step in our program crunch data as intended before we write steps three through ten. Print allows us to see
          how information moves through the program, and it allows us to see visually if things are working properly,” Dendro said.{"\n"}
          {"\n"}“It’s kind of like being more diligent with your work? My mom is always telling me that,” said Jake.{"\n"}
          {"\n"}“You could look at it like that. Programming is a lot like plumbing. We are moving information through a series of unique steps, and oftentimes, each step modifies the information we are working with. We have to make sure the
          information is in the right form before we pass it to the next step in our process. This is the power of <Text style={{ color: "#0C2443", fontFamily: "code" }}>print()</Text>. We can visualize what our information looks like after each
          step. Take a look at this.” Dendro punched some keys on the keyboard and a small window popped up on the bottom of the code editor. It had a blinking cursor next to the left margin.{"\n"}
          {"\n"}“What's that thing?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake asked<Text style={{ fontFamily: "gelasibro-italic" }}>. “</Text>That looks more matrixy.”{"\n"}
          {"\n"}“This is our computer's Terminal,” Dendro said.{"\n"}
          {"\n"}Jake looked at him wide-eyed.{"\n"}
          {"\n"}“Don't be intimidated by it. You can even customize the colors.” Dendro stuck his tongue out. “It is a graphical interface programmers can use to talk more intimately with our computer, and for our computer to talk to us. It’s where
          we as coders tell Python to run our program, when we’re ready.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Interesting.</Text> Jake looked back at the code editor. Dendro brought up the if-statement he wrote a few moments ago.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_3.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 8 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Watch what happens when I officially run our Python file, <Text style={{ fontFamily: "gelasibro-italic" }}>practice.py</Text>, on our computer. Keep your eye on the terminal window.”{"\n"}
          {"\n"}Jake watched as Dendro's thick fingers typed <Text style={{ color: "#0C2443", fontFamily: "code" }}>python3 practice.py</Text> next to the cursor blinking on the terminal before he hit the enter key.
        </Text>

        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={450} radius={"none"} source={require("./../../assets/images/lessons/lesson3_addin1.png")} />
        </View>
        <Caption>
          The terminal is where we tell the Python program (the fancy term is "Python interpreter") to process our Python file. Most code editors allow us to access the terminal from within the editor. Recognize the terminal is a seperate program
          that speaks to the innards of the computer. When we run our Python code from the terminal - what we're saying is "operating system...please use the python program to process this file."
        </Caption>

        <Text style={BookStyles.bookFont}>
          “When we wish to run a Python program, we type in <Text style={{ fontFamily: "gelasibro-italic" }}>Python3</Text> and the name of the file we wish to run, assuming Python is installed on your machine, and that our terminal is toggled into
          the folder our file is saved in. So it’s clear, the terminal runs commands inside a specific folder on our computer.” Dendro hit the enter key. “We use <Text style={{ fontFamily: "gelasibro-italic" }}>Python3</Text> to indicate the version
          of Python we have installed on our machine.”{"\n"}
          {"\n"}The terminal cursor dropped down a line and displayed:  <Text style={{ color: "#0C2443", fontFamily: "code" }}>"This code block is running!</Text>"{"\n"}
        </Text>

        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={450} radius={"none"} source={require("./../../assets/images/lessons/lesson3_addin2.png")} />
        </View>
        <Caption>The results of print are displayed inside the computer's terminal.</Caption>

        <Text style={BookStyles.bookFont}>
          {"\n"}Jake looked at the if-statement then back at the message. “The if-statement's code block fired because the if statement's expression is true, <Text style={{ color: "#0C2443", fontFamily: "code" }}>2 == 2</Text>!” Jake blurted out.
          “That's so cool when you actually see it. So the terminal is where the print function displays its output?”{"\n"}
          {"\n"}“Precisely,” Dendro replied. “Now I will make a small modification.”
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_6.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 9 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Dendro typed in <Text style={{ color: "#0C2443", fontFamily: "code" }}>python3 practice.py</Text>, then hit enter. The cursor dropped a line and blinked, but nothing appeared next to it.{"\n"}
          {"\n"}“In this case, nothing will be displayed to the screen, because the if statement evaluates to <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text>,” Dendro said.{"\n"}
          {"\n"}“I get it,” Jake said, confidently.{"\n"}
          {"\n"}“We can build some powerful programs with these basic tools,” Dendro explained. “Here, why don't you help me with something?” Dendro opened a different file named{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>flaps_control.py</Text>. “I have the ability to upload a program to our ship computer that enables us to better control our wing flaps. One issue I have been facing in your Earth's atmosphere
          is the unpredictable wind speed. It’s about time we gave our flap settings the ability to adjust to the wind speed. Our flaps can either be on or off, and we can control that with this code here. I never finished writing the program,”
          Dendro explained.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson3_7.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 10 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Right now, a few lines above which you cannot see easily because this file is quite large, a <Text style={{ color: "#0C2443", fontFamily: "code" }}>windspeed</Text> variable I created will be updated every 5 seconds when the ship is in
          flight. You can see that the code here automatically sets the flaps to <Text style={{ color: "#0C2443", fontFamily: "code" }}>False</Text> every time this code runs. But why don't you try to adjust this code so that{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>if</Text> the <Text style={{ color: "#0C2443", fontFamily: "code" }}>windspeed</Text> is above 100 kilometers per hour, we turn the flaps on? Note, lines 2 and 4 were left blank to make the
          code easier to read.{"\n"}
          {"\n"}“You want me to configure something for the ship? Are you crazy?” Jake asked incredulously.{"\n"}
          {"\n"}“Take a try. I will guide you if needed,” Dendro said.{"\n"}
          {"\n"}Jake couldn't believe Dendro was asking him to configure something that would affect how the ship flew. He let the anxiety pass and he then looked at the screen.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This code runs every five seconds</Text>, he thought. <Text style={{ fontFamily: "gelasibro-italic" }}>But what do we want to execute?</Text> He concentrated for a couple of minutes.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>We want to change the flaps to on, to</Text> <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}>, if the windspeed is greater than 100 kilometers per hour. IF. I think I see it now. I guess I can use another comparison symbol? And I have to remember to indent the statement.</Text>
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
          “Like this?” Jake asked.  “We use the greater than <Text style={{ fontFamily: "gelasibro-italic" }}>comparison operator</Text> <Text style={{ color: "#0C2443", fontFamily: "code" }}>{">"}</Text>, and if the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>expression</Text> <Text style={{ color: "#0C2443", fontFamily: "code" }}>windspeed {">"} 100</Text> evaluates to <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>, we set the{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>flaps</Text> variable to <Text style={{ color: "#0C2443", fontFamily: "code" }}>True</Text>.{"\n"}
          {"\n"}“Precisely.” Dendro gave Jake a friendly tap on the back. “That is excellent, my young friend.” Dendro saved the file. “You missed the colon <Text style={{ color: "#0C2443", fontFamily: "code" }}>:</Text> after the{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>if windspeed {">"} 100</Text>, which closes our if statement expression, but otherwise perfect. This should improve our flight performance. Now, every five seconds this code will run,
          and if the windspeed is over 100 kilometers per hour, the flaps will turn on. You see, digging deeper into this topic was not so bad, was it? I remember a spiritual teacher of ours once said,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>‘There are many layers to things. As we peel back the onion, we become wiser, and when we learn, there should never be a reason to fear the unlayering of these new elements.</Text>’”{"\n"}
          {"\n"}“That’s a good saying,” Jake agreed.{"\n"}
          {"\n"}“You now have a general understanding of Python conditionals. There are smaller tidbits of information you will learn later, like the <Text style={{ color: "#0C2443", fontFamily: "code" }}>else</Text> statement, which is really just a
          fancier way to write another if statement, but this is a good start,” Dendro said encouragingly.{"\n"}
          {"\n"}Jake was excited about his newfound knowledge. He then felt an intense heat wave, a burning sensation, pulsate through his body. He pushed himself back in alarm before he remembered.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Ah.</Text> He rolled up his sleeve. A marking that looked like an upside down <Text style={{ fontFamily: "gelasibro-italic" }}>7</Text> was imprinted just a centimeter from the first marking.
          He ran his fingers over the mark. It was a tattoo, but deeper. Like a branding. <Text style={{ fontFamily: "gelasibro-italic" }}>My mom’s gonna kill me.</Text>
          {"\n"}
          {"\n"}“You now have been granted the power of <Text style={{ fontFamily: "gelasibro-italic" }}>Zegmu</Text>, or Weapon’s harnessing in the common tongue,” Dendro uttered.{"\n"}
          {"\n"}“That’s cool,” Jake said as he looked at the marking. <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe I am my father’s son</Text>. “But when do I get to use it?” He was still skeptical of his new powers, even if he had been
          impressed when he saw Dendro harness them.{"\n"}
          {"\n"}“Hopefully never.” Dendro winked at him. “But the learning shall stay with you.”{"\n"}
          {"\n"}Three beeps echoed from Dendro’s sleeve. “Ay. The receiver is online, what do you know,” Dendro said excitedly. “I’ll be right back.” He picked up the laptop and the receiver and headed outside. He came back a minute later tapping his
          Lithium Radar. “Captain to base. Captain to base. Atmosphera, do you copy? Comms back online. I repeat comms back online.” He repeated the sequence a few more times, but after waiting a few minutes, there was no response. Dendro continued
          to tap on the screen, speaking different commands into it. A pit began to grow in Jake’s stomach. A few attempts later, Dendro sat back down near the fire and stared down into it.{"\n"}
          {"\n"}“What is happening?” Jake asked nervously.{"\n"}
          {"\n"}Dendro’s eyes focused on the fire. “I am not receiving a response. Lithium radar confirms the receiver is online and functional. It’s as if the actual communication satellites have gone down. Could they have…? Is it even possible? Our
          military lines haven’t gone down since they went online over a thousand years ago.”{"\n"}
          {"\n"}“Can we try again in a few minutes?” Jake asked eagerly, but a high-pitched ringtone came from Dendro’s arm.{"\n"}
          {"\n"}Dendro’s eyes immediately lit up. “My low band receiver? Who could be calling me here, in the Earth system?” He rolled up his sleeve again to look at the screen. Jake caught a glimpse of the read out.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>“⋉⟟⋔⋔⟒⍀ ☊⏃⌰⌰⟟⋏☌”</Text>
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>“Zimmer is calling on low band receiver.”</Text>
          {"\n"}
          {"\n"}“Zimmer?” Dendro asked, skeptically. “What the heck?”{"\n"}
          {"\n"}He pressed a button on his screen, apparently setting it into speaker mode.{"\n"}
          {"\n"}“Hello?” Dendro said. His eyebrows furled.{"\n"}
          {"\n"}“Dendrooooo, buddddayyyyyyyyy, how are ya? You’re alive, I see. That’s good. Very good. I was a bit worried after seeing you in that state. I couldn’t open that darn ship! Then a Vagabond II Stealth Fighter popped up on my tail! I had
          to pop you out,” a drunk-sounding voice shouted through the phone.{"\n"}
          {"\n"}Dendro looked deeply confused. “Pop me out? Where are you? You are in-system?”{"\n"}
          {"\n"}The voice on the other end replied, partially slurring the words. “I’mmm on the same planettt as you bud.”{"\n"}
          {"\n"}“How?” Dendro contorted his face. “How is this possible?”{"\n"}
          {"\n"}“I broughttt you hereee, mann,” the voice responded. Background music came through the other end of the call.{"\n"}
          {"\n"}“You brought me here? Do you even know where I am?” Dendro said.{"\n"}
          {"\n"}“Yes. You were on the Gravitas, my freighter baby. I picked you up in the belt,” the deep voice hollered. The thumping dance music playing in the background was getting louder.{"\n"}
          {"\n"}“You found me <Text style={{ fontFamily: "gelasibro-italic" }}>after</Text> the battle? But how could you have known?” Dendro asked, his face contorting.{"\n"}
          {"\n"}“I cannot say more over the phone, old friend,” the voice responded. The dance music pulsated in the background.{"\n"}
          {"\n"}“Where are you? I need to get to you. I need to understand what happened. The military comms lines appear to be down everywhere,” Dendro said.{"\n"}
          {"\n"}“I’m in Casablanca,” the voice responded.{"\n"}
          {"\n"}“Casablanca?” Dendro asked.{"\n"}
          {"\n"}“Coordinates coming your way. I have a place you can use,” the voice said. “See you soon, buddy!”{"\n"}
          {"\n"}“But—” Another sound echoed through the line, cutting Dendro off{"\n"}
          {"\n"}“Zimmer, come here, baby!” a female voice pleaded through the phone. Then more thumping dance music began to play on the other end of the line. Then some laughter. Then the connection cut off.{"\n"}
          {"\n"}Dendro looked at his arm again. An incoming message appeared.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>“⋉⟟⋔⋔⟒⍀ ☊⟟⋏☌”</Text>
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>“33.5731° N, 7.5898° W”</Text>
          {"\n"}
          {"\n"}“That <Text style={{ fontFamily: "gelasibro-italic" }}>freaking</Text> guy!” Dendro shot up and put his hands on his hips. He shook his head. “He has the nerve to hang up.” Dendro tapped his arm-screen and appeared to call the number
          back, but there was no answer.{"\n"}
          {"\n"}“Who is Zimmer?” Jake asked.{"\n"}
          {"\n"}“Zimmer Rexus. He’s an old friend. We served in the Solar Forces together, until he left suddenly.” Dendro began to pace around the room. “He brought me here? How is that possible? Did he find me in the belt? But how could he have
          known?” Dendro paced nervously around the fire-lit room. “We have no choice. We must leave now for Casablanca. If the communication lines are down, then we are in more danger than I realized. And you are coming with me, kid.”{"\n"}
          {"\n"}“You’re not serious? Casablanca? Isn't that on the other side of the world?” Jake asked. “My family doesn’t even know where I am. I have to get home.”{"\n"}
          {"\n"}“It is too dangerous right now,” Dendro said.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What does he think could happen!?</Text> “But how long will this take?” Jake asked. The prospect of more adventure, more escape from his existing world, crept into his mind. It had a unique
          power to alleviate pain. <Text style={{ fontFamily: "gelasibro-italic" }}>Don’t think like that,</Text> Jake thought.{"\n"}
          {"\n"}“I do not know. I cannot make you any more promises. The ship can get us there in hours. From there, we will meet with Zimmer. Hopefully he will have information to guide us <Text style={{ fontFamily: "gelasibro-italic" }}>both</Text>{" "}
          home safely,” Dendro said. “I know your mother will be worried sick. But I will do everything I can to make that temporary.”{"\n"}
          {"\n"}Jake sat there, looking at the ground. His thoughts began to race. Would he ever get home? <Text style={{ fontFamily: "gelasibro-italic" }}></Text> And even more disturbing,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Why did a part of him ache to make the journey across the world to a place he had never seen before?</Text>
          {"\n"}
          {"\n"}There was a loud rattling of cracking tree branches off in the distance. The ground vibrated. Some of the dirt on the ground kicked up into the air.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What’s going on?</Text> Jake thought. He looked at Dendro.{"\n"}
          {"\n"}The warrior hustled out the front door. Jake’s heart pounded. Dendro stepped back in a few seconds later. “They are here. The Venthum. Most likely a search and destroy battalion. Lithium radar is picking up unidentified infrared
          radiation. They may have caught our molecular dispersion trail. Or intercepted a communication signal. Not good.” Dendro patted down his man-bun. “This has been a weakness of The Forces as of late; we don’t understand their technological
          developments well enough,” Dendro said, sullenly. “We need a plan and we need to act quickly if we want to live.”{"\n"}
          {"\n"}Jake sat there dumbfounded as he watched Dendro pause, look downward, and close his eyes.{"\n"}
          {"\n"}“What are you doing?” Jake exclaimed.{"\n"}
          {"\n"}Dendro looked up and opened his eyes. “We need a distraction. I am going to set the barn on fire.”{"\n"}
          {"\n"}“This place...on fire?” Jake repeated. Sneaking through the factory had been terrifying. But aliens coming for them with one intention, to kill them, was a different level of fear entirely. Jake’s legs began to quiver, even as he sat.
          The urge to throw up formed in his gut. “Why set this on fire? Please, let’s run, or take the ship. I can’t fight. I want to live.”{"\n"}
          {"\n"}“You will live if you follow my directions,” Dendro said tersely. “The fire will give us a chance to throw off their thermographic cameras. This could help break apart their initial formation.  We do not want to take flight. We will
          be too vulnerable. If they are on the ground now, we have a chance to defeat them and escape before backup arrives. We have no time.”{"\n"}
          {"\n"}Jake looked out the side entrance of the barn. “But why can’t we just run?” Jake pleaded. “I am no use in a fight. And how can you take on a whole squadron by yourself?”{"\n"}
          {"\n"}“We must try. Fleeing will be useless. They will sniff us out,” Dendro said. “We must do what we can to defeat them here, on the ground.”{"\n"}
          {"\n"}Jake began to shiver uncontrollably. Dizziness overcame him, his legs gave out, and he collapsed onto the ground. Then he closed his eyes and waited for Jimmy to wake him.{"\n"}
          {"\n"}A moment later someone pulled him up.{"\n"}
          {"\n"}“I don’t know what to tell you, my five-and-a-half-foot friend. Find your courage now, and you may be able to see your family again,” Dendro said.{"\n"}
          {"\n"}Jake stood there on his wobbly footing, still trembling, but a few moments later his mother flashed through his mind and his senses came back to him. The nausea subsided. It wasn’t a dream or a fairy tale. His survival instincts had
          kicked in. He had to see his mom and brother again. He straightened his back and peered at Dendro.{"\n"}
          {"\n"}“There you go. Now here’s what I need you to do.”
        </Text>
      </View>
    );
  }
}
