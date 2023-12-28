---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cos
- monster/cr/7
- monster/size/huge
- monster/type/plant
statblock: inline
aliases: ["Tree Blight"]
---
# [Tree Blight](compendium\bestiary\plant/tree-blight-cos.md)
*Source: Curse of Strahd p. 230*  

```statblock
"name": "Tree Blight (CoS)"
"size": "Huge"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "92"
"hit_dice": "8d12 + 40"
"stats":
- !!int "23"
- !!int "10"
- !!int "20"
- !!int "6"
- !!int "10"
- !!int "3"
"speed": "30 ft."
"condition_immunities": "blinded, deafened"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "understands Common and Druidic but doesn't speak"
"cr": "7"
"traits":
- "desc": "While the blight remains motionless, it is indistinguishable from a dead\
    \ tree."
  "name": "False Appearance"
- "desc": "The blight deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The blight makes one Branch attack and one Grasping Root attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 15 ft., one target.\
    \ Hit: dice: 3d6 + 6|avg (3d6 + 6) bludgeoning damage."
  "name": "Branch"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 15 ft., one creature\
    \ not grappled by the blight. Hit: The target is grappled (escape DC 15). Until\
    \ the grapple ends, the target takes dice: 1d6 + 6|avg (1d6 + 6) bludgeoning\
    \ damage at the start of each of its turns. The root has AC 15 and can be severed\
    \ by dealing 6 slashing damage or more to it at once. Cutting the root doesn't\
    \ hurt the blight, but ends the grapple."
  "name": "Grasping Root"
"bonus_actions":
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one creature\
    \ grappled by the blight. Hit: dice: 3d8 + 6|avg (3d8 + 6) piercing damage."
  "name": "Bite"
"source":
- "CoS"
- "WBtW"
"image": "compendium/bestiary/plant/token/tree-blight.png"
```
^statblock