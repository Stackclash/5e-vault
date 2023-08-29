---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/gargantuan
- monster/type/elemental
aliases: ["Elder Tempest"]
---
# Elder Tempest
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 121, Mordenkainen's Tome of Foes p. 200*  

Terrifying storms manifest in the bodies of elder tempests. Beings carved from clouds, wind, rain, and lightning, elder tempests assume the shape of serpents that slither through the sky. They drown the land beneath them with rain and stab the earth with lances of lightning. Punishing winds scream around them as they fly, feeding the chaos they create.

```statblock
"name": "Elder Tempest"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Typically  Neutral"
"ac": !!int "19"
"hp": !!int "264"
"hit_dice": "16d20 + 96"
"stats":
- !!int "23"
- !!int "28"
- !!int "23"
- !!int "2"
- !!int "21"
- !!int "18"
"speed": "0 ft., fly 120 ft. (hover)"
"saves":
  "Charisma": "+11"
  "Wisdom": "+12"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning, poison, thunder"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, stunned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "23"
"traits":
- "desc": "The tempest can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Air Form"
- "desc": "The tempest doesn't provoke opportunity attacks when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- "desc": "If the tempest fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The tempest is always at the center of a storm dice: 1d6 + 4|avg (1d6\
    \ + 4) miles in diameter. Heavy precipitation in the form of either rain or snow\
    \ falls there, causing the area to be lightly obscured. Heavy rain also extinguishes\
    \ open flames and imposes disadvantage on Wisdom ([[\5. Mechanics\Rules\Skills.md#Perception|Perception]])\
    \ checks that rely on hearing. In addition, strong winds swirl in the area covered\
    \ by the storm. The winds impose disadvantage on ranged attack rolls. They also\
    \ extinguish open flames and disperse fog."
  "name": "Living Storm"
- "desc": "The tempest deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The tempest makes two Thunderous Slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 20 ft., one target.\
    \ Hit: 23 (dice: 4d6 + 9|avg (4d6 + 9)) thunder damage."
  "name": "Thunderous Slam"
- "desc": "Each creature within 120 feet of the tempest must make a DC 21 Dexterity\
    \ saving throw, taking 27 (dice: 6d8|avg (6d8)) lightning damage on a failed\
    \ save, or half as much damage on a successful one. If a target's saving throw\
    \ fails by 5 or more, the creature is also [[\5. Mechanics\Rules\Conditions.md#stunned|stunned]]\
    \ until the end of its next turn."
  "name": "Lightning Storm (Recharge 6)"
"legendary_actions":
- "desc": "The tempest moves up to its speed."
  "name": "Move"
- "desc": "The tempest can cause a bolt of lightning to strike a point on the ground\
    \ anywhere under its storm. Each creature within 5 feet of that point must make\
    \ a DC 21 Dexterity saving throw, taking 16 (dice: 3d10|avg (3d10)) lightning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Lightning Strike (Costs 2 Actions)"
- "desc": "The tempest releases a blast of thunder and wind in a line that is 300\
    \ feet long and 20 feet wide. Objects in that area take 22 (dice: 4d10|avg (4d10))\
    \ thunder damage. Each creature there must succeed on a DC 21 Dexterity saving\
    \ throw or take 22 (dice: 4d10|avg (4d10)) thunder damage and be flung up\
    \ to 60 feet in a direction away from the line. If a thrown target collides with\
    \ an immovable object (such as a wall or floor) or another creature, the target\
    \ takes 3 (dice: 1d6|avg (1d6)) bludgeoning damage for every 10 feet it was\
    \ thrown before impact. If the target collides with another creature, that other\
    \ creature must succeed on a DC 19 Dexterity saving throw or take the same impact\
    \ damage and be knocked [[\5. Mechanics\Rules\Conditions.md#prone|prone]]."
  "name": "Screaming Gale (Costs 3 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/elemental/token/elder-tempest.png"
```
^statblock

## Environment

arctic, coastal, grassland, hill, mountain