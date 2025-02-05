---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 
environments: 
size: Large
tags:
- compendium/src/5e/tce
- monster/cr/
- monster/size/large
- monster/type/celestial
aliases: ["Celestial Spirit (Defender)"]
---
# [Celestial Spirit (Defender)](compendium\bestiary\celestial/celestial-spirit-defender-tce.md)
*Source: Tasha's Cauldron of Everything p. 110*

```statblock
"name": "Celestial Spirit (Defender) (TCE)"
"size": "Large"
"type": "celestial"
"alignment": "Unaligned"
"ac_class": "13 + the level of the spell (natural armor)"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "16"
"speed": "30 ft., fly 40 ft."
"damage_resistances": "radiant"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [frightened](/compendium/rules/conditions.md#Frightened)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Celestial, understands the languages you speak"
"actions":
- "desc": "The celestial makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d10 + 3 + the spell's level radiant damage, and the celestial can choose\
    \ itself or another creature it can see within 10 feet of the target. The chosen\
    \ creature gains 1d10 temporary hit points."
  "name": "Radiant Mace"
- "desc": "The celestial touches another creature. The target magically regains hit\
    \ points equal to 2d8 + the spell's level."
  "name": "Healing Touch (1/Day)"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```