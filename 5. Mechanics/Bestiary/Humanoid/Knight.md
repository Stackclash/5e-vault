---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Knight"]
---
# Knight
*Source: Monster Manual p. 347, Curse of Strahd. Available in the SRD and the Basic Rules.*  

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
"speed": "30 ft."
"saves":
  "Wisdom": "+2"
  "Constitution": "+4"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- "desc": "The knight has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]."
  "name": "Brave"
"actions":
- "desc": "The knight makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 10 (dice: 2d6 + 3|avg (2d6 + 3)) slashing damage."
  "name": "Greatsword"
- "desc": "Ranged Weapon Attack: dice: d20+2 (+2 to hit), range 100/400 ft., one\
    \ target. Hit: 5 (dice: 1d10|avg (1d10)) piercing damage."
  "name": "Heavy Crossbow"
- "desc": "For 1 minute, the knight can utter a special command or warning whenever\
    \ a nonhostile creature that it can see within 30 feet of it makes an attack roll\
    \ or a saving throw. The creature can add a dice: d4|avg (d4) to its roll\
    \ provided it can hear and understand the knight. A creature can benefit from\
    \ only one Leadership die at a time. This effect ends if the knight is [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Leadership (Recharges after a Short or Long Rest)"
"reactions":
- "desc": "The knight adds 2 to its AC against one melee attack that would hit it.\
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
- "GotSF"
"image": "5. Mechanics/Bestiary/Humanoid/token/knight.png"
```
^statblock

## Environment

urban