---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: 'underdark, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/8
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/paladin
aliases:
  - Blackguard
---
# [[5. Mechanics/Bestiary/Humanoid/Blackguard (MPMM).md|Blackguard]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 63, Volo's Guide to Monsters p. 211*

Blackguards are paladins who broke their sacred oaths and now indulge their own villainous ambitions. They consort with Fiends and Undead, and they reject many of the goodly things from their former lives.

Blackguards often adorn their armor and weapons with dread accoutrements or are marked by eerie phenomena. You may choose a blackguard's accoutrement or roll on the Blackguard Accoutrements table to determine it.

**Blackguard Accoutrements**

`dice: [[Blackguard (MPMM).md#^blackguard-accoutrements]]`

| dice: d8 | Accoutrement |
|----------|--------------|
| 1 | Armor etched with stylized depictions of gruesome battles |
| 2 | Helm wrought in the shape of a demonic boar |
| 3 | Helm wrought to resemble a death mask |
| 4 | Cloak decorated with bloody handprints |
| 5 | Curls of inky smoke seeping from armor at the joints |
| 6 | Dozens of flies buzzing about the blackguard |
| 7 | Severed hand hanging from a chain around the blackguard's neck |
| 8 | Glaive adorned with a length of cloth bearing the words "I choose violence" |
^blackguard-accoutrements

```statblock
"name": "Blackguard (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "paladin"
"alignment": "Typically  Neutral Evil"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate]]"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"stats":
- !!int "18"
- !!int "11"
- !!int "18"
- !!int "11"
- !!int "14"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "7"
  "Deception": !!int "5"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "8"
"traits":
- "desc": "The blackguard casts one of the following spells, using Charisma as the\
    \ spellcasting ability (spell save DC 13):\n\n2/day each: [[5. Mechanics/Spells/Command.md|command]],\
    \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Find Steed.md|find steed]]"
  "name": "Spellcasting"
"actions":
- "desc": "The blackguard makes three attacks, using Glaive, Shortbow, or both."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) slashing damage plus 9 (2d8) necrotic damage."
  "name": "Glaive"
- "desc": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage."
  "name": "Shortbow"
- "desc": "Each enemy within 30 feet of the blackguard must succeed on a DC 13 Wisdom\
    \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ of the blackguard for 1 minute. If a [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ target ends its turn more than 30 feet away from the blackguard, the target\
    \ can repeat the saving throw, ending the effect on itself on a success."
  "name": "Dreadful Aspect (Recharges after a Short or Long Rest)"
"bonus_actions":
- "desc": "Immediately after the blackguard hits a target with an attack roll, the\
    \ blackguard can force that target to make a DC 13 Constitution saving throw.\
    \ On a failed save, the target suffers one of the following effects of the blackguard's\
    \ choice:"
  "name": "Smite"
- "desc": "The target is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] for 1\
    \ minute. The [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] target can repeat\
    \ the save at the end of each of its turns, ending the effect on itself on a success."
  "name": "Blind"
- "desc": "The target is pushed up to 10 feet away and knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Shove"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/blackguard-mpmm.webp"
```
^statblock

## Environment

underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
