---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/0
  - monster/size/tiny
  - monster/type/aberration
aliases:
  - Zoog
---
# [[5. Mechanics\Bestiary\Aberration\Zoog (KPDM).md|Zoog]]
*Source: Deep Magic p. 300*

Alien-looking creatures, zoogs are intelligent and will serve an evil-aligned spellcaster as a familiar with the correct sort of inducement (normally the sacrifice of a cat or other feline creature).

## Familiar

If a zoog agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the zoog senses, as long as they are within 1 mile of each other. If its master causes it physical harm, or if it simply chooses to do so, the zoog will abandon its service as a familiar, breaking the telepathic bond.

```statblock
"name": "Zoog (KPDM)"
"size": "Tiny"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "3"
"hit_dice": "1d4 + 1"
"modifier": !!int "3"
"stats":
  - !!int "3"
  - !!int "16"
  - !!int "12"
  - !!int "11"
  - !!int "10"
  - !!int "8"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Deep Speech, Void Speech"
"cr": "0"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing\
      \ damage."
    "name": "Bite"
"source":
  - "KPDM"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/CCodex/zoog_token.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
