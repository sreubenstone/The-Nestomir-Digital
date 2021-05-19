import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import GlossaryWord from "../Glossary/inline/GlossaryWord";

interface IProps {
  toggleGlossary: (id: string) => void;
}

export default class Chapter1 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 1</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://image.freepik.com/free-vector/trophy-sketch-set_1284-4035.jpg`,
            }}
          />
        </View>
        {
          // Section 1 Below
        }
        <Text style={BookStyles.bookFont}>
          The 65-year old mahogany trophy case sat in the upstairs hallway like a sacred relic. The light bouncing off the iridescent glass panes gave the antique receptacle an almost mystical ambiance. Five rows of solid silver and gold. Five rows,
          two lifetimes, and more accumulated achievement than most mere mortals could expect to accomplish in thrice their expected lifespan.{"\n"}
          {"\n"}As he passed his hands through his straight, dark hair, Jake Addison stood there staring at the rows of medals and academic achievement.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How could anyone achieve this much? How did the genetic gifts skip over me?</Text> He pondered. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>He reached upward with his right hand
          and searched for a long brown lock above his ear which he had a tendency to twist when he was nervous.{"\n"}
          {"\n"}A few moments later, Jake’s eyes fell to the bottom two rows of the trophy case which were dedicated to his father, Jim Addison. The trophies varied in size but they all looked heavy.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Grapefield High School All-American Running Back, 1975.</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>Wisconsin Science Congress Competition, First Place Winner, 1974</Text>.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Juris Doctor, Yale Law School, Summa Cum Laude, 1982</Text>. There were so many trophies and degrees that they had to be stacked one behind the other on each row.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Where did he have the time to study?</Text> Jake looked more closely at the football photograph on the second shelf. It was from his Dad’s state championship winning high school football
          team. Jim’s gaze seemed to stare back at him confidently from the dormant trophy case. <Text style={{ fontFamily: "gelasibro-italic" }}>He looks so young here with all of this scruffy brown hair and his cut jawline</Text>.{"\n"}
          {"\n"}Jim Addison had been a star all his life. Jim followed in his father Willie Addison’s footsteps, Jake’s grandfather, when it came to athletics, academics, and life in general. Jim excelled in mathematics at a very young age. He jumped
          three grades in the subject when he was just eleven years old. He became the first middle schooler in Grapefield’s history to walk over to Grapefield High School for calculus class. He also became known for jotting down love notes as an
          eleven year old and tossing them at girls many years older than him.{"\n"}
          {"\n"}He was also a jock, an athlete. Jim was blessed with his father's powerful sub-torso. Enormous quads and thick calves propelled him into a stellar high school varsity football career. Years of intense athletic training, weight
          lifting, and a tenacious competitive spirit helped him carry Grapefield High’s 1974 spring team to a Wisconsin state championship. He was selected as a high school All-american that year. A ridiculous feat, considering all of his academic
          achievements.{"\n"}
          {"\n"}Yet, Jake’s father did not resemble his grandfather Willie in every way; Jim did not possess the same passion Willie had for the sciences. Instead of pursuing a scientific career, Jim had developed an intense interest in law and
          politics while studying international affairs at Princeton, and went on to Yale law school, where he graduated at the top of his class. Yale Law was followed by a tremendously successful legal career, where Jim became famous for outwitting
          and demoralizing construction defense attorneys and for racking up legal wins for his prominent construction company clientele.{"\n"}
          {"\n"}Jake’s eyes, which had a subtle light blue perimeter encapsulating his brown irises, traversed three trophy rows upward. The top rows of the trophy case were dedicated to his grandfather, William “Willie” Addison. Similar to his son,
          he grew up to become a high school football legend. <Text style={{ fontFamily: "gelasibro-italic" }}>Football and physics</Text> were his notorious obsessions. Willie grew up in Granbury, Texas, where, like his son, he led his high school
          football team to a state championship. Except he did it twice, during both his junior and senior seasons. Willie bore a striking resemblance to his son back in those days, except he had even broader shoulders, and possessed cunning, hazel
          eyes. Across his shelves lay all types of intimidating academic and athletic achievements.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            National Youth Physics Award, 1949. International Young Person’s Award in Mathematics, 1945. Texas High School Football State Champions, 1950. US PATENT 892801, Quantum Tunneling in Electronic Microchips, 1980. Riemman Recipient, 1955.
          </Text>{" "}
          The medals and accolades were even more densely stacked than his son’s.{"\n"}
          {"\n"}Willie Addison had also garnered a strong reputation for being an overbearing and arrogant man. Jake heard many stories throughout his life that testified to this fact. However, Jake’s father was always there to defend Willie’s
          legacy. Jim always said it was only a jealousy of Willie's own security with himself, not a pompous attitude, that made people say bad things about him. But somehow Jake knew there were two sides to his grandfather’s story.{"\n"}
          {"\n"}There was no doubt that Willie was a math and physics prodigy. As an eighteen year old, he made a name for himself in 1950’s academia. He did this when he self published key insights concerning a solution for the famous Riemann
          Hypothesis. It was a math problem that had stumped scientists and mathematicians for hundreds of years.{"\n"}
          {"\n"}Willie went on to study theoretical physics at Princeton, and then pushed forward with his Ph.D in particle physics. Willie Addision made a name for himself once again by publishing groundbreaking research papers which displayed to
          the scientific world certain subtleties of The Standard Model, the most respected theory for describing three of the four known fundamental forces in the universe.{"\n"}
          {"\n"}However, Willie, eighteen years later was pushed out of academia. It happened in the Fall of 1968, after a peculiar scandal involving Willie’s alleged plagiarization of his research partners. His university never officially accused
          him of wrongdoing, but they also never officially came to his defense. Six months later, out of frustration, and an atypical paucity of resources, Willie officially stepped away from academia and joined Quantum Teletronics, a cutting edge
          computing and electronics company at the time. It was founded by Willie’s college friend, Arthur Lemoire. Willie’s ingenius efforts at Quantum Teletronics ended up helping modernize the designs of the modern microchip. But a decade after
          joining Quantum, he was involved in yet another scandal; he was accused of stock fraud. After a litany of legal battles, and government fines, he was left jobless and penniless. A year later he died of health complications.{"\n"}
          {"\n"}Jake stood there for a moment longer looking at his implausible ancestry and then walked down the light blue carpeted hallway. He knocked on the door of his younger brother’s room.{"\n"}
          {"\n"}“What!? I’m about to drop into a battle royale!” His brother yelled.{"\n"}
          {"\n"}“Dude, we have to get to school. Mom is out with Aunt Holly, I told you,” Jake said.{"\n"}
          {"\n"}When he swung open the door he could see his brother Jimmy sitting on the floor with his back against the bed and a Playstation controller in his hand. His long, straight jet black hair fell over his adolescent face. He was wearing a
          white t-shirt and boxers. A game of Pub G was loading on the screen.{"\n"}
          {"\n"}“You’re not dressed?! Are you kidding me dude? I told you last night we’re headed for the bus stop at 7:50!” Jake shouted.{"\n"}
          {"\n"}Jake sometimes took his brother with him on the middle school bus when his Mom wasn’t around to take Jimmy to the elementary school bus stop. Grapefield Middle was connected to Grapefield Elementary by a short path, and the bus
          driver, Mr. Johnson, usually had no issue with it.{"\n"}
          {"\n"}“It takes me one minute to put on my clothes! Let me get in a practice game real quick, we’re not all as gifted as you!” Jimmy cried.{"\n"}
          {"\n"}It was true, Jake Addison had a knack for excelling at video games, but he put in the effort. He played Fortnite relentlessly, studied Twitch videos, and practiced against the toughest online opponents. For every weakness he noticed
          in his game, he put in the time required to improve.{"\n"}
          {"\n"}Jake had a unique ability to dominate Madden NFL games. He recently defeated an online opponent so badly that the kid had a mental meltdown over the microphone. There was one second left in the game, and Jake hit DeAndre Hopkins with
          a back-of-the-endzone game winning touchdown.{"\n"}
          {"\n"}“GOT EM”, Jake screamed.{"\n"}
          {"\n"}His opponent howled and whined in a high pitch wail for at least thirty seconds. He could have left the game immediately, but he stayed on to relish his victory.{"\n"}
          {"\n"}Jake watched as his brother’s fingers continued to push down on the controller’s buttons. “It’s 7:45 AM! Let’s go! I don’t have time for this man. Don’t act like a child!” Jake shouted in frustration.{"\n"}
          {"\n"}Jimmy’s face took on a sourpuss expression. “You’re not in control of me! You think you’re pops, but you’re just a middle schooler who wears that same stupid white hoodie every day!”{"\n"}
          {"\n"}Jake shook his head as he looked down at his Lucky Brand hoodie. It wasn’t inaccurate to state that Jake tended to re-wear clothing a little <Text style={{ fontFamily: "gelasibro-italic" }}>too</Text> often. The primary reason for
          this rewearing of his clothes was because he didn’t fully believe in <Text style={{ fontFamily: "gelasibro-italic" }}>always</Text> doing his laundry. He felt laundry was an inefficient time drain. He also felt that his clothing always
          appeared the same, unless they were covered in food stains. What was the point in wasting all of that water if his clothes looked clean?  And Jake didn't <Text style={{ fontFamily: "gelasibro-italic" }}>exactly care</Text> how he smelled.
          He knew he smelled <Text style={{ fontFamily: "gelasibro-italic" }}>alright</Text>. He knew that if he added the right amount of morning shower time and deodorant he could smell{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>pretty good</Text>. His mother Diana could not figure out where these weird habits manifested from. He also never had a girlfriend or a relationship of any kind. But he was only twelve, and
          in seventh grade, so that was perfectly ok.{"\n"}
          {"\n"}“Let’s go! Turn off the game now!” Jake shouted again.{"\n"}
          {"\n"}“Fine. Fine. Fine. I’ll show you how fast I get dressed,” Jimmy said. He put down the controller and flicked off the TV. He did get dressed quite quickly–it was a matter of tossing on a thick brown sweatshirt and a pair of light
          jeans. When he exited his room he made sure to look at Jake and say: “See. Took me three seconds!”{"\n"}
          {"\n"}The two of them hustled down the stairs. When Jake saw Jimmy head for the Cheerios on the kitchen counter, he shouted: “No time for food!”{"\n"}
          {"\n"}“Seriously?” Jimmy moaned. He diverted his route to the vanilla crusted cereal and circled into the foyer. Then the boys scooped up their book bags, exited the house, hopped across their tulip and rose entrenched lawn, and hit the
          Grapefield pavement in full stride.{"\n"}
          {"\n"}The two jogged side by side for fifteen seconds before Jimmy began to fall behind slightly. <Text style={{ fontFamily: "gelasibro-italic" }}>Let’s go!</Text> Jake yelled. Jimmy’s small arms rocked back and forth as he accelerated his
          pace to catch up with Jake.{"\n"}
          {"\n"}A few moments later, they were next to each other again in the center of the road, in a textbook-filled-bookbag induced jog-waddle; the rubber soles of their sneakers cutting across the freshly fallen gold autumn leaves. Jake caught
          sight of something on his left. Mrs. Henderson and her chihuahua Pedro looking at them curiously from the backdrop of her lawn. <Text style={{ fontFamily: "gelasibro-italic" }}>What is she looking at?</Text> He thought.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>There’s nothing to see here!</Text> He shifted his gaze back to the road.{"\n"}
          {"\n"}Their frenzied jog-waddle continued. It was half a minute later when they reached the Elm Road and Cedar Street intersection. Traffic was picking up as fellow Grapefielders headed for work, but Jake could see the school bus. It was a
          block down Elm street. The last child ran up the steps and the bus’s red stop sign began to retract.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>No! It’s leaving! Run!</Text> Jake shouted.{"\n"}
          {"\n"}They initiated a gut wrenching sprint, which may have stunted their growth due to the weight of their bags, but it didn’t matter: if their mother found out they missed the bus again, their lives were over anyway. Jake and Jimmy
          sprinted for the bus, as their backpacks oscillated up and down, impeding their normal planes of motion.{"\n"}
          {"\n"}They were only twenty feet from the bus when its air brakes unleashed a giant gasp of air.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Nooo!</Text> The two brothers gasped simultaneously. This would be their mother’s last straw.{"\n"}
          {"\n"}But then something unexpected happened. The bus stopped. And the door flung open.{"\n"}
          {"\n"}They looked at each other, then jettisoned up the steps of the school bus. As they ran up the steps Jake said,  “Thank you, thank you, Mr. Johnson. This is the last time I promise.”{"\n"}
          {"\n"}Mr. Johnson, the bus driver proceeded to shake his head in disappointment; this was the second time he had to wait for them in the past three school mornings. “This is the last time kids, I’m telling you!”{"\n"}
          {"\n"}“It won’t happen again,” Jake repeated as he trekked down the aisle.{"\n"}
          {"\n"}As he walked forward, Jake saw a few familiar faces looking up at him. Sam Decker, his little league baseball teammate, Alexandra Carter, a brunette girl a grade above him, who sometimes shot him hard-to-interpret looks (he could
          never tell if she was grinning at him, frowning, or simply staring into space). And there was Jessica Samson, a girl in his grade, whose mother did yoga classes with Jake’s.{"\n"}
          {"\n"}He urged Jimmy to walk faster down the aisle. As they got to the last row of the bus, they sat down, and Jake nudged his brother into the window seat. Across from them, sat his good friend Nassir.{"\n"}
          {"\n"}“Jake! Glad you made it! I saw you two sprinting back there,” Nassir said eagerly. He wore a goofy smile on his tan face. “Did you get a chance to watch the quantum computing documentary I sent you last night?”{"\n"}
          {"\n"}Jake used his bottom to push Jimmy closer to the window (which caused Jimmy to let out a slight groan).{"\n"}
          {"\n"}“No. I didn’t,” Jake responded.{"\n"}
          {"\n"}“Oh. Shame.” Nassir’s smile dissolved. “That’s too bad.<Text style={{ fontFamily: "gelasibro-italic" }}>”</Text> Nassir paused for a moment, then his eyes widened again. <Text style={{ fontFamily: "gelasibro-italic" }}>“</Text>These
          computers, their chips, their processors, they can be in like more than one place at once. It’s wild. There’s this thing called superposition and quantum entangle—”{"\n"}
          {"\n"}Jake cut him off. “Yes, I know you’ve told me about quantum computers before. Last week on the bus. I remember. I just didn’t get the time to watch it.”{"\n"}
          {"\n"}“Oh,” Nassir said disappointedly. He began to pick at a hole developing in the bus seat in front of him. His hair was too long for his head and it was sticking up sporadically at the top.{"\n"}
          {"\n"}Jake said a few moments later, “I hope Mr. Harrison gives me an A on my project...I took the time to wire the speakers out of the front of the case like I told you I was considering doing. It wasn’t easy.”{"\n"}
          {"\n"}Nassir turned back toward him. “For your Woodworking and Electronics class? Oh yea! You told me about that last week. That’s awesome you actually did that,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Nassir said. “I’m
          sure you’ll impress Mr. Harrison.”{"\n"}
          {"\n"}Jake looked outside as they passed by a row of quaint tudor houses–Grapefield was a cozy suburban town, at least most of it. Located in central Wisconsin, it was a suburb that one might find in a feel-good American TV show. The houses
          were charming and quaint. Parents usually had two to three children. The summers were hot. The winters were cold. The Fall was particularly beautiful. Parents, like anywhere else, prayed for the best for their children’s futures. School was
          competitive, but not as competitive as some of the suburban towns on the east and west coasts. Life was pleasant here for most.{"\n"}
          {"\n"}As he looked out the window, he spun his project submission around in his mind. He visualized the modifications he made to the plexiglass case. The two holes he soldered on the top. The red wires running out of them to the speaker. He
          would get his project grade back today—and he had a good feeling about it.{"\n"}
          {"\n"}“The school trip to Rush Park is tomorrow. Think it’ll be fun?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Nassir asked.{"\n"}
          {"\n"}“It should be a decent time. But it’s rad we get the entire day off. I signed up for flag football in the morning. I’m pumped for that<Text style={{ fontFamily: "gelasibro-italic" }}>,”</Text> Jake responded.{"\n"}
          {"\n"}“Yea! And we’re setting up a demo for the Robotics Club. I can’t wait to show that off. We have a bunch of robot cars and gizmos that will be moving around on the grass,” Nassir replied.{"\n"}
          {"\n"}“Yea, that sounds cool, I will try and come check it out,” Jake said. <Text style={{ fontFamily: "gelasibro-italic" }}>Will I though?</Text> He looked out through the window again at the Grapefield streets. They were noticeably pretty
          this time of the year. A creamy yellow and brown luster was emitted from everywhere in sight, as the fall leaves cascaded on top of lawns, roofs, and freshly laid pavement. They passed by the Grapefield town hall, where Jake’s aunt (his
          mother’s sister), Holly, worked. When they passed by the Grapefield train station, he saw people getting on the train, on their way to work.{"\n"}
          {"\n"}The bus then turned right on Barley street. Three minutes later, they drove past Grapefield Middle’s entrance gate and a minute later they came to a stop in front of the school’s main entrance.{"\n"}
          {"\n"}“See you later,” Jake said to Nassir as they exited the bus. Nassir waved back and then joined the swath of middle schoolers funneling into the school’s front doors. Jake could see his friend Derek Kladler’s gigantic head standing out
          in the crowd.{"\n"}
          {"\n"}The brothers headed for the path that took them to Grapefield Elementary. They curled down the sidewalk in front of the middle school, passed the baseball fields and tennis courts, and then headed down the short woody road that led to
          the back of the elementary school. When they stood thirty feet from the back of the building Jake said: “Go straight to Mr. Zobel’s class. No funky stuff. I will see you later.”{"\n"}
          {"\n"}He stood there for a moment as he waited to confirm his brother walked inside his school safely. He then retraced his path back up to Grapefield Middle’s main entrance and nestled himself into the flock of students.{"\n"}
          {"\n"}As he funneled through Grapefield Middle’s main entrance, he could see that the central hallway was clearing out, which meant that the bell was about to ring. He hustled down the main corridor, up the staircase at the end of the hall,
          and headed into his first period class: English. He dropped into his desk right as the bell rang.{"\n"}
          {"\n"}Jake’s English teacher closed the door and began her Monday morning announcements. “Good morning class,” Mrs. Blum said in her typical high-spirited tone. "I hope everyone did the assigned weekend reading. Today I want to break down
          the symbolism used by S.E. Hinton in the beginning of the novel. But before we do that, remember our great town of Grapefield’s one hundred and fiftieth founding anniversary celebration at Rush Park is tomorrow! Yay!" She raised her hands
          in the air and clapped. "We will meet in this classroom first period as we normally do, then head back to the buses. I repeat we will meet here, then head back to the buses which will take us to Rush park for a day of Grapefield festivities
          and celebrations! Now please open The Outsiders to page sixty-seven."{"\n"}
          {"\n"}Jake had ambivalent feelings towards Mrs. Blum. She often directed questions at him when she anticipated he had not done the homework. Jake also couldn’t help but notice that she often wore too much lipstick. It seemed to run down
          over her the edge of her bottom lip, generating what appeared to be a secondary <Text style={{ fontFamily: "gelasibro-italic" }}>Labium inferius oris</Text>. It sometimes made it hard to pay attention to what Mrs. Blum was saying. He did
          however find some of her class discussions interesting, like topics concerning character psychology.{"\n"}
          {"\n"}Jake grabbed his copy of The Outsiders from his book bag. The bookmark was still set to page fifteen, he had not done the reading. He looked up cautiously, knowing that Mrs. Blum was on the hunt for prey. He then slowly put his head
          down and tried to look as inconspicuous as possible. He was going to be upset if he got called on again. The first question went to David Wright who was passed out in his desk in the front right of the classroom.{"\n"}
          {"\n"}“Mr. Wright, how would you best describe S. E. Hinton's use of the poem <Text style={{ fontFamily: "gelasibro-italic" }}>Nothing Gold Can Stay</Text> in the story?” Mrs. Blum asked.{"\n"}
          {"\n"}David picked his head. He hesitated for a moment, and then spit out: “Uh, wait, the symbolism was when Pony Boy spits at the Socs.”{"\n"}
          {"\n"}A few students in the front row giggled. Mrs. Blum’s face turned deadly. “Nice try, David. But that was not the question I asked. I was not asking about symbolism.” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>She took a
          deep breath. “David, make sure you’ve read up to page one hundred by tomorrow morning, or I’m taking your name off the bus list for the field trip. Do you understand?”{"\n"}
          {"\n"}David Wright shook his head in acknowledgement, then slumped further down into his desk.{"\n"}
          {"\n"}“Anyone have an answer?” Mrs. Blum’s eyes scanned the room like a newly commissioned terminator. This was her territory. Her pupils traversed left to right, then right to left, across the room.{"\n"}
          {"\n"}“Who haven’t I heard from lately?” She continued to scan through the rows of students. “How about you, Mr. Addison? What are your thoughts on the poem?”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Are you kidding me?</Text> Jake thought to himself. <Text style={{ fontFamily: "gelasibro-italic" }}>How does she always freaking end up on me?</Text> His heart beat accelerated slightly,
          part out of nerves, part out of frustration. He didn’t have the energy or the patience to make up a good excuse. “I’m sorry, I fell asleep early last night, I didn’t read it.”{"\n"}
          {"\n"}A few girls in the class who were looking at him chuckled at his honesty.{"\n"}
          {"\n"}“Well. You and Mr. Wright are in the same boat. Page one hundred by tomorrow morning.” Mrs. Blum went on with the lecture.{"\n"}
          {"\n"}It did not take a clairvoyant to recognize that Jake Addison had a tendency for procrastination. When an assignment was given, he usually waited until the last second to complete it. When he had an important test, the only time he
          opened a book to study was the night before. He did not have enough life experience to understand the concept of work and discipline. He thought those were just annoying words your parents and teachers used when they wanted you to conform
          to the status quo. All in all, it was apparent that the things Jake enjoyed were prioritized, and the things he didn’t much care for were backlogged — he just didn’t know any better. Yet.{"\n"}
          {"\n"}He did, however, put up decent grades in most classes, including English and Social Studies. This fact often annoyed his teachers as he clearly did not exert maximum effort.His strong memory and rational thought process helped him
          power through late night studies and important exams.{"\n"}
          {"\n"}In math, his grades were erratic. Sometimes he caught onto topics quickly, and as a result got through the homework and exams with flying colors. He triumphed with the understanding of irrational numbers and the laws of right
          triangles. His success at these topics hinted at the fact he had his father’s blood in his veins. But in other mathematics topics, he struggled. For example, he found himself completely lost when it came to solving a system of linear
          equations, or working with probability functions.{"\n"}
          {"\n"}Oftentimes, when coming across complex topics, he would often feel a weakness deep down, and as a result, he struggled to muster up the learning energy to push forward. In his science classes he consistently received low B’s; topics
          just never completely clicked. His mother found his science performance bizarre because his preadolescent math and science test scores had been off the charts. But something happened. He had lost something. He knew he was missing a certain
          desire, a certain purpose. But he couldn’t find any answers.{"\n"}
          {"\n"}As Mrs. Blum went on about the literary elements employed by S.E. Hinton, he stared at the clock: twenty minutes until Woodworking and Electronics. He fidgeted with his pen as he pondered what grade Mr. Harrison was going to give him.
          {"\n"}
          {"\n"}“I think Ponyboy is actually Jealous of Dylan,” said a sweet sounding voice.{"\n"}
          {"\n"}Jake picked his head up when he heard Ashley Martin answer the question. The voice was a beautiful echo radiating through the spheres of the heavens. It might as well have been the pluck on Aphrodite’s harp. He glanced at her straight
          black hair. It probably smelled of strawberries and other magical things girls used to wash their hair. He had gone to elementary school with Ashley in sixth grade, and now seventh. But he had never really communicated with her and that was
          embarrassing. He told himself he was stronger than that, but the most he ever accomplished was a series of "heh, hi, ho" grunts aimed in her direction as he held a door open for her last year during lunch. He wasn’t even sure she said
          anything back. He was desperate to find the courage to talk to her in some fashion, but when the opportunities arose, his mettle wasn’t there to strike.{"\n"}
          {"\n"}Ding. Ding. Ding. Ding. The first period bell rang, cutting off Mrs. Blum’s response. The students rose up and packed their bags. They waved bye to Mrs. Blum and headed for their period two classes.{"\n"}
          {"\n"}Jake walked out of the classroom and hustled back down the central staircase. When he got to the first floor, he could see the downstairs hallway packed with students buzzing in both directions. Some of the herd was nestled in large
          groups, giggling about unknown topics. Some walked as lone animals, focused on their next set of classes, or their next quiz.{"\n"}
          {"\n"}Jake reached the main hall and turned down the long corridor. He walked another hundred feet before pausing to glance upward at the hallway light fixtures, which for some reason, his mind transformed into juicy white tappable things.
          Instinctively, he bent his knees, but at the last moment, he aborted his jump.{"\n"}
          {"\n"}Last year he developed a habit of jumping up and gently tapping them. On one occasion, Mrs. Eckberg, an eighth grade math teacher, and also one of the school’s deans, caught him red handed. (He hadn’t seen her standing in the
          doorway). “Don’t you ever do that in my hall! This is a school, not a gymnasium!” She had yelled in a loud, angry voice. Jake was convinced she overreacted. She even called his mother and gave him one day of detention over the one time
          (documented) offense. Jake thought it was an abuse of her deanly power, but his mother thought differently. She said he should have known how to behave and should be responsible for his actions. Her response made him cringe.{"\n"}
          {"\n"}Jake continued walking. The elective classes were tucked into the far end of the school, away from most of the other classrooms. It felt like a different building over here—almost like a hidden silo where only certain eyes could see. 
          He turned left into the short electives corridor and entered Woodworking and Electronics with two minutes to spare. Mr. Harrison was sitting at his desk scrolling through something intently on his computer.{"\n"}
          {"\n"}Jake arrived at his seat at a workbench in the back of the classroom. His classmate Jason Cheng, was already sitting down at the table.{"\n"}
          {"\n"}“Hey dude, how’s it going,” Jake said.{"\n"}
          {"\n"}“Not much man, just nervous for 8th period. Getting my Civil War paper back today. I’m terrified,” Jason replied.{"\n"}
          {"\n"}Jake pulled out his Woodworking and Electronics folder. “Ah. Yea, my paper isn’t due for three weeks. Was the assignment that hard?”{"\n"}
          {"\n"}Jason smirked as if the assignment was so difficult it wasn’t even worth discussing. “Yea man, it was...so many details...and so much reading. I thought I was never going to finish it.”{"\n"}
          {"\n"}“That stinks. Not looking forward to that..don’t we get our speaker project grades back today in this class? I kinda went a little outside the box with mine,” Jake said.{"\n"}
          {"\n"}“Yea, we are supposed to get the grades back. I did see you finagling with the speaker. The approach looked...intriguing.” Jason let out an awkward giggle. “I just followed the instructions. Didn’t have that much time, I was focused
          on Mr. Gerber’s Civil War paper.”{"\n"}
          {"\n"}They turned their attention to Mr. Harrison.{"\n"}
          {"\n"}“Class, today I will be handing back your projects, then your grade sheets.”{"\n"}
          {"\n"}Mr. Harrison wore his typical clunky grey corduroys and partially untucked saggy button down shirt. He began to walk down the aisles, taking the speaker projects from his large tupperware basket and placing them on each student’s
          desk. A minute later he approached Jake’s bench.{"\n"}
          {"\n"}“Mr. Addison, hmm, here you are!” He placed the plexiglass creation in front of Jake.{"\n"}
          {"\n"}Jake pulled his creation closer to him. The plexiglass casing had two punctures on the top that he had made with a soldering iron. Two wires ran from inside the plexiglass case, from the circuit board on the bottom, out through the
          holes into the external speaker. The bottom of the plexiglass was raised at the bottom, which allowed the pre assembled electronic keyboard to stick out.{"\n"}
          {"\n"}The assignment asked to follow steps one through twelve on the project instruction sheet. If these steps were executed correctly, each student would end up with a home-made electronic keyboard, that played music from a speaker.{"\n"}
          {"\n"}Jake thought the instructions made limited sense. The manual asked for the speaker to be placed inside of the case, facing the user. This bothered Jake because it wasn’t a practical way to build a real musical device — you wouldn’t
          obstruct the sound by placing the speaker inside of the case as the instructions asked. It should be positioned in a way that makes it easier to hear. Jake also hated the direction the speaker was facing.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>You don’t play a keyboard for yourself, you play it for an audience.</Text>
          {"\n"}
          {"\n"}Something had come over him two weeks ago when he started putting project together. It was an enthusiasm he hadn’t felt in a long time. He soldered two holes on top of the plexiglass case, ran the two wires through them, and glued the
          speaker to the top so it faced away from the user. He assembled the circuit board to the keyboard, then he snapped in the battery back, and voila, he had built a useful piece of electrical equipment.{"\n"}
          {"\n"}Jake was extremely proud of his creation, and he didn’t see any harm in his slight modification to the instructions. The keys worked. The keyboard notes projected outward. It also looked cooler. It was a more visually enticing
          contraption. He was confident Mr. Harrison would be pleased.{"\n"}
          {"\n"}After Mr. Harrison finished handing out the projects to each student, he walked to the front of the room and picked up a stack of folded white papers: the grade sheets.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Why am I so nervous?</Text> This wasn’t a make or break project, it was just an elective. Jake twirled the lock of hair above his right ear aggressively as he watched the papers being dropped
          on each student’s work bench.{"\n"}
          {"\n"}When Mr. Harrison was three students up, Jake felt an acidic bile dribble up to the back of his throat. This could be his moment. He looked at Jason Cheng briefly, then looked back at the teacher.{"\n"}
          {"\n"}“Mr. Addison.” Mr. Harrison dropped the folded white paper neatly in front of him, and then moved onward. Jake watched Jason Cheng out of the corner of his eye unfold his grade sheet. Jason’s facial expression was apathetic.{"\n"}
          {"\n"}Jake couldn’t wait any longer; he unfolded the paper.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}>C</Text>
          </Text>
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}>Directions not followed properly.</Text>
          </Text>
          {"\n"}
          {"\n"}His stomach sunk into his lower gut. He opened the paper again. He read it right. C.{"\n"}
          {"\n"}He clenched his jaw. His heart began beating faster. He instinctively turned towards Jason.{"\n"}
          {"\n"}“I got a freaking C. What did you get?” Jake asked in a suppressed tone that attempted not to make his frustration that apparent.{"\n"}
          {"\n"}Jason turned the paper towards him.<Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}>A-</Text>
          </Text>
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}>Well done. Soldering could have been cleaner.</Text>
          </Text>
          {"\n"}
          {"\n"}“Better than I expected,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jason said. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>“</Text>Wow. Nice,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake said in a pinched voice, as the color drained out of his face.{"\n"}
          {"\n"}He looked at Jason’s project. <Text style={{ fontFamily: "gelasibro-italic" }}>That’s crap.</Text> It looked identical to the diagram on the project worksheet.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>His project is so basic.</Text> He looked around at the other workbenches.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            It’s exactly what everyone else did! I know he followed these lame directions – but he didn’t use his mind at all! I tried to think outside the box – literally! This is ridiculous! What could be running through that man’s small head! To
            heck with this class!
          </Text>{" "}
          Jake’s blood boiled.{"\n"}
          {"\n"}Mr. Harrison started a new topic, which was focused on the flow of electrical current through resistors, but Jake was hearing none of it. He was done listening for the day. He deliberately stared at the clock for the remainder of the
          period. He wanted Mr. Harrison to know he wasn’t paying attention, but his teacher didn’t seem to notice. He got up the instant the bell rang. He was tempted to confront Mr. Harrison about his project grade as he walked for the door, but
          decided it was of no use. <Text style={{ fontFamily: "gelasibro-italic" }}>What’s that doof even going to do. Change his mind?</Text>
          {"\n"}
          {"\n"}Gym passed by in a blur. The indoor kickball game helped take his mind off his grade–he even slammed a home run into the back wall on his first at bat. However, the instant the game concluded, the frustration seeped back into his head
          like water rushing over the floodgates of a hurricane-ridden city.{"\n"}
          {"\n"}Jake walked out of eighth period social studies three minutes after the bell. Most of the other students had already funneled into their ninth period classrooms. He picked up his pace in the central hallway, as to not be late for
          ninth period ceramics, but he immediately modified his gait,  when Ashley Martin, carrying her large purple shoulder bag, came strutting down the hall. Her shiny black hair fell just below her waist. As they walked towards each other, he
          attempted to position himself into the optimal position to display coolness. Jake did his best to appear calm–but with each step he took he became increasingly awkward.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Don’t trip...and say something, anything,</Text> he thought to himself. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>But as they passed by, nothing came out of his mouth. Ashley
          had actually let out a friendly smile, and Jake had not even returned it. He just passed by awkwardly.{"\n"}
          {"\n"}As he sat on the back school bus, he was frustrated–with school and most of all, with himself. <Text style={{ fontFamily: "gelasibro-italic" }}>How can I be so weak?</Text> He was ready to get home and lock himself in his room for a
          while, but he reminded himself that he had to make sure his brother Jimmy was fed. His mother had messaged him during ninth period to inform him that she was going to be working late.{"\n"}
          {"\n"}When he got home Jimmy was making poptarts in the kitchen. Cinnamon and raspberry molecules whirled around the room, creating eddies of sugary air that made Jake’s mouth water. “Hey man. Don’t eat too much. Mom left us money to order
          pizza from Antoninos later. And don’t forget to shut off the toaster,” Jake said.{"\n"}
          {"\n"}Jimmy sat down on a chair at the kitchen counter and began to cram the frosted raspberry treats into his small piehole. “Ok<Text style={{ fontFamily: "gelasibro-italic" }}>.”</Text> A few crumbs fell from the top of his mouth and fell
          on the floor. “I’m only eating two, don’t worry. And the toaster is already off.” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jimmy glanced downward to see his mess taking shape.{"\n"}
          {"\n"}Diana knew it was not ideal to have her younger son come home before her eldest, even if it was only for a few minutes, but she had to trust some parts of the system the family had set up. Being a single mother was a struggle, and
          Jake did his best to take care of his brother when Diana had to work late.{"\n"}
          {"\n"}“Ok. Enjoy those pop tarts. I’m headed upstairs. Don’t do anything stupid. And clean those crumbs up, dude,” Jake said sternly.{"\n"}
          {"\n"}He headed up stairs with his backpack still hanging from his shoulders. His mood was sullen, but missing the school trip tomorrow would make it even worse. He had to summon the energy to get Mrs. Blum’s reading done, or else he was
          going to miss the football game. He turned down the small upstairs hallway, passed the trophy case–giving it a brief look as he did so, then pushed open the door to his room.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I need a few minutes before I start this reading.</Text> He tossed his backpack on his desk chair and walked over to his bedroom window. The sky was turning a menacing grey. The maple tree
          had dropped so many leaves on his small backyard lawn that the grass was no longer visible.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe I should offer to rake them? That would take some stress off Mom. Maybe I’ll ask her when she gets home.</Text> He rolled over onto his bed, and put his hands in back of his head. He
          thought for a minute about the football game tomorrow, but the trophy case creeped back into his mind again. None of those trophies were his; he had no accolades, no real accomplishments. Then a pain shot through his stomach when he thought
          of Mr. Harrison and his project grade. <Text style={{ fontFamily: "gelasibro-italic" }}>What’s the point of any of this?</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>I can’t succeed.</Text> He could hear the wind starting to pick
          up behind him.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            I tried to think outside the box. I get a freaking C! I can’t even find the courage to open my mouth to Ashley! Why am I this way? I can be intelligent can’t I? How did my father do it? How did my grandfather do it? Did they cheat?
          </Text>
          {"\n"}
          {"\n"}He stormed over to his backpack and unzipped it. He ripped the speaker contraption, the project he put so much time and focus into, from his bag. <Text style={{ fontFamily: "gelasibro-italic" }}>Worthless piece of junk.</Text> He
          jumbled it around his hands. He looked at the speaker with its felt front lining, the wires, and the soldered holes in the plexiglass container. Rage shot through him. He cocked back his arm and threw it as hard as he could against the
          front wall.{"\n"}
          {"\n"}Everything shattered–the fundamental constituents of the project lay strewn all over the floor. The speaker was wobbling like a spinning top by his back wall. The plexiglass case exploded, leaving tiny transparent shards all over his
          carpet. The circuit board cracked into smaller fragments. There were wires and other small electrical components spread out all over. For a brief moment he felt a sharp pang of guilt. Then the aggravation seeped back.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I hate trying to be something I’m not.</Text> With his face covered by his hands, he began to breathe deeply. <Text style={{ fontFamily: "gelasibro-italic" }}>How can I find any peace?</Text>
          {"\n"}
          {"\n"}His tantrum had turned into exhaustion, and he had found his way to his bed.The explosions of thunder woke him up two and a half hours later. Through the window, he could see evening rain coming down in sheets. He glanced at his
          phone–it was 6 pm. <Text style={{ fontFamily: "gelasibro-italic" }}>How did I pass out for that long?</Text> He pulled the covers off him and put his sock covered feet on the ground. He noticed that he felt a bit calmer than before his
          slumber; his own storm may have passed, at least for now.{"\n"}
          {"\n"}When he heard the sound of the playstation rumbling away from down the hall, he stood up and walked over to his brother’s bedroom. <Text style={{ fontFamily: "gelasibro-italic" }}>That kid never stops does he?</Text> He knocked once,
          then gently opened the door.{"\n"}
          {"\n"}Jimmy’s head turned towards him. “There you are!” He shouted. His hands hammered down on the directional pad of the game controller. Fortnite gameplay flashed across the screen.{"\n"}
          {"\n"}“Where were you?” Jimmy asked.{"\n"}
          {"\n"}“I passed out. My fault. I was exhausted,” Jake replied as he ran his fingers through his straight brown hair—hair that sometimes had a tendency to look black in certain light.{"\n"}
          {"\n"}“I hope you had a nice nap dude, but I’m starving. When are we ordering the pizza?<Text style={{ fontFamily: "gelasibro-italic" }}>”</Text> Jimmy asked; his eyes focused intently on the screen.{"\n"}
          {"\n"}“I’m going to order a pie right now,” Jake said.{"\n"}
          {"\n"}Jimmy took his focus off the game momentarily as his brown eyes looked up at Jake. “Can we get a large pie? Maybe half pepperoni, half mushrooms?”<Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>“</Text>You don’t always have good ideas, but <Text style={{ fontFamily: "gelasibro-italic" }}>that</Text> is a great idea. I’ll order that now – I’m going downstairs if you need anything.
          I’ll let you know when the food comes,” Jake said.{"\n"}
          {"\n"}“Ok, perfect,” Jimmy responded.{"\n"}
          {"\n"}As Jake’s foot landed on the first stair of the staircase, he stopped. He remembered Mrs. Blum’s reading assignment due tomorrow. He darted back up into his room and quickly grabbed the copy of The Outsiders from his bag. He thought
          he just might be able to muster up the energy to get the reading done–especially if pizza was coming.{"\n"}
          {"\n"}He could see the rain lashing against the oval dining room windows when he hit the main floor. He walked through the kitchen, into the den, where he plopped himself onto the beige couch and flipped on the flatscreen TV that his
          grandmother Ella bought for them last Christmas. His grandmother was a generous woman, even though she came from modest means.{"\n"}
          {"\n"}The Chicago Bears were playing, but the game was a blowout, they were destroying the Lions. He listened to the trite expressions from the game’s commentators for a few minutes and then dialed in the Antonino's order.{"\n"}
          {"\n"}He held The Outsiders paperback upright in his hand. The book was tattered. It must have been at least ten years old, used by generations of seventh grade students in Grapefield Middle. He looked at the five scruffy greaser boys on
          the cover. They looked tough. Young adults, once lost, who (almost) all found their place in the world.{"\n"}
          {"\n"}He flipped to page fifteen and turned down the TV volume. The football game playing in front of him calmed his nerves, and as a result he was able to focus on the reading for a while. Thirty minutes later the doorbell rang: the pizza
          had arrived.{"\n"}
          {"\n"}“Thanks<Text style={{ fontFamily: "gelasibro-italic" }}>,”</Text> Jake <Text style={{ fontFamily: "gelasibro-italic" }}></Text>said as he took the pie from the pancho-clad delivery boy and handed him a small tip.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>“</Text>Jimmy! The food is here!<Text style={{ fontFamily: "gelasibro-italic" }}>”</Text> Jake yelled.{"\n"}
          {"\n"}Jimmy came to the top of the staircase. “Jake, can we please eat in my room like the good old days? We can play Madden together and eat. Please?<Text style={{ fontFamily: "gelasibro-italic" }}>”</Text> Jimmy puckered his lips
          slightly.{"\n"}
          {"\n"}Jake thought about it for a moment. Although he knew Jimmy was trying to be cute, and also had a tendency to piss him off more often than not, he loved him. It was the great dichotomy of the sibling. The teasing, fighting, and rivalry
          mixed with a sense of protection that ran deep. Very deep. Family was family. The rest of the world was not.{"\n"}
          {"\n"}“I’ll be up in a sec.” Jake grabbed the onion flakes from the kitchen’s spice cabinet and headed upstairs to Jimmy's room.{"\n"}
          {"\n"}“Let’s eat,” Jake said jovially as he opened the door. He sat down next to his brother{"\n"}
          {"\n"}The proceeding thirty minutes was a tailwind–of gulps, chuggs, guzzles, mozzarella stretching, oil burning, pepperoni swallowing, carpet staining, and Jake’s dominion of his little brother in Madden NFL Football. Jimmy wailed in
          frustration when Jake went up by three touchdowns.{"\n"}
          {"\n"}“How are you so good?,” Jimmy said, barely able to hide his envy.{"\n"}
          {"\n"}“I’m not, you just stink,” Jake responded coolly.{"\n"}
          {"\n"}“Whatever dude,” Jimmy replied. “How about another one?”{"\n"}
          {"\n"}The game’s reflection flashed across Jake’s eyes. <Text style={{ fontFamily: "gelasibro-italic" }}>It looks so real,</Text> he thought<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> He wondered for a moment what would happen
          when the virtual players in Madden became indistinguishable from real football on TV.{"\n"}
          {"\n"}“Ehh. I don’t know if I want to play another one,” Jake responded.{"\n"}
          {"\n"}“Fine. But do you know when Mom is coming home?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jimmy asked.{"\n"}
          {"\n"}“She texted me late. That usually means after 10 pm. You know how her job gets,” Jake responded.{"\n"}
          {"\n"}“Yea. I just wish she wouldn’t stay out so late,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jimmy said.{"\n"}
          {"\n"}“I do too. But she works hard for us. You should appreciate that,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake said.{"\n"}
          {"\n"}The thunder and lightning began to crack louder.{"\n"}
          {"\n"}“Can you check my ranking?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jimmy asked as he wiped some grease off of his mouth.{"\n"}
          {"\n"}As Jake scrolled through the local leaderboard rankings, the screen went to static for a moment. Then he saw a faint outline of something that looked like a face inside the static puckering. An instant later the Madden game screen
          went back to normal. He looked at Jimmy who did not appear to notice. <Text style={{ fontFamily: "gelasibro-italic" }}>Odd,</Text> Jake thought. <Text style={{ fontFamily: "gelasibro-italic" }}>I guess Madden is spicing things up.</Text>
          {"\n"}
          {"\n"}He saw the static video signal again, and then the outline of the otherworldly face.{"\n"}
          {"\n"}“What the heck is that glowing demon face thing?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake asked.{"\n"}
          {"\n"}“What was <Text style={{ fontFamily: "gelasibro-italic" }}>what</Text>?” Jimmy gawked.{"\n"}
          {"\n"}“I saw something. The outline of–I don’t know exactly. A face. But not human. I don’t know. You’re telling me you didn’t see that? Don’t mess with me. I know Madden does weird stuff sometimes,” Jake said.{"\n"}
          {"\n"}“I didn’t see anything,” Jimmy replied.{"\n"}
          {"\n"}“Weird<Text style={{ fontFamily: "gelasibro-italic" }}>,”</Text> Jake said. <Text style={{ fontFamily: "gelasibro-italic" }}>I need to sleep.</Text>
          {"\n"}
          {"\n"}Jake agreed to play one more game with his brother. They played for another thirty minutes until the game’s buzzer rang, and Jake was victorious once again.{"\n"}
          {"\n"}“I think I’m gonna go lie down, ”Jake said. He placed the controller on the ground beside him. “I’m shot.” He put his hands through his hair again, exposing his jagged widow’s peak, then rubbed his eyes. “Mom should be home in thirty
          minutes.”{"\n"}
          {"\n"}“Alright,” Jimmy said.{"\n"}
          {"\n"}Jake stood up. “Yea man, you should go to bed also. Knock on my door if you need me.”{"\n"}
          {"\n"}“See you tomorrow,” Jimmy replied.{"\n"}
          {"\n"}Jake undressed, brushed his teeth, and flossed rigorously–as his father had always reminded him to do, and then headed into his room. He plopped into his bed and pulled the burly down Wisconsin covers over him. He began to think of
          Ashley Martin. Herlong, straight lustrous black hair. <Text style={{ fontFamily: "gelasibro-italic" }}>Who could talk to that? What boy had the courage? How do some people do it so easily?</Text> Then his mind switched to a visceral image
          of Mr. Harrison’s slightly enlarged behind clunking down the classroom aisles. <Text style={{ fontFamily: "gelasibro-italic" }}>What did that man know of creativity? What did he know of anything?</Text>
          {"\n"}
          {"\n"}He flipped to his side to put his face more securely against the pillow. <Text style={{ fontFamily: "gelasibro-italic" }}>I hope tomorrow is a better day.</Text> His rumbling thoughts seemed to match the pattern of the rain fall for a
          while, until he slowly drifted off to sleep.{"\n"}
          {"\n"}Twenty minutes later he was awakened when heard his door open slightly. His mother’s head was partially sticking through the door. She looked at him for a few moments. Then she closed the door again a few moments later.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I’m lucky to have her,</Text> he thought.
        </Text>
      </View>
    );
  }
}
