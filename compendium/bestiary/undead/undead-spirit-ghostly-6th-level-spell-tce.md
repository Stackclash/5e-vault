---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tce
- monster/cr/
- monster/size/medium
- monster/type/undead
statblock: inline
aliases: ["Undead Spirit (Ghostly, 6th-Level Spell)"]
---
# [Undead Spirit (Ghostly, 6th-Level Spell)](compendium/bestiary/undead/undead-spirit-ghostly-6th-level-spell-tce.md)
*Source: Tasha's Cauldron of Everything p. 114*

```statblock
"name": "Undead Spirit (Ghostly, 6th-Level Spell) (TCE)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "60"
"stats":
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "4"
- !!int "10"
- !!int "9"
"speed": "30 ft., fly 40 ft. (ghostly only; hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#frightened), [paralyzed](/compendium/rules/conditions.md#paralyzed),\
  \ [poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- "desc": "The spirit can move through other creatures and objects as if they were\
    \ difficult terrain. If it ends its turn inside an object, it is shunted to the\
    \ nearest unoccupied space and takes dice: 1d10|avg (1d10) force damage for\
    \ every 5 feet traveled."
  "name": "Incorporeal Passage (Ghostly Only)"
- "desc": "Any creature, other than you, that starts its turn within 5 feet of the\
    \ spirit must succeed on a Constitution saving throw against your spell save DC\
    \ or be [poisoned](/compendium/rules/conditions.md#poisoned) until the start of\
    \ its next turn."
  "name": "Festering Aura (Putrid Only)"
"actions":
- "desc": "The spirit makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one creature. Hit: 1d8 + 3 + summonSpellLevel necrotic damage, and\
    \ the creature must succeed on a Wisdom saving throw against your spell save DC\
    \ or be [frightened](/compendium/rules/conditions.md#frightened) of the undead\
    \ until the end of the target's next turn."
  "name": "Deathly Touch (Ghostly Only)"
- "desc": "Ranged Spell Attack: the summoner's spell attack modifier to hit, range\
    \ 150 ft., one target. Hit: 2d4 + 3 + summonSpellLevel necrotic damage."
  "name": "Grave Bolt (Skeletal Only)"
- "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d6 + 3 + summonSpellLevel slashing damage. If the\
    \ target is [poisoned](/compendium/rules/conditions.md#poisoned), it must succeed\
    \ on a Constitution saving throw against your spell save DC or be [paralyzed](/compendium/rules/conditions.md#paralyzed)\
    \ until the end of its next turn."
  "name": "Rotting Claw (Putrid Only)"
"source":
- "TCE"
"image": "compendium/bestiary/undead/token/undead-spirit-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```