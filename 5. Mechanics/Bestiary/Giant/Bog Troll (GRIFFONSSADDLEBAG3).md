---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/6
  - monster/size/large
  - monster/type/giant
aliases:
  - Bog Troll
---
# [[5. Mechanics/Bestiary/Giant/Bog Troll (GRIFFONSSADDLEBAG3).md|Bog Troll]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

```statblock
"name": "Bog Troll (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "92"
"hit_dice": "8d10 + 48"
"stats":
- !!int "18"
- !!int "13"
- !!int "22"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Giant"
"cr": "6"
"traits":
- "desc": "The troll can breathe air and water."
  "name": "Amphibious"
- "desc": "The troll has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The troll regains 10 hit points at the start of its turn. If the troll\
    \ takes acid or fire damage, this trait doesn't function at the start of the troll's\
    \ next turn. The troll dies only if it starts its turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Regeneration"
- "desc": "Any creature that starts its turn within 10 feet of the troll must succeed\
    \ on a DC 17 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
    \ until the start of the creature's next turn. On a successful saving throw, the\
    \ creature is immune to the stench of all bog trolls for 1 hour."
  "name": "Stench"
- "desc": "The troll has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks made to hide in swampy terrain."
  "name": "Swamp Camouflage"
"actions":
- "desc": "The troll makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 4 (1d8) poison damage."
  "name": "Fetid Claw"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
