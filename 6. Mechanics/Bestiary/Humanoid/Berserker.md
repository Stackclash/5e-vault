---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/hill
- monster/environment/mountain
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
---
# Berserker
*Source: Monster Manual p. 344, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Storm Lord's Wrath, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Critical Role: Call of the Netherdeep*  

Hailing from uncivilized lands, unpredictable berserkers come together in war parties and seek conflict wherever they can find it.

```statblock
"name": "Berserker"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Chaotic alignment"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "9"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "At the start of its turn, the berserker can gain advantage on all melee\
    \ weapon attack rolls during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d12 + 3|avg (1d12 + 3) slashing damage."
  "name": "Greataxe"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "SKT"
- "ToA"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "SLW"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "CRCotN"
"image": "6. Mechanics/Bestiary/Humanoid/token/berserker.png"
```
^statblock

## Environment

coastal, mountain, hill, arctic, forest, desert