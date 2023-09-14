---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/mountain
- monster/environment/underdark
- monster/size/huge
- monster/type/giant
aliases: ["Fire Giant Dreadnought"]
---
# Fire Giant Dreadnought
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 124*  

> [!quote]- A quote from Mordenkainen  
> 
> When I first saw a fire giant dreadnought, I doubted the giant could even move. I quickly learned my error.

Most fire giants value not just strength but also skill at forgecraft. The foundry is the heart of any fire giant community. It is a temple, school, proving ground, and political hub rolled into one.

Those whose primary virtue is brawn are usually consigned to the lowliest of tasks, such as working forge bellows or moving coal. However, the strongest among these can excel at and gain rank through a specialized role: the dreadnought.

Dreadnoughts are massively powerful fire giants who wield two huge shields like plow blades. These shields bear spikes on their exterior and have hollow interiors into which the dreadnought pours hot coals at the first sign of danger. Armed with these two shields, the dreadnought can present a fiery wall to any attacker. When the dreadnought has finished, often all that is left of a foe is a smoking smear on the floor.

When not called on to fight, dreadnoughts maintain their strength by using their shields to shove huge quantities of coal, stone, or ore about the foundry. Occasionally, dreadnoughts are called on by their superiors to accompany a war or diplomatic delegation and use their fierce and intimidating demeanor to strengthen the delegation's position.

```statblock
"name": "Fire Giant Dreadnought"
"size": "Huge"
"type": "giant"
"alignment": "Typically  Lawful Evil"
"ac": !!int "21"
"hp": !!int "187"
"hit_dice": "15d12 + 90"
"stats":
- !!int "27"
- !!int "9"
- !!int "23"
- !!int "8"
- !!int "10"
- !!int "11"
"speed": "30 ft."
"saves":
  "Charisma": "+5"
  "Dexterity": "+4"
  "Constitution": "+11"
"skillsaves":
  "Athletics": "+13"
  "Perception": "+5"
"damage_immunities": "fire"
"senses": "passive Perception 15"
"languages": "Giant"
"cr": "14"
"traits":
- "desc": "The giant carries two shields, which together give the giant +3 to its\
    \ AC (accounted for above)."
  "name": "Dual Shields"
"actions":
- "desc": "The giant makes two Fireshield or Rock attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 5 ft., one target.\
    \ Hit: 22 (dice: 4d6 + 8|avg (4d6 + 8)) bludgeoning damage plus 7 (dice:\
    \ 2d6|avg (2d6)) fire damage plus 7 (dice: 2d6|avg (2d6)) piercing damage."
  "name": "Fireshield"
- "desc": "Ranged Weapon Attack: dice: d20+13 (+13 to hit), range 60/240 ft.,\
    \ one target. Hit: 30 (dice: 4d10 + 8|avg (4d10 + 8)) bludgeoning damage."
  "name": "Rock"
- "desc": "The giant moves up to 30 feet in a straight line and can move through the\
    \ space of any creature smaller than Huge. The first time it enters a creature's\
    \ space during this move, that creature must succeed on a DC 21 Strength saving\
    \ throw or take 36 (dice: 8d6 + 8|avg (8d6 + 8)) bludgeoning damage plus 14\
    \ (dice: 4d6|avg (4d6)) fire damage and be pushed up to 30 feet and knocked\
    \ [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Shield Charge (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/giant/token/fire-giant-dreadnought.png"
```
^statblock

## Environment

mountain, underdark