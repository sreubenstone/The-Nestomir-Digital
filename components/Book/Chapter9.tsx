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

export default class Chapter9 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 9</Text>
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
          Dendro had been injured many times serving in the Solar Forces. It was part of the job. Surprisingly, the first time he got injured in the military he was not on a mission or in combat. It was twelve years ago in Solar Force’s basic
          training. His squadron was stationed at St. Treppes military base in south-eastern Naronia. His squadron had snuck out onto a nearby Kuja course at night to play the infamous Solar Forces game they called 'Jenfogē’. It was like Earth golf,
          but it was only played after dusk, and it also involved m-28 grenades and microwaved vodka. His friend Alexo had invented the game years prior. Alexo’s father had been an explosives expert in the forces many years before and was notorious
          for causing mischief in the field.{"\n"}
          {"\n"}The game was simple. It was a nine-hole match play. The game began at each putting green where Alexo would place an m-28 grenade in the hole. Each member of the game would then take their turn putting. The objective of the game was to
          get the ball as close to the hole as possible, without getting it inside (which would detonate the m-28). The hole ended once a member of the game sunk the putt and detonated the grenade inside of the hole. The winner of the hole was the
          individual who had their ball closest to the hole before it exploded. The loser, the individual who had blown up the hole, had to drink the most disgusting drink they could muster up at the time the game was played. That night it was Skolda
          Vodka, microwaved.{"\n"}
          {"\n"}The thing was Alexo was so tipsy after leaving the seventh hole (he had lost 5 holes in a row), that he stumbled over something on the course path that night and dropped an m-28 right on Dendro’s calf. The grenade bounced once on the
          ground, then exploded, and most of Dendro’s calf muscle was eviscerated. He had to be airlifted back to base; that was another three months in bed, and a twelve thousand Naronian Rupel fine—half a soldier's yearly wages. On this early
          morning flight to Casablanca, Dendro had to compensate for his injury. This meant reducing the vibrations in the ship (which had the potential to disrupt freshly sealed wounds). The simple way to do this was by reducing the craft’s average
          cruising velocity; and for this reason he pulled back hard on the throttle when they got up above 30,000 feet.{"\n"}
          {"\n"}Jake peered out through the cockpit window as the Sentauri Beacon soared over the North American continent. <Text style={{ fontFamily: "gelasibro-italic" }}>Was Grapefield somewhere down in those lights below?</Text> His thoughts
          shifted to his mother as he scanned the terrain. <Text style={{ fontFamily: "gelasibro-italic" }}>She must be in full panic attack mode by now</Text>. He felt an immense pang of guilt. But after thinking about his family, a wave of
          exhaustion followed, and he soon dozed off. When he awoke there was nothing but swaths of blue-green ocean in front of them.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>We’re over the Atlantic</Text>. He watched as patches of water popped through the gaps in cloud cover. He studied the horizon. There was no land in sight. He pondered what existed below the
          waves. Whales, sharks, and thousands of other species that were not discovered yet? He read once that the ocean was like outer space—a vast expanse of unexplored territory that obeyed weird rules and exhibited bizarre phenomena. Then he
          thought of the rink. He thought of the axe revolving in the air beside him. <Text style={{ fontFamily: "gelasibro-italic" }}>Did that really happen or am I imagining it?</Text>
          {"\n"}
          {"\n"}“I don’t understand what happened on that rink. The fight. It wasn’t me,” Jake said.{"\n"}
          {"\n"}Dendro massaged his injured shoulder. “I don’t understand either, son. I have never seen anything like that. I must consult my spiritual mentors about what I witnessed, and I must speak with Zimmer. But for now, be proud of yourself.
          You saved us. And I never in a million years thought I’d be saying that,” Dendro responded.{"\n"}
          {"\n"}Jake thought for a moment. It was true, without his intervening, they would both most certainly be dead. He thought about the tall, ghostly troopers and their glowing long-blades… the backward curving legs.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Yuck.</Text> Even though he practically killed one himself, the thought of them still made him shiver. “Those fighters… those were Venthum soldiers?”{"\n"}
          {"\n"}“Affirmative. Multiple races fight in the <GlossaryWord lookup_string="Venthumspacelegions" word="Venthum Space Legions" toggleGlossary={this.props.toggleGlossary} />, just as multiple races fight for the Republic of Naronia, in the
          Solar Forces. <GlossaryWord lookup_string="Skruzdenwarriors" word="Skruzden Warriors" toggleGlossary={this.props.toggleGlossary} /> tend to make up the Venthum search and destroy battalions. The Skruzden are an ancient race, native to the
          planet of Venthe,” Dendro explained. “They are a species governed and controlled by the Ring of Vernost, the ruling political body on Venthe. They are also the only other race indigenous to Venthe besides the Native Venthum. Those were
          Skruzden warriors on the rink.”{"\n"}
          {"\n"}It was hard to fathom. Sinister creatures from another world with complex histories, joining up to fight the good in their galaxy. And he nearly took one down on his own? As they continued to fly in silence, he played the fight
          sequence over and over again in his head. <Text style={{ fontFamily: "gelasibro-italic" }}>Had that really been him</Text>?{"\n"}
          {"\n"}As they soared over the Atlantic, Dendro peered curiously at a colorful graphic on the screen in front of him. Jake couldn't quite make out the image. The graphic looked to be made up of thinly spaced lines that formed a complex
          interconnected pattern like a piece of art.{"\n"}
          {"\n"}“What are you looking at?” Jake asked.{"\n"}
          {"\n"}Dendro repositioned himself in his seat. “My niece sent me her year-seven semester final project—before the ambush. This is a sketch she created with code.” Dendro's eyes softened as he pulled up another rendering of the
          two-dimensional sketch. “Nira usually sends me her class projects. She enjoys keeping me up to date on her learning progress. Her mother, my older sister, pushes Nira quite hard in school.” Dendro smiled. He traced the geometry of the
          artwork on the monitor with his finger. The graphic appeared to be made up of a pattern of overlaid triangles that when positioned together, formed what could be best described as the petals of a flower.{"\n"}
          {"\n"}“Interesting,” Jake said. “So, you <Text style={{ fontFamily: "gelasibro-italic" }}>are</Text> allowed to communicate with your family up here?”{"\n"}
          {"\n"}“Yes. We are allowed to receive communications from family once every three months—the communications come over the secure band,” Dendro said.{"\n"}
          {"\n"}“I see. That’s good you do get to speak to them sometimes,” Jake replied as he continued to study the graphic.{"\n"}
          {"\n"}“It is important to hear from your family out in deep space. It helps keep you level—even if it’s only every few months.” Dendro shifted the monitor to his right, allowing Jake to examine the sketch more closely. It was a spiral drawn
          with thousands of lines, coming together to form a futuristic looking rose, much too precise to be drawn by hand.{"\n"}
          {"\n"}“The Naronian schools teach art?” Jake asked.{"\n"}
          {"\n"}“Affirmative. Well, her seventh-year courses are beginning to introduce her to key aspects of the <Text style={{ fontFamily: "gelasibro-italic" }}>Holy Curricula</Text>. She was recently introduced to one of our society’s critical
          learnings: <Text style={{ fontFamily: "gelasibro-italic" }}>The Software Ecosystem</Text>. This enables her to incorporate things like art, as well as other intriguing things, into her projects,” Dendro said.{"\n"}
          {"\n"}“The software <Text style={{ fontFamily: "gelasibro-italic" }}>what</Text>?” Jake asked.{"\n"}
          {"\n"}Dendro massaged his bandaged shoulder. “You heard correctly. <Text style={{ fontFamily: "gelasibro-italic" }}>The Software Ecosystem</Text> or <Text style={{ fontFamily: "gelasibro-italic" }}>The Ecosystem of Code</Text>. It is a
          continuum of sharing and inventiveness unlike anything either of our species have ever seen.” Dendro hit something on the keyboard and pulled up another screen on the computer.{"\n"}
          {"\n"}“The ecosystem of code?” Jake blurted out.{"\n"}
          {"\n"}“Yes, son. The ecosystem of code, or as some call it the open-source software ecosystem, is a large swath of code segments that have been uploaded to both of our internets for the common good of programming. Think of it as a version
          of Earth’s Wikipedia, but instead of collaborating on articles, it is a massive collaboration of coders helping each other build interesting pieces of software. And yes, I know what you might be thinking. Both the Earth’s internet and the
          Nestomir’s internet developed a similarly shaped software ecosystem independent of one another. Our spiritual leaders believe this open source phenomena to be a natural evolution that takes place at some point in the history of all living
          things.”{"\n"}
          {"\n"}Dendro toggled something on the console. “And what is remarkable is that we can download these shared collections of code into our projects. These publicly available segments of code, which we call{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>libraries</Text>, or sometimes{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Modules" word="modules" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          , help us do all sorts of incredible things with our projects including granting us the power to create art, develop artificial intelligence, and synthesize music, as well as many other incredible things.” Dendro patted down his man bun
          gently. “Nira’s first year-seven project is focused on getting the student to understand a <GlossaryWord lookup_string="Library" word="library" toggleGlossary={this.props.toggleGlossary} /> of their choosing, and then asks them to employ it
          successfully,” Dendro said. “In Nira’s case, she has chosen to use an open source Python <GlossaryWord lookup_string="Library" word="library" toggleGlossary={this.props.toggleGlossary} /> called{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>XRabbit</Text>, similar to Earth’s Python art library,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Turtle" word="Turtle" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          , to help her create art. This library provides her with a bunch of tools that make it easy for her to draw complex shapes with Python.”{"\n"}
          {"\n"}“Hmm, that is interesting. I've heard Nassir mention the term <Text style={{ fontFamily: "gelasibro-italic" }}>library</Text> before when he was talking about his robotics project, but I had no idea what it meant,” Jake replied. “So{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>that’s</Text> what it is—a shared collection of code?”{"\n"}
          {"\n"}“A library is a segment of code uploaded to the internet by another programmer that any other coder can use, and most of the time, in both of our galaxies, programmers share these segments of code online for free.” Dendro pulled up
          another screen and began typing something into the keyboard. “First and foremost, libraries prevent us from spending time trying to solve a problem that someone else has already solved. Need to construct a graph in Python? You can download
          the Earth-based library named <Text style={{ fontFamily: "gelasibro-italic" }}>MatPlotLib</Text>. Want to start building a new video game? Then get a head start by downloading the Earth-based{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Pygame" word="PyGame" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          . There are over 337,000 Python libraries in existence across both of our galaxies and it grows every day,” Dendro said.{"\n"}
          {"\n"}“How do you know so much about Earth?” Jake asked.{"\n"}
          {"\n"}“Because your system is well known in Naronia for its enthusiastic adoption of code.  Earth’s history is taught in many of our social studies courses,” Dendro said.{"\n"}
          {"\n"}“That's radical...your society...knows about Earth's development,” Jake responded. “There’s one thing I don't understand,” Jake said. “Why would anyone upload their code for free?”{"\n"}
          {"\n"}“Well, son, most programmers share these libraries for the love of creating things. Some coders do it for status. Many large companies also fund the development of powerful libraries in both of our galaxies because it allows them to
          help shape the future of the internet. But, surprisingly, most libraries are uploaded to the internet in both of our systems purely in the spirit of sharing. From the earliest days of software development, both on Naronia and on Earth,
          coders have been inclined to share code because the nature of code makes it very easily shareable: it's just text.”{"\n"}
          {"\n"}Dendro continued scrolling on the new application he brought up, which appeared to be a web-browser, stopping at moments to read the writing on the page. “You see, coders are usually beings motivated first and foremost by their unique
          love of building things. The earliest coders exchanged their ideas over the internet as they collaborated on building cool projects. Over time, as many of these create-first coders became professional coders on both of our planets, they
          carried the culture of sharing code with them into many professional industries. That's how the ecosystem of code began for both of us. Once it started, there has been no stopping it,” Dendro said.{"\n"}
          {"\n"}“People who care about creating for the benefit of society more than getting paid. That’s impressive.” Jake thought for a moment, then asked, “But what else can you do with these libraries besides make a graph or a game?”{"\n"}
          {"\n"}Dendro turned towards him. “We can solve a multitude of problems with libraries, some more rudimentary, some more complex. For example, we can use a Python library to perform a basic utility, like helping us format dates in our code.
          We can also use a Python library to build a complex system like creating artificial intelligence,” Dendro replied. “Of course, libraries are just pure code, so we could write this code ourselves, but it may take us months or years to
          recreate these libraries. That's why we download them into our projects,” Dendro said.{"\n"}
          {"\n"}“I understand,” Jake said. “They are tools that help us write code faster, so we don't waste time.”{"\n"}
          {"\n"}“Yes. I should note Python actually provides us with a powerful set of <Text style={{ fontFamily: "gelasibro-italic" }}>built-in</Text> libraries. These <Text style={{ fontFamily: "gelasibro-italic" }}>built-in</Text> libraries are
          considered to be a part of the ecosystem, but they don't have to be explicitly downloaded into our projects. For example, there is a <Text style={{ fontFamily: "gelasibro-italic" }}>built-in</Text> Python library called{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Datetime</Text> which helps us do things more easily with dates like convert a timestamp across time zones. There is another <Text style={{ fontFamily: "gelasibro-italic" }}>built-in</Text>{" "}
          Python library called{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Math" word="Math" toggleGlossary={this.props.toggleGlossary} />
          </Text>{" "}
          which helps us expand our ability to perform math within our code like getting the factorial of a number,” Dendro said.{"\n"}
          {"\n"}“So, we don't always have to worry about downloading stuff?” Jake asked.{"\n"}
          {"\n"}“No, we do not,” Dendro replied. He swiveled the monitor over to Jake. Inside of the application, a page loaded that appeared to be some kind of wiki. Dendro scrolled down a little further. “Here is the homepage for Earth's version of
          the library my niece used to create her school art project. As I mentioned, it's called <Text style={{ fontFamily: "gelasibro-italic" }}>Turtle Graphics</Text>—it's a Python art library.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Turtle</Text> is a <Text style={{ fontFamily: "gelasibro-italic" }}>built-in</Text> Python library that enables us to create art with code. This wiki page we're looking at here is what
          coder's call <Text style={{ fontFamily: "gelasibro-italic" }}>documentation</Text>. <GlossaryWord lookup_string="Documentation" word="Documentation" toggleGlossary={this.props.toggleGlossary} /> is essentially an instruction manual that the
          creator of a library publishes to the internet to show other coders how to use their code properly.”{"\n"}
          {"\n"}“That seems useful. Instructions for a library make sense. But does this <Text style={{ fontFamily: "gelasibro-italic" }}>documentation</Text> show you how to <Text style={{ fontFamily: "gelasibro-italic" }}>actually</Text> create art
          with this library?” Jake asked.{"\n"}
          {"\n"}“Yes, that is what the documentation is for. It walks you through how you can accomplish those things with the code it provides you. We don’t have time to read through this{" "}
          <GlossaryWord lookup_string="Documentation" word="documentation" toggleGlossary={this.props.toggleGlossary} /> right now, but you would see in the documentation it showing us somewhere in the beginning of the instructions to use something
          called an{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
            <GlossaryWord lookup_string="Importstatement" word="import" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text> statement. Jake looked away to think for a moment, then his eyes went back to the screen.{"\n"}
          {"\n"}“In Python, when we want to use a library, a module, in our program, we must use an{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>import
          </Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text> statement. In this case with <Text style={{ fontFamily: "gelasibro-italic" }}>Turtle</Text>, if we want to employ it in our code, we’d place{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>import<Text style={{ fontFamily: "gelasibro-italic" }}></Text> Turtle
          </Text>{" "}
          at the top of our Python file. This grants us the ability to use the <Text style={{ fontFamily: "gelasibro-italic" }}>Turtle library</Text> in our code. We'd have to learn a more advanced lesson, known as{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>An Introduction to Object Oriented Programming</Text> to really push this understanding further. You may get the opportunity to learn more about this in Morocco, but for now, think of the{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>Turtle</Text> in the statement{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>import<Text style={{ fontFamily: "gelasibro-italic" }}></Text> Turtle
          </Text>{" "}
          as a box that has a bunch of tools inside of it. And those tools are made out of code. In the case of Turtle Graphics, one of those tools we can call upon might be the ability to create a canvas, and another tool might enable us to draw a
          line, etcetera,” Dendro said. “The library provides the building blocks, and we coders use those building blocks to create something awesome.”{"\n"}
          {"\n"}“That's pretty incredible.” Jake asked, “But why do you call all of this stuff an <Text style={{ fontFamily: "gelasibro-italic" }}>ecosystem?</Text> We learned about rainforest ecosystems in sixth grade.”{"\n"}
          {"\n"}Dendro adjusted something on the ship’s throttle. “Insightful question, son. Because the open-source software ecosystem is like an ecosystem you find in nature, like a rainforest. There are thousands of creatures—coders—interacting
          with each other for each other's benefit. Coders from all over our worlds create these sharable and downloadable modules of code. And not only do they share code, they actually continue to help each other improve that code together. Each
          library can have thousands upon thousands of other people making updates to it, making it better over time. Again, all of this work is usually done completely for free,” Dendro said.{"\n"}
          {"\n"}“That’s something,” Jake declared.{"\n"}
          {"\n"}Dendro cleared his throat. “Python is known for its extraordinary ecosystem. It has libraries that stretch across a wide variety of industries including science, music, medicine, math, writing, you name it.”{"\n"}
          {"\n"}“What libraries do you use?” Jake asked.{"\n"}
          {"\n"}“Well, kid, I've used quite a few in my day. I’ll refer to the Earth’s version of these libraries when I speak with you. One of my favorite Python libraries is called{" "}
          <GlossaryWord lookup_string="Beautifulsoup" word="Beautiful Soup" toggleGlossary={this.props.toggleGlossary} />. It is a library I can use to help me mine data from public websites on the internet. Another fascinating library that I employ
          to work with our ship's data, which I mentioned before, is called{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Matplotlib" word="Matplotlib" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          . This library helps me create sophisticated graphs and charts with data. I've also been meaning to learn{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Tensorflow" word="Tensorflow" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          , which helps me with building artificial intelligence. An ocean of libraries exists in both of our worlds, one just has to explore. And it's all free,” Dendro said.{"\n"}
          {"\n"}Jake's eyebrows furrowed. He should have listened to Nassir more on their bus rides to school, but he had been too busy thinking about fantasy football. He imagined having the power to integrate these libraries into something he was
          building. He thought about using it for his speaker project.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>But how does it actually work?</Text> Ordinarily, he would be intimidated by something so complex and foreign to him, but Dendro’s belief in his ability to grasp the new concept gave him
          confidence.{"\n"}
          {"\n"}“How easily can you bring someone else's library into your own project. Like one that isn't <Text style={{ fontFamily: "gelasibro-italic" }}>built in</Text>?” Jake asked.{"\n"}
          {"\n"}“PIP,” Dendro said.{"\n"}
          {"\n"}“PIP?” Jake asked.{"\n"}
          {"\n"}“Affirmative. <GlossaryWord lookup_string="Pip" word="PIP" toggleGlossary={this.props.toggleGlossary} /> is a separate program that allows coders to easily install open-source libraries into their Python projects. In fact, it only
          takes a simple command to install a new library into your project. It's so easy to download a library, it feels like magic.” Dendro scratched his chin. “The PIP program interacts with something called the Python Package Index, also known as{" "}
          <GlossaryWord lookup_string="Pypi" word="PyPi" toggleGlossary={this.props.toggleGlossary} />, which is a Wikipedia-like platform that stores almost all of the Python open source libraries published on the internet. The PIP program is so
          heavily used amongst Python coders that it even comes included when you download Python onto your computer. Here, take a look at this.”{"\n"}
          {"\n"}Dendro pulled up the <GlossaryWord lookup_string="Terminal" word="terminal" toggleGlossary={this.props.toggleGlossary} /> window again. He typed in <Text style={{ color: "#0C2443", fontFamily: "code" }}>pip install tensorflow</Text>{" "}
          and hit enter. A bunch of messages flashed across the terminal screen, and a white loading bar slowly began to fill itself out. Then, the terminal window dropped another line and read:{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>Successfully Installed tensorflow</Text>.{"\n"}
          {"\n"}“That's it. In seven point four seconds, we brought one of the most powerful artificial intelligence libraries on Earth with potentially millions of lines of code into our project. Like magic.”{"\n"}
          {"\n"}“<Text style={{ fontFamily: "gelasibro-italic" }}>Whoa</Text>. It did that <Text style={{ fontFamily: "gelasibro-italic" }}>that</Text> fast?” Jake’s eyes opened wide.{"\n"}
          {"\n"}“Yes. Remember, code is just text. So even if we are downloading millions of lines of code that took hundreds of thousands of hours for, say, the Earth company Google to build, it only takes a few seconds to install it into our
          project,” Dendro explained.{"\n"}
          {"\n"}“Wow,” Jake said as he massaged a tightness emerging in his shoulder.{"\n"}
          {"\n"}Dendro continued, “Professional programmers, in both of our galaxies, spend a lot of time working with both simple and complex libraries. It's important to remember that as coders we have to understand the coding language as well as
          the libraries that we employ. That's why programmers spend so much time reading documentation—the instruction guides—that the creators of libraries generate for other users.”{"\n"}
          {"\n"}Dendro paused for a moment to check another monitor read out. “Another thing I should mention to you is that many of Naronia’s spiritual leaders have predicted that this open-source ecosystem of software will lead to a creative golden
          age. Some, in fact, believe it's already occurred. The access to these libraries is a key factor in creating opportunities for individual creators in both of our galaxies. We, as individual creators, can now bring so much power to our
          projects, so inexpensively, that it is now possible for individuals to create things as extraordinary as the big companies out there.  All it takes is knowledge and passion. The open-source software ecosystem is participating in evening the
          playing field of life.”{"\n"}
          {"\n"}“Wow, I hadn’t thought about it that way,” Jake said.{"\n"}
          {"\n"}“Everything will be touched by open source, coder or not, so we must all be aware of its profound essence around us.” Dendro swiveled the keyboard tray towards Jake. “Here, the terminal window is open. I want you to install your first
          library. Let's try{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Scipy" word="SciPy" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          . It enables our projects to perform many interesting tasks in the fields of mathematics and engineering. Try adding it to this project I have open.”{"\n"}
          {"\n"}“Me? Um, okay. That sounds cool,” Jake said. He studied the screen. “So, I just use that PIP command that you used before?”{"\n"}
          {"\n"}Dendro nodded.{"\n"}
          {"\n"}Jake looked at the terminal. It seemed simple enough. Dendro had just done it in front of him, and now he was tasked with connecting to a powerful ecosystem that he wasn't aware existed moments ago. He typed{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>pip install SciPy</Text> into the terminal window. Then he pressed enter. The terminal flashed with the same loading indicator and text he saw when Dendro ran the command. Then a few
          seconds later he saw the message <Text style={{ color: "#0C2443", fontFamily: "code" }}>Successfully Installed SciPy</Text>.{"\n"}
        </Text>

        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={155} source={require("./../../assets/images/lessons/lesson4_1.png")} />
        </View>
        <Caption>We use the terminal to interact with other programs on our computer, like PIP. Here, Jake used the terminal to tell PIP to download SciPy to Dendro's machine.</Caption>

        <Text style={BookStyles.bookFont}>
          {"\n"}“That is wild,” Jake said. “So, it is now in our project?”{"\n"}
          {"\n"}Dendro turned and said, “The library has been downloaded to our machine, and it is now accessible to us. But remember, to use it in our project we must{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>import
          </Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text> it.” Dendro winked. “Now that is enough software ecosystem for today.”{"\n"}
          {"\n"}Dendro gripped onto the joystick and initiated the ship’s descent. Land came into view a few moments later as they ducked underneath the clouds.{"\n"}
          {"\n"}Africa. The resolution of the coastline began to grow. Dendro pointed over the left section of the cockpit panorama. There were two large land masses separated by a thin sliver of water, the ocean on opposing sides.{"\n"}
          {"\n"}“That is the Strait of Gibraltar. A famous landmark," Dendro said. He throttled forward on the joystick. “I will take us north of the city over Spain, and into Morocco. Then I will turn the ship around, and head west towards
          Casablanca. I want to approach the city gates from the northeast, which will cloak our arrival.”{"\n"}
          {"\n"}They were soon sailing over green farmlands of southern Spain. Jake could make out the pastures and some farm animals on the ground. Soon, they crossed over the sea again and the lush green terrain began to transform into red desert.
          They sailed onward over the Moroccan sands. Dendro banked hard, turning the ship around a complete one hundred and eighty degrees. Minutes later, a large city appeared on the horizon.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Casablanca</Text>, Jake thought. A bizarre feeling ran through his mind. <Text style={{ fontFamily: "gelasibro-italic" }}>Are we really in Africa?</Text> He watched as Dendro descended. Soon
          they approached a red desert and then skimmed the surface of the sand.{"\n"}
          {"\n"}“I’m going to bring her down right here,” Dendro said as he pointed to a flat patch of desert in front of them. The ship then gently collided with the sand and they sharply bounced up and down as huge pockets of debris exploded into
          the air. The ship slid along the sandy runway, and finally came to a stop under the desert sky.{"\n"}
          {"\n"}"Where are we? Jake asked. The sun was already nearing the horizon. To his right he saw the outline of a small town.{"\n"}
          {"\n"}"Just outside Ain Harrouda, a small village a few miles north of Casablanca. We can walk from here,” Dendro said. “Zimmer has set up a secure location for us in the Old Quarter of the city. We can rest tonight, then I will get help
          for my shoulder tomorrow and figure out how to get us home. Grab your weapon and tuck it under your robe.”{"\n"}
          {"\n"}They hopped off the ship onto the soft and shallow desert soil. As they trekked for half a mile, the axe felt surprisingly comfortable inside of Jake’s robe.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This robe has more to it than meets the eye</Text>, Jake thought. As they approached the outskirts of the small city, Dendro slung his hood over his head.{"\n"}
          {"\n"}The village was quiet. Jake spotted a few locals going about their business, food truck vendors closing up their food carts, and a group of men tugging a line of farm animals down a side road. Tonight, they approached Casablanca from
          the northeast. As they moved towards the metropolis, the cityscape came into view. Different middle eastern architectures and low-rise apartment buildings spread out across the horizon.{"\n"}
          {"\n"}They walked on for some time until they passed a sign on the road which read: <Text style={{ fontFamily: "gelasibro-italic" }}>Welcome to Casablanca</Text>.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I guess we’ve officially arrived</Text>, Jake thought. They continued walking through quiet city streets towards the Old Quarter.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I’m in an exotic African city,</Text> Jake thought. They bobbed and weaved through a series of narrow avenues until Dendro turned onto a road named{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Boulevard de Tangier</Text>. The locals turned their heads to examine the boy dressed in a long grey robe and the peculiar, hooded figure but quickly continued on with their business.{"\n"}
          {"\n"}They entered the Old Quarter. Antiquated apartment complexes lined each side of the road. Evening was setting in, but Jake could see laundry hanging out of many of the windows. Jake looked across the street as a man in a turban pulled
          a camel in his wake. <Text style={{ fontFamily: "gelasibro-italic" }}>Yeah, this isn't Wisconsin</Text>. They approached an old two-story apartment building. The sign 618 Tangiers sat in front of it. Dendro pulled open the old wooden doors
          and walked inside. They stopped in front of apartment 6C. A small silver plate sat just above the peephole. The plate was separated into thirds, and in the center of each section lay an engraved alien character that was raised slightly
          above the plate's surface. <Text style={{ fontFamily: "gelasibro-italic" }}>What is that strange looking creature?</Text> Dendro's wrist made a beep and the door popped open.{"\n"}
          {"\n"}Soft bronze light poured out of the ceiling and illuminated the space in front of them. The walls and floors of the foyer were almost entirely covered in rusty steel panels. Most of the apartment was covered by these panels—the walls,
          the floor, the ceilings included—except the far end of the room, which appeared to be a bedroom with a wooden floor. A bed lay there, and beyond it, sat a large hexagonal window with metal shutters that were partially shut.{"\n"}
          {"\n"}Near the bed was a small night table with a small silver cylinder on it and a dark sphere hovering in midair above it. Jake freaked at how it was levitating on its own with no support. He walked up to it. A faint red light emitted
          from its surface, illuminating a map of Earth. It was some kind of globe. <Text style={{ fontFamily: "gelasibro-italic" }}>That is interesting</Text>.{"\n"}
          {"\n"}A desktop computer sat on the metal desk in the middle of the room. Above it was an aluminum bookshelf. Jake noticed an elephant-shaped incense holder on the desk. There was ash still inside of it.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Someone has been here recently</Text>, he thought.{"\n"}
          {"\n"}Overall, the apartment gave the impression that it was some kind of futuristic, somewhat cozy, military bunker. Jake walked down the side hall and saw a bathroom and another small bedroom. Then he heard Dendro call out, “Take the room
          in the back. I need to rest. We will reconvene in the morning. I know you have questions.” His voice sounded grated and lethargic.{"\n"}
          {"\n"}"Alright,” Jake shouted from down the hall. The adventure, and the adrenaline, had thrown off his clock, but he realized he had not slept properly in quite a while. He opened up the door to his room. A copper lamp sat on a wooden desk
          in front of the bed.  On the ceiling was a star map, outlining an unfamiliar solar system with measurement units he had never seen before. A large window sat on the back wall and its blinds were drawn shut. Jake peeped through it and saw he
          was facing an alley. He spotted a few garbage bins, and out of the corner of his eye he saw a small animal run past.{"\n"}
          {"\n"}He took off his clothing, placing his axe upright in the front right corner of the room, and his chain on the desk, then collapsed into the bed. A few intense shivers ran through him.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Am I seriously in an alien apartment in Morocco?</Text> Jake thought. The rush of sleep soon overcame his racing thoughts and he entered a long, nourishing dreamless slumber before he had
          even brought the covers up to his shoulders.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>. . .</Text>
          {"\n"}
          {"\n"}As he awoke to sunlight pouring through the blinds, he smelled a pungent coffee aroma. Jake brushed his teeth quickly with an unopened toothbrush he found on the counter. Then he walked down the short hallway back into the main room.
          The bed in the living room was made, but there was no sign of Dendro.{"\n"}
          {"\n"}The kitchen lights were on, and a large, shiny metal machine was making a lot of noise on the countertop. The device’s copper knobs and dials spun on their own–as if they were on some kind of timer.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck?</Text> He walked up to it and caught sight of the tubes branching off from the back of the assembly-one of them was solid gold. They ran across the kitchen wall, into the
          foyer, and up into the ceiling. <Text style={{ fontFamily: "gelasibro-italic" }}>What on earth? And what the heck is this gold tube?</Text> One of the beakers on the machine’s top made a bubbling noise. The other two were fogged up a
          blue-ish-green vapor swirling in a unique spiral pattern.{"\n"}
          {"\n"}As Jake examined the beakers more closely, he noticed a yellow post-it taped to the kitchen wall.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <Text style={{ textAlign: "center" }}>Jake, I am running a few errands, back later. Do not stray too far. – Dendro</Text>
          </Text>
          {"\n"}
          {"\n"}Jake wasn’t sure what to do, but the smell coming from the machine was too strong to resist. He poured himself a cup of the liquid from the bubbling beaker. Was this <Text style={{ fontFamily: "gelasibro-italic" }}>Kahve</Text>? He
          had never smelled anything so delicious. Cinnamon, and some other exotic smells fused themselves into his brain. He closed his eyes and raised the cup to his face. Then he briefly looked inside: a black universe of cinnamon, oleander and
          caffeine swirled beneath him like the constituents of a foreign galaxy. He sipped, feeling the warm liquid slowly roll down his tongue.{"\n"}
          {"\n"}"Whoa!" he moaned out loud. He felt a powerful jolt of positivity run through him. This was not a sensation he was familiar with and now he had the urge to get outside and explore.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What else is there to do?</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>And I’m starving.</Text> He headed out of the apartment, taking notice of the insignia embroidered plate
          above the peephole.{"\n"}
          {"\n"}It was warm when he stepped onto the Moroccan street. A group of businessmen in crisp black suits passed by him, paying him no attention. When he looked right, down the block, he spotted a row of food carts parked next to each other.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Wonder what they got over there?</Text> He headed down Tangiers, and as he approached a cart with a rug for an awning, he could see trays of jam-filled glass jars spread out all over the
          counter. The elderly woman behind the trays smiled, exposing a large gap in her teeth. Her skin was wrinkled and tan as if she had spent most of her life in the desert sun. She stuck out a small wooden tasting spoon and waved her hands
          encouragingly. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Jake accepted the spoon and examined the trays<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> He tried to read the labels on the jars, but the names were
          written in Arabic and French.{"\n"}
          {"\n"}He chose a jar with dark red mixture, scooped some up, and put a bit on his tongue. It had an intense sweet strawberry flavor. <Text style={{ fontFamily: "gelasibro-italic" }}>This would go nicely on a bagel</Text>.{"\n"}
          {"\n"}He was even hungrier now. He walked over two carts and watched as a man flipped a set of lamb skewers over a patch of burning charcoal. His stomach rumbled violently at the smell of the meat and spices.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Wait.</Text> He reached into his back jean pocket, there were two American single dollar bills crumpled up, the remains of yesterday’s lunch money.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Thank goodness</Text>. He held them up and offered them to the man, who grinned and placed two skewers in a napkin. He handed them over to Jake. “Thank you, sir,” Jake said as he handed the
          man the cash.{"\n"}
          {"\n"}He continued walking as he slid the succulent cubes of meat into his mouth. <Text style={{ fontFamily: "gelasibro-italic" }}>This is ridiculously good.</Text> He wiped some food off his chin and made his way towards a boardwalk area
          ahead. As he walked up the street, he passed a few more street vendors frying some type of fish that had been doused in flour and other spices.{"\n"}
          {"\n"}He reached the wide boulevard that ran up against the Casablanca coastline. Palm trees, waves, and city goers flooded his vision. He could see about a mile off in the distance, a large, impressive, church structure sitting directly up
          against the ocean. <Text style={{ fontFamily: "gelasibro-italic" }}>What is that?</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>I must check that place out</Text>.{"\n"}
          {"\n"}The white capped waves crashed into the rocks lining the coast. <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder what it’s like to live here</Text>. He looked up as he passed by a few buildings covered in abstract street art.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Is that a camel made out of cubes?</Text> The palm trees planted in the street divider almost gave the boardwalk a California vibe. The Arabic lettering scattered across the scenery reminded
          him he was not in America. Ten minutes later, he approached the church-like structure by the sea which sat inside a large granite plaza packed with tourists. He walked on and approached the entrance gates, stopping in front of a sign that
          read:{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <Text style={{ textAlign: "center" }}>
              The Hassan II Mosque is the largest functioning mosque in Africa and is the 7th largest in the world. Its minaret rises 210 meters into the sky. Completed in 1993, it was designed by Michel Pinseau under the guidance of King Hassan II.
            </Text>
          </Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Cool</Text>. Jake walked inside. The six-hundred-foot-tall minaret and the mosque’s positioning against the coastline made it appear like an exotic, holy lighthouse. He walked through the
          plaza and around the building until he could better see the side that faced the ocean. He peered up to examine the beautifully ornamented facade.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How can human beings be capable of so much talent–engineering, science, medicine and art!</Text>
          {"\n"}
          {"\n"}Suddenly, he felt the heat of someone’s stare. He looked over his shoulder and caught sight of the two piercing, purplish-blue eyes of a tall, slender female wearing a thick purple headband and tight leather pants. She locked on to
          him for a few seconds. <Text style={{ fontFamily: "gelasibro-italic" }}>Why is that woman staring at me?</Text> Her gaze broke off a few seconds later, and she walked back into the crowd.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What was that about?</Text> He stood on his tippy toes, attempting to spot the woman once more.{"\n"}
          {"\n"}He walked around the plaza for a few minutes, examining the people, the titanium, bronze, and granite finishes on the building, and the coast until he got bored. He crossed the large boulevard by the sea and headed down a street named
          Rue Al Araar. He walked a bit further on, and just beyond another row of food wagons, he spotted a sign for what appeared to be an internet cafe. “Cafe Internet” it read in purple script lettering.{"\n"}
          {"\n"}Inside, there were a few locals crowded together around a few of the computer stations. Most of them had controllers in their hands. "Ya laenatan, min 'ayn 'ataa, ya laenatan , min 'ayn 'ataa!" A gamer screamed loudly at the large
          monitor in front of him. Jake took a few steps forward. They appeared to be playing <Text style={{ fontFamily: "gelasibro-italic" }}>Call of Duty–Special Ops</Text>.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Same everywhere,</Text> he thought with a smile.{"\n"}
          {"\n"}He walked down the aisle and managed to find a desk with an old Sega console. <Text style={{ fontFamily: "gelasibro-italic" }}>This is cool! I’ve never seen one before</Text>. He looked up the aisle and saw that the shopkeeper was
          distracted by the other gamers. <Text style={{ fontFamily: "gelasibro-italic" }}>I’m not sitting in that apartment all day</Text>. He powered up the archaic machine and a vintage Sonic The Hedgehog game loaded up on the display. He sat down
          in the cushioned chair and began pounding down on the controller, ignoring everything around him; his mind needed a distraction.{"\n"}
          {"\n"}It was almost 4 p.m. when he finally put down the controller. He slid the last money he had on him, two quarters, into the tip jar and walked back outside. The shop owner was berating a kid in the back corner after he apparently
          spilled his drink on one of the keyboards.{"\n"}
          {"\n"}Jake found his way back to Tangiers, and soon was knocking on the door of apartment 6C.{"\n"}
          {"\n"}“Where have you been?” Dendro asked. “I was beginning to get concerned. You should have left me a note.”{"\n"}
          {"\n"}“Sorry,” Jake said. “I was checking out the city.”{"\n"}
          {"\n"}"Next time, leave a note,” Dendro said sternly. “I got you some food. It’s on the table. Eat up.” Jake noticed something bulging out of Dendro’s robe near his injured shoulder.{"\n"}
          {"\n"}“What is that?” Jake asked.{"\n"}
          {"\n"}“Got stitched up. Zimmer referred me to a trusted medic,” he said. “Should be nearly fully healed up in a few days. Thank goodness for Naronian medicine.” He walked over to the armchair next to the bed and sat down. He opened a
          tattered book that he had picked up from the night table:{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Thephilosophicaltenets" word="The Philosophical Tenets of The Ld'Shab" toggleGlossary={this.props.toggleGlossary} />
          </Text>{" "}
          was written in gold across its front cover
          <Text style={{ fontFamily: "gelasibro-italic" }}>.</Text>
          {"\n"}
          {"\n"}A plate of what looked like lamb stew was steaming on the table. <Text style={{ fontFamily: "gelasibro-italic" }}>That looks legit</Text>. Jake sat down and began to shovel it into his mouth. As he gobbled up the meat, Dendro flipped
          through the pages of the ancient spiritual book. <Text style={{ fontFamily: "gelasibro-italic" }}>That guy. A teacher, a learner, and a fighter</Text>. <Text style={{ fontFamily: "gelasibro-italic" }}>What a galaxy.</Text> He thought of a
          few of the superhuman backflips and his moves with the golden axe. Dendro had certainly been brave on this journey, demonstrating extraordinary composure in the heat of battle, but he had also made some questionable strategy decisions.
          Either way, Jake couldn’t help but think that he might miss the Naronian warrior when he got back home.{"\n"}
          {"\n"}A few minutes later Jake dropped his spoon in the bowl indicating his spicy feast was complete. Dendro looked up and said in a rough voice, "Now get ready, we are meeting Zimmer tonight."
        </Text>
      </View>
    );
  }
}
