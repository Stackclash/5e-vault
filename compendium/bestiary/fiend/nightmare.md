---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 
size: Large
tags:
- compendium/src/5e/mm
- monster/cr/3
- monster/size/large
- monster/type/fiend
aliases: ["Nightmare"]
---
# [Nightmare](compendium\bestiary\fiend/nightmare.md)
*Source: Monster Manual p. 235, Curse of Strahd, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

A nightmare appears in a cloud of roiling smoke, its mane, tail, and hooves wreathed in flame. The creature's unearthly black form moves with supernatural speed, vanishing in a cloud of brimstone as quickly as it appeared.

## Dread Steed

Also called a "demon horse" or "hell horse," the nightmare serves as a steed for creatures of exceptional evil, carrying demons, devils, death knights, liches, night hags, and other vile monsters. It resembles a fiendish horse, and a nightmare's fiery red eyes betray its malevolent intelligence. A nightmare can be summoned from the Lower Planes, but unless a worthy sacrifice is offered to it as food upon its arrival, the nightmare displays no special loyalty to the creature it serves.

## Creating a Nightmare

Nightmares don't appear naturally in the multiverse. They must be created from pegasi. The ritual that creates a nightmare requires the torturous removal of a pegasus's wings, driving that noble creature to evil as it is transformed by dark magic.

```statblock
"name": "Nightmare"
"size": "Large"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "60 ft., fly 90 ft."
"damage_immunities": "fire"
"senses": "passive Perception 11"
"languages": "understands Abyssal, Common, and Infernal but can't speak "
"cr": "3"
"traits":
- "desc": "The nightmare can grant resistance to fire damage to anyone riding it."
  "name": "Confer Fire Resistance"
- "desc": "The nightmare sheds bright light in a 10-foot radius and dim light for\
    \ an additional 10 feet."
  "name": "Illumination"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage plus 7 (2d6) fire damage."
  "name": "Hooves"
- "desc": "The nightmare and up to three willing creatures within 5 feet of it magically\
    \ enter the Ethereal Plane from the Material Plane, or vice versa."
  "name": "Ethereal Stride"
"source":
- "MM"
- "CoS"
- "VEoR"
"image": "compendium/bestiary/fiend/token/nightmare.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```