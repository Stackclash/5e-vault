---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/small
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Bestial Spirit (Air, 8th-Level Spell)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "50"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "4"
- !!int "14"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft. (land only), fly 60 ft. (air only), swim 30 ft.\
  \ (water only)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast can breathe only underwater."
  "name": "Water Breathing (Water Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby (Air Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast has advantage on an attack roll against a creature if at least\
    \ one of the beast's allies is within 5 feet of the creature and the ally isn't\
    \ [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Pack Tactics (Land and Water Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d8 + 4 + summonSpellLevel piercing damage."
  "name": "Maul"
"source":
- "TCE"
"image": "/compendium/bestiary/beast/token/bestial-spirit.png"
aliases: ["Bestial Spirit (Air, 8th-Level Spell)"]
---
# Bestial Spirit (Air, 8th-Level Spell)
*Source: Tasha's Cauldron of Everything p. 109*  

```ad-statblock
title: Bestial Spirit (Air, 8th-Level Spell)
![[/6. Mechanics/Bestiary/Beast/Token/bestial-spirit.png#token]]
*Small beast, Unaligned*

- **Armor Class** 19 (natural armor)
- **Hit Points** 50  (20 + 5 for each spell level above 2nd)
- **Speed** walk 30 ft., climb 30 ft. (land only), fly 60 ft. (air only), swim 30 ft. (water only)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|11 (+0)|16 (+3)| 4 (-3)|14 (+2)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 12
- **Languages** understands the languages you speak
- **Challenge** 

## Traits

***Water Breathing (Water Only).*** The beast can breathe only underwater.

***Flyby (Air Only).*** The beast doesn't provoke opportunity attacks when it flies out of an enemy's reach.

***Pack Tactics (Land and Water Only).*** The beast has advantage on an attack roll against a creature if at least one of the beast's allies is within 5 feet of the creature and the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

## Actions

***Multiattack.*** The beast makes a number of attacks equal to half this spell's level (rounded down).

***Maul.*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d8 + 4 + summonSpellLevel` piercing damage.
```
^statblock