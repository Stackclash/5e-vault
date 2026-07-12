---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: []
size: Tiny
alignment: Unaligned
ac: 12
hp: 2
type: beast
tags:
  - monster
  - compendium/src/5e/cos
  - monster/cr/0
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Cat Skeleton
---
# [[/5. Mechanics/Bestiary/Beast/Cat Skeleton (COS).md|Cat Skeleton]]
*Source: Curse of Strahd p. 109*

```statblock
"name": "Cat Skeleton (COS)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"modifier": !!int "2"
"stats":
  - !!int "3"
  - !!int "15"
  - !!int "10"
  - !!int "3"
  - !!int "12"
  - !!int "7"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 13"
"languages": "understands all languages it spoke in life but can't speak"
"cr": "0"
"traits":
  - "desc": "The cat has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on smell."
    "name": "Keen Smell"
"actions":
  - "desc": "*Melee Weapon Attack:* +0 to hit, reach 5 ft., one target. *Hit:* 1 slashing\
      \ damage."
    "name": "Claws"
"source":
  - "CoS"
"image": "/5. Mechanics/Bestiary/Beast/token/cat-skeleton-cos.webp"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
