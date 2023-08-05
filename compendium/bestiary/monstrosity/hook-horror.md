---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Hook Horror"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "18"
- !!int "10"
- !!int "15"
- !!int "6"
- !!int "12"
- !!int "7"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 13"
"languages": "Hook Horror"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hook horror can't use its blindsight while [deafened](compendium/rules/conditions.md#deafened)."
  "name": "Echolocation"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hook horror has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hook horror makes two hook attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) piercing damage."
  "name": "Hook"
"source":
- "MM"
- "PotA"
- "TftYP"
- "WDMM"
- "LoX"
- "KftGV"
"image": "/compendium/bestiary/monstrosity/token/hook-horror.png"
aliases: ["Hook Horror"]
---
# Hook Horror
*Source: Monster Manual p. 189, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Light of Xaryxis, Keys from the Golden Vault*  

A fierce predator of the Underdark, the hook horror aggressively defends its hunting grounds. The subterranean caverns where these creatures dwell echo with the constant clacking and scraping of their hooks as they wend their way up cliffs and along cavern walls. The monstrous hook horror has a head resembling a vulture's and the torso of an enormous beetle, with an exoskeleton studded by sharp, bony protuberances. It gains its name from its long, powerfully built arms and legs, which end in wickedly curved hooked claws.

## Echoes in the Dark

Hook horrors communicate by striking their hooks against their exoskeletons or the stone surfaces around them. What sounds to others like random clacking noise is actually a complex language that only hook horrors understand, and which carries for miles through the echoing Underdark.

## Pack Predators

The omnivorous hook horrors eat lichens, fungi, plants, and any creature they can catch. A hook horror's hooked limbs give it excellent purchase on rock surfaces, and these creatures use their climbing skills to ambush prey from above. They hunt in packs, working together against the largest and most dangerous opponents. If a battle goes poorly, a hook horror quickly climbs a cavern wall to flee.

## Dedicated Clans

Hook horrors live in extended family groups or clans. Each clan is ruled by the eldest female, who typically places her mate in charge of the clan's hunters. Hook horrors lay eggs, which are clustered in a central, well-defended area of a clan's home caverns.

## Stat Block

```ad-statblock
title: Hook Horror
![](/compendium/bestiary/monstrosity/token/hook-horror.png#token)
*Large monstrosity, Neutral*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 10d10 + 20|text(75)` (10d10 + 20) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|10 (+0)|15 (+2)| 6 (-2)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** blindsight 60 ft., darkvision 120 ft., passive Perception 13
- **Languages** Hook Horror
- **Challenge** 3

## Traits

***Echolocation.*** The hook horror can't use its blindsight while [deafened](compendium/rules/conditions.md#deafened).

***Keen Hearing.*** The hook horror has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing.

## Actions

***Multiattack.*** The hook horror makes two hook attacks.

***Hook.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one target. Hit: `dice: 2d6 + 4|avg` (`2d6 + 4`) piercing damage.
```
^statblock

## Environment

underdark