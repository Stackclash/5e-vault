---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 
environments: 
size: Medium
tags:
- compendium/src/5e/dmg
- monster/cr/
- monster/size/medium
- monster/type/undead
aliases: ["Avatar of Death (DMG)"]
---
# [Avatar of Death (DMG)](compendium\bestiary\undead/avatar-of-death-dmg.md)
*Source: Dungeon Master's Guide p. 164, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Summoned by the "Skull" card from the [Deck of Many Things](compendium/items/deck-of-many-things.md).

```statblock
"name": "Avatar of Death (DMG) (DMG)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
"speed": "60 ft., fly 60 ft. (hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [frightened](/compendium/rules/conditions.md#Frightened),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [petrified](/compendium/rules/conditions.md#Petrified),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., truesight 60 ft., passive Perception 13"
"languages": "all languages known to its summoner"
"traits":
- "desc": "The avatar can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- "desc": "The avatar is immune to features that turn undead."
  "name": "Turn Immunity"
"actions":
- "desc": "The avatar sweeps its spectral scythe through a creature within 5 feet\
    \ of it, dealing 7 (1d8 + 3) slashing damage plus 4 (1d8) necrotic damage."
  "name": "Reaping Scythe"
"source":
- "DMG"
- "TCE"
"image": "compendium/bestiary/undead/token/avatar-of-death.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```