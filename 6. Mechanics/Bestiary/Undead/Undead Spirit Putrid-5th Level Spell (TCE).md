---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
"name": "Undead Spirit (Putrid, 5th-Level Spell)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "50"
"stats":
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "4"
- !!int "10"
- !!int "9"
"speed": "walk 30 ft., fly 40 ft. (ghostly only; hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spirit can move through other creatures and objects as if they were\
    \ difficult terrain. If it ends its turn inside an object, it is shunted to the\
    \ nearest unoccupied space and takes dice: 1d10|avg (1d10) force damage for\
    \ every 5 feet traveled."
  "name": "Incorporeal Passage (Ghostly Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Any creature, other than you, that starts its turn within 5 feet of the\
    \ spirit must succeed on a Constitution saving throw against your spell save DC\
    \ or be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] until the start of\
    \ its next turn."
  "name": "Festering Aura (Putrid Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spirit makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one creature. Hit: 1d8 + 3 + summonSpellLevel necrotic damage, and\
    \ the creature must succeed on a Wisdom saving throw against your spell save DC\
    \ or be [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] of the undead\
    \ until the end of the target's next turn."
  "name": "Deathly Touch (Ghostly Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: the summoner's spell attack modifier to hit, range\
    \ 150 ft., one target. Hit: 2d4 + 3 + summonSpellLevel necrotic damage."
  "name": "Grave Bolt (Skeletal Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d6 + 3 + summonSpellLevel slashing damage. If the\
    \ target is [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]], it must succeed\
    \ on a Constitution saving throw against your spell save DC or be [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]]\
    \ until the end of its next turn."
  "name": "Rotting Claw (Putrid Only)"
"source":
- "TCE"
"image": "/compendium/bestiary/undead/token/undead-spirit.png"
aliases: ["Undead Spirit (Putrid, 5th-Level Spell)"]
---
# Undead Spirit (Putrid, 5th-Level Spell)
*Source: Tasha's Cauldron of Everything p. 114*  

```ad-statblock
title: Undead Spirit (Putrid, 5th-Level Spell)
![[/6. Mechanics/Bestiary/Undead/Token/undead-spirit.png#token]]
*Medium undead, Unaligned*

- **Armor Class** 16 (natural armor)
- **Hit Points** 50  (30 + 10 for each spell level above 3rd)
- **Speed** walk 30 ft., fly 40 ft. (ghostly only; hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|16 (+3)|15 (+2)| 4 (-3)|10 (+0)| 9 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** necrotic, poison
- **Condition Immunities** exhaustion, frightened, paralyzed, poisoned
- **Languages** understands the languages you speak
- **Challenge** 

## Traits

***Incorporeal Passage (Ghostly Only).*** The spirit can move through other creatures and objects as if they were difficult terrain. If it ends its turn inside an object, it is shunted to the nearest unoccupied space and takes `dice: 1d10` (`1d10`) force damage for every 5 feet traveled.

***Festering Aura (Putrid Only).*** Any creature, other than you, that starts its turn within 5 feet of the spirit must succeed on a Constitution saving throw against your spell save DC or be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] until the start of its next turn.

## Actions

***Multiattack.*** The spirit makes a number of attacks equal to half this spell's level (rounded down).

***Deathly Touch (Ghostly Only).*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one creature. Hit: `1d8 + 3 + summonSpellLevel` necrotic damage, and the creature must succeed on a Wisdom saving throw against your spell save DC or be [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] of the undead until the end of the target's next turn.

***Grave Bolt (Skeletal Only).*** *Ranged Spell Attack:* the summoner's spell attack modifier to hit, range 150 ft., one target. Hit: `2d4 + 3 + summonSpellLevel` necrotic damage.

***Rotting Claw (Putrid Only).*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d6 + 3 + summonSpellLevel` slashing damage. If the target is [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]], it must succeed on a Constitution saving throw against your spell save DC or be [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]] until the end of its next turn.
```
^statblock