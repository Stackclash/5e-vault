---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 
environments: 
size: Small
tags:
- compendium/src/5e/tce
- monster/cr/
- monster/size/small
- monster/type/beast
aliases: ["Bestial Spirit (Air)"]
---
# [Bestial Spirit (Air)](compendium\bestiary\beast/bestial-spirit-air-tce.md)
*Source: Tasha's Cauldron of Everything p. 109*

```statblock
"name": "Bestial Spirit (Air) (TCE)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "4"
- !!int "14"
- !!int "5"
"speed": "30 ft., fly 60 ft."
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
- "desc": "The beast doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
"actions":
- "desc": "The beast makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d8 + 4 + the spell's level piercing damage."
  "name": "Maul"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```