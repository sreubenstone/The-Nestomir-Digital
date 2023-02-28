import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../Other/Stylesheet";
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
        <Text style={GlobalStyles.chapterSubTitle}>Monday Morning</Text>
        <Text style={GlobalStyles.chapterSubTitleCaption}>(One Day Earlier)</Text>
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
          The sixty-five-year old trophy case sat in the upstairs hallway like a sacred relic. The light bouncing off the iridescent glass panes gave it an almost mystical ambiance. Five rows of solid silver and gold. Five rows, two lifetimes, and
          more accumulated achievement than most mortals could expect to accomplish in three times their expected lifespan.{"\n"}
          {"\n"}As he passed his hands through his straight, dark hair, Jake Addison stood there staring at the rows of medals and academic achievement.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How could anyone achieve this much? How did the genetic gifts skip over me?</Text> He reached for a lock of hair above his ear which he tended to twist when he was nervous.{"\n"}
          {"\n"}A few moments later, Jake’s eyes fell to the bottom two rows of the trophy case which were dedicated to his father, Eric Addison. There were so many trophies and degrees that they had to be stacked one behind the other on each row.
          Jake looked at the football photograph on the second shelf. It was from his dad’s state championship winning high school football team. Eric’s gaze stared back at him confidently from the dormant trophy case.{"\n"}
          {"\n"}Eric Addison had been a star all his life. Eric followed in his father Willie’s footsteps when it came to athletics, academics, and life in general. Eric excelled in mathematics at a very young age. He jumped three grades in the
          subject when he was just eleven years old. He became the first middle schooler in <GlossaryWord lookup_string="Grapefield" word="Grapefield's" toggleGlossary={this.props.toggleGlossary} /> history to walk over to Grapefield High School for
          calculus class. He also became known for writing love notes as an eleven-year-old and tossing them at girls many years older than him.{"\n"}
          {"\n"}Eric, nonetheless, did not have the same passion Willie had for the sciences. Instead of pursuing a scientific career, Eric was interested in law and politics. Eric became a lawyer and was famous for outwitting construction defense
          attorneys and racking up legal wins.{"\n"}
          {"\n"}Jake’s eyes, which had a light blue circle around his brown irises, looked three trophy rows upward. The top rows of the trophy case were dedicated to his grandfather, William “Willie” Addison. Like his son, he grew up to become a
          high school football legend. Football and physics were his obsessions. Across his shelves lay all types of intimidating academic and athletic achievements.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            National Youth Physics Award, 1949. International Young Person’s Award in Mathematics, 1945. Texas High School Football State Champions, 1950. US PATENT 892801, Quantum Tunneling in Electronic Microchips, 1980. Riemann Recipient, 1955.
          </Text>{" "}
          The medals and accolades were even more densely stacked than Eric’s.{"\n"}
          {"\n"}Willie Addison had a reputation for being an overbearing and arrogant man. Jake heard many stories throughout his life that testified to this fact. However, Jake’s father was always there to defend Willie’s legacy. Eric always said it
          was only jealousy that made people say bad things about him. But Jake knew there were two sides to his grandfather’s story.{"\n"}
          {"\n"}There was no doubt that Willie was a math and physics prodigy. As an eighteen-year-old, he made a name for himself in 1950’s academia when he self-published insights concerning a solution for the famous{" "}
          <GlossaryWord lookup_string="Riemannhypothesis" word="Riemann Hypothesis" toggleGlossary={this.props.toggleGlossary} />. It was a math problem that had stumped scientists and mathematicians for hundreds of years. Willie made a name for
          himself by publishing groundbreaking research papers but was kicked out of academia. It happened in the fall of 1968, after a scandal involving Willie’s alleged plagiarizing of his research partners. His university never officially accused
          him of wrongdoing, but they also never came to his defense. Out of frustration, Willie stepped away from academia and joined Quantum Teletronics, a cutting edge electronics company at the time founded by Willie’s college friend, Arthur
          Lemoire. Willie’s ingenious efforts at Quantum Teletronics ended up helping modernize the designs of the modern microchip. But a decade after joining Quantum, he was involved in yet another scandal—he was accused of stock fraud. After many
          legal battles, and government fines, Willie had no job and no money. A year later he died.{"\n"}
          {"\n"}Jake stood for a moment longer looking at his ancestry and then walked down the hallway to his younger brother’s room. He knocked on the door.{"\n"}
          {"\n"}“What?! I’m about to drop into a battle royale!” Jimmy yelled.{"\n"}
          {"\n"}“Dude, we have to get to school. Mom is out with Aunt Holly, I told you,” Jake said.{"\n"}
          {"\n"}When he swung open the door, he could see his brother sitting on the floor with his back against the bed and a PlayStation controller in his hand. His long, straight hair fell over his face., and he was wearing nothing but a white
          t-shirt and boxers. A game of Pub G was loading on the screen.{"\n"}
          {"\n"}“You’re not dressed?! Are you kidding me, dude? I told you last night we’re headed for the bus stop at 7:50!” Jake shouted.{"\n"}
          {"\n"}Jake sometimes took his brother with him on the middle school bus when his mom wasn’t around to take Jimmy to the elementary school bus stop. Grapefield Middle was connected to Grapefield Elementary by a short path, and the bus
          driver, Mr. Johnson, usually had no issue with it.{"\n"}
          {"\n"}“It takes me one minute to put on my clothes! Let me get in a practice game real quick. We’re not all as good at video games as you!” Jimmy cried.{"\n"}
          {"\n"}It was true—Jake Addison had a knack for video games, but he put in the effort. He played Fortnite relentlessly, studied Twitch videos, and practiced against the toughest online opponents. For every weakness he noticed in his game, he
          put in the time to improve.{"\n"}
          {"\n"}Jake dominated at Madden NFL games. He recently defeated an online opponent so badly that the kid had a mental meltdown over the microphone. There was one second left in the game, and Jake hit DeAndre Hopkins with a
          back-of-the-endzone game winning touchdown.{"\n"}
          {"\n"}“GOT ‘EM!” Jake had screamed.{"\n"}
          {"\n"}His opponent howled and whined in a high pitch wail for at least thirty seconds. He could have left the game immediately, but he stayed on to relish his victory.{"\n"}
          {"\n"}Jake watched as Jimmy continued to push down on the controller’s buttons. “It’s 7:45 a.m., Jimmy! Let’s go! I don’t have time for this man. Don’t act like a child!” Jake yelled.{"\n"}
          {"\n"}Jimmy frowned at him. “You’re not in control of me! You think you’re pops, but you’re just a middle schooler who wears that same stupid white hoodie every day!”{"\n"}
          {"\n"}Jake shook his head as he looked down at his hoodie. He did tend to re-wear clothing a little <Text style={{ fontFamily: "gelasibro-italic" }}>too</Text> often, mostly because he didn’t fully believe in always doing his laundry.
          Laundry was an inefficient time drain. Besides, his clothing always looked the same unless it was covered in food stains. What was the point in wasting all that water? And Jake didn't really care how he smelled. He knew he smelled{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>alright</Text>. And if he added the right amount of morning shower time and deodorant, he could smell <Text style={{ fontFamily: "gelasibro-italic" }}>pretty good</Text>.{"\n"}
          {"\n"}“Let’s go! Turn off the game now!” Jake shouted again.{"\n"}
          {"\n"}“Fine. Fine. Fine. I’ll show you how fast I get dressed,” Jimmy said. He put down the controller and flicked off the TV. He did get dressed quite quickly, tossing on a sweatshirt and a pair of jeans.{"\n"}
          {"\n"}The two of them hustled down the stairs. When Jake saw Jimmy head for the Cheerios on the kitchen counter, he said, “No time for food!”{"\n"}
          {"\n"}Jimmy moaned. “Seriously?” He diverted his route to the vanilla crusted cereal and circled into the foyer. Then the boys scooped up their book bags, exited the house, hopped across their tulip and rose entrenched lawn, and hit the
          Grapefield pavement in full stride.{"\n"}
          {"\n"}The two jogged side by side in the center of the road, in a textbook-filled-bookbag induced jog-waddle. The soles of their sneakers cut across the freshly fallen leaves and a minute later they reached the Elm Road and Cedar Street
          intersection. Traffic was picking up, but Jake could see the school bus. It was a block down Elm Street. The last kid ran up the steps and the bus’s red stop sign began to retract.{"\n"}
          {"\n"}“No! It’s leaving! Run!” Jake yelled, dragging his brother forward in a gut-wrenching sprint. If their mother found out they missed the bus again, their lives were over. Jake and Jimmy ran for the bus, as their backpacks bounced up
          and down{"\n"}
          {"\n"}They were only twenty feet from the bus when its air brakes unleashed a giant gasp of air.{"\n"}
          {"\n"}“Nooo!” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>the two brothers wailed simultaneously. This would be their mother’s last straw.{"\n"}
          {"\n"}But then something unexpected happened. The bus stopped. And the door flung open.{"\n"}
          {"\n"}They jettisoned up the steps of the school bus, knocking into each other on the way. As they ran up the steps Jake gasped, “Thank you, thank you, Mr. Johnson. This is the last time I promise.”{"\n"}
          {"\n"}Mr. Johnson, the bus driver shook his head. “This is the last time, kids. I’m warning you!”{"\n"}
          {"\n"}“It won’t happen again,” Jake repeated as he trekked down the aisle.{"\n"}
          {"\n"}As he walked forward, Jake saw a few familiar faces looking up at him. Sam Decker, his little league baseball teammate; Alexandra Carter, a brunette girl a grade above him, who sometimes shot him hard-to-interpret looks (he could
          never tell if she was grinning at him, frowning, or simply staring into space); and Jessica Samson, a girl in his grade, whose mother did yoga with Jake’s mom.{"\n"}
          {"\n"}As Jake and Jimmy got to the last row of the bus, they sat down, and Jake nudged his brother into the window seat. Across from them sat his friend Nassir.{"\n"}
          {"\n"}“Jake! Glad you made it! I saw you two sprinting back there,” Nassir said. He had a goofy smile on his tan face. “Did you get a chance to watch the quantum computing documentary I sent you last night?”{"\n"}
          {"\n"}“No. I didn’t,” Jake said.{"\n"}
          {"\n"}“Oh.” Nassir’s smile dissolved. “That’s too bad.<Text style={{ fontFamily: "gelasibro-italic" }}>”</Text> He paused for a moment, then his eyes widened again. <Text style={{ fontFamily: "gelasibro-italic" }}>“</Text>These computers,
          their chips, their processors—they can be in like more than one place at once. It’s wild. There’s this thing called superposition and quantum entangle—”{"\n"}
          {"\n"}Jake cut him off. “Yes, I know you’ve told me about quantum computers before. Last week on the bus. I remember. I just didn’t get the time to watch it.”{"\n"}
          {"\n"}“Oh,” Nassir said again. He began to pick at a hole developing in the bus seat in front of him. His hair was too long for his head, and it was sticking up sporadically at the top.{"\n"}
          {"\n"}Jake changed the subject. “I hope Mr. Harrison gives me an A on my project. I took the time to wire the speakers out of the front of the case like I told you I was considering doing. It wasn’t easy.”{"\n"}
          {"\n"}Nassir turned back toward him. “For your Woodworking and Electronics class? That’s awesome you actually did that,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Nassir said. “I’m sure you’ll impress Mr. Harrison.”{"\n"}
          {"\n"}Jake looked outside as they passed by a row of houses. Grapefield was a cozy suburban town in central Wisconsin that would fit right in with the neighborhoods in feel-good television shows. The houses were charming and quaint. Parents
          usually had two to three children. The summers were hot. The winters were cold. The fall was particularly beautiful. School was competitive, but not as competitive as some of the suburban towns on the east and west coasts. Life was pleasant
          here for most.{"\n"}
          {"\n"}As Jake looked out the window, he spun his project submission around in his mind. He visualized the modifications he made to the plexiglass case. The two holes he soldered on the top. The red wires running out of them to the speaker.
          He would get his project grade back today—and he had a good feeling about it.{"\n"}
          {"\n"}“The school trip to Rush Park is tomorrow. Think it’ll be fun?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Nassir asked.{"\n"}
          {"\n"}“It should be a decent time. But it’s awesome we get the entire day off. I signed up for flag football in the morning. I’m pumped for that<Text style={{ fontFamily: "gelasibro-italic" }}>,”</Text> Jake said.{"\n"}
          {"\n"}“And we’re setting up a demo for the Robotics Club,” Nassir added. “I can’t wait to show that off. We have a bunch of robot cars and gizmos that will be moving around on the grass.”{"\n"}
          {"\n"}“That sounds cool. I’ll come check it out,” Jake said. <Text style={{ fontFamily: "gelasibro-italic" }}>Will I though?</Text> He looked out through the window again at the Grapefield streets. They were pretty this time of the year. A
          creamy yellow and brown luster came from everywhere in sight as the fall leaves cascaded on lawns, roofs, and freshly laid pavement. They passed by the Grapefield town hall, where Jake’s aunt (his mother’s sister), Holly, worked.{"\n"}
          {"\n"}The bus then turned onto Barley Street. Three minutes later, they drove past Grapefield Middle’s entrance gate and a minute later they came to a stop in front of the school’s main entrance.{"\n"}
          {"\n"}“See you later,” Jake said to Nassir as they exited the bus. Nassir waved back and then joined the swath of middle schoolers funneling into the school’s front doors. Jake could see his friend Derek Kladler’s gigantic head standing out
          in the crowd.{"\n"}
          {"\n"}Jake and Jimmy headed for the path to Grapefield Elementary. They curled down the sidewalk in front of the middle school, passed the baseball fields and tennis courts, and then headed down the short woody road that led to the back of
          the elementary school. When they were thirty feet away from the back of the building Jake said, “Go straight to Mr. Zobel’s class. No funky stuff. I will see you later.”{"\n"}
          {"\n"}Jake stood there for a moment to confirm that his brother walked inside his school safely, then retraced his path back up to Grapefield Middle’s main entrance and nestled himself into the flock of students.{"\n"}
          {"\n"}As he funneled through Grapefield Middle’s main entrance, the central hallway was clearing out, which meant that the bell was about to ring. Jake hustled down the main corridor, up the staircase at the end of the hall, and headed into
          his first period English class. He dropped into his desk right as the bell rang.{"\n"}
          {"\n"}Jake’s English teacher closed the door and began her Monday morning announcements. “Good morning class,” Mrs. Blum said in her typical high-spirited tone. "I hope everyone did the assigned weekend reading. Today I want to break down
          the symbolism used by S.E. Hinton in the beginning of the novel. But before we do that, remember our great town of Grapefield’s one hundred and fiftieth founding anniversary celebration at Rush Park is tomorrow! Yay!" She raised her hands
          in the air and clapped. "We will meet in this classroom first period as we normally do, then head back to the buses. I repeat we will meet here, then head back to the buses which will take us to Rush Park for a day of Grapefield festivities
          and celebrations! Now please open <Text style={{ fontFamily: "gelasibro-italic" }}>The Outsiders</Text> to page sixty-seven."{"\n"}
          {"\n"}Jake wasn’t sure about Mrs. Blum. She directed questions at him when she thought he had not done the homework, but Jake did find some of her class discussions interesting.{"\n"}
          {"\n"}Jake grabbed his copy of <Text style={{ fontFamily: "gelasibro-italic" }}>The Outsiders</Text> from his book bag. The bookmark was still set to page fifteen. He had not done the reading. He looked up cautiously, knowing that Mrs. Blum
          was on the hunt for prey. He slowly put his head down and tried to look as inconspicuous as possible. The first question went to David Wright who was passed out in his desk in the front right of the classroom.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>David looks inspired, Jake thought.</Text>
          {"\n"}
          {"\n"}“Mr. Wright, how would you best describe S. E. Hinton's use of the poem <Text style={{ fontFamily: "gelasibro-italic" }}>Nothing Gold Can Stay</Text> in the story?” Mrs. Blum asked.{"\n"}
          {"\n"}David picked up his head. He hesitated for a moment and then spit out: “Uh, wait, the symbolism was when Pony Boy spits at the Socs.”{"\n"}
          {"\n"}A few students in the front row giggled, and Mrs. Blum’s face turned deadly. “Nice try, David. But that was not the question I asked.” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>She took a deep breath. “David, make sure
          you’ve read up to page one hundred by tomorrow morning, or I’m taking your name off the bus list for the field trip. Do you understand?”{"\n"}
          {"\n"}David slumped further down into his desk.{"\n"}
          {"\n"}“Anyone have an answer?” Mrs. Blum’s eyes scanned the room like a newly commissioned terminator. This was her territory. Her pupils traversed left to right, then right to left, across the room.{"\n"}
          {"\n"}“Who haven’t I heard from lately?” She continued to scan through the rows of students. “How about you, Mr. Addison? What are your thoughts on the poem?”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Are you kidding me?</Text> Jake thought to himself. <Text style={{ fontFamily: "gelasibro-italic" }}>How does she always freaking end up on me?</Text> His heartbeat accelerated, part from
          nerves, part from frustration. He didn’t have the energy or the patience to make up a good excuse. “I’m sorry. I fell asleep early last night, and I didn’t read it.”{"\n"}
          {"\n"}A few girls in the class who were looking at him chuckled at his honesty.{"\n"}
          {"\n"}“Well. You and Mr. Wright are in the same boat. Page one hundred by tomorrow morning.” Mrs. Blum went on with the lecture.{"\n"}
          {"\n"}It did not take a psychic to recognize that Jake Addison was a procrastinator. When an assignment was given, he usually waited until the last second to complete it. When he had an important test, the only time he opened a book to
          study was the night before. To Jake, work and discipline were just annoying words parents and teachers used when they wanted you to act like everyone else. Jake prioritized the things he enjoyed, and the things he didn’t enjoy were
          backlogged.{"\n"}
          {"\n"}He put up decent grades in most classes, but his grades in Math were erratic. Sometimes he caught onto topics quickly and got through the homework and tests with flying colors. The partial success in these topics hinted that he might
          have his father’s blood in his veins. But in other math topics, he struggled.{"\n"}
          {"\n"}When he came across a complicated topic, he would often feel a weakness deep down and struggle to muster up the learning energy to push forward. In his science classes he consistently received low B’s; topics just never completely
          clicked. His mother found his science performance bizarre because his preadolescent math and science test scores had been off the charts. But something happened. He had lost something. He knew he was missing a certain desire, a certain
          purpose. But he couldn’t find any answers.{"\n"}
          {"\n"}As Mrs. Blum went on about the literary elements employed by S.E. Hinton, he stared at the clock. Twenty minutes until Woodworking and Electronics. He fidgeted with his pen as he wondered what grade Mr. Harrison was going to give him.
          {"\n"}
          {"\n"}“I think Ponyboy is actually jealous of Dylan,” said a sweet voice.{"\n"}
          {"\n"}Jake picked his head up when he heard Ashley Martin answer the question. Jake imagined that her straight black hair smelled of strawberries and other magical things girls used. He had gone to elementary school with Ashley but he had
          never really talked with her and that was embarrassing. He told himself he was stronger than that, but the most he ever accomplished was a series of "heh, hi, ho" grunts aimed in her direction as he held a door open for her last year during
          lunch. He wasn’t even sure she said anything back. He was desperate to find the courage to talk to her for real, but when the opportunities arose, his mettle wasn’t there to strike.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Ding. Ding. Ding. Ding.</Text> The first period bell rang, cutting off Mrs. Blum’s response.{"\n"}
          {"\n"}Jake walked out of the classroom and hustled back down the central staircase. When he got to the first floor, the downstairs hallway was packed with students buzzing in both directions. Jake reached the main hall and turned down the
          long corridor. He walked another hundred feet before pausing to glance upward at the hallway light fixtures, which for some reason, his mind transformed into juicy white tappable things. Instinctively, he bent his knees, but at the last
          moment, he decided not to jump.{"\n"}
          {"\n"}Last year he developed a habit of jumping up and gently tapping them. On one occasion, Mrs. Eckberg, an eighth-grade teacher and also one of the school’s deans, caught him red handed. “Don’t you ever do that in my hall! This is a
          school, not a gymnasium!” she had yelled in a loud, angry voice. Jake was convinced she overreacted. She even called his mom and gave him one day of detention over the one-time (documented) offense. Jake thought it was an abuse of her
          deanly power, but his mom thought differently. She said he should have known how to behave and should be responsible for his actions. Her response made him cringe.{"\n"}
          {"\n"}Jake kept walking. The elective classes were tucked into the far end of the school, away from most of the other classrooms. It felt like a different building over here—almost like a hidden silo that only certain eyes could see. He
          turned into the short electives corridor and entered Woodworking and Electronics with two minutes to spare. Mr. Harrison was sitting at his desk scrolling through something intently on his computer.{"\n"}
          {"\n"}Jake arrived at his seat at a workbench in the back of the classroom. His classmate Jason Cheng was already sitting down at the table.{"\n"}
          {"\n"}“Hey, dude, how’s it going?” Jake said.{"\n"}
          {"\n"}“Not much, man, just nervous for 8th period. Getting my Civil War paper back today. I’m terrified,” Jason replied.{"\n"}
          {"\n"}Jake pulled out his Woodworking and Electronics folder. “Was the assignment that hard?”{"\n"}
          {"\n"}Jason shuddered as if the assignment was so difficult it wasn’t even worth discussing. “It was...so many details...and so much reading. I thought I was never going to finish it.”{"\n"}
          {"\n"}“That stinks. Not looking forward to that. Don’t we get our speaker project grades back today in this class? I kinda went a little outside the box with mine,” Jake said nervously.{"\n"}
          {"\n"}“I saw you finagling with the speaker. The approach looked...intriguing.” Jason let out an awkward giggle. “I just followed the instructions. Didn’t have that much time, I was focused on Mr. Gerber’s Civil War paper.”{"\n"}
          {"\n"}They turned their attention to Mr. Harrison.{"\n"}
          {"\n"}“Class, today I will be handing back your projects, then your grade sheets.”{"\n"}
          {"\n"}Mr. Harrison wore his typical clunky grey corduroys and partially untucked saggy button-down shirt. <Text style={{ fontFamily: "gelasibro-italic" }}>That guy definitely eats chicken nuggets in front of the tv alone at night.</Text>{" "}
          Mr. Harrison began to walk down the aisles, taking the speaker projects from his large Tupperware basket and placing them on each student’s desk. Jake held his breath as he approached.{"\n"}
          {"\n"}“Mr. Addison, hmm, here you are.” He placed the plexiglass creation in front of Jake.{"\n"}
          {"\n"}Jake pulled his creation closer to him. The plexiglass casing had two punctures on the top that he had made with a soldering iron. Two wires ran from inside the plexiglass case from the circuit board on the bottom and out through the
          holes into the external speaker. The bottom of the plexiglass was raised at the bottom, which allowed the pre-assembled electronic keyboard to stick out.{"\n"}
          {"\n"}The assignment asked to follow steps one through twelve on the project instruction sheet. If these steps were executed correctly, each student would end up with a homemade electronic keyboard that played music from a speaker.{"\n"}
          {"\n"}Jake thought the instructions made only a little sense. The manual asked for the speaker to be placed inside of the case, facing the user. This bothered Jake because it wasn’t a practical way to build a real musical device—you
          wouldn’t block the sound by placing the speaker inside of the case like the instructions told them to. It should be positioned in a way that makes it easier to hear. Jake also hated the direction the speaker was facing.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>You don’t play a keyboard for yourself—you play it for an audience.</Text>
          {"\n"}
          {"\n"}Something had come over him two weeks ago when he started putting the project together. It was an enthusiasm he hadn’t felt in a long time. He soldered two holes on top of the plexiglass case, ran the two wires through them, and glued
          the speaker to the top so it faced away from the user. He assembled the circuit board to the keyboard, then he snapped in the battery back, and <Text style={{ fontFamily: "gelasibro-italic" }}>voila</Text>! He had built a useful piece of
          electrical equipment.{"\n"}
          {"\n"}Jake was extremely proud of his creation, and he didn’t see any harm in his slight modification to the instructions. The keys worked. The keyboard notes projected outward. It also looked cool. He was confident Mr. Harrison would be
          pleased.{"\n"}
          {"\n"}After Mr. Harrison finished handing out the projects to each student, he walked to the front of the room and picked up a stack of folded white papers: the grade sheets.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Why am I so nervous?</Text> This wasn’t a make-or-break project, and this class was just an elective. Jake twirled the lock of hair above his right ear aggressively as he watched the papers
          being dropped on each student’s work bench. <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe I can finally prove I am my father's son.</Text>
          {"\n"}
          {"\n"}When Mr. Harrison was three students up, an acidic bile dribbled up to the back of Jake’s throat. This could be his moment. He looked at Jason Cheng, then looked back at the teacher.{"\n"}
          {"\n"}Mr. Harrison dropped the folded white paper neatly in front of him and moved onward. Jake watched Jason Cheng out of the corner of his eye unfold his grade sheet. Jason’s facial expression was apathetic.{"\n"}
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
          <Text style={{ fontFamily: "gelasibro-italic" }}>It’s exactly what everyone else did! None of them used their minds at all! I tried to think outside the box— literally! This is ridiculous!! To heck with this class!</Text> Jake’s blood
          boiled.{"\n"}
          {"\n"}Mr. Harrison started a new topic, which was focused on the flow of electrical current through resistors, but Jake heard none of it. He was done listening for the day. He stared at the clock for the remainder of the period. He wanted
          Mr. Harrison to know he wasn’t paying attention, but his teacher didn’t seem to notice. He got up the instant the bell rang. He was tempted to confront Mr. Harrison about his project grade, but decided it was of no use.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What’s that doof even going to do? Change his mind?</Text>
          {"\n"}
          {"\n"}Later that day, Jake walked out of eighth period Social Studies three minutes after the bell. Most of the other students had already funneled into their ninth-period classrooms. He picked up his pace so he wouldn’t be late, but he
          immediately slowed back down when Ashley Martin, carrying her large purple shoulder bag, came strutting down the hall. As they walked towards each other, Jake tried to look cool and appear calm, but with each step, he became increasingly
          awkward. <Text style={{ fontFamily: "gelasibro-italic" }}>Don’t trip...and say something, anything,</Text> he thought to himself. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>But as they passed by, nothing came out of his mouth.
          Ashley gave him a friendly smile, but Jake could not return it.{"\n"}
          {"\n"}Jake was frustrated—with school and, most of all, with himself. <Text style={{ fontFamily: "gelasibro-italic" }}>How can I be so weak?</Text> After school, he was ready to get home and lock himself in his room for a while.{"\n"}
          {"\n"}When he got home, Jimmy was making Pop-Tarts in the kitchen. The scent of cinnamon and raspberry whirled around the room, making Jake’s mouth water. “Hey, man. Don’t eat too much. Mom left us money to order pizza from Antonino’s
          later. And don’t forget to shut off the toaster,” Jake said.{"\n"}
          {"\n"}Jimmy sat down on a chair at the kitchen counter and began to cram the frosted raspberry treats into his piehole. A few crumbs fell out of his mouth and onto the floor. “I’m only eating two, don’t worry. And the toaster is already
          off.” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jimmy glanced downward to see his mess taking shape.{"\n"}
          {"\n"}Their mom, Diana, knew it was not ideal to have her younger son come home before her eldest, even if it was only for a few minutes, but she had to trust some parts of the system the family had set up. Being a single mother was a
          struggle, and Jake did his best to take care of his brother when Diana had to work late.{"\n"}
          {"\n"}“I’m headed upstairs. Don’t do anything stupid. And clean those crumbs up, dude,” Jake said sternly.{"\n"}
          {"\n"}Jake headed upstairs with his backpack hanging from his shoulders. His mood was sullen but missing the school trip tomorrow would make it even worse. He had to summon the energy to get Mrs. Blum’s reading done. He turned down the
          small upstairs hallway, passed the trophy case, and pushed open the door to his room.{"\n"}
          {"\n"}He tossed his backpack on his desk chair and walked over to his bedroom window. The sky was turning a menacing grey. The maple tree had dropped so many leaves in the backyard lawn that the grass was no longer visible. He rolled over
          onto his bed and put his hands in back of his head. He thought for a minute about the football game tomorrow, but the trophy case creeped back into his mind again. None of those trophies were his. He had no accolades, no real
          accomplishments. A sharp pang shot through his stomach when he thought of Mr. Harrison and his project grade. <Text style={{ fontFamily: "gelasibro-italic" }}>What’s the point of any of this?</Text>{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I can’t succeed.</Text> He could hear the wind starting to pick up behind him.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            I tried to think outside the box. I get a freaking C! I can’t even find the courage to open my mouth to Ashley! Why am I this way? I can be smart, can’t I? How did my dad do it? How did my grandpa do it? Did they cheat?
          </Text>
          {"\n"}
          {"\n"}He stormed over to his backpack and unzipped it. He ripped the speaker contraption, the project he put so much time and focus into, from his bag. <Text style={{ fontFamily: "gelasibro-italic" }}>Worthless piece of junk.</Text> Rage
          shot through him. He threw it as hard as he could against the front wall.{"\n"}
          {"\n"}Everything shattered, the pieces were strewn across the floor. The speaker wobbled like a spinning top. The plexiglass case exploded, leaving tiny transparent shards all over the carpet. The circuit board cracked into smaller
          fragments, and wires and other small components were spread out all over. For a moment, he felt a sharp pang of guilt. Then the aggravation seeped back.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I hate trying to be something I’m not.</Text> He covered his face with his hands and began to breathe deeply.{"\n"}
          {"\n"}His tantrum had turned into exhaustion, and he went to his bed and laid down.{"\n"}
          {"\n"}The explosions of thunder woke him up two and a half hours later. Through the window, he could see evening rain coming down in sheets. He glanced at his phone—it was six p.m.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How did I pass out for that long?</Text> He felt calmer than before his nap. His own storm may have passed. At least for now.{"\n"}
          {"\n"}When he heard PlayStation rumbling from down the hall, he walked over to his brother’s bedroom. <Text style={{ fontFamily: "gelasibro-italic" }}>That kid never stops, does he?</Text> He knocked once, then gently opened the door.{"\n"}
          {"\n"}Jimmy turned towards him. “There you are!” he shouted. His hands hammered down on the directional pad of the game controller. Fortnite gameplay flashed across the screen. “Where were you?”{"\n"}
          {"\n"}“I passed out. My fault. I was exhausted,” Jake replied, running his fingers through his hair.{"\n"}
          {"\n"}“I hope you had a nice nap, dude, but I’m starving. When are we ordering the pizza?<Text style={{ fontFamily: "gelasibro-italic" }}>”</Text> Jimmy asked, still focused intently on the screen.{"\n"}
          {"\n"}“I’m going to order a pie right now,” Jake said.{"\n"}
          {"\n"}Jimmy took his focus off the game momentarily to look up at Jake. “Can we get a large pie? Half pepperoni, half mushrooms?”<Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>“</Text>You don’t always have good ideas, but <Text style={{ fontFamily: "gelasibro-italic" }}>that</Text> is a great idea. I’ll be downstairs if you need anything. I’ll let you know when the
          food comes,” Jake said.{"\n"}
          {"\n"}“Perfect,” Jimmy responded, already turning back to his video game.{"\n"}
          {"\n"}As Jake’s foot landed on the first stair of the staircase, he stopped. He remembered Mrs. Blum’s reading assignment due tomorrow. He darted back up into his room and quickly grabbed the copy of{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Outsiders</Text> from his bag. He thought he just might be able to muster up the energy to get the reading done—especially if pizza was coming.{"\n"}
          {"\n"}The rain lashed against the windows as Jake plopped himself onto the couch and flipped on the TV that his grandmother Ella bought for them last Christmas. His grandmother was a generous woman, even though she came from modest means.
          {"\n"}
          {"\n"}The Chicago Bears were playing, but the game was a blowout. They were destroying the Lions. He listened to the game’s commentators for a few minutes and then dialed in the Antonino's order.{"\n"}
          {"\n"}He held his copy of <Text style={{ fontFamily: "gelasibro-italic" }}>The Outsiders</Text> upright in his hand. The book was tattered. It must have been at least ten years old, used by generations of seventh grade students in
          Grapefield Middle. He looked at the five scruffy greaser boys on the cover. They looked tough. Young adults, once lost, who (almost) all found their place in the world.{"\n"}
          {"\n"}He flipped to page fifteen and turned down the TV volume. The football game playing in front of him calmed his nerves, and he was able to focus on the reading for a while. Thirty minutes later the doorbell rang. The pizza had arrived.
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>“</Text>Jimmy! The food is here!<Text style={{ fontFamily: "gelasibro-italic" }}>”</Text> Jake yelled.{"\n"}
          {"\n"}Jimmy came to the top of the staircase. “Jake, can we please eat in my room like the good old days? We can play Madden together and eat. Please?<Text style={{ fontFamily: "gelasibro-italic" }}>”</Text> Jimmy puckered his lips
          slightly.{"\n"}
          {"\n"}Although Jake knew Jimmy was trying to be cute, and had a tendency to tick him off more often than not, he loved him. The teasing, fighting, and rivalry mixed with a sense of protection that ran deep. Very deep. Family was family. The
          rest of the world was not.{"\n"}
          {"\n"}“I’ll be up in a sec.” Jake grabbed the pepper flakes from the spice cabinet and headed upstairs to Jimmy's room with the pizza.{"\n"}
          {"\n"}The next thirty minutes were a tailwind of gulps, chugs, guzzles, mozzarella stretching, oil burning, pepperoni swallowing, carpet staining, and Jake’s dominion of his little brother in Madden NFL Football.{"\n"}
          {"\n"}“How are you so good?” Jimmy wailed.{"\n"}
          {"\n"}“I’m not. You just stink,” Jake responded coolly, giving his brother a playful shove.{"\n"}
          {"\n"}“Whatever, dude,” Jimmy replied. “How about another one?”{"\n"}
          {"\n"}The game’s reflection flashed across Jake’s eyes. <Text style={{ fontFamily: "gelasibro-italic" }}>It looks so real,</Text> he thought<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> He wondered for a moment what would happen
          if the virtual players in Madden became indistinguishable from real football on TV. <Text style={{ fontFamily: "gelasibro-italic" }}>How can a machine, a computer, simulate reality so well…what could all the electricity be doing?</Text>
          {"\n"}
          {"\n"}“Ehh. I don’t know if I want to play another one,” Jake said.{"\n"}
          {"\n"}“Fine. When is Mom coming home?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jimmy asked.{"\n"}
          {"\n"}“She texted me late. That usually means after ten. You know how her job gets,” Jake said.{"\n"}
          {"\n"}“Yeah. I just wish she wouldn’t stay out so late,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jimmy said.{"\n"}
          {"\n"}“I do too. But she works hard for us. You should appreciate that,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake said.{"\n"}
          {"\n"}There was a loud crack of thunder as the storm continued to rage on. Lightning flashed, momentarily casting dark shadows around Jimmy’s room.{"\n"}
          {"\n"}“Can you check my ranking?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jimmy asked as he wiped some grease off his mouth.{"\n"}
          {"\n"}As Jake scrolled through the local leaderboard rankings, the screen went to static for a moment. Then he saw a faint outline of something that looked like a face inside the static puckering. An instant later the Madden game screen
          went back to normal. Jimmy did not appear to notice. <Text style={{ fontFamily: "gelasibro-italic" }}>Odd,</Text> Jake thought. <Text style={{ fontFamily: "gelasibro-italic" }}>I guess Madden is spicing things up.</Text>
          {"\n"}
          {"\n"}He saw the static video signal again, and then the outline of the otherworldly face.{"\n"}
          {"\n"}“What the heck is that glowing demon face thing?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake gasped, pointing at the TV.{"\n"}
          {"\n"}“What was <Text style={{ fontFamily: "gelasibro-italic" }}>what</Text>?” Jimmy asked.{"\n"}
          {"\n"}“I saw something,” Jake said shakily. “The outline of…I don’t know what exactly. A face. But not human. You didn’t see that? Don’t mess with me. I know Madden does weird stuff sometimes,” Jake said.{"\n"}
          {"\n"}“I didn’t see anything,” Jimmy replied.{"\n"}
          {"\n"}“Weird,” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake said.  “I think I’m gonna go lie down.” He placed the controller on the ground. “I’m shot.” He put his hands through his hair again, exposing his jagged widow’s
          peak, and rubbed his eyes. “Mom should be home soon.”{"\n"}
          {"\n"}Jake undressed, brushed his teeth, and flossed rigorously—as his father had always reminded him to do, and then plopped into his bed.{"\n"}
          {"\n"}He thought of Ashley Martin. Her long, straight, lustrous black hair. <Text style={{ fontFamily: "gelasibro-italic" }}>Who could talk to that? What boy had the courage? How do some people do it so easily?</Text> Then his mind switched
          to a visceral image of Mr. Harrison’s slightly enlarged behind clunking down the classroom aisles. <Text style={{ fontFamily: "gelasibro-italic" }}>What did Mr. Harrison know of creativity? What did he know of anything?</Text>
          {"\n"}
          {"\n"}Jake flipped onto his side. <Text style={{ fontFamily: "gelasibro-italic" }}>I hope tomorrow is a better day.</Text> His rumbling thoughts seemed to match the pattern of the rainfall for a while until he slowly drifted off to sleep.
          {"\n"}
          {"\n"}Twenty minutes later he was awakened when heard his door open slightly. His mother’s head was partially sticking through the door. She looked at him for a few moments. Then she closed the door again a few moments later.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I’m lucky to have her,</Text> he thought.
        </Text>
      </View>
    );
  }
}
