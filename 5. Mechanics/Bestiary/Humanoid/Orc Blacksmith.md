---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/
- monster/size/medium
- monster/type/humanoid/orc
- monster/type/humanoid/retainer
statblock: inline
aliases: ["Orc Blacksmith"]
---
# [[5. Mechanics/Bestiary/Humanoid/Orc Blacksmith.md|Orc Blacksmith]]
*Source: Flee, Mortals! (Packet 1) p. 9*

```statblock
"name": "Orc Blacksmith"
"size": "Medium"
"type": "humanoid"
"subtype": "orc, Retainer"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "medium"
"stats":
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
"speed": "35 ft."
"saves":
  "Intelligence": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Athletics": !!int "6"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Orc"
"traits":
- "desc": "The blacksmith is proficient in smith's tools (+6 bonus)."
  "name": "Tool Proficiency"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) bludgeoning damage.\n\nBeginning at 7th level, the blacksmith can make\
    \ this attack twice, instead of once, when they take the Attack action on their\
    \ turn."
  "name": "Signature Attack (Warhammer)"
- "desc": "The blacksmith blows fire in a 15-foot cone or in a 30-foot-long, 5-foot-wide\
    \ line. Each creature in that area must make a Dexterity saving throw, taking\
    \ 9 (2d8) fire damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "3rd Level: Fire Bellows (3/Day)"
"bonus_actions":
- "desc": "As a bonus action, the blacksmith touches a piece of armor and fortifies\
    \ it. Roll a d4. For 10 minutes, a creature wearing the armor gains a bonus to\
    \ their AC equal to the result of the roll."
  "name": "5th Level: Reinforce Armor (3/Day)"
- "desc": "As a bonus action, the blacksmith touches a weapon and polishes it. For\
    \ 1 minute, the weapon is magical and deals an extra 1d8 damage."
  "name": "7th Level: Fortify Weapon (3/Day)"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```