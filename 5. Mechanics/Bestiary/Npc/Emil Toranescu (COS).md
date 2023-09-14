---
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/forest
- monster/environment/hill
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
aliases: ["Emil Toranescu"]
---
# Emil Toranescu
*Source: Curse of Strahd p. 81, Derived from Werewolf (MM)*  

```statblock
"name": "Emil Toranescu"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "72"
"hit_dice": "9d8 + 18"
"stats":
- !!int "15"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "30 ft. (40 ft. in wolf form)"
"skillsaves":
  "Stealth": "+3"
  "Perception": "+4"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 14"
"languages": "Common (can't speak in wolf form)"
"cr": "3"
"traits":
- "desc": "Emil can use its action to polymorph into a wolf-humanoid hybrid or into\
    \ a wolf, or back into its true form, which is humanoid. Its statistics, other\
    \ than its AC, are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "Emil has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- "desc": "Emil makes two attacks: two with its spear (humanoid form) or one with\
    \ its bite and one with its claws (hybrid form)."
  "name": "Multiattack (Humanoid or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 6 (dice: 1d8 + 2|avg (1d8 + 2)) piercing damage. If the target is\
    \ a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed\
    \ with werewolf lycanthropy."
  "name": "Bite (Wolf or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: 7 (dice: 2d4 + 2|avg (2d4 + 2)) slashing damage."
  "name": "Claws (Hybrid Form Only)"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one creature. Hit: 5 (dice: 1d6 + 2|avg (1d6 + 2))\
    \ piercing damage, or 6 (dice: 1d8 + 2|avg (1d8 + 2)) piercing damage if used\
    \ with two hands to make a melee attack."
  "name": "Spear (Humanoid Form Only)"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/emil-toranescu.png"
```
^statblock

## Environment

forest, hill