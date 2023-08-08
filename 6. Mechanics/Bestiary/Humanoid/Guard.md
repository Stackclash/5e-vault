---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
---
# Guard
*Source: Monster Manual p. 347, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Candlekeep Mysteries, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Light of Xaryxis, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

Guards include members of a city watch, sentries in a citadel or fortified town, and the bodyguards of merchants and nobles.

```statblock
"name": "Guard"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/8"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing\
    \ damage, or 5 (dice: 1d8 + 1|avg (1d8 + 1)) piercing damage if used with\
    \ two hands to make a melee attack."
  "name": "Spear"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
- "ToA"
- "WDH"
- "GoS"
- "DC"
- "DIP"
- "SLW"
- "BGDIA"
- "ERLW"
- "EGW"
- "MOT"
- "CM"
- "CRCotN"
- "JttRC"
- "LoX"
- "DSotDQ"
- "KftGV"
"image": "6. Mechanics/Bestiary/Humanoid/token/guard.png"
```
^statblock

## Environment

coastal, mountain, grassland, hill, urban, forest, desert