---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/18
- monster/environment/underdark
- monster/size/huge
- monster/type/fiend/demon
statblock: inline
aliases: ["Sibriex"]
---
# [[5. Mechanics\Bestiary\Fiend\Sibriex.md|Sibriex]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 217, Mordenkainen's Tome of Foes p. 137*  

Thought to be as old as the Abyss itself, sibriexes haunt remote parts of that plane, where they use their vile abilities to create new horrors and they seek ancient lore. Rivulets of blood and bile cascade from a sibriex's body, polluting the surrounding landscape.

Sibriexes have spent eons amassing knowledge from across the planes, hoarding it for when it might be useful. Such are their incredible intellects and stores of information that many seek them out, including demon lords. Some sibriexes act as advisors and oracles, manipulating demons into serving their ends, while others parcel out lore only when doing so advances their plans.

Sibriexes can channel the power of the Abyss to create new demons from other creatures. Some demons petition sibriexes for physical gifts, for sibriexes can graft on new body parts to give the demons greater strength, vision, or stamina. Sibriexes never give aid freely, though; they demand a service or a treasure in return for the flesh-shaping they provide.

```statblock
"name": "Sibriex"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "19"
"hp": !!int "150"
"hit_dice": "12d12 + 72"
"stats":
- !!int "10"
- !!int "3"
- !!int "23"
- !!int "25"
- !!int "24"
- !!int "25"
"speed": "0 ft., fly 20 ft. (hover)"
"saves":
  "Charisma": !!int "13"
  "Intelligence": !!int "13"
"skillsaves":
  "Perception": !!int "13"
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all, telepathy 120 ft."
"cr": "18"
"traits":
- "desc": "The sibriex casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt will:\
    \ [[5. Mechanics/Spells/Command.md|command]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
    \ [[5. Mechanics/Spells/Hold Monster.md|hold monster]]\n\n1/day: [[5. Mechanics/Spells/Feeblemind.md|feeblemind]]"
  "name": "spells"
- "desc": "The sibriex emits an aura of corruption 30 feet in every direction. Vegetation\
    \ withers in the aura, and the ground in the aura is difficult terrain for other\
    \ creatures. Any creature that starts its turn in the aura must succeed on a DC\
    \ 20 Constitution saving throw or take dice: 4d6|avg (4d6) poison damage.\
    \ A creature that succeeds on the save is immune to this sibriex's Contamination\
    \ for 24 hours."
  "name": "Contamination"
- "desc": "If the sibriex fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The sibriex has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The sibriex makes three Chain attacks, and it uses Squirt Bile."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d12 + 7|avg (2d12 + 7) force damage."
  "name": "Chain"
- "desc": "The sibriex targets one creature it can see within 120 feet of it. The\
    \ target must succeed on a DC 20 Dexterity saving throw or take dice: 9d6|avg\
    \ (9d6) acid damage."
  "name": "Squirt Bile"
- "desc": "The sibriex targets up to three creatures it can see within 120 feet of\
    \ it. Each target must make a DC 20 Constitution saving throw. On a successful\
    \ save, a creature becomes immune to this sibriex's Warp Creature. On a failed\
    \ save, the target is [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]], which\
    \ causes it to also gain 1 level of [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]].\
    \ While [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way, the\
    \ target must repeat the saving throw at the start of each of its turns. Three\
    \ successful saves against the poison end it, and ending the poison removes any\
    \ levels of [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]] caused by\
    \ it. Each failed save causes the target to gain another level of [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]].\
    \ Once the target reaches 6 levels of [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
    \ it dies and instantly transforms into a living [[5. Mechanics/Bestiary/Fiend/Manes.md|manes]]\
    \ under the sibriex's control. The transformation of the body can be undone only\
    \ by a [[5. Mechanics/Spells/Wish.md|wish]] spell."
  "name": "Warp Creature"
"legendary_actions":
- "desc": "The sibriex uses Spellcasting."
  "name": "Cast a Spell"
- "desc": "The sibriex uses Squirt Bile."
  "name": "Spray Bile"
- "desc": "The sibriex uses Warp Creature."
  "name": "Warp (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/sibriex-mpmm.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```