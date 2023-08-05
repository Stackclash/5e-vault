---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Meazel"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "35"
"hit_dice": "10d8 - 10"
"stats":
- !!int "8"
- !!int "17"
- !!int "9"
- !!int "14"
- !!int "13"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Common"
"cr": "1"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target\
    \ of the meazel's size or smaller. Hit: dice: 1d6 + 3|avg (1d6 + 3) bludgeoning\
    \ damage, and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]\
    \ (escape DC 13 with disadvantage). Until the grapple ends, the target takes dice:\
    \ 2d6 + 3|avg (2d6 + 3) bludgeoning damage at the start of each of the meazel's\
    \ turns. The meazel can't make weapon attacks while grappling a creature in this\
    \ way."
  "name": "Garrote"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage plus dice: 1d6|avg (1d6)\
    \ necrotic damage"
  "name": "Shortsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The meazel, any equipment it is wearing or carrying, and any creature it\
    \ is grappling teleport to an unoccupied space within 500 feet of it, provided\
    \ that the starting space and the destination are in dim light or darkness. The\
    \ destination must be a place the meazel has seen before, but it need not be within\
    \ line of sight. If the destination space is occupied, the teleportation leads\
    \ to the nearest unoccupied space.\n\nAny other creature the meazel teleports\
    \ becomes cursed for 1 hour or until the curse is ended by [[/6. Mechanics/Spells/remove-curse.md\|remove curse]]\
    \ or [[/6. Mechanics/Spells/greater-restoration.md\|greater restoration]]. Until this\
    \ curse ends, every Undead and every creature native to the Shadowfell within\
    \ 300 feet of the cursed creature can sense it, which prevents that creature from\
    \ hiding from them."
  "name": "Shadow Teleport (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in dim light or darkness, the meazel takes the Hide action."
  "name": "Shadow Stealth"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/monstrosity/token/meazel.png"
aliases: ["Meazel"]
---
# Meazel
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 177, Mordenkainen's Tome of Foes p. 214*  

Meazels are malicious hermits who fled to the Shadowfell to escape their mortal existence and contemplate their misery. There the shadows transformed them, and their bitterness made them twisted and cruel. Now hate burns in their hearts, and they resent any intrusion into their suffering, waylaying travelers who venture too close to their lairs.

The evil that corrupted meazels also imbued them with magical powers that allow them to move through shadows with ease. They can step from one pool of darkness into another one, using this talent to ambush prey. Sometimes they snatch victims around the throat with their strangling cords and then step away; other times they ferry their victims to isolated spots and then leave the hapless souls to the designs of whatever horrors lurk there.

Any creatures meazels draw through the shadows are cursed by the meazels' baleful magic. The curse acts as a beacon; sorrowsworn (which appear in this book), Undead, and other terrors sense where they are located and descend on the stranded victims to tear them apart.

```ad-statblock
title: Meazel
![[/6. Mechanics/Bestiary/Monstrosity/Token/meazel.png#token]]
*Medium monstrosity, Neutral Evil*

- **Armor Class** 13 
- **Hit Points** `dice: 10d8 - 10|text(35)` (10d8 - 10) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|17 (+3)| 9 (-1)|14 (+2)|13 (+1)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +5
- **Senses** darkvision 120 ft., passive Perception 13
- **Languages** Common
- **Challenge** 1

## Actions

***Garrote.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target of the meazel's size or smaller. Hit: `dice: 1d6 + 3` (`1d6 + 3`) bludgeoning damage, and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 13 with disadvantage). Until the grapple ends, the target takes `dice: 2d6 + 3` (`2d6 + 3`) bludgeoning damage at the start of each of the meazel's turns. The meazel can't make weapon attacks while grappling a creature in this way.

***Shortsword.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3` (`1d6 + 3`) piercing damage plus `dice: 1d6` (`1d6`) necrotic damage

***Shadow Teleport (Recharge 5-6).*** The meazel, any equipment it is wearing or carrying, and any creature it is grappling teleport to an unoccupied space within 500 feet of it, provided that the starting space and the destination are in dim light or darkness. The destination must be a place the meazel has seen before, but it need not be within line of sight. If the destination space is occupied, the teleportation leads to the nearest unoccupied space.

Any other creature the meazel teleports becomes cursed for 1 hour or until the curse is ended by [[/6. Mechanics/Spells/remove-curse.md\|remove curse]] or [[/6. Mechanics/Spells/greater-restoration.md\|greater restoration]]. Until this curse ends, every Undead and every creature native to the Shadowfell within 300 feet of the cursed creature can sense it, which prevents that creature from hiding from them.

## Bonus Actions

***Shadow Stealth.*** While in dim light or darkness, the meazel takes the Hide action.
```
^statblock

## Environment

desert, forest, grassland, hill, mountain, swamp, underdark, urban