---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Drow Arachnomancer"]
---
# Drow Arachnomancer
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 99*  

Drow spellcasters who seek to devote themselves wholly to Lolth, the Spider Queen, sometimes walk the sinister path of the arachnomancer. By offering up body and soul to Lolth, they gain tremendous power and a supernatural connection to the ancient spiders of the Demonweb Pits, channeling magic from that dread place.

```statblock
"name": "Drow Arachnomancer"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"hp": !!int "162"
"hit_dice": "25d8 + 50"
"stats":
- !!int "11"
- !!int "17"
- !!int "14"
- !!int "19"
- !!int "14"
- !!int "16"
"speed": "30 ft., climb 30 ft."
"saves":
  "Charisma": "+8"
  "Intelligence": "+9"
  "Constitution": "+7"
"skillsaves":
  "Nature": "+9"
  "Stealth": "+8"
  "Perception": "+7"
  "Arcana": "+9"
"damage_resistances": "poison"
"senses": "blindsight 10 ft., darkvision 120 ft., passive Perception 17"
"languages": "Elvish, Undercommon, can speak with spiders"
"cr": "13"
"traits":
- "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\nAt\
    \ will: [[5. Mechanics/Spells/Dancing Lights.md\|dancing lights]], [[5. Mechanics/Spells/Mage Hand.md\|mage hand]]\n\
    \n1/day each: [[5. Mechanics/Spells/Darkness.md\|darkness]], [[5. Mechanics/Spells/Dispel Magic.md\|dispel magic]],\
    \ [[5. Mechanics/Spells/Etherealness.md\|etherealness]], [[5. Mechanics/Spells/Faerie Fire.md\|faerie fire]],\
    \ [[5. Mechanics/Spells/Fly.md\|fly]], [[5. Mechanics/Spells/Insect Plague.md\|insect plague]],\
    \ [[5. Mechanics/Spells/Invisibility.md\|invisibility]]"
  "name": "spells"
- "desc": "The drow has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#charmed\|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- "desc": "The drow can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception\|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The drow ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "The drow makes three attacks, using Bite, Poisonous Touch, Web, or a combination\
    \ of them. One attack can be replaced by a use of Spellcasting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: 12 (dice: 2d8 + 3|avg (2d8 + 3)) piercing damage, and the target\
    \ must make a DC 15 Constitution saving throw, taking 31 (dice: 7d8|avg (7d8))\
    \ poison damage on a failed save, or half as much damage on a successful one.\
    \ If the poison damage reduces the target to 0 hit points, the target is stable\
    \ but [[/5. Mechanics/Rules/Conditions.md#poisoned\|poisoned]] for 1 hour, even after\
    \ regaining hit points, and is [[/5. Mechanics/Rules/Conditions.md#paralyzed\|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#poisoned\|poisoned]] in this way."
  "name": "Bite (Spider Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: 35 (dice: 10d6|avg (10d6)) poison damage."
  "name": "Poisonous Touch (Humanoid Form Only)"
- "desc": "Ranged Weapon Attack: dice: d20+8 (+8 to hit), range 30/60 ft., one\
    \ target. Hit: The target is [[/5. Mechanics/Rules/Conditions.md#restrained\|restrained]]\
    \ by webbing. As an action, the [[/5. Mechanics/Rules/Conditions.md#restrained\|restrained]]\
    \ target can make a DC 15 Strength check, bursting the webbing on a success. The\
    \ webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire\
    \ damage; immunity to bludgeoning, poison, and psychic damage)."
  "name": "Web (Spider Form Only; (Recharge 5-6))"
"bonus_actions":
- "desc": "The drow magically transforms into a Large spider, remaining in that form\
    \ for up to 1 hour, or back into its true form. Its statistics, other than its\
    \ size, are the same in each form. It can speak and cast spells while in spider\
    \ form. Any equipment it is wearing or carrying in Humanoid form melds into the\
    \ spider form. It can't activate, use, wield, or otherwise benefit from any of\
    \ its equipment. It reverts to its Humanoid form if it dies."
  "name": "Change Shape (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/humanoid/token/drow-arachnomancer.png"
```
^statblock

## Environment

underdark