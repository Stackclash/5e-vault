---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: 
size: Tiny
tags:
- compendium/src/5e/kpdm
- monster/cr/1-8
- monster/size/tiny
- monster/type/beast
aliases: ["Platypus"]
---
# [Platypus](compendium\bestiary\beast/platypus-kpdm.md)
*Source: Deep Magic p. 293*

The platypus is a water-dwelling mammal that feeds on worms and other creatures living in the mud of streams and rivers. Because of its odd appearance, the platypus is often taken as a familiar by [transmuters](compendium/classes/wizard-school-of-transmutation.md).

```statblock
"name": "Platypus (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "3"
- !!int "12"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "10 ft., swim 40 ft."
"senses": "blindsight 90 ft., passive Perception 11"
"languages": ""
"cr": "1/8"
"actions":
- "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage. A creature struck by the spur must succeed on a DC 11 Constitution saving\
    \ throw or be [poisoned](/compendium/rules/conditions.md#Poisoned) for 1 minute.\
    \ The creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on a success."
  "name": "Spur"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```