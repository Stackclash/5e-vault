---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/human
statblock: inline
---
# Baron Vargas Vallakovich
*Source: Curse of Strahd p. 105, Derived from Noble (MM)*  

```statblock
"name": "Baron Vargas Vallakovich"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "4"
  "Persuasion": !!int "5"
"senses": "passive Perception 12"
"languages": "any two languages"
"cr": "1/8"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 1|avg (1d8 + 1) piercing damage."
  "name": "Rapier"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Vargas adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Vargas must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Npc/token/baron-vargas-vallakovich.png"
```
^statblock

## Environment

urban