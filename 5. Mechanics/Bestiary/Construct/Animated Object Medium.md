---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Medium
tags:
  - compendium/src/5e/phb
  - monster/cr/
  - monster/size/medium
  - monster/type/construct
aliases:
  - Animated Object (Medium)
---
# [[5. Mechanics\Bestiary\Construct\Animated Object Medium.md|Animated Object (Medium)]]
*Source: Player's Handbook p. 213*

```statblock
"name": "Animated Object Medium"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "40"
"modifier": !!int "1"
"stats":
  - !!int "10"
  - !!int "12"
  - !!int "10"
  - !!int "3"
  - !!int "3"
  - !!int "1"
"speed": "30 ft."
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"traits":
  - "desc": "If the object lacks legs or other appendages it can use for locomotion,\
      \ it instead has a flying speed of 30 feet and can hover. If the object is securely\
      \ attached to a surface or larger object, such as a chain bolted to a wall,\
      \ its speed is 0.\n\nWhen the animated object drops to 0 hit points, it reverts\
      \ to its original object form, and any remaining damage carries over to its\
      \ original object form.\n\nThe DM might rule that a specific objects slam attack\
      \ inflicts slashing or piercing damage based on its form."
    "name": "Animated"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d6\
      \ + 1) bludgeoning damage."
    "name": "Slam"
"source":
  - "PHB"
"image": "5. Mechanics/Bestiary/Construct/token/animated-object-medium.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
