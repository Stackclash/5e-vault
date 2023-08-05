---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/size/small
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
"name": "Ice Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "9"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "2"
"damage_vulnerabilities": "bludgeoning, fire"
"damage_immunities": "cold, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Aquan, Auran"
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mephit can innately cast [[/6. Mechanics/Spells/fog-cloud.md\|fog cloud]],\
    \ requiring no material components. Its innate spellcasting ability is Charisma.\n\
    \nAt will: [[/6. Mechanics/Spells/fog-cloud.md\|fog cloud]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the mephit dies, it explodes in a burst of jagged ice. Each creature\
    \ within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (dice:\
    \ 1d8|avg (1d8)) slashing damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Death Burst"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the mephit remains motionless, it is indistinguishable from an ordinary\
    \ shard of ice."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d4 + 1|avg (1d4 + 1) slashing damage plus dice: 1d4|avg (1d4)\
    \ cold damage."
  "name": "Claws"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mephit exhales a 15-foot cone of cold air. Each creature in that area\
    \ must succeed on a DC 10 Dexterity saving throw, taking 5 (dice: 2d4|avg (2d4))\
    \ cold damage on a failed save, or half as much damage on a successful one."
  "name": "Frost Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "EGW"
- "IDRotF"
- "CM"
- "KftGV"
"image": "/compendium/bestiary/elemental/token/ice-mephit.png"
aliases: ["Ice Mephit"]
---
# Ice Mephit
*Source: Monster Manual p. 215, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Keys from the Golden Vault*  

## Mephits

Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

### Elemental Nature

A mephit doesn't require food, drink, or sleep.

## Ice Mephit

Comprising frigid air and water, ice mephits are aloof and cold, surpassing all other mephits in pitiless cruelty

## Stat Block

```ad-statblock
title: Ice Mephit
![[/6. Mechanics/Bestiary/Elemental/Token/ice-mephit.png#token]]
*Small elemental, Neutral Evil*

- **Armor Class** 11 
- **Hit Points** `dice: 6d6|text(21)` (6d6) 
- **Speed** walk 30 ft., fly 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|13 (+1)|10 (+0)| 9 (-1)|11 (+0)|12 (+1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2, Stealth +3
- **Senses** darkvision 60 ft., passive Perception 12
- **Damage Vulnerabilities** bludgeoning, fire
- **Damage Immunities** cold, poison
- **Condition Immunities** poisoned
- **Languages** Aquan, Auran
- **Challenge** 1/2

## Traits

***Death Burst.*** When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (`dice: 1d8` (`1d8`)) slashing damage on a failed save, or half as much damage on a successful one.

***False Appearance.*** While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice.

***Innate Spellcasting (1/Day).*** The mephit can innately cast [[/6. Mechanics/Spells/fog-cloud.md\|fog cloud]], requiring no material components. Its innate spellcasting ability is Charisma.

**At will**: [[/6. Mechanics/Spells/fog-cloud.md\|fog cloud]]

## Actions

***Claws.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one creature. Hit: `dice: 1d4 + 1` (`1d4 + 1`) slashing damage plus `dice: 1d4` (`1d4`) cold damage.

***Frost Breath (Recharge 6).*** The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (`dice: 2d4` (`2d4`)) cold damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

arctic