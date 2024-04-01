---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/13
  - monster/environment/underdark
  - monster/size/gargantuan
  - monster/type/aberration
statblock: inline
aliases:
  - Neothelid
---
# [[5. Mechanics\Bestiary\Aberration\Neothelid.md|Neothelid]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 193, Volo's Guide to Monsters p. 181*

A slime-covered worm of immense size, a neothelid is the result of the mind flayer reproductive cycle gone horribly wrong. When an illithid colony collapses, typically after an external assault, and the elder brain is killed, the colony's tadpoles are suddenly freed from their fate. They no longer serve as food—and are no longer fed by their caretakers. Driven by hunger, they turn to devouring one another. Only one tadpole survives out of the thousands in the colony's pool, and it emerges as a neothelid.

Neothelids know nothing beyond their predatory existence. They prowl subterranean passages, using their rudimentary psionic abilities to search out and incapacitate brains to sate their constant hunger, growing ever more vicious. These creatures can spray tissue-dissolving enzymes from their tentacle ducts, reducing victims to puddles of slime and leaving only the pulsing brains unharmed. They have no knowledge of their link to illithids, so they're just as likely to prey on mind flayers as on anything else.

Mind flayers consider neothelids dangerous abominations—normally they eat or destroy any tadpoles that grow larger than a few inches in length without being implanted in a brain so they can't become such threats. Neothelids are not intelligent enough for elder brains to detect, so mind flayers are always alert for signs of their presence and organize hunting parties to exterminate any of these murderous worms they learn of.

```statblock
"name": "Neothelid"
"size": "Gargantuan"
"type": "aberration"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "16"
"hp": !!int "232"
"hit_dice": "15d20 + 75"
"stats":
- !!int "27"
- !!int "7"
- !!int "21"
- !!int "3"
- !!int "16"
- !!int "12"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "8"
  "Intelligence": !!int "1"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 13"
"languages": ""
"cr": "13"
"traits":
- "desc": "The neothelid casts one of the following spells, requiring no spell components\
    \ and using Wisdom as the spellcasting ability (spell save DC 16):\n\nAt will:\
    \ [[5. Mechanics/Spells/Levitate.md|levitate]]\n\n1/day each: [[5. Mechanics/Spells/Confusion.md|confusion]],\
    \ [[5. Mechanics/Spells/Feeblemind.md|feeblemind]], [[5. Mechanics/Spells/Telekinesis.md|telekinesis]]"
  "name": "spells"
- "desc": "The neothelid is aware of the presence of creatures within 1 mile of it\
    \ that have an Intelligence score of 4 or higher. It knows the distance and direction\
    \ to each creature, as well as each creature's Intelligence score, but can't sense\
    \ anything else about it. A creature protected by a [[5. Mechanics/Spells/Mind Blank.md|mind blank]]\
    \ spell, a [[5. Mechanics/Spells/Nondetection.md|nondetection]] spell, or similar\
    \ magic can't be perceived in this manner."
  "name": "Creature Sense"
- "desc": "The neothelid has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 15 ft., one target.\
    \ Hit: dice: 3d8 + 8|avg (3d8 + 8) bludgeoning damage plus dice: 2d10|avg\
    \ (2d10) psychic damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 18 Strength saving throw or be swallowed by the neothelid. A\
    \ swallowed creature is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]] and\
    \ [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]], it has total cover\
    \ against attacks and other effects outside the neothelid, and it takes dice:\
    \ 6d6|avg (6d6) acid damage at the start of each of the neothelid's turns.\n\
    \nIf the neothelid takes 30 damage or more on a single turn from a creature inside\
    \ it, the neothelid must succeed on a DC 18 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ in a space within 10 feet of the neothelid. If the neothelid dies, a swallowed\
    \ creature is no longer [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ by it and can escape from the corpse by using 20 feet of movement, exiting [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Tentacles"
- "desc": "The neothelid exhales acid in a 60- foot cone. Each creature in that area\
    \ must make a DC 18 Dexterity saving throw, taking dice: 10d6|avg (10d6) acid\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Acid Breath (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Aberration/token/neothelid-mpmm.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
