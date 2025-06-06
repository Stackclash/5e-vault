---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: arctic
size: Small
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/arctic
  - monster/size/small
  - monster/type/elemental
aliases:
  - Ice Mephit
---
# [[5. Mechanics\Bestiary\Elemental\Ice Mephit.md|Ice Mephit]]
*Source: Monster Manual p. 215. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

## Mephits

Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

### Elemental Nature

A mephit doesn't require food, drink, or sleep.

## Ice Mephit

Comprising frigid air and water, ice mephits are aloof and cold, surpassing all other mephits in pitiless cruelty

```statblock
"name": "Ice Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "21"
"hit_dice": "6d6"
"modifier": !!int "1"
"stats":
  - !!int "7"
  - !!int "13"
  - !!int "10"
  - !!int "9"
  - !!int "11"
  - !!int "12"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+3"
"damage_vulnerabilities": "bludgeoning, fire"
"damage_immunities": "cold, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Aquan, Auran"
"cr": "1/2"
"traits":
  - "desc": "The mephit can innately cast [[5. Mechanics/Spells/Fog Cloud.md|fog cloud]],\
      \ requiring no material components. Its innate spellcasting ability is Charisma.\n"
    "name": "Innate Spellcasting (1/Day)"
  - "desc": "When the mephit dies, it explodes in a burst of jagged ice. Each creature\
      \ within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (d8)\
      \ slashing damage on a failed save, or half as much damage on a successful one."
    "name": "Death Burst"
  - "desc": "While the mephit remains motionless, it is indistinguishable from an\
      \ ordinary shard of ice."
    "name": "False Appearance"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3\
      \ (1d4 + 1) slashing damage plus 2 (d4) cold damage."
    "name": "Claws"
  - "desc": "The mephit exhales a 15-foot cone of cold air. Each creature in that\
      \ area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Frost Breath (Recharge 6)"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Elemental/token/ice-mephit.webp"
```
^statblock

## Environment

arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
