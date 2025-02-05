---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/1
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Sea Navigator"]
---
# [Sea Navigator](compendium\bestiary\humanoid/sea-navigator-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Ships need navigators to direct them through dangerous weather conditions. Sea navigators that rise to the top will often be capable of exercising a degree of control over such weather, allowing them to either avoid, dismiss, or create such hazards to the ship's benefit.

```statblock
"name": "Sea Navigator (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[leather armor](compendium/items/leather-armor.md)"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "12"
- !!int "14"
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Nature": !!int "3"
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Common plus one other language"
"cr": "1"
"traits":
- "desc": "The navigator is a 3rd-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). The navigator has the following\
    \ druid spells prepared:\n\nCantrips (at will): [guidance](compendium/spells/guidance.md),\
    \ [produce flame](compendium/spells/produce-flame.md)\n\n1st level (4 slots):\
    \ [create or destroy water](compendium/spells/create-or-destroy-water.md), [fog\
    \ cloud](compendium/spells/fog-cloud.md), [thunderwave](compendium/spells/thunderwave.md)\n\
    \n2nd level (2 slots): [animal messenger](compendium/spells/animal-messenger.md),\
    \ [gust of wind](compendium/spells/gust-of-wind.md), [moonbeam](compendium/spells/moonbeam.md)"
  "name": "Spellcasting"
- "desc": "The navigator has advantage on any ability check it makes that involves\
    \ navigator's tools."
  "name": "Navigation Expert"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) bludgeoning damage."
  "name": "Quarterstaff"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```