---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/phb
- monster/size/large
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
"name": "Animated Object (Large)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "50"
"stats":
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "3"
- !!int "3"
- !!int "1"
"speed": "walk 30 ft."
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the object lacks legs or other appendages it can use for locomotion,\
    \ it instead has a flying speed of 30 feet and can hover. If the object is securely\
    \ attached to a surface or larger object, such as a chain bolted to a wall, its\
    \ speed is 0.\n\nWhen the animated object drops to 0 hit points, it reverts to\
    \ its original object form, and any remaining damage carries over to its original\
    \ object form.\n\nThe DM might rule that a specific objects slam attack inflicts\
    \ slashing or piercing damage based on its form."
  "name": "Animated"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d10 + 2|avg (2d10 + 2) bludgeoning damage."
  "name": "Slam"
"source":
- "PHB"
"image": "/compendium/bestiary/construct/token/animated-object-large.png"
aliases: ["Animated Object (Large)"]
---
# Animated Object (Large)
*Source: Player's Handbook p. 213*  

```ad-statblock
title: Animated Object (Large)
![[/6. Mechanics/Bestiary/Construct/Token/animated-object-large.png#token]]
*Large construct, Unaligned*

- **Armor Class** 10 (natural armor)
- **Hit Points** 50  
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|10 (+0)|10 (+0)| 3 (-4)| 3 (-4)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 30 ft. (blind beyond this radius), passive Perception 6
- **Languages** —
- **Challenge** 

## Traits

***Animated.*** If the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or larger object, such as a chain bolted to a wall, its speed is 0.

When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.

The DM might rule that a specific objects slam attack inflicts slashing or piercing damage based on its form.

## Actions

***Slam.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d10 + 2` (`2d10 + 2`) bludgeoning damage.
```
^statblock