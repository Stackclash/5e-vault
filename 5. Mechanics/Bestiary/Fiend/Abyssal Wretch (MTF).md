---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Medium
tags:
  - compendium/src/5e/mtf
  - monster/cr/1-4
  - monster/size/medium
  - monster/type/fiend/demon
aliases:
  - Abyssal Wretch
---
# [[5. Mechanics\Bestiary\Fiend\Abyssal Wretch (MTF).md|Abyssal Wretch]]
*Source: Mordenkainen's Tome of Foes p. 136*

```statblock
"name": "Abyssal Wretch (MTF)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d8"
"modifier": !!int "1"
"stats":
  - !!int "9"
  - !!int "12"
  - !!int "11"
  - !!int "5"
  - !!int "8"
  - !!int "5"
"speed": "20 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 9"
"languages": "understands Abyssal but can't speak"
"cr": "1/4"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
      \ + 1) slashing damage."
    "name": "Bite"
"source":
  - "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/abyssal-wretch-mtf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
