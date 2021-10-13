import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import styled from "styled-components";
import GlossaryWord from "../Glossary/inline/GlossaryWord";

const StoryGraphic = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
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
export default class Chapter14 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 14</Text>
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
          Jake lay with his arms curled around his bed covers, struggling to get himself up. He traced the illustration of <Text style={{ fontFamily: "gelasibro-italic" }}>Star System A, The Nestomir</Text> on the ceiling above him. The chart was
          made up of foreign measurements, two differently sized stars, six planets, and a scattering of oblong moons. One of the planets appeared cracked.{"\n"}
          {"\n"}Dendro’s fists banged on the door. “I made breakfast. Get up. They will be here to pick us up within a half-hour.”{"\n"}
          {"\n"}“Be up in a minute,” Jake shouted back. A moment later, he rolled out of bed and headed into the living room.{"\n"}
          {"\n"}"Breakfast on the table. Eat up, kid," Dendro said as he fit clothing into a set of duffle bags.{"\n"}
          {"\n"}“Thank you, Dendro.”{"\n"}
          {"\n"}As Jake scooped the eggs into his mouth, he tried to take in all he could of the apartment. The Kahve maker, the tubes running up the wall, the floating globe.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I hope I don’t forget this place.</Text>
          {"\n"}
          {"\n"}A few minutes later, Dendro said, as he glanced at his <GlossaryWord lookup_string="Lithiumradar" word="Lithium Radar" toggleGlossary={this.props.toggleGlossary} /> bio-readout: "They are here. Let’s go.”{"\n"}
          {"\n"}Dendro threw on his baseball cap and sunglasses, picked up his duffels and headed for the apartment door. Jake grabbed his items, giving the apartment one last look before he left forever, then followed Dendro out of 6C Tangiers.
          {"\n"}
          {"\n"}When they busted open the building's doors, Jake could see, sitting parked, directly in front of them on the side of the street, a vintage light blue Cadillac sedan. Through the passenger window, were Zena’s penetrating eyes, and
          beyond her, was Zimmer’s wolfish hand on the transmission. <Text style={{ fontFamily: "gelasibro-italic" }}>Nice ride.</Text>
          {"\n"}
          {"\n"}Dendro tossed their bags in the trunk.{"\n"}
          {"\n"}"My two favorite people!" Zena said cheerfully as they sat down inside.{"\n"}
          {"\n"}"What kind of car is this?" Jake asked as he brushed his hand across the leather armrest.{"\n"}
          {"\n"}Zimmer looked at him through the rearview mirror. "A <Text style={{ fontFamily: "gelasibro-italic" }}>1960 Cadillac Series 62</Text> sedan–a classic Earth vehicle. One of my favorites from this system," he said. "And check this out!"
          He flicked a switch on the dashboard's center-right, which caused the front of the car to bounce a few feet upwards in the air, then crash back down.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>"</Text>That’s sick!" Jake gurgled out as his bottom crashed back down into his seat. He could see Zena tittering through the rearview mirror.{"\n"}
          {"\n"}"You are a nut, Zimmer," Dendro grunted.{"\n"}
          {"\n"}"Had to get hydraulics on this baby. Or else, what's the point?” Zimmer looked at Dendro through the rearview mirror, but Dendro didn’t respond. Zimmer gently accelerated the car down the street.{"\n"}
          {"\n"}"Jake, I’m thrilled we are taking you to the festival,” Zena said. “It is another opportunity for you to experience Naronian culture. I was even tipped off they are importing high-end desserts this year. Cyprian cupcakes? Those things
          pop!” She stuck out her hand and made a circular shape with her index finger and thumb.{"\n"}
          {"\n"}"I am excited also. But I’m also looking forward to going home," Jake replied as the Cadillac zigzagged up the narrow Moroccan streets. Zena smiled in acknowledgement.{"\n"}
          {"\n"}Zimmer entered a highway on-ramp and they began the four-hour drive. They soon entered the desert and the steady rumble of the vintage Cadillac engine lulled Jake to sleep. A few hours later, when his eyelids flickered back open, he
          could see the sun was already past its apex in the sky, which signified he had slept well past noon.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That was a serious nap.</Text> He had dreamt of the Enlightened Garden, the Jupyter notebook, and cranking out a functioning piece of software with Zena.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Those horoscopes were pretty awesome.</Text>
          {"\n"}
          {"\n"}"Enjoy your snooze, kiddo?" Zimmer asked. He grinned at him through the rearview mirror, his pearly white canines protruding from his top gum-line.{"\n"}
          {"\n"}"Yep. I guess this car really has its charm," Jake said. He noticed that far off to their right was the coast.{"\n"}
          {"\n"}Zimmer nodded. "And our friends here look to be unconscious as well."{"\n"}
          {"\n"}Zena was asleep with her head resting against the window. Jake couldn't see Dendro's eyes, but he, too, was resting his head against the glass. Beyond the top of Dendro's ponytail-bun, there was a peculiar-looking structure stranded
          someway off in the desert.{"\n"}
          {"\n"}"What is that thing?" Jake asked.{"\n"}
          {"\n"}Zimmer replied, "That’s the brilliant <Text style={{ fontFamily: "gelasibro-italic" }}>Abbas Nitro Circuit</Text>, Morocco’s own Enlightened Racing League stadium."{"\n"}
          {"\n"}Jake peered out at the structure again. Now that he knew what he was looking at, his brain assembled the shapes and contours. It did appear to be a stadium, but it was obscured by the desert heat. "This{" "}
          <GlossaryWord lookup_string="Enlightened" word="Enlightened" toggleGlossary={this.props.toggleGlossary} /> Society, you say, has its own racing league?" Jake asked.{"\n"}
          {"\n"}"Affirmative. The league has gained tremendous popularity recently," Zimmer replied.{"\n"}
          {"\n"}Jake tried to imagine an alien crowd cheering on what were most likely futuristic race cars. It was hard to believe, even with what he’d seen this week. "How can these events possibly go by undetected?"{"\n"}
          {"\n"}"Stealth containment fields of course. It’s a vision-obscuring technology. But there’s no need for it during the daytime. This used to be a legitimate racing stadium, but it’s been abandoned. At night, when races take place, the
          stadium's view is distorted to observers on the outside, but to the spectators inside, it’s a world of burnt kerosene, bellowing fans, and dazzling lights."{"\n"}
          {"\n"}"Have you ever attended one?" Jake asked.{"\n"}
          {"\n"}"Yes, but I've never been to a race in Morocco. I have been to a few Enlightened Circuit races on other outback planets. Maybe you'll get to attend one, one day," Zimmer responded. He took his hairy hand off the transmission and
          pointed ahead. "You can see we are approaching the precipice of the festival."{"\n"}
          {"\n"}Jake looked through the windshield and could see rows of what looked like white specs curving across the desert off in the distance, and a dark shape poking up into the air. "How far away are we now?" Jake asked.{"\n"}
          {"\n"}"We should be arriving in twenty minutes," Zimmer said. "The festival’s stealth fields will activate tonight."{"\n"}
          {"\n"}"Wahoo!" Zena picked her head up and waved her fists in the air. Apparently, she had woken up. "We’re almost there!" She exclaimed.{"\n"}
          {"\n"}Dendro slid back up into his seat. His hands began to adjust his ponytail meticulously as the car trekked closer to the temporarily constructed desert city in front of them.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Does he ever stop fixing that thing? It looks the same no matter what he does.</Text>
          {"\n"}
          {"\n"}They soon rolled up to the behemoth parking lot at the edge of the festival premises (which seemed to stretch on forever into the distance), drove through a side gate, and eventually pulled into an open spot between two dilapidated
          minivans.{"\n"}
          {"\n"}"We’re here," Zimmer said as he fired down the V8 engine.{"\n"}
          {"\n"}When Jake opened the car door, he immediately felt the intensity of the desert heat on his skin. Sweat began to drip from his body. He couldn't help but think of his mother. She would go bananas when he did not wear sunblock. How
          would she feel about him walking through the Moroccan radiation unprotected?{"\n"}
          {"\n"}The crew retrieved their belongings, slung their duffle bags and knapsacks over their shoulders, and began the walk towards the check-in kiosk. Jake's eyes bulged as he began to process the size of the party he was about to enter. A
          few hundred feet in front of them sat the outer, curving row of white guest tents. <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Each one formed a slightly smaller curve of tents than the row preceding it. From an observer above, the gathering of the high-class huts would appear to resemble a sizable slice of a
          massive circle.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How did they manage to set up this many tents in the desert?</Text> Jake thought. The panorama in front of him looked like what he imagined would be the first human settlement on Mars.{"\n"}
          {"\n"}The path they were on took its course from the outermost row of tents all the way to the first, right up to the central square of the Enlightened festival. As they walked through the arrangement, Jake examined the lodgings to see if
          he could sense any life. Lights flickered, voices spoke in English and other languages he did not recognize, and he could even smell the scent of exotic foods and perfumes.{"\n"}
          {"\n"}Ten rows later, they passed a human couple. They sat on the wooden steps of their elevated tent, drinking something from their green mugs. A few rows beyond them, a group of men and women were applying sunblock to their bodies, one of
          the men covered in dark tribal tattoos.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I need some of that sunblock</Text>.{"\n"}
          {"\n"}As they trotted down the path, life became more plentiful and more alien. A group of creatures, who appeared to be of the same race as Zena, sat on the ground in a circle. They were playing cards. Jake could see that they were in
          lively banter, passing a bag of some kind of dried fruit around. To his right, he saw another couple sitting on the steps of their tent engaged in a deep conversation. At first, they appeared human, but Jake noticed they had extremely thick
          unibrows and slightly protruding bumps on their foreheads. <Text style={{ fontFamily: "gelasibro-italic" }}>Those are definitely not humans</Text>. <Text style={{ fontFamily: "gelasibro-italic" }}>The creatures in this universe</Text>, Jake
          thought.{"\n"}
          {"\n"}As they walked on towards the festival center, the imposing dark construction Jake had seen from the car finally became discernible. It was an immense oak effigy. He could make out the side of the old face, the edges of the right
          nostril, and the coiled beard running down the neck. <Text style={{ fontFamily: "gelasibro-italic" }}>Who deserves a statue that big?</Text>
          {"\n"}
          {"\n"}They continued walking on, and soon Jake began to catch sight of the reflection of light emitted from the white sands of the central festival area. Outlines of bodies moving around the statue became perceptible. Then the gravel
          beneath their feet started to rumble. It was subtle at first, but as they walked on, it grew more prominent, and so did the sounds of pulsating dance music. The biggest party he’d ever attended was his friend Jason Kliegman’s Bar Mitzvah,
          but he had a feeling this was going to be significantly more memorable.{"\n"}
          {"\n"}As they walked past the last row of tents, they descended into a bustling desert oasis. <Text style={{ fontFamily: "gelasibro-italic" }}>Good heavens.</Text> Beings, dressed in everything from bathing suits to colorful costumes,
          bikinis, and burkas, were spread out across the vast landscape–some by themselves and others in large groups. People were dancing around fire pits, eating at picnic tables, kicking soccer balls across the sand, and praying on rubber mats.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>It’s like a spirit party in the desert. I’m not even going to try and explain this to anyone back home.</Text>
          {"\n"}
          {"\n"}Jake stood there, examining everything his eyes would let him process. He identified what must have been bathroom stations, bike stands, and barbecue pits scattered across the landscape. As he peered further into the distance, he
          could see that other statues were erected throughout the desert. He even spotted people playing a paddle ball-like game. <Text style={{ fontFamily: "gelasibro-italic" }}>That looks fun</Text>. He looked up and noticed a drone flying through
          the air, and off to the right-center of the space, he placed the performance stage. A quarter mile past it, a gated, ridge bound mansion sat atop the Moroccan coastline.{"\n"}
          {"\n"}Zena walked up to the desk of the kiosk and displayed their tickets to a dark-skinned man. His turban was wrapped tightly around his head. He smiled, then directed her to a flag post on their left.{"\n"}
          {"\n"}"Up this way," Zena said.{"\n"}
          {"\n"}They walked side by side through hordes of festival-goers, past the oak effigy, up to a signpost that read: <Text style={{ fontFamily: "gelasibro-italic" }}>Aisle: Mocha Frap.</Text>
          {"\n"}
          {"\n"}They followed Zena up the gravel path, turned right on row thirty, and stopped in front of a medium-sized tent–a small wooden sign on its exterior read: <Text style={{ fontFamily: "gelasibro-italic" }}>Tent Sigma-19</Text>.{"\n"}
          {"\n"}"Here we are." Zena walked up the steps and unzipped the zippered doorway. Jake followed the three of them inside.{"\n"}
          {"\n"}The interior was more extensive than Jake expected, and when he entered, he immediately felt more relaxed. The floor was made of polished wooden panels and scented candles sat burning on a table in the center.{"\n"}
          {"\n"}Two rocking chairs sat in the back, and behind them, on the tarp constructed wall, rested a painting of the ocean. Drapery partitioned bedrooms were positioned on the left and right of the central area, and cloth hung from their
          bannisters to create makeshift doors. As Jake peered inside each room, he could see that each contained a small cot fitted with a sherpa blanket and a small pillow.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Deserts do get cold at night</Text>, he thought.{"\n"}
          {"\n"}"I love it," Zena said.{"\n"}
          {"\n"}"It's a masterpiece," Zimmer blurted.{"\n"}
          {"\n"}Dendro glanced around, then said monotonically, “Looks nice.”{"\n"}
          {"\n"}Zena remarked, "The event tonight is not for five hours. What do you say we change and get in a quick game of KaKĂ?"{"\n"}
          {"\n"}Zimmer rubbed his relatively flat belly. "I could use some exercise."{"\n"}
          {"\n"}Dendro shrugged.{"\n"}
          {"\n"}"Jake?" Zena asked.{"\n"}
          {"\n"}"Is that the paddle game I saw some people playing? I'm in," he responded.{"\n"}
          {"\n"}"Let’s go," Zena yelled.{"\n"}
          {"\n"}They followed her down the path, back to the festival center, and over to the check-in kiosk. The same man they spoke with before handed them four blue paddles and a small pink ball.{"\n"}
          {"\n"}The courts were erected atop the sand by wooden platforms. Zena spotted an unused one a few hundred feet to the left of the giant statue and they headed towards it. She explained to Jake as they stepped onto the asphalt, "KaKĂ is like
          the game–I think it’s called tennis on Earth. The main difference is that there is a small circle painted on the back corners of each baseline, and the court is a bit smaller. If you scream “
          <Text style={{ fontFamily: "gelasibro-italic" }}>KaKĂ”</Text> during a point and hit one of these markings with the ball, you gain <Text style={{ fontFamily: "gelasibro-italic" }}>two</Text> points. If you miss the marking when you call it,
          you <Text style={{ fontFamily: "gelasibro-italic" }}>lose</Text> the game. The rest of the rules are identical. First to six games wins the match, and you must win by two."{"\n"}
          {"\n"}The four of them took positions–Jake and Dendro on one side, Zimmer and Zena on the other. They rallied for a few minutes to warm up. Jake had played tennis in the past, and his KaKĂ strokes were thorough and elegant. When the match
          play started, he whipped his forehand over his shoulder, placing an impressive amount of topspin on the ball. His backhand was reliable, and although it did not have the same power as his forehand, he could place it where he wanted.{"\n"}
          {"\n"}To Jake’s surprise, Dendro was awful. This special operations fighter, who had been put to the test both physically and mentally in ways Jake could not even imagine, had a stiff, awkward swing. The first ball he hit flew thirty feet
          over the court. As Dendro glared at his racket in frustration, Jake laughed and ran to fetch it. Zimmer’s swing was not as poor, but it was still relatively stiff. Zena, however, had a graceful stroke.{"\n"}
          {"\n"}The set was tied two-two when Dendro’s serve flew over the court again (causing him to curse under his breath).{"\n"}
          {"\n"}"Hey Dendro, that looks similar to your Baka-Ball shot from the Lower Palisades!" Zimmer yelled.{"\n"}
          {"\n"}Dendro frowned and let out a sarcastic laugh. He shouted back across the court, "Better than yours was, man."{"\n"}
          {"\n"}A few games later, Jake and Dendro secured the match when Jake whipped a forehand past Zena. She had lunged for it but missed it clean.{"\n"}
          {"\n"}"Good game, fellas," <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Zimmer said as they shook hands at the net.{"\n"}
          {"\n"}Zena looked towards a group of maintenance personnel setting up what looked like tables in the sand. "They are already getting ready for tonight. Let’s hit the showering houses!"{"\n"}
          {"\n"}Over the next hour and a half, the four of them walked back to their tent, showered, and got dressed in their gala attire. Jake wiggled into the black tuxedo pants that Dendro had left on his bed. He buttoned up his white shirt, threw
          on the black jacket, and strapped on the snap-on bowtie that Zimmer had lent him. Then he picked up the silver axe Dendro left on his chair and tucked it into a weapon's holder on the suit's interior.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Fits perfectly</Text>. Dendro said it was better to have it on him just in case, especially now that he had some dojo training. Lastly, he slipped on the shiny black shoes and walked through
          his door.{"\n"}
          {"\n"}Dendro and Zimmer were already dressed and chatting when Jake walked into the main area. They both wore tuxedos, and Zimmer had slicked his thick mane back against his head. They were discussing the toughest physical workouts they’d
          endured in The Forces. Something about a hundred kilogram climb up Mount Kifo, and a fifteen-mile swim across the Nubibus-Gurun Straight.{"\n"}
          {"\n"}"Looking sharp," Zimmer remarked.{"\n"}
          {"\n"}"Thanks," Jake replied.{"\n"}
          {"\n"}Zena walked out of her quarters wearing a sleeveless purple dress; its fabric was encrusted with small, radiating crystals. On her feet were white sandals with straps that wrapped up her legs, almost reaching her knees.{"\n"}
          {"\n"}"Looking elegant," Zimmer said.{"\n"}
          {"\n"}Dendro looked at her admiringly for a moment but did not say anything. Jake did the same.{"\n"}
          {"\n"}"Thank you!" Zena effused. She held out four golden tickets. "Here are your passes for tonight. These were hard to secure. Don’t lose them!"{"\n"}
          {"\n"}They each took one golden voucher from Zena. Jake glanced at the black writing inset on the pass.{"\n"}
          {"\n"}
          <Text style={{ textAlign: "center" }}>1 Entry to The Rudeu Palace</Text>
          {"\n"}
          {"\n"}"Let’s head out. We don’t want to be late," Zena said. The three of them followed her through the zippered door into the desert evening.{"\n"}
          {"\n"}As they stepped onto the sands of the festival center, Jake watched as guests poured out of the countless tent aisles. <Text style={{ fontFamily: "gelasibro-italic" }}>That's a lot of people</Text>. Groups of smartly dressed aliens
          and human beings headed for the dinner tables that had been set up across the landscape. Jake could see that each one had been set with candles, plates of bread and bottles of red and white wines. The hums of food trucks radiated throughout
          the sandy arena as waiters lined up in front of them to pick up appetizer trays. <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder what they're serving</Text>.{"\n"}
          {"\n"}The four of them continued walking towards the palace on the coast. As Earth’s star pushed its way around the planet, glimmers of red-orange light radiated over the horizon.{"\n"}
          {"\n"}They walked past the check-in kiosk and accelerated their gait. Further ahead, Zena spotted a sign that sat in front of a candlelit path. Its contents read: RUDEU PALACE EVENT, VIPS ONLY.{"\n"}
          {"\n"}"This way," she motioned. They followed her onto the candlelit trail and continued walking towards the coast. Jake could see festival workers laboring tirelessly to get the stage ready for the after-dinner event.{"\n"}
          {"\n"}As they neared the palace, Jake noticed a grid of festival-attendees huddled in the sand. The patrons were on their knees, and a tall, robed being with a shaved head, looked to be leading the group in prayer.{"\n"}
          {"\n"}"What is going on over there?" Jake asked.{"\n"}
          {"\n"}"Nightly <GlossaryWord lookup_string="Ldshab" word="Ld'Shab" toggleGlossary={this.props.toggleGlossary} /> meditations. It’s twenty minutes of prayer and twenty minutes of daily reflection," Zena elucidated. "Smoothes out the soul,"
          she added.{"\n"}
          {"\n"}They soon approached a line swelling up in front of the Rudeu Palace. Jake could see the building more clearly. It reminded him of something he'd seen in a French TV show his mom used to watch.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I hated that series,</Text> he thought.{"\n"}
          {"\n"}A stone balcony stretched around the second floor, and above, three turrets were constructed into the roof. They sat perched on top of the building, giving the entire structure the appearance of a miniature castle. Colossal candlelit
          posts were built into the facade next to the entrance archway, and guests were beginning to funnel inside.{"\n"}
          {"\n"}"Let's get in line," Zena said.{"\n"}
          {"\n"}They hustled up to the back of the queue. Zena stood on her tippy toes and looked to the front of the line. "I wonder if Governor Ouardi is inside?"{"\n"}
          {"\n"}Zimmer put his hands through his slicked-back hair. "He must be. A fellow that important is most likely overseeing all the setup of tonight’s affairs. I want to shake his hand and introduce myself."{"\n"}
          {"\n"}A few moments later, the couple in front of them began to shuffle forward. As they moved towards the gated entrance, Jake could see two large men in black suits checking tickets.{"\n"}
          {"\n"}Zimmer slung his arm around Dendro's back. "Just like the good old days, huh, brother? Work during the day and perform our explorations at night? Remember that night on{" "}
          <GlossaryWord lookup_string="Argus" word="Argus" toggleGlossary={this.props.toggleGlossary} />
          ?"{"\n"}
          {"\n"}Dendro shook his head affirmatively, grinning slightly.{"\n"}
          {"\n"}Then Zimmer used his hip to playfully bump Dendro’s side. He reached across Dendro’s chest and held Dendro’s dog tag in his hands. "Can we do a <Text style={{ fontFamily: "gelasibro-italic" }}>tag-switch</Text> like we used to do? To
          bring us good luck on dangerous missions?"{"\n"}
          {"\n"}Dendro hesitated. He looked down at his dog tag as Zimmer held it and continued walking forward.{"\n"}
          {"\n"}"Just for tonight. I swear," Zimmer pleaded.{"\n"}
          {"\n"}"Alright, alright," Dendro said stoically, taking his dog tag off his neck and replacing it with Zimmer's.{"\n"}
          {"\n"}The wolf man’s face glimmered with satisfaction as he tossed the chain over his neck. “Awesome, my man,” Zimmer exclaimed.{"\n"}
          {"\n"}"Tickets out!" the bouncer in the black suit bellowed. Jake held out his golden ticket. The man scanned it, handed it back to him, and then signaled to proceed through the palace gate.{"\n"}
          {"\n"}As they followed the guests through the short courtyard path, they passed marble and stone sculptures of fairies, gargoyles, and lions that were spread out across the grass. They soon reached the main steps, walked underneath the
          large entrance archway, and stepped into the palace lobby.{"\n"}
          {"\n"}The interior of the palace was covered in purple velvet wallpaper. The marble floor was bejeweled with sparkling brown gems. An enormous bronze, antique chandelier hung from the ceiling and a red carpet ran down the central hallway,
          leading up to a sweeping marble staircase that spanned up to the second level of the palace. Further down the hall, past the stairs, Jake could see the ballroom.{"\n"}
          {"\n"}The patrons, though, were not headed for the ballroom just yet–the guest line curved right into the palace dining room. Liveried attendants walked by the line handing out glasses of bubbling champagne from silver trays. They strutted
          in white tuxedos with golden Enlightened Moroccan insignias stitched into their breast pockets.{"\n"}
          {"\n"}Zimmer grabbed a glass and took a generous sip. "That's good stuff," he asserted.{"\n"}
          {"\n"}The guest line began moving into the sprawling dining area. The tables were set up against each other in a square configuration, and three circular tables sat on the far side of the room, apparently to accommodate more people.{"\n"}
          {"\n"}Jake, Zena, Zimmer, and Dendro funneled in and sat down at a table in four seats that faced the center of the room.{"\n"}
          {"\n"}"Perfect view," Zimmer said, as he unfolded a white napkin and placed it on his lap.{"\n"}
          {"\n"}An older human couple dressed in elegant dinner attire sat across from them. Jake smiled at them, and they smiled back.{"\n"}
          {"\n"}"Look, there he is! That must be Governor Ouardi!" Zena exclaimed. She gazed at a man in the center of the room who was chatting with a group of guests. He wore a brown suit and leather shoes, and his hair was combed neatly across his
          head. He stood tall with his chest out, and his hands were clasped around his back.  He had a clean-shaven face, and his elf-like ears pointed away from his head.{"\n"}
          {"\n"}"We can try to chat with him later," Zimmer said.{"\n"}
          {"\n"}"I hope," Zena responded. "Marcus said he is quite friendly."{"\n"}
          {"\n"}When all the patrons had been seated, the waiters came around offering to fill their glasses from a rich selection of wines, cognacs, and freshly squeezed juices. Jake ordered a glass of cucumber juice and was pleasantly surprised
          when he tasted it.{"\n"}
          {"\n"}The appetizers came and went. One was a goose leg stuffed with strawberry jam. Another was a small platter of various cheeses with a side of honey. The third plate came with pastry-wrapped bites of ground lamb which were seasoned with
          Moroccan-style spices, fresh mint and parsley. Jake watched as Dendro and Zimmer inhaled the goose leg first. Both had to use most of their napkins to wipe the jam from their faces. Zena, meanwhile, elegantly chipped away at her cheese
          plate as she kept her eye on the governor from afar.{"\n"}
          {"\n"}After the appetizer trays were scooped from the tables, the liveried attendants came back into the dining room carrying three different dishes on their silver platters. One contained a full roasted pig-on-a-spit that sat on top of
          spiced tomatoes and capers. The second plate carried Moroccan beef tagine with apricots, and the third plate contained grilled grouper fish stuffed with garlic, onions, and coriander–it was served on top of a thin layer of foil to keep it
          extra hot.{"\n"}
          {"\n"}"Uhh. I’ll try the beef, please," Jake said to the waiter. Dendro chose the same. Zimmer selected the roasted pig, and Zena, the stuffed grouper. Jake forked a hearty cube of beef tagine onto his tongue, the spicy meat almost
          instantly falling apart in his mouth. <Text style={{ fontFamily: "gelasibro-italic" }}>This is so good</Text>.{"\n"}
          {"\n"}A short time later, as he continued to eat his entree, Jake couldn't help but eavesdrop on a conversation between two alien men sitting diagonally across from him.{"\n"}
          {"\n"}“Minister Krestine knows what’s best for her people. Parliament has made wretched decisions in the past, but I trust her prevailing strategy,” one of the men said.{"\n"}
          {"\n"}“But, my dear friend, where are the results? The kidnappings continue. Vostluka is cunning. He will place spies underneath our noses. The Viceroys will continue to gain control over The Galaxy’s nuclear energy supply. And have his
          brainwashed followers of{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Thenewdoctrine" word="The New Doctrine" toggleGlossary={this.props.toggleGlossary} />
          </Text>{" "}
          not gotten closer to our borders, <Text style={{ fontFamily: "gelasibro-italic" }}>at least spiritually</Text>?”{"\n"}
          {"\n"}"I don’t know about <Text style={{ fontFamily: "gelasibro-italic" }}>that</Text>. We cannot blame her for <Text style={{ fontFamily: "gelasibro-italic" }}>everything</Text>. And we certainly cannot blame her for Naronia's lack of
          visibility into the Viceroy operations–they hide their business in dark places. Their filth cannot be traced, that is, unless we decide to go deeper into the Venthum controlled regions. Imagine if we placed..."{"\n"}
          {"\n"}A man sitting next to them began speaking too loudly for Jake to continue listening.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What was that about?</Text>
          {"\n"}
          {"\n"}Zimmer tapped him on the shoulder. "You see that chap over there?" He pointed to a rough-faced alien with tremendous green ears and thick braided hair assembled tightly across his crown.{"\n"}
          {"\n"}Jake nodded.{"\n"}
          {"\n"}"That's Timbukko Cheso. He's one of the top ranked racers in our Galaxy's <Text style={{ fontFamily: "gelasibro-italic" }}>Enlightened Racing League</Text>," Zimmer said.{"\n"}
          {"\n"}"That's pretty cool." Jake watched the racing star stand up and turn around to speak to a crowd of guests that had gathered around him. He wore a facetious smile as he greeted them, as if he were receiving them out of obligation only.
          {"\n"}
          {"\n"}"It <Text style={{ fontFamily: "gelasibro-italic" }}>is</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>very</Text> cool," Zimmer added. "I wouldn't mind being him for a few minutes." Zimmer threw back the rest of his red
          wine.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Ting ting.</Text> Governor Ouardi stood in the center of the room, tapping his glass gently with a knife–the room quickly went silent.{"\n"}
          {"\n"}"My distinguished guests, it is with great pride that my staff and I welcome you to this enchanted palace tonight. I will keep this short, as I know everyone here is eager to continue feasting on the delicacies before you."{"\n"}
          {"\n"}The crowd chuckled.{"\n"}
          {"\n"}"We have spent many months preparing for this event, and I hope to have a chance to speak with all of you, even if it's for a short while," Ouardi said.{"\n"}
          {"\n"}The Governor continued to speak for a few minutes about the Enlightened community's growth in Casablanca and his ambitions to continue recruiting more emigrants from The Nestomir.{"\n"}
          {"\n"}He ended his speech five minutes later, "Please, enjoy the evening we have prepared for you! The casino is open, and the main ballroom has two bars for you to enjoy. Dessert will be served by the pool. See you there!"{"\n"}
          {"\n"}"Let’s get to the pool," Zena said. "I want my first pick at the desserts. Maybe we’ll catch Ouardi there as well."{"\n"}
          {"\n"}They got up and followed the crowd through a side door, around the first-floor balcony, to the rear pool deck. Jake could see the rear of the palace sat up against a cliff; the moon hung low in the sky and illuminated a cone of light
          across the ocean waves that were crashing into the rocks below. <Text style={{ fontFamily: "gelasibro-italic" }}>I could use a place like this</Text>, Jake thought. He peered around; waiters were funneling out of another palace door as more
          guests filled into the space.{"\n"}
          {"\n"}"What a ridiculous view! I hope it doesn't get too crowded out here," Zena said as a warm gust of desert wind passed by. "Now, where are those desserts?" She glanced around and soon stopped a waiter carrying a tray filled with
          pastries, cupcakes, and chocolate mousse filled martini glasses.{"\n"}
          {"\n"}Just as Jake chomped down on a chocolate fudge-filled cupcake, an older fellow who appeared to be in his sixties, grabbed Dendro by his shoulder.{"\n"}
          {"\n"}"Dendro, my friend! How are ya?" The aging, blue-skinned man said. His greenish-gray eyes had no irises nor pupils, and his ears were angled like Zena's. The alien man was dressed in what looked like a soldier’s uniform, and some
          impressive looking medals were pinned across his breast pocket.{"\n"}
          {"\n"}Dendro’s eyes lit up. "Oh my, Captain Tango. What brings you here, my old friend?"{"\n"}
          {"\n"}"Brings me here? I’ve been living in Casablanca for ten years. Had to get away from the Naronian chaos. It's a great place for retired folk like me. Besides, the ocean’s much nicer here," Captain Tango answered.{"\n"}
          {"\n"}Dendro let off a small grin. "Remarkable. Zimmer, Jake, Zena, please, meet Captain Bruce Tango, an old friend and the ex-commander of the Solar Forces Ground Elite."{"\n"}
          {"\n"}"It is an honor to meet you, sir," Zena and Zimmer said in unison. They shook his hand, and Jake did the same.{"\n"}
          {"\n"}"The pleasure is all mine," Captain Tango responded. "Beautiful night, isn’t it? And wasn’t that dinner delightful? What brings you all here? <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Business or pleasure?"{"\n"}
          {"\n"}"Business, I'm afraid," Dendro said.{"\n"}
          {"\n"}"Understood," Captain Tango replied. He then reached out and grabbed an orange tart from a passing tray. He took a small bite, raising his eyebrows in approval.{"\n"}
          {"\n"}"And who is this youngling, if I might inquire? A new crew member?" Tango asked.{"\n"}
          {"\n"}"Not exactly. Jake here is helping us out with a few important technical projects. He’ll be headed home soon," Dendro returned.{"\n"}
          {"\n"}"I see," Captain Tango said. He opened his mouth again, as if to ask another question, but hesitated before saying, "Did you know that Dendro and I fought together during the Devinasis Rebellion? Real tough fight. Was glad to have
          Special Ops on our side."{"\n"}
          {"\n"}A respectful grin formed on Dendro's face. "Zimmer here was under my command on Devinasis. You may not remember him."{"\n"}
          {"\n"}Tango looked at Zimmer. "You do look familiar, but there were so many soldiers under my command during those days. It's hard to remember 'em all, I'm afraid."{"\n"}
          {"\n"}"I understand, sir," Zimmer replied.{"\n"}
          {"\n"}Captain Tango swallowed the last morsel of his tart, then said, "Anyways, it has been a pleasure meeting you all. May the Utma bring you good fortune. Now I must be off to find my wife!"{"\n"}
          {"\n"}The four of them nibbled on their desserts as they strutted across the pool deck. Fifteen minutes later, they headed for the Palace Ballroom. When they entered, Jake looked up to find angels, rose gardens, and other ornate artwork
          painted on the ceiling. <Text style={{ fontFamily: "gelasibro-italic" }}>This place looks expensive</Text>. Crowds of human and alien guests sipped on drinks and gossiped amongst each other; most hovered around draped cocktail tables that
          had been set up across the area.{"\n"}
          {"\n"}"Why isn't anyone dancing yet?" Zena asked. She picked up a hot-dog in-a-blanket looking thing from a waiter's tray and gobbled it down as she peered around the space.{"\n"}
          {"\n"}"Good question," Zimmer said. "Too early. Not enough drinks yet," he added.{"\n"}
          {"\n"}"C'mon, let's check out the upstairs," Zena said.{"\n"}
          {"\n"}As they walked out of the ballroom, they passed the casino suite, which was stocked with guests crowded around what looked like alien-roulette tables.{"\n"}
          {"\n"}"I could use some of that," Zimmer said.{"\n"}
          {"\n"}"Not today," Dendro said, disapprovingly.{"\n"}
          {"\n"}They made their way up the marble staircase to the Palace’s second floor.{"\n"}
          {"\n"}Here, a many-doored hallway led out to the second-floor balcony. As Jake walked by the apartments, he saw groups of beings sitting in the Victorian-styled rooms engaged in private conversations.{"\n"}
          {"\n"}As they thrust open the veranda doors, Jake spotted a few couples leaning against the railing, looking out into the desert night. Then they saw a tall brown figure walking towards them.{"\n"}
          {"\n"}"My goodness. It’s him," Zena said, ruffling her jet-black hair. She put her hand up delicately. "Governor Ouardi. I am a friend of Marcus."{"\n"}
          {"\n"}Ouardi turned toward them. "To whom do I owe the pleasure?" He said.{"\n"}
          {"\n"}Zena introduced herself and the three others.{"\n"}
          {"\n"}"Ah! Zena. Yes, I do remember, Marcus, my irreplaceable assistant, telling me about your adventures across the galaxy-you two met on a night out, I remember; it’s a pity he couldn't make it tonight," The Governor responded.{"\n"}
          {"\n"}"Yes, yes, what an interesting person! And thank you so much for the tickets!" Zena bellowed.{"\n"}
          {"\n"}"No difficulty. I am glad Marcus continues to network and bring me interesting contacts," The Governor replied. "So, how are you enjoying tonight?"{"\n"}
          {"\n"}"You and your staff have really outdone themselves," she said. "My friends and I are having a wonderful time. That dinner was superb."{"\n"}
          {"\n"}"Thank you. I'm so glad," the Governor said with a friendly smile. "Forgive me, I did not know that you are also <GlossaryWord lookup_string="Tarvezius" word="Tarvezian" toggleGlossary={this.props.toggleGlossary} /> –where did you
          grow up?"{"\n"}
          {"\n"}"Southern Coastal regions, near Elminhir. In a smaller village called Zatputo," Zena responded.{"\n"}
          {"\n"}"Ah! Not so far from my upbringing in Zeldinis. We may have bumped into each other! But probably not. I’m much older than you," Ouardi said.{"\n"}
          {"\n"}The Governor and Zena chatted for a short time about their Tarvezian upbringings until Dendro butted in, "Governor, what is the sentiment amongst the Casablanca Enlightened...any concerns growing in the community as of late?"{"\n"}
          {"\n"}The Governor straightened his suit jacket, then cleared his throat. "Morale has been high, as you can see, even though we are aware there have been tensions brewing in the galaxy. It is my job as a leader to keep the people calm."
          {"\n"}
          {"\n"}Dendro glanced around the patio, then said quietly, "Have you been in touch with the Naronian embassy?"{"\n"}
          {"\n"}Ouardi brought himself closer to the circle, lowered his voice, and said, "To be honest with you, we know something is up, soldier. A Naronian military exercise gone awry, my embassy contact relayed, but he would not disclose the size
          and significance."{"\n"}
          {"\n"}"Nothing more was said to you?" Dendro asked.{"\n"}
          {"\n"}"No. I know how it must sound, but it is tough to communicate with the embassy effectively nowadays. We do our best in the outback," Ouardi responded. "I will take no actions other than to heighten security in our most important
          places–why, what news do you bring?"{"\n"}
          {"\n"}"We must be on high alert, Governor. These are complicated times. We have witnessed things I’ve not seen before in my lifetime. I wish there was more I could tell you," Dendro uttered.{"\n"}
          {"\n"}The Governor studied Dendro’s face for a moment, then looked down at his watch. "Thank you for doing your job, soldier. Zena, friends, if you will excuse me, I need to check in with my staff. Please, enjoy the rest of your night."
          {"\n"}
          {"\n"}Governor Ouardi disappeared down the balcony.{"\n"}
          {"\n"}"Well, that was interesting," Zena said.{"\n"}
          {"\n"}Zimmer stepped in, "What do you say we take a seat on those couches over there; I wouldn’t mind another drink and a tranquil place to smoke my pipe."{"\n"}
          {"\n"}"I'm up for that," Zena replied.{"\n"}
          {"\n"}In the center of the concrete table was a small fire pit made of purple rocks. When Jake sat down, he felt the warmth of the glittering flames. <Text style={{ fontFamily: "gelasibro-italic" }}>Not a bad place to chill.</Text>
          {"\n"}
          {"\n"}After the waiter left with their drink orders, Zena asked him, "I know we discussed this a bit already, but can you share some thoughts as to how this week has been for you, kid?"{"\n"}
          {"\n"}Dendro and Zimmer stopped their conversation and looked at him.{"\n"}
          {"\n"}Jake rolled up his right sleeve. As he looked down at the three markings, he brushed aside the hair falling over his face. "I’ve learned about so many things. Your world, your beliefs, this thing called code. I’ve fought things that
          weren’t behind a television screen. I’ve seen things I could never have imagined." He paused for a moment and looked upward, then back at Zena. "I feel more eager now for something, but I don't know what it is. I feel lighter. I can’t
          explain it. The learning. Your mentality. Naronian culture. It has helped me see things differently, but I am also desperate to see my mom and brother. It pains me so to think about how concerned they must be about me."{"\n"}
          {"\n"}Dendro said, "I get it, son. I understand you. And I'm glad to hear this experience learning about our culture and learning, in general, may have helped you open your mind a bit. And I admit, I have not been the friendliest of fellas.
          That’s just me. But I want you to know I've enjoyed our time together. What you showed me, us, over this past week, was pure grit. I'm sorry to have put you through all of this."{"\n"}
          {"\n"}Jake wasn't sure what to say, so instead, he nodded. Zena and Zimmer smiled at him.{"\n"}
          {"\n"}The waiter returned, placing a lemonade, two glasses of red wine, and a scotch on the table, then headed back inside. He returned a few moments later carrying four plates of thick whip cream-topped pastries. "Freshly made pumpkin
          cream pies—best on the continent. Compliments of the house." He dropped a few gazelle-shaped chocolates on the table, bowed, and walked down the patio.{"\n"}
          {"\n"}Jake picked up a spoon and munched down on a small slice of his treat. <Text style={{ fontFamily: "gelasibro-italic" }}>This is phenomenally tasty</Text>, he thought.{"\n"}
          {"\n"}Zena ate some pie, then took a generous swig of her red wine. "This <Text style={{ fontFamily: "gelasibro-italic" }}>is</Text> sumptuous. Chocolate in a pumpkin pie? You never know how the simplest things can surprise you."{"\n"}
          {"\n"}"Amen," Zimmer said.{"\n"}
          {"\n"}Dendro nodded.{"\n"}
          {"\n"}The flames on the table jittered as the sound of a muffled explosion radiated from the interior of the palace. A distorted symphony of high-pitched screams followed.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck was that?</Text>
          {"\n"}
          {"\n"}The three of them looked at Dendro, whose eyes lit up, his quadriceps springing upward, and his right arm pulling his golden axe from the interior of his vest. "That didn't sound right. Follow me!" he commanded.{"\n"}
          {"\n"}The four of them sprinted down the balcony in their palace attire. <Text style={{ fontFamily: "gelasibro-italic" }}>What is happening?</Text> Jake was unsure if he should pull out his axe; it pushed against his chest, uncomfortably,
          as he accelerated. As they hit the second floor's interior, they could see guests running out of the Victorian rooms in panic. They raced to the top of the marble staircase and peered over the balcony. Down below, crowds of guests were
          running from the ballroom area, into the lobby. Governor Ouardi was directing people out of the front archway. <Text style={{ fontFamily: "gelasibro-italic" }}>What the...are those dead bodies on the floor?</Text>
          {"\n"}
          {"\n"}Then a glowing mace came into view. And the demonic figure wielding it.{"\n"}
          {"\n"}"Naronian heavens,” Dendro shouted. “That’s a <Text style={{ fontFamily: "gelasibro-italic" }}>Knight of Dieu Khien!</Text> A Vostluka guardian! The fables are true!”{"\n"}
          {"\n"}“I think that is Captain Tango Down there! We must aid him!" Zimmer screamed.{"\n"}
          {"\n"}"I have no weapon!" Zena shouted.{"\n"}
          {"\n"}Dendro scanned across the top floor, then pointed his axe at the two swords hanging inside a glass case on the side wall. "Grab them!"{"\n"}
          {"\n"}Zena nodded, then sprinted towards the glass case.  She jumped up, holding her right elbow outward, her arm smashing through the glass. <Text style={{ fontFamily: "gelasibro-italic" }}>Woah</Text>. Jake watched as shards of material
          scattered across the floor. She hopped up and removed the long blades from the top of the case. "We're good!" Zena yelled as she landed. Her arm was bleeding slightly.{"\n"}
          {"\n"}That’s when Dendro crouched and backflipped over the balcony. Jake watched as the warrior's body flung over the railing in a perfect ball. <Text style={{ fontFamily: "gelasibro-italic" }}>Oh, man</Text>. As Jake peered over the edge
          an instant later, he prayed his friend had landed safely. Dendro had, and he stood there, squatting, for a fraction of a second, as if to slowly re-channel the kinetic energy of the fall.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I wish I could do that</Text>, Jake thought{"\n"}
          {"\n"}He watched as the warrior's axe floated in place above his right shoulder. He then stood up tall, glancing up at them. "Let's go!"{"\n"}
          {"\n"}Zena hustled past Jake. Her bum hit the banister as she gripped onto her new hardware. Then she was sliding down the staircase like a trained ninja. Zimmer was already sprinting down the steps to her left, wielding a carbon fiber axe.
          Jake clenched his teeth as he looked in both directions.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I guess I’m going down here</Text>.{"\n"}
          {"\n"}Jake ripped out his own weapon and followed behind them.{"\n"}
          {"\n"}They stood at the bottom of the staircase, watching the metallic demon circling Captain Tango and two security personnel. A painful shudder ran up his spine.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck is that?</Text> Two curved, spiked horns protruded from the helmet of the ten-foot-tall creature.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They aren’t gonna try to fight that, are they?</Text> The tips of the thing’s black mace, the spiked club of a weapon, glowed violet, and a silver orb, like Dendro’s, hung from its chain. As
          it circled Tango, Jake could see that its metal body armor was adorned with intricate carvings.{"\n"}
          {"\n"}"LEAVE THIS PLACE AT ONCE, YOU VENTHUM ANIMAL!" they heard Captain Tango yell.{"\n"}
          {"\n"}As Jake began to realize that someone was going to have to step in and help, he felt the beef tagine and pumpkin cream pie attempting to negotiate a deal to come back out the same way they came. He was barely able to stifle the
          nauseating impulse.{"\n"}
          {"\n"}"Weapons ready!" <Text style={{ fontFamily: "gelasibro-italic" }}></Text>Dendro commanded.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This can't be real,</Text> Jake thought. He looked on as the metallic creature circled the party. Dendro shouted the command again, and Jake managed to open his fist to let his silver weapon
          hover in position.{"\n"}
          {"\n"}"We will charge on my mark. Jake, stay behind us!" Dendro yelled.{"\n"}
          {"\n"}But then they heard a thunderous roar–one of the guards behind Captain Tango darted forward. <Text style={{ fontFamily: "gelasibro-italic" }}>Is he crazy?</Text> They watched as the man charged ahead holding nothing but a dagger in
          his right hand. <Text style={{ fontFamily: "gelasibro-italic" }}>What can he possibly do?</Text> As the guard streamlined towards the Knight, the creature examined the threat calmly, raising its armored fist.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What is it doing?</Text> Then a couch on the opposite side of the lobby raised off the ground. With the sway of the Knight’s arm, the massive object zipped through the room, heading straight
          for its target. The man turned in confusion, but it was too late, the couch collided with him with deadly impact. Jake heard the crunch. Captain Tango screamed.{"\n"}
          {"\n"}The second guard ran to the side wall and dropped to his knees to examine his dead comrade. He crouched there for a moment, then began to sob. A few moments later, he composed himself, stood up, and charged the attacker in a maddening
          rage, holding his scimitar in his hands. <Text style={{ fontFamily: "gelasibro-italic" }}>Not again</Text>. He lunged awkwardly at the metallic demon, but his move was telegraphed. The creature sidestepped him with ease. The guard's
          momentum carried him involuntarily forward, and the massive mace came down fiercely on the center of his back. Jake heard a terrifying wail and then watched the body fall to the ground. The Knight walked up to the body and locked its gaze
          on the chest of the man. It stood there for a moment, its eyes scanning the fallen guard's upper torso and neck area.{"\n"}
          {"\n"}"We must do something!" Jake yelled. “We must help your friend!”{"\n"}
          {"\n"}That’s when Dendro shouted something in a strange language. The creature turned towards them; the sight of its crimson eyes nearly caused Jake’s knees to buckle, but it then refocused on Captain Tango.{"\n"}
          {"\n"}"Let’s go!" Dendro shouted. His axe hovered in place as he jettisoned towards the enemy.{"\n"}
          {"\n"}They were still twenty feet away from the target when the ex-Ground Command Captain (Captain Tango) charged his metallic foe. He brought his copper axe up high as he sprinted toward the Knight, head-faked left, then brought his weapon
          down swiftly on the creature's protruding left leg. It made no attempt to defend itself. It watched as Tango’s blade ricocheted off its armor, causing a few sparks to fly into the air and a loud pang to traverse through the palace interior.
          The blow had inflicted no damage to the creature.{"\n"}
          {"\n"}As Tango backed away, he examined the edges of his weapon, and then looked at the creature in disbelief. Suddenly, the thing swung its powerful unrestricted arm at Tango’s torso. Its reach was deceptively long. It caught Tango by
          surprise. The plated limb collided with his chest and sent him tumbling across the floor into the front wall. He turned over a few seconds later, groaning loudly.{"\n"}
          {"\n"}Dendro stopped abruptly, standing no more than fifteen feet from the scene. The rest of them ceased their movement. Dendro raised his left hand above his head. He then rotated his wrist counterclockwise to signify to his team to form
          a radius around their foe. As the three of them dashed ahead, Jake observed the battle pattern, and slid into the fighting boundary, although he was positioned a few feet further back than Zena, Zimmer, and Dendro.{"\n"}
          {"\n"}"On my lead!" Dendro bellowed. "Jake, only distract!”{"\n"}
          {"\n"}As they circled the brute, the creature began twirling its mace, as if to taunt them, but there were no facial expressions, just a double-horned helmet, jagged battle armor, and glowing crimson eyes–nothing to make it appear sentient,
          human, or capable of feeling anything. Jake caught sight of the designs on its plated armor more clearly. They were intricate carvings of glyphs, star systems, and other foreign objects. Dendro eyed his three comrades, then shouted, “Stay
          back!" He then jutted forward, flipped, and landed five feet in front of the{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Knightofdiukhien" word="Knight of Diu Khien" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          .{"\n"}
          {"\n"}The creature stopped twirling its mace and focused in on Dendro. Then the Solar Forces warrior darted to his left with his axe held high. He tried to juke and use his speed to create a fortuitous strike angle, but the hulk of metal
          moved as smoothly as he did and was there to meet him.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How could something this heavy move that elegantly?</Text>
          {"\n"}
          {"\n"}A blur of a front flip later, Dendro landed to the right of the creature. He slashed laterally at its torso–but the mace came down to meet Dendro’s axe. To Jake’s surprise, there was no pang, only a vibration that rattled the interior
          of the palace, and the formation of what looked like a small ripple in space itself where the two weapons had made contact.{"\n"}
          {"\n"}Dendro flipped backward until he was safely out of reach of the creature and yelled, "
          <Text style={{ fontFamily: "gelasibro-italic" }}>Venthum scum. Vostluka’s disgrace to life in the galaxy! Why are you so far from your master?!"</Text>
          {"\n"}
          {"\n"}Jake watched the sequence of events unfold. He darted forward a few steps, then stopped abruptly. <Text style={{ fontFamily: "gelasibro-italic" }}>What...what can I do?</Text> To think Dylan Jenkins used to intimidate him.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That thing must weigh a few tons!</Text> He shifted his gaze to Zimmer and Zena, who were rotating around the fighting perimeter deliberating their next move.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Dendro told me to stay back. But I must do something</Text>.{"\n"}
          {"\n"}"Go back to your cracked planet!" Zena shouted. Her blue dress was sparkling underneath the chandelier’s light. She sprung forward, stopping a few feet in front of the creature, wielding two swords in her hands.{"\n"}
          {"\n"}“It's too fast, Zena! Go back!” Dendro shouted, still backpedaling away from the Knight. But Zena pressed forward anyway. She jumped up high, her body rising a few feet above her enemy’s crown, and on the second half of the leap
          brought down her blades in a scissoring motion, but the creature rose its mace upward as it sidestepped away and stopped the blades effortlessly, a shower of blue sparks cascading into the air.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Watch out!</Text>
          {"\n"}
          {"\n"}As she came back down to the ground, it kicked her square in the chest. Zena let out a howl as she flew backward. As the Knight moved towards her, it cocked back its mace, but Dendro and Zimmer sprinted at it from behind.{"\n"}
          {"\n"}"Get away from her, freak!" Zimmer roared, his carbon fiber axe raised high in the air above him. The Knight rotated gracefully and timed its mace impeccably, deflecting Zimmer’s axe, then spun in a supersonic blur, dodging Dendro's
          incoming assault.{"\n"}
          {"\n"}Dendro, surprised by the creature’s astonishing speed, was caught off-balance. That’s when Jake heard Zena yell, even as she lay on the ground–the Knight crouched and swiped Dendro's legs out from under him with its mace. Dendro
          moaned as he spun in the air and landed face up in a pile of broken furniture.{"\n"}
          {"\n"}“Dendro!” Jake yelled. But he still was unsure how to act without getting himself killed.{"\n"}
          {"\n"}As the Knight locked in on the exposed Special Ops warrior, Zimmer took the split-second distraction to slash at the exposed leg of the creature. His blade collided with the armor with a loud{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>clang</Text>. The Knight spun around and tilted its neck towards where it had been hit. Its armor appeared to be just slightly tinged.{"\n"}
          {"\n"}The creature’s eyes locked in on Zimmer.{"\n"}
          {"\n"}“What you got for me?” Zimmer shouted.{"\n"}
          {"\n"}The Knight stuck out its arm, and an oak chest by the front archway rose into the air. Then it dropped its hand and sent the piece of furniture hurling straight for Zimmer; Zimmer dove and got most of his body out of the way, but the
          left edge of the chest smashed into his lower back and sent him tumbling across the marble floor.{"\n"}
          {"\n"}Captain Tango then summoned the strength to pull himself up, though he was bleeding badly from a wound on his chest. “Look here, Venthum coward!” He yelled. The Knight turned towards him.{"\n"}
          {"\n"}As Jake looked on, he brought his axe closer to his breast. He felt gutless.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>My friends need my help</Text>. <Text style={{ fontFamily: "gelasibro-italic" }}>It’s time to act. I have no choice.</Text>
          {"\n"}
          {"\n"}If he could distract the creature, he might buy time for Dendro to get up and aid his comrades. Jake closed his eyes and focused in on his memories training in the dojo.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Initma" word="Initma" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          . He took a few deep breaths and felt slightly calmer. Was the Utma granted power of mind control coming to his aid, or was it his natural ability? Then he thought of <Text style={{ fontFamily: "gelasibro-italic" }}>Acelera One</Text>,{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            <GlossaryWord lookup_string="Theacceleratedparry" word="The Accelerated Parry" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          . Jake looked at his axe, then at his grounded comrades and something came over him–Jake sprinted for the creature. His intention was not to fight it, just to distract it.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I can get out of its way in time</Text>, Jake thought.{"\n"}
          {"\n"}Captain Tango yelled as Jake ran at The Knight. Then Jake envisioned himself darting at a forty-five-degree angle with superhuman speed—<Text style={{ fontFamily: "gelasibro-italic" }}>Acelera One</Text>—and he did. He entered a
          timeless blur and appeared a few feet to his right an instant later…but the move served no purpose; he was still too far away from the metallic demon. The Knight raised its arm, and Jake’s weapon flew straight from his hands and crashed
          against the back wall. <Text style={{ fontFamily: "gelasibro-italic" }}>Oh, jeez</Text>. He looked at his empty palm. <Text style={{ fontFamily: "gelasibro-italic" }}>Fail</Text>.{"\n"}
          {"\n"}“Get out of the way, kid!” Dendro yelled.{"\n"}
          {"\n"}Jake saw the creature cock back its weapon. He switched directions by pushing off the floor and springing backward, just missing the violent swipe of the spiked mace. He had seen its shadow move across the floor and had heard the air{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>whoosh</Text> behind him.{"\n"}
          {"\n"}As Zena, Dendro, and Zimmer struggled to get up, Captain Tango charged the beast.{"\n"}
          {"\n"}"Wait!" They yelled in unison.{"\n"}
          {"\n"}The Ground Command Captain of forty years could not suppress his hatred for the enemy. He sprinted and cocked back his axe, running fearlessly towards the Knight of Diu Khien. The creature sensed the movement and turned towards him,
          then did something unexpected; it let go of its mace, which remained hovering by its armored shoulder. When Tango was only a few feet away, the Knight reached out quickly, its giant hand closing around the ex-captain's neck; it had no
          concern for Tango's axe. Tango swung his weapon awkwardly as he rose into the air, but his offensive incurred no damage. The creature slowly pried away Tango's weapon with its other hand. “GET YOUR FILTHY VENTHUM HANDS OFF ME!” Tango
          roared, as he struggled to free himself from the Knights grip.{"\n"}
          {"\n"}The Knight appeared to examine him for a moment. There was a slight pause, then it cocked back Tango, and swung him right with tremendous force, catapulting his body into the front wall. It was done with such power that his figure was
          nearly invisible as it traveled through the air. An instant later, Tango’s body fell to the ground. Jake could hear Zena scream.{"\n"}
          {"\n"}Dendro, Zimmer, and Zena had now gotten back up on their feet, each with minor injuries to various places on their bodies.{"\n"}
          {"\n"}When Zimmer ran up to Tango’s lifeless body, Dendro shouted, "It is no use. He is gone! We must get outside! It’s our best chance!” Dendro peered upward at the chandelier hanging from the ceiling.{"\n"}
          {"\n"}Dendro threw his axe at the patch of crystal light. The weapon came back down like a boomerang and the chandelier with it.{"\n"}
          {"\n"}The light fixture fell, heading straight for the monster, but it stepped out of its path at the last instant. It bought them just enough time to run.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Outside!</Text> Dendro hollered. They followed him through the palace entrance, across the sculpture-filled courtyard, and into the desert landscape, stepping around the lifeless bodies of
          some unfortunate guests.{"\n"}
          {"\n"}They soon stood in the desert sands, facing the palace, waiting for the monster to reappear. Moments later, the creature shattered through the left window, its mace glowing a bright violet.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Holy crap.</Text>
          {"\n"}
          {"\n"}"Back in position!" Dendro hollered.{"\n"}
          {"\n"}They formed a line as they waited for the knight to step through the gate. Then Dendro catapulted his axe at his foe. The weapon cut through the air, speeding up on his opponent in an instant, but it was smashed off its course by the
          glowing violet mace. Jake followed the golden axe through the air as it circled back to Dendro.{"\n"}
          {"\n"}As the Knight approached, Dendro waited a few moments, then charged, and three front flips later, the mighty golden axe met the mace head-on. Dendro ripped off his suit jacket and tossed it in the sand, then began to revolve around
          the creature. He worked in defensive and offensive move-combos that he had developed over decades of Ld'Shab training. Each flip, spin, juke, cut, elbow-strike, accelerated parry, and boomerang-ing slash of the axe enabled him to apply
          pressure to the creature.{"\n"}
          {"\n"}The Knight struggled to dodge some of Dendro’s strikes, but Dendro still could not exert critical damage to his foe. The Knight's rapid movements came so quickly, and with such geometries and force, Dendro had to spend more time
          backpedaling and implementing complex blocks than playing offense. They continued to exchange sparks for a few more moments.{"\n"}
          {"\n"}Jake stood there, weaponless.{"\n"}
          {"\n"}Then Dendro turned back towards them and sprinted. He yelled, “We will attack in unison!”{"\n"}
          {"\n"}They formed a line. But as the Knight approached, it ripped something off its belt and tossed it towards them.{"\n"}
          {"\n"}“STUN GRENADE!” Dendro hollered. “GET DOWN!”{"\n"}
          {"\n"}The four of them turned, diving into the sand. An instant later, a plume of smoke and fine particulates mushroomed into the air–a small explosion had rocked the earth. When Jake opened his eyes, he saw that his arm was bleeding
          slightly. <Text style={{ fontFamily: "gelasibro-italic" }}>Are you serious? A grenade?</Text>
          {"\n"}
          {"\n"}Then he heard Zimmer. The wolf man had apparently not taken the brunt of the blast. He was already standing up, eyeballing the knight, who was now trekking towards them. Zena and Dendro were still struggling to pull themselves up.
          {"\n"}
          {"\n"}"Piece of metallic junk! Can't be that hard!" Zimmer roared. He sprung forwards, his powerful legs cutting through the sand, his black axe held up high. Then he jump-stopped and executed something resembling a triple-axle spin. Zimmer
          revolved laterally through the air, landing just a few feet in front of his enemy.{"\n"}
          {"\n"}"I can take you! Vostluka scum!" Zimmer roared. He lunged forward, swinging a lightning-fast strike at his enemy's torso.{"\n"}
          {"\n"}The knight backed up awkwardly, apparently not expecting the aggression of Zimmer’s onslaught. There were a few quick slashes of Zimmer’s blade, and then one puissant strike pushed the mace's defense back further than usual.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>He can move like Dendro</Text>. There was a loud grating noise, Zimmer’s axe made contact with its chest armor, causing a stream of yellow sparks to zip into the air.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Wait, what was that?</Text> An object had appeared to fall from the creature’s body when the axe had scraped its chest plate.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Did anyone see that?</Text>
          {"\n"}
          {"\n"}The knight backed up, as if to regain its composure (apparently it had not noticed the object fall from its breast). Then it knelt on the sand and went still. <Text style={{ fontFamily: "gelasibro-italic" }}>Why is it kneeling?</Text>{" "}
          Zimmer charged, but the creature did something Zimmer did not expect: using a quick side-arm motion, it flung its mace at Zimmer’s fists. Before Zimmer could follow the weapon through the air, it smacked his axe from his grip, sending it
          sailing across the sand. The mace boomeranged back into the Knight’s hand. <Text style={{ fontFamily: "gelasibro-italic" }}>Oh, no</Text>.{"\n"}
          {"\n"}Zimmer was dumbfounded. The Knight stood up, approached him slowly, then grabbed him by the throat, raising him above the ground.{"\n"}
          {"\n"}“Drop him!” Zena and Dendro shouted as they charged.{"\n"}
          {"\n"}Jake stood there watching. Zimmer looked more like a wolf pup, than a wolf, in the Knight of Diu Khien’s grip. It brought him closer. <Text style={{ fontFamily: "gelasibro-italic" }}>Is it looking at his dog tag?</Text>
          {"\n"}
          {"\n"}The Knight positioned its mace by its side as Dendro and Zena came at it with their acrobatic offensive. It parried their blows singlehandedly, spinning gracefully on its feet, its gaze still on Zimmer’s chain. After defending off the
          incoming series of blows, it tucked Zimmer under its left arm and let out a high-pitched whistle.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck?</Text>
          {"\n"}
          {"\n"}A hover-board like object appeared thirty feet away. Everyone turned. Then the Knight ran surprisingly fast for the floating board, its heavy legs pushing heaps of sand into the air. Before Dendro or Zena had time to react, the Knight
          had gotten too far out ahead of them. A few moments later, it jumped onto the object, and began to accelerate.{"\n"}
          {"\n"}Dendro screamed as he sprinted for it, but it was moving too fast. A few strides later, he stopped, and watched the Knight and Zimmer zoom into the night. Zena stood beside him, panting. “Where is it taking him!?”{"\n"}
          {"\n"}“I don’t know,” Dendro muttered.{"\n"}
          {"\n"}“We must do something!” Zena yelled. But there was nowhere to go. No vehicles or ships nearby.{"\n"}
          {"\n"}A few moments later, the three of them watched as the outline of a sleek ship lifted off into the night sky. Red lights cut through the atmosphere as the Venthum cruiser disappeared behind the clouds.{"\n"}
          {"\n"}"What has just happened?" Dendro exclaimed. He dropped to his knees, then he put his hands in the sand and leaned over. "What is that?" He asked a short while later. He was looking at a thin object in the sand next to him.{"\n"}
          {"\n"}Jake jogged up to them. "I saw the Knight drop it. I mean...when Zimmer's axe hit it. I saw it fall," Jake said.{"\n"}
          {"\n"}Dendro looked at him curiously, then stood up, and walked up to the object. He picked it up. “What is this?” He asked as he held out a small, silver disc. “This is interesting,” he uttered.
        </Text>
      </View>
    );
  }
}
