---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'grassland, desert'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/environment/desert
  - monster/environment/grassland
  - monster/size/medium
  - monster/type/humanoid/thri-kreen
aliases:
  - Thri-kreen (Weapons and Psionics)
---
# [[5. Mechanics\Bestiary\Humanoid\Thri Kreen Weapons And Psionics.md|Thri-kreen (Weapons and Psionics)]]
*Source: Monster Manual p. 288*

```statblock
"name": "Thri Kreen Weapons And Psionics"
"size": "Medium"
"type": "humanoid"
"subtype": "thri-kreen"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "12"
- !!int "15"
- !!int "13"
- !!int "8"
- !!int "12"
- !!int "7"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Thri-kreen"
"cr": "1"
"traits":
- "desc": "The thri-kreen's innate spellcasting ability is Wisdom. The thri-kreen\
    \ can innately cast the following spells, requiring no components:\n\nAt will:\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]] (the hand is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]])\n\
    \n1/day: [[5. Mechanics/Spells/Invisibility.md|invisibility]] (self only)\n\n\
    2/day each: [[5. Mechanics/Spells/Blur.md|blur]], [[5. Mechanics/Spells/Magic Weapon.md|magic weapon]]"
  "name": "Innate Spellcasting (Psionics)"
- "desc": "The thri-kreen can change the color of its carapace to match the color\
    \ and texture of its surroundings. As a result, it has advantage on Dexterity\
    \ ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]) checks made to hide."
  "name": "Chameleon Carapace"
- "desc": "The thri-kreen's long jump is up to 30 feet and its high jump is up to\
    \ 15 feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "The thri-kreen makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for 1 minute.\
    \ If the saving throw fails by 5 or more, the target is also [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] in this way. The\
    \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] target can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) slashing damage."
  "name": "Claws"
- "desc": "The thri-kreen makes two gythka attacks or two chatkcha attacks."
  "name": "Weapons Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage."
  "name": "Gythka"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
    \ 5 (1d6 + 2) slashing damage."
  "name": "Chatkcha"
"source":
- "MM"
```
^statblock

## Environment

grassland, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
