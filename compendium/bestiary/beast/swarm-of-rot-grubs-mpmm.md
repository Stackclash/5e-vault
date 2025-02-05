---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: swamp, underdark
size: Medium
tags:
- compendium/src/5e/mpmm
- monster/cr/1-2
- monster/environment/swamp
- monster/environment/underdark
- monster/size/medium
- monster/type/beast
aliases: ["Swarm of Rot Grubs"]
---
# [Swarm of Rot Grubs](compendium\bestiary\beast/swarm-of-rot-grubs-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 237, Volo's Guide to Monsters p. 208*

Rot grubs are finger-sized maggots that eat living and dead creatures, although they can survive on vegetation. They infest corpses and piles of decaying matter and attack anyone that disturbs them. After burrowing into a creature, rot grubs instinctively chew their way toward vital parts.

Rot grubs recoil from flames, and fire is the main weapon against rot grubs once they're inside a body. Magic that neutralizes poison can also stop them before they kill their host.

## Single Rot Grub

Rot grubs pose a threat both singly and as a swarm. See the stat block for the mechanics of a swarm of rot grubs. A single rot grub has no stat block.

Any creature that comes into contact with a single rot grub must succeed on a DC 10 Constitution saving throw or be [poisoned](/compendium/rules/conditions.md#Poisoned), as the rot grub burrows into the creature. The [poisoned](/compendium/rules/conditions.md#Poisoned) creature takes `dice:1d6|noform|avg|text(3)` (`1d6`) poison damage at the end of each of its turns. Whenever the [poisoned](/compendium/rules/conditions.md#Poisoned) creature takes fire damage, the creature can repeat the saving throw, ending the effect on itself on a success. If the [poisoned](/compendium/rules/conditions.md#Poisoned) creature ends its turn with 0 hit points, it dies, as the rot grub kills it.

```statblock
"name": "Swarm of Rot Grubs (MPMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "2"
- !!int "7"
- !!int "10"
- !!int "1"
- !!int "2"
- !!int "1"
"speed": "5 ft., climb 5 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "piercing, slashing"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [frightened](/compendium/rules/conditions.md#Frightened),\
  \ [grappled](/compendium/rules/conditions.md#Grappled), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained)"
"senses": "blindsight 10 ft., passive Perception 6"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny maggot. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: +0 to hit, reach 0 ft., one creature in the swarm's\
    \ space. Hit: 7 (2d6) piercing damage, and the target must succeed on a DC 10\
    \ Constitution saving throw or be [poisoned](/compendium/rules/conditions.md#Poisoned).\
    \ At the end of each of the [poisoned](/compendium/rules/conditions.md#Poisoned)\
    \ target's turns, the target takes 3 (1d6) poison damage. Whenever the [poisoned](/compendium/rules/conditions.md#Poisoned)\
    \ target takes fire damage, the target can repeat the saving throw, ending the\
    \ effect on itself on a success. If the [poisoned](/compendium/rules/conditions.md#Poisoned)\
    \ target ends its turn with 0 hit points, it dies."
  "name": "Bites"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/beast/token/swarm-of-rot-grubs-mpmm.webp"
```
^statblock

## Environment

swamp, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```