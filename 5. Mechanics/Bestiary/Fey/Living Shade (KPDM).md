---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Medium
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1-4
  - monster/size/medium
  - monster/type/fey
aliases:
  - Living Shade
---
# [[5. Mechanics\Bestiary\Fey\Living Shade (KPDM).md|Living Shade]]
*Source: Deep Magic p. 299*

One of the rarer and more bizarre options for a familiar is the living shade, a fey creature often confused with undead creatures such as the [[5. Mechanics/Bestiary/Undead/Shadow.md|shadow]]. [[5. Mechanics/Classes/Wizard School Of Illusion.md|Illusionists]], [[5. Mechanics/Classes/Wizard.md|wizards]] who specialize in shadow, and [[5. Mechanics/Classes/Warlock The Archfey.md|Pact of the Archfey]] [[5. Mechanics/Classes/Warlock.md|warlocks]] are the most common masters of these creatures. Obtaining a living shade by casting the [[5. Mechanics/Spells/Find Familiar.md|find familiar]] spell requires an additional material component: 50 gp worth of powdered jet.

## Familiar

If a living shade agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the living shade senses, as long as they are within 1 mile of each other. While the living shade is within 10 feet of its master, the master gains the living shade's Shadow Stealth trait. If its master causes it physical harm, or if it simply chooses to do so, the shade will abandon its service as a familiar, breaking the telepathic bond.

```statblock
"name": "Living Shade (KPDM)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "6"
- !!int "14"
- !!int "10"
- !!int "9"
- !!int "10"
- !!int "12"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "6"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands Common but can't speak"
"cr": "1/4"
"traits":
- "desc": "The living shade can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "While in dim light or darkness, the living shade can take the Hide action\
    \ as a bonus action."
  "name": "Shadow Stealth"
- "desc": "While in sunlight, the living shade has disadvantage on attack rolls, as\
    \ well as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ cold damage."
  "name": "Shadow Touch"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
