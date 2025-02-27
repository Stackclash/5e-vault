---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Small
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/3
  - monster/size/small
  - monster/type/humanoid/goblin
aliases:
  - Dream Witch
---
# [[5. Mechanics\Bestiary\Humanoid\Dream Witch (GRIFFONSSADDLEBAG3).md|Dream Witch]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Goblinoid spellcasters that dabble in the magic surrounding dreams are sometimes given titles of soothsayer or prophet among goblin society. Their magic grows more powerful when among their spellcasting peers, approaching the likes of even hags.

```statblock
"name": "Dream Witch (GRIFFONSSADDLEBAG3)"
"size": "Small"
"type": "humanoid"
"subtype": "goblin"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Hide Armor.md|hide armor]]"
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
    \nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Disguise Self.md|disguise self]]\n\
    \n1/day each: [[5. Mechanics/Spells/Dream.md|dream]], [[5. Mechanics/Spells/Hypnotic Pattern.md|hypnotic pattern]]\n\
    \n3/day each: [[5. Mechanics/Spells/Bane.md|bane]], [[5. Mechanics/Spells/Command.md|command]],\
    \ [[5. Mechanics/Spells/Sleep.md|sleep]] (7d8)"
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
- "desc": "When the [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#Prone|prone]] condition ends on a creature\
    \ the witch can see within 60 feet of it, the witch attempts to magically cause\
    \ that creature to falter.\n\nThe creature must make a DC 13 Constitution saving\
    \ throw. On a failed save, the creature falls [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
    \ its speed is reduced to 0, and it is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
    \ until the end of its next turn."
  "name": "Collapse"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
