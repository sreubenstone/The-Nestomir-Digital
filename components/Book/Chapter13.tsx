import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";
import GlossaryWord from "../Glossary/inline/GlossaryWord";

const StoryGraphic = styled.Image`
  width: ${(props) => (props.width ? props.width : 360)};
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

export default class Chapter13 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 13</Text>
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
          It was 10:50 a.m. when Jake woke up the next morning. He slid up and moaned as he pressed down on his pecs and shoulders. <Text style={{ fontFamily: "gelasibro-italic" }}>Why am I this sore?</Text> He played through the training in his
          mind. <Text style={{ fontFamily: "gelasibro-italic" }}>I guess that axe was heavier than I realized.</Text> He pulled himself out of bed, took a quick shower, and threw on his clothes and his chain, and dropped the beeper that he left on
          his desk into his pocket.{"\n"}
          {"\n"}When he got into the kitchen, he saw a familiar note on the wall.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>Out again. Back later. Don’t wander off. Keep beeper on you. – Dendro</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This guy always has somewhere to be. Can't he wait for me for once?</Text>
          {"\n"}
          {"\n"}Jake opened the fridge out of curiosity and was surprised to find a leftover lamb kabob plate on the top shelf. <Text style={{ fontFamily: "gelasibro-italic" }}>No one is going to eat this, are they?</Text> He didn't much care. He
          grabbed the kabob and gobbled it down as he stood in front of the refrigerator, then put the plate in the sink. Then he felt his beeper pulsate.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>Meet me at Cafe Langostina. Women's Restroom, Cityscape. 25 Rue D'azilal. – Zena</Text>
          {"\n"}
          {"\n"}He read the illuminated characters running across the surface of the silver egg.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Zena beeped me? Cafe Langostina? How am I supposed to find Rue D'azilal? And what on Earth does she mean by women's restroom, cityscape?</Text>
          {"\n"}
          {"\n"}He walked to the far end of the room, beyond Dendro’s bed, and glanced out the window. What else was he going to do today? <Text style={{ fontFamily: "gelasibro-italic" }}>I guess that's where I'm headed,</Text> he thought.{"\n"}
          {"\n"}A man behind a street cart gave him directions. Ten minutes later, he stepped onto <Text style={{ fontFamily: "gelasibro-italic" }}>Rue D'azilal</Text>. <Text style={{ fontFamily: "gelasibro-italic" }}>Cafe Langostina</Text> was on
          the far corner of the block. <Text style={{ fontFamily: "gelasibro-italic" }}>There she is</Text>. He entered the crowded restaurant and walked past the maître ‘d, heading for the back in search of the bathrooms. He soon spotted the woman's
          lavatory, walked up to the door, turned his head both ways to ensure nobody was looking, and entered.{"\n"}
          {"\n"}Jake glanced around the restroom. “What am I looking for in here...a <Text style={{ fontFamily: "gelasibro-italic" }}>cityscape</Text>, Zena beeped?”{"\n"}
          {"\n"}But then he saw the painting. A watercolor of a European city he didn't quite recognize sat across from the toilet, stretching from the floor to the ceiling.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That looks like a city to me</Text>.{"\n"}
          {"\n"}He walked up to it. He tried placing his hands on the landscape, speaking to it, even reciting his name. But nothing happened. <Text style={{ fontFamily: "gelasibro-italic" }}>What am I supposed to do?</Text> Then he took the beeper
          from his pocket and held it in front of the canvas. Almost immediately, he heard the sound of an airlock opening. The painting shot upwards into a slot on the ceiling, and once again, Jake had a hard time believing his eyes. He was standing
          in the corner of a room that had at least thirty alien creatures inside of it. But he was no longer inside a cafe; he was standing inside of some kind of indoor garden. Palm trees surrounded a long rectangular marble pool in the center of
          the room. Glittering stars and other celestial objects were painted across the navy ceiling.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What is this place?</Text>
          {"\n"}
          {"\n"}A group of the aliens and a few humans sat on their knees beside the pool. They appeared to be praying as they dipped their hands into the water.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What is going on here?</Text>
          {"\n"}
          {"\n"}Then he saw Zena. She was sitting at a table in the back, waving at him.{"\n"}
          {"\n"}"Hey there!" she said as he approached. She stuck out her hand. "Please, have a seat."{"\n"}
          {"\n"}Jake sat down and scooted his chair closer to the table. He looked around. “Where are we?” he asked.{"\n"}
          {"\n"}“This is an <Text style={{ fontFamily: "gelasibro-italic" }}>Enlightened Garden of Ld’Shab</Text>,” Zena replied.{"\n"}
          {"\n"}“An Enlightened Garden of Ld'Shab?" Jake asked. "You know, it’s not easy to keep up with all of this stuff.” He looked around the space and saw a combination of humans, goggled-eyed beings, and other creatures that looked similar to
          Zena sitting at the tables, drinking what appeared to be steaming hot cups of tea.{"\n"}
          {"\n"}“This stuff takes time getting used to, I can imagine,” Zena said.{"\n"}
          {"\n"}“What is this place, <Text style={{ fontFamily: "gelasibro-italic" }}>actually</Text>?” Jake asked.{"\n"}
          {"\n"}"This is a spiritual garden, a place where Ld'Shab practitioners come to pray and socialize. These gardens are an important part of Naronian culture, and that culture has proliferated into the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Enlightened" word="Enlightened" toggleGlossary={this.props.toggleGlossary} />
          </Text>{" "}
          systems."{"\n"}
          {"\n"}"<Text style={{ fontFamily: "gelasibro-italic" }}>Enlightened</Text> systems?" Jake asked. “I think I remember Dendro mentioning this term.”{"\n"}
          {"\n"}"Yes. The Naronian Senate began to branch out into new star systems a few thousand years ago, at the beginning of the <GlossaryWord lookup_string="Theaffagi" word="Affagi" toggleGlossary={this.props.toggleGlossary} /> Era," Zena said.
          "These out-of-galaxy settlements we refer to as <Text style={{ fontFamily: "gelasibro-italic" }}>Enlightened</Text> societies. We refer to them as such because a small portion of the members are made up of the planet's indigenous species—in
          Casablanca's case, <Text style={{ fontFamily: "gelasibro-italic" }}>humans</Text>. We use the term <Text style={{ fontFamily: "gelasibro-italic" }}>Enlightened</Text> because these people now know the truth that they are not alone in the
          universe.” She swirled her teacup around gently.{"\n"}
          {"\n"}"There are humans that are aware of your culture? Jake asked. “I know that Dendro mentioned something about a <Text style={{ fontFamily: "gelasibro-italic" }}>settled system</Text> before…” He patted down the hair on the side of his
          head to prevent himself from twirling it.{"\n"}
          {"\n"}"Yes, I know it's a bit much to take in, but know only a small pool of local beings are offered the opportunity to join Naronian society. Enlightened satellite governments have worked hard on recruiting the right balance of native
          residents, as well as ones emigrating from The Nestomir. Here in Casablanca, which is a relatively new Enlightened City, only a handful of local beings are members," Zena explained.{"\n"}
          {"\n"}Jake thought about what Zena had just told him. "But, why would you leave The Nestomir to come to Earth?" He asked.{"\n"}
          {"\n"}"Well, people often make the move to pursue a better life. <GlossaryWord lookup_string="Enlightened" word="Enlightened" toggleGlossary={this.props.toggleGlossary} /> cities, and in some instances, planets, can provide greater economic
          opportunity for folks, specifically in emerging industries like intergalactic sports and agriculture," Zena answered. She pulled her chair a bit closer to the table.{"\n"}
          {"\n"}"That's insane. <Text style={{ fontFamily: "gelasibro-italic" }}>It really is."</Text> Jake looked around the room again. <Text style={{ fontFamily: "gelasibro-italic" }}></Text> "Not only are we not alone, but we are also sharing the
          planet with a select group of humans who know about your existence," Jake stated.{"\n"}
          {"\n"}"That is correct. The members of Enlightened cities are very proud, to the extent they have almost generated a culture of their own," Zena said. She slid an empty mug over to him. "Here, have some tea," she said. She poured the
          steaming liquid into his cup.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What other things do I not know about the universe?</Text> He played through the week's events in his mind as he sipped on his chamomile flavored drink.{"\n"}
          {"\n"}“Well, this week has been something. Hasn't it?” Zena said, a few moments later.{"\n"}
          {"\n"}Jake's eyes dilated. “Yes. To be here. In this place. To learn about your world. It's been...” Jake paused. “It's been overwhelming, to say the least.”{"\n"}
          {"\n"}"Yes, I can see how it would feel that way. What a wild ride it has been, but I do have some good news to share with you," Zena said. She put her cup down. "Zimmer's ship will be ready to fly by Wednesday, two days from now. He also
          feels strongly that we will be able to get Dendro secure access to our military comms lines within the next forty-eight hours. We have a contact here with close ties to the Naronian embassy. Getting access to our embassy out-of-galaxy has
          been incredibly difficult."{"\n"}
          {"\n"}Jake was excited and relieved to hear he might be going home soon, but he was still skeptical. "That's good to hear. But what if the Naronian Forces hold on to <Text style={{ fontFamily: "gelasibro-italic" }}>Spectator One</Text>, the
          law that Dendro mentioned, and demand that he has to continue holding onto me for the time being?" Jake asked as he took another gulp of his tea.{"\n"}
          {"\n"}"Let's not think about that. We'll have to deal with that scenario if it emerges, but we see absolutely no reason for the Forces to want to hold onto you for any longer. We believe the immediate threat has been suppressed. But the
          rule must be obeyed. We must get permission to bring you home. We are confident we soon will."{"\n"}
          {"\n"}She took another sip of her tea, and her eyes brightened. "With all that being said, I have one exciting thing to tell you. Zimmer has agreed to take all of us to a very special event taking place over the next two days:{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Morocco's Enlightened Festival</Text>. It takes place every five years to celebrate the formation of the Enlightened Commonwealth of Morocco. A few of Zimmer's key contacts will be in
          attendance. We will leave tomorrow for the event, stay overnight, then we are planning to take you home on Wednesday, assuming all goes as planned."{"\n"}
          {"\n"}"We're going to a <Text style={{ fontFamily: "gelasibro-italic" }}>festival</Text>? What will we do there?" Jake asked.{"\n"}
          {"\n"}"Yes, Zimmer has given us the okay. I don't want to spoil it for you, but it will be a fun time. A lot of music, food, and interesting activities," she replied. "I even managed to get us all tickets for an exclusive event taking place
          there tomorrow night. Dinner at a palace." Zena winked.{"\n"}
          {"\n"}"That sounds really awesome," Jake replied. He could not imagine exactly what an alien festival consisted of, but it would probably be something he would not forget. "I'm looking forward to it, but I am anxious to get home."{"\n"}
          {"\n"}Zena put down her teacup and began to scroll through her phone. Jake's eyes wandered around the space, but a minute or so later, he caught sight of Zena looking at him. She had a playful look in her eye.{"\n"}
          {"\n"}“What?” Jake asked.{"\n"}
          {"\n"}“I know you were in the dojo just yesterday. But if you're up for it, I'd love to show you something,” Zena said.{"\n"}
          {"\n"}“What is it?” Jake asked.{"\n"}
          {"\n"}“It's a tool. Something I want to show you. It's called a <GlossaryWord lookup_string="Jupyternotebook" word="Jupyter Notebook" toggleGlossary={this.props.toggleGlossary} />
          ,” she said.{"\n"}
          {"\n"}A waiter passed by carrying a plate with a giant tea kettle and a fish on a plate of lettuce.{"\n"}
          {"\n"}“It’s a tool that lets us easily experiment with our Python code. In The Nestomir, we use a similar notebook tool called the Perimetas Pad, but it's basically the same thing.” She took another gulp of tea from her mug. “The Jupyter
          Notebook is an open-source application that runs in your web browser. It allows you to create living and breathing Python notebooks that contain real Python code, visualizations, graphics and text, as well as other remarkable things. It is
          an extraordinary tool to explore, create, and see where different coding ideas take you. Many in academia use Jupyter Notebooks to store their research. It's used all over to explore ideas in Python. In fact, you can even search online for
          famous Jupyter Notebooks, download them, and mess around with them.”{"\n"}
          {"\n"}“That sounds really cool,” Jake said. “I’m down to learn. You're going to show it to me?”{"\n"}
          {"\n"}Another waiter walked by carrying a tray of dove-shaped glasses.{"\n"}
          {"\n"}“Here.” Zena took a sleek looking laptop out of her bag. “This is my personal computer.” She nudged it over towards Jake.{"\n"}
          {"\n"}“This is yours?” Jake responded. “Maybe this notebook thing can be a tool I can use to continue practicing Python when I'm back home.”{"\n"}
          {"\n"}“Yes, exactly. It works well with almost any computer with a browser.” She eyed her laptop. “Here go ahead. Log in.”{"\n"}
          {"\n"}Jake opened the computer. The alien characters on the keyboard were illuminated by orange light. He scanned the board. “How can I use this? The letters are foreign,” Jake said.{"\n"}
          {"\n"}Zena smiled and signaled to Jake to put his hands on the keys.{"\n"}
          {"\n"}When Jake put his fingers down, the alien characters disappeared, replaced by the standard English QWERTY keyboard. “Whoa!” Jake shouted. A few beings across the room looked in their direction.{"\n"}
          {"\n"}Zena gave him a friendly wink. “The password is passionfruit. Don’t ask.” She slid her chair closer to him. “My machine is running Atvian 3.0. It’s very similar to your UNIX based operating systems on Earth, like MacOS. But because
          this is browser-based, not much will change across different computers, or even operating systems.” She pointed at the bottom of the screen. “The nebula icon down here, that's my browser. Open it up. Then put{" "}
          <Text style={{ color: "blue" }}>https://jupyter.org</Text> in the address bar and hit enter.”{"\n"}
          {"\n"}A web page loaded. There was a logo with the word Jupyter on the top left.{"\n"}
          {"\n"}“Scroll down the page a little bit. Click on <Text style={{ fontFamily: "gelasibro-italic" }}>Try it In Your Browser</Text>,” Zena said.{"\n"}
          {"\n"}Jake scrolled down the page and hit the orange <Text style={{ fontFamily: "gelasibro-italic" }}>Try It In Your Browser</Text> link. The page loaded.{"\n"}
          {"\n"}“Now click the Try Classic Notebook button,” Zena said.{"\n"}
          {"\n"}Jake hit the link and a loading indicator appeared in the center of the screen.{"\n"}
          {"\n"}“The program is preparing your first notebook. It takes a few seconds,” Zena said. A new page loaded. <Text style={{ fontFamily: "gelasibro-italic" }}>Welcome To Jupyter</Text> displayed in bold black text at the top. Zena pointed to
          the top left of the screen. “You see the file tab up here.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            Hit File {">"} New Notebook {">"} Python 3
          </Text>
          .”{"\n"}
          {"\n"}Jake clicked the <Text style={{ fontFamily: "gelasibro-italic" }}>Python 3</Text> link. Immediately, a new browser tab opened. At the top of the page was a wide, grey text box with a blinking cursor inside of it.{"\n"}
          {"\n"}“You have just created your real life <GlossaryWord lookup_string="Jupyternotebook" word="Jupyter Notebook" toggleGlossary={this.props.toggleGlossary} />
          ,” Zena said.{"\n"}
        </Text>

        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={140} radius={"none"} source={require("./../../assets/images/lessons/lesson8_addin.png")} />
        </View>
        <Caption>View of Jupyter Notebook. The grey box at the bottom is a cell. Feel free to open up this link on the browser to follow along.</Caption>

        {
          // Section - MODIFIED BECAUSE NEW GRAPHIC INSERTED ABOVE
        }

        <Text style={BookStyles.bookFont}>
          {"\n"}Jake felt a wave of excitement run through him. He was eager to type something, anything. “So, it's a real notebook but with Python?”{"\n"}
          {"\n"}“Yes,” Zena responded.{"\n"}
          {"\n"}“How does it work?” Jake rubbed his hands against the table.{"\n"}
          {"\n"}“The Notebook is broken up into <Text style={{ fontFamily: "gelasibro-italic" }}>cells</Text>—these grey text boxes you see here, where the cursor is blinking. In a Jupyter Notebook, a cell is where we write and organize our code,”
          she responded.{"\n"}
          {"\n"}Jake put his pointer finger on the computer touch pad.{"\n"}
          {"\n"}Zena pointed at the first <Text style={{ fontFamily: "gelasibro-italic" }}>cell</Text> in the Jupyter Notebook. “Try running your first line of Python. Create a new{" "}
          <GlossaryWord lookup_string="Variable" word="variable" toggleGlossary={this.props.toggleGlossary} /> called <Text style={{ color: "#0C2443", fontFamily: "code" }}>age</Text> in the first notebook cell, and then assign a value to it. Go
          ahead, right in there, give it a shot.”{"\n"}
          {"\n"}Jake placed the pointer of his mouse inside the center of the cell. He then typed in:
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={100} source={require("./../../assets/images/lessons/lesson8_1.png")} />
        </View>
        <Caption>(Jupyter Notebook Cell)</Caption>

        {
          // Section 2 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Correct,” Zena said. “Now, go ahead and try and <Text style={{ fontFamily: "gelasibro-italic" }}>print</Text> the value of <Text style={{ color: "#0C2443", fontFamily: "code" }}>age</Text> to our screen. We can run the Python code inside
          of a Jupyter Notebook cell by pressing <Text style={{ fontFamily: "gelasibro-italic" }}>shift-enter</Text>.”{"\n"}
          {"\n"}“You mean I can try to use <Text style={{ fontFamily: "gelasibro-italic" }}>print</Text> right here, in the same cell?” Jake asked.{"\n"}
          {"\n"}“Yes, it doesn’t matter which cell we write in our code in a Jupyter Notebook. Cells help us visually organize ourselves, but behind the scenes it’s just one code file,” she said.{"\n"}
          {"\n"}Jake placed the <Text style={{ color: "#0C2443", fontFamily: "code" }}>age</Text> variable inside of the <Text style={{ fontFamily: "gelasibro-italic" }}>print</Text> function, and ran the cell block using{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>shift-enter</Text>. Immediately, the value <Text style={{ color: "#0C2443", fontFamily: "code" }}>12</Text> appeared below the cell block.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson8_2.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 3 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Congratulations.” She put her hand on his shoulder. “You just ran your first Python script in a Jupyter Notebook!”{"\n"}
          {"\n"}“That was easy,” Jake said, trying not to sound too excited. “So we can literally run whatever Python code we want in here?”{"\n"}
          {"\n"}“Yep.” Zena stood up. “Give me one second. I'll be back in a moment.” She walked over to the marble pool and began chatting with an elf-like creature.{"\n"}
          {"\n"}Jake looked back at the screen. Who knew any of this existed? <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder what would have happened if I stumbled into a Jupyter Notebook before I stumbled into Call of Duty?</Text>
          {"\n"}
          {"\n"}She returned a minute later. “Sorry about that. I had to say hi to a friend,” Zena said. “But as I was washing my face with the basin water, I was thinking about our dojo training yesterday. It's critical that we try to build new
          things after we learn something new. That's why the Jupyter Notebook is so powerful. We can quickly test out our learnings by sketching and coding out our ideas."{"\n"}
          {"\n"}“Yea. It’s kind of like a practice pad,” Jake said.{"\n"}
          {"\n"}Zena nodded and sat back down next to him. “As one of my great teacher's once said: ‘We must build to learn, just as we must learn to build. And that cycle should drive us through life.’”{"\n"}
          {"\n"}Jake thought for a moment about the time he helped Nassir with their first rocketry kit. How could a soft white powder propel a rocket into the sky? Nassir explained the powder was only molecules. Molecules held together, and when
          they were broken by heat or a spark, unlocked tons of energy. Chemistry made more sense to him then. “That’s an interesting quote.”{"\n"}
          {"\n"}She looked at him. “You know, it might be interesting to pick a small idea and try and spin it up on The Jupyter Notebook. Nothing mind-boggling. Just something to help make things click based on your learnings to date.”{"\n"}
          {"\n"}“Really? That sounds cool,” Jake said. “I'd like to try and use this thing for real. What should we build?”{"\n"}
          {"\n"}“Do any ideas come to mind?” Zena asked. “Anything <Text style={{ fontFamily: "gelasibro-italic" }}>you’d</Text> like to build?”{"\n"}
          {"\n"}“I once came up with the idea to create a multiplayer game for iPhone and Android. A flag football game that you could play against friends, but it would let you make cool moves that you couldn't do in real life. Nassir thought it was
          interesting. But I had no idea how to code so that idea died quickly,” Jake said.{"\n"}
          {"\n"}“Ah. That’s interesting. A multiplayer game could have a lot of potential. We can explore game development a bit later, but we need to build up more of your fundamentals to get to that level. You will get there, I promise. Allow me to
          suggest something simpler for today,” Zena said.{"\n"}
          {"\n"}“Okay,” Jake responded.{"\n"}
          {"\n"}“One of the first projects I ever built was a horoscope app. It was a simple product, but it had purpose, and it was fun. A user entered their birth month and the app spit out a funny horoscope. Would you be up to try and build that
          together?” Zena asked.{"\n"}
          {"\n"}“That actually sounds pretty cool. We can take a try. But I’m sure you’ll need to help me,” Jake said.{"\n"}
          {"\n"}“Yes, this will be a collaborative process,” Zena added.{"\n"}
          {"\n"}“So how do we do this? “Jake said, looking at the Jupyter screen. “What does it take to build a horoscope app?”{"\n"}
          {"\n"}“The first thing we want to do when we try and build an app like this is to create a basic outline of the functionality. This means writing down the precise steps we want our program to perform. Even the most experienced coders
          implement this process when they begin new projects. Sometimes we refer to this outlining method as <GlossaryWord lookup_string="Pseudocoding" word="pseudo-coding" toggleGlossary={this.props.toggleGlossary} />. Pseudo-coding is the
          procedure of jotting down the steps of our program using English. It does not require us to use Python syntax just yet. Can you take a stab at outlining the steps in English?” Zena responded.{"\n"}
          {"\n"}“I can try,” Jake replied.{"\n"}
          {"\n"}Zena pointed to the top center of the Jupyter Notebook screen. “You see up here where the center dropdown menu says <Text style={{ fontFamily: "gelasibro-italic" }}>Code</Text>? You can toggle this dropdown selector to{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Markdown</Text>. The <Text style={{ fontFamily: "gelasibro-italic" }}>Markdown</Text> option allows us to write regular text in the cells of our notebook. This will be useful for writing our
          pseudo-code. Toggle the Jupyter Notebook into <Text style={{ fontFamily: "gelasibro-italic" }}>Markdown</Text> mode, then use the next notebook cell to write our pseudo-code.”{"\n"}
          {"\n"}Jake toggled the option selector into <Text style={{ fontFamily: "gelasibro-italic" }}>Markdown</Text> and placed the cursor into the new notebook cell. He typed in two steps that he felt best described their horoscope program.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={175} source={require("./../../assets/images/lessons/lesson8_3.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 4 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>Zena looked at Jake's work. “You are correct. But allow me to make some modifications.” She slid the computer over to her and added in her version of the pseudo-code in a new cell below Jake's.</Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={175} source={require("./../../assets/images/lessons/lesson8_4.png")} />
        </View>
        <Caption>Pseudo-coding is incredibly powerful. But most of us get too excited and start writing code without making the outline.</Caption>

        {
          // Section 5 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “You can see I modified your language slightly to make things even clearer. I added step three, because we don’t want to forget to display the horoscope to the screen. That’s an important feature for this app,” Zena said.{"\n"}
          {"\n"}“Got it,” Jake replied. “Now I see how this thing is like a real notebook. We can use regular English and Python in the same place.”{"\n"}
          {"\n"}“Yes. There are endless possibilities with a Jupyter Notebook. We made an important first step here, by outlining the process we need to implement with code. Writing down these steps in detail, kind of like writing a story outline,
          helps us write better programs,” Zena said.{"\n"}
          {"\n"}“Now, let's begin to implement these steps with real Python code. Go ahead and use a new cell in the notebook by hitting <Text style={{ fontFamily: "gelasibro-italic" }}>shift-enter</Text> again. For today, because we don’t need to
          deliver a fully polished product, we can design this app as a <Text style={{ fontFamily: "gelasibro-italic" }}>function</Text> first. So, take a try knowing this point. And it’s okay to think out loud. In fact, it’s better, so I can help.
          Don’t worry about messing up. Coding is all about making mistakes and adapting quickly. Even the masters mess up. It’s just part of coding. And don't forget to toggle the central dropdown bar back into{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Python</Text>, it's set to{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Markdown" word="Markdown" toggleGlossary={this.props.toggleGlossary} />
          </Text>{" "}
          now,” Zena added.{"\n"}
          {"\n"}Jake toggled the central dropdown menu back to Python and put the cursor in the new notebook cell. He thought for a few moments, then spoke out loud, “So step one is to enter the month we were born. You said we can use a{" "}
          <GlossaryWord lookup_string="Function" word="function" toggleGlossary={this.props.toggleGlossary} /> for this attempt today. We are entering in a month. So, what does that mean? That’s an{" "}
          <GlossaryWord lookup_string="Input" word="input" toggleGlossary={this.props.toggleGlossary} />, right? So, can I start by creating a <GlossaryWord lookup_string="Function" word="function" toggleGlossary={this.props.toggleGlossary} /> with
          one input? Like I did yesterday in the dojo? He kept his eyes on the screen. He wrote in the function header by defining a function named <Text style={{ color: "#0C2443", fontFamily: "code" }}>getHoroscope</Text> and giving it one input
          parameter named <Text style={{ color: "#0C2443", fontFamily: "code" }}>month</Text>.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson8_5.png")} />
        </View>
        <Caption>A function defined with one parameter.</Caption>

        {
          // Section 6 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Excellent. This is how we define a function with one <GlossaryWord lookup_string="Input" word="input" toggleGlossary={this.props.toggleGlossary} />
          ,” Zena replied. “What's next?”{"\n"}
          {"\n"}Jake reviewed Zena's pseudo-code. <Text style={{ fontFamily: "gelasibro-italic" }}>Step 2: Use the month entered to look up the matching horoscope.</Text>
          {"\n"}
          {"\n"}“We need to look up the corresponding horoscope based on the month that is passed into the function,” Jake said out loud. “But we don’t have anything right now storing any information about our horoscopes.”{"\n"}
          {"\n"}“We need to define our horoscopes. What might be the process you would use, say on paper, to store and retrieve an assortment of horoscopes organized by month?” Zena asked.{"\n"}
          {"\n"}Jake squinted as he thought about the question. “I'd have a list of some sort that stores each month and its corresponding horoscope. Then look up the specific horoscope that corresponded in the list to that month? Something like
          that?” Jake said.{"\n"}
          {"\n"}“So, what are you really doing here?” Zena probed.{"\n"}
          {"\n"}“I am looking up information. I’m searching for something. I’m taking January, then finding the name, and the corresponding definition. I’m looking up something by a name?” Jake said.{"\n"}
          {"\n"}“Yes. And what type of tool do we use to do this?” Zena continued.{"\n"}
          {"\n"}“A <GlossaryWord lookup_string="Dictionary" word="dictionary" toggleGlossary={this.props.toggleGlossary} />
          !” Jake said enthusiastically.{"\n"}
          {"\n"}“Exactly. So go ahead and create a dictionary right there inside this function you've created. You can make up whatever horoscopes you deem fit! That's half the fun.” Zena smiled.{"\n"}
          {"\n"}“In the function's code block? I think I remember the syntax. The open and closed brackets, the <GlossaryWord lookup_string="Key" word="keys" toggleGlossary={this.props.toggleGlossary} /> and values. Give me a minute to think of some
          good ones.”{"\n"}
          {"\n"}Two minutes later Jake finished creating his <Text style={{ color: "#0C2443", fontFamily: "code" }}>horoscopes</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>dictionary</Text> inside of his newly created{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>getHoroscope</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>function</Text>.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={160} source={require("./../../assets/images/lessons/lesson8_6.png")} />
        </View>
        <Caption>Jake's function. He's added a dictionary inside of the function called horoscopes.</Caption>

        {
          // Section 7 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Zena glanced at the cell. “This is excellent. You have correctly added a dictionary to your function.” She chuckled as she viewed the code. “I wish I was born in April,” she remarked. “When is your birthday?”{"\n"}
          {"\n"}“June,” Jake said with a smile.{"\n"}
          {"\n"}Zena chuckled. “I get it. Now to recap, we've defined a function called <Text style={{ color: "#0C2443", fontFamily: "code" }}>getHoroscope</Text>. Our function has one parameter, named{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>month</Text>. And we've leveraged a dictionary <GlossaryWord lookup_string="Datastructure" word="data structure" toggleGlossary={this.props.toggleGlossary} /> inside of our function to
          store our monthly horoscopes,” Zena said.{"\n"}
          {"\n"}Jake grinned. “So, what’s next?”{"\n"}
          {"\n"}“You tell me,” Zena replied.{"\n"}
          {"\n"}Jake raised his eyebrows as he examined the cell. “Well, we still need to look up the horoscope in the dictionary based on the month that is inputted into our function. But I have no idea how to do this,” Jake said.{"\n"}
          {"\n"}“We will work through this together. We need to use our input, <Text style={{ fontFamily: "gelasibro-italic" }}>month</Text>, to look up the correct value in our dictionary. Do you remember how to access the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>value</Text> of a specific <Text style={{ fontFamily: "gelasibro-italic" }}>key</Text> in a dictionary?” Zena asked.{"\n"}
          {"\n"}“I think so. You write in the name of the dictionary, then place the key name in quotes inside of brackets next to it,” Jake replied. He added another line of code to the function.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={194} source={require("./../../assets/images/lessons/lesson8_7.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 8 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Exactly,” Zena said. “Good memory. This enables our function to access January’s horoscope.”{"\n"}
          {"\n"}Jake examined the screen. “But what I don't get is that the <Text style={{ fontFamily: "gelasibro-italic" }}>key</Text> name we are accessing is changing depending on our input. For example, we might want January, or April, etc.” He
          thought for a moment. “Wait, can we use the parameter inside of the brackets?” Jake asked.{"\n"}
          {"\n"}“What do you think? Be confident with your intuition,” Zena said.{"\n"}
          {"\n"}“No way,” Jake said. “Can we really use the parameter directly?”{"\n"}
          {"\n"}Zena nudged him toward the cell block.{"\n"}
          {"\n"}“You're telling me we can just use <Text style={{ fontFamily: "gelasibro-italic" }}>month</Text>? It's that simple?” Jake asked.{"\n"}
          {"\n"}“Give it a go,” Zena responded.{"\n"}
          {"\n"}Jake modified his code at the bottom.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={190} source={require("./../../assets/images/lessons/lesson8_8.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 9 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Well done. I'm telling you, always trust your gut,” Zena said. “Some of this stuff is more obvious than it appears. It is only the intimidation of learning something new that often gets in the way.”{"\n"}
          {"\n"}“I can see that,” Jake said.{"\n"}
          {"\n"}“So now we can access the correct horoscope based on the month we pass into our function. We are doing this using our month parameter directly inside the dictionary value lookup syntax,” Zena said. “Now let's take a look at the step 3
          I wrote down earlier.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Step 3: Display the value of the horoscope to our screen.</Text>
          {"\n"}
          {"\n"}“Ah. Right. I need to display the value of the function to the screen. That makes sense. Hmmm. We need to <Text style={{ fontFamily: "gelasibro-italic" }}>print</Text> right? In the previous lesson we assigned a new variable to the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>output</Text> of the function. Then we <GlossaryWord lookup_string="Print" word="printed" toggleGlossary={this.props.toggleGlossary} /> the value of that variable to the screen,” Jake said
          aloud.{"\n"}
          {"\n"}Zena shook her head. “Yes, this is one way of doing this. Give it a go. And don’t forget to <GlossaryWord lookup_string="Returnstatement" word="return" toggleGlossary={this.props.toggleGlossary} />
          !”{"\n"}
          {"\n"}“Right.” Jake spent some time playing around with the cell. He added the{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>return
          </Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text> keyword at the end of his function's code block. Then he defined a new variable and set it equal to the{" "}
          <GlossaryWord lookup_string="Output" word="output" toggleGlossary={this.props.toggleGlossary} /> of his <Text style={{ color: "#0C2443", fontFamily: "code" }}>getHoroscope</Text> function, passing in his real birth month, June, as the input{" "}
          <GlossaryWord lookup_string="Argument" word="argument" toggleGlossary={this.props.toggleGlossary} />.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={237} width={330} source={require("./../../assets/images/lessons/lesson8_9.png")} />
        </View>
        <Caption>Remember - the bottom two lines of code here are not part of the function getHoroscope definition. They are separate lines of code.</Caption>

        {
          // Section 10 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Remember, to run the Python code in a Jupyter Notebook cell, we must press <Text style={{ fontFamily: "gelasibro-italic" }}>Shift + Enter</Text>,” Zena said.{"\n"}
          {"\n"}Jake ran the cell. But an error emerged.{"\n"}
          {"\n"}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>
            NameError: name 'June' is <Text style={{ fontFamily: "gelasibro-italic" }}>not</Text> defined!
          </Text>
          {"\n"}
          {"\n"}“Aw. That looks bad. I could have <Text style={{ fontFamily: "gelasibro-italic" }}>sworn</Text> this was right. Darn it,” Jake said.{"\n"}
          {"\n"}“Let me take a look. Oh. Yes. Take a look at the statement <Text style={{ color: "#0C2443", fontFamily: "code" }}>my_scope = getHoroscope(June)</Text>,” Zena said.{"\n"}
          {"\n"}“Ah! I didn't use <Text style={{ fontFamily: "gelasibro-italic" }}>quotes</Text>, I passed in the name of a non-existent variable named June! We must pass in a text string, not a variable name. He fixed his code quickly by placing his{" "}
          <GlossaryWord lookup_string="Argument" word="argument" toggleGlossary={this.props.toggleGlossary} /> in quotes. The line now read:  <Text style={{ color: "#0C2443", fontFamily: "code" }}>my_scope = getHoroscope("June")</Text>.Then he re-ran
          the cell.{"\n"}
          {"\n"}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>You will meet an alien in a cornfield.</Text>
          {"\n"}
          {"\n"}“Awesome kid! It worked! The horoscope seems pretty accurate also! Now try it with another month,” Zena said. “My birthday is in August.”{"\n"}
          {"\n"}Jake swapped June with August and re-ran the cell.{"\n"}
          {"\n"}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>Your puppy will grow wings.</Text>
          {"\n"}
          {"\n"}“That’s my horoscope! I don't think I'll be getting a new pet until next year! Your code appears to be operational. Congratulations, you just built a working piece of software,” Zena said.{"\n"}
          {"\n"}“Thanks,” Jake responded, blushing. “That’s amazing.”{"\n"}
          {"\n"}“Yes, it is. It’s real.” Zena looked at him. “Let’s recap what we did for a second.{"\n"}
          {"\n"}We defined a function called <Text style={{ fontFamily: "gelasibro-italic" }}>getHoroscope</Text> with an input <GlossaryWord lookup_string="Parameter" word="parameter" toggleGlossary={this.props.toggleGlossary} /> named{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>month</Text>.{"\n"}
          {"\n"}We created a new dictionary, named <Text style={{ fontFamily: "gelasibro-italic" }}>horoscopes</Text>, which housed our horoscope values.{"\n"}
          {"\n"}We accessed the proper value in our dictionary by leveraging the power of parameters, using the <Text style={{ fontFamily: "gelasibro-italic" }}>horoscopes[month]</Text> syntax.{"\n"}
          {"\n"}We returned the dictionary value in the function so that it could be handed off to any code waiting in line for the function’s result.{"\n"}
          {"\n"}We stored the result of the function to a new variable named <Text style={{ fontFamily: "gelasibro-italic" }}>my_scope</Text>.{"\n"}
          {"\n"}We printed the value of this variable to the screen.”{"\n"}
          {"\n"}“Yes,” Jake responded.{"\n"}
          {"\n"}“You can see that this software that you <Text style={{ fontFamily: "gelasibro-italic" }}>wrote</Text> could power a real horoscope app or even a physical toy with a readout display. This is exactly how the underlying code might
          function. Python can help us do some serious stuff,” Zena said with a smile. She checked her beeper. “This was fun. I wish I could stay, but I have to run.” She reached into her bag and pulled out a book and placed it in front of Jake.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Learning Doctrines</Text> was printed in gold underneath a set of alien lettering.{"\n"}
          {"\n"}“Books are powerful,” she said. “This is a key work of Ld'Shab philosophy. It’s helped guide how our society learns, studies, and creates. This is only <Text style={{ fontFamily: "gelasibro-italic" }}>Volume One</Text>, but feel free
          to glance through it. This edition has been translated into English." She stood up, sliding her computer into her bag. "You can stay here as long as you’d like. And keep that beeper on you! I will see you later.” With that, she headed for
          the painting on the front wall.{"\n"}
          {"\n"}Jake watched as the artwork quickly rose up into the ceiling, allowing Zena to step inside the lavatory from which he had entered. She waved to him and then the canvas slid back down in front of her.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder where she’s going.</Text>
          {"\n"}
          {"\n"}As he glanced around the room again to study aliens and humans engaged in social conversations, prayer, and spiritual study, no one paid him any attention.{"\n"}
          {"\n"}He ran his fingers across the binding of the book. <Text style={{ fontFamily: "gelasibro-italic" }}>This thing is old. I wonder what’s in it?</Text>
          {"\n"}
          {"\n"}He flipped to the first chapter, <Text style={{ fontFamily: "gelasibro-italic" }}>The Learning Tenets</Text>. He started near the top. “Jakoba Elianu, 3,434 Sentient Age: The first tenet is{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>La’Tishvah</Text>: We must build to learn.” <Text style={{ fontFamily: "gelasibro-italic" }}>Dendro spoke of this</Text>, Jake thought. He read the paragraph below the quote which spoke about
          the power of learning with purpose. How did this person know so much about learning so long ago? And how did it survive so many generations? He scanned further down the page and found another interesting segment. "The third learning tenet
          shall state: We Must Respect What Nature is Telling Us.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This is interesting. I need Dendro to teach me more of this stuff,</Text> Jake thought as he flipped through the pages. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>He perused a
          few other passages: <Text style={{ fontFamily: "gelasibro-italic" }}>The Birth of Naronian Culture</Text>, <Text style={{ fontFamily: "gelasibro-italic" }}>The Function</Text>, <Text style={{ fontFamily: "gelasibro-italic" }}></Text>and{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Daily Ld’Shab Spiritual Practice</Text>.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They have fire-dancing rituals?</Text>
          {"\n"}
          {"\n"}Four hours had passed by the time he received a message from Dendro informing him to come home to have dinner. He spent five minutes finishing up a segment on{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Investigation of Spirit Walks</Text>, then headed for the painting, book in hand.{"\n"}
          {"\n"}He walked through the cafe, back onto the street, and as he sauntered back to Tangiers, he wondered how he could ever return home knowing what he did now.
        </Text>
      </View>
    );
  }
}
