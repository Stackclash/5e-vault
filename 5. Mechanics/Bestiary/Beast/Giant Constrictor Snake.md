---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/underwater
- monster/size/huge
- monster/type/beast
statblock: inline
---
# Giant Constrictor Snake
*Source: Monster Manual p. 324, Tomb of Annihilation, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Explorer's Guide to Wildemount, The Wild Beyond the Witchlight*  

```statblock
"name": "Giant Constrictor Snake"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "60"
"hit_dice": "8d12 + 8"
"stats":
- !!int "19"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "2"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) bludgeoning damage, and the target is [[5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 16). Until this grapple ends, the creature is [[5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ and the snake can't constrict another target."
  "name": "Constrict"
"source":
- "MM"
- "ToA"
- "GoS"
- "DIP"
- "SLW"
- "EGW"
- "WBtW"
"image": "5. Mechanics/Bestiary/Beast/token/giant-constrictor-snake.png"
```
^statblock

## Environment

underwater, underdark, forest, swamp, desert