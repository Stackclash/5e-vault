---
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/tiny
- monster/type/fiend/devil
aliases: ["Majesto"]
---
# Majesto
*Source: Curse of Strahd p. 115, Derived from Imp (MM)*  

```statblock
"name": "Majesto"
"size": "Tiny"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "6"
- !!int "17"
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  "Deception": "+4"
  "Stealth": "+5"
  "Insight": "+3"
  "Persuasion": "+4"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with silvered weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Infernal, Common"
"cr": "1"
"traits":
- "desc": "Majesto can use its action to polymorph into a beast form that resembles\
    \ a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb\
    \ 20 ft.), or back into its true form. Its statistics are the same in each form,\
    \ except for the speed changes noted. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "Magical darkness doesn't impede Majesto's darkvision."
  "name": "Devil's Sight"
- "desc": "Majesto has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 5 (dice: 1d4 + 3|avg (1d4 + 3)) piercing damage, and the target must\
    \ make a DC 11 Constitution saving throw, taking 10 (dice: 3d6|avg (3d6))\
    \ poison damage on a failed save, or half as much damage on a successful one."
  "name": "Sting (Bite in Beast Form)"
- "desc": "Majesto magically turns [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]]\
    \ until it attacks, or until its [[/5. Mechanics/Rules/Conditions.md#concentration|concentration]]\
    \ ends (as if concentrating on a spell). Any equipment Majesto wears or carries\
    \ is [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]] with it."
  "name": "Invisibility"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Npc/token/majesto.png"
```
^statblock