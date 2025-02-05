---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/5
  - monster/size/large
  - monster/type/giant
aliases:
  - Cave Troll
---
# [[5. Mechanics\Bestiary\Giant\Cave Troll (GRIFFONSSADDLEBAG3).md|Cave Troll]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Cave trolls, like normal trolls, are tall and lanky giantkin. Cave trolls, in particular, are more gray and hunched over. They have a penchant for crystals and often collect them for trade or crafting. They form small communities within their cave networks, and at times make the transition to larger society.

```statblock
"name": "Cave Troll (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "giant"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "73"
"hit_dice": "7d10 + 35"
"stats":
- !!int "19"
- !!int "12"
- !!int "20"
- !!int "10"
- !!int "11"
- !!int "6"
"speed": "30 ft."
"skillsaves":
  "Investigation": !!int "3"
  "Perception": !!int "3"
"senses": "tremorsense 30 ft., darkvision 120 ft., passive Perception 13"
"languages": "Giant, Undercommon"
"cr": "5"
"traits":
- "desc": "The troll has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The troll has advantage on an attack roll against a creature if at least\
    \ one of the troll's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
  "name": "Pack Tactics"
- "desc": "The troll regains 10 hit points at the start of its turn. If the troll\
    \ takes fire or radiant damage, this trait doesn't function at the start of the\
    \ troll's next turn.\n\nThe troll dies only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The troll makes three attacks: one with its bite and two with its morningstar."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Morningstar"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
