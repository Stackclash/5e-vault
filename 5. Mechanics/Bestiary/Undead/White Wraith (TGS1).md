---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: 'arctic, everglacier'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(TGS1)
  - monster\Cr\6
  - monster\Environment\Arctic
  - monster\Environment\Everglacier
  - monster\Size\Medium
  - monster\Type\Undead
aliases:
  - White Wraith
---
# [[5. Mechanics\Bestiary\Undead\White Wraith (TGS1).md|White Wraith]]
*Source: The Griffon's Saddlebag, Book 1 p. 177*

```statblock
"name": "White Wraith (TGS1)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "6"
- !!int "16"
- !!int "17"
- !!int "9"
- !!int "16"
- !!int "15"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "6"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks that aren't silvered"
"damage_immunities": "cold, necrotic, poison"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "any languages it knew in life"
"cr": "6"
"traits":
- "desc": "The wraith's vision and hearing are unimpeded by inclement weather such\
    \ as wind, snow, and fog, and it has advantage on all Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks it makes in such conditions."
  "name": "Blizzard Stalker"
- "desc": "The wraith has advantage on attack rolls against any creature it has surprised."
  "name": "Ambusher"
- "desc": "The wraith can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 16 (3d8\
    \ + 3) necrotic damage plus 10 (3d6) cold damage. The target must succeed on a\
    \ DC 14 Constitution saving throw or its hit point maximum is reduced by an amount\
    \ equal to the damage taken. This reduction lasts until the target finishes a\
    \ long rest. The target dies if this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
- "desc": "Ranged Weapon Attack: +6 to hit, range 30 ft., one target. Hit: 21\
    \ (6d6) cold damage and if the target is a creature, it must succeed on a DC 14\
    \ Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Freezing Gale"
- "desc": "The wraith targets a humanoid within 10 feet of it that has died from either\
    \ cold damage or exposure to the elements. The target's remains rise as either\
    \ a [[5. Mechanics/Bestiary/Undead/Zombie.md|zombie]] or [[5. Mechanics/Bestiary/Undead/Skeleton.md|skeleton]]\
    \ (depending on the state of the corpse, as determined by the GM) that shares\
    \ the wraith's damage immunities and its Blizzard Stalker trait. The reanimated\
    \ creature is under the wraith's control and rises in the space of its remains.\
    \ The wraith can have no more than ten such undead under its control at one time."
  "name": "Create Walker (2/Day)"
"source":
- "tgs1"
```
^statblock

## Environment

arctic, everglacier

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
