---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/phb
  - monster/cr/
  - monster/size/small
  - monster/type/construct
statblock: inline
aliases:
  - Animated Object (Small)
---
# [[5. Mechanics\Bestiary\Construct\Animated Object Small.md|Animated Object (Small)]]
*Source: Player's Handbook p. 213*

```statblock
"name": "Animated Object Small"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "25"
"stats":
- !!int "6"
- !!int "14"
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
    \ attached to a surface or larger object, such as a chain bolted to a wall, its\
    \ speed is 0.\n\nWhen the animated object drops to 0 hit points, it reverts to\
    \ its original object form, and any remaining damage carries over to its original\
    \ object form.\n\nThe DM might rule that a specific objects slam attack inflicts\
    \ slashing or piercing damage based on its form."
  "name": "Animated"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 2|text(6) (1d8 + 2) bludgeoning damage."
  "name": "Slam"
"source":
- "PHB"
"image": "5. Mechanics/Bestiary/Construct/token/animated-object-small.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
