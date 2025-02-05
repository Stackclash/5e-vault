---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1-2
  - monster/size/tiny
  - monster/type/fiend
aliases:
  - Infernal Viper
---
# [[5. Mechanics\Bestiary\Fiend\Infernal Viper (KPDM).md|Infernal Viper]]
*Source: Deep Magic p. 297*

Infernal vipers resemble earthly vipers, but for the red and black patterns of their scales. They roam the Hells, tormenting the damned souls with their painful bites and burning venom. They have a dim intelligence that makes them more dangerous than common snakes.

## Familiar

If an infernal viper agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the infernal viper senses, as long as they are within 1 mile of each other. While the infernal viper is within 10 feet of its master, the master gains the viper's resistance to fire damage. If its master causes it physical harm, or if it simply chooses to do so, the viper will abandon its service as a familiar, breaking the telepathic bond.

```statblock
"name": "Infernal Viper (KPDM)"
"size": "Tiny"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "28"
"hit_dice": "8d4 + 8"
"stats":
- !!int "5"
- !!int "17"
- !!int "13"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"damage_resistances": "fire"
"senses": "blindsight 10 ft., passive Perception 13"
"languages": "understands Infernal but can't speak"
"cr": "1/2"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage; target must make a DC 13 Constitution saving throw, taking\
    \ 5 (2d4) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Bite"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
