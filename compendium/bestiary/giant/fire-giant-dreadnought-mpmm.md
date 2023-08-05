---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/mountain
- monster/environment/underdark
- monster/size/huge
- monster/type/giant
statblock: true
statblock-link: "#^statblock"
"name": "Fire Giant Dreadnought"
"size": "Huge"
"type": "giant"
"alignment": "Lawful Evil"
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
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
  "Constitution": !!int "11"
"skillsaves":
  "Athletics": !!int "13"
  "Perception": !!int "5"
"damage_immunities": "fire"
"senses": "passive Perception 15"
"languages": "Giant"
"cr": "14"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The giant carries two shields, which together give the giant +3 to its\
    \ AC (accounted for above)."
  "name": "Dual Shields"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The giant makes two Fireshield or Rock attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 5 ft., one target.\
    \ Hit: dice: 4d6 + 8|avg (4d6 + 8) bludgeoning damage plus dice: 2d6|avg\
    \ (2d6) fire damage plus dice: 2d6|avg (2d6) piercing damage."
  "name": "Fireshield"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+13 (+13 to hit), range 60/240 ft.,\
    \ one target. Hit: dice: 4d10 + 8|avg (4d10 + 8) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The giant moves up to 30 feet in a straight line and can move through the\
    \ space of any creature smaller than Huge. The first time it enters a creature's\
    \ space during this move, that creature must succeed on a DC 21 Strength saving\
    \ throw or take dice: 8d6 + 8|avg (8d6 + 8) bludgeoning damage plus dice:\
    \ 4d6|avg (4d6) fire damage and be pushed up to 30 feet and knocked [prone](compendium/rules/conditions.md#prone)."
  "name": "Shield Charge (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/giant/token/fire-giant-dreadnought.png"
aliases: ["Fire Giant Dreadnought"]
---
# Fire Giant Dreadnought
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 124, Volo's Guide to Monsters p. 147*  

> [!quote]- A quote from Mordenkainen  
> 
> When I first saw a fire giant dreadnought, I doubted the giant could even move. I quickly learned my error.

Most fire giants value not just strength but also skill at forgecraft. The foundry is the heart of any fire giant community. It is a temple, school, proving ground, and political hub rolled into one.

Those whose primary virtue is brawn are usually consigned to the lowliest of tasks, such as working forge bellows or moving coal. However, the strongest among these can excel at and gain rank through a specialized role: the dreadnought.

Dreadnoughts are massively powerful fire giants who wield two huge shields like plow blades. These shields bear spikes on their exterior and have hollow interiors into which the dreadnought pours hot coals at the first sign of danger. Armed with these two shields, the dreadnought can present a fiery wall to any attacker. When the dreadnought has finished, often all that is left of a foe is a smoking smear on the floor.

When not called on to fight, dreadnoughts maintain their strength by using their shields to shove huge quantities of coal, stone, or ore about the foundry. Occasionally, dreadnoughts are called on by their superiors to accompany a war or diplomatic delegation and use their fierce and intimidating demeanor to strengthen the delegation's position.

```ad-statblock
title: Fire Giant Dreadnought
![](/compendium/bestiary/giant/token/fire-giant-dreadnought.png#token)
*Huge giant, Lawful Evil*

- **Armor Class** 21 ([plate](/compendium/items/plate-armor.md), [Dual Shields](/compendium/items/shield.md))
- **Hit Points** `dice: 15d12 + 90|text(187)` (15d12 + 90) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|27 (+8)| 9 (-1)|23 (+6)| 8 (-1)|10 (+0)|11 (+0)|

- **Proficiency Bonus** +5
- **Saving Throws** Dexterity +4, Constitution +11, Charisma +5
- **Skills** Athletics +13, Perception +5
- **Senses** passive Perception 15
- **Damage Immunities** fire
- **Languages** Giant
- **Challenge** 14

## Traits

***Dual Shields.*** The giant carries two shields, which together give the giant +3 to its AC (accounted for above).

## Actions

***Multiattack.*** The giant makes two Fireshield or Rock attacks.

***Fireshield.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 5 ft., one target. Hit: `dice: 4d6 + 8|avg` (`4d6 + 8`) bludgeoning damage plus `dice: 2d6|avg` (`2d6`) fire damage plus `dice: 2d6|avg` (`2d6`) piercing damage.

***Rock.*** *Ranged Weapon Attack:* `dice: d20+13` (+13 to hit), range 60/240 ft., one target. Hit: `dice: 4d10 + 8|avg` (`4d10 + 8`) bludgeoning damage.

***Shield Charge (Recharge 5-6).*** The giant moves up to 30 feet in a straight line and can move through the space of any creature smaller than Huge. The first time it enters a creature's space during this move, that creature must succeed on a DC 21 Strength saving throw or take `dice: 8d6 + 8|avg` (`8d6 + 8`) bludgeoning damage plus `dice: 4d6|avg` (`4d6`) fire damage and be pushed up to 30 feet and knocked [prone](compendium/rules/conditions.md#prone).
```
^statblock

## Environment

mountain, underdark