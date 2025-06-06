---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/6
  - monster/size/medium
  - monster/type/construct
aliases:
  - Death
---
# [[5. Mechanics\Bestiary\Construct\Death (SAF).md|Death]]
*Source: Strongholds and Followers p. 228*

> [!quote]  
> 
> "This microstate partition lacks sufficient entropy. I will repair."

All things must end. The Inexorability of Death is not concerned exclusively with ending life—its purview covers all things. Civilizations, ideas, stories. All things end.

Death does not cause this ending, it enforces it. It arrives ready to stop something or someone trying to undo the Law of Death. Therefore, it focuses most on the undead, on those things persisting after their natural end.

It also has the power to prevent a creature from meeting its end before its time. Why it is granted the power to use magic, when magic is chaos and therefore anathema to the Inexorables, is a question Death does not know the answer to. It only knows it can prevent.

## Tactics

This thing is powerful, but not hard to run. Its Law of Death radiates damage to undead, and its Death to Undeath ability has an obvious use. But if there aren't any undead around, it'll happily wade into combat for you, just smashing things with its hammer-like fists.

```statblock
"name": "Death (SAF)"
"size": "Medium"
"type": "construct"
"alignment": "Lawful"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "15"
  - !!int "16"
  - !!int "13"
  - !!int "14"
  - !!int "15"
"speed": "40 ft."
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 15"
"languages": "all those of the creature who summoned it"
"cr": "6"
"traits":
  - "desc": "Death's innate spellcasting ability is Charisma (spell save DC 13). It\
      \ can innately cast the following spells, requiring no material components:\n\
      \n3/day: [[5. Mechanics/Spells/Death Ward.md|death ward]]"
    "name": "Innate Spellcasting"
  - "desc": "At the start of each of Death's turns, undead within 10 feet of it take\
      \ 10 force damage."
    "name": "The Law of Death"
  - "desc": "The Inexorables have disadvantage on all saving throws against spells."
    "name": "Chaos Vulnerability"
  - "desc": "The Inexorables are immune to any effects that would slow them or deny\
      \ them actions or movement."
    "name": "Inexorable"
"actions":
  - "desc": "Death makes three slam attacks or makes one slam attack and one Death\
      \ to Undeath attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12\
      \ (2d8 + 3) bludgeoning damage."
    "name": "Slam"
  - "desc": "Death points at an undead creature within 60 feet. The target must make\
      \ a DC 13 Wisdom saving throw or take 33 (6d10) force damage. On a successful\
      \ save, the target takes half that damage."
    "name": "Death to Undeath"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Death.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
