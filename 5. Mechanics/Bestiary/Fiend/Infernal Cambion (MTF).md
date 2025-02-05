---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: urban
size: Medium
tags:
  - compendium/src/5e/mtf
  - monster/cr/5
  - monster/environment/urban
  - monster/size/medium
  - monster/type/fiend
aliases:
  - Infernal Cambion
---
# [[5. Mechanics\Bestiary\Fiend\Infernal Cambion (MTF).md|Infernal Cambion]]
*Source: Mordenkainen's Tome of Foes p. 36*

```statblock
"name": "Infernal Cambion (MTF)"
"size": "Medium"
"type": "fiend"
"alignment": "Any Evil alignment"
"ac": !!int "19"
"ac_class": "[[5. Mechanics/Items/Scale Mail.md|scale mail]]"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "18"
- !!int "18"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "6"
  "Intelligence": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "6"
  "Deception": !!int "6"
  "Stealth": !!int "7"
  "Perception": !!int "4"
"damage_resistances": "cold; fire; lightning; poison; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Common, Infernal"
"cr": "5"
"traits":
- "desc": "The cambion's spellcasting ability is Charisma (spell save DC 14). The\
    \ cambion can innately cast the following spells, requiring no material components:\n\
    \n1/day: [[5. Mechanics/Spells/Plane Shift.md|plane shift]] (self only)\n\n3/day\
    \ each: [[5. Mechanics/Spells/Alter Self.md|alter self]], [[5. Mechanics/Spells/Command.md|command]],\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]]"
  "name": "Innate Spellcasting"
- "desc": "The AC of the cambion includes its Charisma bonus."
  "name": "Fiendish Blessing"
"actions":
- "desc": "The cambion makes two melee attacks or uses its Fire Ray twice."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing\
    \ damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
  "name": "Spear"
- "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 10\
    \ (3d6) fire damage."
  "name": "Fire Ray"
- "desc": "As a bonus action, the cambion chooses another creature that can see or\
    \ hear it within 120 feet. That creature gains advantage on all attack rolls and\
    \ saving throws for the next minute or until the cambion uses this ability again."
  "name": "Fury of the Nine"
"source":
- "MTF"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
