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
aliases: ["Celestial Spirit (Avenger)"]
---
# [Celestial Spirit (Avenger)](compendium\bestiary\celestial/celestial-spirit-avenger-tce.md)
*Source: Tasha's Cauldron of Everything p. 110*

```statblock
"name": "Celestial Spirit (Avenger) (TCE)"
"size": "Large"
"type": "celestial"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
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
- "desc": "Ranged Weapon Attack: YourSpellAttack to hit, range 150/600 ft., one\
    \ target. Hit: 2d6 + 2 + the spell's level radiant damage."
  "name": "Radiant Bow"
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