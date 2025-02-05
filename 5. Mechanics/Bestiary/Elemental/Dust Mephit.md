---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: desert
size: Small
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/desert
  - monster/size/small
  - monster/type/elemental
aliases:
  - Dust Mephit
---
# [[5. Mechanics\Bestiary\Elemental\Dust Mephit.md|Dust Mephit]]
*Source: Monster Manual p. 215. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

## Mephits

Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

### Elemental Nature

A mephit doesn't require food, drink, or sleep.

## Dust Mephit

Composed of earth and air, dust mephits are drawn to catacombs and find death morbidly fascinating.

```statblock
"name": "Dust Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "5"
- !!int "14"
- !!int "10"
- !!int "9"
- !!int "11"
- !!int "10"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_vulnerabilities": "fire"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Auran, Terran"
"cr": "1/2"
"traits":
- "desc": "The mephit can innately cast [[5. Mechanics/Spells/Sleep.md|sleep]], requiring\
    \ no material components. Its innate spellcasting ability is Charisma.\n\nAt\
    \ will: [[5. Mechanics/Spells/Sleep.md|sleep]]"
  "name": "Innate Spellcasting (1/Day)"
- "desc": "When the mephit dies, it explodes in a burst of dust. Each creature within\
    \ 5 feet of it must then succeed on a DC 10 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
    \ for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] creature\
    \ can repeat the saving throw on each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Death Burst"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws"
- "desc": "The mephit exhales a 15-foot cone of blinding dust. Each creature in that\
    \ area must succeed on a DC 10 Dexterity saving throw or be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Blinding Breath (Recharge 6)"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Elemental/token/dust-mephit.webp"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
