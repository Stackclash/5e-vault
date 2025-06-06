---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/6
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Marshwarden
---
# [[5. Mechanics\Bestiary\Humanoid\Marshwarden (GRIFFONSSADDLEBAG3).md|Marshwarden]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

```statblock
"name": "Marshwarden (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "typically  Any Non-Chaotic alignment"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Breastplate.md|breastplate]]"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "5"
"stats":
  - !!int "14"
  - !!int "20"
  - !!int "17"
  - !!int "13"
  - !!int "19"
  - !!int "10"
"speed": "30 ft., climb 30 ft., swim 30 ft."
"saves":
  - "strength": "+5"
  - "dexterity": "+8"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Animal%20Handling|Animal Handling]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+8"
"senses": "passive Perception 17"
"languages": "Common plus two other languages"
"cr": "6"
"traits":
  - "desc": "The marshwarden is a 13th-level spellcaster. Its spellcasting ability\
      \ is Wisdom (spell save DC 15). It knows the following ranger spells:\n\n1st\
      \ level (4 slots): [[5. Mechanics/Spells/Detect Poison And Disease.md|detect poison and disease]],\
      \ [[5. Mechanics/Spells/Grease.md|grease]], [[5. Mechanics/Spells/Hunters Mark.md|hunter's mark]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Find Steed.md|find steed]] (takes\
      \ the form of a Large giant frog), [[5. Mechanics/Spells/Protection From Poison.md|protection from poison]]\n\
      \n3rd level (3 slots): [[5. Mechanics/Spells/Plant Growth.md|plant growth]],\
      \ [[5. Mechanics/Spells/Stinking Cloud.md|stinking cloud]]\n\n4th level (1 slots):\
      \ [[5. Mechanics/Spells/Control Water.md|control water]]"
    "name": "Spellcasting"
  - "desc": "When the marshwarden is hidden from a creature and misses it with a ranged\
      \ attack using a blowgun, making the attack doesn't reveal the marshwarden's\
      \ position."
    "name": "Blowgun Adept"
  - "desc": "The marshwarden can move across liquids on its turn without falling during\
      \ the move."
    "name": "Fluid Movement"
  - "desc": "The marshwarden can hold its breath for 1 hour."
    "name": "Hold Breath"
  - "desc": "The marshwarden's long jump is up to 15 and its high jump is up to 5,\
      \ with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "The marshwarden makes two attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) piercing damage."
    "name": "Rapier"
  - "desc": "Ranged Weapon Attack: +8 to hit, range 100 ft., one target. Hit:\
      \ 5 piercing damage plus 8 acid or poison damage (marshwarden's choice), and\
      \ the target's speed is reduced by 10 feet until the start of the marshwarden's\
      \ next turn."
    "name": "Blowgun"
"reactions":
  - "desc": "When an attacker that the marshwarden can see hits it with a melee weapon\
      \ attack, the attacker takes 11 (1d8 + 7) acid or poison damage (marshwarden's\
      \ choice)."
    "name": "Poisonous Defense (4/Day)"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
