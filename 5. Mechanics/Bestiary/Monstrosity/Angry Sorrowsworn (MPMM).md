---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 13
environments: 'underdark, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/13
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Angry Sorrowsworn
---
# [[5. Mechanics\Bestiary\Monstrosity\Angry Sorrowsworn (MPMM).md|Angry Sorrowsworn]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 222, Mordenkainen's Tome of Foes p. 231*

Relying on violence to sustain their existence, angry sorrowsworn—sometimes called the Angry—grow more powerful when their foes fight back. If a creature opts not to attack, though, this sorrowsworn becomes confused, and its attacks weaken. It also has two heads, which bicker with each other incessantly.

## Sorrowsworn

The Shadowfell's pervasive melancholy sometimes gives rise to strange incarnations of the plane's bleak nature. Sorrowsworn embody the forms of suffering inherent to the shadowy landscape and visit horror on those who stumble into their midst. Each sorrowsworn personifies a different aspect of despair or distress.

```statblock
"name": "Angry Sorrowsworn (MPMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Typically  Neutral Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "255"
"hit_dice": "30d8 + 120"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "19"
  - !!int "8"
  - !!int "13"
  - !!int "6"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+11"
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 21"
"languages": "Common"
"cr": "13"
"traits":
  - "desc": "The sorrowsworn has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]],\
      \ or knocked [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]."
    "name": "Two Heads"
  - "desc": "If another creature deals damage to the sorrowsworn, the sorrowsworn's\
      \ attack rolls have advantage until the end of its next turn, and the first\
      \ time it hits with a Hook attack on its next turn, the attack's target takes\
      \ an extra 19 (3d12) psychic damage.\n\nOn its turn, the sorrowsworn has disadvantage\
      \ on attack rolls if no other creature has dealt damage to it since the end\
      \ of its last turn."
    "name": "Rising Anger"
"actions":
  - "desc": "The sorrowsworn makes two Hook attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16\
      \ (2d12 + 3) piercing damage."
    "name": "Hook"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Monstrosity/token/angry-sorrowsworn-mpmm.webp"
```
^statblock

## Environment

underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
