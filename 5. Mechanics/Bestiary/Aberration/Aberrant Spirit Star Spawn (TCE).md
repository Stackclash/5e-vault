---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Medium
tags:
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/medium
  - monster/type/aberration
aliases:
  - Aberrant Spirit (Star Spawn)
---
# [[5. Mechanics/Bestiary/Aberration/Aberrant Spirit Star Spawn (TCE).md|Aberrant Spirit (Star Spawn)]]
*Source: Tasha's Cauldron of Everything p. 109*

```statblock
"name": "Aberrant Spirit Star Spawn (TCE)"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "6"
"speed": "30 ft."
"damage_immunities": "psychic"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Deep Speech, understands the languages you speak"
"traits":
- "desc": "At the start of each of the aberration's turns, each creature within 5\
    \ feet of the aberration must succeed on a Wisdom saving throw against your spell\
    \ save DC or take 2d6 psychic damage, provided that the aberration isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
  "name": "Whispering Aura"
"actions":
- "desc": "The aberration makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: YourSpellAttack to hit, reach 5 ft., one creature.\
    \ Hit: 1d8 + 3 + the spell's level psychic damage."
  "name": "Psychic Slam"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
