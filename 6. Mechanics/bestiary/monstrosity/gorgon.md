---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Gorgon
ac: 19
hp: 114
hit_dice: 12d10 + 48
cr: '5'
stats: [
  20,
  11,
  18,
  2,
  12,
  7
]
source: [
  MM,
  RoT,
  TftYP,
  WDMM,
  GoS,
  BGDIA,
  WBtW,
  LoX
]
aliases: ["Gorgon"]
---
*Source: Monster Manual p. 171, The Rise of Tiamat, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, The Wild Beyond the Witchlight, Light of Xaryxis*  

Few creatures that encounter a gorgon live to tell about it. Its body is covered in iron plates, and its nostrils fume with green vapor.

## Horrific Structure

A gorgon's iron plates range from steely black to gleaming silver, but this natural armor in no way hinders its movement or mobility. The oils of its body lubricate the armor. A sick or inactive gorgon gathers rust like fungus or mange. When a rusty gorgon moves, its plates squeal as they rub together.

## Monstrous Predator

When a gorgon spots potential prey, it charges with a hideous clamor of metal on metal. When the gorgon hits, it pulverizes the foe and sends its sprawling, then tramples it to death with its cruel hooves. Faced with multiple foes, the gorgon exhales its deadly vapor to overcome the creatures it touches by turning them to stone. When it grows hungry, it smashes its [petrified](/6. Mechanics/rules/conditions.md#petrified) prey to rubble and uses its strong teeth to grind the stone into a powder that provides nourishment. The crisscrossing network of trampled trails and splintered trees that surrounds a gorgon lair is strewn with the uneaten fragments of its shattered foes.

## Stat Block

```ad-statblock
title: Gorgon
![[token/gorgon.png#token]]
*Large monstrosity, Unaligned*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 12d10 + 48|text(114)` (12d10 + 48) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|11 (+0)|18 (+4)| 2 (-4)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Perception +4
- **Senses** darkvision 60 ft., passive Perception 14
- **Condition Immunities** petrified
- **Languages** —
- **Challenge** 5

## Traits

***Trampling Charge.*** If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked [prone](/6. Mechanics/rules/conditions.md#prone). If the target is [prone](/6. Mechanics/rules/conditions.md#prone), the gorgon can make one attack with its hooves against it as a bonus action.

## Actions

***Gore.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 2d12 + 5|avg` (`2d12 + 5`) piercing damage.

***Hooves.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 2d10 + 5|avg` (`2d10 + 5`) bludgeoning damage.

***Petrifying Breath (Recharge 5-6).*** The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is [restrained](/6. Mechanics/rules/conditions.md#restrained). The [restrained](/6. Mechanics/rules/conditions.md#restrained) target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is [petrified](/6. Mechanics/rules/conditions.md#petrified) until freed by the  [greater restoration](/6. Mechanics/spells/greater-restoration.md) spell or other magic.
```
^statblock

## Environment

grassland, forest, hill