---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/4
  - monster/size/medium
  - monster/type/humanoid/half-dryad
aliases:
  - Arboreal Warrior
---
# [[5. Mechanics/Bestiary/Humanoid/Arboreal Warrior (GRIFFONSSADDLEBAG3).md|Arboreal Warrior]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Arboreal warriors are fey soldiers of dryad descent that are typically responsible for defending the same forests as their ancestors. They often carry deep-seated grudges against one or more powerful archfey, who they consider to be responsible for their dryad mothers' circumstances.

```statblock
"name": "Arboreal Warrior (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-dryad"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[[5. Mechanics/Items/Half Plate Armor.md|half plate]]"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "15"
- !!int "18"
- !!int "16"
- !!int "11"
- !!int "17"
- !!int "10"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "5"
  "Strength": !!int "4"
"skillsaves":
  "Nature": !!int "2"
  "Athletics": !!int "4"
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Elvish, Sylvan"
"cr": "4"
"traits":
- "desc": "The warrior is a 9th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). It knows the following ranger\
    \ spells:\n\nCantrips (at will): [[5. Mechanics/Spells/Druidcraft.md|druidcraft]],\
    \ [[5. Mechanics/Spells/Produce Flame.md|produce flame]]\n\n1st level (4 slots):\
    \ [[5. Mechanics/Spells/Entangle.md|entangle]], [[5. Mechanics/Spells/Hunters Mark.md|hunter's mark]],\
    \ [[5. Mechanics/Spells/Speak With Animals.md|speak with animals]]\n\n2nd level\
    \ (3 slots): [[5. Mechanics/Spells/Locate Animals Or Plants.md|locate animals or plants]],\
    \ [[5. Mechanics/Spells/Spike Growth.md|spike growth]]\n\n3rd level (2 slots):\
    \ [[5. Mechanics/Spells/Speak With Plants.md|speak with plants]]"
  "name": "Spellcasting"
- "desc": "The warrior can use 5 feet of movement on its turn to magically step into\
    \ one Large or bigger living tree within its reach. The warrior instantly knows\
    \ the location of all other living trees within 60 feet of it, before emerging\
    \ from one of those trees of the warrior's choice that is Large or bigger. The\
    \ warrior appears in an unoccupied space within 5 feet of the new tree."
  "name": "Tree Step (1/Day)"
"actions":
- "desc": "The warrior makes two weapon attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Scimitar"
- "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
    \ 8 (1d8 + 4) piercing damage."
  "name": "Longbow"
- "desc": "The warrior summons a fey spirit that takes the form of a beast of challenge\
    \ rating 1 or lower, which appears in an unoccupied space that the warrior can\
    \ see within 60 feet of it. The beast disappears when it drops to 0 hit points\
    \ or when the warrior dismisses it as a bonus action. The beast is friendly to\
    \ the warrior and its companions, it shares the warrior's initiative but takes\
    \ its turn immediately after the warrior's, and it obeys the warrior's verbal\
    \ commands. If the warrior doesn't issue any commands, the beast takes the Dodge\
    \ action and uses its movement to avoid danger."
  "name": "Summon Beast (Recharges after a Short or Long Rest)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
