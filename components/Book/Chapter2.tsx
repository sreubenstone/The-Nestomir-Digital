import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/styles/hljs";

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const markup = `
<html>
  <head>
    <title>Trip to Seattle</title>
  </head>
</html>
  <body>
   <h1> Trip to Seattle with Jake </h1>
   <p> We are travelling North by North West to Seattle, Washington.<b> Our coordinate destination: 47.6062° N, 122.3321° W </b> </p>
  </body>
`;

const markup2 = `
<html>
<head>
  <title>Trip to Seattle</title>
</head>
</html>
<body>
 <h1> Trip to Seattle with Jake </h1>
 <p> We are travelling North by North West to Seattle, Washington. <b> Our coordinate destination: 47.6062° N, 122.3321° W </b> 
 </p>
</body>
</html>
`;

const body1 = `The Dragon-like creature stared at him. Its red eyes blinking every few moments. Its body was almost entirely covered by the rubble. All that was visible were the creature’s tail, neck, and head. It looks like a “f#ckin dragon” Jake thought, as Jake’s body started to vibrate in fear. Jake was now entirely operating on adrenaline. His body told him to run, and that’s what he did. He turned and sprinted, but he immediately tripped on the rising tail of the creature, which was far longer than he realized. 

He fell backwards and hit his head on the ground. He scraped his arms as he tried to catch his fall, and he was bleeding slightly. The creature, with a large struggle, got its body out of the ground. It stood up on its back legs and shook its body in a similar fashion that Rex did when he came out of a water bath.

To Jake’s horror, the dragon-creature slowly lowered its enormous head towards Jake’s face until it’s baseball sized nostrils were up against his face. It gave a massive snort, then a succession of smaller snorts. It then pulled its head back, and to Jakes enormous surprise, it murmured “hooman”. Some smoke proceeded to come out of the creature’s nose, causing Jake to cough loudly. 

“What the f*ck” Jake thought to himself. How could this creature speak English? Jake back pedaled away from the creature. He was ready to run again. But the creature came back and slowly mumbled “whaat is your name?”, in a deep, roar of a voice.

“JJJJake”, Jake said. He had forgotten his name for a second. 

“Jakee” the creature snarled. More smoke poured out of its nose. It’s voice had a smokey hissing sound, but it wasn’t necessarily combative.

“Yes”, Jake replied…”whatt...are...you?”.

“Whatt amm I? I am a...it paused for a second as if to think…..“I am a Naronian Draconod.”

“What?”, Jake asked with an extreme tension in his voice. 

The creature seemed to shake its head for a second, as if it had water in its ears. “That’s better”, it exclaimed, with an oddly humanesque form of emotion.

“My ship. It. It was hit. Our captain. He fell asleep at the wheel in the Larhadian Asteroid Belt 1 hundred million miles from here. We lost our right wing. In emergencies Draconods are only given a private ejection capsule with 1 light year’s worth of fuel. It’s a death sentence, almost. We are a lower form of society on Naronia. The Higher Level’ers have much larger escape pods and fuel tanks. My fellow Draconods have to evacuate in these these smaller capsules. We are not sure what happened to our captain. Those Hangods…”, the dragon bellowed.

“It’s no matter now. I am far lost. I saw this planet on my Lithium-Radar, and detected solid ground and habitable atmospheric levels for my fire-gills. I am not sure where I am”. 

“Earth, you are on Earth”, Jake said. 

“Erth?. Interesting name, hmm. Which system?”

“Uh.” Jake wished he had paid more attention to astronomy. “The Milky Way?”

“Milky Way..hmm...no I have not heard of this. I believe I am in what our ancestors termed the Nilofar System -- Eta Omega. We are in a spiroid galaxy, of some sort, on one of its outer arms.”

“How...how on Earth do you speak English?!, Jake exclaimed.

“Our Draconian forefathers mapped these far eastern systems many years ago. We have evolved over thousands of years to interpret language and dialects based on a wave signal all life forms give off, called the Utma. That’s how I can speak your tongue.”

“So you..you are an alien?”

“Yes, I guess that’s what you’d call it. Though my race is sometimes treated as if we are aliens on our home planet.”

“Naronia?”

“Yes, that’s where I am from. Though my ancestors are from a planet called Draconia, which was destroyed many millennia ago…, but this is a story for another day. I must get out of here. They are coming. The Hangods. Yes, I can see. Look up there. That is not a star up there. That is a Hangod Deathcruiser. I must move. You should to. ”

“Whattt? Who is coming? Hangg-what? Deathcruiser?!”, yelled Jake, his voice still trembling.

“We must leave now. Now. If you want to live, get on my back. Actually, if we want to live, get on my back. I can not fly alone. The Naronians would never let us.”

“Now!”, the dragon-creature snorted as Jake jumped a foot in the air.

“Get on my back”, said the creature as it lay partially sideways to allow Jake to climb on his dark green and brown scaled back. The star in the sky was getting brighter. Jake wasn’t sure if he fell too hard and was in a dream (or a nightmare)...but either way...this “Draconian” monster seemed sincere about his concern of this Deathcruiser.

Jake decided he had no choice. Running through the maze corn field chased by angry aliens coming out of a battleship seemed worse than getting a ride on a crazy dragon thing’s back. He hesitantly stepped onto the dragon creature. 

He positioned himself on a scaled apparatus that seemed almost like a saddle built into the creature’s body. He put his hands on the two protruding scales, that felt and looked like handles. 

Then something unexpected happened. A large square portion of the dragon’s back slid down and tucked itself underneath another layer of its hide. And what appeared was unimaginable. A screen. Some kind of color screen.

“You must program me. That’s how my master’s control me. Listen carefully to what I say. Please type in these commands. You’re going to have to pick this up quickly for us to live.”

“I want you to recognize that the primary way I am programmed is through a series of programming scripts that are uploaded into my local Jira. There are other ways to program me, but for now this will suffice. For flights like this, we only need to upload basic HTML into the script. HTML is what we call a markup language. It simply tells Jiras, which I believe earthlings, yes the Utma is telling me “Browser”, browsers, in your tongue, how to arrange and order elements on a network page. It is very basic, but it is core to the foundation of interfacing with The Network.” The Network, in Earthling tongue, is what you know as the internet. 

“For this flight I am going to need you to code in basic HTML. Please listen carefully, because I will not have much time to repeat.”, said the Draconian as his head faced the stars above.

“Make sure your Script Editor is open. You can see it on the screen right there. On a new flight, it’s important that you click “New File” to create a new file in our system here. Yes, I have a complete computational system inside of my back. You would know this as a computer, in your common tongue. On trips, always entitle this first html file trips.html.

“All html files start with what we call an HTML tag. A tag is just a piece of text enclosed by one left bracket “<” and one right bracket “>”. An html tag, for example, would read “<” “html” “>”. Understand we can have different tag types depending on what we want to do on the Jira page.

Jiras work by having parts of their “brains” switched on and off as they move over opening and closing tags. What I mean by this is that the instant your Jira moves over the opening <html> tag it is setting it’s brain to “html on”. It will continue to read things through the “html” perspective until it sees a closing html tag. A closing html tag is identical to an opening html tag except it has a backslash before the right bracket. As in “<html/>”. Once the Jira (browser) sees the closing <html/> tag, it’s brain is then switched to “html off”.

This tagging structure provides a convenient way to communicate with our Jira on how to parse different parts of our script’s code. You will see different types of tags later on that help us us change our network page. But the same principal of “parse on”, “parse off” stands. Got it?

There are a few requirements that this script requires to make a basic flight. These requirements are a set of two distinct sections in the script that describe the trip we are going to take. These two sections, are known as the Header section, and the Body section of the script.

You can think of a section inside of HTML code as the content of the script encapsulated by a set of html tags. For example, any content encapsulated by a pair of HTML tags (<html> content goes here </html> as the “HTML section”. The same nomenclature would follow. Any content wrapped (wrapped is synonymous with encapsulated) by <head> content </head> would be known as the Head section of the html script. It’s important to note that in an HTML script there are two kinds of sections. One’s that actually show up visually in the Jira (browse) screen, and sections that don’t visually appear. We should get this point down now, as I know you might be wondering -- why would we ever want a section that does not visually appear on the browser screen? Well the answer is that these non-visually appearing sections, known as meta-deta sections, contain information that The Network uses for other purposes, like increasing search results from a search engine. Let me check...yes...one you might be familiar with would be called Google in your tongue.

The meta-data section in our html document (the Head section) is the section enclosed by <head> tags. Please note I will sometimes use the word “enclosed” or “wrapped” to communicate that something in the document must be encapsulated by a set of opening and closing tags. This section requires a section, within it, called a Title. Not too hard to understand. To properly set our title inside our meta-data section, we simply add these title tags inside of our wrapped head tags. Don’t worry, I will show you shortly what I mean with my DraconianVision. In between the title tags the pilot will simply write “Trip to Seattle”.

“..Wwwait, Seattle? Like the city on the West side of America? We’re going there?”

“Yes, Jake, I will explain on the way”.

“Jake, take a look at the atmosphere (air) next to me. I have a feature called Draconian Vision which allows me to project programming guidance to my pilot. I am only allowed to use it once every 24 hours for security reasons, and there’s no getting around that rule -- it is hardcoded inside of me.”

Jake turned, and slowly, but surely, a projected blue light beam rendered what looked like a similar version of his Script Editor in the plain air next to Jake. A real hologram. It seemed to come out of Dendro’s eyes, or somewhere close to them.
`;

