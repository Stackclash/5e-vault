---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 'grassland, forest, urban, desert'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/4
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/urban
  - monster/size/medium
  - monster/type/celestial
aliases:
  - Couatl
---
# [[5. Mechanics\Bestiary\Celestial\Couatl.md|Couatl]]
*Source: Monster Manual p. 43, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Couatls are benevolent serpentine beings of great intellect and insight. Their brilliantly colored wings and gentle manner speak to their celestial origins.

## Divine Caretakers

Couatls were created as guardians and caretakers by a benevolent god not worshiped since the dawn of time, and which is forgotten now by all but the couatls themselves. Most of the divine mandates given to these beings are long since fulfilled or failed. However, a number of couatls still watch over ancient power, await fulfillment of prophecy, or safeguard the heirs of creatures they once guided and protected. Regardless of a couatl's task, it prefers to remain hidden, revealing itself only as a last resort.

## Truth Tellers

A couatl can't lie, but it can withhold information, answer questions vaguely, or allow others to jump to the wrong conclusions if doing so is necessary to protect something, to keep promises, or to hide the secret of its existence.

## Ancient and Few

A couatl can live for ages without sustenance, even surviving without air, but these creatures can die of disease or the passage of time. A couatl can sense its end up to a century beforehand, but it has no insight into the manner of its demise. If a couatl has already accomplished what it set out to do, it accepts its fate. However, if its imminent death endangers the completion of its goals, it actively seeks out another couatl with which to produce offspring.

The mating ritual of couatls is a beautiful and elaborate dance of magic and light, which results in a gem-like egg from which a new couatl hatches. The parent that sought out the mate raises the newborn couatl and instructs it as to its duties, so that it can complete whatever task the parent leaves unfinished.

```statblock
"name": "Couatl"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"modifier": !!int "5"
"stats":
  - !!int "16"
  - !!int "20"
  - !!int "17"
  - !!int "18"
  - !!int "20"
  - !!int "18"
"speed": "30 ft., fly 90 ft."
"saves":
  - "constitution": "+5"
  - "wisdom": "+7"
  - "charisma": "+6"
"damage_resistances": "radiant"
"damage_immunities": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "truesight 120 ft., passive Perception 15"
"languages": "all, telepathy 120 ft."
"cr": "4"
"traits":
  - "desc": "The couatl's spellcasting ability is Charisma (spell save DC 14). It\
      \ can innately cast the following spells, requiring only verbal components:\n\
      \nAt will: [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]],\
      \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]]\n\
      \n3/day each: [[5. Mechanics/Spells/Bless.md|bless]], [[5. Mechanics/Spells/Create Food And Water.md|create food and water]],\
      \ [[5. Mechanics/Spells/Cure Wounds.md|cure wounds]], [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]],\
      \ [[5. Mechanics/Spells/Protection From Poison.md|protection from poison]], [[5. Mechanics/Spells/Sanctuary.md|sanctuary]],\
      \ [[5. Mechanics/Spells/Shield.md|shield]]\n\n1/day each: [[5. Mechanics/Spells/Dream.md|dream]],\
      \ [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]], [[5. Mechanics/Spells/Scrying.md|scrying]]"
    "name": "Innate Spellcasting"
  - "desc": "The couatl's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The couatl is immune to scrying and to any effect that would sense its\
      \ emotions, read its thoughts, or detect its location."
    "name": "Shielded Mind"
"actions":
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8\
      \ (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for\
      \ 24 hours. Until this poison ends, the target is [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]].\
      \ Another creature can use an action to shake the target awake."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller\
      \ creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 15). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
      \ and the couatl can't constrict another target."
    "name": "Constrict"
  - "desc": "The couatl magically polymorphs into a humanoid or beast that has a challenge\
      \ rating equal to or less than its own, or back into its true form. It reverts\
      \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
      \ or borne by the new form (the couatl's choice).\n\nIn a new form, the couatl\
      \ retains its game statistics and ability to speak, but its AC, movement modes,\
      \ Strength, Dexterity, and other actions are replaced by those of the new form,\
      \ and it gains any statistics and capabilities (except class features, legendary\
      \ actions, and lair actions) that the new form has but that it lacks. If the\
      \ new form has a bite attack, the couatl can use its bite in that form."
    "name": "Change Shape"
"source":
  - "MM"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Celestial/token/couatl.webp"
```
^statblock

## Environment

grassland, forest, urban, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
