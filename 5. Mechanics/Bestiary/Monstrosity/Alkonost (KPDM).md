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
  - monster/type/monstrosity
aliases:
  - Alkonost
---
# [[5. Mechanics\Bestiary\Monstrosity\Alkonost (KPDM).md|Alkonost]]
*Source: Deep Magic p. 296*

The alkonost is a graceful bird that has the face of a beautiful man or woman. Flocks of these creatures lurk on the edges of dark clouds. Their plumage is the color of storms, ranging from light gray to dark slate with a shimmer of green or violet hue on the eldest.

## Familiar

If an alkonost agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the alkonost senses, as long as they are within 1 mile of each other. While the alkonost is within 10 feet of its master, the master shares the alkonost's One with Wind trait. If its master causes it physical harm, or if it simply chooses to do so, the alkonost will abandon its service as a familiar, ending the telepathic bond.

```statblock
"name": "Alkonost (KPDM)"
"size": "Small"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "17"
"hit_dice": "5d6"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "10"
  - !!int "7"
  - !!int "14"
  - !!int "13"
"speed": "20 ft., fly 40 ft."
"damage_resistances": "lightning"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common"
"cr": "1/2"
"traits":
  - "desc": "An alkonost is immune to the effects of magical and natural wind, including\
      \ effects that would force it to move, would impose disadvantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks, or would force it to land when flying."
    "name": "One with Wind"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4\
      \ (1d4 + 2) slashing damage. The alkonost's weapon attacks deal an extra 2 (d4)\
      \ lightning damage if it is within 1 mile of a lightning storm."
    "name": "Claws"
  - "desc": "The alkonost sings a beautiful melody. Each creature within 30 feet of\
      \ it that can hear the melody must succeed on a DC 12 Charisma saving throw\
      \ or take 7 (2d6) lightning damage the next time it moves."
    "name": "Charged Melody (Recharge 6)"
"source":
  - "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
