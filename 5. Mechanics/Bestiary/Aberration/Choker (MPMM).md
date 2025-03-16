---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'forest, mountain, underdark'
size: Small
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1
  - monster/environment/forest
  - monster/environment/mountain
  - monster/environment/underdark
  - monster/size/small
  - monster/type/aberration
aliases:
  - Choker
---
# [[5. Mechanics/Bestiary/Aberration/Choker (MPMM).md|Choker]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 76, Mordenkainen's Tome of Foes p. 123*

The choker is a subterranean predator far more dangerous than its small size and spindly, rubbery limbs would suggest.

Chokers have cartilage rather than a bony skeleton. This flexible internal structure enables them to easily slip into narrow fissures and niches in the walls of their cavern homes. They lurk in these spots, silent and unseen, waiting for prey to happen by.

A choker's usual method for luring prey involves positioning the body of its latest catch just outside its hiding spot. Whenever it gets hungry, it tears off a few chunks of flesh to feed itself. In the meantime, the corpse serves to entice other curious folk—explorers from the surface world, drow, duergar, or the choker's favorite prey, goblins—to come within reach.

When a target presents itself, the choker's starfish-shaped hands dart out of its hiding spot, wrap around the victim's throat, and pin the unfortunate creature against the cavern wall. Because its arms are so long, the choker can keep its body deep inside the crevice where it hides, beyond the reach of most normal weapons.

Chokers tend to set their ambushes alone, rather than working in concert, but where one choker is found, others are likely to be nearby. They communicate through eerie, keening howls that travel long distances through caves and tunnels but are difficult to identify or locate in a typical echo-filled cavern.

```statblock
"name": "Choker (MPMM)"
"size": "Small"
"type": "aberration"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "4"
- !!int "12"
- !!int "7"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Deep Speech"
"cr": "1"
"traits":
- "desc": "The choker can take an extra action on its turn."
  "name": "Aberrant Quickness (Recharges after a Short or Long Rest)"
- "desc": "The choker can move through and occupy a space as narrow as 4 inches wide\
    \ without squeezing."
  "name": "Boneless"
- "desc": "The choker can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "The choker makes two Tentacle attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage. If the target is a Large or smaller creature, it is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 15). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
    \ and the choker can't use this tentacle on another target. The choker has two\
    \ tentacles. If this attack is a critical hit, the target also can't breathe or\
    \ speak until the grapple ends."
  "name": "Tentacle"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Aberration/token/choker-mpmm.webp"
```
^statblock

## Environment

forest, mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
