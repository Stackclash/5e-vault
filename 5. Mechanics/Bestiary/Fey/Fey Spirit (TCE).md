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
  - monster/type/fey
aliases:
  - Fey Spirit
---
# [[5. Mechanics\Bestiary\Fey\Fey Spirit (TCE).md|Fey Spirit]]
*Source: Tasha's Cauldron of Everything p. 112*

```statblock
"name": "Fey Spirit (TCE)"
"size": "Small"
"type": "fey"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "11"
  - !!int "16"
"speed": "40 ft."
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Sylvan, understands the languages you speak"
"actions":
  - "desc": "The fey makes a number of attacks equal to half this spell's level (rounded\
      \ down)."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target. Hit: 1d6 + 3 + the spell's level piercing damage + 1d6 force\
      \ damage."
    "name": "Shortsword"
"bonus_actions":
  - "desc": "The fey magically teleports up to 30 feet to an unoccupied space it can\
      \ see. Then one of the following effects occurs, based on the fey's chosen mood:\n\
      \n- Fuming. The fey has advantage on the next attack roll it makes before\
      \ the end of this turn.  \n- Mirthful. The fey can force one creature it\
      \ can see within 10 feet of it to make a Wisdom saving throw against your spell\
      \ save DC. Unless the save succeeds, the target is [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ by you and the fey for 1 minute or until the target takes any damage.  \n\
      - Tricksy. The fey can fill a 5-foot cube within 5 feet of it with magical\
      \ darkness, which lasts until the end of its next turn.  "
    "name": "Fey Step"
"source":
  - "TCE"
"image": "5. Mechanics/Bestiary/Fey/token/fey-spirit-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
