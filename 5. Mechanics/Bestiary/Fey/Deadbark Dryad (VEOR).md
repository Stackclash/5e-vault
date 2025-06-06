---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 13
environments: null
size: Medium
tags:
  - compendium/src/5e/veor
  - monster/cr/13
  - monster/size/medium
  - monster/type/fey
aliases:
  - Deadbark Dryad
---
# [[5. Mechanics\Bestiary\Fey\Deadbark Dryad (VEOR).md|Deadbark Dryad]]
*Source: Vecna: Eve of Ruin p. 216*

When a dryad fails to protect its wilderness home from a great evil and is unable to forgive itself, the dryad might transform into a wicked Fey monster called a deadbark dryad. Such dryads relinquish any compassion they once felt for living beings and instead harbor hatred for anyone who dares to invade their rotted demesne.

The wilds around a deadbark dryad become malignant, souring into a swampy morass of stinging nettles and noxious muck. Deadbark dryads are immune to this toxic bog's deleterious effects.

A deadbark dryad is typically bound to the spot where it failed to protect its charge. When a dryad transforms into a deadbark dryad, it becomes stronger and more violent, and it typically gains a renewed dedication to protecting its now-fetid domain. Most deadbark dryads would rather fight to the death than allow any intrusion into their homes.

Deadbark dryads are most often found on Krynn, but occasionally they are found on other worlds where magic and trees are plentiful.

```statblock
"name": "Deadbark Dryad (VEOR)"
"size": "Medium"
"type": "fey"
"alignment": "typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "187"
"hit_dice": "22d8 + 88"
"modifier": !!int "3"
"stats":
  - !!int "17"
  - !!int "16"
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "constitution": "+9"
  - "charisma": "+9"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+8"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "Elvish, Sylvan"
"cr": "13"
"traits":
  - "desc": "Difficult terrain composed of vegetation, such as foliage or thorns,\
      \ doesn't cost the dryad extra movement."
    "name": "Bramble Walk"
  - "desc": "The dryad has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The dryad can communicate with Beasts and Plants as if they shared a\
      \ language."
    "name": "Speak with Beasts and Plants"
"actions":
  - "desc": "The dryad makes two Poisonous Thorn attacks and one Sapping Vine attack."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 120\
      \ ft., one target. Hit: 13 (4d4 + 3) piercing damage plus 10 (3d6) poison\
      \ damage. If the target is a creature, it must succeed on a DC 17 Constitution\
      \ saving throw or have the [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ condition until the start of the dryad's next turn."
    "name": "Poisonous Thorn"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 30 ft., one target. Hit: The\
      \ target has the [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] condition\
      \ (escape DC 16). Until the grapple ends, the target has the [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
      \ condition, and the dryad can't use the same vine on another target. A creature\
      \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] in this way takes\
      \ 13 (3d8) necrotic damage at the start of its turn.\n\nThe dryad has six vines.\
      \ Each vine can be attacked (AC 20; 10 hit points; immunity to poison and psychic\
      \ damage). Destroying a vine deals no damage to the dryad, but any creature\
      \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] by that vine no longer\
      \ has the [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] condition. All\
      \ vines immediately wither and disappear when the dryad is reduced to 0 hit\
      \ points."
    "name": "Sapping Vine"
  - "desc": "The dryad casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt\
      \ will: [[5. Mechanics/Spells/Druidcraft.md|Druidcraft]]\n\n2/day each: [[5. Mechanics/Spells/Pass Without Trace.md|Pass\
      \ without Trace]], [[5. Mechanics/Spells/Spike Growth.md|Spike Growth]]\n\
      \n1/day: [[5. Mechanics/Spells/Dispel Magic.md|Dispel Magic]]"
    "name": "Spellcasting"
"source":
  - "VEoR"
"image": "5. Mechanics/Bestiary/Fey/token/deadbark-dryad-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
