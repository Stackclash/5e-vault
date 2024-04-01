---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-8
  - monster/environment/hill
  - monster/environment/underdark
  - monster/size/tiny
  - monster/type/aberration
statblock: inline
aliases:
  - Neogi Hatchling
---
# [[5. Mechanics\Bestiary\Aberration\Neogi Hatchling.md|Neogi Hatchling]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 191, Volo's Guide to Monsters p. 179*

A neogi lives about a century. When an individual is rendered weak by advanced age, the other neogi in the group overpower it and inject it with a special poison. The toxin transforms the old neogi into a bloated mass of flesh. Younger neogi lay their eggs atop it, and when the hatchlings emerge, they devour the old neogi and one another until only a few of the strongest newborns are left. The surviving neogi hatchlings begin their lives under the control of adult neogi. They must learn about their society and earn a place in it, and each one starts its training by gaining mastery over an umber hulk.

## Neogi

> [!quote]- A quote from Mordenkainen  
> 
> Only the malevolent or the desperate do business with neogi. I generally advise against working with beings who view you as property or prey.

A neogi looks like an outsize spider with an eel's neck and head. It can poison the body and the mind of its targets and can subjugate even beings that are physically superior.

Neogi usually dwell in far-flung locations on the Material Plane, as well as in the Astral Plane and the Ethereal Plane. They left their home world long ago to conquer and devour creatures in other realms. During this era, they dominated umber hulks and used them to build sleek, spidery ships capable of traversing the multiverse.

```statblock
"name": "Neogi Hatchling"
"size": "Tiny"
"type": "aberration"
"alignment": "Typically  Lawful Evil"
"ac": !!int "11"
"hp": !!int "7"
"hit_dice": "3d4"
"stats":
- !!int "3"
- !!int "13"
- !!int "10"
- !!int "6"
- !!int "10"
- !!int "9"
"speed": "20 ft., climb 20 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- "desc": "The neogi has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], and magic can't\
    \ put the neogi to sleep."
  "name": "Mental Fortitude"
- "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 1|avg (1d4 + 1) piercing damage plus dice: 1d6|avg\
    \ (1d6) poison damage, and the target must succeed on a DC 10 Constitution saving\
    \ throw or become [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] for 1 minute.\
    \ A target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Bite"
"source":
- "MPMM"
- "VGM"
- "SjA"
"image": "5. Mechanics/Bestiary/Aberration/token/neogi-hatchling-mpmm.webp"
```
^statblock

## Environment

hill, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
