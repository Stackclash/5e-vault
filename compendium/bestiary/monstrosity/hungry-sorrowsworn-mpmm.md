---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Hungry Sorrowsworn"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "225"
"hit_dice": "30d8 + 90"
"stats":
- !!int "19"
- !!int "10"
- !!int "17"
- !!int "6"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "11"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If a creature within 60 feet of the sorrowsworn regains hit points, the\
    \ sorrowsworn gains two benefits until the end of its next turn: it has advantage\
    \ on attack rolls, and its Bite deals an extra 22 (dice: 4d10|avg (4d10))\
    \ necrotic damage on a hit."
  "name": "Life Hunger"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sorrowsworn makes one Bite attack and one Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage plus dice: 3d8|avg (3d8)\
    \ necrotic damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 10 ft., one target.\
    \ Hit: dice: 4d6 + 4|avg (4d6 + 4) slashing damage. If the target is Medium\
    \ or smaller, it is [grappled](compendium/rules/conditions.md#grappled) (escape\
    \ DC 16), and it is [restrained](compendium/rules/conditions.md#restrained) until\
    \ the grapple ends. While grappling a creature, the sorrowsworn can't make a Claw\
    \ attack."
  "name": "Claw"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/monstrosity/token/hungry-sorrowsworn.png"
aliases: ["Hungry Sorrowsworn"]
---
# Hungry Sorrowsworn
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 223, Mordenkainen's Tome of Foes p. 232*  

Horrible creatures with grasping claws and distended jaws, hungry sorrowsworn—also known as the Hungry—do whatever is necessary to sate their appetites. These greedy devourers stuff their maws with flesh and drink in their victims' screams. When they finish, they lurch away while their bright eyes resume the search for something else to consume.

## Sorrowsworn

The Shadowfell's pervasive melancholy sometimes gives rise to strange incarnations of the plane's bleak nature. Sorrowsworn embody the forms of suffering inherent to the shadowy landscape and visit horror on those who stumble into their midst. Each sorrowsworn personifies a different aspect of despair or distress.

## Stat Block

```ad-statblock
title: Hungry Sorrowsworn
![](/compendium/bestiary/monstrosity/token/hungry-sorrowsworn.png#token)
*Medium monstrosity, Neutral Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 30d8 + 90|text(225)` (30d8 + 90) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|10 (+0)|17 (+3)| 6 (-2)|11 (+0)| 6 (-2)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** bludgeoning, piercing, slashing while in dim light or darkness
- **Languages** Common
- **Challenge** 11

## Traits

***Life Hunger.*** If a creature within 60 feet of the sorrowsworn regains hit points, the sorrowsworn gains two benefits until the end of its next turn: it has advantage on attack rolls, and its Bite deals an extra 22 (`dice: 4d10|avg` (`4d10`)) necrotic damage on a hit.

## Actions

***Multiattack.*** The sorrowsworn makes one Bite attack and one Claw attack.

***Bite.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4|avg` (`1d8 + 4`) piercing damage plus `dice: 3d8|avg` (`3d8`) necrotic damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 10 ft., one target. Hit: `dice: 4d6 + 4|avg` (`4d6 + 4`) slashing damage. If the target is Medium or smaller, it is [grappled](compendium/rules/conditions.md#grappled) (escape DC 16), and it is [restrained](compendium/rules/conditions.md#restrained) until the grapple ends. While grappling a creature, the sorrowsworn can't make a Claw attack.
```
^statblock

## Environment

forest, underdark, urban