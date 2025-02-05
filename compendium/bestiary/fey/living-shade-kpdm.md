---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: 
size: Medium
tags:
- compendium/src/5e/kpdm
- monster/cr/1-4
- monster/size/medium
- monster/type/fey
aliases: ["Living Shade"]
---
# [Living Shade](compendium\bestiary\fey/living-shade-kpdm.md)
*Source: Deep Magic p. 299*

One of the rarer and more bizarre options for a familiar is the living shade, a fey creature often confused with undead creatures such as the [shadow](compendium/bestiary/undead/shadow.md). [Illusionists](compendium/classes/wizard-school-of-illusion.md), [wizards](compendium/classes/wizard.md) who specialize in shadow, and [Pact of the Archfey](compendium/classes/warlock-the-archfey.md) [warlocks](compendium/classes/warlock.md) are the most common masters of these creatures. Obtaining a living shade by casting the [find familiar](compendium/spells/find-familiar.md) spell requires an additional material component: 50 gp worth of powdered jet.

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
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [grappled](/compendium/rules/conditions.md#Grappled),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [petrified](/compendium/rules/conditions.md#Petrified),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained)"
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
    \ well as on Wisdom ([Perception](/compendium/rules/skills.md#Perception)) checks\
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