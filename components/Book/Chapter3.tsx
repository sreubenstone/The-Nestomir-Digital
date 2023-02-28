import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../Other/Stylesheet";
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
              uri: `https://res.cloudinary.com/dshxqbjrf/image/upload/v1633998380/chapter_symbol_sfj0ji.png`,
            }}
          />
        </View>
        {
          // Section 1
        }
        <Text style={BookStyles.bookFont}>
          The next morning Jake got out of bed and pulled up his t-shirt to find his ribs black and blue. <Text style={{ fontFamily: "gelasibro-italic" }}>Freaking Dylan Jenkins,</Text> he thought.{"\n"}
          {"\n"}Remembering his experience from last night, he looked outside to find a multicolored leaf mosaic spread out across the ground, but nothing in the yard looked out of the ordinary.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Must have been in my head.</Text>
          {"\n"}
          {"\n"}He got dressed quickly then headed to the bathroom. As he brushed his teeth, he looked at his reflection in the mirror. Besides the defined shoulders he inherited from his father, he looked frail.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Where is my muscle? Why do I look so scrawny?</Text>
          {"\n"}
          {"\n"}Diana drove Jake and Jimmy to school that day. She pulled her mom-mobile through Grapefield Middle’s entrance gates, drove down the entry path and stopped the car in front of the school’s main entrance. Jake turned his head both ways
          before he got out to make sure Ashley Martin was out of sight.{"\n"}
          {"\n"}“Don’t fall asleep in class, kid! I don't want another phone call from Ms. Blum!” his mother shouted as Jake stepped onto the pavement.{"\n"}
          {"\n"}Diana pulled off and headed towards Grapefield Elementary to drop off Jimmy.{"\n"}
          {"\n"}In English class, Jake could see Ashley’s hair covering the desk as she scribbled aggressively in her planner. He passed her on the way out of class, but no words came out. He tried to pay attention to Mr. Harrison in Electronics and
          Woodworking, but that wasn’t going to happen. His mind was distracted, and he still had a bad taste in his mouth from his project grade. During Earth Science, his teacher, Mr. Puedo, went on and on about the importance of sedimentary rock
          formations. Jake could not comprehend how someone could have such an obsession for rocks.{"\n"}
          {"\n"}He was packing away his Earth Science and Algebra textbooks when Nassir came up from behind him.{"\n"}
          {"\n"}“Yo, Jake!” Nassir shouted jubilantly.{"\n"}
          {"\n"}Jake turned around. Jake couldn’t believe that Nassir was wearing the dinosaur t-shirt he saw in his room last weekend. Nassir was Jake’s good friend, but his nerdiness was overwhelming at times.{"\n"}
          {"\n"}“Bes brought home a fully functioning quadcopter kit from college! His project team used it for their senior design project. It has full air stabilization capabil—"{"\n"}
          {"\n"}Jake cut him off when he saw that students were passing by and glancing at his friend’s shirt, a few of them giggling and pointing. That’s when he spotted a white post-it sticking up from over the back of Nassir's right shoulder.
          {"\n"}
          {"\n"}He motioned for Nassir to turn around.{"\n"}
          {"\n"}Nassir rotated his body in confusion. <Text style={{ fontFamily: "gelasibro-italic" }}>Super, Super Dork</Text> was written on it in thick black sharpie marker.{"\n"}
          {"\n"}“Who did this?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake asked fiercely. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>He tore the sign off Nassir’s bag and crumbled it in his palm.{"\n"}
          {"\n"}A few seconds later he heard high pitched laughter coming from down the hall. He looked down the corridor and saw Dylan Jenkin. His head was tilted towards the ceiling, and he was howling, loudly. Keith Krumple, Dylan’s friend, stood
          there giggling next to him. Jake felt rage surge through him and began to head towards his opponent.{"\n"}
          {"\n"}“Wait!” Nassir yelled.{"\n"}
          {"\n"}But as Jake walked towards Dylan he was overcome with a case of the jitters. His body once again did not feel solid. Jake approached holding up the crumpled paper. Dylan was looking straight at him with a smirk on his face.{"\n"}
          {"\n"}“You did this?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake tried to say confidently, but it came out meekly.{"\n"}
          {"\n"}Dylan took two steps forward and abruptly shoved Jake’s chest forcefully. It was not quite hard enough for Jake to completely lose his balance, however, his left foot caught the leg of another seventh grader passing behind him. He
          hopped backward, skipped a few times, and went down, his bottom hitting the ground with a thump, and his head smashing into the back of the locker behind him.{"\n"}
          {"\n"}He rubbed the back of his pounding head and angrily blurted, “Are you freaking serious, dude!?”{"\n"}
          {"\n"}“Was that not serious, Addison?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Dylan shot back.{"\n"}
          {"\n"}Jake looked up at him. Did he have the strength to match up to Dylan in anything? He felt so much smaller than Dylan. It wasn’t easy to describe, as if he didn’t <Text style={{ fontFamily: "gelasibro-italic" }}>deserve</Text> to be as
          strong. His head was throbbing. He felt the unstable, shaky feeling again. He glanced at his skinny, muscle-less arms, and looked with envy at Dylan’s thick physique. He probably had twenty-five pounds on Jake, even if they were roughly the
          same height.{"\n"}
          {"\n"}Nassir ran up. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>“Jake! Are you okay?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Nassir held out his hand to help him up, but Jake ignored him.{"\n"}
          {"\n"}Jake thought about running Dylan’s stupid thick body through the wall. But it was all imagination, a fantasy. He thought of his father, running through defenders with ease, while playing football on varsity. He couldn’t even get up
          and face a kid his own age. He was worthless.{"\n"}
          {"\n"}He continued to ignore Nassir's outstretched hand as he sat there, deciding what to do. He had to do <Text style={{ fontFamily: "gelasibro-italic" }}>something</Text>.{"\n"}
          {"\n"}“Screw off, man!” Jake shouted. It was all he could muster up.{"\n"}
          {"\n"}“What was that?” <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Dylan asked.{"\n"}
          {"\n"}But all Jake could do was look at the ground in anger.{"\n"}
          {"\n"}“That’s what I thought.” Dylan smirked. He then turned around and walked down the hall, out of sight.{"\n"}
          {"\n"}Nassir stuck out his hand again.{"\n"}
          {"\n"}Jake looked up at him flustered. “I don’t need your help!” He rubbed the bump forming on the back of his head. “Why can't you just be normal? I don’t feel like standing up for you all the time!”{"\n"}
          {"\n"}Nassir’s lashes fluttered. “I never asked you to stand up for me!”{"\n"}
          {"\n"}“Well–”, Jake began, but Nassir retracted his hand. He shook his head in disappointment, then turned around and headed down the hall.{"\n"}
          {"\n"}A few students passed Jake with a pitying look.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>He should appreciate me!</Text>
          {"\n"}
          {"\n"}A few more students passed by but paid him no attention. Dylan blazed back into his mind. He felt like crying, but that wasn’t going to happen. <Text style={{ fontFamily: "gelasibro-italic" }}>He had to learn how to fight.</Text> It
          was the only way to deal with Dylan.{"\n"}
          {"\n"}The next three periods were a blur as streams of aggravated thoughts passed through his mind. The jitters he had felt when facing Dylan bothered him the most.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Having fear is one thing, but to be crippled by it is another. How could I let that happen?</Text> He thought of how calmly Dylan stood there, with his arrogant grin.
          {"\n"}His phone buzzed. It was his mother. She was being kept late again tonight by her boss, Mr. Bennet. She would be picking up Jimmy from his friend’s house after dinner, and there was dinner cash in an envelope in the kitchen.{"\n"}
          {"\n"}Fifteen minutes later, after continuous bouts of Dylan-ridden thought, Jake waved his hand in the air, signaling to his teacher that he had to go to the bathroom. Mrs. O'Reilly nodded in approval. He shot up, scooped up all his
          belongings, and hustled out of the classroom door. A few students watched him curiously, as he had taken all his stuff just to go to the restroom.{"\n"}
          {"\n"}He was done with class for the day, whether or not the ninth period bell had rung or not. A part of his mind prayed that Ashley Martin would appear. He needed one more chance, one more hope. He needed redemption. How incredible would
          it be if he could muster up the mettle to talk to her? But something then occurred to him, as he progressed down the hall. He felt a crazy feeling that he had to distract his frustration, somehow, some way.{"\n"}
          {"\n"}Jake pushed open the doors of the school’s east exit staircase. Something, a force which he couldn't fully explain, drove him outside. Thirty minutes before classes ended, he walked down the stairs and headed for the street. He pushed
          himself to think of all the places he could go to satisfy the adrenaline rush creeping up into his mind.{"\n"}
          {"\n"}He thought of the <Text style={{ fontFamily: "gelasibro-italic" }}>Apollo IV Starter Module</Text>. The three-foot-tall rocket he and Nassir had launched last fall.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            Boy, would it be awesome to play with one of those. Wire it up. Send it into the sky. The sparks, and flames. Why not? I know how to do it. This time I won’t forget the screws. Where can I get one?
          </Text>
          {"\n"}
          {"\n"}He searched a few keywords on his phone. He got one hit: Truman’s Hardware, which was in the southern part of Grapefield. <Text style={{ fontFamily: "gelasibro-italic" }}>That’s where I’m going,</Text> he thought. Jake went down the
          exit walkway and onto Barley, which would take him straight into town. As he walked, a few strangers passed him, looking at him curiously.{"\n"}
          {"\n"}He continued walking for twenty minutes, until he saw the old-fashioned storefronts as he was approaching the edge of town. <Text style={{ fontFamily: "gelasibro-italic" }}>That was fast,</Text> he thought. He continued down Barley
          Street, passing by the restaurants he knew all too well: Antonino's Pizza, Iron Tavern, BBQ King, and the town’s central ice-cream hub, Haagen Daz, which evoked memories of the milkshakes him and his brother had gobbled down on summer
          Sunday nights. Further down Barley he spotted the old Opera House, which put on theater performances every Friday night, and a quarter mile past that the Grapefield Colonial Bell tower sat poking up into the afternoon sky.{"\n"}
          {"\n"}The streets were not as well maintained in the southern district of Grapefield. The northern part of the town had perfectly paved streets and uncracked sidewalks, but down here the roads were cracked, and some of the sidewalks had
          turned to nothing but dirt and gravel. Jake passed a disheveled warehouse and a few broken down garages, then crossed Tulip, which meant that Truman’s Hardware was only a few blocks away. He walked for another minute, picking up his pace.
          {"\n"}
          {"\n"}There it was! Standing on the southeast side of Woodstock Avenue and Crescent Street, was Truman’s Hardware. It looked as beautiful as Jake imagined. A large old-fashioned neon sign with a lit-up hammer hung in front of the store’s
          entrance. He crossed the street and entered the store.{"\n"}
          {"\n"}Each of the store’s ten aisles had its own variety of goods. One aisle for garden tools, one for flowerpots, one for drill bits, one for house paint, one for saw blades and tungsten piping.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Where would the model rockets be?</Text> He walked down the first four aisles. Nothing. He walked up to the front counter. There was an older man with scruffy white hair and a stubby beard
          standing behind it.{"\n"}
          {"\n"}“Are the model rockets still in stock, sir?” Jake asked politely.{"\n"}
          {"\n"}“Right there son, on aisle seven,” the man answered in a raspy voice.{"\n"}
          {"\n"}He headed down aisle seven. He passed by a section of what looked like more tiny drill bits. Slightly further down, at the rear of the aisle, was an elevated wooden stand, angled slightly away from him. He walked up to it. Bingo.
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Star Tracker 11, Saturn Crosser, Moonscraper 2, Andromeda Sentra.</Text> The list went on. The rockets were here. They all had different shapes, sizes, and colors, but they all did the same
          thing: ignite and explode upward into the sky. There were even extra engine kits for purchase. But when he went to grab one of the kits to check out the contents, he noticed something on the bottom shelf: small plastic bags, with small
          trinkets locked inside. The plastic bags were adorned with painted flames and multicolored sparks. He picked one up.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>GROUND SPINNER - EXPLODING FLOWER</Text>
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>CAUTION:<Text style={{ fontFamily: "gelasibro-italic" }}></Text> SPINS ON GROUND AND EMITS FLAME AND SPARKS. USE WITH CARE. USE WITH ADULT SUPERVISION ONLY. THIS PRODUCT CONTAINS A
            SELF-LIGHTING FUSE. NO EXTERNAL FLAME REQUIRED.
          </Text>
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>MUST BE 18 YEARS OR OLDER TO PURCHASE.</Text>
          {"\n"}
          {"\n"}Jake gawked at the yellow and blue letters on the package: GROUND SPINNERS. <Text style={{ fontFamily: "gelasibro-italic" }}>What are these things?</Text> He ran his thumb over the five small cartridges lining the interior of the
          pack, then took out his phone. “Ground spinners are fireworks that sit flat on the ground, shoot sparks, and spin rapidly producing a glowing colored halo. Their string fuses do not need to be lit. All that is required is to pull their fuse
          strings quickly."{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That sounds crazy,</Text> he thought. <Text style={{ fontFamily: "gelasibro-italic" }}>The rockets are awesome, but they are kind of a hassle to set up.</Text>
          {"\n"}
          {"\n"}He looked around the store. Some elderly folks had entered and walked down aisle one. He looked down into his palm again at the ground spinner package and the cartridges within. The hidden power of the universe was buried inside of
          these things, far beneath the capability of human sight. A chill ran through him as he put his phone away.{"\n"}
          {"\n"}It was not in Jake’s nature to steal. But in this moment, his excitement overcame his conscience. He jammed the pack into his right pocket.{"\n"}
          {"\n"}Jake had never stolen anything before. His pocket bulged in the rectangular shape of the object stuffed inside. <Text style={{ fontFamily: "gelasibro-italic" }}>If the cashier sees my pocket, I’m dead</Text>. He looked both ways, then
          walked slowly up the aisle, with his hands pushing outward from his hoodie. <Text style={{ fontFamily: "gelasibro-italic" }}>I can do this.</Text>{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Only twenty more feet. Please. Please.</Text> He tried to cover up as much of his right pant pocket as was possible with his hoodie, but most of it was still visible.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>It’s fortunate these stores can’t sense my heart rate,</Text> he thought. He knew the cashier would be on his right when he exited the aisle.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Just stare at the display</Text>. <Text style={{ fontFamily: "gelasibro-italic" }}>That’s all I need to do</Text>. His gut told him to stare at the cashier display when he passed by—it would
          make him appear less conspicuous. That’s what he did. He walked past; his eyes were intently focused on the items on the bottom of the cashier counter.{"\n"}
          {"\n"}Fortunately, the cashier wasn’t looking at him at all. He was busy checking out the elderly couple’s items.{"\n"}
          {"\n"}Jake felt a jolt of relief as he walked back onto Barley Street. He felt the package. <Text style={{ fontFamily: "gelasibro-italic" }}>I promise, I won’t steal ever again. I just had to this time. I needed this.</Text> He checked his
          phone, it was 2:35 p.m. Classes would be ending right about now, but there was nowhere he needed to be. There was no one waiting for him. His mother wouldn’t be home for hours. He glanced around the block. A few cars passed by, but it was
          quiet. People were still working.{"\n"}
          {"\n"}Directly across the street there was a large building that appeared to be an industrial garage. The doors were shut with thick metal chains, and the face of the building was covered in green graffiti. To the right of the garage,
          separated by a narrow alleyway, was a small white house with a sign on it that read: Rockman’s Personal Injury Attorneys.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe there’s a place behind that building to set these things off.</Text> He crossed Woodstock and walked up to the precipice of the alley. Except for some dirty mats and tarps scattered
          across the ground, the alley was empty. He looked at the windows of the law firm; there were no lights on inside.{"\n"}
          {"\n"}His gut was right. A rectangular concrete plot sat behind the industrial garage. It most likely had been used to unload and offload heavy equipment from the back entrance of the facility. There was a large barbed wire fence to the
          left, facing away from the building, stretching towards another large broken-down structure. He walked over to the back of the garage, placed his bag down, and rested his back against it. Jake glanced up at the dimming afternoon sky, then
          slid down to the ground. He was tired. He sat there for a moment. Then he pulled the spinners out from his pocket and scanned the packaging more closely.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>USE ONE SPINNER AT A TIME. TUG FUSE CORD TO IGNITE, THEN IMMEDIATELY PLACE FIREWORK ON A FLAT SURFACE. WAIT FIVE SECONDS FOR FIREWORK TO FULLY IGNITE.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Simple enough.</Text> He looked around again, but there was still no one in sight. He ripped apart the plastic casing, then took one cartridge out of the pack.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Here goes nothing.</Text>
          {"\n"}
          {"\n"}His thumb and index finger yanked the short fuse. An instant later, yellow and blue sparks began sizzling into the air. <Text style={{ fontFamily: "gelasibro-italic" }}>Whoa! But it must get bigger?</Text>
          {"\n"}
          {"\n"}He tossed the ground spinner on the pavement in front of him. A few seconds later the spark show transitioned into a miniature fireworks performance. The cartridge began spinning violently, emitting a radiant, psychedelic shower of
          sparks outward into the air and onto the tarmac. He held his hand over his face, looking between his fingers. <Text style={{ fontFamily: "gelasibro-italic" }}>That’s awesome!</Text>
          {"\n"}
          {"\n"}When the first cartridge fizzled out, he immediately lit a second one.  And then another. As the third cartridge fizzled down, his ground spinner-induced euphoria faded a bit. He felt sleepy. The sun was starting to fade. He rested
          his head against the building and closed his eyes, his hair falling over his face. There was an inexplicable joy when he escaped the real world, even if it was just for a short while.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I like being here. It’s peaceful.</Text> His thoughts shifted to dreams. A few minutes later he was out cold.{"\n"}
          {"\n"}His vision came back into focus hours later. Jake was disoriented when he found himself sitting up, but he quickly remembered where he was when he spotted the burnt ground spinners in front of him. He wiped a splotch of soot off his
          fairly small, well-shaped nose and looked around. The sun had already dipped below the horizon. He could see the first stars becoming visible in the sky. <Text style={{ fontFamily: "gelasibro-italic" }}>I fell asleep here?</Text> He felt
          anxious for a moment but realized there was still nowhere he needed to be. <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder if anyone messaged me?</Text> He pulled up his cell phone. He saw one notification on his lock screen.
          {"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}>1 new message from Nassir</Text>
          </Text>
          {"\n"}
          {"\n"}He felt a pang in his heart.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}>I’m sorry for walking away from you. I just was upset. Where are you? You weren’t on the bus.</Text>
          </Text>
          {"\n"}
          {"\n"}Jake’s stomach twisted in guilt. He put his fingers on the screen’s keyboard to respond, but he stopped. <Text style={{ fontFamily: "gelasibro-italic" }}>I shouldn’t have said those things. But was I fully in the wrong?</Text> He
          wasn’t sure how to respond. Jake lit another cartridge, watched it ignite, then quickly fizzle into nonexistence. A small breeze brought a thick bout of sulphureous smoke in his direction.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Ugh, it smells like rotten eggs</Text>.{"\n"}
          {"\n"}The smell dissipated after a few moments. Then a strong gust of wind carried over more sulfur-smelling smoke. But this smoke smelled different, with a more distinctive ingredient mixed inside of it. It was spicy and woody. It was not
          as offensive as the rotten egg smell. It was almost pleasing, still sulfur-smelling, but not as potent, like a mixture of model rocket engine smoke and the burnt wood of a cedar tree.{"\n"}
          {"\n"}Jake was confused. He placed the last unfired ground spinner in his right jean pocket, grabbed his bag, and stood up, forgetting Nassir for a moment. He sniffed the air as he took a few steps toward the alley, but the smell
          disappeared. <Text style={{ fontFamily: "gelasibro-italic" }}>It was just the wind blowing in the other direction,</Text> Jake thought. But another gust of wind brought the spicy, sulphureous scent back into his nose and this time, it was
          significantly stronger. His mouth twisted in confusion.{"\n"}
          {"\n"}He took a few more steps in the direction of the alley. The smell was growing stronger in this direction. His curiosity was too great, so he began to walk slowly<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> The alley was
          dark and smelled of garbage, but the scent was still present. He skipped through a few small puddles and piles of trash.{"\n"}
          {"\n"}Fifty feet later, the alley opened onto a well-lit street. Across from where he stood, Jake saw a wooden fence on the side of the road. Towering above the wooden rails and made visible by the streetlamps, were tall leafy green plants.
          He looked left down the street; the fence seemed to stretch infinitely out into the distance. He glanced at the tips of the plants.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Wait, this is the cornfield? I haven’t been here in ages. How did I end up all the way over here?</Text> He looked at the street sign. He was on Jason Road. This street ran parallel to the
          ten-mile-long eastern border of Cedar Oaks.{"\n"}
          {"\n"}Cedar Oaks, a Grapefield landmark, was the fifty-thousand-acre cornfield that powered a significant portion of the town’s economic output. It sat on the southwest border of Grapefield, neighboring the town of Livingston. Jake had been
          here once before, on an elementary school field trip.{"\n"}
          {"\n"}He walked across the street and put his hands against the wooden fence, his nostrils flaring. <Text style={{ fontFamily: "gelasibro-italic" }}>It’s coming from in here.</Text> He tried to peer inside, but he couldn’t see much in the
          dark. <Text style={{ fontFamily: "gelasibro-italic" }}>What’s the harm in scoping it out for thirty seconds?</Text> He could only hear the ruffling of stalks rubbing against each other in the evening wind.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I’m not a wimp.</Text>
          {"\n"}
          {"\n"}He hopped over the barricade, his feet hitting the cornfield dirt with a soft plop. The plants were even bigger up close, and they were even more densely stacked than he anticipated. He was not able to see more than a foot or so in
          each direction. <Text style={{ fontFamily: "gelasibro-italic" }}>These things are massive.</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>How do the farmers navigate in here?</Text> He took a few steps forward, pushing aside the
          stalks of corn. A few feet in, he lost sight of Jason Road. As he walked forward a few more steps he couldn’t help but feel the creepy sensation that he was all alone in a cornfield in the pitch black. He stopped and glanced upward for a
          moment. The starry sky above provided some comfort that he was not entirely suffocating within the stalks.{"\n"}
          {"\n"}Twenty strides later, he curved left and walked down a patch of slightly shorter stalks. The smell seemed to be coming from this direction. <Text style={{ fontFamily: "gelasibro-italic" }}>I hope I don’t get lost in this mess.</Text>{" "}
          He had trouble shaking off that stranded in the middle-of-nowhere-feeling, but he pushed himself to walk on. A few paces later, he observed black soot on the tassels of the corn plants. He ran his finger against the blackened corn, then put
          his finger to his tongue. <Text style={{ fontFamily: "gelasibro-italic" }}>This tastes like smoke.</Text>
          {"\n"}
          {"\n"}The stalks were shorter here and burnt. <Text style={{ fontFamily: "gelasibro-italic" }}>This is creepy. Wouldn’t something have to come over the top of this to burn it in this fashion?</Text>
          {"\n"}
          {"\n"}A huge cloud of smoke suddenly engulfed the thickets of corn, making it difficult for him to breathe. He bent over, coughing. <Text style={{ fontFamily: "gelasibro-italic" }}>Oh man</Text>.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That’s it. The smell!</Text> The smoke had carried the pungent woody scent. <Text style={{ fontFamily: "gelasibro-italic" }}>I see no fire. I don’t get it.</Text>
          {"\n"}
          {"\n"}He continued walking, and to his surprise, he finally emerged from the endless stretch of corn. He looked around. He had stumbled into some kind of opening. There was a large object buried in the ground about a hundred feet ahead, but
          it was obfuscated by billowing black smoke. <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck is that?!</Text> Jake squinted as he tried to make out the object.{"\n"}
          {"\n"}“This looks like an actual crater! Is this where the farmers clean their tractors?” Jake muttered out loud.{"\n"}
          {"\n"}A breeze came in from the west which caused the smoke to pass by the object momentarily.  Jake’s eyes connected with the intimidating large, curved surfaces. The far side of the object was submerged in the ground, and the side facing
          Jake protruded high in the air. Jake could see other curves and edges reflecting the faint starlight. It rose high above the ground. A feeling of dizziness overcame him. It looked like some kind of flying machine.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This is not possible.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>VASHEKEM DA MAH, DA MAH!</Text>
          {"\n"}
          {"\n"}Jake saw it then, in the center of the pit. Something was alive and partially buried in a hole, struggling to extricate itself.{"\n"}
          {"\n"}Jake could make what appeared to be muscled arms pushing hard against the Earth.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Is that an animal? Is that a farmer? Dude, I’ve fully lost it! I should have just freaking gone home!</Text>
          {"\n"}
          {"\n"}“VASHI BENTO MA!” the thing roared, appearing to muster up the energy to will itself out of the hole.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I shouldn’t have left school. Why do I have to get so emotional?</Text> The arms of the thing continued to grapple with the ground, and a few seconds later, it had almost dug itself out. He
          watched in terror as the creature used one last powerful flex of its arms to propel its body upward, allowing its legs to escape the last grips of the earth.{"\n"}
          {"\n"}He looked at the sinewy creature. <Text style={{ fontFamily: "gelasibro-italic" }}>Who is that? What is that?</Text> A wobbly feeling ran through him, and he felt like he was going to pass out. The being wiped mud from its eyes with
          what appeared to be a gloved hand. The creature wore something which resembled a sleeveless vest. There were odd looking markings on both of the creature’s upper arms like strange characters were etched into its skin. It turned slightly as
          it brushed off the dirt from its body, and there was a large golden object hanging from its waist.{"\n"}
          {"\n"}The thing then turned around and looked at the large flying machine-like object. It appeared to shake its head in discontentment. <Text style={{ fontFamily: "gelasibro-italic" }}>It thinks?</Text> Jake thought.{"\n"}
          {"\n"}Then the creature turned towards him; its glowing yellow eyes locked onto Jake.
        </Text>
      </View>
    );
  }
}
