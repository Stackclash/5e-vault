---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/15
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/fiend/demon
statblock: inline
aliases: ["Nabassu"]
---
# [[5. Mechanics/Bestiary/Fiend/Nabassu (MPMM).md|Nabassu]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 188, Mordenkainen's Tome of Foes p. 135*  

The insatiable nabassus prowl the multiverse in search of souls to devour. If they think they can kill a creature and consume its soul, they attack—even if that other creature is a demon, including another nabassu.

Most other demons shun nabassus and force them to live on the fringes of the Abyss. There, nabassus pick off weaker demons or, if the situation warrants, gather in packs to take down larger prey. Some especially powerful nabassus even search for demon lords' amulets.

Whenever magic pulls demons from the Abyss to the Material Plane, nabassus try to get summoned so that they can embark on a feast of souls there. A summoned nabassu seeks to break free so that it can devour the soul of its summoner and then feed on the souls of whatever other creatures it can catch. One way a summoner can avoid this fate is by providing a steady supply of souls to the nabassu, which might persuade the demon to be cooperative—as long as the supply lasts.

```statblock
"name": "Nabassu (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "18"
"hp": !!int "190"
"hit_dice": "20d8 + 100"
"stats":
- !!int "22"
- !!int "14"
- !!int "21"
- !!int "14"
- !!int "15"
- !!int "17"
"speed": "40 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "7"
  "Strength": !!int "11"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Abyssal, telepathy 120 ft."
"cr": "15"
"traits":
- "desc": "The nabassu darkens the area around its body in a 10-foot radius. Nonmagical\
    \ light can't illuminate this area of dim light."
  "name": "Demonic Shadows"
- "desc": "A nabassu can eat the soul of a creature it has killed within the last\
    \ hour, provided that creature is neither a Construct nor an Undead. The devouring\
    \ requires the nabassu to be within 5 feet of the corpse for at least 10 minutes,\
    \ after which it gains a number of Hit Dice (d8s) equal to half the creature's\
    \ number of Hit Dice. Roll those dice, and increase the nabassu's hit points by\
    \ the numbers rolled. For every 4 Hit Dice the nabassu gains in this way, its\
    \ attacks deal an extra dice: 1d6|avg (1d6) damage on a hit. The nabassu retains\
    \ these benefits for 6 days. A creature devoured by a nabassu can be restored\
    \ to life only by a [[5. Mechanics/Spells/Wish.md|wish]] spell."
  "name": "Devour Soul"
- "desc": "The nabassu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The nabassu makes one Bite attack and one Claw attack, and it uses Soul-Stealing\
    \ Gaze."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+11 (+11 to hit), reach 5 ft., one target.\
    \ Hit: dice: 5d12 + 6|avg (5d12 + 6) necrotic damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+11 (+11 to hit), reach 5 ft., one target.\
    \ Hit: dice: 4d10 + 6|avg (4d10 + 6) force damage."
  "name": "Claw"
- "desc": "The nabassu targets one creature it can see within 30 feet of it. If the\
    \ target isn't a Construct or an Undead, it must succeed on a DC 16 Charisma saving\
    \ throw or take dice: 2d12|avg (2d12) necrotic damage. The target's hit point\
    \ maximum is reduced by an amount equal to the necrotic damage dealt, and the\
    \ nabassu regains hit points equal to half that amount. This reduction lasts until\
    \ the target finishes a short or long rest. The target dies if its hit point maximum\
    \ is reduced to 0, and if the target is a Humanoid, it immediately rises as a\
    \ [[5. Mechanics/Bestiary/Undead/Ghoul.md|ghoul]] under the nabassu's control."
  "name": "Soul-Stealing Gaze"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/nabassu.png"
```
^statblock

## Environment

swamp, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```