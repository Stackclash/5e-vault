---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cos
- monster/cr/5
- monster/size/medium
- monster/type/humanoid/human
statblock: inline
aliases: ["Parriwimple"]
---
# [Parriwimple](compendium\bestiary\npc/parriwimple-cos.md)
*Source: Curse of Strahd p. 43, Derived from *  

```statblock
"name": "Parriwimple (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "14"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "6"
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
- "desc": "Parriwimple has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]."
  "name": "Brave"
- "desc": "A melee weapon deals one extra die of its damage when Parriwimple hits\
    \ with it (included in the attack)."
  "name": "Brute"
"actions":
- "desc": "Parriwimple makes three melee attacks or two ranged attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft.\
    \ and range 20/60 ft., one target. Hit: dice: 2d6 + 4|avg (2d6 + 4) piercing\
    \ damage, or dice: 2d8 + 4|avg (2d8 + 4) piercing damage if used with two\
    \ hands to make a melee attack."
  "name": "Spear"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d4 + 4|avg (2d4 + 4) bludgeoning damage. If the target is\
    \ a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw\
    \ or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Shield Bash"
"reactions":
- "desc": "Parriwimple adds 3 to its AC against one melee attack that would hit it.\
    \ To do so, Parriwimple must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Npc/token/parriwimple.png"
```
^statblock