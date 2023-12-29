---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/1-4
- monster/environment/coastal
- monster/size/medium
- monster/type/humanoid
statblock: inline
aliases: ["Tortle"]
---
# [[5. Mechanics\Bestiary\Humanoid\Tortle (MPMM).md|Tortle]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 244*  

The generic tortle stat block here represents a warrior, especially the sort who travels far and wide.

## Tortles

Tortles are omnivorous, turtle-like bipeds with shells that cover most of their bodies. Because they carry their homes on their backs, tortles feel little need to stay put for long.

Most tortles like to see how other folk live. A tortle can spend decades away from their native land without feeling homesick, often viewing their current companions as their family.

```statblock
"name": "Tortle (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "4"
  "Survival": !!int "3"
"senses": "passive Perception 11"
"languages": "Aquan, Common"
"cr": "1/4"
"traits":
- "desc": "The tortle can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) slashing damage."
  "name": "Claw"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing\
    \ damage, or dice: 1d8 + 2|avg (1d8 + 2) piercing damage if used with two\
    \ hands in melee."
  "name": "Spear"
- "desc": "Ranged Weapon Attack: dice: d20+2 (+2 to hit), range 80/320 ft., one\
    \ target. Hit: dice: 1d8|avg (1d8) piercing damage."
  "name": "Light Crossbow"
- "desc": "The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus\
    \ to AC and has advantage on Strength and Constitution saving throws. While in\
    \ its shell, the tortle is [[/5. Mechanics/Rules/Conditions.md#prone|prone]], its\
    \ speed is 0 and can't increase, it has disadvantage on Dexterity saving throws,\
    \ it can't take reactions, and the only action it can take is a bonus action to\
    \ emerge."
  "name": "Shell Defense"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Humanoid/token/tortle.png"
```
^statblock

## Environment

coastal