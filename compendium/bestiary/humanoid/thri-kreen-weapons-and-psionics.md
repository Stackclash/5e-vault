---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: grassland, desert
size: Medium
tags:
- compendium/src/5e/mm
- monster/cr/1
- monster/environment/desert
- monster/environment/grassland
- monster/size/medium
- monster/type/humanoid/thri-kreen
aliases: ["Thri-kreen (Weapons and Psionics)"]
---
# [Thri-kreen (Weapons and Psionics)](compendium\bestiary\humanoid/thri-kreen-weapons-and-psionics.md)
*Source: Monster Manual p. 288*

```statblock
"name": "Thri-kreen (Weapons and Psionics)"
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
    \ [mage hand](compendium/spells/mage-hand.md) (the hand is [invisible](/compendium/rules/conditions.md#Invisible))\n\
    \n1/day: [invisibility](compendium/spells/invisibility.md) (self only)\n\n\
    2/day each: [blur](compendium/spells/blur.md), [magic weapon](compendium/spells/magic-weapon.md)"
  "name": "Innate Spellcasting (Psionics)"
- "desc": "The thri-kreen can change the color of its carapace to match the color\
    \ and texture of its surroundings. As a result, it has advantage on Dexterity\
    \ ([Stealth](/compendium/rules/skills.md#Stealth)) checks made to hide."
  "name": "Chameleon Carapace"
- "desc": "The thri-kreen's long jump is up to 30 feet and its high jump is up to\
    \ 15 feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "The thri-kreen makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [poisoned](/compendium/rules/conditions.md#Poisoned) for 1 minute.\
    \ If the saving throw fails by 5 or more, the target is also [paralyzed](/compendium/rules/conditions.md#Paralyzed)\
    \ while [poisoned](/compendium/rules/conditions.md#Poisoned) in this way. The\
    \ [poisoned](/compendium/rules/conditions.md#Poisoned) target can repeat the saving\
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