---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: null
size: Small
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1-2
  - monster/size/small
  - monster/type/beast
aliases:
  - Shocker Lizard
---
# [[5. Mechanics\Bestiary\Beast\Shocker Lizard (KPDM).md|Shocker Lizard]]
*Source: Deep Magic p. 293*

A social beast that dwells in swamps and forests, the shocker lizard can be a suitable familiar for a [[5. Mechanics/Classes/Wizard.md|wizard]] who specializes in lightning or storm magic. Taking a shocker lizard as a familiar requires an additional material component of 50 gp worth of fulgurite when the [[5. Mechanics/Spells/Find Familiar.md|find familiar]] spell is cast.

```statblock
"name": "Shocker Lizard (KPDM)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "15"
  - !!int "13"
  - !!int "2"
  - !!int "8"
  - !!int "3"
"speed": "40 ft., climb 20 ft., swim 20 ft."
"senses": "darkvision 30 ft., passive Perception 13"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The shocker lizard automatically detects any electrical discharge within\
      \ 100 feet."
    "name": "Electricity Sense"
  - "desc": "A shocker lizard's body generates a potent charge of electricity. A creature\
      \ that touches the lizard or makes a successful melee attack against it must\
      \ make a DC 10 Dexterity saving throw, taking 3 (d4) lightning damage on a failed\
      \ save, or half as much damage on a successful one. If other shocker lizards\
      \ are within 20 feet, the fields augment each other to a maximum of 24 (8d4)\
      \ lightning damage."
    "name": "Shock"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
      \ + 2) piercing damage and the target must make a DC 10 Dexterity saving throw,\
      \ taking 2 (d4) lightning damage on a failed save, or half as much damage on\
      \ a successful one."
    "name": "Bite"
"source":
  - "KPDM"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/CComp/Shocker%20Lizard.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
