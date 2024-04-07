---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dmg
- monster/cr/
- monster/size/medium
- monster/type/undead
statblock: inline
aliases: ["Avatar of Death (DMG)"]
---
# [Avatar of Death (DMG)](compendium/bestiary/undead/avatar-of-death-dmg.md)
*Source: Dungeon Master's Guide p. 164, Tasha's Cauldron of Everything. Available in the SRD.*

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
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed), [frightened](/compendium/rules/conditions.md#frightened),\
  \ [paralyzed](/compendium/rules/conditions.md#paralyzed), [petrified](/compendium/rules/conditions.md#petrified),\
  \ [poisoned](/compendium/rules/conditions.md#poisoned), [unconscious](/compendium/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., truesight 60 ft., passive Perception 13"
"languages": "all languages known to its summoner"
"traits":
- "desc": "The avatar can move through other creatures and objects as if they were\
    \ difficult terrain. It takes dice: 1d10|avg (1d10) force damage if it ends\
    \ its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "The avatar is immune to features that turn undead."
  "name": "Turn Immunity"
"actions":
- "desc": "The avatar sweeps its spectral scythe through a creature within 5 feet\
    \ of it, dealing dice: 1d8 + 3|avg (1d8 + 3) slashing damage plus dice: 1d8|avg\
    \ (1d8) necrotic damage."
  "name": "Reaping Scythe"
"source":
- "DMG"
- "TCE"
- "BMT"
"image": "compendium/bestiary/undead/token/avatar-of-death.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```