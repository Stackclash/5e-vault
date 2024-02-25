---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/7
  - monster/environment/forest
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/size/large
  - monster/type/giant
statblock: inline
aliases:
  - Venom Troll
---
# [[5. Mechanics\Bestiary\Giant\Venom Troll.md|Venom Troll]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 248, Mordenkainen's Tome of Foes p. 245*

A troll that survives massive doses of poison might transform into a venom troll. Lingering poison infuses the troll's blood and tissue, and poison leaks from the pores to coat the troll's fangs and claws. These creatures are especially dangerous in close combat because poison drips off their flesh and sprays out from every wound they receive.

## Trolls

Trolls that are nearly obliterated but survive and regenerate from mere scraps of flesh can display bizarre features. Radically transformed trolls like the rot trolls, spirit trolls, and venom trolls that follow are especially likely to arise when trolls regenerate in the presence of magical emanations, planar energy, disease, or death on a vast scale, or if their bodies were damaged by elemental forces. These unusual forms can also be produced and shaped by the ritual magic of evil spellcasters or by trolls' own practices, as is the case for dire trolls.

### Vaprak the Destroyer

Although trolls are rarely devout and seldom ponder spiritual questions, some fear and venerate the entity known as Vaprak the Destroyer. Vaprak's true nature is something of a mystery, but Vaprak is always portrayed as a horrid, misshapen, greenish creature strongly resembling a troll. Vaprak is given to fits of mindless destruction and uncontrollably fears the plots and ambitions of other deities.

Vaprak's troll worshipers believe this god devours the souls of those who have been cooked or digested (slain by fire or acid). Otherwise, the god spits the soul back into the world to regenerate a new body.

```statblock
"name": "Venom Troll"
"size": "Large"
"type": "giant"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"hp": !!int "94"
"hit_dice": "9d10 + 45"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Giant"
"cr": "7"
"traits":
- "desc": "When the troll takes damage of any type but psychic, each creature within\
    \ 5 feet of the troll takes dice: 2d8|avg (2d8) poison damage."
  "name": "Poison Splash"
- "desc": "The troll regains 10 hit points at the start of each of its turns. If the\
    \ troll takes acid or fire damage, this trait doesn't function at the start of\
    \ the troll's next turn. The troll dies only if it starts its turn with 0 hit\
    \ points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The troll makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage plus dice: 1d8|avg\
    \ (1d8) poison damage, and the creature is [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ until the start of the troll's next turn."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) slashing damage plus dice: 1d8|avg\
    \ (1d8) poison damage."
  "name": "Claws"
- "desc": "The troll slices itself with a claw, releasing a spray of poison in a 15-foot\
    \ cube. The troll takes dice: 2d6|avg (2d6) slashing damage (this damage can't\
    \ be reduced in any way). Each creature in the area must make a DC 16 Constitution\
    \ saving throw. On a failed save, a creature takes dice: 4d8|avg (4d8) poison\
    \ damage and is [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] for 1 minute.\
    \ On a successful save, the creature takes half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]].\
    \ A [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] creature can repeat the\
    \ saving throw at the end of each of its turns, ending the effect on itself on\
    \ a success."
  "name": "Venom Spray (Recharge 6)"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Giant/token/venom-troll-mpmm.webp"
```
^statblock

## Environment

forest, swamp, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
