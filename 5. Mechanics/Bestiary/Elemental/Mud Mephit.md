---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: swamp
size: Small
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/swamp
  - monster/size/small
  - monster/type/elemental
aliases:
  - Mud Mephit
---
# [[5. Mechanics\Bestiary\Elemental\Mud Mephit.md|Mud Mephit]]
*Source: Monster Manual p. 216*

## Mephits

Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

### Elemental Nature

A mephit doesn't require food, drink, or sleep.

## Mud Mephit

Mud mephits are slow, unctuous creatures of earth and water. They drone their complaints to all who will listen, and beg incessantly for attention and treasure.

```statblock
"name": "Mud Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"modifier": !!int "1"
"stats":
  - !!int "8"
  - !!int "12"
  - !!int "12"
  - !!int "9"
  - !!int "11"
  - !!int "7"
"speed": "20 ft., fly 20 ft., swim 20 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+3"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan, Terran"
"cr": "1/4"
"traits":
  - "desc": "When the mephit dies, it explodes in a burst of sticky mud. Each Medium\
      \ or smaller creature within 5 feet of it must succeed on a DC 11 Dexterity\
      \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
      \ until the end of the creature's next turn."
    "name": "Death Burst"
  - "desc": "While the mephit remains motionless, it is indistinguishable from an\
      \ ordinary mound of mud."
    "name": "False Appearance"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4\
      \ (1d6 + 1) bludgeoning damage."
    "name": "Fists"
  - "desc": "The mephit belches viscid mud onto one creature within 5 feet of it.\
      \ If the target is Medium or smaller, it must succeed on a DC 11 Dexterity saving\
      \ throw or be [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] for 1\
      \ minute. A creature can repeat the saving throw at the end of each of its turns,\
      \ ending the effect on itself on a success."
    "name": "Mud Breath (Recharge 6)"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Elemental/token/mud-mephit.webp"
```
^statblock

## Environment

swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
