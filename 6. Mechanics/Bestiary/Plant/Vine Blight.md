---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/medium
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
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
"speed": "walk 10 ft."
"skillsaves":
  "Stealth": !!int "1"
"condition_immunities": "blinded, deafened"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "Common"
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the blight remains motionless, it is indistinguishable from a tangle\
    \ of vines."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) bludgeoning damage, and a Large or smaller\
    \ target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 12).\
    \ Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]],\
    \ and the blight can't constrict another target."
  "name": "Constrict"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Grasping roots and vines sprout in a 15-foot radius centered on the blight,\
    \ withering away after 1 minute. For the duration, that area is difficult terrain\
    \ for nonplant creatures. In addition, each creature of the blight's choice in\
    \ that area when the plants appear must succeed on a DC 12 Strength saving throw\
    \ or become [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]. A creature\
    \ can use its action to make a DC 12 Strength check, freeing itself or another\
    \ entangled creature within reach on a success."
  "name": "Entangling Plants (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "GoS"
- "EGW"
"image": "/compendium/bestiary/plant/token/vine-blight.png"
aliases: ["Vine Blight"]
---
# Vine Blight
*Source: Monster Manual p. 32, Curse of Strahd, Ghosts of Saltmarsh, Explorer's Guide to Wildemount*  

Appearing as masses of slithering creepers, vine blights hide in undergrowth and wait for prey to draw near. By animating the plants around them, vine blights entangle and hinder their foes before attacking. Vine blights are the only blights capable of speech. Through its connection to the evil spirit of the Gulthias tree it serves, a vine blight speaks in a fractured version of its dead master's voice, taunting victims or bargaining with powerful foes.

## Blights

Awakened plants gifted with the powers of intelligence and mobility, blights plague lands contaminated by darkness. Drinking that darkness from the soil, a blight carries out the will of ancient evil and attempts to spread that evil wherever it can.

### Roots of the Gulthias Tree

Legends tell of a vampire named Gulthias who worked terrible magic and raised up an abominable tower called Nightfang Spire. Gulthias was undone when a hero plunged a wooden stake through his heart, but as the vampire was destroyed, his blood infused the stake with a dreadful power. In time, tendrils of new growth sprouted from the wood, growing into a sapling infused with the vampire's evil essence. It is said that a mad druid discovered the sapling, transplanting it to an underground grotto where it could grow. From this Gulthias tree came the seeds from which the first blights were sown.

### Dark Conquest

Wherever a tree or plant is contaminated by a fragment of an evil mind or power, a Gulthias tree can rise to infest and corrupt the surrounding forest. Its evil spreads through root and soil to other plants, which perish or transform into blights. As those blights spread, they poison and uproot healthy plants, replacing them with brambles, toxic weeds, and others of their kind. In time, an infestation of blights can turn any land or forest into a place of corruption.

In forests infested with blights, trees and plants grow with supernatural speed. Vines and undergrowth rapidly spread through buildings and overrun trails and roads. After blights have killed or driven off their inhabitants, whole villages can disappear in the space of days.

### Controlled by Evil

Blights are independent creatures, but most act under a Gulthias tree's control, often displaying the habits and traits of the life force or spirit that spawned them. By attacking their progenitor's old foes or seeking out treasures valuable to it, they carry on the legacy of long-lost evil.

> [!quote]-  
> 
> Behold the legacy of Gulthias the vampire: plants with a taste for blood.


## Stat Block

```ad-statblock
title: Vine Blight
![[/6. Mechanics/Bestiary/Plant/Token/vine-blight.png#token]]
*Medium plant, Neutral Evil*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 4d8 + 4|text(26)` (4d8 + 4) 
- **Speed** walk 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)| 8 (-1)|14 (+2)| 5 (-3)|10 (+0)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +1
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 10
- **Condition Immunities** blinded, deafened
- **Languages** Common
- **Challenge** 1/2

## Traits

***False Appearance.*** While the blight remains motionless, it is indistinguishable from a tangle of vines.

## Actions

***Constrict.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 10 ft., one target. Hit: `dice: 2d6 + 2` (`2d6 + 2`) bludgeoning damage, and a Large or smaller target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 12). Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], and the blight can't constrict another target.

***Entangling Plants (Recharge 5-6).*** Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]. A creature can use its action to make a DC 12 Strength check, freeing itself or another entangled creature within reach on a success.
```
^statblock

## Environment

forest