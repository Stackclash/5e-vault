---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 13
environments: 'arctic, forest, hill, mountain, underdark'
size: Huge
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\13
  - monster\Environment\Arctic
  - monster\Environment\Forest
  - monster\Environment\Hill
  - monster\Environment\Mountain
  - monster\Environment\Underdark
  - monster\Size\Huge
  - monster\Type\Giant
aliases:
  - Dire Troll
---
# [[5. Mechanics\Bestiary\Giant\Dire Troll (MPMM).md|Dire Troll]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 246, Mordenkainen's Tome of Foes p. 243*

Trolls kill and eat almost anything—including, in rare cases, other trolls. This cannibalism has the effect of causing a troll to grow to an unusually large size. The resulting dire trolls crave more and more troll flesh to fuel their continued growth.

Dire trolls also increase their size by grafting flesh onto themselves. When a slab of quivering troll flesh is bound against a fresh wound on a dire troll, the dire troll's regenerative capacity incorporates the new mass into the troll's own musculature. Even more horrifying are the multiple arms, eyes, claws, and organs that dire trolls tear from their victims and graft onto themselves in this manner.

## Trolls

Trolls that are nearly obliterated but survive and regenerate from mere scraps of flesh can display bizarre features. Radically transformed trolls like the rot trolls, spirit trolls, and venom trolls that follow are especially likely to arise when trolls regenerate in the presence of magical emanations, planar energy, disease, or death on a vast scale, or if their bodies were damaged by elemental forces. These unusual forms can also be produced and shaped by the ritual magic of evil spellcasters or by trolls' own practices, as is the case for dire trolls.

### Vaprak the Destroyer

Although trolls are rarely devout and seldom ponder spiritual questions, some fear and venerate the entity known as Vaprak the Destroyer. Vaprak's true nature is something of a mystery, but Vaprak is always portrayed as a horrid, misshapen, greenish creature strongly resembling a troll. Vaprak is given to fits of mindless destruction and uncontrollably fears the plots and ambitions of other deities.

Vaprak's troll worshipers believe this god devours the souls of those who have been cooked or digested (slain by fire or acid). Otherwise, the god spits the soul back into the world to regenerate a new body.

```statblock
"name": "Dire Troll (MPMM)"
"size": "Huge"
"type": "giant"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "22"
- !!int "15"
- !!int "21"
- !!int "9"
- !!int "11"
- !!int "5"
"speed": "40 ft."
"saves":
  "Charisma": !!int "2"
  "Wisdom": !!int "5"
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Giant"
"cr": "13"
"traits":
- "desc": "The troll regains 10 hit points at the start of its turn. If the troll\
    \ takes acid or fire damage, it regains only 5 hit points at the start of its\
    \ next turn. The troll dies only if it is hit by an attack that deals 10 or more\
    \ acid or fire damage while the troll has 0 hit points."
  "name": "Regeneration"
"actions":
- "desc": " The troll makes one Bite attack and four Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 10\
    \ (1d8 + 6) piercing damage plus 5 (1d10) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 16\
    \ (3d6 + 6) slashing damage."
  "name": "Claws"
- "desc": "Each creature within 10 feet of the troll must make a DC 19 Dexterity saving\
    \ throw, taking 44 (8d10) slashing damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Whirlwind of Claws (Recharge 5-6)"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Giant/token/dire-troll-mpmm.webp"
```
^statblock

## Environment

arctic, forest, hill, mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
