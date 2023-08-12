---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Giant Crab
*Source: Monster Manual p. 324, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Candlekeep Mysteries*  

```statblock
"name": "Giant Crab"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "13"
- !!int "15"
- !!int "11"
- !!int "1"
- !!int "9"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
"senses": "blindsight 30 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The crab can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) bludgeoning damage, and the target is [[5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 11). The crab has two claws, each of which can grapple only one target."
  "name": "Claw"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "EGW"
- "MOT"
- "CM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-crab.png"
```
^statblock

## Environment

coastal