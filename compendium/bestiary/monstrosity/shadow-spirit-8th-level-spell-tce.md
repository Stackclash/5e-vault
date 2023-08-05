---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Shadow Spirit (8th-level Spell)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "110"
"stats":
- !!int "13"
- !!int "16"
- !!int "15"
- !!int "4"
- !!int "10"
- !!int "16"
"speed": "walk 40 ft."
"damage_resistances": "necrotic"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spirit has advantage on attack rolls against [frightened](compendium/rules/conditions.md#frightened)\
    \ creatures."
  "name": "Terror Frenzy (Fury Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Any creature, other than you, that starts its turn within 5 feet of the\
    \ spirit has its speed reduced by 20 feet until the start of that creature's next\
    \ turn."
  "name": "Weight of Sorrow (Despair Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spirit makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d12 + 3 + summonSpellLevel cold damage."
  "name": "Chilling Rend"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spirit screams. Each creature within 30 feet of it must succeed on\
    \ a Wisdom saving throw against your spell save DC or be [frightened](compendium/rules/conditions.md#frightened)\
    \ for 1 minute. The [frightened](compendium/rules/conditions.md#frightened) creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Dreadful Scream (1/Day)"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in dim light or darkness, the spirit takes the Hide action."
  "name": "Shadow Stealth (Fear Only)"
"source":
- "TCE"
"image": "/compendium/bestiary/monstrosity/token/shadow-spirit.png"
aliases: ["Shadow Spirit (8th-level Spell)"]
---
# Shadow Spirit (8th-level Spell)
*Source: Tasha's Cauldron of Everything p. 114*  

```ad-statblock
title: Shadow Spirit (8th-level Spell)
![](/compendium/bestiary/monstrosity/token/shadow-spirit.png#token)
*Medium monstrosity, Unaligned*

- **Armor Class** 19 (natural armor)
- **Hit Points** 110  (35 + 15 for each spell level above 3rd)
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)|16 (+3)|15 (+2)| 4 (-3)|10 (+0)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 10
- **Damage Resistances** necrotic
- **Condition Immunities** frightened
- **Languages** understands the languages you speak
- **Challenge** 

## Traits

***Terror Frenzy (Fury Only).*** The spirit has advantage on attack rolls against [frightened](compendium/rules/conditions.md#frightened) creatures.

***Weight of Sorrow (Despair Only).*** Any creature, other than you, that starts its turn within 5 feet of the spirit has its speed reduced by 20 feet until the start of that creature's next turn.

## Actions

***Multiattack.*** The spirit makes a number of attacks equal to half this spell's level (rounded down).

***Chilling Rend.*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d12 + 3 + summonSpellLevel` cold damage.

***Dreadful Scream (1/Day).*** The spirit screams. Each creature within 30 feet of it must succeed on a Wisdom saving throw against your spell save DC or be [frightened](compendium/rules/conditions.md#frightened) for 1 minute. The [frightened](compendium/rules/conditions.md#frightened) creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

## Bonus Actions

***Shadow Stealth (Fear Only).*** While in dim light or darkness, the spirit takes the Hide action.
```
^statblock