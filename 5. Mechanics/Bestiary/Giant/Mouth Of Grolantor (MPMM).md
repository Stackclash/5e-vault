---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/grassland
- monster/environment/hill
- monster/size/huge
- monster/type/giant/hill-giant
aliases: ["Mouth of Grolantor"]
---
# Mouth of Grolantor
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 187*  

Hill giants consume spoiled food and diseased carcasses with as much enthusiasm as children eating dessert and rarely suffer for such eating habits. When one of their kind becomes incapable of keeping down food, that giant is seen, among hill giant worshipers of the god Grolantor, as the vessel of a message from the deity.

The sickened giant's compatriots separate the giant from the rest of the community, often trapping them in a cage or tying them to a post. A priest of Grolantor visits the famished giant daily, trying to read portents in the puddles of bile the hill giant retches up. If the sickness soon passes, they allow the hill giant to rejoin society. If not, the hill giant is instead starved to the point of desperation so Grolantor's hunger can be given a mouth in the world.

A mouth of Grolantor is revered as a holy embodiment of Grolantor's aching hunger. Unlike a typical sluggish hill giant, a mouth of Grolantor is thin as a whippet, alert like a bird, and constantly twitchy. Mouths are kept perpetually imprisoned or shackled; if they break free, they're sure to kill anyone nearby before they're brought down or escape on a killing spree. The only time mouths of Grolantor are set loose is during a war, during a raid against an enemy settlement, or in a last-ditch defense of Grolantor's faithful. When a mouth of Grolantor has slaughtered and eaten their fill of enemies, they pass out amid the gory remains of their victims, making them easy to recapture.

```statblock
"name": "Mouth of Grolantor"
"size": "Huge"
"type": "giant"
"subtype": "hill giant"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "14"
"hp": !!int "105"
"hit_dice": "10d12 + 40"
"stats":
- !!int "21"
- !!int "10"
- !!int "18"
- !!int "5"
- !!int "7"
- !!int "5"
"speed": "50 ft."
"skillsaves":
  "Perception": "+1"
"condition_immunities": "frightened"
"senses": "passive Perception 11"
"languages": "Giant"
"cr": "6"
"traits":
- "desc": "The giant is immune to the [[5. Mechanics/Spells/Confusion.md|confusion]]\
    \ spell.\n\nOn each of its turns, the giant uses all its movement to move toward\
    \ the nearest creature or whatever else it might perceive as food. Roll a dice:\
    \ d10|avg (d10) at the start of each of the giant's turns to determine its\
    \ action for that turn:\n\n- 1–3. The giant makes three Fist attacks against\
    \ one random creature within reach. If no creatures are within reach, the giant\
    \ flies into a rage and gains advantage on all attack rolls until the end of its\
    \ next turn.  \n- 4–5. The giant makes one Fist attack against each creature\
    \ within reach. If no creatures are within reach, the giant makes one Fist attack\
    \ against itself.  \n- 6–7. The giant makes one Bite attack against one random\
    \ creature within reach. If no other creatures are within reach, its eyes glaze\
    \ over and it is [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]] until the\
    \ start of its next turn.  \n- 8–10. The giant makes one Bite attack and two\
    \ Fist attacks against one random creature within reach. If no creatures are within\
    \ reach, the giant flies into a rage and gains advantage on all attack rolls until\
    \ the end of its next turn.  "
  "name": "Mouth of Chaos"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 3d6 + 5|avg (3d6 + 5) piercing damage, and the giant magically\
    \ regains hit points equal to the damage dealt."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d8 + 5|avg (3d8 + 5) bludgeoning damage."
  "name": "Fist"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/giant/token/mouth-of-grolantor.png"
```
^statblock

## Environment

grassland, hill