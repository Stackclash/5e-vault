---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/5
  - monster/environment/coastal
  - monster/environment/underwater
  - monster/size/medium
  - monster/type/monstrosity
statblock: inline
aliases:
  - Kraken Priest
---
# [[5. Mechanics\Bestiary\Monstrosity\Kraken Priest.md|Kraken Priest]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 167*

A kraken can seem godlike to folk who have faced its fury. Those who mistake its might for divine power and those who seek to appease the monster through veneration are sometimes rewarded with power, to serve thereafter as kraken priests.

Every kraken priest undergoes a change in appearance that reflects the kraken's influence, although each one differs in how their reverence is displayed. One kraken priest might have ink-black eyes and a suckered tentacle for a tongue, while another has a featureless face and a body covered in eyes and mouths that dribble seawater. These horrific manifestations intensify when the kraken possesses its minion to utter dire pronouncements.

```statblock
"name": "Kraken Priest"
"size": "Medium"
"type": "monstrosity"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "12"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "14"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "5"
"traits":
- "desc": "The priest casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [[5. Mechanics/Spells/Command.md|command]], [[5. Mechanics/Spells/Create Or Destroy Water.md|create or destroy water]]\n\
    \n1/day: [[5. Mechanics/Spells/Evards Black Tentacles.md|Evard's black tentacles]]\n\
    \n3/day each: [[5. Mechanics/Spells/Control Water.md|control water]], [[5. Mechanics/Spells/Darkness.md|darkness]],\
    \ [[5. Mechanics/Spells/Water Breathing.md|water breathing]], [[5. Mechanics/Spells/Water Walk.md|water walk]]"
  "name": "spells"
- "desc": "The priest can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "The priest makes two Thunderous Touch or Thunderbolt attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 5d10|avg (5d10) thunder damage."
  "name": "Thunderous Touch"
- "desc": "Ranged Spell Attack: dice: d20+5 (+5 to hit), range 60 ft., one target.\
    \ Hit: dice: 2d10|avg (2d10) lightning damage plus dice: 2d10|avg (2d10)\
    \ thunder damage, and the target is knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Thunderbolt"
- "desc": "A kraken speaks through the priest with a thunderous voice audible within\
    \ 300 feet. Creatures of the priest's choice that can hear the kraken's words\
    \ (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a DC\
    \ 14 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ of the priest for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Voice of the Kraken (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/kraken-priest-mpmm.webp"
```
^statblock

## Environment

coastal, underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
