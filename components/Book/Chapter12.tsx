import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";
import GlossaryWord from "../Glossary/inline/GlossaryWord";

const StoryGraphic = styled.Image`
  width: 360px;
  height: ${(props) => (props.height ? props.height : 200)};
  border-radius: 20px;
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

export default class Chapter12 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 12</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://cdnb.artstation.com/p/assets/images/images/022/325/655/large/laura-guedes-dojo-sketch.jpg?1574987125`,
            }}
          />
        </View>

        {
          // Section 1 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          A crimson-eyed demon seized Jake's legs in the middle of a rainstorm. He was shackled to a metal floor, and he felt himself sliding. Then a pair of panther-like claws seized his arms. He slowly opened his eyes. His optical nerves turned
          back on, ready to process information from the outside, as Dendro's powerful hands shook him.{"\n"}
          {"\n"}"Wake up, kid," the Gobrahim warrior said. "We have a big day ahead of us. It is your first training day."{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Are you serious?</Text> Jake rolled over to look at the cyberpunk clock. It was 5:01 a.m. "Get off of me, bro," Jake complained as he shut his eyes again, but he continued to feel Dendro’s
          hand shaking him. He opened his eyes again. "What is going on?" Jake muttered as he flipped over and stuffed the side of his head back into the pillow.{"\n"}
          {"\n"}"As Zimmer and I discussed, it is essential we test your fighting abilities. It is for your own good,” Dendro said. “Now get up, get dressed. B'sarra is on the table. Some eggs are still in the pan."{"\n"}
          {"\n"}His sleepy mind was tempted to snap back at him.  "Alright, I'll be up in a minute," Jake mumbled into the pillow.{"\n"}
          {"\n"}He heard Dendro leave the room.{"\n"}
          {"\n"}Jake kept his eyes half-open, staring at the clock, with the covers pulled tight over him. He slowly forced himself out of his comfortable cocoon. He could hear Dendro opening drawers and closing cupboards down the hall.{"\n"}
          {"\n"}He got dressed in warm sweatpants and a white t-shirt that he found in the dresser. Zimmer certainly had done a nice job keeping this place stocked with clothing and supplies. Jake still had no idea how Zimmer knew his clothing size.
          He threw on his silver chain and exited his room.{"\n"}
          {"\n"}"Where are we going?” Jake said, still only half-awake, as he fumbled into the main section of the apartment.{"\n"}
          {"\n"}"We will head for the dojo. Your questions will be answered soon. Drink the B'sarra. It is good for the soul, even better for training," Dendro said. He wore dark sweatpants, dark sneakers, a thick black sweatshirt, and his baseball
          cap–he looked nearly human.{"\n"}
          {"\n"}Jake took down the Moroccan soup and followed the warrior out the door. The streets of Casablanca were quiet as the sun’s corona crept over the horizon. They walked south, bobbing and weaving through a series of narrow streets until
          they arrived at a larger street named <Text style={{ fontFamily: "gelasibro-italic" }}>Rue Attabari</Text>. A few street cart vendors were setting up their stands and a couple of motorbikes passed by them.{"\n"}
          {"\n"}“So, I am training today? What does that consist of?” Jake said groggily.{"\n"}
          {"\n"}“You will learn as we do in the Forces,” Dendro said.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Whatever that means.</Text> His mind began to wake up as they continued to walk down the Casablanca streets, passing by clothing stores, coffee shops, boulangeries and shawarma rotisseries.
          {"\n"}
          {"\n"}A bit further down Rue Attabari, sitting against a barbed wire fence, was a dilapidated hut constructed of broken aluminum panels. A middle-aged woman lay on the ground, the white hijab on her head rested against the makeshift
          shelter. Two small children, a girl, and a boy, lay in her arms. Jake could see a look of desperation in her eyes. He felt a pit in his stomach. How could a mother care for her children in these conditions?{"\n"}
          {"\n"}Jake saw other less fortunate individuals laying down on the ground in dilapidated sleeping bags. If he had been born in another place, if his parents had fallen on hard times, could this have been him?{"\n"}
          {"\n"}As they walked past the white hijab wearing woman, Dendro spoke, “We must not forget the suffering. They are ultimately for whom we fight<Text style={{ fontFamily: "gelasibro-italic" }}>.”</Text> He stroked the silver orb hanging from
          his neck. “There is great suffering in both of our worlds. We must become instigators of the light.”{"\n"}
          {"\n"}“Instigators of the light?” Jake asked.{"\n"}
          {"\n"}“Instigators of the light. We must put the needs of the world, and those who are in need, ahead of the needs of ourselves.” Dendro turned towards him. “But to put the needs of others effortlessly in the front of our minds, we must
          discover our passion.”{"\n"}
          {"\n"}“Our passion?” Jake asked.{"\n"}
          {"\n"}“Affirmative. Passion leads us towards our purpose,” Dendro responded.{"\n"}
          {"\n"}“But what is passion?” Jake asked.{"\n"}
          {"\n"}“It is when we find something bigger than ourselves to help create. It's something we never cease doing once we find it. It lives in the center of our hearts. It's when joy, creativity, love, and selflessness open up in our richest
          self. Passion has the power to elevate our minds, and emotions, to heights only a few of us get to experience<Text style={{ fontFamily: "gelasibro-italic" }}>,”</Text> Dendro said.{"\n"}
          {"\n"}“But what exactly is passion? You're still not telling me what it is,” Jake said.{"\n"}
          {"\n"}“It can be anything we wish to pursue to better our world,” Dendro responded. “Passion can help us overcome life's challenges because once we find it—we’ll fight through anything to pursue it.”{"\n"}
          {"\n"}“But how do I find my passion?” Jake asked.{"\n"}
          {"\n"}“Good question.” They continued walking down the concrete boulevard. “Some say fate presents it to us when we least expect it. Others say it lives inside of us and we just have to dig deep to find it.”{"\n"}
          {"\n"}“What do you mean by that?” Jake asked. “Why does everything have to be difficult, why do we always need to dig?”{"\n"}
          {"\n"}“Life is about digging. We must push ourselves every day to try new things. To discover a place, in our minds, where our heart's desire and creative drive become in sync. We must make time for this each day, no matter our age, or
          position in life,” Dendro said.{"\n"}
          {"\n"}They walked along the cracked sidewalk in silence for a few moments.{"\n"}
          {"\n"}“So, you're saying we should always be learning new things, like coding?” Jake asked.{"\n"}
          {"\n"}“Not just coding. But yes. Learning new things is key to discovering our passion. Whether it be pushing ourselves to learn how to draw, write music, code, or build robots, learning new things is what we Naronians feel to be the core
          objective of life. And when we get closer to discovering our passion, we begin to learn things faster, much faster, because our minds begin to take on a new shape. It's the alignment of our purpose, and learning, that we Naronians believe
          is the true essence of the Utma. This phenomenon, as I have mentioned, is referred to as La’Tishvah. Learning with Purpose,” Dendro said.{"\n"}
          {"\n"}“We didn’t learn this in school. I guess it would be cool to find something to learn that you cared that much about.” Flashes of his father and grandfather ran through his mind. How did they discover their path so early in life? How
          on Earth did his father know he wanted to pursue law? How did his grandfather know he was so good at physics? “But can we all really find it?” Jake asked.{"\n"}
          {"\n"}“Yes. We are all beings of the light. We can all find it. And you will find it son.” Dendro tweaked the position of his cap. “But there is one very tricky part about discovering our passion,” Dendro said. “We must recognize
          something.”{"\n"}
          {"\n"}“Like what?” Jake asked.{"\n"}
          {"\n"}“Passion isn't everything. There is still one more thing we need to bring to the table to make everything really click,” Dendro said.{"\n"}
          {"\n"}“I thought passion is what we care about most. What else do we need?” Jake asked. “What is bigger than passion?”{"\n"}
          {"\n"}Dendro looked back at him. “Logic. The logic to understand why our passions exist in the first place. We must understand the source. And to understand the source, we must understand the problems we want to solve.” They turned left
          onto Rue Socrate.{"\n"}
          {"\n"}“The overwhelming force of passion can sometimes meddle with our clarity to distinguish the problems we want to solve from the solutions we wish to create.”{"\n"}
          {"\n"}Jake pondered Dendro’s statement for a moment. “What do you mean by that?”{"\n"}
          {"\n"}“There are a few famous examples to portray this understanding. But one has always stuck in my head.” A street vendor pushed his spice cart in between them. “Are you familiar with the American inventor Henry Ford?”{"\n"}
          {"\n"}“Of course. He invented the car. Or the assembly line, right?” Jake asked.{"\n"}
          {"\n"}“Affirmative. When Mr. Ford first developed his passion for moving humans around–many people at the time would have said that his focus should have been on improving the horse driven carriage. Some may have even thought him crazy to
          pursue a mechanized vehicle. But Henry Ford had the unique ability to separate problem from solution. He recognized that the world’s problem was not the horse driven carriage–it was the fact human beings could not get around efficiently. By
          placing our problem and our solution into two distinct spaces in our minds<Text style={{ fontFamily: "gelasibro-italic" }}>,</Text> we can achieve great things.”{"\n"}
          {"\n"}“So, people don't focus on separating problems from solutions?” Jake asked.{"\n"}
          {"\n"}“No, unfortunately, they do not. Many wonderful minds end up spending their entire lives trying to redesign a horse-driven carriage and miss the potential to create something groundbreaking for society. This happens because when we
          get passionate about an issue, our emotions have the tendency to excite us so much that we skip critical steps, like separating problem from solution. We must relish in our positive emotions, and passions, but we must always push ourselves
          to have the discipline, to understand the problem that stemmed our passion before we think about ways to solve it.{"\n"}
          {"\n"}“Henry Ford and many other great inventors from both of our worlds have possessed this problem-solution separation discipline. It's often just a subtle change in thinking, but in the early stages of creating something, the first few
          steps matter more than anything else,” Dendro said.{"\n"}
          {"\n"}“I guess that makes sense. But I've never thought about it so critically before,” Jake said.{"\n"}
          {"\n"}“We need great teachers to become aware of these things. A great educator of mine once said,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>When building anything meaningful, steps zero to three matter much more than steps three to sixty.</Text> Once we forget to perform these first few steps of distilling our problem from our
          solution, everything else loses its grace."{"\n"}
          {"\n"}“Interesting,” Jake said. He had never thought about things this way.{"\n"}
          {"\n"}Dendro turned onto a narrow side street named <Text style={{ fontFamily: "gelasibro-italic" }}>Rue de La Paix</Text>. The front of the block was crowded with art dealers selling crafts and paintings. They walked around them and
          approached a storefront with a red awning. <Text style={{ fontFamily: "gelasibro-italic" }}>Tropicana Hookah Lounge,</Text> the sign read.  Dendro knocked on the glass window. Soon Jake saw Zena approach from inside.{"\n"}
          {"\n"}“There you are,” she said as she swung open the door.{"\n"}
          {"\n"}She took them into a room illuminated by a faint light. Hookahs of varying colors sat on top of wooden tables. She walked to the space’s rear, pulled open an unmarked door, and headed down a long flight of steps. Dendro and Jake
          followed.{"\n"}
          {"\n"}They reached the floor and stepped into a vast underground space. Immediately, it reminded Jake of the ninja movies he had watched when he was younger. A giant fighting mat sat in the left side of the room. Wooden pillars surrounded
          it, forming a rectangular perimeter. Large alien glyphs sat at various points on the walls and Japanese style light fixtures hung from the ceilings. Then he noticed small blue orbs hovering above the fighting surface.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the..</Text>.? He rechecked his vision, but he confirmed that a set of faintly glowing blue orbs were hovering a few feet above the ground.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>It’s never normal in this world, is it?</Text> Jake thought.{"\n"}
          {"\n"}A couch and a wooden coffee table sat directly in front of them, and on the far side of the room was a desk. Zimmer sat in a leather chair behind it, glaring at a monitor. He was wearing a brown military hoodie. His wolfish face
          looked up a few moments later. "Have a seat. I'll be with you in a moment," he said.{"\n"}
          {"\n"}Dendro and Jake sat down. Zena walked over to the dojo mat, dropped to the floor, and stretched out her legs.{"\n"}
          {"\n"}Zimmer then sat down across from them. "First, I want to say I know this has been a rough ride, kid. Dendro and I are doing everything we can to expedite your journey home. But to do that, we need to understand what events took place
          after the ambush. Dendro has still not been able to contact his men, so we must continue to remain patient. A few contacts here may be able to help, but that still may be a few days away. I am hoping then we will receive some positive news,
          and Dendro will obtain the permission to bring you home.” He took a swig from his coffee thermos.{"\n"}
          {"\n"}Jake stared blankly at the floor. <Text style={{ fontFamily: "gelasibro-italic" }}>Is there always going to be something in the way? Contacts that may be able to help?</Text> When would he get home? He had to focus back on the dojo
          scenery in order to stop the pain of thinking about the state of his mom and brother. Dendro leaned forward. “Yes, son. I pray that news will reach us that will allow us to get you back to your family.” He paused for a moment. “We are
          dealing with a complex war which I fear is being fought on two fronts,” he said. He turned to Zimmer. “<Text style={{ fontFamily: "gelasibro-italic" }}>Now</Text> I see clearly that Vostluka will push hard to take advantage of this momentum
          shift. But I worry that we are being manipulated by another, far more nefarious scheme.” He paused and rubbed his chin, deep in thought.{"\n"}
          {"\n"}"Who is Vostluka?" Jake asked.{"\n"}
          {"\n"}"Jetubro Vostluka, the man that inherited the Venthum throne. The Vostluka line has maintained totalitarian rule over planet Venthe for over a millennium,” Dendro uttered. “They have suppressed their people with their ruthless
          ideology that his father, Doglav Vostluka, and his father before him, helped create. It is called <Text style={{ fontFamily: "gelasibro-italic" }}>The New Doctrine</Text>: only a small portion shall thrive, the rest must live mentally
          captive. The New Doctrine preaches that learning and prosperity cannot be spread out or democratized. The Vostlukas torture <GlossaryWord lookup_string="Venthum" word="Venthum" toggleGlossary={this.props.toggleGlossary} /> citizens who have
          managed to rebel."{"\n"}
          {"\n"}"What do you mean... <Text style={{ fontFamily: "gelasibro-italic" }}>mentally captive</Text>?" Jake asked.{"\n"}
          {"\n"}"The air on Venthe is medicated. The people breathe in an altered atmosphere infused with a chemistry designed to suppress their drive and curiosity,” Dendro replied.{"\n"}
          {"\n"}"Are you kidding me?" Jake asked.{"\n"}
          {"\n"}"No. Nothing can grow naturally on the planet any longer due to the tampering of their atmosphere," Dendro said. “Our satellite reconnaissance has shown this to be true,” Dendro said.{"\n"}
          {"\n"}Jake began to speak, but Zimmer butted in, “What do you mean by a more nefarious scheme?”{"\n"}
          {"\n"}“I do not know. My gut has warned me of this for a long time. I believe they are after a deeper understanding of the <Text style={{ fontFamily: "gelasibro-italic" }}>Utma</Text>—our understanding of the{" "}
          <GlossaryWord lookup_string="Theutma" word="Utma" toggleGlossary={this.props.toggleGlossary} />, understandings our great spiritual leaders and scientists have obtained and cultivated over thousands of years of painstaking effort. This is
          one area their culture could never excel. But I do not know how it will be done.”{"\n"}
          {"\n"}Zimmer put his hands through his thick hair. “That is certainly possible. But what evidence is there of such a ploy?{"\n"}
          {"\n"}"None, but today, it matters not. The only thing we can do now is regroup," Dendro responded. “That is why I must get back to my men.”{"\n"}
          {"\n"}They sat there for a moment without speaking. Each one of them appeared to be lost in thought.{"\n"}
          {"\n"}“How can I possibly help?” Jake asked. “I can’t really fight.”{"\n"}
          {"\n"}Dendro clenched his jaw. “This is not your fight, kid. But, you have already been an essential companion on this journey. Now, enough talk of enemies and war,” Dendro said. “These battles will be fought in due time. Today we are here
          to give you the opportunity to train, Earthling. You demonstrated{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Foresight" word="Foresight" toggleGlossary={this.props.toggleGlossary} />
          </Text>{" "}
          with no training. That is not something any of us can easily ignore. It has sparked a deep intrigue in Zimmer, Zena, and I, and I’m sure it would in our spiritual leaders. We are encouraging you to take your learnings a bit further today by
          stepping onto this mat. Are you up for that, son?”{"\n"}
          {"\n"}"I guess so," Jake replied, concerned about the implications of this decision.{"\n"}
          {"\n"}"Good,” Dendro said. “We have together agreed that, as translated into your common tongue, <Text style={{ fontFamily: "gelasibro-italic" }}>The Function</Text> will be the benefit lesson Zena will train you on today. It is an
          essential teaching in our Holy Curricula. And to do that in a formal setting, the dojo, is something we are all eager to witness. “We’ve left your training attire in the fitting room over there. Please change and then meet us on the mat.”
          {"\n"}
          {"\n"}Jake headed into the fitting room. <Text style={{ fontFamily: "gelasibro-italic" }}>Am I really doing this?</Text> He looked at his reflection in the mirror as he changed into the white training robe. He was tanner then he realized.
          He tied the white belt tightly around his waist. <Text style={{ fontFamily: "gelasibro-italic" }}>What am I about to do?</Text> He walked out of the room and approached the mat, the cold silver orb pressing up against his bare skin. Zena
          stood before him, and behind her, he noticed that the shelves on the back wall carried an assortment of weapons he couldn't quite make out. Zimmer and Dendro stood off to the side, watching.{"\n"}
          {"\n"}“Looking sharp,” Zena said. She was dressed in tight leather pants, white boots, and a black dri-fit long-sleeved t-shirt. “I am glad to see you’ve accepted the challenge of training with us today. Now, the benefit lesson I will begin
          shortly is known as <Text style={{ fontFamily: "gelasibro-italic" }}>the Function</Text>. Zena flipped backward once on the mat, landed, stood up straight, and then began stretching out her arms. “If this lesson is successfully completed in
          the eyes of the Utma, she will grant you the metaphysical power of <Text style={{ fontFamily: "gelasibro-italic" }}>the Accelerated Parry</Text>.”{"\n"}
          {"\n"}“<Text style={{ fontFamily: "gelasibro-italic" }}>The Accelerated Parry?</Text>” Jake asked.{"\n"}
          {"\n"}“Yes. <Text style={{ fontFamily: "gelasibro-italic" }}>The Accelerated Parry</Text> is an essential defensive and counter defensive measure in the Solar Forces fighting toolkit. But before we explore the moves, let's talk about what
          we do in a typical dojo training session. In a typical dojo training session, a soldier undergoes three essential things. First, we review the soldier's learning and fighting progress. Second, if a new power is to be obtained, the
          corresponding Utma Benefit Lesson will be taught by the spiritual teacher. And third, the warrior will train their newly attained military powers on the mat." Zena slapped the ground hard with her open palms. "Yes, most Utma-granted powers
          still must be trained before we can use them effectively in battle. Now, Jake, roll up your sleeve."{"\n"}
          {"\n"}Zena walked over to him and held his right forearm to the light. "This is the marking of <Text style={{ fontFamily: "gelasibro-italic" }}>Initma</Text>. And this one here is the marking of{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Zegmu</Text>. You have worked hard for these, and the Utma has rewarded you, and today, hopefully, she will reward you again. Now let's begin our lesson, and then hopefully, get some training
          time in after. And yes, today, I will take the place of your spiritual teacher."{"\n"}
          {"\n"}Zena began to walk left and right in front of him, in short paces, her hands held together behind her back. "The Function. El Funccion' in Old Naronian. La Subroutina' in Middle-Tarvezian. It's a precious tool and many Ld'Shab
          spiritual teachers believe it to be the root of all programming...but what is a <GlossaryWord lookup_string="Function" word="function" toggleGlossary={this.props.toggleGlossary} />? Well, from one angle, it's a set of instructions. A set of
          steps. A set of steps that can be stored once, and then can be triggered again and again."
          {"\n"}
          {"\n"}Zena continued, “But why do we need this capability? The capability to fire off a set of instructions that only need to be defined once. And why is it so important?{"\n"}
          {"\n"}"Well, to really understand the Function, we must first understand the Utma. The Utma believes in efficiency. She believes in efficiency because we cannot achieve our creative purpose unless we build things in an{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>efficient</Text> manner. This holds true especially when working with computers. And at the heart of being efficient when we work with computers is the importance of making instructions{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>reusable</Text>. Functions let us perform this critical task of making instructions reusable. Some spiritual leaders have even referred to the Function as{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>the Holy Reusable Root</Text> in certain spiritual texts.”{"\n"}
          {"\n"}“<GlossaryWord lookup_string="Theholyreusableroot" word="The Holy Reusable Root" toggleGlossary={this.props.toggleGlossary} />
          ?” Jake asked.{"\n"}
          {"\n"}“Yes. The <GlossaryWord lookup_string="Function" word="function" toggleGlossary={this.props.toggleGlossary} /> is so essential to life around us that she reserves her own Ld'Shab linguistics,” Zena responded.{"\n"}
          {"\n"}“Okay, but is it? What is a function actually?” Jake asked. "I get it. It's like instructions that can be repeated, but what does that mean?"{"\n"}
          {"\n"}“The best way to demonstrate the Function is not with a textbook explanation but with a real-world example. The one that comes to mind is through something that happens in the coding world every day: sending notifications to us in the
          apps we know and love, in both of our galaxies”{"\n"}
          {"\n"}“Functions have to do with the notifications I get on my apps?” Jake asked.{"\n"}
          {"\n"}“Yes. They do. Millions—no, billions—of beings receive notifications every day. And functions are critical to making this happen. Let's see how,” she replied.{"\n"}
          {"\n"}Jake's mind began to wander. This information was so foreign, but so were the aliens in the room with him. He spotted Dendro and Zimmer watching intently from the side of the mat.{"\n"}
          {"\n"}“On the apps you use, what types of <Text style={{ fontFamily: "gelasibro-italic" }}>things</Text> cause notifications to be sent to your phone?” Zena asked.{"\n"}
          {"\n"}Jake thought for a moment. Then he responded, “When I get a message. Or a like. Or an upvote. Or a new email. Stuff like that.”{"\n"}
          {"\n"}Zena shook her head in approval. “Likes, new messages, new emails, new comments are good examples of things that generate notifications. Coders spend a lot of time making sure notifications get sent efficiently. But sending a
          notification is not the simplest procedure in the world. For example, if we want notifications to display on your phone's screen properly, it requires the coder to get approval, in your planetary case, from the Android or Apple app store.
          There are other complex steps to ensure the notification gets to your phone like properly tracking, routing, and saving them long term. We need to perform all of these steps for{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>every single</Text> notification we send.”{"\n"}
          {"\n"}Zena walked to the back of the room and pulled something off the wall. As Jake watched the object float across the mat, he realized it was a whiteboard. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>He watched it float
          toward him<Text style={{ fontFamily: "gelasibro-italic" }}>. A floating whiteboard, now I’ve seen it all.</Text>
          {"\n"}
          {"\n"}Zena stepped in front of it, picked up a marker, and said, “Let's say, for teaching purposes, it takes five distinct steps to send a notification to our phones, for any notification we are set to receive.” She began to write on the
          board.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}>Step 1:</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}> Find the user’s phone number</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}>Step 2:</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}> Get permission from iOS or Android store to send the notification</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}>Step 3:</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}> Check security permissions</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}>Step 4:</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}> Send the message "You have received a new alert" to the correct user’s phone.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}>Step 5:</Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}> Log the notification (make a long-term record of it)</Text>
          {"\n"}
          {"\n"}“So here are the typical steps required when sending a notification to a user. To make this lesson crystal clear, let's imagine a coder named Angelica has just begun to build her dream social networking app. She’s thought about it for
          a while, and the project is a totally blank slate. The first thing she might do is build out the first feature in the app, say, enabling users to upload pictures to their newsfeed. Angelica writes the code to allow her users to upload
          pictures. After this is working, Angelica wants her users to be able to add comments to pictures. She spends some time working on this feature and completes it. After this comments feature is working, Angelica thinks to herself,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Hey, we need to send notifications whenever a user receives a like on their photo—this app would stink without that!</Text>”{"\n"}
          {"\n"}“So, Angelica codes in the five steps above that are necessary to send notifications. When coded out, they are long, complex steps that require many hours of study to implement, but they are necessary to bring her product to life, so
          she does it. <Text style={{ fontFamily: "gelasibro-italic" }}>Yes! My friends will now get notifications any time someone comments on their pictures. Amazing!</Text> Next, Angelica gets a few close friends to test the app out, and{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>wha-la,</Text> they receive notifications whenever someone comments on their photo. Angelica feels very proud.{"\n"}
          {"\n"}“But then one of her friends says, <Text style={{ fontFamily: "gelasibro-italic" }}>I really wish I could like photos in this app, not just comment on them</Text>.{"\n"}
          {"\n"}“Angelica thinks, <Text style={{ fontFamily: "gelasibro-italic" }}>You know she's right.</Text> So, Angelica goes on her computer to begin working on the new <Text style={{ fontFamily: "gelasibro-italic" }}>likes</Text> feature, but
          she pauses for a moment because she realizes something. <Text style={{ fontFamily: "gelasibro-italic" }}>Wait! We also need to send notifications when a user likes a picture</Text>!{"\n"}
          {"\n"}“Angelica, at this moment, like many coders before her, might assume this:{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            I have to copy and paste the identical lines of notification code (steps 1-5) I wrote for comments-on-pictures...inside of the code that manages likes-on-pictures. This way, I can successfully send notifications for both
            comments-on-pictures and likes-on-pictures!
          </Text>{" "}
          In fact, many of the earliest programmers, at least in the Nestomir, actually did this...they copied the complex code they wrote in their first feature, and pasted those steps into a new feature, which existed somewhere else in their code
          files. But things slowly got out of control for two reasons.”{"\n"}
          {"\n"}“One, programmers had to tediously copy and paste the same steps over and over again to implement the identical functionality. And two, when a programmer made changes in one place, they had to make the same changes in every single
          place they copy and pasted the initial code.”{"\n"}
          {"\n"}“Ah. That sounds tough to keep track of,” Jake said.{"\n"}
          {"\n"}“It was extremely difficult to manage. And as a result, coders like Angelica discovered that they could use <Text style={{ fontFamily: "gelasibro-italic" }}>functions</Text> to solve this problem. Angelica studied functions rigorously
          and then was able to define a set of steps once, and then trigger those instructions again, any time, from anywhere in her code. And she only has to update those instructions in <Text style={{ fontFamily: "gelasibro-italic" }}>one</Text>{" "}
          place.”{"\n"}
          {"\n"}“Wow,” Jake said. “That's pretty convenient. But isn’t that complex to implement?”{"\n"}
          {"\n"}“Nope.” Zena erased what she had drawn, then began scribbling again. In Python, we can easily define a function. To create, or as we like to call it technically, to <Text style={{ fontFamily: "gelasibro-italic" }}>define</Text> a
          function, we start by first creating a f<Text style={{ fontFamily: "gelasibro-italic" }}>unction header</Text>. We do this by writing the{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>def
          </Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text> keyword. Next, we give a unique name to the function; it can be just about any name we choose. Then we place a set of parentheses ( ) and a colon{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>:</Text> at the end of the <Text style={{ fontFamily: "gelasibro-italic" }}>function name</Text> to complete the <Text style={{ fontFamily: "gelasibro-italic" }}>function header</Text>.
          Angelica would probably have defined her notification function header like this:"
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={125} source={require("./../../assets/images/lessons/lesson7_1.png")} />
        </View>
        <Caption>Dojo Whiteboard</Caption>

        {
          // Section 2 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Here you can see we have named our function <Text style={{ color: "#0C2443", fontFamily: "code" }}>send_notification</Text>. Now, to add the instructions, the steps, of our function, we indent underneath the function header, to create the
          function's code block, or <Text style={{ fontFamily: "gelasibro-italic" }}>function body</Text>. I will write in five dummy instructions here — these steps are obviously not real code, but I'm placing them here to demonstrate where the real
          Python instructions would go. I’ve used <Text style={{ fontFamily: "gelasibro-italic" }}>Python comments</Text> to document what the intent of each step would be.”
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={170} source={require("./../../assets/images/lessons/lesson7_2.png")} />
        </View>
        <Caption>Here, five dummy instructions are sitting inside of the function send_notification.</Caption>

        {
          // Section 3 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Jake looked at the board.{"\n"}
          {"\n"}Zena went on, “We are saying to Python<Text style={{ fontFamily: "gelasibro-italic" }}>: I want to define a function called send_notification, and when this function is triggered, please run steps one through five</Text>."{"\n"}
          {"\n"}“Okay, I get that now,” Jake said. “This is the function, and these are where the steps would go.”{"\n"}
          {"\n"}She scribbled something else below, then turned to him. “Correct. And very important...to trigger, or to <Text style={{ fontFamily: "gelasibro-italic" }}>call</Text> a function, we use this syntax in Python.”
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={125} source={require("./../../assets/images/lessons/lesson7_3.png")} />
        </View>
        <Caption>We must trigger the function to run it. You WILL forget this. It happens to the best of us ;).</Caption>

        {
          // Section 4 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “As you can see, to trigger a function, or as we sometimes say, <Text style={{ fontFamily: "gelasibro-italic" }}>call</Text> a function, we use the function name, and place an open and closed parentheses next to it. This actually is when
          Python <Text style={{ fontFamily: "gelasibro-italic" }}>runs</Text> our instructions. Before, we were simply storing the instructions, so we could trigger them later.”{"\n"}
          {"\n"}“Simple enough,” Jake said.{"\n"}
          {"\n"}“Yes. But many new coders, when implementing their first functions, often forget to actually call the function after it is defined. You'd be surprised how often this happens,” Zena replied.{"\n"}
          {"\n"}“I guess I could see how you might accidentally do that,” Jake said.{"\n"}
          {"\n"}Zena nodded. “Yes, it happens to the best of us, even Angelica. But, just like that—once Angelica, and coders alike, discovered the reusable power of functions, there was no going back. They could write and maintain functions in one
          place, and use these instructions wherever they so desired, never having to rewrite them again. Functions, these atomic units of organizing instructions, are critical to everything coders do.”{"\n"}
          {"\n"}Zena pushed the board gently, and it floated slowly backward. She stretched her shoulders and triceps.{"\n"}
          {"\n"}Jake thought for a moment. <Text style={{ fontFamily: "gelasibro-italic" }}>Did Nassir know this stuff?</Text>
          {"\n"}
          {"\n"}“How are you feeling?” Zena asked as she stood up.{"\n"}
          {"\n"}“Great,” Jake said. “I want to keep learning this stuff. It’s clicking a <Text style={{ fontFamily: "gelasibro-italic" }}>bit</Text> faster.”{"\n"}
          {"\n"}“Super. The next segment of this lesson will get into more of the magic of the function. You are doing great, kid.”{"\n"}
          {"\n"}Zena began to pace back and forth again, her hands held behind her back.{"\n"}
          {"\n"}“As programming evolved, coders realized it would be <Text style={{ fontFamily: "gelasibro-italic" }}>awesome</Text> if their functions could <Text style={{ fontFamily: "gelasibro-italic" }}>absorb additional information</Text> when
          their instructions were triggered.”{"\n"}
          {"\n"}“New information?” Jake asked.{"\n"}
          {"\n"}“Yes, for example, what if Angelica wanted to tweak the message displayed on her user’s phones depending on which feature triggered the notification? Right now, she’s written these five steps of code, but the problem is, every message
          will say something generic, like “You have received a new alert. There is nothing in her steps that allow her to change or tweak anything. The instructions right now are identical for each feature that employs her send_notification
          function.”{"\n"}
          {"\n"}“Hmm,” Jake said. “So how could you even fix that? You can’t right? Or wouldn’t this thing no longer be reusable?”{"\n"}
          {"\n"}“Great question. And it's the identical question early engineers asked as they built their software. But they figured out a way. Inspired by a similar pattern in math, they introduced the concept of{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>input</Text>, which is simply information that is sent to the function, to be used by the steps inside of the function, when the function is{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>called</Text>. <GlossaryWord lookup_string="Input" word="Input" toggleGlossary={this.props.toggleGlossary} /> gives us that incredible ability to make functions both reusable, and
          customizable when we run them.”{"\n"}
          {"\n"}“Jeez. That's some intense stuff,” Jake said as tightened the belt of his robe.{"\n"}
          {"\n"}“We do not fear the intense,” Zena said. She walked back to the white board and pushed it back towards Jake.{"\n"}
          {"\n"}She stepped in front of the board again and said, “Let’s look at this thing called <Text style={{ fontFamily: "gelasibro-italic" }}>input</Text>. In Python we refer to each input we provide our function as a{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>parameter</Text>. In the case of our function, I'm going to add one new input, one new <GlossaryWord lookup_string="Parameter" word="parameter" toggleGlossary={this.props.toggleGlossary} />,
          called <Text style={{ fontFamily: "gelasibro-italic" }}>message</Text>. But, a function can have as many parameters as we see fit, it need not only be one.”{"\n"}
          {"\n"}Zena modified the whiteboard.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_4.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 5 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “You can see, to define a parameter, we add it inside of the parentheses after the function name. Our code can now do whatever we want with this <Text style={{ fontFamily: "gelasibro-italic" }}>message</Text> parameter.{"\n"}
          {"\n"}“Now, any step in our function can access the <Text style={{ fontFamily: "gelasibro-italic" }}>message</Text> we pass inside the function. For example, if step four determines what text is sent to the user’s phone, we can now pass in
          a specific <Text style={{ fontFamily: "gelasibro-italic" }}>message</Text> at the time we call our function. I am using{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
            <GlossaryWord lookup_string="Print" word="print" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text> just to demonstrate the concept.{"\n"}
          {"\n"}“I see,” Jake said. “I think I get it. So, let me think. Each feature can use the same function but pass in a separate message.”{"\n"}
          {"\n"}“Precisely. Each feature can now <Text style={{ fontFamily: "gelasibro-italic" }}>call</Text> this function, while adding in its own <Text style={{ fontFamily: "gelasibro-italic" }}>message</Text>{" "}
          <GlossaryWord lookup_string="Argument" word="argument" toggleGlossary={this.props.toggleGlossary} />. Note, when we call a function and <Text style={{ fontFamily: "gelasibro-italic" }}>set a value</Text> for the parameter, we refer to that{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>value</Text> as an <Text style={{ fontFamily: "gelasibro-italic" }}>argument</Text>. To call a function in this manner, we use this syntax.” Zena wrote below.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={105} source={require("./../../assets/images/lessons/lesson7_5.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 6 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “You can see, we are passing in the string <Text style={{ fontFamily: "gelasibro-italic" }}>Your post received a new comment!</Text> as our <Text style={{ fontFamily: "gelasibro-italic" }}>message</Text> argument.{"\n"}
          {"\n"}“We can now change the specific message that is displayed for each notification by placing in a custom <Text style={{ fontFamily: "gelasibro-italic" }}>message</Text> when we call the function. Parameters, or inputs, give us greater
          flexibility in our functions. Parameters let coders make slight alterations to their function's instructions, without having to change all of them.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That really is wild</Text>, Jake thought.{"\n"}
          {"\n"}Zena smiled for an instant, then her face turned serious again. “Another piece of magic that coders invented is the concept of a <Text style={{ fontFamily: "gelasibro-italic" }}>return</Text>.”{"\n"}
          {"\n"}“A return?” Jake asked{"\n"}
          {"\n"}“Affirmative. A <Text style={{ fontFamily: "gelasibro-italic" }}>return</Text> is a piece of information that the function <Text style={{ fontFamily: "gelasibro-italic" }}>hands off</Text> to the next set of code waiting in line to
          fire, once the function finishes executing.”{"\n"}
          {"\n"}Zena looked at Zimmer and Dendro, who were watching eagerly.{"\n"}
          {"\n"}Jake looked at her, his eyebrows drawing together.{"\n"}
          {"\n"}Zena continued, “When a function <Text style={{ fontFamily: "gelasibro-italic" }}>returns</Text>, the function hands off information to its teammate, the code that follows it.”{"\n"}
          {"\n"}“Like the code below it? Like next in line?” Jake asked.{"\n"}
          {"\n"}“Yes, essentially. When Angelica triggers the <Text style={{ color: "#0C2443", fontFamily: "code" }}>send_notification</Text> function, she may have wanted to{" "}
          <GlossaryWord lookup_string="Returnstatement" word="return" toggleGlossary={this.props.toggleGlossary} /> something to the code following it. What information do you think Angelika might want the send_notification function to hand off to
          the code following it?{"\n"}
          {"\n"}“I'm not sure. I have no idea,” Jake said.{"\n"}
          {"\n"}“It's hard to answer without real world experience. But in this type of message sending scenario, it might be information related to: did my message get sent properly? Oftentimes the code, or steps, following the sending of a
          notification, will want to know if there were any issues delivering the notification to the user’s phone. For example, the function could return a string to the code following it, with the value of either ‘Success’ or ‘Failed.’{" "}
          <GlossaryWord lookup_string="Returnstatement" word="Returning" toggleGlossary={this.props.toggleGlossary} /> is an essential tool, because the more you build stuff, the more you'll see how much you're going to want to hand off the result of
          functions to the code waiting in line.”{"\n"}
          {"\n"}“Interesting,” Jake said.” So, you are looking for a result that other code can do something with. That's super cool.”{"\n"}
          {"\n"}“Precisely. In Python, to return, we use the keyword return like this:”
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_6.png")} />
        </View>
        <Caption>Note the Python return keyword.</Caption>

        {
          // Section 7 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Here, our <Text style={{ color: "#0C2443", fontFamily: "code" }}>send_notification</Text> function can hand off whatever we feel is needed.”{"\n"}
          {"\n"}“So, it goes at the end of the function,” Jake said.{"\n"}
          {"\n"}“Yep. It might be better to view a simpler example to really make <GlossaryWord lookup_string="Returnstatement" word="return" toggleGlossary={this.props.toggleGlossary} /> click,” Zena said.{"\n"}
          {"\n"}“She wiped off the board, then began scribbling. Let's write a new function that adds two numbers together. To do this, we will <Text style={{ fontFamily: "gelasibro-italic" }}>define</Text> a new function called{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>add</Text>, which takes two parameters <Text style={{ color: "#0C2443", fontFamily: "code" }}>a</Text> and <Text style={{ color: "#0C2443", fontFamily: "code" }}>b</Text>. The function
          has one step. See here.”
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_7.png")} />
        </View>
        <Caption>Keep in mind - in Python we indent to create a new code block. (a + b is indented underneath the function definition - which in Python means it is the codeblock associated to this function.)</Caption>

        {
          // Section 8 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          She continued, “Simple enough. But now let's say we want to add a line into our program...that sets the <Text style={{ fontFamily: "gelasibro-italic" }}>return</Text> of this function to a new{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>variable</Text>. Like this.”{"\n"}
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_8.png")} />
        </View>
        <Caption>
          Keep in mind the line sum = add(2,3) is not indented. This means it is a separate <GlossaryWord lookup_string="Statement" word="statement" toggleGlossary={this.props.toggleGlossary} />, not directly affiliated to the function above. For
          begginers, sometimes visually you can get confused.
        </Caption>

        {
          // Section 9 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “What do you think the result of <Text style={{ color: "#0C2443", fontFamily: "code" }}>sum</Text> will be in <Text style={{ color: "#0C2443", fontFamily: "code" }}>sum = add(2,3)</Text>? So it’s super clear, what the last line is saying
          is: please store the result of the function add(2,3) in the <GlossaryWord lookup_string="Variable" word="variable" toggleGlossary={this.props.toggleGlossary} /> named sum.”{"\n"}
          {"\n"}“Yea, so 2 + 3? So 5?” Jake asked.{"\n"}
          {"\n"}Zena shook her head.{"\n"}
          {"\n"}“Oh, wait. There's no return keyword written in your function!” Jake felt proud to spot the mistake.{"\n"}
          {"\n"}“Correct. To make this Python code work as intended, we must adjust our add function like so.” Zena added in the <Text style={{ fontFamily: "gelasibro-italic" }}>return</Text> keyword.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_9.png")} />
        </View>
        <Caption>We NEED that return keyword! Don't forget it when you need it.</Caption>

        {
          // Section 10 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Ah. So, we must explicitly write return. Like you said. Makes sense. Cool,” Jake observed.{"\n"}
          {"\n"}“Yes. Or else our function will actually hand off <Text style={{ fontFamily: "gelasibro-italic" }}>nothing</Text> to <Text style={{ color: "#0C2443", fontFamily: "code" }}>sum</Text> in line 3. If we{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>printed</Text> the value of <Text style={{ color: "#0C2443", fontFamily: "code" }}>sum</Text> to the screen, after running this code, we would see{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>NONE</Text> printed out, <Text style={{ fontFamily: "gelasibro-italic" }}>not</Text> <Text style={{ color: "#0C2443", fontFamily: "code" }}>5</Text>. NONE is another Python{" "}
          <GlossaryWord lookup_string="Datatype" word="data type" toggleGlossary={this.props.toggleGlossary} />
          that essentially expresses that something is empty.”{"\n"}
          {"\n"}“I hope I don't forget,” Jake said.{"\n"}
          {"\n"}“You will. But you will learn,” Zena said.{"\n"}
          {"\n"}Zena walked to the center of the mat.{"\n"}
          {"\n"}“Believe it or not, we've now introduced to you the fundamentals of The Function, the atomic unit of purpose, in programming. We discussed where it emerged from: the need for{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Reusability" word="reusability" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          . We discussed <Text style={{ fontFamily: "gelasibro-italic" }}>input</Text>. We discussed <GlossaryWord lookup_string="Output" word="output" toggleGlossary={this.props.toggleGlossary} />, also known as the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>return</Text>. There are more theories you may learn in the future on the best ways to construct functions, but for this lesson, this is what is required for a foundational understanding.”
          {"\n"}
          {"\n"}“That's awesome,” Jake said.{"\n"}
          {"\n"}“You are now ready for your Utma challenge,” Zena stated.{"\n"}
          {"\n"}She pushed a floating blue ball out of her way and walked back over to the white board. Then she erased it.{"\n"}
          {"\n"}“What do I need to do?” Jake asked.{"\n"}
          {"\n"}“You're going to write a function,” Zena said.{"\n"}
          {"\n"}Jake's throat tightened.{"\n"}
          {"\n"}“The temperature units on this planet have always confused me. Fahrenheit this, Celsius that,” Zena remarked.{"\n"}
          {"\n"}“Yeah, it confuses me also. I think Fahrenheit is better,” Jake said.{"\n"}
          {"\n"}“I'm not sure which is better. But our ships, and other equipment often need to convert Celsius to Fahrenheit, and vice versa. And we don't want to rewrite the same code a million times. I want you to write me a function that converts
          Celsius to Fahrenheit. Then I want you to set the <Text style={{ fontFamily: "gelasibro-italic" }}>result</Text> of the function to a new variable called <Text style={{ fontFamily: "gelasibro-italic" }}>temperature.</Text>  You can use 100
          degrees Celsius as the temperature you convert with the function in this lesson. And don't worry, if you need help with the actual equation, we can help. The goal is to demonstrate to the Utma that you have grasped the fundamentals of{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>the Function</Text>, not that you can remember the conversion formula.”{"\n"}
          {"\n"}“Ok,” Jake responded.{"\n"}
          {"\n"}Zena erased the whiteboard and gently nudged it in Jake's direction.{"\n"}
          {"\n"}Jake stopped the floating board and took up a marker. His upper back felt stiff. <Text style={{ fontFamily: "gelasibro-italic" }}>Where do I even start?</Text> He looked at the blank canvas.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I need to create a set of instructions that convert Celsius to Fahrenheit. So, I obviously need a function. I guess I can start with just giving the function a name.</Text> He wrote the
          function header in blue marker.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_10.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 11 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          <Text style={{ fontFamily: "gelasibro-italic" }}>The name is easy. But the steps.</Text> He forced himself to think clearly, even with all three of them watching from their various locations on the mat. He cracked his knuckles to cool down
          his thoughts. <Text style={{ fontFamily: "gelasibro-italic" }}>We need to take Celsius and convert it to Fahrenheit. So, we give the function Celsius, and it spits out Fahrenheit. In, out.</Text>
          {"\n"}
          {"\n"}Rain began to fall against the opaque windows.{"\n"}
          {"\n"}“We use an input for this right?” He paused. “A parameter?” He looked at Zena, uncertain. She made no reaction. Jake added a <Text style={{ fontFamily: "gelasibro-italic" }}>Celsius</Text>{" "}
          <GlossaryWord lookup_string="Parameter" word="parameter" toggleGlossary={this.props.toggleGlossary} /> to the function.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_11.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 12 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “That looks right. Now I have defined an input called celsius. But how do we get to the output?”  He said out loud: “Wait, Zena, what is the formula?”{"\n"}
          {"\n"}“Nine over five, times Celsius, add thirty-two,” Zena responded quickly.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Nine over five, times Celsius, add thirty-two</Text>. He sketched the equation on the board. His mind cycled through a few options, but he spotted the opportunity to use his input.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_12.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 13 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          He looked at his work. It seemed right. “But I'm not actually doing anything with the value of the equation,” he noted. “Can I store it in a variable?” He looked at Zena. No reaction. He put it in a variable anyway.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_13.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 14 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “Now I have <Text style={{ fontFamily: "gelasibro-italic" }}>defined</Text> the function. Ok, good. I added the <Text style={{ fontFamily: "gelasibro-italic" }}>parameter</Text>. I am{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>using</Text> my parameter in the equation. And last, I am <Text style={{ fontFamily: "gelasibro-italic" }}>setting the value of the equation to a variable named</Text>{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>fahrenheit</Text>. What else is needed? Anything?” He looked back at Zena, then he thought of taking a handoff from his quarterback in flag football.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The return</Text>. He updated his code once again.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_14.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 15 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “That looks right, I think? Now I am <Text style={{ fontFamily: "gelasibro-italic" }}>returning the result of the equation, which is now stored in the variable</Text> <Text style={{ color: "#0C2443", fontFamily: "code" }}>fahrenheit</Text>.
          But last, I need to assign the output of the function to a new variable, as Zena asked. That sounds tricky,” he whispered to himself. He thought it over and then an idea popped into his head.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I can call the function and set a new variable to its result! As Zena demonstrated before!</Text>
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson7_15.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 16 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          He wrote his final submission on the board and backed away.{"\n"}
          {"\n"}“Now come here my friend. This is correct. But there is one final question,” she said. “What is the term we discussed? Something that a function permits.”{"\n"}
          {"\n"}“Reusability,” he answered.{"\n"}
          {"\n"}A wave of lightheadedness ran through him. Then the burning sensation-the strongest so far. <Text style={{ fontFamily: "gelasibro-italic" }}>Ah</Text>. He rolled up his right sleeve. A pyramid-looking shape sat etched below the other
          two markings. <Text style={{ fontFamily: "gelasibro-italic" }}>That stings so bad</Text>. He shook his arm to distract himself from the fiery feeling.{"\n"}
          {"\n"}“Congratulations. You have passed this test.” Zena pushed the board away, then faced him, and bowed.{"\n"}
          {"\n"}Jake looked at her curiously, then bowed back.{"\n"}
          {"\n"}"Not bad, kid,” she said. He caught a glimpse of her smiling at Dendro and Zimmer.{"\n"}
          {"\n"}“What now?” Jake asked, as he ran his finger over the marking. <Text style={{ fontFamily: "gelasibro-italic" }}>Yeah, my mom is definitely going to kill me.</Text>
          {"\n"}
          {"\n"}“Now we train your powers,” Zena replied. She walked to the shelf and picked up a small aluminum axe, then returned. “This is your training weapon.” She placed it in his hands, receded a few steps, then began to walk in a circle
          around him.{"\n"}
          {"\n"}“The Utma has granted you access to three unique powers:{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Initma" word="Initma" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          , <Text style={{ fontFamily: "gelasibro-italic" }}>Zegmu</Text>, and <Text style={{ fontFamily: "gelasibro-italic" }}>Acelera One</Text>. This is no easy feat, especially with such unique training circumstances. You may have already felt
          the force of your first granted power, <Text style={{ fontFamily: "gelasibro-italic" }}>Initma</Text>, running through you. <Text style={{ fontFamily: "gelasibro-italic" }}>Initma</Text> gives her soldiers the ability to bring a certain
          calmness to our minds in moments of intense stress. <Text style={{ fontFamily: "gelasibro-italic" }}>Initma</Text> is subtle, but its effects will grow over time, especially with the right practice.”{"\n"}
          {"\n"}Jake thought of his out-of-body performance on the rink, but he wasn’t sure if that had been <Text style={{ fontFamily: "gelasibro-italic" }}>Initma</Text> or something else.{"\n"}
          {"\n"}Zena took her right foot in her hand, bending her leg backwards to stretch out her quadriceps, then continued her pacing. “You have achieved <Text style={{ fontFamily: "gelasibro-italic" }}>Zegmu</Text>, weapons harnessing.” When she
          said this Jake let his axe fall to his side. It hovered next to him in position as he rotated his body.{"\n"}
          {"\n"}Zena nodded in approval. “And on this mat today, you have been granted the power of <Text style={{ fontFamily: "gelasibro-italic" }}>Acelera One</Text>,” she said. “<Text style={{ fontFamily: "gelasibro-italic" }}>Acelera One</Text>,
          or the <GlossaryWord lookup_string="Theacceleratedparry" word="Accelerated Parry" toggleGlossary={this.props.toggleGlossary} />, allows a soldier to evade an enemy blow by providing them with a short burst of blinding speed. We access this
          power by envisioning ourselves quite literally, as the great masters have taught us, <Text style={{ fontFamily: "gelasibro-italic" }}>moving like a blur</Text>. Then we lean in the desired direction, with complete faith, to dodge our
          opponent’s strike.”{"\n"}
          {"\n"}Zena walked to the center of the mat and signaled for Jake to follow. As he walked up to her, she stood still, spreading her feet apart and bending her knees, forming a reactive fighting stance. “We always keep our bodies in athletic
          form when we train.” Jake examined the positioning of her feet, limbs, and back. He spread his legs out, straightened his spine, and bent his knees.{"\n"}
          {"\n"}"Good. Practice that for a moment." As Zena headed for the shelf, Jake stayed in position, trying to get his body to feel more comfortable. When came back a few moments later carrying a long, curved sword, she gently kicked the back
          of his right knee. “Always keep your knees slightly bent and keep them flexible. Not so stiff.” She examined his posture. “Good, now hold your axe upright with both hands. Like this.” She held her weapon just above her right shoulder. Jake
          copied her.{"\n"}
          {"\n"}"Now, the power of <Text style={{ fontFamily: "gelasibro-italic" }}>Acelera One</Text> is already inside of you. You have earned it. As I mentioned, it's as simple as envisioning yourself"—she paused—"
          <Text style={{ fontFamily: "gelasibro-italic" }}>moving like a blur</Text> to the right or left of your opponent. Other spiritual teachers have described the feeling as an envisioning of yourself moving through space, instantaneously, like
          a sort of teleportation, even though we know that is not quite what is occurring. I'm going to come at you slowly." She backed up five paces. "Try to dodge my strike."{"\n"}
          {"\n"}She came at him, bringing her axe high above her head, and swinging the weapon in slow motion towards his left shoulder. He closed his eyes, gripping his axe with both hands, and attempted to envision himself moving like a blur–or
          teleporting to his right. But as he held the thought in his mind’s eye, and stepped forwards, he took an awkward stumble, and almost fell. He felt embarrassment run through him.{"\n"}
          {"\n"}"I-I tried. I did, but nothing happened," Jake said.{"\n"}
          {"\n"}She circled him. "Again!" she commanded. "And this time do not close your eyes." As she came at him with her axe raised high above her head, Jake held on tightly to his weapon, and tried his hardest to envision himself dodging the
          blow by what could best be described as imagining himself <Text style={{ fontFamily: "gelasibro-italic" }}>blurring</Text> to his right. This time he noticed a slight fogging sensation run through his field of vision, but there was no
          physical effect on his movement.{"\n"}
          {"\n"}He turned to Zena, who was right up against him. "I swear, I saw something. I know it didn't work, but I felt it!"{"\n"}
          {"\n"}"Good. Very good. Now try to imagine yourself launching at an <Text style={{ fontFamily: "gelasibro-italic" }}>exact</Text> forty-five-degree angle. Again!" Zena shouted. She came at him quickly, pretending to slash her sword from her
          right side. As she approached, he jerked his head in the direction he wanted to move, right, to avoid Zena's blow, and focused on teleporting himself at a precise forty-five-degree angle.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Whoa</Text>. He felt himself being pulled slowly as if time had slowed down. And then Zena was almost instantly behind him, and he had a clean angle of attack at her back.{"\n"}
          {"\n"}She dropped her sword by her side and began to clap slowly. “Well done, Earthling.” Zimmer and Dendro stood up and applauded.{"\n"}
          {"\n"}They spent the next hour or so perfecting the move. Then Jake sat down on the mat and listened to Zimmer and Dendro share a few of their training memories. They each stressed how vital awareness is to the training process. “We must
          become aware of where each power sits inside of us, so that they can properly manifest,” Dendro had said. When the session was officially complete, Jake stood up, bowed, and laid the axe back into Zena’s hands. He changed and met them all
          near the staircase.{"\n"}
          {"\n"}“Impressive work today, son,” Zimmer said. “Take this.” He placed a silver egg looking device in Jake's hands. “It is an encrypted beeper. Keep it on you, and don’t lose it.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>An encrypted beeper? What do I need this for?</Text>
          {"\n"}
          {"\n"}He placed the object in his pocket, took one last look at the alien dojo, then followed the three of them up the staircase, back onto the Casablanca streets.
        </Text>
      </View>
    );
  }
}
