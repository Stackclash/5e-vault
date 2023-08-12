---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/urban
- monster/size/tiny
- monster/type/beast
statblock: inline
---
# Cat
*Source: Monster Manual p. 320, Curse of Strahd, Hoard of the Dragon Queen, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel*  

```statblock
"name": "Cat"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "3"
- !!int "15"
- !!int "10"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The cat has advantage on Wisdom ([[5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+0 (+0 to hit), reach 5 ft., one target.\
    \ Hit: 1 slashing damage."
  "name": "Claws"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "SKT"
- "ToA"
- "WDH"
- "IMR"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "JttRC"
"image": "5. Mechanics/Bestiary/Beast/token/cat.png"
```
^statblock

## Environment

grassland, forest, urban, desert