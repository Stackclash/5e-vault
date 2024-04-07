---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tce
- monster/cr/
- monster/size/medium
- monster/type/elemental
statblock: inline
aliases: ["Elemental Spirit (7th-level Spell)"]
---
# [Elemental Spirit (7th-level Spell)](compendium/bestiary/elemental/elemental-spirit-7th-level-spell-tce.md)
*Source: Tasha's Cauldron of Everything p. 111*

```statblock
"name": "Elemental Spirit (7th-level Spell) (TCE)"
"size": "Medium"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "80"
"stats":
- !!int "18"
- !!int "15"
- !!int "17"
- !!int "4"
- !!int "10"
- !!int "16"
"speed": "40 ft., burrow 40 ft. (earth only), fly 40 ft. (air only hover), swim 40\
  \ ft. (water only)"
"damage_resistances": "lightning, thunder (Air only)"
"damage_immunities": "poison; fire (Fire only)"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [paralyzed](/compendium/rules/conditions.md#paralyzed), [petrified](/compendium/rules/conditions.md#petrified),\
  \ [poisoned](/compendium/rules/conditions.md#poisoned), [unconscious](/compendium/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Primordial, understands the languages you speak"
"traits":
- "desc": "The elemental can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous Form (Air, Fire, and Water Only)"
"actions":
- "desc": "The elemental makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d10 + 4 + summonSpellLevel bludgeoning damage (Air,\
    \ Earth, and Water only) or fire damage (Fire only)."
  "name": "Slam"
"source":
- "TCE"
"image": "compendium/bestiary/elemental/token/elemental-spirit-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```