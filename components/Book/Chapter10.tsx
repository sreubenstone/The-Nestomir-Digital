import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../Other/Stylesheet";
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

export default class Chapter10 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 10</Text>
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
          "Make sure you dress suitably. We must look sharp. And don’t take a long shower, kid," Dendro shouted as Jake shuffled down the hall.{"\n"}
          {"\n"}Jake found a towel in the hallway closet, hopped in the shower, then headed back into his room. He scanned through the closet full of clothing that was all exactly his size. A sharp-looking gray suit caught his eye.{"\n"}
          {"\n"}Two hard knocks banged on his door. "We have to go in five minutes," the Naronian warrior grumbled.{"\n"}
          {"\n"}Jake threw on a fresh pair of underwear, a white dress shirt, and black dress socks, then pulled the suit off the hanger and put it on. He tried to put on a narrow navy tie, but he failed miserably. “Crud,” Jake muttered. He combed
          his hair to the side, then looked at the orb necklace lying on his desk. <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe I’ll put it on.</Text> He threw it over his neck, tucked it under his dress shirt, and walked into the living
          room.{"\n"}
          {"\n"}"Looking sharp," Dendro said. The warrior was fixing his man bun in the mirror, gently patting it down on each side. He had a black suit on that was a bit too small for him and shiny black shoes. A moment later, after fixing his
          precious locks, he threw a black San Diego Padres baseball cap over his head, and tucked his ears underneath it, then turned around to face Jake. “I’m ready to go,” he said. The bump from the shoulder bandage stuck out quite noticeably.
          {"\n"}
          {"\n"}“Dendro, I need help with this tie,” Jake pleaded.{"\n"}
          {"\n"}Dendro signaled for him to come in front of the mirror. He reached his thick Gobhrahim hands around Jake’s neck. “Haven’t done this in a while, not since a Special Ops mission on{" "}
          <GlossaryWord lookup_string="Argus" word="Argus" toggleGlossary={this.props.toggleGlossary} />. Black tie affair.” He fumbled with the tie for a few moments, then finally made a perfect knot around Jake’s neck. “There you go,” Dendro said
          proudly.{"\n"}
          {"\n"}Jake looked in the mirror. He looked better than he thought he would. He fixed his collar and patted down the side of his hair.{"\n"}
          {"\n"}“Let’s go,” Dendro uttered. “Don’t want to be late.”{"\n"}
          {"\n"}Jake followed Dendro south as the sun dipped below the horizon. The evening air was cool as they walked past street vendors, bar patrons and restaurant goers, couples, teenagers, restaurants, cabarets, and wine bars. The pink lights
          of the neon restaurant signs obscured Jake’s vision and the pulsating Moroccan music emanating from nearby bars reminded him he was not in North America.{"\n"}
          {"\n"}Dendro turned onto a side street that was illuminated by street lanterns. More neon lights were up ahead, and Jake heard the thumping of dance music. Apparently, there was some serious action at the end of the block.{"\n"}
          {"\n"}A series of bars lined both sides of the street. Jake could see, through the open windows, patrons sitting at different countertops and tables eating, laughing, and drinking.{"\n"}
          {"\n"}They approached another bar with an outdoor seating area set up on the street. On top of the building was a glowing white sign that, in thick black letters, read: <Text style={{ fontFamily: "gelasibro-italic" }}>Cocktail Lounge</Text>
          . Dendro walked past the crowded outdoor seating area and continued down a small flight of steps which led into the indoor part of the venue.{"\n"}
          {"\n"}They stood on top of a shiny black marble floor, staring into a dimly lit room. The bar was directly to their left, and a few people sat on red velvet bar stools speaking to one another inaudibly. Jake watched curiously as a slender
          blonde woman giggled loudly as she spoke with a man dressed in a dark suit. The rest of the room was lined with red velvet couches.{"\n"}
          {"\n"}“Follow me.” Dendro walked to the back of the room and turned right at the restroom sign. They walked past the bathrooms and approached another door at the end of the hall. Jake recognized the silver plate, partitioned into thirds
          with the three alien glyphs, above the peephole.{"\n"}
          {"\n"}Dendro rolled up his sleeve, tapped down on a few numerical keys on his Lithium Radar screen, and then clamped down on the bronze door handle. There was a high-pitched beep followed by the sound of an air lock opening. The door budged
          open, and they stepped inside a tiny room with a black spiral staircase leading down to another floor.{"\n"}
          {"\n"}Jake nervously walked down the staircase as the door locked behind them. He ducked down, to protect his head from the curving metal stairs above him, and then twirled around down to the bottom, hitting the ground level where he found
          himself staring at a picture of Frank Sinatra smoking a cigarette.{"\n"}
          {"\n"}The room was smokey and smelled of whiskey, Jasmine tea, and tobacco. Polished black and white marble floors extended through the space and crystal chandeliers were evenly spaced across the ceiling. A ventilation duct zigzagged in
          between them. Patrons sat on antique leather couches conversing, drinking and smoking–there was so much smoke in the air it was hard to make out the faces.{"\n"}
          {"\n"}As the smoky haze dissipated from a table to his right, Jake could see a man wearing thick goggles, but where the lenses should have been there was solid material with glowing alien markings in the center.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Is that a man?</Text>
          {"\n"}
          {"\n"}His skin was charcoal grey and his shoulders were unusually wide. He noticed a few other beings next to him that took on a similar appearance. They drank an amber liquid from tall crystal glasses as they spoke to one another. As the
          room’s visibility improved, Jake saw more alien figures. A male and female couple with entirely light blue skin sat next to each other on one couch. Their ears were pointy, elf-like, and Jake was stunned to see that these two creatures had
          no pupils at all. <Text style={{ fontFamily: "gelasibro-italic" }}>OMG.</Text> As he glanced across the space, he got the feeling this was not a standard Moroccan bar, but more of some kind of secret alien lounge.{"\n"}
          {"\n"}A few of the alien patrons turned towards Jake, examined him, then turned away. As Jake tried to make sense of the bizarre scene, Dendro scanned the room. He locked onto a table in the back, took off his cap, and walked ahead. They
          passed tables with more goggle-eyed and elf aliens, then passed a wall filled with Renaissance and Baroque art, before arriving at a circular leather booth with two beings sitting inside of it.{"\n"}
          {"\n"}"DENDRO! My friend. Mi amigo. Mi compadre! Brother! Come here!" A wolf-man-like creature shot up from the table. He grabbed Dendro forcefully and gave him a firm embrace.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That looks like a</Text> werewolf <Text style={{ fontFamily: "gelasibro-italic" }}>crossed with a man</Text>. As the creature’s intimidatingly thick arms wrapped around Dendro, Jake could see
          the wolf-man’s neck bulging with thick veins and striated muscle. <Text style={{ fontFamily: "gelasibro-italic" }}>That dude is really strong</Text>. The wolf-man also had a black snout. It had black and white fur wrapped around its mouth,
          wolf-like nose, and eyes. The rest of his body had human-like skin, but Jake noticed that his arms had streaks of extremely thick white and gray hair. Then Jake saw the markings on his forearms.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Who is this guy?</Text> The beast of a man wore tan military boots, camouflage pants, a tight white shirt that brought out his pecs, and a diamond-encrusted dog tag, as well as a silver orb
          on a separate chain. Jake also caught sight of some kind of bronze weapon on his belt line.{"\n"}
          {"\n"}"And is this your companion?" the wolf-man exclaimed, slightly slurring his speech. He took a step towards Jake and stuck out his thick forearm. “The name’s Zimmer. I’m an old buddy of Dendro's.”{"\n"}
          {"\n"}"Jake. Jake Addison," Jake replied.{"\n"}
          {"\n"}As Zimmer stood near him, Jake inhaled the scents of wine and cologne. The wolf-man was taller than Dendro and much thicker. He grinned at Jake.{"\n"}
          {"\n"}"He's great, Dendro! I like the suit on him. Looks just like you buddy! Just needs a little more muscle on him but not to worry, he's got time!"{"\n"}
          {"\n"}"We don’t have that much time,” Dendro groaned.{"\n"}
          {"\n"}“Isn’t that always the case?” Zimmer replied. He grinned, examined the two of them, and then said, drunkenly: "Sit down, sit down, let us grab a drink and relax. And please allow me to introduce you to my close confidant and business
          partner, Zena.”{"\n"}
          {"\n"}A slender young woman with jet black hair, dark skin, and penetrating purplish-blue eyes, wearing a faint smile stuck out her hand. She greeted Dendro. As Jake met her hand with his own, he studied her curiously. "Wait, I know you! I
          saw you at the mosque! In the city!”{"\n"}
          {"\n"}"Yes, yes. Correct,” Zimmer interjected. He pointed at Jake and looked at Dendro. “He has good eyes, this one.” He turned back to Jake. “We had to follow you, for your own protection, lad. There is no safe place at the moment. Our
          enemy has far reaching eyes and an abundance of resources, I’m afraid. We can’t be too careful.”{"\n"}
          {"\n"}The four of them sat down in the circular booth.{"\n"}
          {"\n"}“And who is your enemy?” Dendro asked.{"\n"}
          {"\n"}“The same as it's always been. We fight on the same side, brother,” Zimmer said.{"\n"}
          {"\n"}Dendro glanced at him impassively.{"\n"}
          {"\n"}"So you were following me?" Jake asked.{"\n"}
          {"\n"}"Yes. We were protecting you, if that’s what you’re asking," Zimmer said. He took a sip of his brown drink, then smiled, wolfishly.{"\n"}
          {"\n"}"If you say so," Jake blurted back.{"\n"}
          {"\n"}“We were doing it for your own good,” Zena said. She held up her glass, as if to make a toast, smiled brightly, then took a swig of her drink.{"\n"}
          {"\n"}A moment later, Jake watched as the mysterious woman moved her hands through her hair. Jake was astonished. <Text style={{ fontFamily: "gelasibro-italic" }}>She has pointed ears! My goodness, she’s one of them!</Text> She rested her
          head against the top of the booth and continued to sip on her brown drink. She appeared bored or distracted by something; her eyes were tracing around the bar and as Jake continued to glance at her he noticed his heart was beating a little
          faster than normal.{"\n"}
          {"\n"}"Jake, there's a lot we have to catch you up on, but now, please oblige me with the ability to catch up with my dear old friend, Dendro," Zimmer said. He grinned again, exposing what appeared to be filed down canines, then hit Dendro
          with a playful punch in Dendro’s bad shoulder.{"\n"}
          {"\n"}“Ow!” Dendro grunted.{"\n"}
          {"\n"}"Sorry, brother, I forgot," Zimmer said.{"\n"}
          {"\n"}“Enough of the small talk. How did I get here?” Dendro rasped.{"\n"}
          {"\n"}Dendro’s old friend stuck up his hand. “One moment. At least let me order you drinks. It’s been too long.” He proceeded to take out a thick, stubby cigar, and lit it with matches on the table. He blew a few smoke rings in the air,
          then signaled for the waiter to come over.{"\n"}
          {"\n"}"Four whiskeys please, fine sir. Your best stuff...," Zimmer began ordering, but Dendro stopped him, and nodded his head at Jake. Zimmer glanced at Jake. "Right, right, he's a youngin’. Well, make it three whiskeys then, and a Coke
          with lemon," Zimmer said. “Gotta love that lemon, kid!” The waiter nodded and walked towards the bar.{"\n"}
          {"\n"}Zimmer tossed back the rest of his whiskey. "We have to travel back five standard years to make sense of any of this.” He ran his hands through his slicked back silver hair. “It was five years ago when I entered what I like to call my{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>exploratory</Text> days...the days after I abruptly left the Forces. It was a five-year stint that started off with me bouncing across under-explored regions of The Nestomir,” Zimmer said.
          {"\n"}
          {"\n"}Dendro rolled his eyes.{"\n"}
          {"\n"}Zimmer straightened his back against the booth, then took a few more puffs of his cigar—white exhaust streamed out of his nostrils as his hands came together outstretched in front of him, forming a triangle. “You see I had heard many
          stories while conducting outback missions in the Forces...stories about Indo-One—the under-explored, under-regulated, tropical continent of a planet in our native solar system,{" "}
          <GlossaryWord lookup_string="Cyprusa" word="Cyprus-A" toggleGlossary={this.props.toggleGlossary} />. I listened to men talk about its lush forests, white sandy beaches, and crystal clear waters, and most importantly its treasure chest of
          exportable goods. As I became more and more frustrated with the Force's leadership, I envisioned quitting my post and running my own operation—my own business. One day my imagination got the best of me, and I left The Forces, without
          explanation—I hope one day my brothers in arms can forgive me—and I embarked on a long journey to locate goods I could transport off-planet, either legally, or, let’s say, via my own methods.”{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>So Zimmer is a Solar Forces operative turned smuggler?</Text> Jake thought.{"\n"}
          {"\n"}“After exploring various islands and continents in <GlossaryWord lookup_string="Starsystema" word="Star System A" toggleGlossary={this.props.toggleGlossary} />, with no luck, I realized it was time to finally make my way to{" "}
          <GlossaryWord lookup_string="Indoone" word="Indo-One" toggleGlossary={this.props.toggleGlossary} />. As I inquired further, through the help of some network contacts, I learned more and more about Jasmine Tea, the highly coveted crop that
          can only be grown in an Indo-One climate. Jasmine Tea has some unique properties, one being that it has an unusually high grade of caffeine, making it a highly coveted commodity in the galaxy.” Zimmer cleared his throat. “So I put together
          a crew....an elite one. We headed to the island continent on my stealthy Vortex Sail One and we landed in a small village named Kava. The plan was for each of us to travel separately across different continental agricultural routes to learn
          as much as we could on the ground about the opportunities and secrets of Indo-One. I took the southwestern seafront, a stretch of one hundred square miles southwest of the Kava village. I spent days traveling to local towns on my motorbike,
          scouting the terrain and learning whatever I could about the, let's call it, economic opportunities."{"\n"}
          {"\n"}The waiter placed three whiskeys and a diet coke (with lemon) on the table.{"\n"}
          {"\n"}"I soon found myself enjoying the island-continent. In the mornings I worked, but in the afternoon I explored the beaches, food, and other delicacies of the island. I kept in touch with my team over the long radio. Each of us seemed
          to be on our own little adventure enjoying the mystical continent. We agreed to meet back up in four weeks. But a month later I was in love, and not just with the land, but with a woman. A local waitress named Kasandra. I ended up moving
          into her beach hut. We spent our nights building campfires on the beach drinking Cypruni Octopus Soup. I learned more about the region, and I continued to build my network."{"\n"}
          {"\n"}Jake, Zena, and Dendro remained entranced by Zimmer's story.{"\n"}
          {"\n"}"A short time later, her two younger brothers walked into our hut. Juelo was twenty-two and Jithin was eighteen. Kasandra told me they ran errands for a local businessman on the island. The two boys mentioned to me that night that he
          was involved in a few Indo-One related enterprises and lived in a private beach house north of our hut."{"\n"}
          {"\n"}Zimmer took another quick puff of his cigar. His hairline was so low his wolfish widow's peak nearly came down to the bridge of his nose.{"\n"}
          {"\n"}“I was intrigued, and I decided to ask for an introduction. They were hesitant initially, but a few days later, they obliged and a week after that, I set out with them on their journey back to the man's headquarters. After riding for
          nearly eight hours, we exited the forest path onto a coastal road. We rode on for some time as the thick forest receded away from the coast. After riding next to the waves, I spotted a rock-bridge, jutting out into the sea. It led to what
          had appeared to be a beach house suspended above the water.”{"\n"}
          {"\n"}"That's his spot," Juelo said. "Stays out here all alone, running things from behind the scenes."{"\n"}
          {"\n"}"We headed down the rocky bridge on-foot, and a short time later I was shaking hands with the Cypruni man who went by Bonjetti. The two brothers vouched for me. Then I asked him if we could speak privately. He obliged after pouring
          himself a cup of Indo-One coffee without offering me any. We walked to the far side of the beach house, around a small wooden balcony that was suspended over the ocean. I stared into a clear sky as I told him about my military experience
          and agricultural ambitions. We spoke of Blue Jasmine, the most elite Jasmine Tea crop, whose seeds are nearly impossible to find or grow. I spoke of my team's needs, my financial forecasts, and how my group's military skills would be an
          invaluable asset to a new operation. He listened and didn't say a word as he looked out into the water.{"\n"}
          {"\n"}“Then he turned around and said: <Text style={{ fontFamily: "gelasibro-italic" }}>Sixty-Forty</Text>.{"\n"}
          {"\n"}"<Text style={{ fontFamily: "gelasibro-italic" }}>Fifty-fifty</Text>, I said back.{"\n"}
          {"\n"}"He stuck out his hand and I shook it."{"\n"}
          {"\n"}"That was the beginning of a fruitful business relationship. He provided the necessary infrastructure and network to build a successful operation. He built us temporary housing, cabins, bathrooms, and showers for my men. We farmed the
          land and disguised it as Cyprus Banana-vine, a popular crop already being farmed in various parts of the continent. But it was not Banana. It was Blue Jasmine. He brought his men to help cut down the forest and my team brought the
          logistical expertise and the science. We had two thousand acres of irrigated land. Every three months our ships were escorted out as official military vehicles. We handled distribution. They helped with fuel. Profits came back and we div’d
          them up. Blue Jasmine grew better on Cyprus-A, it just did."{"\n"}
          {"\n"}"We ran a lucrative operation for five years. Sadly, two years into the undertaking, my girlfriend, Kasandra, finally made the decision to take a maître d job on{" "}
          <GlossaryWord lookup_string="Tarvezius" word="Tarvezius" toggleGlossary={this.props.toggleGlossary} />. The job enabled her to pursue her dream of becoming an{" "}
          <GlossaryWord lookup_string="Ldshab" word="Ld'Shab" toggleGlossary={this.props.toggleGlossary} /> healer. She said she wasn’t going to make the mistake of entering a long-distance relationship. She said I was a special part of her life, but
          her dream was to heal people. One day she kissed me hard on the cheek, said goodbye and left our beach hut with one bag on her shoulder, and that was it."{"\n"}
          {"\n"}"I focused more and more on business to take my mind off her. And that focus paid off because the business began to thrive. We built a well-oiled machine. Life was good. For nearly five years my men and I successfully managed the
          operations. And during that time, on a business trip to Naronia, I met Zena, who became a critical part of our operation."{"\n"}
          {"\n"}Zena raised her glass again, smiling.{"\n"}
          {"\n"}“But about ten months ago, I received a terse message from Bonjetti. He asked me to meet him for drinks in a quiet bar, on the coast, called Copacabana, which lay in between Kasandra’s old village and our farming operation by
          Bonjetti's beach house. When I arrived, Bonjetti looked very uneasy. For five years, I knew him to be strong-minded and calm, but he looked distressed.{"\n"}
          {"\n"}"We have to shut this entire thing down," he said gloomily. "Cyprus Administrative Forces are clamping down on export restrictions and the legislature's "lenient agricultural" practices. My contact in the Cyprus government told me we
          had half a month to shut it down and they would impose a 700,000 Naronian Kroner on us.” He grimaced and pounded another drink.{"\n"}
          {"\n"}"We argued for a while. It was painful. I had trusted him, but he had not understood the island as well as I had thought. He had seemed like such a pro, and someone respected so dearly on the island, but I had overestimated him. He
          told me there were no other options. We had to pay the fine, take the earnings we had left, and lay low for a while. But he did share one additional item of news that night as well, and one essential to the understanding of this story.”
          {"\n"}
          {"\n"}“He looked at me with bloodshot eyes and said: ‘A trusted mercenary contact of mine mentioned something he shouldn't have in front of me...and I know who you fight for and where you come from. I figured this is the least I can do
          after what's transpired. There is going to be an <Text style={{ fontFamily: "gelasibro-italic" }}>ambush</Text>. An <Text style={{ fontFamily: "gelasibro-italic" }}>ambush</Text> in{" "}
          <GlossaryWord lookup_string="Thelarhadianasteroidbelt" word="The Larhadian Asteroid Belt" toggleGlossary={this.props.toggleGlossary} />. They are going to dupe the Naronian forces with a small Recon Legion, but it's going to be the biggest
          ambush in modern history. Delpher's day.’"{"\n"}
          {"\n"}"That was all he knew. I asked him about the credibility of his source, but he would not give me any names. From the look in his eye, and the way he said it, I knew he was being truthful. We sat there drinking and smoking for a while.
          I thought about you, Dendro, and my team. I knew I had to do something, and Delpher’s day was only a few weeks away. We sat there for some time.  I argued with Bonjetti that there were still ways to salvage our operation, but once we
          scrutinized every viable option, and it was clear that those ideas were flawed, I ultimately gave in. We then reminisced about the past five years we had shared together. The memories. The successes. Eventually we shook hands and left. You
          see Bonjetti had been critical to everything we were doing, and now we had two weeks to shut the whole thing down. And so we did.”{"\n"}
          {"\n"}“During that shutdown period, I hit up all my contacts. I desperately tried to see if any business opportunities were emerging on the horizon–I no longer saw use in staying on an island-continent that could no longer bear the fruit I
          needed, and none of my men did either. We planned on leaving once the shutdown was complete. And at night, I stayed up thinking about how I could possibly help The Naronian Forces. I knew I was going to have to do something based on the
          intel I received from Bonjetti.”{"\n"}
          {"\n"}“A few days into the shutdown period, and after much persistence, I received word that a venerated agricultural contact had finally agreed to meet me...on Earth of all places...only a few hours after the end of Delpher's Day, which
          was fast approaching. And that time slot was...I quote...a <Text style={{ fontFamily: "gelasibro-italic" }}>take it or leave it</Text> scenario. As is usual in life, nothing is ever simple, so I was forced to generate the best plan I could.
          One day sitting on the beach I made my decision.{"\n"}
          {"\n"}A few weeks later, the shutdown was complete. I had a goodbye breakfast with my men, then headed for the spaceport with nothing more than a suitcase. I had my freighter, the{" "}
          <GlossaryWord lookup_string="Fsgravis" word="FS Gravis" toggleGlossary={this.props.toggleGlossary} />, parked in a hanger in North Kava–bought her eighteen months back with my earnings...she made it easier for our squad to transport heavy
          equipment and supplies across the galaxy. I recited a little goodbye prayer before I fired her up. Then I ascended into Indo-One's crisp sky, looked back just once to take in the land I had come to love, then headed for the fight.”{"\n"}
          {"\n"}“But I got to The Belt too late; it appeared that you got hit a little earlier than expected. As I stared around The Larhadian expanse, it looked as though a cyclone from hell had been agitated, entered our dimension, then set out to
          destroy all life in its path. Ships had been transformed into smoldering carcasses of molten metal, and there seemed to be more bodies, debris, and blood floating around than asteroids. I pressed on, in search of life, maneuvering the
          freighter around for hours. I even turned on our life-homing beacon, but there was nothing but death and destruction, and no sign of the enemy.”{"\n"}
          {"\n"}“But then, after a few more hours of a hopeless hunt, I saw what looked like a Sentauri Beacon floating to my right, amongst a field of space rocks. The ship was intact, though it had appeared to have taken some blast damage. As I
          brought the FS Gravis closer, the emblem on the right wing became readable. It was the Special Ops insignia, coated in gold. I <Text style={{ fontFamily: "gelasibro-italic" }}>knew</Text> it was you. I decided to use my short-range tractor
          beam to bring you into the cargo bay. I climbed on top of your ship, and I saw you were unconscious, but it's dangerous and nearly impossible to open up a stealth fighter from the outside without the right equipment. I was able to confirm
          your vitals were stable. I figured it was best to leave you in the confines of the ship, and get you help on the ground.{"\n"}
          {"\n"}“We boosted into the Milky Way smoothly, heading for my critical business meeting. But on our approach into Earth's gravity well, a Vagabond II popped up on my tail with its vacuum torpedoes locked and loaded. Just another piece of
          chaos to add to the journey, and it didn't look good, us being in a clunky freighter, so I felt it was wisest to eject you. I knew your ship could take the hit, as long as you hit land. I had to let you go. I knew you'd been through worse
          and that your ship's emergency boosters would alleviate some of the impact.{"\n"}
          {"\n"}“So I watched you fall down towards what they call North America, as we jettisoned around Earth's orbit. He hit me good once, blew out one of my rear blaster engines, and my shields took serious damage, but what he didn't know was
          that my baby was retrofitted with Prometheus II's–the most expensive cruise missiles in the galaxy. I guess he didn't realize the price I put on defense. A few revolutions later, I stalled, and got him in front of me for a few moments, and
          that was it for him. Bye bye. The Prometheuses must have looked like kisses of death from the devil himself. I found out later he was a bounty hunter from{" "}
          <GlossaryWord lookup_string="Limora" word="Limora" toggleGlossary={this.props.toggleGlossary} /> who worked for another Jasmine Tea dealer, someone I had a run in with in the past. He had eyes on the ground on Indo-One, and someone tipped
          him off when I departed.{"\n"}
          {"\n"}“At the time I took him out, I only had an hour to get to my meeting. I put my ship down in a depot with a trusted old friend of mine just outside of Casablanca. My ship is there now, getting repaired. I knew you'd be alright once you
          woke up, just a little disoriented. I've been working on the meeting I had two nights ago, the night we arrived in-system, for two standard years. You must understand that my own life depended on it. I called you a bunch of times throughout
          the twenty-four hours or so after you hit the ground, but you were out cold, until I got to you yesterday, around noon Casablanca time. And I had no way of picking you up. But now we're all here. And the rest you know.”{"\n"}
          {"\n"}Dendro stared at Zimmer in disbelief. "Now it makes sense...that's how I ended up in a pit...you found me tumbling...but it is all hard to believe." He studied Jake for a moment, then looked back at Zimmer. "I wonder if we'd be here
          now if your friend hadn't tipped you off about what the mercenary had uttered." Dendro faced Zimmer:  "But you left me there...in a pit! I know what you did for me, but still...incredible," he said, with a touch of angry sarcasm.{"\n"}
          {"\n"}Zimmer took a long pull of his cigar; the embers burned a bright orange. "I'm sorry, old friend. You know me...sometimes I can be...a bit selfish. I had to make things work for the both of us.  But the meeting was worth my while. If
          you ever want to join me, I'll make it worth yours." He winked.{"\n"}
          {"\n"}"I thank you for what you did. It may have saved my life." Dendro's face hardened as he set his glass on the table. "But that will never happen in the lifetime of our galaxy."{"\n"}
          {"\n"}Zimmer twisted his lip and shrugged.{"\n"}
          {"\n"}“So you have no knowledge of anything else, the Venthum, this ambush plot, the status of the galaxy besides what this Bonjetti told you?” Dendro asked.{"\n"}
          {"\n"}“No, in terms of information you would care about, just that tip,” Zimmer replied.{"\n"}
          {"\n"}Dendro sat back in his seat.{"\n"}
          {"\n"}“I can take you wherever you need as soon as my ship is fixed," Zimmer offered.{"\n"}
          {"\n"}"That will be appreciated. I need to get back to base, but as you know, the military comm lines appear to be down. I do not know what happened to my men—if they are alive, if they escaped. I have no precise destination yet," Dendro
          replied. “I must understand what’s happening across the galaxy.”{"\n"}
          {"\n"}"There is no relevant information on the civilian wire either. I fear there is much news being hidden from the galactic republic as of late. A few of my contacts here will report back to me in the next few days. They have some inside
          lines into the embassy. We can decide where to go from there," Zimmer said.{"\n"}
          {"\n"}Dendro put his hand on the table. "Then that is what we will do. If your contacts are of no help, then I will be forced to make a more troubling decision."{"\n"}
          {"\n"}"I will keep you informed. It will all become clear soon enough," Zimmer said.{"\n"}
          {"\n"}Jake studied Zimmer's face. His canines protruded sharply out of his gums. How did the universe evolve his teeth so like a wolf’s? Then Zimmer looked at him with a smile.{"\n"}
          {"\n"}"Son, did you know Dendro and I go way back?" He asked.{"\n"}
          {"\n"}Jake nodded.{"\n"}
          {"\n"}"We grew up together in the Lower Palisades. The notorious neighborhood in Sector 8 of <GlossaryWord lookup_string="Mooncity" word="Moon City" toggleGlossary={this.props.toggleGlossary} />, the capital city of{" "}
          <GlossaryWord lookup_string="Naronia" word="Naronia" toggleGlossary={this.props.toggleGlossary} />, located on the gray continent of Nubibus. It is well known that The Palisades pop out some of the baddest men and women in the known
          Universe." Zimmer turned and threw a quick wink at Dendro. "We met on the playground Socre’ field. The first time I met Dendro, I didn't much like him. I thought he thought he was tough. I remember when we bumped into each other on the
          playground pitch. We spent that game talking a lot of smack to each other. We musta been thirteen years old. I'll never forget it. But what was remarkable, was after that game, I ended up at my buddy Keton's house on Estimor street. Dendro
          had a cousin who had introduced them before as well. So little did we know we would end up in the same house a few hours later. We spent the night cracking jokes and listening to Keton's crazy older brother tell stories about the Forces. He
          was on leave at the time. What a hard-nosed guy. Crazy too. We got Szechuan food that night, you remember that?"{"\n"}
          {"\n"}Dendro nodded.{"\n"}
          {"\n"}“Became best buds. We worked out together. Chased girls together. Got our first motorbikes together. Boy, did we work out a lot then. Dendro didn’t speak much but the girls were all over him.”{"\n"}
          {"\n"}Dendro raised his eyebrows and smiled ever so slightly.{"\n"}
          {"\n"}"Never forget that day when we were seventeen. We left the gym and passed by the recruiter's office on Dakrifo street. I'm not sure why we entered that day. But we had spoken about it for a while. We signed up right then and there."
          {"\n"}
          {"\n"}Zimmer stared upwards at the ceiling, clearly in a drunken state of nostalgia. Then he started singing.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Nestomir in my thoughts, Naronia in my soul, Praise this Holy Axe, Send the Venthum swine back to their hellhole!</Text>
          {"\n"}
          {"\n"}Jake twisted his lip. <Text style={{ fontFamily: "gelasibro-italic" }}>That’s a solid rhyme.</Text>
          {"\n"}
          {"\n"}Zimmer wiped some liquid off his beard. "Kid, when we first got to the Forces we had no idea what we were doing. We didn't know how to properly shoot a laser or wield an axe or even know how to brush our teeth. And we definitely
          weren't used to cleaning toilets. But we learned together, and our training squad always had each other's backs. The Forces training is tough in general, but no one gets it quite like Special Ops."{"\n"}
          {"\n"}"Got that right," Dendro grunted.{"\n"}
          {"\n"}"Even with all of the hype, when we first got to camp, we did not expect the intensity of the training that was to come,” Zimmer said as he looked over to Dendro. "Remember one of our first{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Benefit Lessons</Text>? When we got shook up in Sergeant Kliggins's class? We had no understanding of the Universe around us then–
          <GlossaryWord lookup_string="Theutma" word="the Utma" toggleGlossary={this.props.toggleGlossary} />. We thought learning had no deep meaning. Boy, were we wrong."{"\n"}
          {"\n"}"Holla," Dendro grunted again.{"\n"}
          {"\n"}"I'll never forget how my young mind changed that day—when Kliggins walked us through <Text style={{ fontFamily: "gelasibro-italic" }}>The Essence of Data</Text>.” Zimmer took another puff of his cigar, blew out more white smoke, and
          continued, “That guy was such a character, remember, Dendro?"{"\n"}
          {"\n"}Dendro nodded.{"\n"}
          {"\n"}"Before Kliggins started any of his spiels, he made a highly specific brew of Kashmirian Kahve, sipped on it, then made an obnoxiously loud ‘ahhhh’ noise in front of the class.”{"\n"}
          {"\n"}“I remember that clearly,” Dendro said.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>. . . <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          </Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}“Well, men, today's <Text style={{ fontFamily: "gelasibro-italic" }}>Benefit Lesson</Text> is called <Text style={{ fontFamily: "gelasibro-italic" }}>The Essence of Data</Text>,” Kliggins announced.{"\n"}
          {"\n"}Kliggins took a few steps forward, then skipped and danced around the room in his metal toed boots. The men half howled with laughter.{"\n"}
          {"\n"}Kliggins looked around the room, with a stern look on his face, and said, "Let’s begin...What is <GlossaryWord lookup_string="Data" word="data" toggleGlossary={this.props.toggleGlossary} />? Well, data is information. And what is
          information? Information is text, numbers, pictures, audio, videos, instructions, and anything—and I mean anything with respect to computing at least—that can ultimately be saved as zeros and ones. It can be your grandmother's legendary
          meatball recipe. It can be the address of your favorite restaurant. It can be the sequence of your genetic code. It can be the love letter you accidentally sent to the wrong person on the internet. It can be a memory you typed up on your
          favorite word processor. Information can be stored. Information can be deleted. Information can be sent."{"\n"}
          {"\n"}The esteemed lieutenant took another swig of his Kahve and held the mug in his hands as he took a few more steps forward. "Now, as each of you know, we use code to provide intelligible instructions to our computer. As coders, these
          instructions often require us to communicate with our computer about how it should best store, organize, and orient the information we want it to manipulate." Kliggins backed up and put his hands against his desk.{"\n"}
          {"\n"}"How can we speak to a computer about orienting information without having the <Text style={{ fontFamily: "gelasibro-italic" }}>right tools</Text> to communicate <Text style={{ fontFamily: "gelasibro-italic" }}>about data</Text> in
          the first place? This question led Naronia's first programmers and our great spiritual teachers to design the world's first <Text style={{ fontFamily: "gelasibro-italic" }}>data structure</Text>s.{" "}
          <GlossaryWord lookup_string="Datastructure" word="Data structures" toggleGlossary={this.props.toggleGlossary} /> are highly logical and organized ways we can speak to the computer about information. Data structures are critical to
          everything us coders do–and they make our life a heck of a lot easier!”{"\n"}
          {"\n"}Kliggins continued, "Just as we use different military equipment to accomplish different military objectives, programmers use different <Text style={{ fontFamily: "gelasibro-italic" }}>data structures</Text> to perform different
          coding objectives. So, to reiterate, men, we use <Text style={{ fontFamily: "gelasibro-italic" }}>data structures to communicate with our computer about how to</Text> store and organize our data more efficiently. And the beautiful thing
          about a <GlossaryWord lookup_string="Datastructure" word="data structure" toggleGlossary={this.props.toggleGlossary} /> is that they are simply patterns. Patterns to arrange information!"{"\n"}
          {"\n"}"Now say it with me, class."{"\n"}
          {"\n"}And the men repeated with him in unison, “
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            These clever little data structures are at our disposal to store and organize our data more efficiently. And the beautiful thing about a data structure is that they are simply patterns. Patterns to arrange information!
          </Text>
          ” A few of the soldiers chuckled.{"\n"}
          {"\n"}"So Kliggins, what is an example of a so-called data structure thing?" Kleacho Sanchez shouted out. He wasn't one to usually ask questions.{"\n"}
          {"\n"}"Great question, Sanchez." Kliggins jumped up in the air and clapped his boots together. The class went into hysterics. Then he continued. "I should first mention that we use data structures all the time. A to-do list is a data
          structure. The table of contents of a book, working together with its respective chapters, is another type of data structure. So are index cards. They are all examples of data structures. They are patterns we use to organize information
          more efficiently." Kliggins paused. "The two almighty data structures we'll discuss in this benefit lesson that are utterly essential to us as coders and that were explicitly designed for the realm of software are{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>The Dictionary</Text> and{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>
            The <GlossaryWord lookup_string="List" word="List" toggleGlossary={this.props.toggleGlossary} />
          </Text>
          ."{"\n"}
          {"\n"}A few of the trainees began chattering. Kleacho scribbled something down in his notebook.{"\n"}
          {"\n"}Kliggins paused and looked around the room deliberately, making sure each student made eye contact with him. "What is a <Text style={{ fontFamily: "gelasibro-italic" }}>dictionary</Text>, you say? What is a{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>list</Text>? They are data structures. Data structures no different than a to-do list or an index card, but they are designed for the more practical use cases that we face as programmers."
          {"\n"}
          {"\n"}Kliggins walked over to the chalkboard on the side of the room and faced the class. "Let us start with our beloved dictionary. We use a{" "}
          <GlossaryWord lookup_string="Dictionary" word="dictionary" toggleGlossary={this.props.toggleGlossary} /> data structure when we want to store and look up information <Text style={{ fontFamily: "gelasibro-italic" }}>by name</Text>. A
          dictionary in software functions similarly to the dictionary we use every day to look up the definition of words, at least from a high level." He picked up a piece of chalk. "Now, look here. If we were to, say, look up the definition of the
          word "Effervescent" in a standard dictionary, how would we go about doing that?"{"\n"}
          {"\n"}"Henderson?" Kliggins shouted. "How would you go about finding the word’s definition?"{"\n"}
          {"\n"}"Uhh… I'm not sure, sir. I'd just look it up? I’d find the word. Then read the definition?" Henderson replied.{"\n"}
          {"\n"}Kliggins began writing. "Yes, Henderson. That's correct. Your procedure might look something like this."{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>(1) Locate the word Effervescent.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>(2) Read off the corresponding value (the word's definition).</Text>
          {"\n"}
          {"\n"}"Yessir," Henderson responded.{"\n"}
          {"\n"}Kliggins went on, "This is similar to how we use dictionaries in programming. A dictionary is a data structure that allows us to look up information by name. The beautiful programming language of Python has built in support for
          dictionaries. "Kliggins wrote down three words and their definitions on the chalkboard. "Here are three words and their corresponding definitions, as we’d see in a standard dictionary."{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Dog: a domesticated carnivorous mammal.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Meatball: a ball of ground or chopped meat.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Effervescent: vivacious; merry; lively; sparkling.</Text>
          {"\n"}
          {"\n"}"Now let's see how we translate this into a <GlossaryWord lookup_string="Dictionary" word="dictionary" toggleGlossary={this.props.toggleGlossary} /> in Python. In Python, one way we can create a dictionary is like this:"
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic source={require("./../../assets/images/lessons/lesson5_1.png")} />
        </View>
        <Caption>Kliggins's Chalkboard</Caption>

        {
          // Section 2 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "First, I must note that we must assign our dictionary to a new variable. That is why I have written <Text style={{ color: "#0C2443", fontFamily: "code" }}>mydictionary =</Text> here. We use an open curly bracket{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>{"{"}</Text> and closing curly bracket <Text style={{ color: "#0C2443", fontFamily: "code" }}>{"}"}</Text> to create a dictionary in Python."{"\n"}
          {"\n"}"Now once we have created a new variable, and generated our open and closed curly brackets, we can add in our dictionary’s content. Dictionaries are simple, they are made up of just two things:{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>keys</Text> and <Text style={{ fontFamily: "gelasibro-italic" }}>values</Text>, like words and their definitions. To create a key inside of a dictionary, we place the name of the key in
          quotes and add a colon after the name, like <Text style={{ color: "#0C2443", fontFamily: "code" }}>'meatball':</Text>. To add a value, we place it next to our key. Like{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>
            'meatball': <Text style={{ fontFamily: "gelasibro-italic" }}></Text>"a piece of meat"
          </Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>. Note, we must add a comma behind our value, if our dictionary is to contain more than one key-value pair.”{"\n"}
          {"\n"}"Now, we can store almost anything in a value that is associated to a key inside of a dictionary. We could store a number, a <GlossaryWord lookup_string="Boolean" word="boolean" toggleGlossary={this.props.toggleGlossary} /> True or
          False, we could even store another dictionary! But here, in this example, we are storing strings—a combination of characters–words—and it is why they are encapsulated in quotes.”{"\n"}
          {"\n"}Some of the men in the course began to take notes, some kept their heads up and watched the board intently.{"\n"}
          {"\n"}"To retrieve the <Text style={{ fontFamily: "gelasibro-italic" }}>value of a key</Text> we do this:"
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={170} source={require("./../../assets/images/lessons/lesson5_2.png")} />
        </View>
        {/* <Caption>(Kliggin's Chalkboard)</Caption> */}

        {
          // Section 3 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          He turned, while pointing at the code. "You see here men, we can access <Text style={{ fontFamily: "gelasibro-italic" }}>the value of a key</Text> in a dictionary by using brackets{" "}
          <Text style={{ color: "#0C2443", fontFamily: "code" }}>[</Text>  <Text style={{ color: "#0C2443", fontFamily: "code" }}>]</Text> next to the name of our dictionary. We then place the name of the key inside of it, in quotes, like this.”
          Kliggins continued pointing at the board.{"\n"}
          {"\n"}“I am asking Python: retrieve the value of the key <Text style={{ fontFamily: "gelasibro-italic" }}>Effervescent</Text> from the dictionary <Text style={{ fontFamily: "gelasibro-italic" }}>mydictionary</Text>. The result, if we
          printed this expression to our screen, will be, you guessed it, <Text style={{ color: "#0C2443", fontFamily: "code" }}>vivacious; merry; lively; sparkling</Text>, which is the definition, or the value, of the key{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Effervescent</Text>."{"\n"}
          {"\n"}Kliggins walked back to the middle of the room. He leaned back against his desk.{"\n"}
          {"\n"}"Dictionaries are great for when we want to store and lookup things by a name. They are so useful it's nearly impossible not to use them when we design a new program or application. But there is another data structure your hearts and
          minds must appreciate—the list."{"\n"}
          {"\n"}He walked back over to the chalkboard and began writing again. "An example of a regular list might be our common grocery list, e.g.:"{"\n"}
          {"\n"}- <Text style={{ fontFamily: "gelasibro-italic" }}>Eggs</Text>
          {"\n"}- <Text style={{ fontFamily: "gelasibro-italic" }}>Milk</Text>
          {"\n"}- <Text style={{ fontFamily: "gelasibro-italic" }}>Ice Cream</Text>
          {"\n"}- <Text style={{ fontFamily: "gelasibro-italic" }}>Hamburgers</Text>
          {"\n"}- <Text style={{ fontFamily: "gelasibro-italic" }}>Cheese</Text>
          {"\n"}
          {"\n"}"In Python, we can create this list like this." He began writing below the grocery list in python form on the chalkboard.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={76.5} source={require("./../../assets/images/lessons/lesson5_3.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 4 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "As you can see, we place the contents of our list inside of opening and closing brackets <Text style={{ color: "#0C2443", fontFamily: "code" }}>[</Text>  <Text style={{ color: "#0C2443", fontFamily: "code" }}>]</Text> and then separate
          them with a comma. In this grocery list example, we are storing <GlossaryWord lookup_string="String" word="strings" toggleGlossary={this.props.toggleGlossary} /> inside each element of this list, because they are the names of foods, but a
          list's elements can contain nearly any <GlossaryWord lookup_string="Datatype" word="data type" toggleGlossary={this.props.toggleGlossary} /> we want. And like our dictionary example, we must assign our list to a new variable, or else we
          cannot access it later."{"\n"}
          {"\n"}He erased the first list and wrote in another.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={105} source={require("./../../assets/images/lessons/lesson5_4.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 5 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "You see, this list is also valid. We can store whatever we want in a list. Strings, numbers. Even variables we’ve already defined."{"\n"}
          {"\n"}Kliggins spotted a student asleep in the back of his classroom. He threw the chalkboard eraser at his head. "Lito, wake your flat stinkin’ buttocks up.”{"\n"}
          {"\n"}Lito snapped to attention.{"\n"}
          {"\n"}Kliggins continued, "So, how do you think we access the value of a list? Well how would you reference a specific item in <Text style={{ fontFamily: "gelasibro-italic" }}>any</Text> list, Henderson? Say if you were communicating with
          me?"{"\n"}
          {"\n"}"Uh. Sir. I don't know. I would." The trainee thought for a moment. "I guess I'd tell you which one in the list to look at."{"\n"}
          {"\n"}"That's very clear, Henderson," Kliggins said.{"\n"}
          {"\n"}"What I think Henderson means is he would tell me which number, or which place, in the list I should look at. As in, get me the first item in the list, the second item, etcetera. So how do we do that? How do we access an individual
          list element?" Kliggins added a line underneath his previous list example. "We use brackets and then the number of the element of the list we want to access."
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={126} source={require("./../../assets/images/lessons/lesson5_5.png")} />
        </View>
        {/* <Caption>(Dendro's monitor)</Caption> */}

        {
          // Section 6 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "What do you think <Text style={{ color: "#0C2443", fontFamily: "code" }}>weirdlist[3]</Text> will evaluate to?" Kliggins asked the class.{"\n"}
          {"\n"}"Ice cream," most of the men muttered.{"\n"}
          {"\n"}"Negative,” Kliggins said. “It will evaluate to <Text style={{ color: "#0C2443", fontFamily: "code" }}>43543</Text>.”{"\n"}
          {"\n"}A collective “huh?” echoed from the class.{"\n"}
          {"\n"}"Men, you heard me correctly. Asking for item 3, gets us the fourth item in our list. Why do you think that is?" Kliggins asked.{"\n"}
          {"\n"}No one answered. The trainees appeared stumped.{"\n"}
          {"\n"}"Because lists in Python are <Text style={{ fontFamily: "gelasibro-italic" }}>indexed</Text> at 0. This means the first item in our list is referred to as the <Text style={{ fontFamily: "gelasibro-italic" }}>0th</Text> item. He
          pointed at the last line. That's why when we write <Text style={{ color: "#0C2443", fontFamily: "code" }}>weirdlist[3]</Text>, we get the fourth item in our list. Item one is indexed at 0, item two at 1, etcetera. We must remember this
          point or else we will get bugs in our code.”{"\n"}
          {"\n"}Kliggins walked back to the center of the room. "We can build many useful things with just lists and dictionaries. In fact we can build nearly anything. And that's part and parcel to the fact we’ve learned how to use dictionaries and
          lists <Text style={{ fontFamily: "gelasibro-italic" }}>together</Text>."{"\n"}
          {"\n"}Kliggins walked up to the center chalkboard. "Coders often use <Text style={{ fontFamily: "gelasibro-italic" }}>a list</Text> of dictionaries to represent information."{"\n"}
          {"\n"}"Can any of you men think of a use case?" Kliggins asked.{"\n"}
          {"\n"}The men shook their heads.{"\n"}
          {"\n"}"What's it that you guys use nowadays for dating?" Kliggins asked.{"\n"}
          {"\n"}"Henderson met his ex-girlfriend on GalacticLove," someone shouted out. "That didn't go too well."{"\n"}
          {"\n"}The men laughed.{"\n"}
          {"\n"}Kliggins erased the board. "Did he now? Well, work with me here. Imagine we want to build a new social networking application, a hip new app that you probably would all download. Let's say on one of the app’s screens we want to load a
          list of your friends. This is a great example of how a coder could represent this information, your friend-list, using a list of dictionaries."{"\n"}
          {"\n"}He sketched out some Python code on the board.{"\n"}
          {"\n"}"You can see here we can store the information about each of the individual users, each of your friends, in a dictionary. We can store information about the user's name, hometown, and nickname using a dictionary's key value structure.
          But how do we organize more than one of them?"{"\n"}
          {"\n"}"We can use a list!" someone shouted out.{"\n"}
          {"\n"}"Yes. We can use a list as you see here. We use a <Text style={{ fontFamily: "gelasibro-italic" }}>list of dictionaries</Text>, to represent our list of users, in a very neat and efficient way."
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={325} source={require("./../../assets/images/lessons/lesson5_6.png")} />
        </View>
        <Caption>Mentally zoom out for a moment. It's just dictionaries sitting inside a list!</Caption>

        {
          // Section 7 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          “The code here may look confusing. But I’m simply formatting it in a way that makes it take up more vertical space so that it doesn't run too far across the right of the board, which is something we’d like to do in a{" "}
          <GlossaryWord lookup_string="Texteditor" word="code editor" toggleGlossary={this.props.toggleGlossary} />, which is easier on the eyes. What we're looking at here is a list, and its three items are dictionaries. Like this.” Kliggins
          sketched another line on the bottom of the board to make the code more conceptually clear.
        </Text>
        <View style={GlobalStyles.flexCenter}>
          <StoryGraphic height={101} source={require("./../../assets/images/lessons/lesson5_7.png")} />
        </View>
        <Caption>This is a powerful pattern in programming.</Caption>

        {
          // Section 8 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          "Sometimes, seeing things formatted in a certain way can appear quite daunting. When I saw my first list of dictionaries, I almost passed out. But once your brain understands what the individual elements of the code are doing, visualizing
          code will start to feel quite natural. Using a <GlossaryWord lookup_string="List" word="list" toggleGlossary={this.props.toggleGlossary} /> to store dictionaries is incredibly powerful. Many of the apps you use today use this type of data
          structure to store information, like a list of friends, or a list of products.” Kliggins paused to stretch his neck. "The great thing about today, if you’ve been paying attention, is that if you understand the concept of a dictionary, a
          list, and how we use lists and dictionaries together, you've actually come quite a long way in the journey of understanding data and code."{"\n"}
          {"\n"}"Now there is one more thing I'd like to discuss in this lesson. Coders are obsessed”—Kliggins bent down and slapped the floor with both hands—"absolutely obsessed with how much effort is required for our computer to find, add, and
          delete elements from a specific data structure.  For example, when we work with dictionaries and lists, coders will often think long and hard about these types of things."{"\n"}
          {"\n"}Kliggins erased the chalkboard and then wrote down three bullets.{"\n"}
          {"\n"}- <Text style={{ fontFamily: "gelasibro-italic" }}>How easily can our computer find a specific value in a list or dictionary?</Text>
          {"\n"}
          {"\n"}- <Text style={{ fontFamily: "gelasibro-italic" }}>How easily can our computer insert a new value into a list or dictionary?</Text>
          {"\n"}
          {"\n"}- <Text style={{ fontFamily: "gelasibro-italic" }}>How easily can our computer delete an item from a list or dictionary?</Text>
          {"\n"}
          {"\n"}Kliggins faced the class. "In real life, when we use this powerful language we call code, whether it be in creative work, school, or in the Forces, we have to be critical about how we do these things here because we want our code to
          be <Text style={{ fontFamily: "gelasibro-italic" }}>as efficient as possible</Text>. For example, our computer can very easily look up the value of a key in a dictionary. In fact, the process is so efficient, the time it takes for a
          computer to look up the value of a key in a dictionary often <Text style={{ fontFamily: "gelasibro-italic" }}>doesn't even depend</Text> on how big, or how many entries exist in the dictionary. I should mention, the reason for this is the
          computer uses an underlying tool, called a <Text style={{ fontFamily: "gelasibro-italic" }}>hash table</Text>. We'll go into the details of{" "}
          <GlossaryWord lookup_string="Hashtable" word="hash tables" toggleGlossary={this.props.toggleGlossary} /> in later lessons."{"\n"}
          {"\n"}"But when it comes to looking up the value of an item in a Python list, though the computing process is still very fast, it is still not quite as efficient as looking up the value of a key in a dictionary–the time it takes our
          computer to retrieve an element in a list grows <Text style={{ fontFamily: "gelasibro-italic" }}>proportionally</Text> with the number of items in the list. This is because our computer{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>has to run through each item in the list</Text> sequentially until it arrives at the item we care about.”{"\n"}
          {"\n"}Kliggins walked back to the center of the classroom. "It's important that we are aware of these things, but don't let people in the industry bully you about data structures and computing efficiency. There are many coders out there
          that take pride in memorizing the innards of data structures, and the <GlossaryWord lookup_string="Algorithm" word="algorithms" toggleGlossary={this.props.toggleGlossary} /> we use to operate over them, and they love to make it clear what
          they think they know better than you. Yes, these things are important, however, always remember, the mark of real intelligence is first and foremost the ability to teach, not the ability to show off what we know."{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          <Text style={{ textAlign: "center" }}>
            <Text style={{ fontFamily: "gelasibro-italic" }}></Text>. . . <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          </Text>
          <Text style={{ fontFamily: "gelasibro-italic" }}></Text>
          {"\n"}
          {"\n"}Zimmer threw back the rest of his whiskey. "That was a lesson to remember."{"\n"}
          {"\n"}“It was,” Dendro said.{"\n"}
          {"\n"}“Jake, learning, is core to everything our society does—civilian and military alike. I wonder...can we get you in the dojo this week? It seems you have some time to kill,” Zimmer said.{"\n"}
          {"\n"}Dendro hesitated for a moment. "Could do, I suppose. I am curious to see how he performs, after what I've already seen."{"\n"}
          {"\n"}“The dojo?” Jake asked.{"\n"}
          {"\n"}"Yes, lad. The dojo is where we train, and sometimes...where we learn. It is a critical component of our Ld'Shab centric military culture," Zimmer said.{"\n"}
          {"\n"}"I see no reason not. Tomorrow I have errands to run, but the day after, why don't we?" Dendro suggested.{"\n"}
          {"\n"}"Let's do it" Zimmer replied.{"\n"}
          {"\n"}With that, Dendro stood up and said: “Anyways, men, women, it's getting past my bedtime. Zimmer, you and I will coordinate what is required tomorrow. It was good to see both of you. Jake, let's head back."{"\n"}
          {"\n"}The four of them said goodbye, then Jake and Dendro headed back up the staircase, back onto the street.{"\n"}
          {"\n"}“Zimmer seems cool. So, what’s this dojo training thing gonna be like?” Jake asked.{"\n"}
          {"\n"}“You will see. Don’t worry, I think you’ll get a kick out of it,” he said. “I hope.”{"\n"}
          {"\n"}They walked back to their apartment on Tangiers. When Jake got to his room, he took off his chain and hung his suit back up in the closet, then collapsed into his bed.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I wonder what it's like to be a smuggler in a foreign galaxy</Text>. He closed his eyes, feeling the exhaustion overtake him. He thought of the elf-like ears.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>There was something intriguing about that purple eyed woman</Text>, he thought.
        </Text>
      </View>
    );
  }
}
