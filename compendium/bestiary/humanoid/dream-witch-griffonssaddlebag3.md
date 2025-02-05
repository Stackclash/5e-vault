---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 
size: Small
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/3
- monster/size/small
- monster/type/humanoid/goblin
aliases: ["Dream Witch"]
---
# [Dream Witch](compendium\bestiary\humanoid/dream-witch-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Goblinoid spellcasters that dabble in the magic surrounding dreams are sometimes given titles of soothsayer or prophet among goblin society. Their magic grows more powerful when among their spellcasting peers, approaching the likes of even hags.

```statblock
"name": "Dream Witch (GriffonsSaddlebag3)"
"size": "Small"
"type": "humanoid"
"subtype": "goblin"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "[hide armor](compendium/items/hide-armor.md)"
"hp": !!int "71"
"hit_dice": "13d6 + 26"
"stats":
- !!int "10"
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "17"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Insight": !!int "4"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Goblin, Sylvan"
"cr": "3"
"traits":
- "desc": "The witch's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [detect magic](compendium/spells/detect-magic.md), [disguise self](compendium/spells/disguise-self.md)\n\
    \n1/day each: [dream](compendium/spells/dream.md), [hypnotic pattern](compendium/spells/hypnotic-pattern.md)\n\
    \n3/day each: [bane](compendium/spells/bane.md), [command](compendium/spells/command.md),\
    \ [sleep](compendium/spells/sleep.md) (7d8)"
  "name": "Innate Spellcasting"
- "desc": "The witch has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The witch can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
- "desc": "The witch deals an extra 14 (4d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of the witch that isn't incapacitated and the witch doesn't\
    \ have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "The witch makes two attacks with its dagger."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"reactions":
- "desc": "When the [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
    \ or [prone](/compendium/rules/conditions.md#Prone) condition ends on a creature\
    \ the witch can see within 60 feet of it, the witch attempts to magically cause\
    \ that creature to falter.\n\nThe creature must make a DC 13 Constitution saving\
    \ throw. On a failed save, the creature falls [prone](/compendium/rules/conditions.md#Prone),\
    \ its speed is reduced to 0, and it is [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
    \ until the end of its next turn."
  "name": "Collapse"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```