import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";
import GlossaryWord from "../Glossary/inline/GlossaryWord";

interface IProps {
  toggleGlossary: (id: string) => void;
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

export default class Chapter2 extends Component<IProps> {
  static navigationOptions = {
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
              uri: `https://res.cloudinary.com/dshxqbjrf/image/upload/v1633998380/chapter_symbol_sfj0ji.png`,
            }}
          />
        </View>
        {
          // Section 1 Below
        }
        <Text style={BookStyles.bookFont}>
          The 150th founding anniversary of the town of Grapefield, Wisconsin, was a celebratory event. The school board had planned the school trip to commemorate the day for nearly six months, receiving permission from Mayor Douglas Haggle to use
          Rush Park as the venue for Grapefield Middle’s students and faculty.{"\n"}
          {"\n"}Jake tussled with his athletic shorts and cleats as he tried to push them far enough into his bag to close the zipper. He picked out his best gear for the event. Flag football was today, and he didn’t know if Ashley might be watching.
          {"\n"}
          {"\n"}“Good morning, class,” Ms. Blum announced during the first class of the day. “Thank you everyone for arriving on time! We have a bright and wonderful day ahead of us. I’m going to fill out my attendance sheet quickly and then we’ll be
          heading right back to the buses!”<Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}To Jake’s relief, his teacher gave no inclination that she would quiz him on the assigned reading. He did read up to page eighty last night before the pizza came, but that was still twenty pages less than what was assigned.{"\n"}
          {"\n"}Jake sat next to his buddy David Wright on the bus. They spent the short ten-minute ride to Rush Park chatting about their work ethic.{"\n"}
          {"\n"}“I’m tired of doing this homework,” Jake blurted out. He felt a pang of pain inside when he thought of his speaker project.{"\n"}
          {"\n"}They laughed about how they often prioritized gaming and sports, and nearly anything else, over their academic responsibilities. Jake thought it was funny how little David cared about his grades.{"\n"}
          {"\n"}“You didn’t hand in any of those papers? Not one?” Jake asked, dumbfounded.{"\n"}
          {"\n"}“Nah, man. Didn’t feel like it. I only do the quizzes and tests,” David responded casually.{"\n"}
          {"\n"}Jake couldn’t believe someone had a worse work ethic than him. <Text style={{ fontFamily: "gelasibro-italic" }}>How can you be that casual about failing in middle school?</Text>{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe David was dealing with some issues at home that distracted him from his schoolwork</Text>, Jake thought.{"\n"}
          {"\n"}Jake scanned around the bus, looking for Ashley, and spotted her in the front where she was giggling with the girl sitting next to her.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I wish she was sitting next to me. I’d talk to her for sure.</Text>
          {"\n"}
          {"\n"}As the bus turned onto Honeysuckle Drive, the towering white oak trees of Rush Park came into view, their green crowns rustling ever so slightly as they fought back against the wind.{"\n"}
          {"\n"}The crisp Grapefield air flowed through Jake’s nostrils as he stepped out onto the sidewalk. He looked up to see the lush green of the sports pitch just beyond the fence, a glorious rectangle of freshly mowed grass glistening in the
          sun. <Text style={{ fontFamily: "gelasibro-italic" }}>I can’t wait to get on that field,</Text> he thought. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>He followed the mob of students and teachers through the park gate, towards
          a central meeting pavilion. Jake could see a few teachers setting up the front tables with fruit snacks, pitchers of juice, and other treats. The crowd pushed forward towards the picnic setup and huddled around Principal Whittle. He was
          wearing a brown suit, and had his hair combed over his receding hairline.{"\n"}
          {"\n"}“Welcome to Grapefield’s 150th Founding Anniversary Field Trip to Rush Park!” He wore a confident grin as he greeted his students. “I want to thank our teachers, aides, and staff for your many hours of hard work to make this event a
          reality. It is an absolute delight to be able to share this wonderful day with all of you.” He walked closer to the crowd who were sitting at picnic tables around him. “I know we’re all eager to get started. For the students who have signed
          up for a morning activity, please head there after I finish. The rest of you, feel free to explore the park, spectate on a morning game, grab a snack, participate in one of our wonderful lawn games, or chill out on some of Mrs. Ableton’s
          Peach Punch-ade! Use one of these handy agendas to keep track of the day’s events. Lunch will be at noon!” He paused and smiled widely at them all. “That’s it! Let’s get started!”{"\n"}
          {"\n"}The crowd dispersed instantly, and Jake headed for the sports pitch. As he approached, he could see the field lines were freshly painted. Derrick Henderson and David Wright were already on the sideline strapping on their flag straps.
          {"\n"}
          {"\n"}“Addison, you’re on the blue team with David and I, and the rest of us here,” Derrick Henderson said, nodding toward the kids behind him.{"\n"}
          {"\n"}Jake nodded and buckled on his blue flag straps. Craig Leechuck and a few other decent athletes were on his team as well as a few not so decent ones, like puny Matt Hill.{"\n"}
          {"\n"}Jake looked over to his opponents on the red team. The teams looked fairly matched. They had the massive five-foot ten William Keener, and the super speedy Keith Marcus along with a few less gifted athletes. The blue team’s coach was
          Mr. Zeig, Jake’s math teacher from last year. Mr. Zeig always had a lot of positive energy and spoke about his love of sports, which made him more relatable to Jake. He also made students laugh often with the somewhat ridiculous remarks he
          made, like when last year he mentioned he loved his dogs more than his children.{"\n"}
          {"\n"}Mr. Zeig brought the blue team into a huddle. His greasy slicked back hair shined in the morning light. “Let’s go, boys. This is what we were born to do!” The blue team laughed. “No, but in all seriousness, let’s get it. Good, solid
          play, kids!” They put their hands in the middle of the circle. “One, two, three, let’s go!” They repeated in unison, then clapped together, before they filtered onto the field.{"\n"}
          {"\n"}The team captains, Derrick Henderson and William Keener, ceremoniously shook hands in the middle of the pitch before the game began. Mr. Shneidmotter, one of the gym teachers, was refereeing the game. He looked back and forth at both
          teams, then blew his whistle to start the game.{"\n"}
          {"\n"}Nobody scored until the second quarter. The ball got loose from Derek Henderson. Kenyon Bloomfield from the red team scooped up the ball and ran it down the field for a touchdown. The red team went up 7-0.{"\n"}
          {"\n"}On the blue team’s first second quarter possession, Jake lined up on the far left side of the line of scrimmage.{"\n"}
          {"\n"}“C’mon Addison, get farther towards the sideline!” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Mr. Zeig yelled. The play was designed for Jake, the receiver, to fake hard left after the quarterback initiated the play, and
          then cut back right around the defender. Jake shuffled a few more feet towards the sideline and waited.{"\n"}
          {"\n"}“HIKE!” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Derek Henderson yelled.{"\n"}
          {"\n"}Jake’s quadriceps propelled him off the line. His peripheral vision blurred. Reality’s natural rhythms haltered. He darted straight two strides, then dug his cleats into the ground, mud spraying up into the air, and juked left. He cut
          back right around his defender, Roy Elanu. Roy went for the fake, and Jake took off running.{"\n"}
          {"\n"}Jake looked back to see Derek scanning the other side of the field, but a second later, Derek locked his inset eyes on an open target: Jake. An instant later, the football was revolving in the air. Jake sprinted harder, his eyes
          locked on the ball, in hopes of intersecting with pigskin’s parabolic flight path. The football was wobbling a bit as a strong gust of air passed by. Jake followed the ball’s arc intensely as it came down. He could feel Roy catching up, but
          it was too late. The football fell softly into Jake’s hands, and a few seconds later, Jake was in the end zone.{"\n"}
          {"\n"}His team cheered. Derek came running and jumped up to give him a hard chest bump. Jake glanced at the sidelines in hopes of seeing Ashley Martin, but to his dismay, she was nowhere in sight.{"\n"}
          {"\n"}In the fourth quarter, the game was tied 7-7, and Jake’s team was lined up on defense. The quarterback, William, yelled “Hike!”{"\n"}
          {"\n"}William stepped back, then tossed a short pass to Dylan Jenkins, a stubby, athletic, miscreant in Jake’s grade. Dylan sprinted left, and then cut back right through a hole of defenders. Jake ran away from his assigned man, darted left
          towards Dylan, and attempted to pull the flag off Dylan’s left hip, but Dylan rotated his hips right, and then cut back left hard suddenly, his left elbow colliding into Jake’s upper ribs. Jake fell to the ground hard.{"\n"}
          {"\n"}He rolled over to his side holding his rib. The pain was sharp, and it took a few moments for it to subside. A few of his teammates tried to help him up but he did it himself. “Crap, that hurt.” Jake’s face contorted in pain as he
          stood up.{"\n"}
          {"\n"}“You’re okay, Addison,” Derek said, who had run over to him. “Watch out for Jenkins. He doesn’t play fair.”{"\n"}
          {"\n"}Luckily, Dylan had been stopped a few feet further down the field, but two plays later, William hit Roy Elanu with a wide-open touchdown pass that put the red team up 14-7. Jake’s team didn’t score on the next possession, so the ball
          went back to the red team.{"\n"}
          {"\n"}There were four minutes left in the game and Jake’s legs were weak. Dylan lined up directly facing Jake. He wore an arrogant smirk, and his stout arms were covered in grass and dirt.{"\n"}
          {"\n"}When the play started, Dylan headed straight for him, as if to run Jake over clean. Jake tried to grab his flag but stepped out of the way at the last moment, fearing Dylan’s contact.{"\n"}
          {"\n"}“Watch out, dweeb,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Dylan spat as he ran past. Jake felt a pang of humiliation as Jake watched him run by. A play later Dylan scored. And thirty seconds later the game was over.
          {"\n"}
          {"\n"}After the defeat, Jake headed to the sideline, his eyes focused on the dirt. He could hear a few of his teammates arguing. He unstrapped his flags and tossed them in the bag and headed off the field, attempting to avoid everyone.
          “Good game, Addison! Keep your head up!” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>his coach yelled.{"\n"}
          {"\n"}Jake ignored Mr. Zeig and walked into the park, past the rows of cornhole, spike ball, and super-sized Four in a Row boards.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I’m such a wimp. Why was I so scared? I can’t stand letting that jerk overpower me.</Text>
          {"\n"}
          {"\n"}Jake bobbed and weaved through groups of students and teachers until he got onto the park’s dirt path. Thirty seconds later, he approached the student club tables. The thespian club had set up the table closest to the park entrance,
          next to the large oak tree. Ashley Kim, the president, and her thespian troupe wore distinctive costumes and chatted with some students gathered around them. The middle table belonged to the debate club, and the table furthest from him
          almost certainly belonged to the robotics club—Jake saw the large display board with a retro robot face painted on it in front, as well as kids playing with what looked like radio-controlled cars in the adjacent grass. Some of the cars
          appeared to be moving around autonomously, avoiding foam objects placed on the ground.{"\n"}
          {"\n"}He caught sight of Nassir sitting in a chair behind the table. He appeared to be describing the light green circuit board he was holding in his hands to an intrigued student. Jake watched Nassir speak to the student with unadulterated
          scientific enthusiasm. <Text style={{ fontFamily: "gelasibro-italic" }}>Dang, that kid is so smart</Text>.{"\n"}
          {"\n"}Nassir’s father was an engineer for a large chemical company, and his mother was a pediatric physician. His parents met in the United States, but they both immigrated from Egypt when they were in their early twenties. Nassir inherited
          the acute thinking and scientific acumen of both of his parents, as did Nassir’s older brother, Bes, who was currently studying mechanical engineering in college.{"\n"}
          {"\n"}Nassir picked up one of the see-through robotic cars from the ground, tightened its antennae, and placed it back on the grass. As Jake looked at the transparent robot, its large wheels lined in black rubber and the circuit board
          within, he couldn’t help but admit that it looked super cool—something he wanted to play with.{"\n"}
          {"\n"}A memory of him and Nassir shot through his mind. It was last year that Nassir’s brother Bes had come home from college during Thanksgiving break with a gift for Nassir—a model rocketry kit.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Apollo IV Starter Module.</Text> The rocket’s engines contained real chemicals that when ignited and sent the rocket streamlining into the atmosphere. The box claimed the rocket could hit
          an altitude of two thousand feet. Nasir, Bes, and Jake were skeptical.{"\n"}
          {"\n"}Bes advised them at the end of Thanksgiving weekend to wait until an adult could drive them to a larger, more open field, where it would be safe to launch. The thing was, they couldn’t just wait. The sheer size of the rocket, the
          realistic paint job, the engines, and the thought of the whole thing accelerating into the sky, overcame every fear, nerve, and apprehension they had that they might get in trouble. Even Nassir, who was typically conservative when it came
          to these things, agreed they had to launch it, even if it was against his own brother’s advice.{"\n"}
          {"\n"}“What’s the worst that could happen?” Nassir had said. “It’s just a toy rocket.”{"\n"}
          {"\n"}After school the following day, they had walked over to Pond Park, which was a small neighborhood forest reserve a few blocks from Nassir’s house. On the walk, Jake stubbed his foot on a large tree root and dropped one of the
          miniscule launch pad screws into a thick layer of forest leaves. <Text style={{ fontFamily: "gelasibro-italic" }}>Not a big deal, there are two more.</Text>
          {"\n"}
          {"\n"}They walked on and soon reached the tiny pond buried in the spread of trees. There were a few neighboring houses which sat just beyond the far edge of the pond, beyond a row of tall bushes.{"\n"}
          {"\n"}“Let’s be sure not to aim in their direction,” Nassir said.{"\n"}
          {"\n"}“Agreed,” Jake responded.{"\n"}
          {"\n"}They set up the launch pad, practically bouncing up and down with excitement. They funneled the engines into the bottom of the rocket chassis, packed in the engine wadding, attached the fuse, and clamped on the alligator clips. Then
          they set the rocket onto the launch pad’s launch rod.{"\n"}
          {"\n"}But something was slightly off.{"\n"}
          {"\n"}“It doesn’t look right,” Nassir observed.  “The rod looks a bit flimsy. It’s not angled upwards right. Did you screw it in tightly?”{"\n"}
          {"\n"}“It’s only a few degrees off-center. I lost one screw back there, but how much of a difference can one tiny screw make? It looks fine.” Jake shrugged.{"\n"}
          {"\n"}“I guess. It <Text style={{ fontFamily: "gelasibro-italic" }}>is</Text> pointed pretty straight up. And we did come all this way.”{"\n"}
          {"\n"}They double checked to make sure the alligator clips were securely attached to the engine fuses, then wired the twenty-foot launch controller around a large oak tree. They got down on the ground and peered at the rocket.{"\n"}
          {"\n"}They looked at each other, then focused their attention back at the launchpad. “Three! Two! One!” they yelled.{"\n"}
          {"\n"}There was a loud high-pitched fizzle as the engines detonated.{"\n"}
          {"\n"}“Holy—!” they screamed in unison. Sparks started to fly out of the end, and the rocket accelerated upward.{"\n"}
          {"\n"}But to their dismay, the rocket didn’t continue its upward flight path. It curved in the air nearly ninety degrees and headed straight for the small house beyond the pond.{"\n"}
          {"\n"}Jake and Nassir looked at each other for an instant, then picked up the rocket pad and ran for their lives. They were never sure if the thing actually hit the house, but they heard something crash. They had watched the news all night
          long fearfully, praying to the heavens not to see anything about the incident. They were both terrified they may have hurt someone.{"\n"}
          {"\n"}But nothing came of it. Nothing except what was most likely some broken glass and an elderly couple startled half to death in their bedroom.{"\n"}
          {"\n"}“Hey Jake, how was the game?” Nassir called, shaking Jake out of his thoughts.{"\n"}
          {"\n"}Jake’s mouth twisted. <Text style={{ fontFamily: "gelasibro-italic" }}>“</Text>It stunk. We lost. Got whooped.”{"\n"}
          {"\n"}“Oh, that’s too bad. Hey, check out this Raspberry Pi computer.” Nassir picked up the green alien-looking circuit board from the table and dropped it in Jake’s hand.{"\n"}
          {"\n"}Jake looked at the alien creation. “What on Earth is this thing?” He flipped the circuit board thing around in his palm. He noticed a few familiar ports.{"\n"}
          {"\n"}“It’s a computer. A real computer. It’s just smaller and cheaper, so people can tinker and build whatever they want with it.”{"\n"}
          {"\n"}Nassir picked up one of the transparent robo-cars from the grass and pointed inside. “You see in here. These cars are using a Raspberry Pi computer to control their movement. This bot is even smart enough to avoid objects in the
          grass! We built it all with less than twenty-five dollars of equipment.” Nassir said.{"\n"}
          {"\n"}Jake looked at the robot car, then the circuit board thing in his hand. It appeared completely alien, except for the USB ports he recognized. How could all this metal and wire control anything? It made no sense. “This is super cool,”
          Jake said, impressed.{"\n"}
          {"\n"}“If you think this is cool,” Nassir said, watching Jake examine the Raspberry Pi, “you should join our club.”{"\n"}
          {"\n"}Jake grunted noncommittally, handing the device back to Nassir, as he glanced over at the picnic area.{"\n"}
          {"\n"}Nassir spun the device around in his hands. “You should have seen the code that went into this, we used Python, this incredible coding language. You can do all sorts of things with it…control the car…implement interesting logic.”
          Nassir took out his cell phone. “Here, take a look, this is an example of a Python <Text style={{ fontFamily: "gelasibro-italic" }}>function</Text>…I named the function <Text style={{ fontFamily: "gelasibro-italic" }}>startRobot</Text>
          …functions let us create a set of reusable instructions in our programs. Here, we’re just <Text style={{ fontFamily: "gelasibro-italic" }}>defining</Text> the function, we have to <Text style={{ fontFamily: "gelasibro-italic" }}>call</Text>{" "}
          the function to use it later on. The <Text style={{ fontFamily: "gelasibro-italic" }}>print</Text> function lets us display information to our scree–”{"\n"}
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/earlylesson.png")} />
        </View>
        <Text style={BookStyles.bookFont}>
          {"\n"}“That’s cool, but they are about to start the picnic. Let’s head over and grab a seat so we don’t miss out on the lunch food,” Jake said.{"\n"}
          {"\n"}“Alright. Sounds good,” Nassir replied.{"\n"}
          {"\n"}A large buffet had been set up on the grass and a long line had already formed. Mrs. Blum was directing the students. Jake and Nassir slid in just as it began to grow even longer.{"\n"}
          {"\n"}Jake dug the large silver buffet spoon into the lightly peppered potato salad and plopped a massive dollop on his plate. When he was hungry, he often took much more food than his skinny frame demanded. He also tossed on a turkey
          sandwich and poured himself a glass of Mrs. Ableton’s Peach Punch-ade. Nassir only took a small scoop of rigatoni and tomato sauce. Jake always noticed that Nassir never ate much, even with all of the thinking he did.{"\n"}
          {"\n"}Jake scanned around for Ashely, hoping Nassir wouldn’t notice. He saw her sitting with Kimberly Rubin and Sara Keder. There were no open seats near her. <Text style={{ fontFamily: "gelasibro-italic" }}>Shame.</Text> Instead, Jake and
          Nassir took a seat on an open blanket near the side park path with David Wright.{"\n"}
          {"\n"}They boys spent the next few minutes in silence shoveling the food into their mouths. The turkey sandwich was decent, but the potato salad was delicious.{"\n"}
          {"\n"}“I can’t stand that guy,” Jake said as a large piece of turkey and mayo ejected from his mouth and hit the grass beside him.{"\n"}
          {"\n"}“Who, Dylan?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>David asked.{"\n"}
          {"\n"}“Yeah. Did you see him run right into me? I’m not saying it hurt. I’m just saying what’s the point of him doing that to me?” Jake asked.{"\n"}
          {"\n"}David put down his sandwich. “It looked like it hurt. That guy definitely has issues. He talks a lot of trash. But who knows, maybe he’s a cool kid when you get to know him.” He continued wolfing down his sandwich.{"\n"}
          {"\n"}“I don’t think so,” Jake said skeptically.{"\n"}
          {"\n"}“He always gets in trouble in my social studies class. Doesn’t seem like a nice guy,” Nassir added, looking darkly at Dylan.{"\n"}
          {"\n"}They continued eating for a few minutes, until Nassir asked, “Jake, I forgot to ask, how’d you do on your Electronics and Woodworking project?”{"\n"}
          {"\n"}A tightening sensation ran up Jake’s chest. He took another bite of his sandwich and chewed it slowly. “Mr. Harrison gave me a C. Can you believe that? He told me I didn’t follow the directions well. Even though my project actually
          had a purpose. I thought that dude was going to give me an A. Boy, was I wrong.”{"\n"}
          {"\n"}Nassir’s eyes softened. “Oh, no way, man. I’m sorry to hear that. I thought you were going to crush it.”{"\n"}
          {"\n"}Nassir never had to deal with any of this disappointment. He never got anything less than an A in school. An urge ran through Jake that made him almost lash out at Nassir, but he took a deep breath and calmed himself down.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>. . .<Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          </Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}Jake was chilling on the couch with Jimmy when their mom walked inside carrying her classic red leather work duffle and a few bags of takeout.{"\n"}
          {"\n"}“Hello, boys!” Her face brightened when she saw Jake. “How are you? How was your day? I’m so glad Mr. Bennet let me out earlier than usual.”<Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}Diana Addison’s straight auburn hair flowed down past her shoulders. Her unblemished skin and prominent blue eyes made her appear fifteen years younger than her real age. But her nails were chipped and she had noticeable bags under
          her eyes. Most onlookers would perceive her as a beautiful woman who displayed the signs of a person trying to hold everything together.{"\n"}
          {"\n"}“I’m starving. What have you got there? How was your day?” Jake asked.{"\n"}
          {"\n"}“Fine, fine. You know, the usual.” She smiled and proudly announced: “I got the Addison boys’ favorite. Sizzling Kitchen.”{"\n"}
          {"\n"}As the smell wafted towards him, his mood perked up. “No way, did you get the stir fry noodles?”{"\n"}
          {"\n"}“Sure did,” she said, wrapping him and Jimmy into a hug.{"\n"}
          {"\n"}Diana took out the chopsticks, egg rolls, a bunch of packets of soy sauce and spicy mustard, and a large container of white rice and set them in the middle of the table.{"\n"}
          {"\n"}The two boys ripped open their oyster pails and dug in. A scrumptious combination of steaming hot stir fry noodles, chicken, mushrooms, and spicy garlic sauce wrapped around their chopsticks; their grandmother taught them how to use
          them when they were both toddlers. The spice and steam made their eyes water. The boys competed for the white rice, which they scooped into their oyster pails and mixed in with the noodles.{"\n"}
          {"\n"}“Slow down, you two. No one is going to take your food. Jeez,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Diana said. "Jake, how was Rush Park? I’ve been dying to hear about it. How was your flag football game?” Diana
          asked.{"\n"}
          {"\n"}He hesitated for a moment. “It was good,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>he said.{"\n"}
          {"\n"}Diana looked at him. “That’s it? Just ‘Good?’”{"\n"}
          {"\n"}“I was playing well in the beginning, but I dropped an easy pass. Butter fingers. We lost. I did catch one touchdown, though,” he responded dimly.{"\n"}
          {"\n"}“Cheer up, kid! That’s more than most can ask for,” Diana said, smiling and funneling small pieces of food into her mouth.{"\n"}
          {"\n"}“How was your defense, Jake? Did anyone score on you?” Jimmy asked.{"\n"}
          {"\n"}“No. No one scored on me. But I did miss a few easy plays on defense. So annoyed,” Jake said. He was aching to talk to someone about Dylan but was too embarrassed.{"\n"}
          {"\n"}“Don’t beat yourself up Jake. We all know you’re good at that game. Now doing your schoolwork on time is another story,” Diana said, and Jimmy laughed.{"\n"}
          {"\n"}Jake sat there, slowly chewing his noodles. Jake knew something was bothering him, but he wasn’t exactly sure what it was. Could Dylan be the only cause? His mother looked at him as if she knew Jake was upset, but she said nothing.
          {"\n"}
          {"\n"}A few hours later, Jake stood by his bedside window looking out at the Manitoba Maple. <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe life would be easier as a tree?</Text> He thought about the story Mrs. Blum told them about
          deforestation happening around the world. <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe not</Text>.{"\n"}
          {"\n"}He let out a heavy belch of fried noodles and soy sauce. His eyes fell on one of the tree’s leaves, its golden texture rustling in the wind. He could see its veins and flawless geometry.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How does nature create such perfect things?</Text> When he looked closer, he noticed that the venules of the leaf appeared to be emitting a subtle radiance.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck?</Text>
          {"\n"}
          {"\n"}When he looked up, he noticed the entire tree appeared to be emitting a faint hue, as if the tree were sitting on top of and obscuring a dimly lit star. <Text style={{ fontFamily: "gelasibro-italic" }}>What is going on?</Text> He
          turned away and looked back, but the tree was still illuminated by an unknown source. Muffled yellow and gold rays came from the roots. There were no light bulbs anywhere in sight, only the streetlamps on the far side of the street. When
          Jake looked back again the effect was gone. He rubbed his eyes. <Text style={{ fontFamily: "gelasibro-italic" }}>I think it’s time for bed.</Text>
        </Text>
      </View>
    );
  }
}
