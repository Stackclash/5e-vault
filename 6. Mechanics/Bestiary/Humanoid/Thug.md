---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
---
# Thug
*Source: Monster Manual p. 350, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, Curse of Strahd, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Light of Xaryxis, Keys from the Golden Vault*  

Thugs are ruthless enforcers skilled at intimidation and violence. They work for money and have few scruples.

```statblock
"name": "Thug"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "11"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "15"
- !!int "11"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "2"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The thug has advantage on an attack roll against a creature if at least\
    \ one of the thug's allies is within 5 feet of the creature and the ally isn't\
    \ [[6. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The thug makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) bludgeoning damage."
  "name": "Mace"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+2 (+2 to hit), range 100/400 ft., one\
    \ target. Hit: dice: 1d10|avg (1d10) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "MM"
- "PotA"
- "SKT"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "CoS"
- "CRCotN"
- "JttRC"
- "LoX"
- "KftGV"
"image": "6. Mechanics/Bestiary/Humanoid/token/thug.png"
```
^statblock

## Environment

urban