---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: null
size: Tiny
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1-8
  - monster/size/tiny
  - monster/type/plant
aliases:
  - Nox Flower
---
# [[5. Mechanics\Bestiary\Plant\Nox Flower (GRIFFONSSADDLEBAG3).md|Nox Flower]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The nox flower was originally created in the Safire Wood as a misguided attempt to stem the tide of the Midas Tree's expansion on the fey plane.

## Devious Pollinators

Nox flowers wander about constantly on their tiny root legs, searching for ways to carve out space and soil for their seeds to spread. Their entire life cycle is centered on this goal—even their destruction causes a burst of poisonous pollen and seeds to take root at the site of their death.

## Elemental Absorption

Alongside the pollen and seeds, the death of a nox flower releases whatever elemental energy that particular flower managed to collect during its lifespan. They gather the energy from the soil and other sources based on the particular strain of flower, reflected by the color of its petals. Energy that corresponds to their kind is also less potent against these tiny plants, as they absorb a portion of the element's power..

## Growth in Numbers

Nox flowers are not exactly social, as they have no language, but they do tend to gather and swarm with other flowers of the same element and color. When swarming, these pesky plants become significantly more dangerous, capable of expelling their destructive pollen more often to harm enemies nearby.

```statblock
"name": "Nox Flower (GRIFFONSSADDLEBAG3)"
"size": "Tiny"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "3"
"hit_dice": "1d4 + 1"
"stats":
- !!int "2"
- !!int "12"
- !!int "13"
- !!int "4"
- !!int "10"
- !!int "3"
"speed": "20 ft."
"damage_resistances": "the damage type corresponding to the nox flower's color (see\
  \ prismatic bloom trait)"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- "desc": "The nox flower is one of the following colors, and its corresponding damage\
    \ type affects several of its statistics: red (fire damage), orange (acid damage),\
    \ yellow (lightning damage), green (poison damage), blue (cold damage), or purple\
    \ (thunder damage)."
  "name": "Prismatic Bloom"
- "desc": "If damage reduces the nox flower to 0 hit points, it explodes in a burst\
    \ of pollen, unless the damage is necrotic. Each creature within 10 feet of it\
    \ must make a DC 11 Constitution saving throw. On a failed save, a creature takes\
    \ 14 (4d6) damage of the type corresponding to the nox flower's color, and the\
    \ nox flower rolls a d4 to determine the additional effect creatures are subjected\
    \ to until the end of their next turn:\n\n1. The creature's speed is reduced by\
    \ 5 feet.\n\n2. The creature has disadvantage on the next ability check it makes.\n\
    \n3. The creature can't take reactions.\n\n4. The creature must choose whether\
    \ it gets a move, an action, or a bonus action on its next turn; it gets only\
    \ one of the three."
  "name": "Death Burst"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 2 slashing damage."
  "name": "Leaf Lash"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
