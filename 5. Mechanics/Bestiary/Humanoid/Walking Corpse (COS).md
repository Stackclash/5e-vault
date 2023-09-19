---
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Walking Corpse"]
---
# Walking Corpse
*Source: Curse of Strahd p. 165, Derived from *  

```statblock
"name": "Walking Corpse"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "20 ft."
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"traits":
- "desc": "When a corpse is reduced to 0 hit points, it splits open, disgorging a\
    \ [[5. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarm of poisonous snakes]].\
    \ The snakes are hungry and fight until slain."
  "name": "Violent Death"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) bludgeoning damage."
  "name": "Club"
"source":
- "CoS"
"image": "compendium/bestiary/humanoid/token/walking-corpse.png"
```
^statblock