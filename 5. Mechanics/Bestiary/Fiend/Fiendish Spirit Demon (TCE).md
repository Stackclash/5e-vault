---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Large
alignment: Unaligned
ac: null
hp: 50 + 15 for each spell level above 6th
type: fiend
tags:
  - monster
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/large
  - monster/type/fiend
aliases:
  - Fiendish Spirit (Demon)
cr: null
---
# [[/5. Mechanics/Bestiary/Fiend/Fiendish Spirit Demon (TCE).md|Fiendish Spirit (Demon)]]
*Source: Tasha's Cauldron of Everything p. 112*

```statblock
"name": "Fiendish Spirit Demon (TCE)"
"size": "Large"
"type": "fiend"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"hp": "50 + 15 for each spell level above 6th"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "16"
"speed": "40 ft., climb 40 ft."
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 10"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"traits":
  - "desc": "The fiend has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "When the fiend drops to 0 hit points or the spell ends, the fiend explodes,\
      \ and each creature within 10 feet of it must make a Dexterity saving throw\
      \ against your spell save DC. A creature takes 2d10 + the spell's level fire\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Death Throes"
"actions":
  - "desc": "The fiend makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* your spell attack modifier to hit, reach 5 ft.,\
      \ one target. *Hit:* 1d12 + 3 + the spell's level necrotic damage."
    "name": "Bite"
"source":
  - "TCE"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
