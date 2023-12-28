---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cos
- monster/cr/11
- monster/size/gargantuan
- monster/type/construct
statblock: inline
aliases: ["Baba Lysaga's Creeping Hut"]
---
# [Baba Lysaga's Creeping Hut](compendium\bestiary\npc/baba-lysagas-creeping-hut-cos.md)
*Source: Curse of Strahd p. 226*  

```statblock
"name": "Baba Lysaga's Creeping Hut (CoS)"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "263"
"hit_dice": "17d20 + 85"
"stats":
- !!int "26"
- !!int "7"
- !!int "20"
- !!int "1"
- !!int "3"
- !!int "3"
"speed": "30 ft."
"saves":
  "Charisma": !!int "0"
  "Wisdom": !!int "0"
  "Constitution": !!int "9"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, prone"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "11"
"traits":
- "desc": "An animated object doesn't require air, food, drink, or sleep.\n\nThe magic\
    \ that animates an object is dispelled when the construct drops to 0 hit points.\
    \ An animated object reduced to 0 hit points becomes inanimate and is too damaged\
    \ to be of much use or value to anyone."
  "name": "Constructed Nature"
- "desc": "The hut is incapacitated while the magic gem that animates it is in the\
    \ area of an antimagic field. If targeted by dispel magic, the hut must succeed\
    \ on a Constitution saving throw against the caster's spell save DC or fall unconscious\
    \ for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "The hut deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The hut makes three attacks with its roots. It can replace one of these\
    \ attacks with a rock attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12 to hit), reach 60 ft., one target.\
    \ Hit: dice: 4d10 + 8|avg (4d10 + 8) bludgeoning damage."
  "name": "Root"
- "desc": "Ranged Weapon Attack: dice: d20+12 (+12 to hit), range 120 ft., one\
    \ target. Hit: dice: 3d8 + 8|avg (3d8 + 8) bludgeoning damage."
  "name": "Rock"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/baba-lysagas-creeping-hut.png"
```
^statblock