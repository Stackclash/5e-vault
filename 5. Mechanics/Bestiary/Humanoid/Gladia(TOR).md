---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: urban
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\5
  - monster\Environment\Urban
  - monster\Size\Medium
  - monster\Type\Humanoid\Any Race
aliases:
  - Gladiator
---
# [[5. Mechanics\Bestiary\Humanoid\Gladia(TOR).md|Gladiator]]
*Source: Monster Manual p. 346, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Gladiators battle for the entertainment of raucous crowds. Some gladiators are brutal pit fighters who treat each match as a life-or-death struggle, while others are professional duelists who command huge fees but rarely fight to the death.

```statblock
"name": "Gladia(TOR)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "15"
"speed": "30 ft."
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
- "desc": "The gladiator has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]."
  "name": "Brave"
- "desc": "A melee weapon deals one extra die of its damage when the gladiator hits\
    \ with it (included in the attack)."
  "name": "Brute"
"actions":
- "desc": "The gladiator makes three melee attacks or two ranged attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60\
    \ ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Spear"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4\
    \ + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must\
    \ succeed on a DC 15 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Shield Bash"
"reactions":
- "desc": "The gladiator adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/gladiator.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
