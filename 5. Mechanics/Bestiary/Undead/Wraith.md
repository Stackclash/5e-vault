---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: underdark
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\5
  - monster\Environment\Underdark
  - monster\Size\Medium
  - monster\Type\Undead
aliases:
  - Wraith
---
# [[5. Mechanics\Bestiary\Undead\Wraith.md|Wraith]]
*Source: Monster Manual p. 302, Curse of Strahd, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

A wraith is malice incarnate, concentrated into an incorporeal form that seeks to quench all life. The creature is suffused with negative energy, and its mere passage through the world leaves nearby plants blackened and withered. Animals flee from its presence. Even small fires can be extinguished by the sucking oblivion of the wraith's horrifying existence.

## Vile Oblivion

When a mortal humanoid lives a debased life or enters into a fiendish pact, it consigns its soul to eternal damnation in the Lower Planes. However, sometimes the soul becomes so suffused with negative energy that it collapses in on itself and ceases to exist the instant before it can shuffle off to some horrible afterlife. When this occurs, the spirit becomes a soulless wraith-a malevolent void trapped on the plane where it died. Almost nothing of the wraith's former existence is preserved; in this new form, it exists only to annihilate other life.

## Bereft of Body

A wraith can move through solid creatures and objects as easily as a mortal creature moves through fog.

A wraith might retain a few memories of its mortal life as shadowy echoes. However, even the strongest events and emotions become little more than faint impressions, fleeting as half-remembered dreams. A wraith might pause to stare at something that fascinated it in life, or it might curb its wrath in acknowledgment of a past friendship. Such moments come rarely, however, because most wraiths despise what they were as a reminder of what they have become.

## Undead Commanders

A wraith can make an undead servant from the spirit of a humanoid creature that has recently suffered a violent death. Such a fragment of woe becomes a specter, spiteful of all that lives.

Wraiths sometimes rule the legions of the dead, plotting the doom of living creatures. When they emerge from their tombs to do battle, life and hope shrivel before them. Even if a wraith's armies are forced to retreat, the lands its forces occupied are so blasted and withered that those who live there often starve and die.

## Undead Nature

A wraith doesn't require air, food, drink, or sleep.

```statblock
"name": "Wraith"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "6"
- !!int "16"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "15"
"speed": "0 ft., fly 60 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- "desc": "The wraith can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- "desc": "While in sunlight, the wraith has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21\
    \ (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
- "desc": "The wraith targets a humanoid within 10 feet of it that has been dead for\
    \ no longer than 1 minute and died violently. The target's spirit rises as a [[5. Mechanics/Bestiary/Undead/Specter.md|specter]]\
    \ in the space of its corpse or in the nearest unoccupied space. The [[5. Mechanics/Bestiary/Undead/Specter.md|specter]]\
    \ is under the wraith's control. The wraith can have no more than seven specters\
    \ under its control at one time."
  "name": "Create Specter"
"source":
- "MM"
- "CoS"
- "TCE"
- "VEoR"
"image": "5. Mechanics/Bestiary/Undead/token/wraith.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
