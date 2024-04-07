---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/4
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/urban
- monster/size/medium
- monster/type/celestial
statblock: inline
aliases: ["Couatl"]
---
# [Couatl](compendium/bestiary/celestial/couatl.md)
*Source: Monster Manual p. 43. Available in the SRD.*

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
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "16"
- !!int "20"
- !!int "17"
- !!int "18"
- !!int "20"
- !!int "18"
"speed": "30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "5"
"damage_resistances": "radiant"
"damage_immunities": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "truesight 120 ft., passive Perception 15"
"languages": "all, telepathy 120 ft."
"cr": "4"
"traits":
- "desc": "The couatl's spellcasting ability is Charisma (spell save DC 14). It can\
    \ innately cast the following spells, requiring only verbal components:\n\nAt\
    \ will: [detect evil and good](compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](compendium/spells/detect-magic.md), [detect thoughts](compendium/spells/detect-thoughts.md)\n\
    \n1/day each: [dream](compendium/spells/dream.md), [greater restoration](compendium/spells/greater-restoration.md),\
    \ [scrying](compendium/spells/scrying.md)\n\n3/day each: [bless](compendium/spells/bless.md),\
    \ [create food and water](compendium/spells/create-food-and-water.md), [cure wounds](compendium/spells/cure-wounds.md),\
    \ [lesser restoration](compendium/spells/lesser-restoration.md), [protection from\
    \ poison](compendium/spells/protection-from-poison.md), [sanctuary](compendium/spells/sanctuary.md),\
    \ [shield](compendium/spells/shield.md)"
  "name": "innate"
- "desc": "The couatl's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "The couatl is immune to scrying and to any effect that would sense its\
    \ emotions, read its thoughts, or detect its location."
  "name": "Shielded Mind"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 5|avg (1d6 + 5) piercing damage, and the target must\
    \ succeed on a DC 13 Constitution saving throw or be [poisoned](/compendium/rules/conditions.md#poisoned)\
    \ for 24 hours. Until this poison ends, the target is [unconscious](/compendium/rules/conditions.md#unconscious).\
    \ Another creature can use an action to shake the target awake."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one Medium\
    \ or smaller creature. Hit: dice: 2d6 + 3|avg (2d6 + 3) bludgeoning damage,\
    \ and the target is [grappled](/compendium/rules/conditions.md#grappled) (escape\
    \ DC 15). Until this grapple ends, the target is [restrained](/compendium/rules/conditions.md#restrained),\
    \ and the couatl can't constrict another target."
  "name": "Constrict"
- "desc": "The couatl magically polymorphs into a humanoid or beast that has a challenge\
    \ rating equal to or less than its own, or back into its true form. It reverts\
    \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
    \ or borne by the new form (the couatl's choice).\n\nIn a new form, the couatl\
    \ retains its game statistics and ability to speak, but its AC, movement modes,\
    \ Strength, Dexterity, and other actions are replaced by those of the new form,\
    \ and it gains any statistics and capabilities (except class features, legendary\
    \ actions, and lair actions) that the new form has but that it lacks. If the new\
    \ form has a bite attack, the couatl can use its bite in that form."
  "name": "Change Shape"
"source":
- "MM"
- "SKT"
- "TftYP"
- "ToA"
- "WDMM"
- "EGW"
- "IDRotF"
- "PSX"
- "BMT"
"image": "compendium/bestiary/celestial/token/couatl.webp"
```
^statblock

## Environment

grassland, forest, urban, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```