---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - compendium/src/5e/veor
  - monster/cr/1
  - monster/size/medium
  - monster/type/construct
aliases:
  - Warforged Warrior
---
# [[5. Mechanics\Bestiary\Construct\Warforged Warrior (VEOR).md|Warforged Warrior]]
*Source: Vecna: Eve of Ruin p. 238*

Warforged warriors are formed from wood and steel, then magically imbued with life and sentience. They were created to fight in the Last War on the continent of Khorvaire in Eberron. In the aftermath of that conflict, they struggle to understand their place in the world.

```statblock
"name": "Warforged Warrior (VEOR)"
"size": "Medium"
"type": "construct"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "10"
  - !!int "14"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+4"
"damage_resistances": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "passive Perception 14"
"languages": "Common"
"cr": "1"
"actions":
  - "desc": "The warforged makes two Armblade attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) slashing damage."
    "name": "Armblade"
  - "desc": "Melee  or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
      \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
    "name": "Javelin"
"reactions":
  - "desc": "When an attacker the warforged can see makes an attack roll against a\
      \ creature within 5 feet of the warforged, the warforged can impose disadvantage\
      \ on the attack roll."
    "name": "Protection"
"source":
  - "VEoR"
"image": "5. Mechanics/Bestiary/Construct/token/warforged-warrior-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
