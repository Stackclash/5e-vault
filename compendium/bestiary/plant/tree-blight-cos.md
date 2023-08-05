---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/huge
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
"name": "Tree Blight"
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
"speed": "walk 30 ft."
"condition_immunities": "blinded, deafened"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "understands Common and Druidic but doesn't speak"
"cr": "7"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the blight remains motionless, it is indistinguishable from a dead\
    \ tree."
  "name": "False Appearance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The blight deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The blight makes one Branch attack and one Grasping Root attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 15 ft., one target.\
    \ Hit: dice: 3d6 + 6|avg (3d6 + 6) bludgeoning damage."
  "name": "Branch"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 15 ft., one creature\
    \ not [grappled](compendium/rules/conditions.md#grappled) by the blight. Hit:\
    \ The target is [grappled](compendium/rules/conditions.md#grappled) (escape DC\
    \ 15). Until the grapple ends, the target takes dice: 1d6 + 6|avg (1d6 + 6)\
    \ bludgeoning damage at the start of each of its turns. The root has AC 15 and\
    \ can be severed by dealing 6 slashing damage or more to it at once. Cutting the\
    \ root doesn't hurt the blight, but ends the grapple."
  "name": "Grasping Root"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one creature\
    \ [grappled](compendium/rules/conditions.md#grappled) by the blight. Hit: dice:\
    \ 3d8 + 6|avg (3d8 + 6) piercing damage."
  "name": "Bite"
"source":
- "CoS"
- "WBtW"
"image": "/compendium/bestiary/plant/token/tree-blight.png"
aliases: ["Tree Blight"]
---
# Tree Blight
*Source: Curse of Strahd p. 230, The Wild Beyond the Witchlight*  

Blights (as described in the Monster Manual) are evil, ambulatory plant creatures, and a tree blight is a particularly enormous variety. It looks like a dead tree or treant, 30 feet tall, with spongy wooden flesh, thorny branches, and rubbery roots that trail behind it. It has blood for sap and is so saturated with blood that it doesn't catch fire easily.

## Vicious Carnivore

A tree blight feeds on warm-blooded prey and takes perverse delight in causing carnage. It strikes with its heavy branches and crushes prey to death with its roots. It can open its gaping, tooth-filled mouth and bite a creature caught in its roots. The roots of a tree blight can be severed, though cutting them causes the blight no harm.

## Blight Animosity

A tree blight will often fight alongside other kinds of blights, but it hates other tree blights and will attack them given the chance. Tree blights also hate treants, and the feeling is mutual.

## Stat Block

```ad-statblock
title: Tree Blight
![](/compendium/bestiary/plant/token/tree-blight.png#token)
*Huge plant, Neutral Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 8d12 + 40|text(92)` (8d12 + 40) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|23 (+6)|10 (+0)|20 (+5)| 6 (-2)|10 (+0)| 3 (-4)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 10
- **Condition Immunities** blinded, deafened
- **Languages** understands Common and Druidic but doesn't speak
- **Challenge** 7

## Traits

***False Appearance.*** While the blight remains motionless, it is indistinguishable from a dead tree.

***Siege Monster.*** The blight deals double damage to objects and structures.

## Actions

***Multiattack.*** The blight makes one Branch attack and one Grasping Root attack.

***Branch.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 15 ft., one target. Hit: `dice: 3d6 + 6|avg` (`3d6 + 6`) bludgeoning damage.

***Grasping Root.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 15 ft., one creature not [grappled](compendium/rules/conditions.md#grappled) by the blight. Hit: The target is [grappled](compendium/rules/conditions.md#grappled) (escape DC 15). Until the grapple ends, the target takes `dice: 1d6 + 6|avg` (`1d6 + 6`) bludgeoning damage at the start of each of its turns. The root has AC 15 and can be severed by dealing 6 slashing damage or more to it at once. Cutting the root doesn't hurt the blight, but ends the grapple.

## Bonus Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 5 ft., one creature [grappled](compendium/rules/conditions.md#grappled) by the blight. Hit: `dice: 3d8 + 6|avg` (`3d8 + 6`) piercing damage.
```
^statblock