const body2 = `“This is what your document should look like now,'' said the creature.
“Ahhh, that’s better. Now I can kind of see what you’re saying, said Jake.

The creature turned it’s head towards the sky again. “Jake, we must learn the rest needed for this trip. We now must add our body section  to render visual content to our network page. Everything wrapped by body tags will be rendered visually on the screen, assuming things are encoded properly.” 
“Inside our body tags we want to ensure we have a title that visually appears for Jira onlookers to view. We can use h1 tags to accomplish this. Anything wrapped by h1 tags will render as a large, emboldened piece of title text, signifying a title visually. We can use h2 tags to render smaller titles, e.g., what you would call a subtitle, when needed.”

The dragon creature went on. 

“We should entitle our main page in trips.html as “Trip to Seattle with Jake”. Remember, this is different from the title in  our meta-data section.”

“We will next utilize p tags, short for paragraph tags, to add a new paragraph to our script. Here we will state some of the details of our trip. Please encode “We are travelling North by North West to Seattle, Washington. Our coordinate destination: 47.6062° N, 122.3321° W.”

“Recognize that when we insert coordinates into the jira page, we must have the coordinate text set in bold type. To do this we wrap the necessary text in a set of b tags.”, said the Draconian. 

“I have now given you everything you need to get us into the air. You will have to implement this fast in the script editor. We have almost no time.”

Jake felt the terror rush through him.

Jake put his head down, and with this trembling fingers, began to modify the trips.html file. The encapsulation pattern using these tags was actually not that hard to understand. 

“I get parse on, parse off. And now I kind of see we can put tags inside of these tags..in this sectional pattern..hmm...”

Jake took his first stab at typing into the file. He remembered the hologram tips pretty well for creating the meta-data section. He inserted the html, head, and title tags in the document, with “Trip to Seattle” set as the title for the metadata (head section).

He then created the first opening body tag to begin the visually rendered piece of the script. Jake wrote in the text that the Dragon repeated a few moments ago. He squeezed his memory as hard as he could. He thought he remembered the text properly. He inserted the opening h1 tag, inserted the trip title, and closed it with an </h1>. He opened up the trip’s descriptive text with a p tag and closed the end of the statement with the closing “</p>” tag. He then wrapped the second sentence with coordinate information in the opening <b> and closing <b/> tags. He then added the closing body at the end of this section.

He reread it rigorously. He clicked save. 
`;

