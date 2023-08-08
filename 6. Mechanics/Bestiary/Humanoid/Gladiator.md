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
# Gladiator
*Source: Monster Manual p. 346, Curse of Strahd, The Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Critical Role: Call of the Netherdeep, Keys from the Golden Vault*  

Gladiators battle for the entertainment of raucous crowds. Some gladiators are brutal pit fighters who treat each match as a life-or-death struggle, while others are professional duelists who command huge fees but rarely fight to the death.

```statblock
"name": "Gladiator"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "10"
"senses": "passive Perception 11"
"languages": "any one language (usually Common)"
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The gladiator has advantage on saving throws against being [[6. Mechanics/Rules/Conditions.md#frightened|frightened]]."
  "name": "Brave"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A melee weapon deals one extra die of its damage when the gladiator hits\
    \ with it (included in the attack)."
  "name": "Brute"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The gladiator makes three melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft.\
    \ and range 20/60 ft., one target. Hit: dice: 2d6 + 4|avg (2d6 + 4) piercing\
    \ damage, or 13 (dice: 2d8 + 4|avg (2d8 + 4)) piercing damage if used with\
    \ two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d4 + 4|avg (2d4 + 4) bludgeoning damage. If the target is a\
    \ Medium or smaller creature, it must succeed on a DC 15 Strength saving throw\
    \ or be knocked [[6. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Shield Bash"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The gladiator adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "CoS"
- "RoT"
- "SKT"
- "ToA"
- "GoS"
- "DIP"
- "SLW"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "CRCotN"
- "KftGV"
"image": "6. Mechanics/Bestiary/Humanoid/token/gladiator.png"
```
^statblock

## Environment

urban