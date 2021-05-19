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

export default class Chapter3 extends Component<IProps> {
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
              uri: `https://i.pinimg.com/originals/16/c6/0f/16c60f51477e0370c84ba844f65bf6f8.jpg`,
            }}
          />
        </View>
        {
          // Section 1
        }
        <Text style={BookStyles.bookFont}>
          The next morning Jake got out of bed and pulled up his t-shirt to find his ribs black and blue. He rubbed them in a circular motion. <Text style={{ fontFamily: "gelasibro-italic" }}>Freaking Dylan Jenkins,</Text> he thought.{"\n"}
          {"\n"}As he stood by the window, he remembered his experience from last night. He looked outside to find a multicolored leaf mosaic spread out across the ground, , but nothing in the yard looked out of the ordinary.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Must have been in my head.</Text>
          {"\n"}
          {"\n"}As he brushed his teeth, he looked at his reflection in the mirror. Besides the defined shoulders he inherited from his father, he looked frail. <Text style={{ fontFamily: "gelasibro-italic" }}>Where is my muscle?</Text> He stood
          there looking at himself, but soon went back to his room to get dressed.{"\n"}
          {"\n"}He had caught the scent of his mother’s bacon and eggs as he walked down the hall. Diana promised him and his brother that she would make a special breakfast for them today; it was her treat, an apology for being absent so many
          mornings the past week. He threw on a pair of jeans, a white v-neck undershirt, and his thick Lucky Brand hoodie.{"\n"}
          {"\n"}Jimmy and Jake gobbled up the eggs, their back molars grinded down on the crunchy well done bacon. Diana stood there watching them. She was dressed in grey slacks and a navy blazer. Her bag was packed and ready for work.{"\n"}
          {"\n"}“Boys, eat up quickly. I didn’t expect you to get down here so late. It’s already 7:50”, Diana said. “I need to get to the office.”{"\n"}
          {"\n"}They shoved the last remnants of their breakfasts into their mouths, scooped up their things, and followed their mother through the garage door. Diana’s grey Toyota camry, or the "mom-mobile," as Jake and his brother called it, was
          sitting inside in all of its glory.{"\n"}
          {"\n"}Diana opened the garage door and pulled slowly out of the driveway, commencing the five-minute drive journey to Grapefield Middle; the engine made a low frequency hum as it traversed down the streets. They passed by the Grapefield
          town hall, where Jake’s aunt (his mother’s sister), Holly, worked.{"\n"}
          {"\n"}A few minutes later, Diana pulled the mom-mobile through Grapefield Middle’s entrance gates,  drove down the entry path and stopped the car directly in front of the school’s main entrance. This maneuver usually made Jake cringe, as he
          had to get out of his Mom’s car in front of all of the bypassing students, so he turned his head both ways before he got out to make sure Ashley Martin was out of sight.{"\n"}
          {"\n"}“Don’t fall asleep in class, kid! I don't want another phone call from Ms. Blum!” His mother shouted as Jake stepped onto the pavement.{"\n"}
          {"\n"}Diana pulled off and headed towards Grapefield Elementary to drop off Jimmy.{"\n"}
          {"\n"}English class passed by slowly. He could see Ashley’s  hair covering the desk as she scribbled aggressively in her white planner. He passed her on the way out of class, but no words came out. He tried to pay attention to Mr. Harrison
          in Electronics and Woodworking, but that wasn’t going to happen. His mind was distracted, and he still had an acrimonious taste in his mouth from his project grade. During Earth Science, his teacher, Mr. Puedo, went on and on about the
          importance of sedimentary rock formations. Jake could not comprehend how someone could have such an obsession for rocks.{"\n"}
          {"\n"}He glanced behind him and saw a few students in the back of the classroom unconscious, including his friend Jason Chadwick. He always always kept a pen upright in his hand so that if he fell asleep, it appeared as if he was still
          awake. (It seemed to fool his teacher more times than not, unless, of course, he was called on). Jake thought it was a trick worth noting.{"\n"}
          {"\n"}After Earth Science, he headed for his locker to perform a textbook swap. He was packing away his Earth Science and Algebra textbooks when Nassir came up from behind him.{"\n"}
          {"\n"}“Yo, Jake!” Nassir shouted jubilantly.{"\n"}
          {"\n"}Jake turned around. Jake couldn’t believe that Nassir was actually wearing the dinosaur t-shirt he saw in his room last weekend. Nassir was Jake’s good friend, but his nerdiness was overwhelming at times.{"\n"}
          {"\n"}“My brother brought home a fully functioning quadcopter kit from University! His project team used it for their senior design project. It has full air stabilization capabil–”.{"\n"}
          {"\n"}Jake cut him off when he saw that students were passing by and glancing at his friend’s back (a few of them were giggling). That’s when he spotted the white post-it sticking up from over the back of Nassir's right shoulder.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>“What is that?”</Text> Jake asked sternly. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>He signified to Nassir to turn around.{"\n"}
          {"\n"}Nassir rotated his body in confusion. Jake saw the post-it. <Text style={{ fontFamily: "gelasibro-italic" }}>Super Dork</Text> was written on it in thick black sharpie marker.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>“Who did this?”</Text> Jake asked fiercely. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>He tore the sign off Nassir’s bag and crumbled it in his palm.{"\n"}
          {"\n"}A few seconds later he heard high pitched laughter coming from down the hall. He looked down the corridor and saw the outline of Dylan Jenkin’s stout body. His head was tilted towards the ceiling. He was howling, loudly. Keith
          Krumple, Dylan’s friend, stood there giggling next to him. Jake felt a rage surge through him, and began to head towards his opponent.{"\n"}
          {"\n"}“Wait!” Nassir yelled.{"\n"}
          {"\n"}But as he walked towards Dylan he was overcome with a case of the jitters; his body once again did not feel solid. Jake approached holding up the crumpled paper. Dylan was looking straight at him with an arrogant smirk on his face.
          “You–you did this?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake attempted to say confidently, but it came out meekly.{"\n"}
          {"\n"}As Dylan took two steps forward, Jake thought he was going to say something to him,  but he didn’t. Instead, Dylan abruptly shoved Jake’s chest, forcefully. It was not quite hard enough for Jake to completely lose his balance,
          however, his left foot caught the leg of another seventh grader passing in back of him. He hopped backward, skipped a few times, and went down, his bottom hitting the ground with a thump, and his head smashing into the back of the locker
          behind him.{"\n"}
          {"\n"}He rubbed the back of his pounding head, disoriented. But an instant later, he caught sight of Dylan, and Jake angrily blurted out: “Are you freaking serious, dude!?”{"\n"}
          {"\n"}“Was that not serious, Addison?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Dylan shot back.{"\n"}
          {"\n"}Jake looked up at him. Did he have the strength to match up to Dylan in anything? He felt Dylan possessed a sense of masculinity he didn’t have. He felt smaller. It wasn’t easy to describe, as if he didn’t{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>deserve</Text> to be as strong. His head was throbbing. He felt the unstable, shaky feeling again. He glanced at his skinny, nearly muscle-less arms, and looked with envy at Dylan’s thick
          physique. He probably had twenty-five pounds on Jake, even if they were roughly the same height.{"\n"}
          {"\n"}Nassir ran up. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>“Jake! Are you ok?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Nassir held out his hand to help him up, but Jake ignored him.{"\n"}
          {"\n"}Jake thought about getting up and putting his head down and running Dylan’s stupid thick body through the wall. But it was all imagination, a fantasy. He thought of his father, running through defenders with ease, while playing
          football on varsity. He couldn’t even get up and face a kid his own age. He was worthless.{"\n"}
          {"\n"}He continued to ignore Nassir's outstretched hand as he sat there, deciding what to do–he had to do <Text style={{ fontFamily: "gelasibro-italic" }}>something</Text>.{"\n"}
          {"\n"}“Screw off, man!” Jake shouted. It was all he could muster up.{"\n"}
          {"\n"}“What was that?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Dylan asked.{"\n"}
          {"\n"}But all Jake could do was look at the ground in anger.{"\n"}
          {"\n"}“That’s what I thought.” Dylan smirked. He then turned around and  walked down the hall, out of sight.{"\n"}
          {"\n"}Nassir stuck out his hand again.{"\n"}
          {"\n"}Jake looked up at him flustered. “I don’t need your help, dude!” He rubbed the bump forming on the back of his head. “Why can't you just be normal like my other friends? I don’t feel like standing up for you!”{"\n"}
          {"\n"}Nassir’s lashes fluttered. “I never asked you to stand up for me!”{"\n"}
          {"\n"}“Well–”, Jake began, but Nassir retracted his hand. He shook his head in disappointment, then turned around and headed down the hall.{"\n"}
          {"\n"}A few students passed Jake with a pitying look.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>He should appreciate me!</Text> He thought stubbornly.{"\n"}
          {"\n"}A few more students passed by, but paid him no attention. Dylan blazed back into his mind. He almost felt the urge to cry, but that wasn’t going to happen.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>He had to learn how to fight.</Text> It was the only way to deal with Dylan. He tried to regain his composure by standing back up a few seconds later, and pulling up his jeans and correcting
          the cuffs of his hoodie.{"\n"}
          {"\n"}The next three periods were a blur. In Social Studies, he fidgeted with his number two pencil as streams of aggravated thoughts passed through his consciousness. The jitters he had felt when facing Dylan bothered him the most.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Having fear is one thing, but to be crippled by it is another. How can I let that happen?</Text> He thought of how calmly Dylan stood there, with his arrogant grin, with no fear of Jake
          whatsoever.{"\n"}
          {"\n"}He scratched the laminar coating of his Social Studies desk with his pencil, making an annoying grating sound. Several students turned around and looked at him with annoyance.{"\n"}
          {"\n"}"Sorry," Jake groused.{"\n"}
          {"\n"}His phone buzzed. It was his mother. She was being kept late again tonight by Mr. Bennet. She would be picking up Jimmy from David’s house after dinner, and she had left dinner cash in an envelope in the kitchen.{"\n"}
          {"\n"}Fifteen minutes later, after continuous bouts of dylan-ridden thought, Jake waved his hand in the air, signaling to his teacher that he had to go to the bathroom. Mrs. O'Reilly nodded in approval. He shot up, scooped up all of his
          belongings, and hustled out of the classroom door. A few students watched him curiously, as he had taken all of his stuff just to go to the restroom.{"\n"}
          {"\n"}He entered the long corridor–he was done with class for the day, whether or not the ninth period bell had rung or not. A part of his mind prayed that Ashley Martin would appear. He needed one more chance, one more hope. He needed
          redemption. How incredible it would be if he could muster up the mettle to talk to her? But as he walked down the empty hallway, Ashley never came. But something then occurred to him, as he progressed down the hall. He felt a crazy feeling:
          he had to distract his frustration, somehow, some way.{"\n"}
          {"\n"}As he curved down the long U-shaped corridor, he could see students sitting at their desks in their classrooms. Occasionally, a head would turn in his direction to see who was walking by.{"\n"}
          {"\n"}Jake pushed open the doors of the school’s east exit staircase. Something, a force which he couldn't fully explain, drove him outside. Thirty minutes before classes ended, he walked down the stairs and headed for the street.{"\n"}
          {"\n"}There was a slight breeze, but it was not cold out. He pushed himself to think of all the places he could go to satisfy the adrenaline rush creeping up into his mind.{"\n"}
          {"\n"}He thought of the <Text style={{ fontFamily: "gelasibro-italic" }}>Apollo IV Starter Module</Text>. The three foot tall rocket him and Nassir had launched last Fall.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            Boy would it be awesome to play with one of those. Wire it up. Send it into the sky. The sparks, and flames. Why not? I know how to do it. This time I won’t forget the screws. Is there anywhere to get one?
          </Text>
          {"\n"}
          {"\n"}He searched a few keywords on his phone. He got one hit: Truman’s Hardware, which was located in the southern part of Grapefield. <Text style={{ fontFamily: "gelasibro-italic" }}>That’s where I’m going,</Text> he thought. He went down
          the exit walkway and onto Barley street, which would take him straight into town. As he walked, a few strangers passed him, looking at him curiously. They must have thought it was odd to see a child this early in the morning.{"\n"}
          {"\n"}He continued walking for twenty minutes, until he saw the old fashioned storefronts–he was approaching the edge of town. <Text style={{ fontFamily: "gelasibro-italic" }}>That was fast,</Text> he thought. A minute later, he passed
          Marie's Chocolate shop on his right, where he could see different white and dark chocolate and other colorful confections in display cases.Twenty feet further down the street, he passed by Gamestop, the mecca of all gaming stores, but
          avoided the temptation to enter; he was focused on only one destination.{"\n"}
          {"\n"}He continued down Barley Street, passing by the restaurants he knew all too well: Antonino's Pizza, Iron Tavern, BBQ King, and the town’s central ice-cream hub, Haagen Daz, which evoked memories of the milkshakes him and his brother
          had gobbled down on summer Sunday nights. Further down Barley he spotted the old Opera House, which put on theatre performances every Friday night, and a quarter mile past that the Grapefield Colonial Bell tower sat poking up into the
          afternoon sky.{"\n"}
          {"\n"}He made a right onto Woodstock Avenue, heading south. Truman’s Hardware was at the intersection of Woodstock and Washington Street, which was about a half mile further. As his trek continued, Jake noticed that the streets were not as
          well maintained in the southern district of Grapefield. The northern part of the town had perfectly paved streets and uncracked sidewalks, but down here the roads were cracked, and some of the sidewalks had turned to nothing but dirt and
          gravel. Jake passed a disheveled warehouse and a few broken down garages, then crossed Tulip, which meant that Truman’s Hardware was only a few blocks away. He walked for another minute, picking up his pace.{"\n"}
          {"\n"}There she was! Standing on the south east side of Woodstock Avenue & Crescent Street, was Truman’s Hardware. She looked as beautiful as Jake imagined she would. A large old-fashioned neon sign with a lit up hammer hung in front of the
          store’s entrance. He crossed the street and glided into the store with exhiliration.{"\n"}
          {"\n"}Each of the store’s ten aisles had its own variety of goods. One aisle for garden tools, one for flower pots, one for drill bits, one for house paint, one for saw blades and tungsten piping.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Where would the model rockets be?</Text> he thought excitedly. He walked down the first four aisles. Nothing. He walked up to the front counter. There was an older man with scruffy white hair
          and a stubby beard standing behind it.{"\n"}
          {"\n"}“Are the model rockets still in stock, sir?” Jake asked politely.{"\n"}
          {"\n"}“Right there son, on aisle seven”, the man answered in a raspy, yet friendly voice.{"\n"}
          {"\n"}Jake’s mood immediately perked up. <Text style={{ fontFamily: "gelasibro-italic" }}>Don’t let nasty people take up your mental energy, you only have so much of it</Text>. Jake remembered his father saying once. The rockets were here;
          he wasn’t going to let the pudgy tyrant Dylan ruin his day.{"\n"}
          {"\n"}He headed down aisle seven. He passed by a section of what looked like more tiny drill bits. <Text style={{ fontFamily: "gelasibro-italic" }}>How many of these things can you sell?</Text> Above him circular paint canisters sat
          assembled on shelves. Slightly further down, at the rear of the aisle, was an elevated wooden stand, angled slightly away from him. He walked up to it.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Star Tracker 11, Saturn Crosser, Moonscraper 2, Andromeda Sentra.</Text> The list went on. The rockets were here, in stock. They all had different shapes, sizes, and colors, but they all did
          the same thing: ignite and explode upward into the sky. There were even extra engine kits for purchase. But when he went to grab one of the kits to check out the contents, he noticed something on the bottom shelf: small plastic bags, with
          small hidden trinkets locked inside. The plastic bags were coated in painted flames and multicolored sparks. He picked one up.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>GROUND SPINNER - EXPLODING FLOWER</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ textAlign: "center" }}>
            CAUTION:<Text style={{ fontFamily: "gelasibro-italic" }}></Text> SPINS ON GROUND AND EMITS FLAME AND SPARKS. USE WITH CARE. USE WITH ADULT SUPERVISION ONLY. THIS PRODUCT CONTAINS A SELF-LIGHTING FUSE. NO EXTERNAL FLAME REQUIRED.
          </Text>
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>MUST BE 18 YEARS OR OLDER TO PURCHASE.</Text>
          {"\n"}
          {"\n"}Jake gawked with reverence at the  vibrant yellow and blue letters on the package: GROUND SPINNERS. <Text style={{ fontFamily: "gelasibro-italic" }}>What are these things?</Text> He ran his thumb over the five small cylindrical
          cartridges lining the interior of the pack, then took out his phone. He performed a search through his browser, and read the first result. “Ground spinners are fireworks that sit flat on the ground, shoot sparks, and spin rapidly producing
          a glowing colored halo. Their string fuses do not need to be lit. All that is required is to pull their fuse strings quickly, similar to the lighting function of a match.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That sounds crazy,</Text> he thought. <Text style={{ fontFamily: "gelasibro-italic" }}>The rockets are awesome. But they are kind of a hassle to set up.</Text>
          {"\n"}
          {"\n"}He looked around the store. Some elderly folks had entered and walked down aisle one. He looked down into his palm again at the package and the cartridges within. The hidden power of the universe was buried inside of these things, far
          beneath the capability of human sight. A chill ran through him as he put his phone away.{"\n"}
          {"\n"}It was not in Jake’s nature to steal. But in this moment, his excitement overcame his conscience. He ripped one pack of the ground spinner packs from the display, and jammed them in his right pocket.{"\n"}
          {"\n"}He was not trained in the art of stealing. He had never done it before. His right pocket bulged in the rectangular shape of the object stuffed inside.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>If the cashier sees my pocket, I’m dead</Text>. He looked both ways, then walked slowly up the aisle, with his hands pushing outward from his hoodie.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I can do this.</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>Only twenty more feet. Please. Please.</Text> He tried to cover up as much of his right pant pocket as was possible with
          his hoodie, but most of it was still visible. <Text style={{ fontFamily: "gelasibro-italic" }}>It’s fortunate these stores can’t sense one’s heart rate,</Text> he thought. He knew the cashier would be on his right when he exited the aisle.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Just stare at the display</Text>. <Text style={{ fontFamily: "gelasibro-italic" }}>That’s all I need to do</Text>. His gut told him to stare at the cashier display when he passed by–it would
          make him appear less conspicuous. That’s what he did, he walked passed, eyes intently focused on the items on the bottom of the Cashier counter. Fortunately, the cashier wasn’t looking at him at all. He was busy checking out the elderly
          couple’s items.{"\n"}
          {"\n"}He felt a jolt of relief as he walked back onto Barley Street. He felt the package. <Text style={{ fontFamily: "gelasibro-italic" }}>I promise, I won’t steal ever again. I just had to this time. I needed this.</Text> He checked his
          phone, it was 2:35 pm. Classes would be ending right about now, but there was nowhere he needed to be. There was no one waiting for him. His mother wouldn’t be home for hours. He glanced around the block. A few cars passed by, but It was
          quiet. People were still working.{"\n"}
          {"\n"}Directly across the street there was a large building that appeared to be some kind of an industrial garage. The doors were shut with thick metal chains, and the face of the building was covered in green graffiti. To the right the
          garage, separated by a narrow alleyway, was a small white house with a sign on it that read: Rockman’s Personal Injury Attorneys.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>There might be a confined opening behind that building to set these things off. These are definitely safe to light on concrete. And there’s something about that alleyway.</Text> He crossed
          Woodstock, and walked up to the precipice of the ally. Except for some dirty mats and tarp scattered across the ground,  the alley appeared empty, at least safe enough to walk down to see if there was an opening behind the garage. He looked
          at the windows of the law firm; there were no lights on inside.{"\n"}
          {"\n"}He moved down the path slowly. He walked another twenty five feet. <Text style={{ fontFamily: "gelasibro-italic" }}>I knew it.</Text> His gut was right. A rectangular concrete plot sat in back of the industrial garage; it most likely
          had been used to unload and offload heavy equipment from the back entrance of the facility. There was a large barb wire fence to the left, facing away from the building, stretching forward towards another large broken down structure in
          front of him. He walked over the back of the garage, resting his back against it. He glanced up at the dimming afternoon sky, then slid his bottom down to the ground. He was tired.He sat there for a moment. Then he pulled the spinners out
          from his pocket and scanned the packaging more closely.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>USE ONE SPINNER AT A TIME. TUG FUSE CORD TO IGNITE, THEN IMMEDIATELY PLACE FIREWORK ON A FLAT SURFACE. WAIT FIVE SECONDS FOR FIREWORK TO FULLY IGNITE.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Simple enough.</Text> He looked around again, but there was no one in sight. He ripped apart the plastic casing, then took one cartridge out of the pack.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Here goes nothing.</Text> His thumb and index finger yanked the short fuse. An instant later, yellow and blue sparks began sizzling into the air lightly.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Woah. But it must get bigger?</Text> He tossed the ground spinner on the pavement in front of him. A few seconds later the spark show transitioned into a miniature fireworks performance. The
          cartridge began spinning violently, emitting a radiant, psychedelic shower of sparks outward into the air and onto the tarmac. He held his hand over his face, looking between his fingers.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That’s pretty awesome,</Text> he thought<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> (You may have noticed by now from the rocket incident last year, and now this, that Jake
          Addison sought out adrenaline inducing activities as a way to suppress his internal discomforts).{"\n"}
          {"\n"}When the first cartridge fizzled out, he immediately lit a second one.  And then another. As the third cartridge fizzled down, his ground spinner induced euphoria faded a bit. He felt sleepy. The sun was starting to fade closer to the
          autumn horizon. He rested his head against the building again and closed his eyes, his brown hair falling over his face. There was an inexplicable joy when one escaped the real world, even if it was just for a short while.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I like being here; it’s peaceful.</Text> His thoughts shifted to dreams. A few minutes later he was out cold.{"\n"}
          {"\n"}His vision came back into focus two hours later. At first he was disoriented when he found himself sitting up, but he quickly remembered where he was when he spotted the burnt ground spinners in front of him. He wiped a splotch of
          soot off of his fairly small, well shaped nose (which, luckily, he had inherited from Diana), then he looked to his left. The sun had already dipped below the horizon. He could see the first stars becoming visible in the sky.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I fell asleep here?</Text> He felt anxious for a moment, but realized there was still nowhere he needed to be.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder if anyone messaged me?</Text> He pulled up his cell phone. It was nearing 6 PM. He saw one notification on his lock screen.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}>1 new message from Nassir</Text>
          </Text>
          {"\n"}
          {"\n"}He felt a pang in his heart.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I’m sorry man for walking away from you. I just was upset. Where are you? You weren’t on the bus.</Text>
          {"\n"}
          {"\n"}A surge of guilt ran through him. He put his fingers on the screen’s keyboard to respond, but he stopped. <Text style={{ fontFamily: "gelasibro-italic" }}>I shouldn’t have said those things. But was I fully in the wrong?</Text> He
          wasn’t sure how to respond. He lit another cartridge, watched it ignite, then quickly fizzle into nonexistence. A small breeze brought a thick bout of sulphurous smoke in his direction.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Ugh, it smells like rotten eggs</Text>.{"\n"}
          {"\n"}The smell dissipated after a few moments. Then a  strong gust of wind carried over more sulphur smelling smoke. But this smoke smelled slightly different, with a more distinctive ingredient mixed inside of it. It was rougher, spicier,
          and woody. It was not as offensive as the  rotten egg smell; it was almost pleasing, still sulphury, but not as potent — something like a mixture of model rocket engine smoke and the burnt wood of a cedar tree.{"\n"}
          {"\n"}He was confused. He placed the last unfired ground spinner in his right jean pocket and stood up, forgetting Nassir for a moment. He sniffed the air as he walked and took a few steps toward the alley, but the smell disappeared.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>It was just the wind blowing in the other direction,</Text> Jake thought. But another gust of wind brought the spicy sulphurous scent back into his nose and this time, it was significantly
          stronger. His mouth twisted in confusion. <Text style={{ fontFamily: "gelasibro-italic" }}>I don’t understand what that could be? How could the scent change?</Text>
          {"\n"}
          {"\n"}He took a few more steps in the direction of the alley. The smell was growing stronger in this direction. <Text style={{ fontFamily: "gelasibro-italic" }}>It’s coming from down here.</Text> He thought. His curiosity was too great, so
          he began to walk slowly<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> The alley was dark and smelled of garbage, but the peculiar scent was still present. He skipped through a few small puddles and piles of trash.{"\n"}
          {"\n"}Fifty feet later, the alley opened up onto a well-lit street. Across from where he stood, Jake saw a wooden fence constructed on the side of the road. Towering above the wooden rails, and made visible by the street lamps, were tall
          leafy green plants. He looked left down the street; the fence seemed to stretch infinitely out into the distance. He glanced at the tips of the plants.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Wait, this is the cornfield? I haven’t been here in ages. How did I end up all the way over here?</Text> He looked at the street sign. He was on Jason Road. This street ran parallel to the
          ten mile long eastern border of Cedar Oaks.{"\n"}
          {"\n"}Cedar Oaks, a Grapefield landmark, was the fifty thousand acre cornfield that powered a significant portion of the town’s economic output. It sat on the southwest border of Grapefield, neighboring the town of Livingston. Jake had been
          here once before, on an elementary school field trip.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Is it coming from the field? Maybe I should check it out?</Text> He walked across the street and put his hands against the wooden fence, his nostrils flaring.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>It’s definitely coming from in here.</Text> He tried to peer inside, but he couldn’t see much in the dark.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What’s the harm in scoping it out for thirty seconds?</Text> He could only hear the ruffling of stalks rubbing against each other in the evening wind.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I’ll check it out. I’m not a wimp.</Text> He hopped over the barricade, his feet hitting the cornfield dirt with a soft plop.{"\n"}
          {"\n"}He walked in a few feet and looked up. The plants were even bigger up close, and they were even more densely stacked then he anticipated. He was not able to see more than a foot or so in each direction.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>These things are massive.</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>How do the farmers navigate in here?</Text> He took a few steps forward, managing to use both of his hands to
          push aside the stalks of corn . A few feet further in, he lost sight of Jason road. <Text style={{ fontFamily: "gelasibro-italic" }}>What is going on? The smell is even more pungent in here.</Text> As he walked forward a few more steps he
          couldn’t help but feel the creepy sensation that he was all alone in a cornfield in the pitch black. He stopped and glanced upward for a moment. The starry sky above provided some comfort that he was not entirely suffocating within the
          stalks.{"\n"}
          {"\n"}Twenty strides later, he curved left and walked down a patch of slightly shorter stalks. The smell seemed to be coming from this direction. <Text style={{ fontFamily: "gelasibro-italic" }}>I hope I don’t get lost in this mess.</Text>{" "}
          He had trouble shaking off that stranded in the middle-of-nowhere-feeling, but he pushed himself to walk on. A few paces later, he observed black  soot on the tassels of the corn plants. He reached up and  ran his finger against the
          blackened corn, then put his finger to his tongue. <Text style={{ fontFamily: "gelasibro-italic" }}>This tastes like smoke.</Text>
          {"\n"}
          {"\n"}The stalks began to get progressively shorter and more burnt looking. <Text style={{ fontFamily: "gelasibro-italic" }}>This is creepy. Wouldn’t something have to come over the top of this to burn it in this fashion?</Text>
          {"\n"}
          {"\n"}A huge cloud of smoke  then engulfed the thickets of corn, making it difficult for him to breathe. He bent over, coughing. He  got back up a few seconds later, rubbing his eyes.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Oh man</Text>. <Text style={{ fontFamily: "gelasibro-italic" }}>That’s it. The smell!</Text> The smoke had carried the pungent woody  scent.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I see no fire. I don’t get it.</Text>
          {"\n"}
          {"\n"}He continued walking, and to his surprise, he finally emerged from the endless stretch of corn plants. He looked around. He had stumbled into some kind of opening. <Text style={{ fontFamily: "gelasibro-italic" }}>What on Earth?</Text>
          {"\n"}
          {"\n"}He caught sight of polluted air. <Text style={{ fontFamily: "gelasibro-italic" }}>There’s something burning over there.</Text> He could see that a large object was buried in the ground about a hundred feet ahead, but it was too
          difficult to see clearly. It was obfuscated by billowing black smoke. <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck is that?!</Text> He squinted as he tried to make out the object.{"\n"}
          {"\n"}“This looks like an actual crater! Is this where the farmers clean their tractors?”, Jake muttered out loud. He scanned the ground around him more closely and realized he had stumbled into some kind of circular pit filled with ash and
          rubble.{"\n"}
          {"\n"}A breeze came in from the west which caused the smoke to pass over the object momentarily.  Jake’s eyes connected with the intimidating large curved surfaces. The far side of the object was submerged in the ground, and the side facing
          him protruded high in the air. Jake could see other curves and edges reflecting the faint starlight. He looked up at the component rising high above the ground. <Text style={{ fontFamily: "gelasibro-italic" }}>Is that curved glass?</Text> A
          feeling of dizziness overcame him. It looked like some kind of flying machine. <Text style={{ fontFamily: "gelasibro-italic" }}>This is not possible.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>VASHEKEM DA MAH, DA MAH!</Text>
          {"\n"}
          {"\n"}Jake saw it then, in the center of the pit. Something was alive and partially buried in a hole, struggling to extricate itself.{"\n"}
          {"\n"}Jake squinted to make out more clearly what he was looking at. He could see what appeared to be muscled arms pushing  hard against the Earth.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Is that an animal? Is that a farmer? Dude, I’ve fully lost it! I should have just freaking gone home!</Text>
          {"\n"}
          {"\n"}“VASHI BENTO MA”, the thing roared loudly, appearing to muster up the energy to will itself out of the hole.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I shouldn’t have left school. Should have just done my reading and shut up. Why do I have to get so emotional?</Text> The arms of the thing continued to grapple with the ground, and a few
          seconds later,  it had almost dug itself out. He watched in terror as the creature used one last powerful flex of its arms to propel its body upward, allowing its legs to escape the last grips of the earth.{"\n"}
          {"\n"}He looked at the sinewy being. <Text style={{ fontFamily: "gelasibro-italic" }}>Who is that? What is thaat?</Text> A wobbly feeling ran through him, and he felt like he was going to pass out. He watched as the being wiped mud from its
          eyes with what appeared to be a gloved hand. The creature wore something which resembled a sleeveless vest. He spotted odd looking markings on both of the creature’s upper arms–as if strange characters were etched into its skin. It turned
          slightly as it brushed off the dirt from its body and Jake glimpsed  some kind of large golden object hanging from its waist.{"\n"}
          {"\n"}The thing then turned around and looked at the large flying machine-like object. It appeared to shake its head in discontentment. <Text style={{ fontFamily: "gelasibro-italic" }}>It thinks?</Text> Jake thought. Then the creature
          turned towards him;  it’s glowing yellow eyes locked onto Jake.
        </Text>
      </View>
    );
  }
}
