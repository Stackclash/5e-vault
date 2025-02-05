---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: forest
size: Small
tags:
- compendium/src/5e/mpmm
- monster/cr/2
- monster/environment/forest
- monster/size/small
- monster/type/humanoid
aliases: ["Grung Elite Warrior (Gold)"]
---
# [Grung Elite Warrior (Gold)](compendium\bestiary\humanoid/grung-elite-warrior-gold-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 150, Volo's Guide to Monsters p. 157*

```statblock
"name": "Grung Elite Warrior (Gold) (MPMM)"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "49"
"hit_dice": "9d6 + 18"
"stats":
- !!int "7"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "12"
"speed": "25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "2"
  "Survival": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "passive Perception 12"
"languages": "Grung"
"cr": "2"
"traits":
- "desc": "The grung can breathe air and water."
  "name": "Amphibious"
- "desc": "A creature [poisoned](/compendium/rules/conditions.md#Poisoned) by a grung\
    \ suffers an additional effect that depends on the grung's color. This effect\
    \ lasts until the creature is no longer [poisoned](/compendium/rules/conditions.md#Poisoned)\
    \ by the grung. The creature is [charmed](/compendium/rules/conditions.md#Charmed)\
    \ by the grung and can speak Grung."
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
- "desc": "The grung makes a chirring noise to which grungs are immune. Each Humanoid\
    \ or Beast that is within 15 feet of the grung and able to hear it must succeed\
    \ on a DC 12 Wisdom saving throw or be [stunned](/compendium/rules/conditions.md#Stunned)\
    \ until the end of the grung's next turn."
  "name": "Mesmerizing Chirr (Recharge 6)"
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