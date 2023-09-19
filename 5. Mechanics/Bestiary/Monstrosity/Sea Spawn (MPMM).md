---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/underwater
- monster/size/medium
- monster/type/monstrosity
aliases: ["Sea Spawn"]
---
# Sea Spawn
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 211*  

Many of the stories sung as sea chanteys and recounted in dockside taverns tell of people lost to the sea—but not merely drowned and gone. Some unfortunates taken by the ocean live on as sea spawn, haunting the waves like tortured reflections of their former selves. Coral encrusts them. Barnacles cling to their cold skin. Lungs that once filled with air can now breathe in water as well.

Tales provide myriad reasons for these strange transformations. Folklore warns against falling in love with a sea elf or merfolk, braving storms in hopes of a bounteous catch, and promising your heart to a sea god. Such cautionary tales disguise the deeper truth: things lurking beneath the waves strive to claim the hearts and minds of land dwellers.

[[5. Mechanics/Bestiary/Monstrosity/Kraken.md|Krakens]], morkoths, [[5. Mechanics/Bestiary/Fey/Sea Hag.md|sea hags]], [[5. Mechanics/Bestiary/Elemental/Marid.md|marids]], [[5. Mechanics/Bestiary/Giant/Storm Giant.md|storm giants]], [[5. Mechanics/Bestiary/Dragon/Dragon Turtle.md|dragon turtles]]—all of these and more can mark mortals as their own and claim them as minions. Unlucky folk might become beholden to such a master through a bleak bargain, or they might find themselves cursed by one. Once warped into a fishlike form, a sea spawn can't leave the water for long without courting death.

Sea spawn come in a wide variety of forms. An individual might have a tentacle for an arm, the jaws of a shark, a sea urchin's spines, a whale's fin, octopus eyes, seaweed hair, or any combination of such qualities. Some of these piscine body parts provide them with special abilities.

## The Sea Spawn of Purple Rocks

Visitors to a string of islands called the Purple Rocks (in the Forgotten Realms setting) might notice one curious fact about the islands' human inhabitants: no infants or elderly are among them. This is because babies born to the Rocklanders are claimed by a [[5. Mechanics/Bestiary/Monstrosity/Kraken.md|kraken]] named Slarkrethel. The experience transforms the children into fanatics dedicated to the kraken. They return from the sea as humans, but when they reach old age, they transform into sea spawn and rejoin their master in the depths. Some children return having suffered partial transformations and must conceal themselves from strangers until their full transformation in order to keep the secret of the Purple Rocks.

Kraken priests (in this book) tend to the kraken's flock. Most of the priests are island natives, but some are other sorts of creatures that live in the water around the Purple Rocks, such as [[5. Mechanics/Bestiary/Humanoid/Merfolk.md|merfolk]] or [[5. Mechanics/Bestiary/Monstrosity/Merrow.md|merrow]], or even sea elves.

```statblock
"name": "Sea Spawn"
"size": "Medium"
"type": "monstrosity"
"alignment": "Typically  Neutral Evil"
"ac": !!int "11"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "15"
- !!int "8"
- !!int "15"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "20 ft., swim 30 ft."
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Aquan and Common but can't speak"
"cr": "1"
"traits":
- "desc": "The sea spawn can breathe air and water, but it needs to be submerged in\
    \ the sea at least once a day for 1 minute to avoid suffocating."
  "name": "Limited Amphibiousness"
"actions":
- "desc": "The sea spawn makes two Unarmed Strike attacks and one Piscine Anatomy\
    \ attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) bludgeoning damage."
  "name": "Unarmed Strike"
- "desc": "The sea spawn uses one of the following options (choose one or roll a dice:\
    \ d6|avg (d6)):\n\n- 1–2 Bite. Melee Weapon Attack: dice: d20+4 (+4\
    \ to hit), reach 5 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage.  \n- 3–4 Poison Quills. Melee Weapon Attack: dice: d20+4 (+4\
    \ to hit), reach 5 ft., one creature. Hit: dice: 1d6|avg (1d6) poison damage,\
    \ and the target must succeed on a DC 12 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.  \n- 5–6 Tentacle. Melee\
    \ Weapon Attack: dice: d20+4 (+4 to hit), reach 10 ft., one target. Hit:\
    \ dice: 1d6 + 2|avg (1d6 + 2) bludgeoning damage, and the target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 12) if it is a Medium or smaller creature. Until this grapple ends,\
    \ the sea spawn can't use this tentacle on another target.  "
  "name": "Piscine Anatomy"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/monstrosity/token/sea-spawn.png"
```
^statblock

## Environment

coastal, underwater