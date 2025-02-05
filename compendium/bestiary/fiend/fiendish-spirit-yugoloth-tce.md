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
- monster/type/fiend
aliases: ["Fiendish Spirit (Yugoloth)"]
---
# [Fiendish Spirit (Yugoloth)](compendium\bestiary\fiend/fiendish-spirit-yugoloth-tce.md)
*Source: Tasha's Cauldron of Everything p. 112*

```statblock
"name": "Fiendish Spirit (Yugoloth) (TCE)"
"size": "Large"
"type": "fiend"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"stats":
- !!int "13"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "10"
- !!int "16"
"speed": "40 ft."
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"traits":
- "desc": "The fiend has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The fiend makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d8 + 3 + the spell's level slashing damage. Immediately after the attack\
    \ hits or misses, the fiend can magically teleport up to 30 feet to an unoccupied\
    \ space it can see."
  "name": "Claws"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```