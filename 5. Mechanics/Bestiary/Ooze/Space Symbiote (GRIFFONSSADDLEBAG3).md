---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/4
  - monster/size/large
  - monster/type/ooze
aliases:
  - Space Symbiote
---
# [[5. Mechanics/Bestiary/Ooze/Space Symbiote (GRIFFONSSADDLEBAG3).md|Space Symbiote]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A space symbiote is a pitch-dark ooze that travels through the Astral Plane and Cosmos in seach of living, or even once-living, matter. Cosmos-faring humanoids consumed by it are posthumously reanimated, becoming mindless thralls of the otherwise aimless ooze as it travels the universe in search of its next meal.

```statblock
"name": "Space Symbiote (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"stats":
- !!int "14"
- !!int "6"
- !!int "17"
- !!int "3"
- !!int "6"
- !!int "1"
"speed": "0 ft., fly 20 ft. (hover)"
"skillsaves":
  "Stealth": !!int "2"
"damage_resistances": "necrotic; radiant; bludgeoning, piercing from nonmagical attacks"
"damage_immunities": "cold, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "4"
"traits":
- "desc": "When the symbiote kills a humanoid with a melee attack or touches a humanoid\
    \ corpse, a piece of itself attaches to the creature's body and reanimates it.\n\
    \nThe reanimated creature is friendly to the symbiote and has the statistics of\
    \ a zombie, but it has a flying speed of 20 feet and can hover."
  "name": "Alien Animation"
- "desc": "The symbiote can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "The symbiote has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks made to hide in Wild Space or the Astral Plane."
  "name": "Space Camouflage"
- "desc": "The symbiote knows the distance and direction to each creature it has reanimated\
    \ as long as it and the creature are on the same plane of existence. In addition,\
    \ it can magically communicate simple ideas and images with any such creature."
  "name": "Symbiotic Bond"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage plus 7 (2d6) necrotic damage."
  "name": "Pseudopod"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
