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
  - Aberrant Spirit (Beholderkin)
---
# [[5. Mechanics\Bestiary\Aberration\Aberrant Spirit Beholderkin (TCE).md|Aberrant Spirit (Beholderkin)]]
*Source: Tasha's Cauldron of Everything p. 109*

```statblock
"name": "Aberrant Spirit Beholderkin (TCE)"
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
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "psychic"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Deep Speech, understands the languages you speak"
"actions":
- "desc": "The aberration makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: YourSpellAttack to hit, range 150 ft., one creature.\
    \ Hit: 1d8 + 3 + the spell's level psychic damage."
  "name": "Eye Ray"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
