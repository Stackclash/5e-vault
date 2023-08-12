---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/grassland
- monster/environment/swamp
- monster/size/medium
- monster/type/undead
statblock: inline
---
# Sword Wraith Commander
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 239, Mordenkainen's Tome of Foes p. 241*  

Sword wraith commanders haunt battlefields, attacking anyone who questions their valor but looking kindly on those who sing their praises.

## Sword Wraiths

When glory-obsessed warriors die in battle without honor, they might haunt the site as sword wraiths.

## Stat Block

```statblock
"name": "Sword Wraith Commander"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, frightened, poisoned, unconscious"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The commander and any other sword wraiths within 30 feet of it have advantage\
    \ on saving throws against effects that turn Undead."
  "name": "Turning Defiance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The commander doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The commander makes two Longsword or Longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage, or 9 (dice: 1d10 + 4|avg\
    \ (1d10 + 4)) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+5 (+5 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "Longbow"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the commander has taken damage during this combat, it gives itself advantage\
    \ on attack rolls until the end of its next turn, and dice: 1d4 + 1|avg (1d4\
    \ + 1) [[/5. Mechanics/Bestiary/Undead/Sword Wraith Warrior (MPMM).md|sword wraith warriors]]\
    \ appear in unoccupied spaces within 30 feet of it. The warriors last until they\
    \ drop to 0 hit points, and they take their turns immediately after the commander's\
    \ turn on the same initiative count."
  "name": "Call to Honor (1/Day)"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The commander makes one Longsword or Longbow attack, which deals an extra\
    \ 9 (dice: 2d8|avg (2d8)) necrotic damage on a hit, and attack rolls against\
    \ it have advantage until the start of its next turn."
  "name": "Martial Fury"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Undead/token/sword-wraith-commander.png"
```
^statblock

## Environment

grassland, swamp