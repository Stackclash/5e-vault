---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: null
size: Medium
tags:
  - compendium/src/5e/vrgr
  - monster/cr/6
  - monster/size/medium
  - monster/type/undead
aliases:
  - Gallows Speaker
---
# [[5. Mechanics\Bestiary\Undead\Gallows Speaker (VRGR).md|Gallows Speaker]]
*Source: Van Richten's Guide to Ravenloft p. 234*

Gallows speakers arise from places of mass death or sites where creatures regularly meet their doom. Over time, pain-wracked phantoms and lingering souls combine into an entity that knows death in myriad forms. Such amalgamated spirits are tormented by their collective pain, endlessly moaning disjointed final thoughts as they lash out at the living. Having known untold deaths, gallows speakers can predict suffering, foreseeing dooms leveled against them and overwhelming their foes with visions of innumerable violent deaths.

Gallows speakers rarely speak coherently or communicate with the living, instead being entirely obsessed with their memories of death. These undead endlessly mutter to themselves, giving voice to final curses, regrets, pleas, and apologies. Those who linger and listen to a gallows speaker might gain insight into any of its many deaths.

```statblock
"name": "Gallows Speaker (VRGR)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "85"
"hit_dice": "19d8"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "12"
  - !!int "18"
"speed": "0 ft., fly 40 ft. (hover)"
"saves":
  - "wisdom": "+4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "truesight 60 ft., passive Perception 17"
"languages": "any languages its component spirits knew in life"
"cr": "6"
"traits":
  - "desc": "The gallows speaker can see 60 feet into the Ethereal Plane when it is\
      \ on the Material Plane and vice versa."
    "name": "Divination Senses"
  - "desc": "The gallows speaker can move through other creatures and objects as if\
      \ they were difficult terrain. It takes 5 (d10) force damage if it ends it turn\
      \ inside an object."
    "name": "Incorporeal Movement"
  - "desc": "The gallows speaker doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "Melee Spell Attack: +7 to hit, reach 5 ft., one creature. Hit: 15\
      \ (2d10 + 4) psychic damage, and the target must roll a d4 and subtract the\
      \ number rolled from the next attack roll or saving throw it makes before the\
      \ start of the gallows speaker's next turn."
    "name": "Foretelling Touch"
  - "desc": "The gallows speaker targets a creature it can see within 30 feet of it.\
      \ The target must make a DC 15 Wisdom saving throw. On a failed save, the target\
      \ takes 19 (3d12) psychic damage, and waves of painful memories leap from the\
      \ target to up to three other creatures of the gallows speaker's choice that\
      \ are within 30 feet of the target, each of which takes 13 (3d8) psychic damage."
    "name": "Suffering Echoes"
"source":
  - "VRGR"
"image": "5. Mechanics/Bestiary/Undead/token/gallows-speaker-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
