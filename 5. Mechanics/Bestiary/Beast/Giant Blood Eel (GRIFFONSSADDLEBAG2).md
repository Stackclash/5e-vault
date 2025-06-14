---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/1
  - monster/size/large
  - monster/type/beast
aliases:
  - Giant Blood Eel
---
# [[5. Mechanics\Bestiary\Beast\Giant Blood Eel (GRIFFONSSADDLEBAG2).md|Giant Blood Eel]]
*Source: The Griffon's Saddlebag, Book 2 p. 345*

With translucent red skin, the giant blood eels of the Bloodmire are nearly impossible to detect as they traverse the deep pools of bloodwater. Naturalists are unsure of exactly how the eels came to dwell in the swamp, but attempts to research them more fully or retrieve a specimen has resulted in numerous vanished expeditions. 

```statblock
"name": "Giant Blood Eel (GRIFFONSSADDLEBAG2)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "38"
"hit_dice": "7d6 + 14"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "14"
  - !!int "2"
  - !!int "11"
  - !!int "3"
"speed": "0 ft., swim 40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"damage_resistances": "necrotic"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The eel is immune to the diseases described in the [[5. Mechanics/Tables/Bloodmire Diseases (GRIFFONSSADDLEBAG2).md|Bloodmire Diseases]]\
      \ table."
    "name": "Bloodmire Adaptation"
  - "desc": "The eel can breathe only underwater or under bloodwater."
    "name": "Water and Blood Breathing"
"actions":
  - "desc": "The eel makes two bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) piercing damage, and the target must make a DC 12 Constitution saving\
      \ throw, taking 7 (2d6) necrotic damage on a failed save, or half as much damage\
      \ on a  successful one."
    "name": "Bite"
"source":
  - "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
