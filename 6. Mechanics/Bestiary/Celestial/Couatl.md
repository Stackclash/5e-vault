---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/urban
- monster/size/medium
- monster/type/celestial
statblock: true
statblock-link: "#^statblock"
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
"speed": "walk 30 ft., fly 90 ft."
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
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The couatl's spellcasting ability is Charisma (spell save DC 14). It can\
    \ innately cast the following spells, requiring only verbal components:\n\nAt\
    \ will: [[/6. Mechanics/Spells/detect-evil-and-good.md\|detect evil and good]],\
    \ [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]]\n\
    \n1/day each: [[/6. Mechanics/Spells/dream.md\|dream]], [[/6. Mechanics/Spells/greater-restoration.md\|greater restoration]],\
    \ [[/6. Mechanics/Spells/scrying.md\|scrying]]\n\n3/day each: [[/6. Mechanics/Spells/bless.md\|bless]],\
    \ [[/6. Mechanics/Spells/create-food-and-water.md\|create food and water]], [cure\
    \ wounds](/compendium/spells/cure-wounds.md), [[/6. Mechanics/Spells/lesser-restoration.md\|lesser restoration]],\
    \ [[/6. Mechanics/Spells/protection-from-poison.md\|protection from poison]], [[/6. Mechanics/Spells/sanctuary.md\|sanctuary]],\
    \ [[/6. Mechanics/Spells/shield.md\|shield]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The couatl's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The couatl is immune to scrying and to any effect that would sense its\
    \ emotions, read its thoughts, or detect its location."
  "name": "Shielded Mind"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 5|avg (1d6 + 5) piercing damage, and the target must succeed\
    \ on a DC 13 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]]\
    \ for 24 hours. Until this poison ends, the target is [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]].\
    \ Another creature can use an action to shake the target awake."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one Medium\
    \ or smaller creature. Hit: dice: 2d6 + 3|avg (2d6 + 3) bludgeoning damage,\
    \ and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape\
    \ DC 15). Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]],\
    \ and the couatl can't constrict another target."
  "name": "Constrict"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The couatl magically polymorphs into a humanoid or beast that has a challenge\
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
"image": "/compendium/bestiary/celestial/token/couatl.png"
aliases: ["Couatl"]
---
# Couatl
*Source: Monster Manual p. 43, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden*  

Couatls are benevolent serpentine beings of great intellect and insight. Their brilliantly colored wings and gentle manner speak to their celestial origins.

## Divine Caretakers

Couatls were created as guardians and caretakers by a benevolent god not worshiped since the dawn of time, and which is forgotten now by all but the couatls themselves. Most of the divine mandates given to these beings are long since fulfilled or failed. However, a number of couatls still watch over ancient power, await fulfillment of prophecy, or safeguard the heirs of creatures they once guided and protected. Regardless of a couatl's task, it prefers to remain hidden, revealing itself only as a last resort.

## Truth Tellers

A couatl can't lie, but it can withhold information, answer questions vaguely, or allow others to jump to the wrong conclusions if doing so is necessary to protect something, to keep promises, or to hide the secret of its existence.

## Ancient and Few

A couatl can live for ages without sustenance, even surviving without air, but these creatures can die of disease or the passage of time. A couatl can sense its end up to a century beforehand, but it has no insight into the manner of its demise. If a couatl has already accomplished what it set out to do, it accepts its fate. However, if its imminent death endangers the completion of its goals, it actively seeks out another couatl with which to produce offspring.

The mating ritual of couatls is a beautiful and elaborate dance of magic and light, which results in a gem-like egg from which a new couatl hatches. The parent that sought out the mate raises the newborn couatl and instructs it as to its duties, so that it can complete whatever task the parent leaves unfinished.

## Stat Block

```ad-statblock
title: Couatl
![[/6. Mechanics/Bestiary/Celestial/Token/couatl.png#token]]
*Medium celestial, Lawful Good*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 13d8 + 39|text(97)` (13d8 + 39) 
- **Speed** walk 30 ft., fly 90 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|20 (+5)|17 (+3)|18 (+4)|20 (+5)|18 (+4)|

- **Proficiency Bonus** +2
- **Saving Throws** Constitution +5, Wisdom +7, Charisma +6
- **Skills** ⏤
- **Senses** truesight 120 ft., passive Perception 15
- **Damage Resistances** radiant
- **Damage Immunities** psychic; bludgeoning, piercing, slashing from nonmagical attacks
- **Languages** all, telepathy 120 ft.
- **Challenge** 4

## Traits

***Magic Weapons.*** The couatl's weapon attacks are magical.

***Shielded Mind.*** The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.

***Innate Spellcasting.*** The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:

**At will**: [[/6. Mechanics/Spells/detect-evil-and-good.md\|detect evil and good]], [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]]

**1/day each**: [[/6. Mechanics/Spells/dream.md\|dream]], [[/6. Mechanics/Spells/greater-restoration.md\|greater restoration]], [[/6. Mechanics/Spells/scrying.md\|scrying]]

**3/day each**: [[/6. Mechanics/Spells/bless.md\|bless]], [[/6. Mechanics/Spells/create-food-and-water.md\|create food and water]], [[/6. Mechanics/Spells/cure-wounds.md\|cure wounds]], [[/6. Mechanics/Spells/lesser-restoration.md\|lesser restoration]], [[/6. Mechanics/Spells/protection-from-poison.md\|protection from poison]], [[/6. Mechanics/Spells/sanctuary.md\|sanctuary]], [[/6. Mechanics/Spells/shield.md\|shield]]

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one creature. Hit: `dice: 1d6 + 5` (`1d6 + 5`) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] for 24 hours. Until this poison ends, the target is [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]]. Another creature can use an action to shake the target awake.

***Constrict.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one Medium or smaller creature. Hit: `dice: 2d6 + 3` (`2d6 + 3`) bludgeoning damage, and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 15). Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], and the couatl can't constrict another target.

***Change Shape.*** The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).

In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.
```
^statblock

## Environment

grassland, forest, urban, desert