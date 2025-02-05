---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Small
tags:
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/small
  - monster/type/beast
aliases:
  - Beast of the Sky
---
# [[5. Mechanics\Bestiary\Beast\Beast Of The Sky (TCE).md|Beast of the Sky]]
*Source: Tasha's Cauldron of Everything p. 61*

```statblock
"name": "Beast Of The Sky (TCE)"
"size": "Small"
"type": "beast"
"alignment": "Neutral"
"ac_class": "13 + PB (natural armor)"
"stats":
- !!int "6"
- !!int "16"
- !!int "13"
- !!int "8"
- !!int "14"
- !!int "11"
"speed": "10 ft., fly 60 ft."
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
- "desc": "The beast doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- "desc": "You can add your proficiency bonus to any ability check or saving throw\
    \ that the beast makes."
  "name": "Primal Bond"
"actions":
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d4 + 3 + PB slashing damage"
  "name": "Shred"
"source":
- "TCE"
"image": "5. Mechanics/Bestiary/Beast/token/beast-of-the-sky-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
