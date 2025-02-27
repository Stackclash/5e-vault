---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/0
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Goldbug
---
# [[5. Mechanics\Bestiary\Beast\Goldbug (KPDM).md|Goldbug]]
*Source: Deep Magic p. 292*

The goldbug is a strange sort of insect, a creature whose round, flat body resembles a gold coin. This "disguise" helps goldbugs get close to their prized food source: gold. When placed in a pouch or chest along with the gold coins it resembles, a goldbug will happily devour the coins at the rate of one per day.

Goldbugs live underground near veins of gold and are common in areas where gold is used as coinage and in art objects.

```statblock
"name": "Goldbug (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "18"
"hit_dice": "4d4 + 8"
"stats":
- !!int "3"
- !!int "14"
- !!int "15"
- !!int "1"
- !!int "10"
- !!int "6"
"speed": "10 ft., climb 10 ft."
"senses": "blindsight 20 ft., passive Perception 13"
"languages": "understands Common but can't speak"
"cr": "0"
"traits":
- "desc": "While the goldbug remains motionless, it is indistinguishable from a gold\
    \ coin."
  "name": "False Appearance"
- "desc": "The goldbug can pinpoint, by scent, the location of gold within 60 feet\
    \ of it."
  "name": "Scent Gold"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ and 1 poison damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for 1 hour."
  "name": "Bite"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
