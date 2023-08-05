---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Ankheg"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "17"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "13"
- !!int "6"
"speed": "walk 30 ft., burrow 10 ft."
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "2"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) slashing damage plus dice: 1d6|avg (1d6)\
    \ acid damage. If the target is a Large or smaller creature, it is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]\
    \ (escape DC 13). Until this grapple ends, the ankheg can bite only the [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]\
    \ creature and has advantage on attack rolls to do so."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided\
    \ that it has no creature [[6. Mechanics/Rules/conditions.md#grappled\|grappled]].\
    \ Each creature in that line must make a DC 13 Dexterity saving throw, taking\
    \ 10 (dice: 3d6|avg (3d6)) acid damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Acid Spray (Recharge 6)"
"source":
- "MM"
- "PotA"
- "WDH"
- "GoS"
- "DIP"
- "BGDIA"
- "JttRC"
- "KftGV"
"image": "/compendium/bestiary/monstrosity/token/ankheg.png"
aliases: ["Ankheg"]
---
# Ankheg
*Source: Monster Manual p. 21, Princes of the Apocalypse, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Journeys through the Radiant Citadel, Keys from the Golden Vault*  

An ankheg resembles an enormous many-legged insect, its long antennae twitching in response to any movement around it. Its legs end in sharp hooks adapted for burrowing and grasping its prey, and its powerful mandibles can snap a small tree in half.

## Lurkers in the Earth

The ankheg uses its powerful mandibles to dig winding tunnels deep beneath the ground. When it hunts, an ankheg burrows upward, waiting below the surface until its antennae detect movement from above. Then it bursts from the earth and seizes prey in its mandibles, crushing and grinding while it secretes acidic digestive enzymes. These enzymes help dissolve a victim for easy swallowing, but the ankheg can also squirt acid to take down foes.

## Bane of Field and Forest

Although ankhegs receive a certain portion of their nutrients from the soil through which they burrow, they must supplement their diet with fresh meat. Pastures teeming with grazing livestock and forests rife with game are an ankheg's prime hunting grounds. Ankhegs are thus the bane of farmers and rangers everywhere.

## Earthen Tunnels

As it burrows through earth, the ankheg leaves a narrow, partially collapsed tunnel in its wake. In these tunnels, one might find the remnants of molted ankheg chitin, hatched ankheg eggs, or the grisly remains of ankheg victims, including coins or other treasures scattered during the creature's attack.

## Stat Block

```ad-statblock
title: Ankheg
![[/6. Mechanics/Bestiary/Monstrosity/Token/ankheg.png#token]]
*Large monstrosity, Unaligned*

- **Armor Class** 14 (natural armor; 11 while prone)
- **Hit Points** `dice: 6d10 + 6|text(39)` (6d10 + 6) 
- **Speed** walk 30 ft., burrow 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|11 (+0)|13 (+1)| 1 (-5)|13 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., tremorsense 60 ft., passive Perception 11
- **Languages** —
- **Challenge** 2

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3` (`2d6 + 3`) slashing damage plus `dice: 1d6` (`1d6`) acid damage. If the target is a Large or smaller creature, it is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 13). Until this grapple ends, the ankheg can bite only the [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] creature and has advantage on attack rolls to do so.

***Acid Spray (Recharge 6).*** The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (`dice: 3d6` (`3d6`)) acid damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

grassland, forest