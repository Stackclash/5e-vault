---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Medium
alignment: Neutral Evil
ac: 20
hp: half the hit point maximum of its summoner
type: undead
tags:
  - monster
  - compendium/src/5e/dmg
  - monster/cr/
  - monster/size/medium
  - monster/type/undead
aliases:
  - Avatar of Death
cr: null
---
# [[/5. Mechanics/Bestiary/Undead/Avatar Of Death (DMG).md|Avatar of Death]]
*Source: Dungeon Master's Guide p. 164. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Summoned by the "Skull" card from the [[/5. Mechanics/Items/Deck Of Many Things.md|Deck of Many Things]].

```statblock
"name": "Avatar Of Death (DMG)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": "half the hit point maximum of its summoner"
"modifier": !!int "3"
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
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., [[/5. Mechanics/Rules/Senses.md#Truesight|truesight]]\
  \ 60 ft., passive Perception 13"
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
"image": "/5. Mechanics/Bestiary/Undead/token/avatar-of-death-dmg.webp"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
