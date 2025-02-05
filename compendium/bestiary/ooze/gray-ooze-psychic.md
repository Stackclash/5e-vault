---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: underdark
size: Medium
tags:
- compendium/src/5e/mm
- monster/cr/1-2
- monster/environment/underdark
- monster/size/medium
- monster/type/ooze
aliases: ["Gray Ooze (Psychic)"]
---
# [Gray Ooze (Psychic)](compendium\bestiary\ooze/gray-ooze-psychic.md)
*Source: Monster Manual p. 243, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Gray Ooze (Psychic)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "12"
- !!int "6"
- !!int "16"
- !!int "6"
- !!int "6"
- !!int "2"
"speed": "10 ft., climb 10 ft."
"skillsaves":
  "Stealth": !!int "2"
"damage_resistances": "acid, cold, fire"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed),\
  \ [deafened](/compendium/rules/conditions.md#Deafened), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [prone](/compendium/rules/conditions.md#Prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "Any nonmagical weapon made of metal that hits the ooze corrodes. After\
    \ dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage\
    \ rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition\
    \ made of metal that hits the ooze is destroyed after dealing damage.\n\nThe ooze\
    \ can eat through 2-inch-thick, nonmagical metal in 1 round."
  "name": "Corrode Metal"
- "desc": "While the ooze remains motionless, it is indistinguishable from an oily\
    \ pool or wet rock."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing\
    \ nonmagical metal armor, its armor is partly corroded and takes a permanent and\
    \ cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty\
    \ reduces its AC to 10."
  "name": "Pseudopod"
- "desc": "The ooze targets one creature that it can sense within 60 feet of it. The\
    \ target must make a DC 10 Intelligence saving throw, taking 10 (3d6) psychic\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Psychic Crush (Recharge 5-6)"
"source":
- "MM"
- "CoS"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```