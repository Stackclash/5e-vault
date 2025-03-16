---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Large
tags:
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/large
  - monster/type/fiend
aliases:
  - Fiendish Spirit (Devil)
---
# [[5. Mechanics/Bestiary/Fiend/Fiendish Spirit Devil (TCE).md|Fiendish Spirit (Devil)]]
*Source: Tasha's Cauldron of Everything p. 112*

```statblock
"name": "Fiendish Spirit Devil (TCE)"
"size": "Large"
"type": "fiend"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"stats":
- !!int "13"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "10"
- !!int "16"
"speed": "40 ft., fly 60 ft."
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"traits":
- "desc": "The fiend has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Magical darkness doesn't impede the fiend's darkvision."
  "name": "Devil's Sight"
"actions":
- "desc": "The fiend makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: YourSpellAttack to hit, range 150 ft., one target.\
    \ Hit: 2d6 + 3 + the spell's level fire damage. If the target is a flammable\
    \ object that isn't being worn or carried, it also catches fire."
  "name": "Hurl Flame"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
