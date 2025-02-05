---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/1-2
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Doom Ringer"]
---
# [Doom Ringer](compendium\bestiary\humanoid/doom-ringer-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A doom ringer is a feverish acolyte of Los Fieles. They walk the streets of Gavia quietly ringing small, well-worn hand bells. The most maddened of doom ringers believe that to live without the sound of the bells for even a moment is to live in aversion to destiny, and therefore are heretical to their core beliefs.

```statblock
"name": "Doom Ringer (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[leather armor](compendium/items/leather-armor.md)"
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
    Cantrips (at will): [light](compendium/spells/light.md), [sacred flame](compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](compendium/spells/thaumaturgy.md)\n\n1st level (4 slots):\
    \ [bane](compendium/spells/bane.md), [command](compendium/spells/command.md),\
    \ [thunderwave](compendium/spells/thunderwave.md)\n\n2nd level (2 slots):\
    \ [shatter](compendium/spells/shatter.md), [silence](compendium/spells/silence.md)"
  "name": "Spellcasting"
- "desc": "The doom ringer has advantage on saving throws against being [deafened](/compendium/rules/conditions.md#Deafened)\
    \ or [frightened](/compendium/rules/conditions.md#Frightened)."
  "name": "Pandemoniacal Devotion"
- "desc": "The doom ringer is unaffected by the [silence](compendium/spells/silence.md)\
    \ spell. In addition, creatures within the area of a [silence](compendium/spells/silence.md)\
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