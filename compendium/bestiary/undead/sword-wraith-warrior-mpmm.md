---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: grassland, swamp
size: Medium
tags:
- compendium/src/5e/mpmm
- monster/cr/3
- monster/environment/grassland
- monster/environment/swamp
- monster/size/medium
- monster/type/undead
aliases: ["Sword Wraith Warrior"]
---
# [Sword Wraith Warrior](compendium\bestiary\undead/sword-wraith-warrior-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 239, Mordenkainen's Tome of Foes p. 241*

Sword wraith warriors are most often found on ancient battlefields where soldiers were hemmed in and slaughtered without quarter.

## Sword Wraiths

When glory-obsessed warriors die in battle without honor, they might haunt the site as sword wraiths.

```statblock
"name": "Sword Wraith Warrior (MPMM)"
"size": "Medium"
"type": "undead"
"alignment": "Typically  Lawful Evil"
"ac": !!int "16"
"ac_class": "[chain shirt](compendium/items/chain-shirt.md), [shield](compendium/items/shield.md)"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "18"
- !!int "12"
- !!int "17"
- !!int "6"
- !!int "9"
- !!int "10"
"speed": "30 ft."
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned),\
  \ [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
- "desc": "The warrior doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
  "name": "Battleaxe"
- "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
"bonus_actions":
- "desc": "The warrior makes one Battleaxe or Longbow attack, and attack rolls against\
    \ it have advantage until the start of its next turn."
  "name": "Martial Fury"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/undead/token/sword-wraith-warrior-mpmm.webp"
```
^statblock

## Environment

grassland, swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```