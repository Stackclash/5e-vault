---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: inline
---
# Archer
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 49, Volo's Guide to Monsters p. 210*  

Archers defend castles, hunt wild game on the fringes of civilization, serve as artillery in military units, and occasionally make good coin as brigands or caravan guards.

Some renowned archers and groups of archers are known for the special fletching of their arrows. You may roll on the Archer Fletching table to determine the distinctive fletching used by an individual archer or a group of them.

**Archer Fletching**

| dice: d12 | Fletching |
|-----------|-----------|
| 1 | Feathers from an owlbear's mane |
| 2 | Cockatrice feathers |
| 3 | Axe beak feathers |
| 4 | Planetar feathers |
| 5 | Couatl feathers |
| 6 | Pegasus feathers |
| 7 | Griffon feathers |
| 8 | Vrock feathers |
| 9 | Peryton feathers |
| 10 | Dryad leaf vanes |
| 11 | Drake scale vanes |
| 12 | Stirge wing vanes |
^archer-fletching

```statblock
"name": "Archer"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "11"
- !!int "18"
- !!int "16"
- !!int "11"
- !!int "13"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "5"
  "Acrobatics": !!int "6"
"senses": "passive Perception 15"
"languages": "any one language (usually Common)"
"cr": "3"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The archer makes two Shortsword or Longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+6 (+6 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Longbow"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Immediately after making an attack roll or a damage roll with a ranged\
    \ weapon, the archer can roll a dice: d10|avg (d10) and add the number rolled\
    \ to the total."
  "name": "Archer's Eye (3/Day)"
"source":
- "MPMM"
- "VGM"
"image": "6. Mechanics/Bestiary/Humanoid/token/archer.png"
```
^statblock

## Environment

forest, urban