---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Small
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/1-4
  - monster/size/small
  - monster/type/beast
aliases:
  - Giant Mosquito
---
# [[5. Mechanics\Bestiary\Beast\Giant Mosquito (GRIFFONSSADDLEBAG2).md|Giant Mosquito]]
*Source: The Griffon's Saddlebag, Book 2 p. 345*

Empowered by the sheer volume of slow-moving blood present in the swampland formerly known as the Syre Wood, giant mosquitoes are a constant threat to travelers and denizens alike. The mosquitoes are one of the most frequent carriers of disease and with their size and numbers are capable of tremendous damage.

```statblock
"name": "Giant Mosquito (GRIFFONSSADDLEBAG2)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "7"
- !!int "14"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "10 ft., fly 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The mosquito is immune to the diseases described in the [[5. Mechanics/Tables/Bloodmire Diseases (GRIFFONSSADDLEBAG2).md|Bloodmire Diseases]]\
    \ table."
  "name": "Bloodmire Adaptation"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 3 (1d6)\
    \ piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or take 3 (1d6) poison damage."
  "name": "Bite"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
