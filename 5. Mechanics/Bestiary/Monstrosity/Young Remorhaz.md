---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: arctic
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/5
  - monster/environment/arctic
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Young Remorhaz
---
# [[5. Mechanics\Bestiary\Monstrosity\Young Remorhaz.md|Young Remorhaz]]
*Source: Monster Manual p. 258*

From beneath the snow and ice bursts a remorhaz in a cloud of steam, its body pulsing with internal fire. Wing like fins flare from the back of the creature's head, and its wide mouth brims with jagged teeth.

## Arctic Predators

Remorhazes live in arctic climes, preying on elk, polar bears, and other creatures sharing their territory. They can't tolerate warm weather, having adapted to the cold by generating a furnace-like heat within their bodies. When hunting, a remorhaz burrows deep below the snow and ice and lies in wait for the faint vibrations created by a creature moving above it. While hidden under the ice and snow, it can lower its body temperature so that it doesn't melt its cover.

## Young Ones

Frost giant hunters scour the icy wastes for remorhaz nests and eggs. The giants prize young remorhazes, which can be trained from hatching to obey commands and guard the giants' icy citadels. Unlike fully grown specimens, young remorhazes gnaw on their victims instead of swallowing them whole.

```statblock
"name": "Young Remorhaz"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "17"
  - !!int "3"
  - !!int "10"
  - !!int "4"
"speed": "30 ft., burrow 30 ft."
"damage_immunities": "cold, fire"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10"
"languages": ""
"cr": "5"
"traits":
  - "desc": "A creature that touches the remorhaz or hits it with a melee attack while\
      \ within 5 feet of it takes 7 (2d6) fire damage."
    "name": "Heated Body"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 20\
      \ (3d10 + 4) piercing damage plus 7 (2d6) fire damage."
    "name": "Bite"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/young-remorhaz.webp"
```
^statblock

## Environment

arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
