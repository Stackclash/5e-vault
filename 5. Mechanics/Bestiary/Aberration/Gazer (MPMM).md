---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/1-2
- monster/environment/underdark
- monster/size/tiny
- monster/type/aberration/beholder
statblock: inline
aliases: ["Gazer"]
---
# [[5. Mechanics\Bestiary\Aberration\Gazer (MPMM).md|Gazer]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 134*  

A gazer is a tiny manifestation of the dreams of a beholder. It resembles the beholder who dreamed it into existence, but its body is only 8 inches wide and it has only four eyestalks. It follows its creator like a devoted, aggressive puppy, and sometimes small packs of these creatures patrol their master's lair for vermin to kill and lone creatures to harass.

A gazer can't speak any languages but can approximate words and sentences it hears, mimicking them in a high-pitched, mocking manner. Beholders find gazers amusing and tolerate their presence like spoiled pets. Some beholders with wizard minions insist they take a gazer as a familiar because the beholders can see through the eyes of these creatures.

A wild gazer (one living separately from a beholder) is territorial, eats bugs and little animals, and is known for playing with its food. A lone wild gazer avoids picking fights with creatures that are Medium or larger, but a pack of them might take on larger prey. A gazer might follow the folk in its territory, noisily mimicking their speech and generally being a nuisance, until they leave the area, but it flees if confronted by something it can't kill.

```statblock
"name": "Gazer (MPMM)"
"size": "Tiny"
"type": "aberration"
"subtype": "beholder"
"alignment": "Typically  Neutral Evil"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d4 + 6"
"stats":
- !!int "3"
- !!int "17"
- !!int "14"
- !!int "3"
- !!int "10"
- !!int "7"
"speed": "0 ft., fly 30 ft. (hover)"
"saves":
  "Wisdom": !!int "2"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#prone|prone]]"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The gazer can mimic simple sounds of speech it has heard, in any language.\
    \ A creature that hears the sounds can tell they are imitations with a successful\
    \ DC 10 Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]]) check."
  "name": "Mimicry"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage."
  "name": "Bite"
- "desc": "The gazer shoots two of the following magical eye rays at random (roll\
    \ two dice: d4|avg (d4)s, and reroll duplicates), choosing one or two targets\
    \ it can see within 60 feet of it:\n\n- 1 Dazing Ray. The targeted creature\
    \ must succeed on a DC 12 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ until the start of the gazer's next turn. While the target is [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ in this way, its speed is halved, and it has disadvantage on attack rolls. \
    \ \n- 2 Fear Ray. The targeted creature must succeed on a DC 12 Wisdom saving\
    \ throw or be [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] until the\
    \ start of the gazer's next turn.  \n- 3 Frost Ray. The target must succeed\
    \ on a DC 12 Dexterity saving throw or take dice: 3d6|avg (3d6) cold damage.\
    \  \n- 4 Telekinetic Ray. If the target is a creature that is Medium or smaller,\
    \ it must succeed on a DC 12 Strength saving throw or be moved up to 30 feet directly\
    \ away from the gazer. If the target is a Tiny object that isn't being worn or\
    \ carried, the gazer moves it up to 30 feet in any direction. The gazer can also\
    \ exert fine control on objects with this ray, such as manipulating a simple tool\
    \ or opening a container.  "
  "name": "Eye Rays"
"bonus_actions":
- "desc": "The gazer moves up to its speed toward a hostile creature that it can see."
  "name": "Aggressive"
"source":
- "MPMM"
- "VGM"
- "SjA"
"image": "compendium/bestiary/aberration/token/gazer.png"
```
^statblock

## Environment

underdark

## Harvester Table
```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```