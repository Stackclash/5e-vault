---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG2)
  - monster\Cr\1
  - monster\Size\Large
  - monster\Type\Beast
aliases:
  - Swarm of Giant Mosquitoes
---
# [[5. Mechanics\Bestiary\Beast\Swarm Of Giant Mosquitoes (GRIFFONSSADDLEBAG2).md|Swarm of Giant Mosquitoes]]
*Source: The Griffon's Saddlebag, Book 2 p. 345*

Empowered by the sheer volume of slow-moving blood present in the swampland formerly known as the Syre Wood, giant mosquitoes are a constant threat to travelers and denizens alike. The mosquitoes are one of the most frequent carriers of disease and with their size and numbers are capable of tremendous damage.

```statblock
"name": "Swarm Of Giant Mosquitoes (GRIFFONSSADDLEBAG2)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "9"
- !!int "16"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "10 ft., fly 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- "desc": "The mosquito is immune to the diseases described in the [[5. Mechanics/Tables/Bloodmire Diseases (GRIFFONSSADDLEBAG2).md|Bloodmire Diseases]]\
    \ table."
  "name": "Bloodmire Adaptation"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Small mosquito. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's\
    \ space. Hit: 14 (4d6) piercing damage, or 7 (2d6) if the swarm has half of\
    \ its hit points or fewer."
  "name": "Bites"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
