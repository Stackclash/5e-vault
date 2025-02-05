---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/1
- monster/size/medium
- monster/type/ooze
aliases: ["Golden Ooze"]
---
# [Golden Ooze](compendium\bestiary\ooze/golden-ooze-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A golden ooze is a sparkling golden ooze. It devours gold and similar valuables more often than it does people, and uses its stock of treasure as added weight behind its pseudopod strikes.

```statblock
"name": "Golden Ooze (GriffonsSaddlebag3)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "9"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "14"
- !!int "5"
- !!int "17"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "10 ft., climb 10 ft."
"damage_resistances": "acid, poison, slashing"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed),\
  \ [deafened](/compendium/rules/conditions.md#Deafened), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [prone](/compendium/rules/conditions.md#Prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "1"
"traits":
- "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "While the ooze remains motionless, it is indistinguishable from a pile\
    \ of treasure."
  "name": "False Appearance"
- "desc": "The ooze can pinpoint the location of precious metals and stones, such\
    \ as coins and gems, within 60 feet of it."
  "name": "Treasure Sense"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage plus 2 (1d4) acid damage."
  "name": "Pseudopod"
- "desc": "The ooze hurls a flurry of coins, treasure, and Tiny objects in a line\
    \ that is 5 feet wide and 15 feet long.\n\nEach creature in the area must make\
    \ a DC 12 Dexterity saving throw, taking 7 (3d4) bludgeoning damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Barrage"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```