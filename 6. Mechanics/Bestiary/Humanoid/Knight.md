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
# Knight
*Source: Monster Manual p. 347, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Candlekeep Mysteries, The Wild Beyond the Witchlight, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

Knights are warriors who pledge service to rulers, religious orders, and noble causes. A knight's alignment determines the extent to which a pledge is honored. Whether undertaking a quest or patrolling a realm, a knight often travels with an entourage that includes squires and hirelings who are commoners.

```statblock
"name": "Knight"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "11"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The knight has advantage on saving throws against being [[6. Mechanics/Rules/Conditions.md#frightened|frightened]]."
  "name": "Brave"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The knight makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+2 (+2 to hit), range 100/400 ft., one\
    \ target. Hit: dice: 1d10|avg (1d10) piercing damage."
  "name": "Heavy Crossbow"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "For 1 minute, the knight can utter a special command or warning whenever\
    \ a nonhostile creature that it can see within 30 feet of it makes an attack roll\
    \ or a saving throw. The creature can add a dice: d4|avg (d4) to its roll\
    \ provided it can hear and understand the knight. A creature can benefit from\
    \ only one Leadership die at a time. This effect ends if the knight is [[6. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Leadership (Recharges after a Short or Long Rest)"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The knight adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the knight must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "GoS"
- "DC"
- "DIP"
- "BGDIA"
- "EGW"
- "MOT"
- "CM"
- "WBtW"
- "CRCotN"
- "JttRC"
- "DSotDQ"
- "KftGV"
"image": "6. Mechanics/Bestiary/Humanoid/token/knight.png"
```
^statblock

## Environment

urban