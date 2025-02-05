---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'urban, swamp, hearth'
size: Large
tags:
  - compendium/src/5e/tgs1
  - monster/cr/2
  - monster/environment/hearth
  - monster/environment/swamp
  - monster/environment/urban
  - monster/size/large
  - monster/type/beast
aliases:
  - Invisiboar
---
# [[5. Mechanics\Bestiary\Beast\Invisiboar (TGS1).md|Invisiboar]]
*Source: The Griffon's Saddlebag, Book 1 p. 194*

Native to the jungles of Elsath, invisiboars are literally invisible boars. It's largely believed that these strange pigs owe their existence to the wild magic that flows through the jungles of the world, and the fact that so many of them are found near sites of permanent or programmed illusions lends further credence to that theory.

Invisiboars are consummate hunters who use their innate invisibility to stalk their prey before viciously charging it. When pitted against tougher combatants, they utilize hit and run tactics that let them charge the same target repeatedly.

When invisiboars are killed, the magic that conceals them "bursts," blinding creatures who witness the burst.

```statblock
"name": "Invisiboar (TGS1)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "3"
"senses": "passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- "desc": "If the invisiboar moves at least 20 feet straight toward a target and then\
    \ hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6)\
    \ slashing damage. If the target is a creature, it must succeed on a DC 13 Strength\
    \ saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Charge"
- "desc": "When the invisiboar dies, its invisibility ends and it emits a bright flash\
    \ of light. Each creature within 10 feet of it must make a DC 13 Constitution\
    \ saving throw or become [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] for\
    \ 1 minute. A creature can repeat its saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Death Flash"
- "desc": "The invisiboar is invisible."
  "name": "Invisibility"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (6d6\
    \ + 3) slashing damage."
  "name": "Tusk"
"source":
- "tgs1"
```
^statblock

## Environment

urban, swamp, hearth

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
