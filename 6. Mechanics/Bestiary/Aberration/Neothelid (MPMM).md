---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/gargantuan
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
"name": "Neothelid"
"size": "Gargantuan"
"type": "aberration"
"alignment": "Chaotic Evil"
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
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "8"
  "Intelligence": !!int "1"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 13"
"languages": ""
"cr": "13"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The neothelid casts one of the following spells, requiring no spell components\
    \ and using Wisdom as the spellcasting ability (spell save DC 16):\n\nAt will:\
    \ [[/6. Mechanics/Spells/levitate.md\|levitate]]\n\n1/day each: [[/6. Mechanics/Spells/confusion.md\|confusion]],\
    \ [[/6. Mechanics/Spells/feeblemind.md\|feeblemind]], [[/6. Mechanics/Spells/telekinesis.md\|telekinesis]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The neothelid is aware of the presence of creatures within 1 mile of it\
    \ that have an Intelligence score of 4 or higher. It knows the distance and direction\
    \ to each creature, as well as each creature's Intelligence score, but can't sense\
    \ anything else about it. A creature protected by a [[/6. Mechanics/Spells/mind-blank.md\|mind blank]]\
    \ spell, a [[/6. Mechanics/Spells/nondetection.md\|nondetection]] spell, or similar\
    \ magic can't be perceived in this manner."
  "name": "Creature Sense"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The neothelid has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 15 ft., one target.\
    \ Hit: dice: 3d8 + 8|avg (3d8 + 8) bludgeoning damage plus dice: 2d10|avg\
    \ (2d10) psychic damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 18 Strength saving throw or be swallowed by the neothelid. A\
    \ swallowed creature is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] and\
    \ [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], it has total cover\
    \ against attacks and other effects outside the neothelid, and it takes dice:\
    \ 6d6|avg (6d6) acid damage at the start of each of the neothelid's turns.\n\
    \nIf the neothelid takes 30 damage or more on a single turn from a creature inside\
    \ it, the neothelid must succeed on a DC 18 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [[6. Mechanics/Rules/conditions.md#prone\|prone]]\
    \ in a space within 10 feet of the neothelid. If the neothelid dies, a swallowed\
    \ creature is no longer [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]\
    \ by it and can escape from the corpse by using 20 feet of movement, exiting [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Tentacles"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The neothelid exhales acid in a 60- foot cone. Each creature in that area\
    \ must make a DC 18 Dexterity saving throw, taking 35 (dice: 10d6|avg (10d6))\
    \ acid damage on a failed save, or half as much damage on a successful one."
  "name": "Acid Breath (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/aberration/token/neothelid.png"
aliases: ["Neothelid"]
---
# Neothelid
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 193, Volo's Guide to Monsters p. 181*  

A slime-covered worm of immense size, a neothelid is the result of the mind flayer reproductive cycle gone horribly wrong. When an illithid colony collapses, typically after an external assault, and the elder brain is killed, the colony's tadpoles are suddenly freed from their fate. They no longer serve as food—and are no longer fed by their caretakers. Driven by hunger, they turn to devouring one another. Only one tadpole survives out of the thousands in the colony's pool, and it emerges as a neothelid.

Neothelids know nothing beyond their predatory existence. They prowl subterranean passages, using their rudimentary psionic abilities to search out and incapacitate brains to sate their constant hunger, growing ever more vicious. These creatures can spray tissue-dissolving enzymes from their tentacle ducts, reducing victims to puddles of slime and leaving only the pulsing brains unharmed. They have no knowledge of their link to illithids, so they're just as likely to prey on mind flayers as on anything else.

Mind flayers consider neothelids dangerous abominations—normally they eat or destroy any tadpoles that grow larger than a few inches in length without being implanted in a brain so they can't become such threats. Neothelids are not intelligent enough for elder brains to detect, so mind flayers are always alert for signs of their presence and organize hunting parties to exterminate any of these murderous worms they learn of.

```ad-statblock
title: Neothelid
![[/6. Mechanics/Bestiary/Aberration/Token/neothelid.png#token]]
*Gargantuan aberration, Chaotic Evil*

- **Armor Class** 16 (natural armor)
- **Hit Points** `dice: 15d20 + 75|text(232)` (15d20 + 75) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|27 (+8)| 7 (-2)|21 (+5)| 3 (-4)|16 (+3)|12 (+1)|

- **Proficiency Bonus** +5
- **Saving Throws** Intelligence +1, Wisdom +8, Charisma +6
- **Skills** ⏤
- **Senses** blindsight 120 ft. (blind beyond this radius), passive Perception 13
- **Languages** —
- **Challenge** 13

## Traits

***Creature Sense.*** The neothelid is aware of the presence of creatures within 1 mile of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature's Intelligence score, but can't sense anything else about it. A creature protected by a [[/6. Mechanics/Spells/mind-blank.md\|mind blank]] spell, a [[/6. Mechanics/Spells/nondetection.md\|nondetection]] spell, or similar magic can't be perceived in this manner.

***Magic Resistance.*** The neothelid has advantage on saving throws against spells and other magical effects.

***Spellcasting (Psionics).*** The neothelid casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save DC 16):

**At will**: [[/6. Mechanics/Spells/levitate.md\|levitate]]

**1/day each**: [[/6. Mechanics/Spells/confusion.md\|confusion]], [[/6. Mechanics/Spells/feeblemind.md\|feeblemind]], [[/6. Mechanics/Spells/telekinesis.md\|telekinesis]]

## Actions

***Tentacles.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 15 ft., one target. Hit: `dice: 3d8 + 8` (`3d8 + 8`) bludgeoning damage plus `dice: 2d10` (`2d10`) psychic damage. If the target is a Large or smaller creature, it must succeed on a DC 18 Strength saving throw or be swallowed by the neothelid. A swallowed creature is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] and [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], it has total cover against attacks and other effects outside the neothelid, and it takes `dice: 6d6` (`6d6`) acid damage at the start of each of the neothelid's turns.

If the neothelid takes 30 damage or more on a single turn from a creature inside it, the neothelid must succeed on a DC 18 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall [[6. Mechanics/Rules/conditions.md#prone\|prone]] in a space within 10 feet of the neothelid. If the neothelid dies, a swallowed creature is no longer [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] by it and can escape from the corpse by using 20 feet of movement, exiting [[6. Mechanics/Rules/conditions.md#prone\|prone]].

***Acid Breath (Recharge 5-6).*** The neothelid exhales acid in a 60- foot cone. Each creature in that area must make a DC 18 Dexterity saving throw, taking 35 (`dice: 10d6` (`10d6`)) acid damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

underdark