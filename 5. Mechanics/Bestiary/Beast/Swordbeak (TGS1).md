---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: 'coastal, grassland, hill, hearth'
size: Huge
tags:
  - compendium/src/5e/tgs1
  - monster/cr/5
  - monster/environment/coastal
  - monster/environment/grassland
  - monster/environment/hearth
  - monster/environment/hill
  - monster/size/huge
  - monster/type/beast
aliases:
  - Swordbeak
---
# [[5. Mechanics/Bestiary/Beast/Swordbeak (TGS1).md|Swordbeak]]
*Source: The Griffon's Saddlebag, Book 1 p. 194*

As the name suggests, swordbeaks are huge birds with 10-foot-long razor-sharp beaks. These beaks are capable of punching through stone and steel. Voracious carnivores, they often attack large creatures, and even humanoids, in grasslands, hillsides, coasts, and other open areas.

Swordbeak nests are usually littered with gold, gems, and other valuables that their humanoid prey were carrying at their time of death. Appreciative of shiny objects, swordbeaks defend their collected treasures almost as fiercely as they do a clutch of eggs.

```statblock
"name": "Swordbeak (TGS1)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "102"
"hit_dice": "12d12 + 24"
"stats":
- !!int "21"
- !!int "17"
- !!int "15"
- !!int "3"
- !!int "10"
- !!int "7"
"speed": "10 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "5"
"traits":
- "desc": "If the swordbeak is flying and dives at least 30 feet straight toward a\
    \ target and then hits it with a beak attack on the same turn, the attack deals\
    \ an extra 7 (2d6) damage to the target."
  "name": "Dive Attack"
- "desc": "The swordbeak has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- "desc": "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 21 (3d10\
    \ + 5) slashing damage."
  "name": "Beak"
"source":
- "tgs1"
```
^statblock

## Environment

coastal, grassland, hill, hearth

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
