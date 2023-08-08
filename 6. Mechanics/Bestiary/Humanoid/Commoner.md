---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
---
# Commoner
*Source: Monster Manual p. 345, Curse of Strahd, Hoard of the Dragon Queen, Lost Mine of Phandelver, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, The Lost Dungeon of Rickedness: Big Rick Energy, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Light of Xaryxis, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

Commoners include peasants, serfs, slaves, servants, pilgrims, merchants, artisans, and hermits.

```statblock
"name": "Commoner"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) bludgeoning damage."
  "name": "Club"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "LMoP"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "SLW"
- "BGDIA"
- "ERLW"
- "RMBRE"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "CRCotN"
- "JttRC"
- "LoX"
- "DSotDQ"
- "KftGV"
"image": "6. Mechanics/Bestiary/Humanoid/token/commoner.png"
```
^statblock

## Environment

arctic, desert, coastal, grassland, hill, urban, forest