---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/3
- monster/environment/underwater
- monster/size/huge
- monster/type/beast
statblock: inline
aliases: ["Killer Whale"]
---
# [[5. Mechanics\Bestiary\Beast\Killer Whale.md|Killer Whale]]
*Source: Monster Manual p. 331. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Killer Whale"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "90"
"hit_dice": "12d12 + 12"
"stats":
- !!int "19"
- !!int "10"
- !!int "13"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "swim 60 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 120 ft., passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- "desc": "The whale can't use its blindsight while [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]]."
  "name": "Echolocation"
- "desc": "The whale can hold its breath for 30 minutes."
  "name": "Hold Breath"
- "desc": "The whale has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 5d6 + 4|avg (5d6 + 4) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "GoS"
- "EGW"
- "MOT"
- "IDRotF"
"image": "5. Mechanics/Bestiary/Beast/token/killer-whale.webp"
```
^statblock

## Environment

underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```