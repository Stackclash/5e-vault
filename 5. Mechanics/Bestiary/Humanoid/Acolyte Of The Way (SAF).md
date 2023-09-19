---
cssclass: json5e-monster
tags:
- compendium/src/5e/saf
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Acolyte of the Way"]
---
# Acolyte of the Way
*Source: Strongholds and Followers p. 76*  

```statblock
"name": "Acolyte of the Way"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"stats":
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": "+3"
  "Dexterity": "+6"
  "Wisdom": "+3"
  "Intelligence": "+3"
  "Strength": "+6"
  "Constitution": "+3"
"skillsaves":
  "Athletics": "+5"
  "Acrobatics": "+5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft.,\
    \ one target. Hit: dice: 2d4 + 4|avg (2d4 + 4) bludgeoning damage.\n\nAt\
    \ 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer"
  "name": "Fists of Fury (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe acolyte heals 2 health levels."
  "name": "Body and Soul (3/Day, Bonus Action)"
"reactions":
- "desc": "Prerequisite: 5th-level retainer\n\nAs a reaction to taking damage from\
    \ a creature adjacent to them, the acolyte immediately makes two attacks with\
    \ their signature attack against their attacker. If they both hit, the attacker\
    \ is [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]."
  "name": "Stunning Follow-up (3/Day)"
"source":
- "SaF"
```
^statblock