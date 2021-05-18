import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles, BookStyles } from "../../Stylesheet";
import GlossaryWord from "../Glossary/GlossaryWord";

interface IProps {
  toggleGlossary: (id: string) => void;
}

export default class Chapter8 extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View>
        <Text style={GlobalStyles.chapterTitle}>Chapter 8</Text>
        <View style={GlobalStyles.flexCenter}>
          <Image
            style={GlobalStyles.chapterImage}
            source={{
              uri: `https://img2.pngio.com/battleaxe-png-3-png-image-battle-axe-drawing-png-1000_709.png`,
            }}
          />
        </View>

        {
          // Section 1 Below, Goes Text, Graphic
        }
        <Text style={BookStyles.bookFont}>
          Jake had never run this fast. As his feet cut through the snow covered road, his eyes searched for a pickup truck. Dendro said he couldn't miss it.{"\n"}
          {"\n"}Fifty feet ahead, on his right, he saw the four-wheeler parked in the driveway of a broken down cabin. He raced up to it, pulled open the door and confirmed that the keys were in the cup holder.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How could Dendro's Radar know the keys were here?</Text>
          {"\n"}
          {"\n"}He had to find something heavy. He shut the car door and sprinted to the back of the property. It was a small lot, and as he searched the ground hoping to find a stone, he heard the sound of running water coming from the trees. Seeing
          nothing of use in the grass, he trekked a few feet into the woods and soon stumbled upon a small stream. A few large rocks sat partially immersed in the current. He picked a heavy one up from the shallow water.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This will do</Text>. {"\n"}
          {"\n"}A few moments later, he sat down in the driver's seat and carefully put the weighty stone down on the floor next to his feet. Now was the first real challenge. He had never driven anything besides a go-kart before.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>How hard can this be?</Text> He put the key in the ignition and turned; the engine rev to life. <Text style={{ fontFamily: "gelasibro-italic" }}>That worked.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Reverse, where are you?</Text> He found the transmission lever to the back right of the steering wheel. He shifted it to <Text style={{ fontFamily: "gelasibro-italic" }}>R</Text>. As he
          gently placed his foot on the gas, he kept his head focused on the road directly behind him. The ruck rolled backward, and a moment later he had successfully brought the truck onto the street. {"\n"}
          {"\n"}He looked out onto the dark road from which he came. This was a kooky plan, and it had no guarantee of success. But it was what the Special Operative soldier told him to do, and he didn't have anything better rolled up his sleeve. He
          tried to remove the thoughts of being ripped apart by pernicious aliens from his mind. "Here goes nothing," Jake muttered out loud. He swiveled the transmission into neutral as he kept his foot on the brake, then He reached down and
          carefully moved the stone onto the gas pedal.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Vrr, Vrrr, Vrooooooooooooom. Vrooooooooooooom. </Text>
          {"\n"}
          {"\n"}The engine roared loudly,, but the stone seemed stable. <Text style={{ fontFamily: "gelasibro-italic" }}>Seems like it will hold.</Text> Jake cracked the driver side door ajar, and then took his foot off the brake.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>We're moving.</Text> The car rolled forward slowly, still in neutral. <Text style={{ fontFamily: "gelasibro-italic" }}>Here comes the hard part.</Text> He swung his legs out of the vehicle,
          with his arms still on the wheel. <Text style={{ fontFamily: "gelasibro-italic" }}>I can do this. But I need to roll out quickly.</Text> He set the transmission into drive, and the car immediately jolted forward.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Oh man, this is faster than I thought!</Text> He felt the whiplash in his neck as he accelerated down the street in the hulking container of aluminum and steel.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Wait. Wait. Wait. Now!</Text> He threw the rest of his body out of the car, smashed into the Earth, and rolled over on the pavement a few times.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Holy crap.</Text> As the truck accelerated down the street, he saw the barn ignite. He wrapped his arms around his knees, and took some long, deep breaths to try to calm himself. Dendro's
          plan was to get at least a few of the Venthum troopers in the battalion to be distracted by the inferno. The truck's heat signature was designed to discombobulate the Venthum team, so that they would run back into the street to examine the
          oncoming threat. This created a ripe time for Dendro to strike.{"\n"}
          {"\n"}Jake watched the car maintain a nearly perfect line towards its target. Just as Dendro had anticipated, two battleplated figures ran from the barn perimeter, to see what they sensed hurling down the street.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Hol..ee...smoke. This..can't be...real!</Text> The alien soldiers shuffled into a practiced battle formation in the middle of the road; their laser aimed at the incoming target.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They..they...must be seven or eight feet tall!</Text> Jake thought<Text style={{ fontFamily: "gelasibro-italic" }}>.</Text> The creatures wore silver metal helmets sat on their heads, and to
          Jake's horror, their knee joints angled backwards like the legs of a dog. He felt a jolt of nausea run through him.{"\n"}
          {"\n"}Then he heard a cracking noise from the barn's roof—as if the shingles were breaking from the building. His looked back to the truck streaming down the road. <Text style={{ fontFamily: "gelasibro-italic" }}>Where is Dendro?</Text>{" "}
          Then he spotted Dendro's golden axe. <Text style={{ fontFamily: "gelasibro-italic" }}>Woah.</Text> As it danced through the air, the troopers attempted to turn around, but it was too late. Their lasers blasted in a chaotic symphony, but the
          axe smashed into the face of the nearest fighter with a hideous thump. Jake heard a wail. The truck was closing in; as the vehicle approached them, Dendro glanced at it, then dove left. The remaining fighter dove right, just off the path.
          {"\n"}
          {"\n"}An instant later, after the truck had zoomed past them, Dendro stood up, yelled, and ran at his opponent, axe ready. The creature charged in response, but it appeared to have lost its laser on the ground during the fall, and instead
          of searching for it, unsheathed a long katana looking blade from its belt line mid-stride. <Text style={{ fontFamily: "gelasibro-italic" }}>Oh, jeez</Text>. Dendro dug his heels into the snow covered ground at the last moment, slowing down.
          He began to circle his foe. His opponent mimicked him and did the same. The two aliens shadowed each other as they sized each other up for some ten seconds, until Dendro threw a hard juke left.The fighter went for it, enough to give Dendro
          the edge. The Solar Force's warrior spun right, explosively, his axe swirling around with him like a golden serpent, and came down around the torso of the enemy. As the creature fell to its crooked knees, Jake heard it moan in agony. Then
          Dendro finished it off; he thrust a blade he kept in his belt-buckle in the forehead of the creature and it collapsed with a grotesque squeal.{"\n"}
          {"\n"}Jake shivered as he approached the scene. He glanced at two alien corpses lying face down on the ground. <Text style={{ fontFamily: "gelasibro-italic" }}>Yea, they're definitely dead.</Text> Dendro signaled him to step closer.{"\n"}
          {"\n"}"Are you ok?" Jake asked. The warrior appeared unharmed.{"\n"}
          {"\n"}"I'm alright, but that was the easy part, I'm sorry to say," Dendro said as he fixed his robe. "We must head through the forest, and regroup near the mountain. Let's go!"{"\n"}
          {"\n"}They hurled side by side through the woods that ran adjacent to the forest road.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Chute-chute. Chute-chute. Chute-chute.</Text> Thirty feet into the brush red laser beams exploded into the top of the tree next to Jake.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the?</Text> He turned around and saw two tall battle-plated figures about a hundred feet behind them, lasers in hand. They were closing in.{"\n"}
          {"\n"}"What do we do!?" Jake yelled.{"\n"}
          {"\n"}"We have the distance, keep moving!", Dendro yelled. "Whatever you do, don't stop kid!"{"\n"}
          {"\n"}Jake, amped by fear, ran as fast as he could.t. Sweat poured profusely down his back, and his legs burned. In his desperation, he considered veering off into the woods.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They will sniff me out.</Text> As his feet propelled desperately through the snow, he did everything he could to take his mind off the lactic acid beginning to overwhelm his muscles. He
          watched Dendro truck ahead.{"\n"}
          {"\n"}Laser beams hit another tree in front of him. A pout of smoke filled in the air.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Oh sh—.</Text>"Where the heck is the mountain?!" Jake cried out.{"\n"}
          {"\n"}"We're nearly there!" Dendro shouted.{"\n"}
          {"\n"}Fifty feet ahead the forest opened up, not far from the gate in the road that he had passed earlier. Jake spotted the main ski lodge two hundred feet ahead of him. Dendro sprinted towards it.{"\n"}
          {"\n"}The warrior glanced at his glowing Lithium Radar as they sprinted up to the structure. "Get inside! Left hallway! Get somewhere cold! Where they can't track you. There's a maintenance room, a refrigerator.Go!!"{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>"</Text>Wait<Text style={{ fontFamily: "gelasibro-italic" }}>!" Jake screamed.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>"GET IN THERE. GO!"</Text> Dendro yelled.{"\n"}
          {"\n"}Jake hustled up to the main door of the lodge, gasping for air. He watched Dendro sprint down the path and around the building out of sight. <Text style={{ fontFamily: "gelasibro-italic" }}>I gotta hide</Text>.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Where is Dendro going to go?! What's his plan!?</Text> He turned the knob. It was locked. He looked back; the fighters must be closing in.{"\n"}
          {"\n"}Out of pure instinct, he plowed his body into the side window of the lodge. It was an effective cannonball-like movement, and the window shattered. Jake fell through and got back up. He felt no meaningful pain—it was either the
          adrenaline, or the robe must have somehow protected him.. He collected his bearings rapidly and saw the hallway to the left. He ran down it.{"\n"}
          {"\n"}He needed to hide. <Text style={{ fontFamily: "gelasibro-italic" }}>Maintenance room, maintenance room, where are you? Where are you!?</Text> He passed a bunch of guest room doors. He kept running. More guest room doors.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Cmon, cmon, cmon. Dendro said you'd be here.</Text> He passed an ice machine, then spotted a sign that read "MAINTENANCE" on the top center.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>There it is.</Text> The door was unlocked. He entered. It was a small room, with a set of shelves and cabinets. He noticed a refrigerator in the back left corner that was still plugged into
          the wall.{"\n"}
          {"\n"}He heard another window smash open.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They're here.</Text>
          {"\n"}
          {"\n"}He opened the fridge, pulled out the refrigerator shelves, tucked them under the table, and slid his body inside. He closed the door tight. The freezing air enveloped him.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>This is cold.</Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Thump. Thump. Thump-Thump. Thump. </Text>
          {"\n"}
          {"\n"}He heard the sound of heavy footsteps walking down the hall. <Text style={{ fontFamily: "gelasibro-italic" }}>Oh, heavens please. Please let them pass this room. </Text> His heart pounded so hard he thought that alone might kill him.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Is this all ends? Will they abduct me and transport me to some distant galaxy, perform experiments on me and then dissect my body?</Text>
          {"\n"}
          {"\n"}He nudged the fridge door open ever so slightly. He peeped through the narrow slot of vision. He could see the light flickering from under the door. Troopers were shuffling down the hall in formation. As Jake held his breath, his mind
          shifted to the night not so long ago when he played video games and ate Antonino's pizza with his brother; the mind seeks comfort. Survival starts with the mind. It ends with the body. That pleasant memory helped calm him enough to prevent
          a full on panic.{"\n"}
          {"\n"}The troopers passed the maintenance room and continued moving.{"\n"}
          {"\n"} Jake felt a wave of relief.{"\n"}
          {"\n"}But the troopers returned ten seconds later.{"\n"}
          {"\n"}To Jake's horror, the maintenence door began to creak open, slowly.{"\n"}
          {"\n"}Jake pulled the refrigerator shut, tensed his body and prayed for his safety. The cold began to make his shiver.{"\n"}
          {"\n"}They were in the room. He could hear the battle trooper footsteps click-clacking across the floor. He decided the only thing left to do besides pray was to pull on the fridge door, in case one of the aliens tried to open it. {"\n"}
          {"\n"}He heard pots and pans crashing on the ground. Items on the shelves shuffled. Drawers opened. Things rattled. {"\n"}
          {"\n"}A laser-gun-nozzle tapped on the fridge. {"\n"}
          {"\n"}He felt the pulling pressure. But it was not strong. Then something pulled harder. Jake pulled backwards as hard as he could, desperate to keep the refrigerator door shut.But no additional tugs came. He heard some more shuffling. The
          footsteps faded. The soldiers had left the room. {"\n"}
          {"\n"}Jake was not convinced he was safen just yet. He stayed in the fridge,, his teeth chattering, for another few minutes. He kept his ear on the door, listening for any potential threats. {"\n"}
          {"\n"}A few minutes later, he opened the fridge cautiously, making sure to remain silent. He tiptoed to the maintenance room door.. He sat with his back against the wall and opened the door slowly. There were no signs of anything living.
          {"\n"}
          {"\n"}He decided he had no option but to get back outside and try and find Dendro. He walked down the hall and entered the unoccupied lobby of the lodge. The front door was busted open. He peeked outside, and spotted strange looking
          footprints in the snow. They led out away from the central lodging area towards the open snow covered valley. {"\n"}
          {"\n"}Jake stood there, crouched, searching the landscape. <Text style={{ fontFamily: "gelasibro-italic" }}>Wait</Text>. Five hundred feet away, he could see in the center of the snow covered field, two dark figures, and they appeared to be
          holding their hands to their helmets. The subtle red glow from their laser cannons were visible. {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They are still hunting us</Text>, Jake thought. <Text style={{ fontFamily: "gelasibro-italic" }}>Dendro was right. There is no running.</Text> Jake could see no sign of the Naronian warrior;
          he was not sure what to do. He kept his eyes on the receding fighters, who clearly did not know where he or Dendro were located. Jake had a feeling that was going to change pretty fast. Luck was only going to take them so far. {"\n"}
          {"\n"}"COME AND GET ME YOU VENTHUM RODENTS!" a voice shouted from the forest. Jake looked back at the woods. <Text style={{ fontFamily: "gelasibro-italic" }}>Dendro went back in? Was that his idea all along?</Text> He caught sight of the
          Venthum battle troopers turning around. He crouched, tiptoed back into the lodge, and dipped down below the window. Thirty seconds later he heard the sound of footsteps jogging through the snow.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They're going to find Dendro.</Text> He waited until the troopers disappeared into the forest again, before he got up, then headed back through the snow onto the forest road. {"\n"}
          {"\n"}Soon after he entered the forest, two giant hands wrapped around his mouth and pulled him off the path. <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck!?</Text>
          {"\n"}
          {"\n"}"Relax. It's me," Dendro whispered.{"\n"}
          {"\n"}Jake turned around, bewildered. Dendro had his index finger over his mouth. "I must take them on the rink. It is our best chance. But this time, there will be no distractions or decoys to take advantage of," Dendro said. "It will be a
          dog fight." He pulled open his Solar Forces robe and pulled out a silver axe that Jake had not seen before. It was similar in shape to his own, but smaller. He spun it once in his hands, the metal catching silver rays of the moonlight, then
          handed it to Jake.{"\n"}
          {"\n"}"This is for me?" Jake asked, stunned.{"\n"}
          {"\n"}Dendro nodded in confirmation. "In case things go south. You will at least be armed." Dendro unsheathed his golden axe. "The rink will give us our best chance to defeat them. It will reduce heat signature tracking, which affects
          weapon guidance at both close and long-range." Dendro spun his axe around in his hand. "Stay behind the walls—do not get on the ice. Our best hope is that I fight them off, axe to sword—with everything I've got. Use the axe only if
          necessary. Stay hidden." Dendro began walking ahead.{"\n"}
          {"\n"}"Wait!" Jake said. "I don't even know how to use this thing." {"\n"}
          {"\n"}But Dendro was moving towards the rink with a determined stride. Jake shook his head as he held the axe in his hands. <Text style={{ fontFamily: "gelasibro-italic" }}>That guy,</Text> Jake thought. {"\n"}
          {"\n"}He had no option but to follow behind him. He crouched down, and walked slowly around the right side of the rink perimeter, as Dendro soon hurtled over the rink wall. Jake peeped his head up a moment later as he became inline with the
          rink center. <Text style={{ fontFamily: "gelasibro-italic" }}>Where are the troopers? </Text>
          {"\n"}
          {"\n"}He watched as Dendro casually strutted to the center of the ice. <Text style={{ fontFamily: "gelasibro-italic" }}>What's he doing? </Text>
          {"\n"}
          {"\n"}A moment later, Dendro cocked his head towards the sky and yelled: "COME AND GET ME!". His right arm brought the axe up to his hip, and hands let go. The glowing weapon remained in the air by his side, like a faithful servant. Then
          three laser beams locked onto Dendro. They appeared to be coming from the woods beyond the far edge of the rink. Jake felt sick again, but to his amazement, the top edge of Dendro's axe illuminated in a light blue hue. Then Dendro gripped
          onto the floating weapon with a two handed grip. An instant later, rapid fire, three-pulse laser sequences that followed each other in rapid succession at their target. {"\n"}
          {"\n"}"Oh my goodness," Jake muttered. Dendo swirled his glorious axe through the air, deflecting the laser pulses with super human swiftness. The defense almost looked easy for him; the laser-pulse deflecting hand eye coordination was not
          from an Earthly realm. The speed. The reaction time. The angle of attack, and the grace of the footwork. It was all too much to comprehend, but it was remarkable to watch. And even in this life or death situation, Dendro's facial expression
          remained calm and self-assured.{"\n"}
          {"\n"}Two troopers exited the trees and began to traverse slowly across the dirt. They did this in a practiced battle formation; the two bodies angled away from one another to increase their visual coverage. They continued their ceaseless
          laser fire, and Dendro continued his graceful deflective parries. They approached the rink wall, hurtled in single file onto the ice. And moved back into their practiced formation. The laser pulses continued. {"\n"}
          {"\n"}A few feet into the rink they broke out of their formation; one trooper moved slowly towards Dendro's left, the other towards his right. Jake could see the troopers' form in greater detail. For one, they were mightily tall—
          <Text style={{ fontFamily: "gelasibro-italic" }}>at least</Text> two feet taller than Dendro. They wore large circular shields on their chests. The shoulder plates were silver, and so were their long downward sloping helmets. The backward
          curving legs were an even more terrible sight up close. The faces were hard to make out in this light, but Jake caught glimpses of scarred, stretched skin, and tiny red eyes. {"\n"}
          {"\n"}Jake remained crouched with his head peering just over the rink's ledge. To Jake's surprise the two fighters holstered their lasers and proceeded to take out two long, red-glowing katana swords. They locked in on Dendro, and then
          began to close in on him. {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Oh no,</Text> Jake thought.{"\n"}
          {"\n"}The first trooper moved with lethal grace. It closed the distance between itself and Dendro in a matter of seconds. It carried its red glowing blade in its hands, but Dendro stood his ground. The katana-like weapon came down quickly,
          aimed at Dendro's left shoulder, but it was not thrown at full force, as if it was meant purely to test Dendro's reaction time. Dendro met the blade mid-way through its arc with his mighty axe. The fighter took a half step back; then came
          forward with a series of rapid, short winding slashes of the katana. Dendro danced away from them, parrying each slash with relative ease. {"\n"}
          {"\n"}The second katana-toting Venthum fighter entered the death tango from Dendro's right, throwing small, fencing-like jabs at Dendro, as the first fighter threw more powerful, longer arced slashes. Dendro danced once again, this time
          using his axe and graceful defensive movement to counter both of his opponent's blows. Then the second fighter initiated a set of more forceful haymaker like slashes. Dendro was a skilled, acrobatic fighter, but facing two formidable foes
          simultaneously put him at a disadvantage. He deflected the trooper's blows upward and to the side with blinding speed. The troopers continued to back him up, slowly.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>They want to exhaust him,</Text> Jake thought. Dendro's movements appeared less agile; he was gradually getting fatigued.{"\n"}
          {"\n"}Then a series of rapid paced offensive exchanges pushed them back off from one another. That's when Dendro got on his knees for an instant, brought his two hands together next to his face, as if he were praying, then did something
          unbelievable. <Text style={{ fontFamily: "gelasibro-italic" }}>What the?</Text>
          {"\n"}
          {"\n"}He cocked his legs and front flipped high in the air over the two troopers. On his way down, he slashed his blue glowing axe down on the protruding legs of his rightmost opponent. The creature tumbled backward and let off a demented
          sounding howl. But it was not dead. It stood back up, limping severely; a liquid oozed from its skin.{"\n"}
          {"\n"}As Dendro turned around, a confident grin appeared on his face; he knew he had an opportunity to make this fight one on one. "I WILL BREAK YOU!" Dendro roared. He glanced at his injured opponent momentarily, then darted forward at the
          healthy one; his eyes glared with a determination of undeterrable will. A moment later, he met the glowing katana of his healthy foe with a sequence of heavy blows, which caused his opponent to take a few steps backwards on the ice. It was
          enough space to let him do what he did next: back flip in front of the injured foe fifteen feet behind him. His feet landed silently, and the axe came down with tremendous speed, knocking the blade from his opponent's grip. The creature's
          face wore a look of frightened surprise. Then Dendro's weapon sailed back around through the night air and cut half way through the creature's torso. It moaned in its strident language, as its body crumpled onto the ice. The healthy trooper
          walked up to its dying comrade as Dendro shuffled backwards to the edge of the rink.{"\n"}
          {"\n"}After exchanging some indiscernible words amongst one another, the Venthum trooper pulled the glowing Katana over the injured fighter, and slung it deep into his comrade's neck. There was a sizzling of smoke and the fighter's eyes
          closed shut.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>That's sick</Text>, Jake thought.{"\n"}
          {"\n"}The healthy fighter brought his attention back to the Naronian warrior and the dance began once again. Dendro skated on his boots to the center of the rink and met his foe blade on blade, the glowing metal weapons creating a
          malevolent light show that only Jake was present to witness. But Dendro appeared to be a drop slower. He had used his freakish acrobatics to fend off the two foes, even killing one. But he was fatigued. The trooper pushed Dendro back with a
          few sharp, sweeping jabs of the long blade.{"\n"}
          {"\n"}The interchange of slashes and counters continued for a few moments, until Dendro attempted a fancier charade, which consisted of him sidestepping, then juking to his right. He had leaned forward abruptly during the juke, but the
          fighter read his opponent and used the split second advantage to slash down hard at Dendro's exposed left shoulder. The katana came down and dug a few inches into Dendro's flesh, then pulled out. Dendro let out a terrible yell.{"\n"}
          {"\n"}A pain seared through Jake's gut. He could see the blood starting to seep out of Dendro's robe as the warrior backpedalled away from his opponent.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>I can not just stand here. I have to do something.</Text> Out of the corner of his eye, he saw the silver axe that Dendro had given him, which he had set against the rink wall. It seemed to
          speak to him, as Dendro, badly wounded, and the Venthum trooper began to circle each other again on the ice. Jake picked up the silver weapon and held it in his hands.{"\n"}
          {"\n"}He looked on as the trooper began to attack the Solar Forces soldier without mercy. Each time the lethal katana came down, Dendro somehow managed to muster up the will to meet the blow with his axe. Yet each time he defended himself,
          his energy seemed to dissipate. If this continued, Dendro would not survive, and Jake was going to get sniffed out by Venthum heat seekers. <Text style={{ fontFamily: "gelasibro-italic" }}>I have to act.</Text>
          {"\n"}
          {"\n"}His mother and brother flashed through his mind again, but he had no more time. He had to make a decision. Would he fight or flee? He flipped the axe around in his hand, then brought the weapon down by the side of his hip. He noticed
          the top edge had begun to shine a subtle blue. <Text style={{ fontFamily: "gelasibro-italic" }}>That is surreal.</Text> He was skeptical of this mysterious Utma force, even if he had seen some of Dendro's powers in action. He let go of the
          axe, expecting it to fall to the ground, but to his surprise it did not. The heavy weapon remained in place, floating in the air besides him, gently spinning forward—a levitating object somehow bound to him, defying the known laws of
          gravity. <Text style={{ fontFamily: "gelasibro-italic" }}>Zegmu.</Text> <Text style={{ fontFamily: "gelasibro-italic" }}>Oh. My. Goodness. It's freaking floating.</Text> He continued to watch his axe gently spinning next to him, as it
          levitated in the air.He thought of the code on Dendro's computer for an instant, then he put his two hands back on the axe and gripped onto it. He felt his mind calm. He looked back to the rink.{" "}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Maybe this is a sign that I must fight? This is proof there is something different inside of me.</Text> He brought the Naronian axe closer to his heart and hopped over the ledge of the rink. 
          {"\n"}
          {"\n"}Dendro turned towards him. "Jake. No, son. Go back. Run while you still can. I will fight them off," the injured warrior pleaded.{"\n"}
          {"\n"}Jake ignored him. He knew it was not so.{"\n"}
          {"\n"}As he approached the Venthum fighter, he didn't feel like prey any longer. Something aided his step, something hidden, something deep. When the trooper turned its attention towards Jake, Dendro charged the enemy with all the strength
          he had left, but the fighter easily sidestepped the attack, spun, and delivered a forceful kick to Dendro's head. Dendro fell over, and skidded down the rink. {"\n"}
          {"\n"}Jake marched towards the creature even faster. He had to divert its attention from Dendro. Then the enemy turned its head and moved swiftly towards Jake. Then the imposing eight foot creature's red eyes, curved helmet, and mutilated
          skin, stood in front of him and the Venthum blade came down at Jake incredibly fast. Jake had barely enough time to meet his opponent's weapon with his axe. {"\n"}
          {"\n"}Jake stumbled backward as the painful shockwave of the collision ran through his arms and elbows. His wrists and shoulders went numb.{"\n"}
          {"\n"}The Venthum fighter closed in on him. {"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Five feet.</Text> {"\n"}
          {"\n"}Jake continued to backpedal.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>Three feet.</Text> {"\n"}
          {"\n"}Was he about to die?{"\n"}
          {"\n"}He felt an electric sensation run up his feet, as if he had stepped on an exposed power line. His legs rattled. He felt paralyzing pain. <Text style={{ fontFamily: "gelasibro-italic" }}>What...what is happening..to..me.</Text> His
          legs almost gave in as they vibrated,but an instant later the pain stopped, and the sensation transformed into something almost pleasant. A warm, soothing, sensation started in his legs, then ran up his torso, arms, and the rest of his
          upper body. It was as if I had been immersed in an electric bath.{"\n"}
          {"\n"}
          <Text style={{ fontFamily: "gelasibro-italic" }}>What the heck?</Text> He thought.{"\n"}
          {"\n"}His hands weren't numb anymore.{"\n"}
          {"\n"}Strange looking characters moved across his vision as if some alien language were speaking to him from out of the void. The solid blue hue emitted from the top of his axe began to pulse, as if it were loading something: data, or
          something more profound. Jake felt a euphoric wave pulsate through his body, and his eyes were forced shut. When he reopened them, he wasn't Jake Addison any longer, at least the Jake Addison he knew.{"\n"}
          {"\n"}He approached his red-eyed opponent once again, and met the Venthum sword mid way through its arc with his silver axe; this time there was no vibrational shock. Then his axe began to move in perfect rhythm, as if his moves had been
          pre-rehearsed. The Venthum fighter's small, twisted face revealed concern.  {"\n"}
          {"\n"}Slash left, side step, parry, uppercut right, parry, Jake handed blow after blow, slash after slash, with powerful grace and elite form. He had now backed the eight foot tall Venthum fighter up the rink. They almost appeared evenly
          matched now, blow for blow. {"\n"}
          {"\n"}Jake had never used his body like this before: the agility, the control of his balance, the delicate interpretation of his planes of momentum. He was pure agility. He was a force. It felt like he sensed his opponent's movements before
          they happened. He backed up the fighter another few feet up the rink. Then he circled him: he felt in control. They exchanged another flurry of slashes; then they backed off each other momentarily. The fighter's face contorted in
          frustration, then it charged him and sprung into the air with its blade held high above its head. Jake backed up, with his axe held up high. But midway through its arc, a golden axe cut straight through the creature's torso from behind. The
          creature's face contorted, and it's body twisted backwards as it gave off a terrible high pitched shriek. Blood sprayed from the wound as the axe retracted. The Venthum fighter fell over dead. Its blood began to soak the ice.{"\n"}
          {"\n"}Dendro stood behind the trooper's body gripping his bloody golden axe. He peered at Jake, sizing him up. How did you do that, son?" Dendro asked incredulously. The patch of blood above his shoulder had grown larger. He appeared to be
          seriously wounded.{"\n"}
          {"\n"}Jake looked down at his axe, but the top edge was no longer pulsating. "I don't know...I felt..something...I saw...marks...superimposed over my vision...I don't know. It wasn't—" he tried to conceive what he had just done, but he
          couldn't—"it wasn't me." The golden rays of dawn broke over the top of the forest trees, making everything easier to see.{"\n"}
          {"\n"}Dendro stood there looking at him. "I do not understand. I watched. To achieve <Text style={{ fontFamily: "gelasibro-italic" }}>foresight</Text>...that is not possible," Dendro muttered. "Years of training...are required...even
          then...it is not guaranteed...took me...a decade." He looked to the ground as if he were thinking deeply. Then he looked up, his yellow eyes locked onto Jake. "To be wisest is to admit we know nothing. Nothing at all. We'll discuss this
          more later," Dendro said, his face grimaced as he felt his shoulder. "Let's get out of here!"{"\n"}
          {"\n"}"But, can you fly with that wound?" Jake asked with concern.{"\n"}
          {"\n"}"I will do what I can," Dendro replied.{"\n"}
          {"\n"}They hustled down the forest road, passing the smoking truck which had lodged itself into a large tree. They soon reached the burnt down barn facility, passing by the dead aliens that were still lying face down on the ground, and
          headed to the ship. They helped each other up the wing, then headed down the hatch.{"\n"}
          {"\n"}Dendro sat in his cockpit seat and pulled off his robe. His bare shoulder was exposed. The wound went deep, at least three inches into the flesh; Jake could see bone. Dendro pulled out a turquoise patch from a kit near his feet and
          placed it on the laceration. It seemed to magically tighten around the injured muscle. "That'll have to do.. It will stop the spread of infection and keep the wound closed, but I must get medical help on the ground." His face tightened as
          he pulled the robe back over his shoulder. "If we depart now we can get to Casablanca in under four hours," Dendro said."Give us a few days to regroup in Morocco, understand what's going on across The Nestomir, and gather whatever intel we
          can from Zimmer. Then hopefully, we can get you home. Now, hang your axe on the wall next to mine."{"\n"}
          {"\n"}Jake looked at Dendro, but said nothing. He walked to the wall, spotted a hook next to the large axe, and rested his weapon against it. Then he sat down and buckled up as Dendro fired up the vertical engines. A few moments later, they
          ascended over the canopy of the forest. The abandoned resort grew smaller, and smaller, until it was hard to discern one structure from another. The vertical thrusters powered off and the main engines powered on and then they began moving
          fast towards the sun. East. Towards Morocco.
        </Text>
      </View>
    );
  }
}
