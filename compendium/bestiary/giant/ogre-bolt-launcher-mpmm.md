---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/giant
statblock: true
statblock-link: "#^statblock"
"name": "Ogre Bolt Launcher"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "19"
- !!int "12"
- !!int "16"
- !!int "5"
- !!int "7"
- !!int "7"
"speed": "walk 40 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Giant"
"cr": "2"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 4|avg (2d4 + 4) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+3 (+3 to hit), range 120/480 ft., one\
    \ target. Hit: dice: 3d10 + 1|avg (3d10 + 1) piercing damage."
  "name": "Bolt Launcher"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/giant/token/ogre-bolt-launcher.png"
aliases: ["Ogre Bolt Launcher"]
---
# Ogre Bolt Launcher
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 200, Mordenkainen's Tome of Foes p. 220*  

A bolt launcher carries a gigantic crossbow—a weapon so large it's essentially an ogre-held ballista. An ogre bolt launcher can load this immense weapon and loose its deadly missile as quickly as a dwarf handles a crossbow. The bolts are so large that few ogres can carry more than a half dozen at a time, but bolt launchers have been known to uproot small trees or tear beams out of buildings and launch those when their ammunition runs low.

## Ogres of War

Ogres love to rush headlong into battle, but with enough time and patience, some of them learn to carry out specialized missions. The names they are given—the battering ram, the bolt launcher, the chain brute, and the howdah—reflect their particular functions. These jobs are tailored to take advantage of an ogre's strengths.

## Stat Block

```ad-statblock
title: Ogre Bolt Launcher
![](/compendium/bestiary/giant/token/ogre-bolt-launcher.png#token)
*Large giant, Chaotic Evil*

- **Armor Class** 13 ([hide armor](/compendium/items/hide-armor.md))
- **Hit Points** `dice: 7d10 + 21|text(59)` (7d10 + 21) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|12 (+1)|16 (+3)| 5 (-3)| 7 (-2)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 8
- **Languages** Common, Giant
- **Challenge** 2

## Actions

***Fist.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 4|avg` (`2d4 + 4`) bludgeoning damage.

***Bolt Launcher.*** *Ranged Weapon Attack:* `dice: d20+3` (+3 to hit), range 120/480 ft., one target. Hit: `dice: 3d10 + 1|avg` (`3d10 + 1`) piercing damage.
```
^statblock

## Environment

grassland, hill, mountain