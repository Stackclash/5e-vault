---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/swamp
- monster/environment/urban
- monster/size/large
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
name: Corpse Flower
ac: 12
hp: 127
hit_dice: 15d10 + 45
cr: '8'
stats: [
  14,
  14,
  16,
  7,
  15,
  3
]
source: [
  MPMM,
  MTF
]
aliases: ["Corpse Flower"]
---
# Corpse Flower
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 82, Mordenkainen's Tome of Foes p. 127*  

A corpse flower can sprout atop the grave of an evil necromancer or the remains of powerful Undead creatures. Unless it is uprooted and burned while it is still a seedling, the corpse flower grows to enormous size over several weeks, then tears itself free of the earth and begins scavenging Humanoid corpses from battlefields and graveyards. Using its fibrous tentacles, it stuffs the remains into its body to sustain and repair itself. The plant has a malevolent bent and despises the living.

With or without corpses nested in its body, a corpse flower exudes a stench of decay that can overwhelm the senses of nearby creatures, causing them to become nauseated. The stench, which serves as a defense mechanism, fades `dice: 2d4\|avg` (`2d4`) days after the corpse flower dies.

```ad-statblock
title: Corpse Flower
![[/6. Mechanics/Bestiary/Plant/Token/corpse-flower.png#token]]
*Large plant, Chaotic Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 15d10 + 45|text(127)` (15d10 + 45) 
- **Speed** walk 20 ft., climb 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|14 (+2)|16 (+3)| 7 (-2)|15 (+2)| 3 (-4)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 120 ft. (blind beyond this radius), passive Perception 12
- **Condition Immunities** blinded, deafened, poisoned
- **Languages** —
- **Challenge** 8

## Traits

***Corpses.*** When first encountered, a corpse flower contains the corpses of `dice: 1d6 + 3\|avg` (`1d6 + 3`) Humanoids. A corpse flower can hold the remains of up to nine Humanoids. These remains have total cover against attacks and other effects outside the corpse flower. If the corpse flower dies, the corpses within it can be pulled free.

***Spider Climb.*** The corpse flower can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Stench of Death.*** Each creature that starts its turn within 10 feet of the corpse flower or one of its zombies must make a DC 14 Constitution saving throw, unless the creature is a Construct or an Undead. On a failed save, the creature is [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] until the start of its next turn. On a successful save, the creature is immune to the Stench of Death of all corpse flowers for 24 hours.

## Actions

***Multiattack.*** The corpse flower makes three Tentacle attacks.

***Tentacle.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 10 ft., one target. Hit: `dice: 2d6 + 2\|avg` (`2d6 + 2`) bludgeoning damage plus `dice: 3d6\|avg` (`3d6`) poison damage.

***Harvest the Dead.*** The corpse flower swallows one unsecured Humanoid corpse within 10 feet of it, along with any equipment the corpse is wearing or carrying.

## Bonus Actions

***Digest.*** The corpse flower digests one corpse in its body and instantly regains 11 (`dice: 2d10\|avg` (`2d10`)) hit points. Nothing of the digested corpse remains. Any equipment on the corpse is expelled from the corpse flower in its space.

***Reanimate.*** The corpse flower animates one corpse in its body, turning it into a [[/6. Mechanics/Bestiary/Undead/zombie.md\|zombie]]. The zombie appears in an unoccupied space within 5 feet of the corpse flower and acts immediately after it in the initiative order. The zombie acts as an ally of the corpse flower but isn't under its control, and the flower's stench clings to it (see Stench of Death).
```
^statblock

## Environment

forest, swamp, urban