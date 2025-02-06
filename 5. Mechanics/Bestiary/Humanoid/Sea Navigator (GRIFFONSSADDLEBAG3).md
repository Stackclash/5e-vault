---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\1
  - monster\Size\Medium
  - monster\Type\Humanoid\Any Race
aliases:
  - Sea Navigator
---
# [[5. Mechanics\Bestiary\Humanoid\Sea Navigator (GRIFFONSSADDLEBAG3).md|Sea Navigator]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Ships need navigators to direct them through dangerous weather conditions. Sea navigators that rise to the top will often be capable of exercising a degree of control over such weather, allowing them to either avoid, dismiss, or create such hazards to the ship's benefit.

```statblock
"name": "Sea Navigator (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather armor]]"
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
    \ druid spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Guidance.md|guidance]],\
    \ [[5. Mechanics/Spells/Produce Flame.md|produce flame]]\n\n1st level (4 slots):\
    \ [[5. Mechanics/Spells/Create Or Destroy Water.md|create or destroy water]], [[5. Mechanics/Spells/Fog Cloud.md|fog\
    \ cloud]], [[5. Mechanics/Spells/Thunderwave.md|thunderwave]]\n\
    \n2nd level (2 slots): [[5. Mechanics/Spells/Animal Messenger.md|animal messenger]],\
    \ [[5. Mechanics/Spells/Gust Of Wind.md|gust of wind]], [[5. Mechanics/Spells/Moonbeam.md|moonbeam]]"
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
