---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/3
- monster/environment/coastal
- monster/size/medium
- monster/type/fiend/yugoloth
statblock: inline
aliases: ["Merrenoloth"]
---
# [Merrenoloth](compendium/bestiary/fiend/merrenoloth-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 180, Mordenkainen's Tome of Foes p. 250*

The grim captains of the ferries on the River Styx, merrenoloths can navigate safely through the worst storms and always stay on course. Wielding fiery oars, merrenoloths strike fear into anyone who forcefully boards their vessels.

```statblock
"name": "Merrenoloth (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "8"
- !!int "17"
- !!int "10"
- !!int "17"
- !!int "14"
- !!int "11"
"speed": "30 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Intelligence": !!int "5"
"skillsaves":
  "Nature": !!int "5"
  "Perception": !!int "4"
  "History": !!int "5"
  "Survival": !!int "4"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "3"
"traits":
- "desc": "The merrenoloth casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 13):\n\nAt will: [charm person](compendium/spells/charm-person.md), [darkness](compendium/spells/darkness.md),\
    \ [detect magic](compendium/spells/detect-magic.md), [dispel magic](compendium/spells/dispel-magic.md),\
    \ [gust of wind](compendium/spells/gust-of-wind.md)\n\n3/day: [control water](compendium/spells/control-water.md)"
  "name": "spells"
- "desc": "The merrenoloth has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The merrenoloth makes one Oar attack and uses Fear Gaze."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 3|avg (2d4 + 3) fire damage."
  "name": "Oar"
- "desc": "The merrenoloth targets one creature it can see within 60 feet of it. The\
    \ target must succeed on a DC 13 Wisdom saving throw or become [frightened](/compendium/rules/conditions.md#frightened)\
    \ of the merrenoloth for 1 minute. The [frightened](/compendium/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Fear Gaze"
"bonus_actions":
- "desc": "The merrenoloth teleports, along with any equipment it is wearing or carrying,\
    \ up to 60 feet to an unoccupied space it can see."
  "name": "Teleport"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/fiend/token/merrenoloth-mpmm.webp"
```
^statblock

## Environment

coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```