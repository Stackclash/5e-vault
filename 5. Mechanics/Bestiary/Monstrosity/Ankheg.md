---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'grassland, forest'
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\2
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Size\Large
  - monster\Type\Monstrosity
aliases:
  - Ankheg
---
# [[5. Mechanics\Bestiary\Monstrosity\Ankheg.md|Ankheg]]
*Source: Monster Manual p. 21. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

An ankheg resembles an enormous many-legged insect, its long antennae twitching in response to any movement around it. Its legs end in sharp hooks adapted for burrowing and grasping its prey, and its powerful mandibles can snap a small tree in half.

## Lurkers in the Earth

The ankheg uses its powerful mandibles to dig winding tunnels deep beneath the ground. When it hunts, an ankheg burrows upward, waiting below the surface until its antennae detect movement from above. Then it bursts from the earth and seizes prey in its mandibles, crushing and grinding while it secretes acidic digestive enzymes. These enzymes help dissolve a victim for easy swallowing, but the ankheg can also squirt acid to take down foes.

## Bane of Field and Forest

Although ankhegs receive a certain portion of their nutrients from the soil through which they burrow, they must supplement their diet with fresh meat. Pastures teeming with grazing livestock and forests rife with game are an ankheg's prime hunting grounds. Ankhegs are thus the bane of farmers and rangers everywhere.

## Earthen Tunnels

As it burrows through earth, the ankheg leaves a narrow, partially collapsed tunnel in its wake. In these tunnels, one might find the remnants of molted ankheg chitin, hatched ankheg eggs, or the grisly remains of ankheg victims, including coins or other treasures scattered during the creature's attack.

```statblock
"name": "Ankheg"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor; 11 while prone"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "17"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "13"
- !!int "6"
"speed": "30 ft., burrow 10 ft."
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "2"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller\
    \ creature, it is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] (escape\
    \ DC 13). Until this grapple ends, the ankheg can bite only the [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ creature and has advantage on attack rolls to do so."
  "name": "Bite"
- "desc": "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided\
    \ that it has no creature [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]].\
    \ Each creature in that line must make a DC 13 Dexterity saving throw, taking\
    \ 10 (3d6) acid damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Acid Spray (Recharge 6)"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/ankheg.webp"
```
^statblock

## Environment

grassland, forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