const body3 = `“Hold up. Jake there is still an error in your script. I am banned internally from giving any guidance to the pilot once the text is inserted, and my DraconianVision has been used less than 24 hours ago. Just remember what I’ve taught you a few moments ago. Think through it, fast. I’m sorry, we’re under enormous pressure”.

Jake’s trembling index finger went over each line of the file. He could not understand what he was doing wrong. He reread it again. Repeating to himself the tags on the page…Html start, head open, title open, title close, html close, body open..”

“Wait! I need to move the html closing tag to the very end of the document! Because that is like the master tag. I think?” Jake shouted. 

Jake moved the closing HTML tag to the end of the document and pressed save on the keyboard.
`;

const body4 = `The editor now automatically minimized itself and the Jira opened.`;

const body5 = `“There you go”, the creature roared.

“For a basic trip to Seattle at low speed this is all we need. I can handle the rest. Hold on tight.”

A blueish beam emitted from the bottom of the Draconods’s underbelly. An orange glow also began to radiate through the underside of the dragon’s wings. It reminded Jake of the night lights on the wing of an airplane. The Draconian made two massive beats of its wings, that were slightly circular in motion, and then himself pushed off the ground abruptly into the air. 

Jake’s head jerked back as they were now on a 60 degree angle powering upward into the air. The wings of the creature were now beating in a powerful harmony, with no change in motion or rhythm. The screen on the Dragon had not changed, though the lighting seemed to have dimmed a bit. A slight misty rain began to hit them. They continued to zoom into the air, their altitude increasing, and Jake looked back to see the fading glimmer of the lights of Grapefield passing below them.
`;
export default class Chapter2 extends Component<IProps> {
  static navigationOptions = {
    // headerTitle: "Chapter 2"
    header: null
  };

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={GlobalStyles.container1}>
        <Text style={GlobalStyles.chapterTitle}>Chapter 2</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://c4.wallpaperflare.com/wallpaper/169/48/973/dark-street-painting-wallpaper-preview.jpg`
            }}
          />
        </View>
        <Text style={BookStyles.bookFont}>{body1}</Text>

        <SyntaxHighlighter
          language="html"
          style={dracula}
          highlighter={"hljs"}
          customStyle={{
            borderWidth: 0.5,
            borderRadius: 3,
            marginBottom: 28
          }}
        >
          {`// DraconianVision: trips.html \n<html> \n <head> \n <title>Trip to Seattle</title>\n </head>\n</html>`}
        </SyntaxHighlighter>
        <Text style={BookStyles.bookFont}>{body2}</Text>
        <SyntaxHighlighter
          language="html"
          style={dracula}
          highlighter={"hljs"}
          customStyle={{
            borderWidth: 0.5,
            borderRadius: 3,
            marginBottom: 28
          }}
        >
          {markup}
        </SyntaxHighlighter>
        <Text style={BookStyles.bookFont}>{body3}</Text>
        <SyntaxHighlighter
          language="html"
          style={dracula}
          highlighter={"hljs"}
          customStyle={{
            borderWidth: 0.5,
            borderRadius: 3,
            marginBottom: 28
          }}
        >
          {markup2}
        </SyntaxHighlighter>
        <Text style={BookStyles.bookFont}>{body4}</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={{
              width: "100%",
              height: 100,
              borderRadius: 0,
              marginBottom: 3
            }}
            source={require("../../assets/images/test4.png")}
          />
        </View>
        <Text style={BookStyles.bookFont}>{body5}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("StoryProgress")}>
          <Text>Finished reading?</Text>
        </TouchableOpacity>
        <Text style={GlobalStyles.chapterTitle}>✧</Text>
      </ScrollView>
    );
  }
}
