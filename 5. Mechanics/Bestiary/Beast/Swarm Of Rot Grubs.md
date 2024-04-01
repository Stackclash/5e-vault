---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-2
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/beast
statblock: inline
aliases:
  - Swarm of Rot Grubs
---
# [[5. Mechanics\Bestiary\Beast\Swarm Of Rot Grubs.md|Swarm of Rot Grubs]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 237, Volo's Guide to Monsters p. 208*

Rot grubs are finger-sized maggots that eat living and dead creatures, although they can survive on vegetation. They infest corpses and piles of decaying matter and attack anyone that disturbs them. After burrowing into a creature, rot grubs instinctively chew their way toward vital parts.

Rot grubs recoil from flames, and fire is the main weapon against rot grubs once they're inside a body. Magic that neutralizes poison can also stop them before they kill their host.

## Single Rot Grub

Rot grubs pose a threat both singly and as a swarm. See the stat block for the mechanics of a swarm of rot grubs. A single rot grub has no stat block.

Any creature that comes into contact with a single rot grub must succeed on a DC 10 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]], as the rot grub burrows into the creature. The [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] creature takes `dice: 1d6|avg` (`1d6`) poison damage at the end of each of its turns. Whenever the [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] creature takes fire damage, the creature can repeat the saving throw, ending the effect on itself on a success. If the [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] creature ends its turn with 0 hit points, it dies, as the rot grub kills it.

```statblock
"name": "Swarm Of Rot Grubs"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]"
"senses": "blindsight 10 ft., passive Perception 6"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny maggot. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+0 (+0 to hit), reach 0 ft., one creature\
    \ in the swarm's space. Hit: dice: 2d6|avg (2d6) piercing damage, and the\
    \ target must succeed on a DC 10 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]].\
    \ At the end of each of the [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ target's turns, the target takes dice: 1d6|avg (1d6) poison damage. Whenever\
    \ the [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] target takes fire damage,\
    \ the target can repeat the saving throw, ending the effect on itself on a success.\
    \ If the [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] target ends its\
    \ turn with 0 hit points, it dies."
  "name": "Bites"
"source":
- "MPMM"
- "VGM"
- "AATM"
"image": "5. Mechanics/Bestiary/Beast/token/swarm-of-rot-grubs-mpmm.webp"
```
^statblock

## Environment

swamp, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
