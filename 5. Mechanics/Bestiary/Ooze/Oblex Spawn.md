---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-4
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/tiny
  - monster/type/ooze
statblock: inline
aliases:
  - Oblex Spawn
---
# [[5. Mechanics\Bestiary\Ooze\Oblex Spawn.md|Oblex Spawn]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 197, Mordenkainen's Tome of Foes p. 217*

An oblex devours memories not only to sustain its existence, but also to spawn new oblexes. Each time it fully drains the memories of a victim, it gains the creature's personality—now twisted by the oblex's foul nature. The more memories an oblex steals, the larger it becomes, until it must shed a personality it has absorbed or else go uncontrolled and erratic. This act spawns a new oblex.

Newly formed oblexes lack the capabilities of their older kin. They seek only to feed on memories and grow until they can impersonate their victims.

## Oblexes

> [!quote]- A quote from Mordenkainen  
> 
> Mind flayers unleash all manner of foul experiments upon the planes with little thought for the consequences. Here, though, I suspect another influence: Juiblex.

> [!quote]- A quote from Mordenkainen  
> 
> An oblex wants memories, but not to serve any end of its own making. Oblexes are hungry for memories and personalities because they are empty without such nourishment. In this way they serve their creators, the illithids. An oblex in the range of an elder brain's powers provides everything necessary for the mind flayers to find choice victims.

By experimenting on the slimes, jellies, and puddings that infest the depths of the Underdark, mind flayers created a special breed of Ooze, the oblex—a slime capable of assaulting the minds of other creatures. These pools of jelly are cunning hunters that feed on thoughts and memories. The sharper the mind, the better the meal, so oblexes hunt targets more likely to be intelligent, such as wizards and other spellcasters. When suitable fare comes within reach, an oblex draws its body up to engulf its victim. As it withdraws, it plunders the creature's mind, leaving its prey befuddled and confused—or dead.

When oblexes feed on thoughts, they can form weird copies of their prey to use as lures, which helps them harvest even more victims for their mind flayer masters.

```statblock
"name": "Oblex Spawn"
"size": "Tiny"
"type": "ooze"
"alignment": "Typically  Lawful Evil"
"ac": !!int "13"
"hp": !!int "18"
"hit_dice": "4d4 + 8"
"stats":
- !!int "8"
- !!int "16"
- !!int "15"
- !!int "14"
- !!int "11"
- !!int "10"
"speed": "20 ft."
"saves":
  "Charisma": !!int "2"
  "Intelligence": !!int "4"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#prone|prone]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 12"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The oblex can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "If the oblex takes fire damage, it has disadvantage on attack rolls and\
    \ ability checks until the end of its next turn."
  "name": "Aversion to Fire"
- "desc": "The oblex doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) bludgeoning damage plus dice: 1d4|avg\
    \ (1d4) psychic damage."
  "name": "Pseudopod"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Ooze/token/oblex-spawn-mpmm.webp"
```
^statblock

## Environment

swamp, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
