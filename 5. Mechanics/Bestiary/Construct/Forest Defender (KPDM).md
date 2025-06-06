---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - compendium/src/5e/kpdm
  - monster/cr/3
  - monster/size/medium
  - monster/type/construct
aliases:
  - Forest Defender
---
# [[5. Mechanics\Bestiary\Construct\Forest Defender (KPDM).md|Forest Defender]]
*Source: Deep Magic p. 53*

```statblock
"name": "Forest Defender (KPDM)"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "4"
"stats":
  - !!int "12"
  - !!int "18"
  - !!int "17"
  - !!int "6"
  - !!int "10"
  - !!int "5"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+6"
"damage_vulnerabilities": "slashing"
"damage_resistances": "bludgeoning, piercing from nonmagical attacks not made with\
  \ adamantine weapons"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages of its creator but can't speak"
"cr": "3"
"traits":
  - "desc": "The forest defender is immune to any spell or effect that would alter\
      \ its form."
    "name": "Immutable Form"
  - "desc": "The forest defender has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
  - "desc": "The forest defender has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
      \ checks it makes in any terrain with ample obscuring plant life."
    "name": "Plant Camouflage"
"actions":
  - "desc": "The forest defender makes two thorned vine attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 8\
      \ (1d8 + 4) piercing damage, and the target must succeed on a DC 14 Strength\
      \ saving throw or be pulled 10 feet toward the forest defender."
    "name": "Thorned Vine"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one Medium or smaller\
      \ creature. Hit: 13 (2d8 + 4) piercing damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 11). Until the grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
      \ and the forest defender can't embrace another target."
    "name": "Thorned Embrace"
"source":
  - "KPDM"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/TEB/Wolf_of_the_Forest.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
