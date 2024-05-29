---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/2
- monster/size/small
- monster/type/aberration/minion
statblock: inline
aliases: ["Mindkiller Whelp"]
---
# [[5. Mechanics/Bestiary/Aberration/Mindkiller Whelp.md|Mindkiller Whelp]]
*Source: Flee, Mortals! (Packet 1) p. 13*

```statblock
"name": "Mindkiller Whelp"
"size": "Small"
"type": "aberration"
"subtype": "Minion"
"alignment": "typically  Lawful Evil"
"ac": !!int "12"
"hp": !!int "11"
"stats":
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "12"
"speed": "10 ft., fly 30 ft."
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "2"
"traits":
- "desc": "The whelp can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "If the whelp takes damage from an attack or as the result of a failed saving\
    \ throw, their hit points are reduced to 0. If the whelp takes damage from another\
    \ effect, they die if the damage equals or exceeds their hit point maximum, otherwise\
    \ they take no damage."
  "name": "Minion"
- "desc": "The whelp is unaffected by psionic powers manifested by voiceless talkers\
    \ unless they wish to be."
  "name": "Psionic Immunity"
- "desc": "When a hostile creature within 5 feet of three or more whelps makes a saving\
    \ throw against a power or psionic effect, the creature takes a penalty to the\
    \ save equal to the number of whelps within 5 feet of them."
  "name": "Resistance Drain"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 slashing\
    \ damage."
  "name": "Claws (Group Attack)"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```