---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/6
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Marshwarden"]
---
# [Marshwarden](compendium\bestiary\humanoid/marshwarden-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

```statblock
"name": "Marshwarden (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "typically  Any Non-Chaotic alignment"
"ac": !!int "16"
"ac_class": "[breastplate](compendium/items/breastplate.md)"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "14"
- !!int "20"
- !!int "17"
- !!int "13"
- !!int "19"
- !!int "10"
"speed": "30 ft., climb 30 ft., swim 30 ft."
"saves":
  "Dexterity": !!int "8"
  "Strength": !!int "5"
"skillsaves":
  "Animal Handling": !!int "7"
  "Stealth": !!int "8"
  "Perception": !!int "7"
"senses": "passive Perception 17"
"languages": "Common plus two other languages"
"cr": "6"
"traits":
- "desc": "The marshwarden is a 13th-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 15). It knows the following ranger spells:\n\n1st level\
    \ (4 slots): [detect poison and disease](compendium/spells/detect-poison-and-disease.md),\
    \ [grease](compendium/spells/grease.md), [hunter's mark](compendium/spells/hunters-mark.md)\n\
    \n2nd level (3 slots): [find steed](compendium/spells/find-steed.md) (takes\
    \ the form of a Large giant frog), [protection from poison](compendium/spells/protection-from-poison.md)\n\
    \n3rd level (3 slots): [plant growth](compendium/spells/plant-growth.md),\
    \ [stinking cloud](compendium/spells/stinking-cloud.md)\n\n4th level (1 slots):\
    \ [control water](compendium/spells/control-water.md)"
  "name": "Spellcasting"
- "desc": "When the marshwarden is hidden from a creature and misses it with a ranged\
    \ attack using a blowgun, making the attack doesn't reveal the marshwarden's position."
  "name": "Blowgun Adept"
- "desc": "The marshwarden can move across liquids on its turn without falling during\
    \ the move."
  "name": "Fluid Movement"
- "desc": "The marshwarden can hold its breath for 1 hour."
  "name": "Hold Breath"
- "desc": "The marshwarden's long jump is up to 15 and its high jump is up to 5, with\
    \ or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "The marshwarden makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Rapier"
- "desc": "Ranged Weapon Attack: +8 to hit, range 100 ft., one target. Hit: 5\
    \ piercing damage plus 8 acid or poison damage (marshwarden's choice), and the\
    \ target's speed is reduced by 10 feet until the start of the marshwarden's next\
    \ turn."
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