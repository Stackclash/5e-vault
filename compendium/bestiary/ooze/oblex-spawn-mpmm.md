---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/tiny
- monster/type/ooze
statblock: true
statblock-link: "#^statblock"
"name": "Oblex Spawn"
"size": "Tiny"
"type": "ooze"
"alignment": "Lawful Evil"
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
"speed": "walk 20 ft."
"saves":
  "Charisma": !!int "2"
  "Intelligence": !!int "4"
"condition_immunities": "blinded, charmed, deafened, exhaustion, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 12"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The oblex can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the oblex takes fire damage, it has disadvantage on attack rolls and\
    \ ability checks until the end of its next turn."
  "name": "Aversion to Fire"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The oblex doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) bludgeoning damage plus dice: 1d4|avg\
    \ (1d4) psychic damage."
  "name": "Pseudopod"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/ooze/token/oblex-spawn.png"
aliases: ["Oblex Spawn"]
---
# Oblex Spawn
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

## Stat Block

```ad-statblock
title: Oblex Spawn
![](/compendium/bestiary/ooze/token/oblex-spawn.png#token)
*Tiny ooze, Lawful Evil*

- **Armor Class** 13 
- **Hit Points** `dice: 4d4 + 8|text(18)` (4d4 + 8) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|16 (+3)|15 (+2)|14 (+2)|11 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** Intelligence +4, Charisma +2
- **Skills** ⏤
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 12
- **Condition Immunities** blinded, charmed, deafened, exhaustion, prone
- **Languages** —
- **Challenge** 1/4

## Traits

***Amorphous.*** The oblex can move through a space as narrow as 1 inch wide without squeezing.

***Aversion to Fire.*** If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.

***Unusual Nature.*** The oblex doesn't require sleep.

## Actions

***Pseudopod.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 3|avg` (`1d4 + 3`) bludgeoning damage plus `dice: 1d4|avg` (`1d4`) psychic damage.
```
^statblock

## Environment

swamp, underdark, urban