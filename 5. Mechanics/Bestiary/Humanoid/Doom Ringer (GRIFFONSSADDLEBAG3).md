---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Doom Ringer
---
# [[5. Mechanics\Bestiary\Humanoid\Doom Ringer (GRIFFONSSADDLEBAG3).md|Doom Ringer]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A doom ringer is a feverish acolyte of Los Fieles. They walk the streets of Gavia quietly ringing small, well-worn hand bells. The most maddened of doom ringers believe that to live without the sound of the bells for even a moment is to live in aversion to destiny, and therefore are heretical to their core beliefs.

```statblock
"name": "Doom Ringer (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather armor]]"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "14"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Religion": !!int "2"
  "Insight": !!int "4"
  "Persuasion": !!int "3"
"senses": "passive Perception 12"
"languages": "Common plus one other language"
"cr": "1/2"
"traits":
- "desc": "The doom ringer is a 3rd-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 12). It has the following cleric spells prepared:\n\n\
    Cantrips (at will): [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]],\
    \ [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n1st level (4 slots):\
    \ [[5. Mechanics/Spells/Bane.md|bane]], [[5. Mechanics/Spells/Command.md|command]],\
    \ [[5. Mechanics/Spells/Thunderwave.md|thunderwave]]\n\n2nd level (2 slots):\
    \ [[5. Mechanics/Spells/Shatter.md|shatter]], [[5. Mechanics/Spells/Silence.md|silence]]"
  "name": "Spellcasting"
- "desc": "The doom ringer has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]."
  "name": "Pandemoniacal Devotion"
- "desc": "The doom ringer is unaffected by the [[5. Mechanics/Spells/Silence.md|silence]]\
    \ spell. In addition, creatures within the area of a [[5. Mechanics/Spells/Silence.md|silence]]\
    \ spell cast by the doom ringer can still hear the doom ringer and aren't immune\
    \ to thunder damage dealt by the doom ringer."
  "name": "Piercing Prophet"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Light Hammer"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
