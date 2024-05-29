---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/9
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/size/large
  - monster/type/giant
statblock: inline
aliases:
  - Rot Troll
---
# [[5. Mechanics/Bestiary/Giant/Rot Troll.md|Rot Troll]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 247, Mordenkainen's Tome of Foes p. 244*

A troll infused with waves of necrotic energy as it regenerates can develop a symbiotic relationship with that deathly power. The troll's body wither and the flesh falls away from the body as quickly, as it forms. Eventually a rot troll becomes unable to regenerate, though the troll still heals normally. The creature courses with necrotic energy; simply standing near a rot troll exposes other creatures to lethal emanations.

## Trolls

Trolls that are nearly obliterated but survive and regenerate from mere scraps of flesh can display bizarre features. Radically transformed trolls like the rot trolls, spirit trolls, and venom trolls that follow are especially likely to arise when trolls regenerate in the presence of magical emanations, planar energy, disease, or death on a vast scale, or if their bodies were damaged by elemental forces. These unusual forms can also be produced and shaped by the ritual magic of evil spellcasters or by trolls' own practices, as is the case for dire trolls.

### Vaprak the Destroyer

Although trolls are rarely devout and seldom ponder spiritual questions, some fear and venerate the entity known as Vaprak the Destroyer. Vaprak's true nature is something of a mystery, but Vaprak is always portrayed as a horrid, misshapen, greenish creature strongly resembling a troll. Vaprak is given to fits of mindless destruction and uncontrollably fears the plots and ambitions of other deities.

Vaprak's troll worshipers believe this god devours the souls of those who have been cooked or digested (slain by fire or acid). Otherwise, the god spits the soul back into the world to regenerate a new body.

```statblock
"name": "Rot Troll"
"size": "Large"
"type": "giant"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "138"
"hit_dice": "12d10 + 72"
"stats":
- !!int "18"
- !!int "13"
- !!int "22"
- !!int "5"
- !!int "8"
- !!int "4"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_immunities": "necrotic"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Giant"
"cr": "9"
"traits":
- "desc": "At the end of each of the troll's turns, each creature within 5 feet of\
    \ it takes 11 (2d10) necrotic damage, unless the troll has taken acid or fire\
    \ damage since the end of its last turn."
  "name": "Rancid Degeneration"
"actions":
- "desc": "The troll makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage plus 16 (3d10) necrotic damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 7 (2d6) necrotic damage."
  "name": "Claws"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Giant/token/rot-troll-mpmm.webp"
```
^statblock

## Environment

desert, forest, swamp, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
