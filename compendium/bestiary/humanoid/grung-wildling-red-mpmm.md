---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: forest
size: Small
tags:
- compendium/src/5e/mpmm
- monster/cr/1
- monster/environment/forest
- monster/size/small
- monster/type/humanoid
aliases: ["Grung Wildling (Red)"]
---
# [Grung Wildling (Red)](compendium\bestiary\humanoid/grung-wildling-red-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 150, Volo's Guide to Monsters p. 157*

```statblock
"name": "Grung Wildling (Red) (MPMM)"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "5d6 + 10"
"stats":
- !!int "7"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "15"
- !!int "11"
"speed": "25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "passive Perception 14"
"languages": "Grung"
"cr": "1"
"traits":
- "desc": "The grung casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [druidcraft](compendium/spells/druidcraft.md)\n\
    \n2/day: [plant growth](compendium/spells/plant-growth.md)\n\n3/day each:\
    \ [cure wounds](compendium/spells/cure-wounds.md), [spike growth](compendium/spells/spike-growth.md)"
  "name": "Spellcasting"
- "desc": "The grung can breathe air and water."
  "name": "Amphibious"
- "desc": "A creature [poisoned](/compendium/rules/conditions.md#Poisoned) by a grung\
    \ suffers an additional effect that depends on the grung's color. This effect\
    \ lasts until the creature is no longer [poisoned](/compendium/rules/conditions.md#Poisoned)\
    \ by the grung. The [poisoned](/compendium/rules/conditions.md#Poisoned) creature\
    \ must use its action to eat if food is within reach."
  "name": "Poisonous Skin"
- "desc": "The grung's long jump is up to 25 feet and its high jump is up to 15 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
- "desc": "If the grung isn't immersed in water for at least 1 hour during a day,\
    \ it suffers 1 level of [exhaustion](/compendium/rules/conditions.md#Exhaustion)\
    \ at the end of that day. The grung can recover from this [exhaustion](/compendium/rules/conditions.md#Exhaustion)\
    \ only through magic or by immersing itself in water for at least 1 hour."
  "name": "Water Dependency"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 5 (2d4) poison damage."
  "name": "Dagger"
- "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit:\
    \ 6 (1d6 + 3) piercing damage plus 5 (2d4) poison damage."
  "name": "Shortbow"
"source":
- "MPMM"
- "VGM"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```