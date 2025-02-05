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
- monster/type/fey
aliases: ["Fey Spirit (Fuming)"]
---
# [Fey Spirit (Fuming)](compendium\bestiary\fey/fey-spirit-fuming-tce.md)
*Source: Tasha's Cauldron of Everything p. 112*

```statblock
"name": "Fey Spirit (Fuming) (TCE)"
"size": "Small"
"type": "fey"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"stats":
- !!int "13"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "16"
"speed": "40 ft."
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Sylvan, understands the languages you speak"
"actions":
- "desc": "The fey makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d6 + 3 + the spell's level piercing damage + 1d6 force damage."
  "name": "Shortsword"
"bonus_actions":
- "desc": "The fey magically teleports up to 30 feet to an unoccupied space it can\
    \ see. The fey has advantage on the next attack roll it makes before the end of\
    \ this turn."
  "name": "Fey Step"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```