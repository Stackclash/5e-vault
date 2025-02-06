---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(DMG)
  - monster\Cr
  - monster\Size\Medium
  - monster\Type\Undead
aliases:
  - Avatar of Death (DMG)
---
# [[5. Mechanics\Bestiary\Undead\Avatar Of Death (DMG).md|Avatar of Death (DMG)]]
*Source: Dungeon Master's Guide p. 164, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Summoned by the "Skull" card from the [[5. Mechanics/Items/Deck Of Many Things.md|Deck of Many Things]].

```statblock
"name": "Avatar Of Death (DMG)"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
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
"image": "5. Mechanics/Bestiary/Undead/token/avatar-of-death.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
