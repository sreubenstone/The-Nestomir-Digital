import React, { Component } from "react";
import { ChapterTwo1, ChapterTwo2 } from "./Story_Assets/Chapter2";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";

interface IProps {
  modal: (id: number) => void;
}

const StoryGraphic = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 20px;
`;

const Caption = styled.Text`
  text-align: center;
  font-size: 10px;
  margin-top: 8px;
  font-family: "gelasio";
  margin-bottom: 20px;
`;

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

export default class Chapter2 extends Component<IProps> {
  static navigationOptions = {
    // headerTitle: "Chapter 2"
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {

    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 2</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://i.pinimg.com/originals/09/5c/2c/095c2ccf70ef910ffadc778779dc8507.jpg`,
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}>The 150th founding anniversary of the town of Grapefield, Wisconsin, was a celebratory event. The school board had planned the school trip to commemorate the day for nearly six months, receiving permission from Mayor Douglas Haggle to use Rush Park as the venue for Grapefield Middle’s students and faculty. The high school celebration was taking place at Ashworth Park, on the other side of town. Grapefield Elementary remained in session, but the teachers would engage the students in fun activities and games highlighting Grapefield’s history instead of conducting normal classes. (The town’s adult residents would flood the town’s restaurants at night to take advantage of outdoor seating set up for the occasion).{"\n"}{"\n"}Jake tussled with his athletic shorts and cleats as he tried to push them far enough into his bag to close the zipper. He picked out his best gear for the event; flag football was today, and he didn’t know if Ashley might be watching. Jimmy had gotten a ride to school from his friend Alex Benson’s mother twenty minutes ago, so he was free to head to the bus. Jake Hustled out the door, with his jam packed backpack strapped tightly to his shoulders, and arrived at the bus stop with time to spare. Nassir was being driven to the park by the robotics club’s coach, so the ride to school was uneventful.{"\n"}{"\n"}“Good morning class. Thank you everyone for arriving on time! We have a bright and wonderful day ahead of us. I’m going to fill out my attendance sheet quickly and then we’ll be heading right back to the buses!” <Text style={{ fontFamily: 'gelasibro-italic' }}></Text>Mrs. Blum announced<Text style={{ fontFamily: 'gelasibro-italic' }}>.</Text>{"\n"}{"\n"}“Here”. Jake said monotonously when Mrs. Blum read his name off the attendance list. To his relief, his teacher gave no inclination that she would quiz him on the assigned reading. He did read up to page eighty last night before the pizza came, but that was still twenty pages less than what was assigned. <Text style={{ fontFamily: 'gelasibro-italic' }}>Thank goodness,</Text> he thought.{"\n"}{"\n"}They got up to head for the buses. As he stepped out of the classroom, he took a laminated copy of a <Text style={{ fontFamily: 'gelasibro-italic' }}>Grapefield Founding Anniversary, Rush Park</Text> agenda from Mrs. Blum. He saw that the buses were scheduled to arrive at 9:30 am. Different exhibition sports games would be played on the sports pitch. Flag football in the morning. Then ultimate frisbee in the afternoon. On the far side of the park there would be a student-teacher softball game (after the picnic). The school’s after-school clubs, like Theatre and Robotics, would have stands set up on the far corner of the park, in back of the softball field dugouts. The teachers would have seating arrangements set up in the center of the park next to the grassy student picnic area.{"\n"}{"\n"}Jake sat next to his buddy, David Wright on the bus. They spent the short ten minute ride to Rush park chatting primarily about their work ethic.{"\n"}{"\n"}“Yea, I agree, I’m tired of doing this homework.”, Jake blurted out. He felt a pang of pain inside when he thought of his speaker project.{"\n"}{"\n"}They laughed about how they often prioritized gaming and sports, and nearly anything else, over their academic responsibilities. It was comical to Jake how little David cared about his grades.{"\n"}{"\n"}“You didn’t hand in any of those papers? Not one?” Jake asked dumbfoundedly.{"\n"}{"\n"}“Na man. Didn’t feel like it. I only do the quizzes and tests,” David responded casually.{"\n"}{"\n"}Jake couldn’t believe someone had a worse work ethic than him. <Text style={{ fontFamily: 'gelasibro-italic' }}>How can you be that casual about failing in school?</Text> He thought to himself that perhaps David was dealing with some issues at home that was diverting his attention from his schoolwork.{"\n"}{"\n"}As the bus accelerated, Jake’s focus shifted. He felt compelled to get up so he could see Ashley. He scanned around, and then saw her in the front of the bus where she was giggling to the girl sitting next to her. <Text style={{ fontFamily: 'gelasibro-italic' }}>I wish she was sitting next to me. I’d talk to her for sure.</Text> He sat down a moment later so it wasn’t too obvious to David what he was doing.{"\n"}{"\n"}As the bus turned onto Honeysuckle Drive, the towering White Oak trees of Rush park came into view; their green crowns oscillating ever so slightly as they fought back against the autumnal wind. They rolled through the park’s gates, and the bus driver soon opened the doors.{"\n"}{"\n"}The crisp Grapefield air flowed through Jake’s nostrils as he stepped out onto the sidewalk. He looked up to see the lush green of the sports pitch just beyond the fence - a glorious rectangle of freshly mowed grass glistening in the fall light. <Text style={{ fontFamily: 'gelasibro-italic' }}>I can’t wait to get on that field,</Text> he thought. <Text style={{ fontFamily: 'gelasibro-italic' }}></Text>He followed the mob of students and teachers through the park gate, towards a central meeting pavilion by the large white picnic tables. Jake could see a few teachers setting up the front tables with fruit snacks, glass juice pitchers, and other appealing treats. The crowd pushed forward towards the picnic setup, and huddled around Principal Caliman. He was wearing a brown suit, and had his hair combed over his receding hairline.{"\n"}{"\n"}“Students, welcome to our long awaited Grapefield’s 150th Founding Anniversary Field Trip to Rush Park!” His middle aged face wore a confident grin and his polka dotted handkerchief rose just above the tip of his breast pocket. “I want to thank our teachers, aides, and staff, for your many hours of hard work to make this event a reality. It is an absolute delight to be able to share this wonderful day with all of you.” He walked up a bit closer to the crowd. “Students, I know we’re all eager to get started. For the students who have signed up for a morning activity, please head there after I finish. The rest of you, please feel free to explore the park, spectate on a morning game, grab a healthy snack, participate in one of our wonderful lawn games, or chill out on some of Mrs. Abelton’s Peach Punch-ade! Use one of these handy Rush Park Agenda’s to keep track of all of the day’s events. Lunch will be at noon!” He paused and smiled. “That’s it! Let’s get started!”{"\n"}{"\n"}The crowd dispersed instantly, and Jake headed for the sports pitch. As he approached, he could see the field lines were freshly painted. Derrick Henderson, and David Wright were already on the sideline strapping on their flag straps.{"\n"}{"\n"}“Addison, you’re on the blue team, with David and I, and the rest of us here,” Derrick Henderson said.{"\n"}{"\n"}Jake nodded confidently, and buckled on his blue flag straps. The kids in back of Derek were also on his team. He had Craig Leechuck and a few other decent athletes, as well as a few not so decent ones, like puny Matt Hill. He looked over to his opponents on the red team; the teams looked fairly matched. They had the massive five foot ten William Keener, and the super speedy Keith Marcus, combined with a few less gifted athletes. The blue team’s coach was Mr. Zeig, Jake’s math teacher from last year. Mr. Zeig always seemed to have a lot of positive energy and he consistently spoke about his love of sports, which made him more relatable to Jake. He wasn’t a bad teacher either; he actually broke up class lessons well, by interjecting his own personal experiences about his own adolescent math-learning process. He also often made students laugh with the many funny remarks he often made, like when he last year mentioned that he loved his dog more than his wife.{"\n"}{"\n"}Mr. Zeig brought the blue team into a huddle. His greasy slicked back thinning hair shined in the morning light. “Let’s go boys. This is what we were born to do!” The blue team laughed. “No, but in all seriousness, let’s get it. Good, solid play kids!” They put their hands in the middle of the circle. “One, two, three, let’s go!” They repeated in unison, then clapped together, before they filtered onto the field.{"\n"}{"\n"}The team’s captains, Derrick Henderson and William Keener, ceremoniously shook hands in the middle of the pitch before the game began. Mr. Shneidmotter, one of the school’s gym teachers, was selected to referee the game. He looked back and forth at both teams, then blew his whistle to commence play.{"\n"}{"\n"}The first quarter was scoreless butin the second quarter, the ball got loose from Derek Henderson. Kenyon Bloomfield of the red team scooped up the ball and ran it down the field for a touchdown. The red team went up 7-0.{"\n"}{"\n"}On the blue team’s first second quarter possession, Jake lined his bony yet athletic body, to the far left side of the line of scrimmage. “C’mon Addison, get further towards the sideline!” <Text style={{ fontFamily: 'gelasibro-italic' }}></Text>Mr. Zeig yelled. The play was designed for Jake, the receiver, to fake hard left after the quarterback initiated the play, and then cut back right around the defender. Jake shuffled a few more feet towards the sideline and waited.{"\n"}{"\n"}“HIKE!” <Text style={{ fontFamily: 'gelasibro-italic' }}></Text>Derek Henderson yelled.{"\n"}{"\n"}Jake’s quadriceps propelled him off the line. His peripheral vision blurred. Reality’s natural rhythms haltered. He darted straight two strides, then firmly dug his cleats into the freshly cut grass, mud spraying up into the air, he juked left, then cut back right around his defender, Roy Elanu. Roy went for the fake, which enabled Jake to gain a clean foot of open distance ahead of his defender, a light year for a receiver. Three strides later, Jake curled his neck around to see his quarterback Derek Henderson. Derek was scanning the other side of the field, but a second later, Derek locked his inset eyes on an open target: Jake. An instant later, the pigskin was revolving in the air. Jake sprinted harder, his eyes locked on the ball, in hopes of intersecting with pigskin’s parabolic flight path. The football was wobbling a bit as a strong gust of air passed by.. He shuffled his feet slightly and followed the ball’s arc intensely as it came down. He could feel Roy catching up, but it was too late, the football fell softly into his hands–and three strides later Jake was in the end zone. His team cheered. Derek Henderson came running towards him and jumped up to give him a hard chest bump. Jake glanced at the sidelines in hopes of seeing Ashley Martin, but she was nowhere in sight.{"\n"}{"\n"}Entering the fourth quarter, the game was tied 7-7, and Jake’s team was lined up on defense. The quarterback, William Kenner, yelled “Hike!”. William stepped back, then tossed a short pass to Dylan Jenkins, a stubby, yet athletic, miscreant in Jake’s grade. Dylan sprinted left, his thick calves cutting through the grass, and then cut back right through a hole of defenders. Jake ran away from his assigned man, darted left towards Dylan, and attempted to pull the flag off Dylan’s left hip, but Dylan rotated his hips right, and then cut back left hard suddenly, colliding his left elbow into Jake’s upper ribs. Jake fell to the ground.{"\n"}{"\n"}He rolled over to his side holding his rib. The pain was sharp and it took a few moments for it to subside. A few of his teammates tried to help him up but he did it himself. “Crap, that hurt.” Jake’s face contorted as he stood up.{"\n"}{"\n"}“You’re ok Addison,” Derek said, who had run over to him. “Watch out for Jenkins. He doesn’t play fair.”{"\n"}{"\n"}Luckily, Dylan had been stopped a few feet further down the field, but two plays later, William hit Roy Elanu with a wide open touchdown pass that put the red team up 14-7. Jake’s team didn’t score on the next possession, so the ball went back to the red team.{"\n"}{"\n"}There were four minutes left in the game and Jake’s legs felt weak. Dylan lined up to the left of his quarterback directly facing Jake. His face wore an arrogant smirk, and his stout arms were covered in grass and dirt. Jake faced him.{"\n"}{"\n"}The play commenced, and Dylan headed straight for him, as if to run Jake over clean. Jake made an anemic attempt to grab his flag, but stepped out of the way at the last moment, fearing Dylan’s contact. “Watch out dweeb,” <Text style={{ fontFamily: 'gelasibro-italic' }}></Text>Dylan spat out as he ran past. Jake felt a pang of humiliation as Jake watched him run by. A play later Dylan scored. And thirty seconds later the game was over. After the defeat, Jake headed to the sideline, his eyes focused the dirt. He could hear a few of his teammates arguing about something. He unstrapped his flags and tossed them in the bag and headed off the field, attempting to avoid everyone. “Good game, Addison! Keep your head up!”, <Text style={{ fontFamily: 'gelasibro-italic' }}></Text>his coach yelled.{"\n"}{"\n"}Jake ignored Mr. Zeig and proceeded to walk further into the park, past the rows of corn hole, spikeball, and super sized Four in a Row boards. <Text style={{ fontFamily: 'gelasibro-italic' }}>I’m such a wimp. Why was I so scared? I can’t stand letting that jerk overpower me.</Text>{"\n"}{"\n"}He bobbed and weaved through a few additional groups of students and teachers until he got onto the park’s dirt path. Thirty seconds later, he approached the student club tables. As he got closer, he could see that The Thespian club had set up the table closest to him, next to the large oak tree. Ashley Kim, the president, and her Thespian troupe wore distinctive costumes and chatted with some students gathered around them. The middle table belonged to the Debate Club, and the table furthest from him almost certainly belonged to the robotics club; Jake saw the large display board with a retro robot face painted on it in front, as well as kids playing with what looked like radio controlled cars in the adjacent grass. Some of the cars appeared to be moving around autonomously, avoiding foam objects placed on the ground.{"\n"}{"\n"}He walked up closer and caught sight of Nassir. He was sitting in a chair behind the table and appeared to be describing the light green circuit board he was holding in his hands to an intrigued six grade student. Jake calmed down at the sight of his friend. <Text style={{ fontFamily: 'gelasibro-italic' }}>That kid is so freaking smart.</Text> He watched Nassir continue to speak to the student with unadulterated scientific enthusiasm.{"\n"}{"\n"}Nassir’s father was an engineer for a large chemical company, and his mother was a pediatric physician. His parents met in the United States, but they both immigrated from Egypt when they were in their early twenties. Nassir inherited the acute thinking and scientific acumen of both of his parents, as did Nassir’s older brother, Bes, who was currently studying mechanical engineering in college.{"\n"}{"\n"}Nassir bent over to pick up one of the see-through robotic cars from the ground. He held it, tightened its antennae, and placed it back on the grass. As Jake looked at the transparent robot, it’s large wheels lined in tough black rubber, and the circuit board within, he couldn’t help but admit that it looked super cool—something he wanted to play with.{"\n"}{"\n"}A memory of him and Nassir shot into his mind. It was last year that Nassir’s brother, Bes, had come home from college during Thanksgiving break. Bes had brought home with him a gift for Nassir, a model rocketry kit. <Text style={{ fontFamily: 'gelasibro-italic' }}>The Apollo IV Starter Module.</Text> It was a three foot tall model rocket kit that took the largest of the manufacturer’s model rocket engines. The engine’s were not toy engines either; they contained real chemistry that when ignited and sent the rocket streamlining into the atmosphere. The box claimed the rocket could hit an altitude of two thousand feet. Nasir Bes and Jake were skeptical.{"\n"}{"\n"}Bes advised them at the end of Thanksgiving weekend to wait until an adult could drive them to a larger, more spread out field, where it would be safe to launch. The thing was, they couldn’t just wait. The sheer size of the rocket, the realistic paint job the manufacturer put on the chassis, the engines, and the thought of the whole thing accelerating into the sky, overcame every fear, nerve, and apprehension they had that they might get in trouble. Even Nassir, who was typically conservative when it came to these things, agreed they had to launch it, even if it was against his own brother’s advice.{"\n"}{"\n"}“Yea true dude. What’s the worst that could happen?” Nassir had said on the back of the bus. “It’s just a toy rocket.”{"\n"}{"\n"}Jake had nodded his head in agreement.{"\n"}{"\n"}After school the following day, they had walked over to Pond Park, which was a small neighborhood forest reserve a few blocks from Nassir’s house. On the walk, Jake stubbed his foot on a large tree root, and dropped one of the miniscule launch pad screws into a thick layer of forest leaves. <Text style={{ fontFamily: 'gelasibro-italic' }}>Not a big deal, there are two more.</Text>{"\n"}{"\n"}They walked on and soon reached the tiny pond buried in the spread of trees. They also caught sight of a few neighboring houses which sat just beyond the far edge of the pond, beyond a row of tall bushes.{"\n"}{"\n"}“Let’s be sure not to aim in their direction,” Nassir said.{"\n"}{"\n"}“Agreed,” Jake responded.{"\n"}{"\n"}They set up the launch pad in a stream of excitement. They funneled the engines into the bottom of the rocket chassis, packed in the engine wadding, attached the fuse, and clamped on the alligator clips. Then they set the rocket onto the launch pad’s silver launch rod.{"\n"}{"\n"}But something was slightly off.{"\n"}{"\n"}“It doesn’t look right,” Nassir lamented.  “The rod looks a bit flimsy; it’s not perfectly angled upwards. Did you screw it in tightly?”{"\n"}{"\n"}“Yes. Don’t worry. It’s only a few degrees off-center. I lost one screw back there, but how much of a difference can one tiny screw make? It looks fine.” Jake responded.{"\n"}{"\n"}“I guess. It <Text style={{ fontFamily: 'gelasibro-italic' }}>is</Text> pointed pretty straight up. And we did come all this way.” Nassir said.{"\n"}{"\n"}“Yea, exactly,” Jake responded, encouragingly.{"\n"}{"\n"}They double checked to make sure the alligator clips were securely attached to the engine fuses, then wired the twenty foot launch controller around a large oak tree. They got down on the ground and peered at the rocket.{"\n"}{"\n"}They looked at each other, then focused their attention back at the launchpad. “3!”, ‘2!”, “1!” They yelled.{"\n"}{"\n"}There was a loud high pitched fizzle as the engines detonated.{"\n"}{"\n"}“Holy! xxxx!”, they screamed in unison. They could see sparks starting to fly out of the end, and the rocket beginning to accelerate upward.{"\n"}{"\n"}But to their dismay, the rocket didn’t continue on its upward flight path–it curved–in the air–nearly ninety degrees and headed straight for the small house beyond the pond.{"\n"}{"\n"}<Text style={{ fontFamily: 'gelasibro-italic' }}>“Noo!”</Text> They yelled.{"\n"}{"\n"}Jake and Nassir looked at each other for an instant, then picked up the rocket pad and ran for their lives. They were never even sure if the thing actually hit the house, but they heard something crash. They had watched the news all night long fearfully,  praying to the heavens not to see anything about the incident, or any damage they incurred. They were both terrified they may have hurt someone. But nothing came of it. Nothing except what was most likely some broken glass and an elderly couple half startled to death in their bedroom.{"\n"}{"\n"}Jake tuned back into reality when saw a few more students approaching Nassir. He decided it was time to walk over.{"\n"}{"\n"}Nassir turned towards him and waved. <Text style={{ fontFamily: 'gelasibro-italic' }}></Text>“Hey Jake, how was the game?”{"\n"}{"\n"}Jake’s mouth twisted. <Text style={{ fontFamily: 'gelasibro-italic' }}>“</Text>It stunk. We lost. Got whooped.”{"\n"}{"\n"}“I’m sure you played well though. Here, take a look at this Raspberry Pi computer”. He picked up the green alien looking circuit board from the table and dropped it in Jake’s hand.{"\n"}{"\n"}Jake looked at the alien creation. “What on Earth is this thing?” He flipped the circuit board thing around in his palm. He noticed a few familiar ports.{"\n"}{"\n"}“It’s a computer. A real computer. It’s just smaller, and cheaper, so people can tinker and build whatever they want with it.” Nassir picked up one of the transparent robo-cars from the grass and pointed inside. “You see in here. These cars are using a Raspberry Pi computer to control their movement. This bot is even smart enough to avoid objects in the grass! We built it all with less than twenty five dollars of equipment.” Nassir said.{"\n"}{"\n"}Jake looked at the robot car, then the circuit board thing in his hand. It appeared completely alien, except for the USB ports he recognized. How could all of this metal and wire control anything? It made no sense. “This is super cool,” Jake said.{"\n"}{"\n"}Nassir spoke for a few minutes about the club and tried to get Jake to consider joining. “Maybe,” Jake said. He glanced over at the picnic area. “They are about to start the picnic. Let’s head over and grab a seat so we don’t miss out on the lunch food.”{"\n"}{"\n"}“Sure. Just let me put away these parts,” Nassir responded.{"\n"}{"\n"}They headed around the basketball courts and back around to the picnic area. A large buffet had been set up on the grass and a long line had already formed. Mrs. Blum was directing the students. Jake and Nassir slid into just as it began to grow even longer.{"\n"}{"\n"}Jake dug the large silver buffet spoon into the lightly peppered potato salad and plopped a massive dollop on his plate. When he was hungry he often took  much more food than his skinny frame demanded. He also tossed on a turkey sandwich, and poured himself a glass of Mrs. Abelton’s Peach Punch-ade. Nassir only took a small scoop of rigatoni and tomato sauce. Jake always noticed that Nassir never ate much, even with all of the thinking he did.{"\n"}{"\n"}They walked up to the grass. Jake scanned around for Ashely, hoping Nassir wouldn’t notice. He saw her sitting with Kimberly Rubin and Sara Keder. There were no mats near her. <Text style={{ fontFamily: 'gelasibro-italic' }}>Shame.</Text> They took a seat on an open blanket near the side park path as the students continued to pour into the buffet lines. A few minutes later, David Wright asked if he could sit with them.{"\n"}{"\n"}They boys spent the next few minutes in silence shoveling the food into their mouths. The turkey sandwich was decent, but the potato salad was delicious.{"\n"}{"\n"}“I can’t stand that guy,” Jake said as a large piece of turkey and mayo ejected from his mouth and hit the grass beside him.{"\n"}{"\n"}“Who, Dylan?” <Text style={{ fontFamily: 'gelasibro-italic' }}></Text>David Wright asked.{"\n"}{"\n"}“Yea. Did you see him run right into me? I’m not saying it hurt, I’m just saying what’s the point of him doing that to me?” Jake asked.{"\n"}{"\n"}David Wright put down his sandwich. “That looked like it hurt. I was glad to see you were ok when you got up. That guy definitely has issues. He talks a lot of trash. But who knows, maybe he’s a cool kid when you get to know him.” He continued wolfing down his sandwich.{"\n"}{"\n"}“I don’t think so.” Jake said.{"\n"}{"\n"}“He always gets in trouble in my social studies class, doesn’t seem like a nice guy,” Nassir added.{"\n"}{"\n"}They continued eating for a few minutes, until Nassir asked, “Jake, I forgot to ask, how’d you do on your Electronics and Woodworking project?”{"\n"}{"\n"}A tightening sensation ran up Jake’s chest. He gritted his teeth, then took another bite of his sandwich and chewed it slowly. “Mr. Harrison gave me a C. Can you believe that? He told me I didn’t follow the directions well. Meanwhile my project actually had a purpose. I thought that dude was going to give me an A. Boy was I wrong.”{"\n"}{"\n"}Nassir’s eyes softened. “Oh, no way, man. I’m sorry to hear that. I thought you were going to crush it.”{"\n"}{"\n"}Nassir never had to deal with any of this disappointment. He never saw anything less than an A in school. An urge ran through Jake that made him almost lash out at Nassir, but he took a deep breath, and calmed himself down.{"\n"}{"\n"}After lunch the students and teachers crowded behind the softball field to watch the teacher-student softball game. Mr. McGregory, the new gym coach, hit a home run in the third inning, which elicited loud cheers from the crowd.. Jake looked around. The students and teachers were all in high spirits.{"\n"}{"\n"}Mr. Caliman, the principal, came onto the field at the end of the game, holding a microphone.{"\n"}{"\n"}“Grapefield Middle students and teachers, today was a delightful day. Thank you to all of the students and staff that helped make this day happen. There could be no better way to celebrate our beautiful town of Grapefield. Students, the buses are in the same place they dropped you off outside the park gates. Please take your usual bus number home.”{"\n"}{"\n"}The crowd began filing down the sidewalk.{"\n"}{"\n"}“Have to help the club put everything away. I’ll see you tomorrow.” Nassir said.{"\n"}{"\n"}“See ya,” Jake replied.{"\n"}{"\n"}Jake rode the bus home alone. During the ride, he received a text from his mother.{"\n"}{"\n"}<Text style={{ textAlign: 'center' }}>Mom<Text style={{ fontFamily: 'gelasibro-italic' }}>: Will be home at 6. Picking up food.</Text></Text>{"\n"}{"\n"}He walked into his house right as the clock struck 4 pm. Jimmy was at his friend, David’s, house, so he had an hour of time to himself. He put his bag down, plopped on the couch, and flipped on the TV. He put on an Avengers movie, and let it play in the background, as he sorted through a bunch of texts on his phone. His brother walked in an hour later, briefly greeted Jake and went up to his room to play video games.{"\n"}{"\n"}The movie was nearly finished when he heard the loud <Text style={{ fontFamily: 'gelasibro-italic' }}>creak</Text> of the front door opening. His mom walked inside carrying her classic red leather work duffle and a few white plastic food take out bags. She put her peanut colored fall jacket on the coat hook and walked into the den.{"\n"}{"\n"}“Hello my oldest!” Her face brightened. “How are you? How was your day? I’m so glad Mr. Bennet let me out earlier than usual.”<Text style={{ fontFamily: 'gelasibro-italic' }}></Text>{"\n"}{"\n"}Diana Addison’s straight auburn hair flowed down past her shoulders. Her unblemished skin and prominent blue eyes made her appear fifteen years younger than her real age. But her nails were chipped and she had noticeable bags under her eyes. Most onlookers would perceive her as a beautiful woman that displayed the signs of a person trying to hold everything together.{"\n"}{"\n"}“I’m good. I’m starving. What have you got there? How was your day?” Jake asked.{"\n"}{"\n"}“Fine, fine. You know, the usual.” She smiled and proudly announced: “I got the Addison boy’s favorite. Sizzling Kitchen.”{"\n"}{"\n"}As the smell wafted towards him, his mood perked up. “No way, did you get the stir fry noodles?”{"\n"}{"\n"}“Sure did,” She responded exuberantly.{"\n"}{"\n"}Jake got up and followed his mother to the kitchen table. She put the bags down and set a white carton on each placemat. They didn’t even have to yell to Jimmy to come down; when the hit aroma entered his room he bolted down the stairs to join them.{"\n"}{"\n"}“No way, Sizzling Kitchen!” He hollered.{"\n"}{"\n"}Diana took out the chopsticks, egg rolls, a bunch of packets of soy sauce and spicy mustard, and a large container of white rice and set them in the middle of the table.{"\n"}{"\n"}“What are you waiting for?” She asked.{"\n"}{"\n"}The two boys ripped open their oyster pails and dug in. A scrumptious combination of steaming hot stir fry noodles, chicken, mushrooms,and spicy garlic sauce wrapped around their chopsticks; their grandmother taught them how to use them when they were both toddlers. The spice and steam reverberated through their sinuses, making their eyes water. The boys competed for the white rice, which they scooped into their oyster pails and mixed in with the noodles.{"\n"}{"\n"}“Slow down, you two. No one is going to take your food. Jeez,” <Text style={{ fontFamily: 'gelasibro-italic' }}></Text>Diana said.{"\n"}{"\n"}Jake and Jimmy smiled at each other and slowed their eating pace.{"\n"}{"\n"}“Jimmy, how was your day? Do anything special?” Diana asked.{"\n"}{"\n"}“Eh. Not really. The morning was normal; we went over the book we’re reading in class. In the afternoon we sat in a circle around Mr. Kedel and he read us lateral thinking problems. That was interesting, but I thought we were going to play more outside,” Jimmy said.{"\n"}{"\n"}“I see. And Jake, how was Rush Park? I’ve been dying to hear about it. How was your flag football game?” Diana asked.{"\n"}{"\n"}He hesitated for a moment. “It was good,” <Text style={{ fontFamily: 'gelasibro-italic' }}></Text>He said.{"\n"}{"\n"}Diana looked at him searchingly. “That’s it? Just ‘Good’?”{"\n"}{"\n"}“I was playing well in the beginning, but I dropped an easy pass. Butter fingers. We lost. I did catch one touchdown, though,” He responded dimly.{"\n"}{"\n"}“Cheer up kid! That’s more than most can ask for,” Diana responded. She smiled, still funneling small pieces of food into her mouth.{"\n"}{"\n"}“How was your defense Jake, did anyone score on you?” Jimmy asked.{"\n"}{"\n"}“No. No one scored on me. But I did miss a few easy plays on defense. So annoyed,” Jake said. He was aching to talk to someone about Dylan, but was too embarrassed.{"\n"}{"\n"}“Don’t beat yourself up Jake. I’m sure you did great. We all know you’re good at that game. Now doing your school work on time is another story,” Diana said. Jimmy gave off a light chuckle.{"\n"}{"\n"}“How was the set up, the picnic, and the other activities? I read in the PTA newsletter that the school had a lot of things planned for the park.” Diana asked.{"\n"}{"\n"}“Yea. They set up these lawn games, like cornhole, but I never had a chance to play. I checked out Nassir’s robotics booth. They built these obstacle-avoiding robots. I have no idea how he does it,” Jake remarked. “The picnic was tasty; I had a turkey sandwich with potato salad. Also, the gym coach hit a homerun over the park fence during the student-teacher game which was pretty sweet to watch.”{"\n"}{"\n"}“Sounds like you had a great time. When I was in school, they never set up events like that for us,” Dianna said.{"\n"}{"\n"}“I guess,” Jake responded.{"\n"}{"\n"}“How was your day?” Jimmy asked Diana.{"\n"}{"\n"}“Uh, boring, as usual...a lot of paperwork. But any day is a <Text style={{ fontFamily: 'gelasibro-italic' }}>great</Text> day when Mr. Bennet lets me off before seven.” She grinned.{"\n"}{"\n"}Jake sat there, slowly chewing his noodles. He knew something was bothering him, but he wasn’t exactly sure what it was–could Dylan be the sole cause? His mother looked at him as if she knew her son was upset, but she said nothing.{"\n"}{"\n"}The three of them finished their stir fried noodles. No one had room for the eggrolls, so Diana wrapped them in tin foil and stuffed them in the back of the fridge. She then wiped down the table, and the boys went upstairs to shower.{"\n"}{"\n"}A few hours later, Jake stood by his bed side window looking out at the Manitoba Maple. Beyond his backyard, he saw a car driving past with its yellow headlights on bright and there was a light breeze moving past. <Text style={{ fontFamily: 'gelasibro-italic' }}>Maybe life would be easier as a tree?</Text> He thought about the story Mrs. Blum told them about deforestation happening around the world. <Text style={{ fontFamily: 'gelasibro-italic' }}>Maybe not</Text>.{"\n"}{"\n"}He let out a heavy belch: fried noodles and soy sauce. His eyes fell on one of the tree’s leaves, it’s golden texture rustling slightly in the wind. He examined its veins and flawless geometry.{"\n"}{"\n"}<Text style={{ fontFamily: 'gelasibro-italic' }}>How does nature create such perfect things?</Text>{"\n"}{"\n"}When he looked closer, he noticed that the venules of the leaf appeared to be emitting a subtle radiance.{"\n"}{"\n"}<Text style={{ fontFamily: 'gelasibro-italic' }}>What the heck?</Text>{"\n"}{"\n"}When he looked up, he noticed the entire tree appeared to be emitting an extremely faint white hue, as if the tree were sitting on top of and obscuring a dimly lit star.{"\n"}{"\n"}<Text style={{ fontFamily: 'gelasibro-italic' }}>What is going on?</Text>{"\n"}{"\n"}He turned away and looked back, but the tree was still slightly illuminated by an unknown source. He looked around his yard, there were no light bulbs anywhere in sight, only the street lamps on the far side of the street. When he looked back again the effect was gone. He rubbed his eyes.{"\n"}{"\n"}<Text style={{ fontFamily: 'gelasibro-italic' }}>I think it’s time for bed.</Text></Text >
      </View >
    );
  }
}
