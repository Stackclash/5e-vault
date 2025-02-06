---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\2
  - monster\Size\Medium
  - monster\Type\Aberration
aliases:
  - Staver Phenomena
---
# [[5. Mechanics\Bestiary\Aberration\Staver Phenomena (GRIFFONSSADDLEBAG3).md|Staver Phenomena]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

These strange, trans-dimensional beings of pure force are from another reality where starmetal can still be found. Named after the late Conjuration Magistrate who discovered them, Julius Staver, the Polaris Magistrates are in constant opposition with these alien creatures as they desperately seeks to reach and harvest more starmetal from their dimension. Other than in defense of themselves or their home, the Staver Phenomena don't actively seek conquest or violence.

```statblock
"name": "Staver Phenomena (GRIFFONSSADDLEBAG3)"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
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
