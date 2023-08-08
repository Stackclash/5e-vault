---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/medium
- monster/type/elemental
statblock: inline
---
# Elemental Spirit (9th-level Spell)
*Source: Tasha's Cauldron of Everything p. 111*  

```statblock
"name": "Elemental Spirit (9th-level Spell)"
"size": "Medium"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "100"
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
"image": "6. Mechanics/Bestiary/Elemental/token/elemental-spirit.png"
```
^statblock