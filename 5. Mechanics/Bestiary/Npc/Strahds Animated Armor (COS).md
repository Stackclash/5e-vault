---
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/construct
aliases: ["Strahd's Animated Armor"]
---
# Strahd's Animated Armor
*Source: Curse of Strahd p. 227*  

The armor that Strahd wore into battle when he was alive lives on today as a headless, animated suit of plate armor. The armor is painted burgundy and adorned with golden angelic motifs.

## Thing of Evil

Strahd imbued his automaton with a sliver of his being, bequeathing unto his armor a malevolence not found in most animated objects. He also fortified his armor and placed a number of permanent spell effects on it to make the armor a better castle defender.

The armor understands Common but obeys only the commands of its master.

```statblock
"name": "Strahd's Animated Armor"
"size": "Medium"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "17"
- !!int "13"
- !!int "16"
- !!int "9"
- !!int "10"
- !!int "9"
"speed": "30 ft."
"skillsaves":
  "Perception": "+3"
"damage_resistances": "cold, fire"
"damage_immunities": "lightning, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 13"
"languages": "understands Common but can't speak"
"cr": "6"
"traits":
- "desc": "An animated object doesn't require air, food, drink, or sleep.\n\nThe magic\
    \ that animates an object is dispelled when the construct drops to 0 hit points.\
    \ An animated object reduced to 0 hit points becomes inanimate and is too damaged\
    \ to be of much use or value to anyone."
  "name": "Constructed Nature"
- "desc": "The armor is [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ while in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
    \ If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the armor\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]] for 1\
    \ minute."
  "name": "Antimagic Susceptibility"
- "desc": "While the armor remains motionless, it is indistinguishable from a normal\
    \ suit of armor."
  "name": "False Appearance"
"actions":
- "desc": "The armor makes two melee attacks or uses Shocking Bolt twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: 10 (dice: 2d6 + 3|avg (2d6 + 3)) slashing damage plus 3 (dice: 1d6|avg\
    \ (1d6)) lightning damage."
  "name": "Greatsword"
- "desc": "Ranged Spell Attack: dice: d20+4 (+4 to hit) (with advantage on the\
    \ attack roll if the target is wearing armor made of metal), range 60 ft., one\
    \ target. Hit: 10 (dice: 3d6|avg (3d6)) lightning damage."
  "name": "Shocking Bolt"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/strahds-animated-armor.png"
```
^statblock