---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1-2
- monster/environment/forest
- monster/size/medium
- monster/type/plant
statblock: inline
aliases: ["Vine Blight"]
---
# [[5. Mechanics\Bestiary\Plant\Vine Blight.md|Vine Blight]]
*Source: Monster Manual p. 32, Curse of Strahd*  

```statblock
"name": "Vine Blight"
"size": "Medium"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "26"
"hit_dice": "4d8 + 4"
"stats":
- !!int "15"
- !!int "8"
- !!int "14"
- !!int "5"
- !!int "10"
- !!int "3"
"speed": "10 ft."
"skillsaves":
  "Stealth": !!int "1"
"condition_immunities": "blinded, deafened"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "Common"
"cr": "1/2"
"traits":
- "desc": "While the blight remains motionless, it is indistinguishable from a tangle\
    \ of vines."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) bludgeoning damage, and a Large or smaller\
    \ target is grappled (escape DC 12). Until this grapple ends, the target is restrained,\
    \ and the blight can't constrict another target."
  "name": "Constrict"
- "desc": "Grasping roots and vines sprout in a 15-foot radius centered on the blight,\
    \ withering away after 1 minute. For the duration, that area is difficult terrain\
    \ for nonplant creatures. In addition, each creature of the blight's choice in\
    \ that area when the plants appear must succeed on a DC 12 Strength saving throw\
    \ or become restrained. A creature can use its action to make a DC 12 Strength\
    \ check, freeing itself or another entangled creature within reach on a success."
  "name": "Entangling Plants (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "GoS"
- "EGW"
- "PSI"
- "DIP"
- "BMT"
"image": "compendium/bestiary/plant/token/vine-blight.png"
```
^statblock

## Environment

forest