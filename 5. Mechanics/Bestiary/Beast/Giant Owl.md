---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: 'forest, hill, arctic'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/arctic
  - monster/environment/forest
  - monster/environment/hill
  - monster/size/large
  - monster/type/beast
aliases:
  - Giant Owl
---
# [[5. Mechanics\Bestiary\Beast\Giant Owl.md|Giant Owl]]
*Source: Monster Manual p. 327. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Giant owls often befriend fey and other sylvan creatures and are guardians of their woodland realms.

```statblock
"name": "Giant Owl"
"size": "Large"
"type": "beast"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"modifier": !!int "2"
"stats":
  - !!int "13"
  - !!int "15"
  - !!int "12"
  - !!int "8"
  - !!int "13"
  - !!int "10"
"speed": "5 ft., fly 60 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Giant Owl, understands Common, Elvish, and Sylvan but can't speak them"
"cr": "1/4"
"traits":
  - "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's\
      \ reach."
    "name": "Flyby"
  - "desc": "The owl has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or sight."
    "name": "Keen Hearing and Sight"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6\
      \ + 1) slashing damage."
    "name": "Talons"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-owl.webp"
```
^statblock

## Environment

forest, hill, arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
