import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import GlossaryWord from "../Glossary/inline/GlossaryWord";

interface IProps {
  toggleGlossary: (id: string) => void;
}

export default class Chapter4 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 3</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://t4.ftcdn.net/jpg/02/47/42/81/360_F_247428197_wpaAVCuxUrlf43AW6WkBH2Z4D62cY95L.jpg`,
            }}
          />
        </View>
        {
          // Section 1 Below
        }
        <Text style={BookStyles.bookFont}>
          The creature stared directly at him, its yellowish silver eyes blinking every few moments.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>It looks like a cut demon</Text>, Jake thought, as his body began to vibrate. His body told him to run, and that’s exactly what he did. He turned around and sprinted, but he immediately
          tripped on a thick piece of rubble, falling hard on his right arm, then rolled over onto his rear and pushed himself back up. As the dirt fell off him, he noticed his forearm was bleeding.{"\n"}
          {"\n"}As the creature stepped forward, he could more clearly make out its slightly uplifted nose, strong angled jaw, and intricately  formed pointed ears. Jake felt a sensation of paralysis come over him.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Body, work please.</Text> The thing appeared to have a ponytail perfectly arranged on top of its partially shaved head.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How can it be that perfect after being in that hole?</Text> Its skin appeared to be grey. A round silver orb, on a long silver chain, hung from its neck. And the eyes. The glowing yellow eyes
          seemed to cut straight through Jake.{"\n"}
          {"\n"}He backpedaled slowly.{"\n"}
          {"\n"}The creature put its hand up again, apparently to signal to him to hold on for a moment.{"\n"}
          {"\n"}“What is your name?”, the creature asked in a gravelly voice. It wiped the dirt off its legs and dark boots. A wide belt wound around its body and on it were all sorts of mysterious things: something that looked like a pair of
          grenades, a dagger, and most noticeably, a treacherous golden axe.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>It’s speaking to me?</Text> He shivered violently. <Text style={{ fontFamily: "gelasibro-italic" }}>“What isIs this thing...a warrior alien? I’m tripping.”</Text>
          {"\n"}
          {"\n"}“It is easier to speak if I know your name,” the creature said tonelessly. Jake examined the silvery armor protruding off its leather vest which covered the front segment of its shoulders.{"\n"}
          {"\n"}“My my name is JJJJake,” he said.{"\n"}
          {"\n"}“How did you get to me here?” it asked. Jake looked more closely at the intense markings on its arms. There almost appeared to be branded tattoos lining his muscles. The creature did not look old, quite young in fact, as if it were in
          its late twenties or early thirties in human years.{"\n"}
          {"\n"}“I was..I was following a scent...I fell asleep...I walked through the..the alley....”, Jake responded as his body continued to quiver.{"\n"}
          {"\n"}The creature turned and pointed. “I was unconcsious in that hole for almost twenty-four local hours. I do not understand how I got here.” It looked up towards the sky. Jake noticed a badge with some kind of golden threaded spaceship
          looking emblem on the silver left shoulder plate.{"\n"}
          {"\n"}There was no doubt he was being spoken to by something that was not  human. It couldn’t be. The creature exited its trance and turned over its left arm, exposing a glowing light green screen that appeared to be built into its flesh
          and spoke: “Comms. Crash confirmed. Whereabouts unknown. Vital signs are strong, what is our status? Requesting information and aid.”{"\n"}
          {"\n"}It has a phone in its arm? <Text style={{ fontFamily: "gelasibro-italic" }}>Jake thought.</Text>
          {"\n"}
          {"\n"}The creature waited for a response, but there was no answer. It repeated the message again into the screen. Nothing.{"\n"}
          {"\n"}It tilted its head towards the night sky, then towards his smoking ship, and then back to Jake.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How could this creature speak English?</Text> Jake thought.{"\n"}
          {"\n"}“You mean to tell me you just stumbled into this field?” The being said.{"\n"}
          {"\n"}“Ye, yes, well, no, I smelled smoke, I was heading home”, Jake said as his teeth chattered. “Whatt..whatt the heck...are...you dude?”{"\n"}
          {"\n"}“What am I? I am a Gobharim from Naronia.” The creature wiped some dirt from its eyelids.{"\n"}
          {"\n"}“What? A what?” Jake asked. He thought about running again.{"\n"}
          {"\n"}The creature did not respond; instead it looked upward, with a pondering expression. Then it appeared to swipe through something on the screen built into its arm. A few moments later, It tapped something in frustration, as if the
          display were not working. A few seconds later it spoke again. “Our Delta One Death Cruiser. It was hit. Our captain. He lost control. We went into full electrostatic tumble. It was an ambush. How could we not see it? The Larhadian Asteroid
          Belt. Venthum forces. Three million light years away? They went full-stealth, we’ve never seen it happen in fifteen millennia,” the creature said as it peered up at the sky again. "How can this be? How can I possibly be here?"{"\n"}
          {"\n"}“You come from space?” Jake asked tremulously.{"\n"}
          {"\n"}“We all come from space. But yes, I am from a galaxy foreign <Text style={{ fontFamily: "gelasibro-italic" }}>to</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>you,</Text> known as The Nestomir. It is a spiroid  galaxy a few
          million light years away from here, apparently,” the creature responded in its rough, though human-like voice.{"\n"}
          {"\n"}“The Nestomir?”Jake responded instinctively.{"\n"}
          {"\n"}"We lost our right-wing,” the creature blurted out, in an aggravated tone. “I have no booster. I could not have gotten here alone.”{"\n"}
          {"\n"}Jake paused for a second. He began to feel extremely dizzy.{"\n"}
          {"\n"}"I don't know what this is or where I am. I think I'm sick. I need my mother. Mom! Diana! I am hallucinating! I need that depression medicine Aunt Holly takes! I have been playing too many video games. Never again. I swear!"Jake cried
          in terror. He closed his eyes waiting for something, or someone to wake him up from this obvious dream.{"\n"}
          {"\n"}He opened his eyes again, but he was still in the pit.{"\n"}
          {"\n"}The creature peered at him. "I must get back to base. The Venthum, our enemy, is cunning. They will be sweeping all the known systems by now, even if they have limited resources in these regions. How did I get here? No response from
          ground comms–I’ve never experienced that before. Something's very wrong." The creature’s yellow eyes flickered. “My Lithium Radar does not make mistakes.” It flipped over its left forearm again. The screen appeared to display some sort of
          starmap. “It confirms: I am in the Nilofar System, Eta Omega, in the local tongue, The Milky Way, on an aquatic centric planet called Earth.”{"\n"}
          {"\n"}"Yess, the Earth, you are on Earth," Jake said. "How...how, how do you speak English?!, Jake exclaimed, feeling sick. He was still trembling and thinking of sprinting for his life again.{"\n"}
          {"\n"}"Our Naronian forefathers mapped these far eastern systems many years ago. All sentient species in The Nestomir have evolved over thousands of years to interpret language and dialects based on a wave signal all life forms give off,
          called the Utma. That's how I can speak your tongue, and many others," the creature said.{"\n"}
          {"\n"}"So you..you are..really an alien?" Jake blurted out in fear.{"\n"}
          {"\n"}"Affirmative. From the glorious planet of Naronia,” the warrior thing responded.{"\n"}
          {"\n"}"Naronia?" Jake asked in bewilderment.{"\n"}
          {"\n"}"Yes. Though my ancestors are from a planet called Gobhar, which was destroyed thousands of years ago,” it said.{"\n"}
          {"\n"}The creature stared back up at the night sky. “Stay here for a moment. Do not move son. Understood?”, the creature commanded.{"\n"}
          {"\n"}“Ohh ok,” Jake replied.{"\n"}
          {"\n"}Jake watched as the thing shuffled towards the ship. <Text style={{ fontFamily: "gelasibro-italic" }}>What have I done?</Text> It took a lap around the perimeter of the crash site. It was clear now that the flying-thing was in fact a
          spaceship. The front of it was the side facing away from him, and was partially buried in the ground. The ship’s rear was sticking up in the air, facing Jake. He watched as the creature ran its hands across certain edges and panels of the
          otherworldly machine. It climbed up onto the top back of the machine, popped open a hatch, then slipped down it.{"\n"}
          {"\n"}Jake stood there; his body was still trembling.{"\n"}
          {"\n"}A short time later, the alien jumped back up the hatch carrying a gigantic metal chain, went to the underside of the ship, snapped it on somewhere, then carried the links back towards the center of the pit.{"\n"}
          {"\n"}The creature stood for a moment holding the chain in its gloved hands, then it looked upward and closed its eyes, as if it were meditating, and its thick boots began to dig into the earth.  It wrapped the chain around its upper body
          tightly, crouched forward, and its legs drove forward with all of its might.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>VA NA MA NA VASOI.</Text> It’s biceps and shoulders swelled with alien blood. Then the warrior-being roared again.{"\n"}
          {"\n"}Jake watched as the chain pulled onto somewhere near the underside of the buried nose of the ship. Soon the nose began to budge; there was a creaking noise and the dirt onto the top half of the ship began to recess off.{"\n"}
          {"\n"}“VA SHE NA FEDDO,” it roared.{"\n"}
          {"\n"}Jake stood in amazement.{"\n"}
          {"\n"}It pulled harder; the chain strapped against its chest. Jake watched as the ship’s front slid slowly out of the Earth,  giant mounds of rubble pouring outward next to each side of the machine.{"\n"}
          {"\n"}It continued to pull, yelling in a tongue Jake could not understand. The top half of the ship surfaced a few moments later; the direction of the chain’s tension caused the nose of the ship to rotate right as it came out of the rubble.
          Then, after a few loud <Text style={{ fontFamily: "gelasibro-italic" }}>klangs</Text>, and a series of deep grunts and shouts, the spacecraft was freed from the earth. Jake blinked repeatedly. The sleek black craft resembled an American
          stealth fighter jet, similar in appearance to an SR-71 Blackbird. Two rectangular contraptions sat stacked on top of each other in the middle of each wing. In the center of each of these were concentric circular cones that came together to
          form what appeared to be the interior of the ship's engines. The smoke riddling from the back of the ship appeared to have mostly subsided, and on the top of the right wing Jake noticed a golden emblem similar to the one on the creature’s
          shoulder patch. <Text style={{ fontFamily: "gelasibro-italic" }}>This is insane.</Text>
          {"\n"}
          {"\n"}The alien took a moment to breathe, then dropped the chain. It tapped something on its bio- screen, and the ship suddenly rose a few feet above the ground, standing on some kind of protracted landing gear.{"\n"}
          {"\n"}It turned towards Jake. “You have to come with me son. Toss your phone in the pit.”{"\n"}
          {"\n"}Jake looked around, then back at the creature. “Come, come, with you? Are you joking? I have to go home. I never meant to come here. I promise you, I won’t remember this tomorrow. No one will ever know. This wasn’t real!” Jake began
          to backpedal again.{"\n"}
          {"\n"}"I’m afraid it <Text style={{ fontFamily: "gelasibro-italic" }}>is</Text> real, kid. I am sorry. We must leave now,” it uttered sternly in its deep baritone.  The creature looked back up at the stars. “We are not safe here. The enemy
          will be exploring all known systems, making sure there are no stragglers. You are coming with me, it is Spectator One Protocol.”{"\n"}
          {"\n"}“Spectator <Text style={{ fontFamily: "gelasibro-italic" }}>what</Text>?” Jake said.{"\n"}
          {"\n"}“Spectator One. Any bystander who witnesses a critical war event must be cared for by The Forces until one of our colonels debriefs you <Text style={{ fontFamily: "gelasibro-italic" }}>on base</Text>,” the creature said.{"\n"}
          {"\n"}It turned around and walked up to the ship’s wing, jumped, and pulled itself up. It walked to the hatch it went down before, and popped it open. The creature turned around, and walked back down the wing, dropped to its knees, and
          stretched out its muscled arm. “I’ll help you up, let’s go!”{"\n"}
          {"\n"}Jake stood there, paralyzed.{"\n"}
          {"\n"}It said sternly, “Do not make me come and get you,  you must come with me–<Text style={{ fontFamily: "gelasibro-italic" }}>Spectator One</Text> is a rule I must not disobey. There have been terrible tragedies in the past when it has
          been ignored. The enemy could be watching, and if they’ve seen you, or traced us, you are not safe. They will hunt you down. I can not leave you here, but I promise to help get you home as fast as I can.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This thing wants me to come with it? This is insane. None of this can be real.</Text> He paused for a moment. <Text style={{ fontFamily: "gelasibro-italic" }}>The enemy? Hunt me down?</Text>{" "}
          He felt sick. <Text style={{ fontFamily: "gelasibro-italic" }}>What if it’s telling the truth?</Text>
          {"\n"}
          {"\n"}Jake dropped his phone in the mud.{"\n"}
          {"\n"}He walked slowly towards the ship, until he was within inches of the creature’s outstretched hand. When he reached out and grabbed it, he thought, <Text style={{ fontFamily: "gelasibro-italic" }}>what am I doing?</Text>
          {"\n"}
          {"\n"}The creature’s veiny arms pulled him up. As he stood up on the wing, he glanced around. He felt even dizzier now, standing elevated above the corn, in the black of night, on a futuristic spacecraft.{"\n"}
          {"\n"}“Let’s go. I’ll explain more in the air,” the creature said. It darted for the open hatch and popped down the exposed ladder. Jake followed him up towards the hatch, and then down the ladder cautiously.{"\n"}
          {"\n"}As he got to the last rung, he let himself drop the remaining two feet down to the floor of the ship. He watched the creature walk down a dimly lit hall. A few moments later the lights in the compartment brightened.{"\n"}
          {"\n"}Jake felt a surge of perceptive change riddle through his brain as he looked at his new surroundings. The compartment he stood in appeared similar to the inside of a high end RV he had seen on a travel TV show. A kitchen area sat on
          one side of the room–cabinets, cupboards, a toaster, and sink, were all stacked next to each other. On the other side of the room was a couch, and next to it a refrigerator, and next to that a small cubby-like compartment that may have been
          a restroom. He examined the kitchen area more closely. He spotted a futuristic looking machine. <Text style={{ fontFamily: "gelasibro-italic" }}>Is that a coffee maker?</Text> It had different colored tubes running from out of it into the
          back of the wall.{"\n"}
          {"\n"}“What the...”, Jake mumbled.{"\n"}
          {"\n"}“I try to keep her cozy, we never know how long we’ll be locked up in our fighters,” the creature shouted from down the small hallway.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This creature lives in its ship?</Text>
          {"\n"}
          {"\n"}“Come up here, we have to lift off, now,” the creature shouted.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I guess I am listening to this thing.</Text> Jake walked down the small hall, passed an intermediary room with different glowing equipment, and entered the ship’s cockpit.{"\n"}
          {"\n"}His eyes opened wide as different shades of glowing oranges, greens, and blues immersed his field of vision. The warrior was standing in front of what must have been the pilot’s seat.{"\n"}
          {"\n"}“Have a seat, and buckle up,” it said. Its eyes directed him to the leather seat next to him.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I have a seat?,</Text> Jake thought to himself.{"\n"}
          {"\n"}The creature slung a charcoal colored robe with a square shaped hood over its body, then sat down. It tapped a few hexagonal buttons on the cockpit dashboard. As Jake stepped down the short flight of steps, he caught a glance of the
          creature’s golden axe hanging on one of the hooks on the left wall. <Text style={{ fontFamily: "gelasibro-italic" }}>Guess he doesn't need it when he’s piloting.</Text>
          {"\n"}
          {"\n"}He sat down in the cockpit chair and snapped in the aluminum buckle. He looked to his right. There were a variety of varying shaped keypads and alloy air vents. He noticed a red fire extinguisher looking thing by his foot.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Where am I? This can not be real.</Text>  He peered through the slanted cockpit glass, and traced the sloping nose of the ship.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This thing must go fast, if it’s real.</Text> There was a large glowing computer screen in front of the creature. It had some kind of map flashing on it. Jake saw another large monitor in the
          center of the cockpit dashboard, two others on the top, near the ceiling, on adjustmental mounts. There was also a smaller screen with a keyboard directly in front of Jake, but it was off. He noticed other illuminated gauges positioned
          around the cockpit.{"\n"}
          {"\n"}The creature swiped through a few screens on the computer display in front of him. A few moments later,  the monitor brought up a pulsating 3D diagram. It looked like an architectural sketch of a cylindrical torpedo looking thing.
          {"\n"}
          {"\n"}“I knew it,” the creature said. “The communications receiver is busted. That is why I am not getting anything back from base. Galactic mercy”, it grumbled. “We must get into the air, then sort this out.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck is a communications receiver?</Text> Jake thought.{"\n"}
          {"\n"}The creature looked at him and uttered, “Hold tight.”{"\n"}
          {"\n"}It pulled down gently on the button-covered joystick, then flicked three small levers on the front left of the cockpit dashboard. There was a sound that could be best described as a powerful low frequency roar–the ship engines had
          fired to life.{"\n"}
          {"\n"}“Please, let me out. I want nothing to do with this. Let me out, I’ll never look back. Forget the protocol. I’ll probably wake up tomorrow and fully believe this was a dream. Two days from now I won’t remember it happened!” Jake
          pleaded.{"\n"}
          {"\n"}“I can not take you back. Not yet. It is a strict Solar Forces protocol, even out-of-galaxy,” The creature responded.{"\n"}
          {"\n"}“Let me go, I beg you. I don’t deserve it!” Jake shrieked{"\n"}
          {"\n"}The creature took its hand off the joystick. “You are not being kidnapped, kid. Whether you deserve it,  doesn’t matter. My duty now is to keep you safe.”{"\n"}
          {"\n"}Jake started to tremble again. He felt like going to the bathroom in the ship’s seat.{"\n"}
          {"\n"}The creature’s eyebrows rose as he studied a smaller purple screen on the central console. “We have no choice but to fix our Communications Receiver. The radium core is corrupted.”{"\n"}
          {"\n"}The creature tapped a strange looking icon on the monitor in front him. A two dimensional map appeared. It appeared to be a topographical map of the continental United States.{"\n"}
          {"\n"}“This is in fact a settled system...I <Text style={{ fontFamily: "gelasibro-italic" }}>believe</Text> it’s the Guido Van Rossum system. But there are no radium depots listed in the Enlightened Registry. We could explore further, but I
          have no contacts that I trust here.” The creature paused for a few moments. “There is also no guarantee that I would find the right type of garage which contained the parts we require. 256 bit receivers are not commonly found within
          civilian populations.”{"\n"}
          {"\n"}The screen let out a chyme. The creature glanced back at the glowing monitor.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>40.7608° N, 111.8910° W | 1,437 Miles | Waypoint Guidance Available</Text>
          {"\n"}
          {"\n"}“It seems Lithium Radar has discovered a candidate for us to get our Radium needed to fix our receiver. Let’s see here.” The warrior creature scrolled through the text based contents of the map. “Yes, it has identified a laboratory
          just outside of Salt Lake City, Utah, United States, North America, as a 99.997% positive source of Radium.” The creature clicked on a blinking indicator on the screen. He looked at a set of characters too hard to see from where Jake was
          sitting. “It appears to be a private laboratory facility...<Text style={{ fontFamily: "gelasibro-italic" }}>Chiral Laboratories</Text>...it does contract work for your government...won’t be able to get more information until we’re on the
          ground in the vicinity of their wired network.”{"\n"}
          {"\n"}“You want to take us to Utah? Are you serious?” Jake asked, anxiously.{"\n"}
          {"\n"}“It won’t take long,” the creature said. “Hopefully, it will not be too difficult of an operation.”{"\n"}
          {"\n"}“An operation? What do you mean operation?” Jake replied.{"\n"}
          {"\n"}“We need the Radium to fix our communications receiver, we have no choice, kid. That’s how we get you home. It’s best not to think about it until we’re on the ground. It should be a simple operation, nothing to worry about,” it said.
          The creature clicked a few pop-ups on the monitor directly in front of him. “The faster we get it over with the better. Should be a quick in and out. Ship, prepare for quasi-runway take off!”{"\n"}
          {"\n"}The engines roared, consuming a fuel source Jake didn’t understand. His belt automatically tightened, to the point it was uncomfortable.{"\n"}
          {"\n"}The creature hit a few more buttons on the dashboard, then closed its eyes, holding its hands to its face in a praying fashion. “Give me the strength to get through this journey, and to bring this Earthling back safely.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Lena Akma Vena</Text>.” It pushed down on the joystick and the ship jolted forward.{"\n"}
          {"\n"}Jake watched as the stalks crumpled beneath the black nose of the ship.He closed his eyes. <Text style={{ fontFamily: "gelasibro-italic" }}>Is this thing really taking off?</Text>
          {"\n"}
          {"\n"}As the creature pushed down harder on the throttle, Jake was pulled back against his seat. <Text style={{ fontFamily: "gelasibro-italic" }}>I can’t breath.</Text>
          {"\n"}
          {"\n"}They accelerated faster now.{"\n"}
          {"\n"}“Hold on, friend”, the creature uttered.{"\n"}
          {"\n"}The ship blazed across the corn filled terrain. It was faster than any airplane Jake had ever been in upon take off. And a lot more uncomfortable.{"\n"}
          {"\n"}The creature pulled the joystick in the reverse; the nose picked upward gently. Jake felt his weight shift. <Text style={{ fontFamily: "gelasibro-italic" }}>Woah.</Text> To his right the ground was already departing. They were
          airborne.{"\n"}
          {"\n"}The G-force increased as the ship jetted into the sky. Cedar Oaks receded quickly, and before he knew it, the first clouds were grazing across the eccentrically curved nose of the ship.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Is this a dream?</Text>Jake thought.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>If this is a stress-induced hallucination, then when is it going to end? If it's not–then how is this possible? What will my Jimmy and Diana hink when I'm not home in the morning?</Text> His
          thoughts continued to race through his mind.{"\n"}
          {"\n"}Jake felt nausea come and go over the next minute and a half as they ascended.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>BEEP-BEEP.</Text> A sound came from somewhere in the top of the cockpit.{"\n"}
          {"\n"}“We are at cruising altitude,” said the creature. It brought the throttle back into its center position, then clicked two large purple buttons in succession on the dashboard.{"\n"}
          {"\n"}Jake’s nausea subsided slightly as the ship leveled off. He could see the faint glow of lights from the land below. <Text style={{ fontFamily: "gelasibro-italic" }}>We are quite a way up, jeez.</Text>
          {"\n"}
          {"\n"}“Autopilot proceed on waypoint guidance,” the creature said, speaking to the monitor.{"\n"}
          {"\n"}“Autopilot confirmed. Cruising to destination via set waypoint guidance,” a female sounding voice from the cockpit responded.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The ship computer speaks?</Text>
          {"\n"}
          {"\n"}The creature unbuckled its seatbelt, stood up, stretched its neck, then stuck out its hand. “The name’s Dendro. Dendro Notratima, Solar Forces,  Special Operations Captain, Tier II, Republic of Naronia, Star System A, The Nestomir.”
          {"\n"}
          {"\n"}Jake stuck out his hand. “Jake..Jake Addison”.{"\n"}
          {"\n"}“Jake Addison, the Earthling who discovered me in the dark of night,” Dendro responded.{"\n"}
          {"\n"}“I...I smelled something. I was curious. I should never have walked through the alley,” Jake said.{"\n"}
          {"\n"}The Dendro creature sat back down. “You probably shouldn’t have walked down that alley because now you’re tied up in my mess. I’m sorry, I really am.” The robed creature glared out the cockpit window. “Curiosity can take us to all
          sorts of places.”{"\n"}
          {"\n"}Jake glanced out the right side of the cockpit window. A dim front ship light had turned on. He could see endless layers of clouds stretching across the dark sky. He looked back at the creature. “Is this real? Are{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>you</Text> real? A spaceship? An alien warrior? I just want to get back to my family. I swear, I will pretend this was a dream. No one will ever know. I promise you on my mother’s and
          brother’s life.”{"\n"}
          {"\n"}“I am sorry. There is nothing I can do until I can communicate back to base. Let’s fix this receiver and you’ll be home soon,” Dendro replied.{"\n"}
          {"\n"}Jake squeezed his head back against the headrest as they cut through the ozone. The blue light beams on the long curvaceous grey nose of the ship reflected through the damp night sky. A new reality began to set in. And Jake had no
          control.{"\n"}
          {"\n"}As they sat in silence for a few minutes, Jake listened to the low hum of the ship's engines. He watched a few dials flicker on the ship dashboard.{"\n"}
          {"\n"}“So you are some kind of warrior, a captain...from your galaxy?” Jake asked.{"\n"}
          {"\n"}“Affirmative. I am a soldier, a captain, in the Solar Forces Special Operations unit,” Dendro imparted. “The Solar Forces is the core military power serving the Republic of Naronia. Naronia is the capital of my galaxy. You are sitting
          in a special operations military fighter right now.”{"\n"}
          {"\n"}“That..that is...impressive...I guess.” He paused for a moment, still struggling to comprehend he was talking to, something, someone, not from Earth. “And you have no understanding how you ended up half-submerged inside of a crater in
          a cornfield in Grapefield, Wisconsin? Grapefield, one of the least happening places on Earth?”{"\n"}
          {"\n"}“I have not the faintest indication. The last thing I remember was exiting our Solar Forces Destroyer in this ship. I must have been knocked out the instant the gate opened by a nearby  plasma explosion. And it must have been a big
          one.” Dendro took off his space gloves. His hands were human like, except for the nails. They were long, and sharp. He ran his fingers across his nearly shaved scalp, then neatened the bun of dark hair on his head. Jake still couldn’t tell
          if this creature was friendly or malicious.{"\n"}
          {"\n"}“You...you were ambushed, you said?” Jake asked.{"\n"}
          {"\n"}“Affirmative, we were ambushed in the Larhadian Belt, an asteroid arrangement within Naronian space jurisdiction–the enemy lured us in. We brought a tremendous force with us, much larger than I recommended, but we were still not
          prepared for what happened next. The last thing I remember was diving into the ship after the emergency sirens fired off, then I was in open space, and the firefight had already begun. Then I was out cold,” Dendro said.{"\n"}
          {"\n"}“The Venthem are cunning,” the creature grumbled.{"\n"}
          {"\n"}“The Venthum?” Jake asked.{"\n"}
          {"\n"}“Our ancient enemy. An enemy we’ve fought for over ten millennia. Many thousands of years ago we were great allies. Millions of lives have been lost in the Dark Wars that occured between our civilizations, both which were before my,
          our,  time,” Dendro said.  “Our culture carries a great hatred for our great enemy. And now, nearly five thousand years since the end of the second Dark War, it has become apparent that another great war is coming.”{"\n"}
          {"\n"}Dendro swiveled his neck in a stretching motion which exposed additional tattoos on his skin.{"\n"}
          {"\n"}“You think they are searching for us?” Jake asked, his stomach tightening.{"\n"}
          {"\n"}“Venthum Space Legion search and destroy battalions are known to scout populated systems after successful ambushes,” Dendro responded. “The less of the enemy that returns home, the better.”{"\n"}
          {"\n"}“But, can they track us?” Jake asked.{"\n"}
          {"\n"}“I do not think so, at least not with the technology we know of, but word has come to us that they have advanced their stealth-ship signature recognition. Which means we need to be careful, and stay out of plain sight as much as
          possible. At thirty thousand feet, we are the safest, for a variety of reasons.”{"\n"}
          {"\n"}“So you’re not even sure what they can do?” Jake asked, despondently.{"\n"}
          {"\n"}“With The Venthum, nothing is ever certain. The enemy is cunning, and hides their assets well. It is too great a risk to leave you until we know we have not been tracked, and that the enemy has left its gaze on Earth. That’s why we
          must communicate back to base, regroup, and disperse as fast as we can,” the Solar Forces Captain responded.{"\n"}
          {"\n"}Jake inhaled deeply as he considered his predicament.. <Text style={{ fontFamily: "gelasibro-italic" }}>How can we be safe? Will we ever come down from the sky?</Text>
          {"\n"}
          {"\n"}They cruised a long for a few more minutes. Jake tried to calm his heart down and put things into perspective.{"\n"}
          {"\n"}“How far away is it, your galaxy?”, Jake asked.{"\n"}
          {"\n"}“You ask a lot of questions don’t you?” The creature put his gloves back on and adjusted the throttle slightly. “The Nestomir is approximately three and a half million light years from your home planet Earth.”{"\n"}
          {"\n"}“How could you possibly get here?” Jake asked, stunned.{"\n"}
          {"\n"}“We are ahead of you in terms of technological evolution. We became interstellar five thousand years ago with the discovery of quantum space.” Dendro said. “But my ship does not have a booster installed, so I can not travel through
          the stars alone, at least, not for now..”{"\n"}
          {"\n"}Jake scratched his chin. <Text style={{ fontFamily: "gelasibro-italic" }}>Quantum space?</Text>  He pondered for a moment about the implications of traveling through the stars. Then he thought of Dendro’s planet. “What is your world
          like?”{"\n"}
          {"\n"}“Well, Earthing, my home planet of Naronia is a complicated world, and I would have trouble knowing where to start if I were to describe it to you. It is a busy planet, with a variety of races living amongst one another. The planet
          Naronia is considered capital of The Nestomir Galaxy, to those societies under jurisdiction of The Naronian Republic.", Dendro replied.{"\n"}
          {"\n"}“The Naronian Republic?”, Jake asked.{"\n"}
          {"\n"}“Yes. The Naronian Republic was founded three thousand years ago, after The Mentosi brought back political stability to Naronia. The republic has brought extraordinary advances to our society, including in education, safety,
          infrastructure, medicine–almost all aspects of life.” Dendro stretched his neck in both directions. “However, many class and race issues that have been passed down by the generations remain.”{"\n"}
          {"\n"}“Class and race issues?” Jake asked. “And who are the Mentosi?”{"\n"}
          {"\n"}“The Mentosi are an ancient Naronian race. They are the only species of high-intelligence native to Naronia. The ruling Mentosi family, The Affagi, sit at the forefront of Naronian politics. The Affagi have been the primary leaders in
          all of the Naronian government for over twenty five hundred hundred years,” Dendro said.{"\n"}
          {"\n"}“And there are really class issues where you come from?” Jake asked.{"\n"}
          {"\n"}Dendro massaged his left arm. “The class and race issues are complicated. They stem from thousands of years of ruling class history, which involved both voluntary, and involuntary immigration and emigration throughout The Nestomir.”,
          Dendro remarked. “Unfortunately, a fairly rigid class structure has been built into society. The Mentosi, as well as the first sentient races to immigrate to Naronia, are what our culture refers to as{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Tier I</Text> races. These races get the first pick at education, high paying jobs, and the best that life has to offer in the galaxy. Tier II races, which consist of races that arrived to
          Naronia later in our history, have limited job options, and have disadvantages in many areas of society, including the military.”{"\n"}
          {"\n"}“That is sad. You would think you would have corrected those issues, especially if you’ve figured out interstellar travel.” Jake said.{"\n"}
          {"\n"}Dendro's eyes widened momentarily as if he were thinking about something, then his face went stoic again. “It <Text style={{ fontFamily: "gelasibro-italic" }}>is</Text> hard, but I love my planet. She will heal over time.” He massaged
          the silver orb on his chest. Then he waved his pointer around the cockpit. “This baby, they won’t even give me a booster, and I’m a Special Ops captain. The Gobrahim immigrated into Naronia long after the Tier I races.”{"\n"}
          {"\n"}“So you are...” Jake began.{"\n"}
          {"\n"}“The Gobrahim, my people, are classified as a Tier II Race. We immigrated a relatively short time ago, in the galactic time frame, after my ancestral planet, Gobhar, was destroyed in the First Dark War. Our three thousand year old
          Naronian constitution made rules very difficult to change. And some of them, let’s say, alter how the military can allocate funds to different military personnel,” Dendro remarked.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>His ancestral planet was destroyed?</Text> “Is there anything you can do about these societal issues?” Jake asked.{"\n"}
          {"\n"}The young warrior’s alien face conveyed a disciplined frame of thought. “I can fight. I can learn. And I can make a difference, where nature lets me.” Dendro pushed down on the throttle slightly.{"\n"}
          {"\n"}They sat in silence for a few moments.{"\n"}
          {"\n"}“But, you said these Mentosi rule. How can these Mentosi <Text style={{ fontFamily: "gelasibro-italic" }}>rule</Text>, if it is a republic? Jake asked.{"\n"}
          {"\n"}Dendro raised his thick eyebrows. “You are an inquisitive one, kid. What you’re asking is an important question. And one that is discussed often in galactic politics. And it’s not one for me to analyze out loud too often as a member
          of our armed forces. However I will say that there is a fine line between what is democracy and what is not. Our Solar Senate and The Naronian counsel do work as an effective balance of powers. We have a fairly healthy electorate system.
          But the tentacles of Affagi influence are so entranced in our society that it’s not hard to see that they do possess a form of authoritative rule. Some argue that dynamic is only natural in a capitalistic system. Others argue it is
          motive-dependent, as in, it is purely to be judged on the intentions of the quasi-ruling power. Even as a Tier II race, I’ve always seen The Affagi as a benevolent entity, even with their antiquated class ideologies. At the end of the day,
          they have been the single most important driver of some of the greatest things to happen to our culture, like our greatly enlightened education system, the arts, and the growth of our military. What we need to do is to figure out a way to
          evolve for the better, not eliminate the things they’ve achieved.”{"\n"}
          {"\n"}Dendro shifted a red lever on the dashboard to its left most position. “Enough politics. Cmon, let’s stretch these legs and have a quick tour of the ship.”{"\n"}
          {"\n"}The robed warrior pushed himself up, walked up the two cockpit stairs, and went down the short hallway. Jake followed, taking a quick peep at the golden axe resting on the wall.{"\n"}
          {"\n"}They stopped in the small space in between the living area of the ship and the cockpit. “This is the <Text style={{ fontFamily: "gelasibro-italic" }}>caravine</Text>,” Dendro said. “This is where I’d normally be able to map out
          sophisticated communication logistics across the galaxy and beyond. I can dictate where our signals maneuver based on the position of our interstellar satellite networks, but our booster’s broken.“{"\n"}
          {"\n"}Jake turned towards the mix of wires and lights on the ceiling high black panel in front of him. <Text style={{ fontFamily: "gelasibro-italic" }}>Those are a lot of switches.</Text>
          {"\n"}
          {"\n"}He followed Dendro into the midsection of the ship. The Special Ops captain pointed at the stove and sink area. “Here is where I cook, make tea, and anything else I need to survive on a long interstellar journey.” He pointed to the
          machine next to the couch across from them. “I also have long storage refrigeration”. He pointed back to the intriguing looking machine on the left side of the sink. “And here we have my handy Kahve maker, as well as my stove, griddle,
          toaster and twenty-four seven water filtration.”{"\n"}
          {"\n"}The creature grabbed a thin glass column from inside of a small brown kettle on the counter. “Here, have a sip. It’ll warm your spirit”.{"\n"}
          {"\n"}Jake took the tall glass test tube from Dendro’s hand. He looked at the liquid it housed. It was a solid amber color. Steam was funneling out the top. “What is this stuff?”{"\n"}
          {"\n"}“Jasmine Tea. Don’t worry–it’s all natural.” Dendro said.{"\n"}
          {"\n"}Jake put his mouth on the column, and dipped his tongue inside. Hints of caramel, mint, and chai lightly massaged his tongue.{"\n"}
          {"\n"}Dendro flipped on the sink with an interesting looking hand gesture. He put his gloves on the counter, washed his face, then ran patted his wet hands on top of his man-bun, as if to perfect its shape.{"\n"}
          {"\n"}As Jake took his first sip of the tea, he thought: <Text style={{ fontFamily: "gelasibro-italic" }}>Wow, this guy really cares about his man bun.</Text>
          {"\n"}
          {"\n"}Dendro put his gloves back on. “How's it taste?”{"\n"}
          {"\n"}“It, it’s”. Jake dribbled a splurt of the liquid on his chin and wiped it off. “It’s quite good. It tastes like. Well, I don’t know. It’s kind of sweet, but very smooth. I like it.”{"\n"}
          {"\n"}The warrior’s chiseled face appeared amused.{"\n"}
          {"\n"}Jake's eyes turned towards the peculiar looking machine Dendro had pointed to a moment ago. The metal base had three glass beakers sitting on top of it. The largest beaker bubbled with an odd looking purple liquid, and the other two
          bubbled with a dark brown liquid. Multiple tubes ran out of the back of the contraption, and most notably, one of the tubes was solid gold.{"\n"}
          {"\n"}“What is Kahve?” Jake asked.{"\n"}
          {"\n"}“It’s similar to what I believe you would call <Text style={{ fontFamily: "gelasibro-italic" }}>coffee</Text>. It’s a bit smoother, and a lot stronger,” Dendro said.{"\n"}
          {"\n"}“What is the gold tube?”Jake asked curiously.{"\n"}
          {"\n"}Dendro giggled under his breath. He shook his head, as if in disbelief. Jake looked at him, confused.{"\n"}
          {"\n"}Dendro turned towards the sink, then pulled up the small plated window above it. “Here, Earthling. Have a look.”{"\n"}
          {"\n"}“Woah.” Jake stared at the curved right wing. “That’s radical.” Just beyond it, a fifteen foot stream of blue flame poured out from the rectangular engine blocks.{"\n"}
          {"\n"}“How fast can this thing really go?” Jake asked.{"\n"}
          {"\n"}“It’s hard to say. A lot of variables: wind, fuel grade, atmospheric density, atmospheric oxygen-to-nitrogen ratios. In the current atmospheric state, I could probably push her to Mach 7; that’s seven times the speed of sound in Earth
          air. But I have to treat her right.” Dendro used his knuckles to tap the counter gently. “Only ever push her to the limit when I really have to. My baby. They say Special Ops soldiers really have a genuine love for their ships. She’s been
          with me through thick and thin–she’s an authentic Sentauri Beacon I,  the smoothest stealth fighter I’ve ever flown. Triple hydrogen blast furnace engines. Full cavity deflection shields. Can’t find these in production any more, they were
          replaced by the new Star Beacon VII’s only five years back. The Forces said it was more economic,” Dendro said. The blue light from the engines grazed across his face. He was a brutish form of handsome, even in his alien form.{"\n"}
          {"\n"}He pointed at the door next to the fridge. “Here’s the lavatory. Lock broke, not sure how, but don’t worry, I won’t peek.” He let out a chuckle.{"\n"}
          {"\n"}Dendro walked to the back of the compartment and put his right eye against a wall sensor. The sliding doors skidded open.{"\n"}
          {"\n"}Jake followed him into the room and noticed the compartment had a very different ambiance than the mid-section kitchen area of the ship. This room felt like a bedroom in a futuristic military barracks. The walls were plated with cold
          looking metal panels. The left corner of the space had a narrow bed sitting in it. It was covered by a grey felt blanket and a small brown book. A white pillow sat on top.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I guess we are not so different.</Text> Jake thought. A small circular window sat on the back wall which looked out into the cold night.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That’s cool.</Text> On the right side of the room was a bookshelf. Piles of books sat on the metal shelves. <Text style={{ fontFamily: "gelasibro-italic" }}>This guy reads?</Text>
          {"\n"}
          {"\n"}Jake was intrigued. He walked over to the piece of furniture, and examined the titles.. <Text style={{ fontFamily: "gelasibro-italic" }}>Meditations</Text> by <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Marcus Aurelious,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Soul of a New Machine</Text> by Tracy Kidder, <Text style={{ fontFamily: "gelasibro-italic" }}>The Learning Doctrines</Text> by Zinthus Fomega,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Philosophical Tenets of the Ld’Shab</Text> by Anonymous, <Text style={{ fontFamily: "gelasibro-italic" }}>Ld’Shab Prayers</Text> by Franz Ameinu, the list went on.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>There’s more to this creature than meets the eye.</Text> He thought. <Text style={{ fontFamily: "gelasibro-italic" }}>He reads science? And he prays?</Text>
          {"\n"}
          {"\n"}“This is my dormitory,” Dendro said.{"\n"}
          {"\n"}He glanced around the room again. “Looks like a decent place to get some rest,” he said. It almost felt cozy, in it’s own alien way.{"\n"}
          {"\n"}Dendro tightened the belt of his charcoal robe. “I guess that depends if there’s anyone on my tail.” He let off a slight grin. “C’mon, let’s head back to the pit.”{"\n"}
          {"\n"}As Jake walked out of the room, he couldn’t help but notice Dendro’s calf muscles bulging through his leather pants like miniature footballs–they were definitely not human.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This guy can definitely dunk.</Text> A few feet ahead, the alien soldier stopped in front of the couch.{"\n"}
          {"\n"}“We still have two hours before we touch down at our next destination. You should get some rest. We have a long night ahead. Don’t worry, it’s clean; it has a Titanium Dioxide purification layer in the linen,” he said.{"\n"}
          {"\n"}Jake looked at the multi-cushioned couch. It looked comfortable enough. “I guess a nap wouldn’t hurt,” Jake replied.{"\n"}
          {"\n"}“Good. I will be in the pit if you need me,” the creature said.{"\n"}
          {"\n"}As he lay down, he watched Dendro walk down the hall out of sight. The leather-like material that made up the sofa was oddly smooth, almost too smooth for comfort. There was no blanket on either.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>A long night ahead? I won’t be needed, right?</Text> He was too exhausted to think about it further. He rolled over onto his back and turned towards the oval kitchen window. I
          <Text style={{ fontFamily: "gelasibro-italic" }}>t must be getting late by now. My mom will be worried.</Text> His stomach began to ache–he wished Nassir was with him; he would help him think of a way out of this.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>He looked out the window at the blue phosphorescence. An otherworldly machination propelled them through the air. Coffee like machines with mysterious golden tubes. None of this made
          sense. He pulled his hoodie over his head and eventually fell into a deep, dreamless sleep.
        </Text>
      </View>
    );
  }
}
