---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Tiny
tags:
  - compendium/src/5e/phb
  - monster/cr/
  - monster/size/tiny
  - monster/type/construct
aliases:
  - Animated Object (Tiny)
---
# [[5. Mechanics\Bestiary\Construct\Animated Object Tiny.md|Animated Object (Tiny)]]
*Source: Player's Handbook p. 213*

```statblock
"name": "Animated Object Tiny"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "20"
"modifier": !!int "4"
"stats":
  - !!int "4"
  - !!int "18"
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
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 6 (1d4\
      \ + 4) bludgeoning damage."
    "name": "Slam"
"source":
  - "PHB"
"image": "5. Mechanics/Bestiary/Construct/token/animated-object-tiny.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
