---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/medium
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
"name": "Elemental Spirit (4th-level Spell)"
"size": "Medium"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "50"
"stats":
- !!int "18"
- !!int "15"
- !!int "17"
- !!int "4"
- !!int "10"
- !!int "16"
"speed": "walk 40 ft., fly 40 ft. (air only hover), burrow 40 ft. (earth only), swim\
  \ 40 ft. (water only)"
"damage_resistances": "lightning, thunder (Air only); piercing, slashing (Earth only);\
  \ acid (Water only)"
"damage_immunities": "poison; fire (Fire only)"
"condition_immunities": "exhaustion, paralyzed, petrified, poisoned, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Primordial, understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The elemental can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous Form (Air, Fire, and Water Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The elemental makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d10 + 4 + summonSpellLevel bludgeoning damage (Air,\
    \ Earth, and Water only) or fire damage (Fire only)."
  "name": "Slam"
"source":
- "TCE"
"image": "/compendium/bestiary/elemental/token/elemental-spirit.png"
aliases: ["Elemental Spirit (4th-level Spell)"]
---
# Elemental Spirit (4th-level Spell)
*Source: Tasha's Cauldron of Everything p. 111*  

```ad-statblock
title: Elemental Spirit (4th-level Spell)
![[/6. Mechanics/Bestiary/Elemental/Token/elemental-spirit.png#token]]
*Medium elemental, Unaligned*

- **Armor Class** 15 (natural armor)
- **Hit Points** 50  (50 + 10 for each spell level above 4th)
- **Speed** walk 40 ft., fly 40 ft. (air only hover), burrow 40 ft. (earth only), swim 40 ft. (water only)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|15 (+2)|17 (+3)| 4 (-3)|10 (+0)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** lightning, thunder (Air only); piercing, slashing (Earth only); acid (Water only)
- **Damage Immunities** poison; fire (Fire only)
- **Condition Immunities** exhaustion, paralyzed, petrified, poisoned, unconscious
- **Languages** Primordial, understands the languages you speak
- **Challenge** 

## Traits

***Amorphous Form (Air, Fire, and Water Only).*** The elemental can move through a space as narrow as 1 inch wide without squeezing.

## Actions

***Multiattack.*** The elemental makes a number of attacks equal to half this spell's level (rounded down).

***Slam.*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d10 + 4 + summonSpellLevel` bludgeoning damage (Air, Earth, and Water only) or fire damage (Fire only).
```
^statblock