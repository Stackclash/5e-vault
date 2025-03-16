---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/5
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Festus Battlechef
---
# [[5. Mechanics/Bestiary/Humanoid/Festus Battlechef (GRIFFONSSADDLEBAG2).md|Festus Battlechef]]
*Source: The Griffon's Saddlebag, Book 2 p. 359*

A veteran of both cuisine and combat, the battlechef is a devout warrior and an exemplary cook. Renowned for their magical prowess and strength of will, a battlechef goes where their deity and culinary sense of purpose lead. They are found most often behind the bar, within the bustling kitchen, slicing through enemies, or providing much-needed succor to those in need.

```statblock
"name": "Festus Battlechef (GRIFFONSSADDLEBAG2)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Chain Mail.md|chain mail]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "11"
- !!int "16"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "6"
  "Nature": !!int "3"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Common, plus two other languages"
"cr": "5"
"traits":
- "desc": "The battlechef is an 8th-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 14, +6 to hit with spell attacks). It has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Guidance.md|guidance]],\
    \ [[5. Mechanics/Spells/Mending.md|mending]], [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]],\
    \ [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n1st level (4 slots):\
    \ [[5. Mechanics/Spells/Bless.md|bless]], [[5. Mechanics/Spells/Goodberry.md|goodberry]],\
    \ [[5. Mechanics/Spells/Purify Food And Drink.md|purify food and drink]]\n\n2nd\
    \ level (3 slots): [[5. Mechanics/Spells/Heat Met(AL).md|heat metal]], [[5. Mechanics/Spells/Protection From Poison.md|protection\
    \ from poison]], [[5. Mechanics/Spells/Spiritual Weapon.md|spiritual weapon]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Create Food And Water.md|create food and water]],\
    \ [[5. Mechanics/Spells/Mass Healing Word.md|mass healing word]], [[5. Mechanics/Spells/Stinking Cloud.md|stinking cloud]]\n\
    \n4th level (2 slots): [[5. Mechanics/Spells/Blight.md|blight]], [[5. Mechanics/Spells/Control Water.md|control water]]"
  "name": "Spellcasting"
- "desc": "When the battlechef hits a creature with a weapon attack, the battlechef\
    \ can cause the attack to deal an extra 4 (1d8) acid or poison damage (battlechef's\
    \ choice) to the target."
  "name": "Divine Strike (1/Turn)"
- "desc": "The battlechef has advantage on saving throws against [[/5. Mechanics/Rules/Conditions.md#Poisoned|poison]]."
  "name": "Poison Resilience"
- "desc": "While the battlechef is [[/5. Mechanics/Rules/Conditions.md#Drunkenness|drunk]],\
    \ it can choose to magically suppress the alcohol's effects for 1 minute."
  "name": "Strong Stomach (Recharges after a Short or Long Rest)"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) slashing damage."
  "name": "Handaxe"
- "desc": "The battlechef creates a magical potion in its free hand or at its feet\
    \ (battlechef's choice). A creature that drinks this potion regains 15 (2d6 +\
    \ 8) hit points. The potion turns to dust and is lost if the battlechef finishes\
    \ a short or long rest before it is consumed."
  "name": "Create Healing Draft (Recharges after a Short or Long Rest)"
"reactions":
- "desc": "When the battlechef is hit by an attack from a creature within 5 feet of\
    \ it, the creature must make a DC 14 Constitution saving throw. On a failed save,\
    \ the creature takes 6 (1d12) poison damage and is [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
    \ until the end of its next turn. On a successful save, the creature takes half\
    \ as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]."
  "name": "Table-Turner (3/Day)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
