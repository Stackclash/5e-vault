---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: null
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/fiend/devil
aliases:
  - Nupperibo
---
# [[5. Mechanics/Bestiary/Fiend/Nupperibo (MPMM).md|Nupperibo]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 196, Mordenkainen's Tome of Foes p. 168*

> [!quote] A quote from Mordenkainen  
> 
> A lemure emerges from the Styx wiped of memory, yet the patterns of evil it performed in life remain indelibly inscribed upon its soul...
> 
> But those who lacked ambition cannot climb the hierarchical ladder of the Hells.
> 
> They instead step down, becoming nupperibos.

No soul is turned away from the Nine Hells, but the truly worthless—those whose evil acts in life arose from carelessness and inaction more than anything else—are suitable only to become nupperibos. These pitiful creatures shuffle across the landscape, driven to purposeful action only when the clouds of swarming vermin that surround them find them prey to destroy or when a greater fiendish power commands it.

Individually, nupperibos are weak, but they're rarely alone and can be dangerous when gathered into packs. Clouds of stinging insects, [[5. Mechanics/Bestiary/Beast/Stirge.md|stirges]], and other vermin surround them in a terrifying, reeking sheath that torments any non-devil that draws near.

A nupperibo knows nothing but the desire to destroy non-Fiends. Once a nupperibo's vermin cloud senses a potential meal, any nearby nupperibos pursue that prey tirelessly until it or the nupperibos are slain, or some other potential victim crosses the devils' path and distracts them.

Nupperibos unthinkingly obey any command they receive telepathically from another devil. This blind loyalty makes them the easiest of infernal troops to lead into battle, but their presence in a legion does nothing to elevate its general's status.

```statblock
"name": "Nupperibo (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "16"
- !!int "11"
- !!int "13"
- !!int "3"
- !!int "8"
- !!int "1"
"speed": "20 ft."
"skillsaves":
  "Perception": !!int "1"
"damage_resistances": "acid, cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 20 ft. (blind beyond this radius), passive Perception 11"
"languages": "understands Infernal but can't speak"
"cr": "1/2"
"traits":
- "desc": "Any creature, other than a devil, that starts its turn within 20 feet of\
    \ one or more nupperibos must succeed on a DC 11 Constitution saving throw or\
    \ take 5 (2d4) acid damage. A creature within the areas of two or more nupperibos\
    \ makes the saving throw with disadvantage."
  "name": "Cloud of Vermin"
- "desc": "In the Nine Hells, the nupperibo can flawlessly track any creature that\
    \ has taken damage from any nupperibo's Cloud of Vermin within the previous 24\
    \ hours."
  "name": "Driven Tracker"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/nupperibo-mpmm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
