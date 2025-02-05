---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 
size: Large
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/2
- monster/size/large
- monster/type/monstrosity
aliases: ["Scarapit"]
---
# [Scarapit](compendium\bestiary\monstrosity/scarapit-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2 p. 340*

In Antronec's sewers, these vile monstrosities roam, relishing in the abundance of waste and smaller prey. Some researchers presume that this unholy mixture of dung beetle and centipede was created by a mage or deity striving to inspire nightmares. It is uniquely adept at navigating the underground and often-poisonous sewer system, as many adventurers have discovered. In fact, some adventuring agencies consider slaying a scarapit to be the deciding factor between an adventurer and a thrill-seeker.

```statblock
"name": "Scarapit (GriffonsSaddlebag2)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "16"
- !!int "15"
- !!int "17"
- !!int "3"
- !!int "8"
- !!int "4"
"speed": "30 ft., burrow 20 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "1"
  "Survival": !!int "3"
"damage_resistances": "poison"
"condition_immunities": "[paralyzed](/compendium/rules/conditions.md#Paralyzed), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 11"
"languages": ""
"cr": "2"
"traits":
- "desc": "In the first round of a combat, the scarapit has advantage on attack rolls\
    \ against any creature it has surprised."
  "name": "Ambusher"
- "desc": "The scarapit has advantage on Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The scarapit can breathe normally in any environment, and it has advantage\
    \ on saving throws made against harmful gases and vapors (such as [cloudkill](compendium/spells/cloudkill.md)\
    \ and [stinking cloud](compendium/spells/stinking-cloud.md) effects, inhaled poisons,\
    \ and the breath weapons of some dragons)."
  "name": "Noxious Resilience"
- "desc": "The scarapit can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While the scarapit is underground, it always knows how far it is from the\
    \ surface, it can't be surprised while it isn't [incapacitated](/compendium/rules/conditions.md#Incapacitated),\
    \ and it has advantage on Wisdom ([Survival](/compendium/rules/skills.md#Survival))\
    \ checks made to track creatures."
  "name": "Subterranean Explorer"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) piercing damage, or 21 (4d8 + 3) piercing damage if the target is surprised,\
    \ and the target must make a DC 13 Constitution saving throw, taking 9 (2d8) poison\
    \ damage on a failed save, or half as much damage on a successful one. If the\
    \ poison damage reduces the target to 0 hit points, the target is stable but [poisoned](/compendium/rules/conditions.md#Poisoned)\
    \ for 1 hour, even after regaining hit points, and is [paralyzed](/compendium/rules/conditions.md#Paralyzed)\
    \ while [poisoned](/compendium/rules/conditions.md#Poisoned) in this way."
  "name": "Bite"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```