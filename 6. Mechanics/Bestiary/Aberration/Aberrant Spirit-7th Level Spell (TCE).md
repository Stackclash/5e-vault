---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/medium
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
"name": "Aberrant Spirit (7th-level Spell)"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "70"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft., fly 30 ft. (beholderkin only; hover)"
"damage_immunities": "psychic"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Deep Speech, understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The aberration regains 5 hit points at the start of its turn if it has\
    \ at least 1 hit point."
  "name": "Regeneration (Slaad Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "At the start of each of the aberration's turns, each creature within 5\
    \ feet of the aberration must succeed on a Wisdom saving throw against your spell\
    \ save DC or take dice: 2d6|avg (2d6) psychic damage, provided that the aberration\
    \ isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Whispering Aura (Star Spawn Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The aberration makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: the summoner's spell attack modifier to hit, range\
    \ 150 ft., one creature. Hit: 1d8 + 3 + summonSpellLevel psychic damage."
  "name": "Eye Ray (Beholderkin Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d10 + 3 + summonSpellLevel slashing damage. If the\
    \ target is a creature, it can't regain hit points until the start of the aberration's\
    \ next turn."
  "name": "Claws (Slaad Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Spell Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one creature. Hit: 1d8 + 3 + summonSpellLevel psychic damage."
  "name": "Psychic Slam (Star Spawn Only)"
"source":
- "TCE"
"image": "/compendium/bestiary/aberration/token/aberrant-spirit.png"
aliases: ["Aberrant Spirit (7th-level Spell)"]
---
# Aberrant Spirit (7th-level Spell)
*Source: Tasha's Cauldron of Everything p. 109*  

```ad-statblock
title: Aberrant Spirit (7th-level Spell)
![[/6. Mechanics/Bestiary/Aberration/Token/aberrant-spirit.png#token]]
*Medium aberration, Unaligned*

- **Armor Class** 18 (natural armor)
- **Hit Points** 70  (40 + 10 for each spell level above 4th)
- **Speed** walk 30 ft., fly 30 ft. (beholderkin only; hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|10 (+0)|15 (+2)|16 (+3)|10 (+0)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** psychic
- **Languages** Deep Speech, understands the languages you speak
- **Challenge** 

## Traits

***Regeneration (Slaad Only).*** The aberration regains 5 hit points at the start of its turn if it has at least 1 hit point.

***Whispering Aura (Star Spawn Only).*** At the start of each of the aberration's turns, each creature within 5 feet of the aberration must succeed on a Wisdom saving throw against your spell save DC or take `dice: 2d6` (`2d6`) psychic damage, provided that the aberration isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

## Actions

***Multiattack.*** The aberration makes a number of attacks equal to half this spell's level (rounded down).

***Eye Ray (Beholderkin Only).*** *Ranged Spell Attack:* the summoner's spell attack modifier to hit, range 150 ft., one creature. Hit: `1d8 + 3 + summonSpellLevel` psychic damage.

***Claws (Slaad Only).*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d10 + 3 + summonSpellLevel` slashing damage. If the target is a creature, it can't regain hit points until the start of the aberration's next turn.

***Psychic Slam (Star Spawn Only).*** *Melee Spell Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one creature. Hit: `1d8 + 3 + summonSpellLevel` psychic damage.
```
^statblock