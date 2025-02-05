---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/2
- monster/size/medium
- monster/type/aberration
aliases: ["Staver Phenomena"]
---
# [Staver Phenomena](compendium\bestiary\aberration/staver-phenomena-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

These strange, trans-dimensional beings of pure force are from another reality where starmetal can still be found. Named after the late Conjuration Magistrate who discovered them, Julius Staver, the Polaris Magistrates are in constant opposition with these alien creatures as they desperately seeks to reach and harvest more starmetal from their dimension. Other than in defense of themselves or their home, the Staver Phenomena don't actively seek conquest or violence.

```statblock
"name": "Staver Phenomena (GriffonsSaddlebag3)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "8"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "10"
"speed": "0 ft., fly 30 ft. (hover)"
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "cold, force"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed),\
  \ [deafened](/compendium/rules/conditions.md#Deafened), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [grappled](/compendium/rules/conditions.md#Grappled),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [petrified](/compendium/rules/conditions.md#Petrified),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained), [stunned](/compendium/rules/conditions.md#Stunned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 14"
"languages": ""
"cr": "2"
"traits":
- "desc": "The phenomena can't wear or carry anything."
  "name": "Ephemeral"
- "desc": "The phenomena can't be affected or detected by spells or other magical\
    \ effects, and the properties of magic items used against it are ignored. For\
    \ example, a +1 longsword used to attack the phenomena functions as a nonmagical\
    \ longsword."
  "name": "Magic Immunity"
"actions":
- "desc": "Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 14 (4d6)\
    \ force damage."
  "name": "Energy Beam"
- "desc": "Each creature within 15 feet of the phenomena must make a DC 13 Constitution\
    \ saving throw, taking 14 (4d6) force damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Energy Surge (Recharge 5-6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```