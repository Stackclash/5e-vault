---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/large
- monster/type/beast
statblock: inline
---
# Warhorse
*Source: Monster Manual p. 340, Curse of Strahd, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Critical Role: Call of the Netherdeep, Dragonlance: Shadow of the Dragon Queen*  

```statblock
"name": "Warhorse"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "18"
- !!int "12"
- !!int "13"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "walk 60 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the horse moves at least 20 feet straight toward a creature and then\
    \ hits it with a hooves attack on the same turn, that target must succeed on a\
    \ DC 14 Strength saving throw or be knocked [[5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ If the target is [[5. Mechanics/Rules/Conditions.md#prone|prone]], the horse can\
    \ make another attack with its hooves against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "CoS"
- "PotA"
- "RoT"
- "SKT"
- "ToA"
- "BGDIA"
- "EGW"
- "CRCotN"
- "DSotDQ"
"image": "5. Mechanics/Bestiary/Beast/token/warhorse.png"
```
^statblock

## Environment

urban