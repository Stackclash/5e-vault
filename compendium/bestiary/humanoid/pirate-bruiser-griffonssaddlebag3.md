---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/3
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Pirate Bruiser"]
---
# [Pirate Bruiser](compendium\bestiary\humanoid/pirate-bruiser-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Musclemen and women working for illicit seafaring privateers—pirates—can also find work in taverns as guards and other means of intimidation. Bruisers typically prefer to use their fists before other weapons, and can pummel targets and grapple them into submission with ease.

```statblock
"name": "Pirate Bruiser (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "Unarmored Defense"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "18"
- !!int "12"
- !!int "17"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "3"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "6"
  "Athletics": !!int "6"
"senses": "passive Perception 11"
"languages": "Common plus one other language"
"cr": "3"
"traits":
- "desc": "If the bruiser successfully grapples or shoves a creature on its turn,\
    \ or if it is already grappling a creature at the start of its turn, it can use\
    \ its bonus action to make one fist attack against that creature."
  "name": "Brawler"
- "desc": "The bruiser deals one extra die of damage when it hits a creature with\
    \ a melee attack (included in the attack)."
  "name": "Brute"
- "desc": "While the bruiser is wearing no armor, its AC includes its Constitution\
    \ modifier."
  "name": "Unarmored Defense"
"actions":
- "desc": "The bruiser makes two fist attacks. It can attempt to grapple or shove\
    \ a creature in place of any attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Fist"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```