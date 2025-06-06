---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/2
  - monster/size/medium
  - monster/type/plant
aliases:
  - Swarm of Nox Flowers
---
# [[5. Mechanics\Bestiary\Plant\Swarm Of Nox Flowers (GRIFFONSSADDLEBAG3).md|Swarm of Nox Flowers]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The nox flower was originally created in the Safire Wood as a misguided attempt to stem the tide of the Midas Tree's expansion on the fey plane.

## Devious Pollinators

Nox flowers wander about constantly on their tiny root legs, searching for ways to carve out space and soil for their seeds to spread. Their entire life cycle is centered on this goal—even their destruction causes a burst of poisonous pollen and seeds to take root at the site of their death.

## Elemental Absorption

Alongside the pollen and seeds, the death of a nox flower releases whatever elemental energy that particular flower managed to collect during its lifespan. They gather the energy from the soil and other sources based on the particular strain of flower, reflected by the color of its petals. Energy that corresponds to their kind is also less potent against these tiny plants, as they absorb a portion of the element's power..

## Growth in Numbers

Nox flowers are not exactly social, as they have no language, but they do tend to gather and swarm with other flowers of the same element and color. When swarming, these pesky plants become significantly more dangerous, capable of expelling their destructive pollen more often to harm enemies nearby.

```statblock
"name": "Swarm Of Nox Flowers (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "15"
  - !!int "4"
  - !!int "10"
  - !!int "3"
"speed": "20 ft."
"damage_resistances": "the damage type corresponding to the swarm's color (see prismatic\
  \ bloom trait)"
"senses": "blindsight 60 ft. (blind beyond that radius), passive Perception 10"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The swarm is one of the following colors, and its corresponding damage\
      \ type affects several of the swarm's statistics: red (fire damage), orange\
      \ (acid damage), yellow (lightning damage), green (poison damage), blue (cold\
      \ damage), or purple (thunder damage)."
    "name": "Prismatic Bloom"
  - "desc": "If damage reduces the swarm to 0 hit points, it explodes in a burst of\
      \ pollen, unless the damage is necrotic. Each creature within 30 feet of it\
      \ must make a DC 12 Constitution saving throw; creatures within 15 feet of the\
      \ swarm make this saving throw with disadvantage. On a failed save, a creature\
      \ takes 28 (8d6) damage of the type corresponding to  the swarm's color and\
      \ is [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for 1 minute. On a\
      \ successful save, the creature takes half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]].\
      \ The swarm rolls a d8 to determine the additional effect [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ creatures are subjected to until the poison ends:\n\n1-2. The creature's speed\
      \ is halved.\n\n3-4. The creature is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]].\n\
      \n5-6. The creature is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]].\n\
      \n7.  The creature is [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]].\n\n\
      8. The creature is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]."
    "name": "Death Burst"
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny nox flower. The\
      \ swarm can't regain hit points or gain temporary hit points."
    "name": "Swarm"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 0 ft., one target in the swarm's\
      \ space. Hit: 16 (4d6 + 2) slashing damage, or 9 (2d6 + 2) slashing damage\
      \ if the swarm has half its hit points or fewer."
    "name": "Leaf Lash"
  - "desc": "The swarm erupts with a burst of destructive pollen in its vicinity.\
      \ Each creature within 15 feet of the swarm (other than itself) must make a\
      \ DC 12 Constitution saving throw, taking 28 (8d6) damage of the type corresponding\
      \ to the swarm's color on a failed save, or half as much damage on a successful\
      \ one. If the swarm has half its hit points or fewer, this saving throw is made\
      \ with advantage."
    "name": "Pollen Burst (Recharge 4-6)"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
