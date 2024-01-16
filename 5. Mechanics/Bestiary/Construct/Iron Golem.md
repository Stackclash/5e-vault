---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/16
- monster/size/large
- monster/type/construct
statblock: inline
aliases: ["Iron Golem"]
---
# [[5. Mechanics/Bestiary/Construct/Iron Golem.md|Iron Golem]]
*Source: Monster Manual p. 170, Curse of Strahd. Available in the SRD.*  

```statblock
"name": "Iron Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "210"
"hit_dice": "20d10 + 100"
"stats":
- !!int "24"
- !!int "9"
- !!int "20"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "30 ft."
"damage_immunities": "fire; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "16"
"traits":
- "desc": "Whenever the golem is subjected to fire damage, it takes no damage and\
    \ instead regains a number of hit points equal to the fire damage dealt."
  "name": "Fire Absorption"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The golem makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d8 + 7|avg (3d8 + 7) bludgeoning damage."
  "name": "Slam"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d10 + 7|avg (3d10 + 7) slashing damage."
  "name": "Sword"
- "desc": "The golem exhales poisonous gas in a 15-foot cone. Each creature in that\
    \ area must make a DC 19 Constitution saving throw, taking dice: 10d8|avg (10d8)\
    \ poison damage on a failed save, or half as much damage on a successful one."
  "name": "Poison Breath (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "SKT"
- "WDMM"
- "GoS"
- "EGW"
- "MOT"
- "IDRotF"
- "SatO"
- "BMT"
- "DoDk"
"image": "compendium/bestiary/construct/token/iron-golem.png"
```
^statblock