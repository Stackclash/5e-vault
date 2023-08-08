---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/size/large
- monster/type/beast
statblock: inline
---
# Giant Scorpion
*Source: Monster Manual p. 327, Tales from the Yawning Portal, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Candlekeep Mysteries, Journeys through the Radiant Citadel, Dragonlance: Shadow of the Dragon Queen*  

```statblock
"name": "Giant Scorpion"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "15"
- !!int "13"
- !!int "15"
- !!int "1"
- !!int "9"
- !!int "3"
"speed": "walk 40 ft."
"senses": "blindsight 60 ft., passive Perception 9"
"languages": ""
"cr": "3"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The scorpion makes three attacks: two with its claws and one with its sting."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) bludgeoning damage, and the target is [[6. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 12). The scorpion has two claws, each of which can grapple only one\
    \ target."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) piercing damage, and the target must\
    \ make a DC 12 Constitution saving throw, taking 22 (dice: 4d10|avg (4d10))\
    \ poison damage on a failed save, or half as much damage on a successful one."
  "name": "Sting"
"source":
- "MM"
- "TftYP"
- "ToA"
- "BGDIA"
- "EGW"
- "CM"
- "JttRC"
- "DSotDQ"
"image": "6. Mechanics/Bestiary/Beast/token/giant-scorpion.png"
```
^statblock

## Environment

desert