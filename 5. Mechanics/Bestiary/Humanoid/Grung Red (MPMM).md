---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: forest
size: Small
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-4
  - monster/environment/forest
  - monster/size/small
  - monster/type/humanoid
aliases:
  - Grung (Red)
---
# [[5. Mechanics\Bestiary\Humanoid\Grung Red (MPMM).md|Grung (Red)]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 149, Volo's Guide to Monsters p. 156*

```statblock
"name": "Grung Red (MPMM)"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d6 + 4"
"stats":
- !!int "7"
- !!int "14"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "4"
  "Perception": !!int "2"
  "Survival": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "passive Perception 12"
"languages": "Grung"
"cr": "1/4"
"traits":
- "desc": "The grung can breathe air and water."
  "name": "Amphibious"
- "desc": "A creature [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] by a grung\
    \ suffers an additional effect that depends on the grung's color. This effect\
    \ lasts until the creature is no longer [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
    \ by the grung. The [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] creature\
    \ must use its action to eat if food is within reach."
  "name": "Poisonous Skin"
- "desc": "The grung's long jump is up to 25 feet and its high jump is up to 15 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
- "desc": "If the grung isn't immersed in water for at least 1 hour during a day,\
    \ it suffers 1 level of [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]]\
    \ at the end of that day. The grung can recover from this [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]]\
    \ only through magic or by immersing itself in water for at least 1 hour."
  "name": "Water Dependency"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 5 (2d4) poison damage."
  "name": "Dagger"
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
