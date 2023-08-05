---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/arctic
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
"name": "Warlock of the Great Old One"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "9"
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages, telepathy 30 ft."
"cr": "6"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlock casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 15): \n\nAt will: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]],\
    \ [[/6. Mechanics/Spells/guidance.md\|guidance]], [[/6. Mechanics/Spells/levitate.md\|levitate]],\
    \ [[/6. Mechanics/Spells/mage-armor.md\|mage armor]] (self only), [[/6. Mechanics/Spells/mage-hand.md\|mage hand]],\
    \ [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]\n\
    \n1/day each: [[/6. Mechanics/Spells/arcane-gate.md\|arcane gate]], [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]],\
    \ [[/6. Mechanics/Spells/true-seeing.md\|true seeing]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "At the start of each of the warlock's turns, each creature of its choice\
    \ within 5 feet of it must succeed on a DC 15 Wisdom saving throw or take dice:\
    \ 3d6|avg (3d6) psychic damage, provided that the warlock isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Whispering Aura"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlock makes two Dagger attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 3|avg (1d4 + 3) piercing\
    \ damage plus dice: 3d6|avg (3d6) psychic damage."
  "name": "Dagger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlock opens a momentary extraplanar rift within 60 feet of it. The\
    \ rift is a scream-filled, 20-foot cube. Each creature in that area must make\
    \ a DC 15 Wisdom saving throw. On a failed save, a creature takes dice: 2d8|avg\
    \ (2d8) psychic damage and is [[6. Mechanics/Rules/conditions.md#frightened\|frightened]]\
    \ of the warlock until the start of the warlock's next turn. On a successful save,\
    \ a creature takes half as much damage and isn't [[6. Mechanics/Rules/conditions.md#frightened\|frightened]]."
  "name": "Howling Void"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/humanoid/token/warlock-of-the-great-old-one.png"
aliases: ["Warlock of the Great Old One"]
---
# Warlock of the Great Old One
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 256, Volo's Guide to Monsters p. 220*  

Warlocks of the Great Old One gain their powers through magical pacts forged with eldritch entities from strange and distant realms of existence. Some of these warlocks associate with cultists devoted to these entities, as well as Aberrations that share their goals, yet other warlocks of the Great Old One are experts at rooting out the chaos and wickedness inspired by bizarre beings from beyond the stars.

## Warlocks

Warlocks gain arcane might through magical pacts with mysterious entities. While some use their abilities to serve the sources of their power, others use them to undermine or even destroy these entities.

## Stat Block

```ad-statblock
title: Warlock of the Great Old One
![[/6. Mechanics/Bestiary/Humanoid/Token/warlock-of-the-great-old-one.png#token]]
*Medium humanoid, Any alignment*

- **Armor Class** 13 (16 with [[/6. Mechanics/Spells/mage-armor.md\|mage armor]])
- **Hit Points** `dice: 14d8 + 28|text(91)` (14d8 + 28) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|16 (+3)|15 (+2)|12 (+1)|12 (+1)|18 (+4)|

- **Proficiency Bonus** +3
- **Saving Throws** Wisdom +4, Charisma +7
- **Skills** Arcana +4, History +4
- **Senses** darkvision 60 ft., passive Perception 11
- **Damage Resistances** psychic
- **Languages** any two languages, telepathy 30 ft.
- **Challenge** 6

## Traits

***Whispering Aura.*** At the start of each of the warlock's turns, each creature of its choice within 5 feet of it must succeed on a DC 15 Wisdom saving throw or take `dice: 3d6` (`3d6`) psychic damage, provided that the warlock isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

***Spellcasting.*** The warlock casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 15): 

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/guidance.md\|guidance]], [[/6. Mechanics/Spells/levitate.md\|levitate]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]] (self only), [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]

**1/day each**: [[/6. Mechanics/Spells/arcane-gate.md\|arcane gate]], [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/true-seeing.md\|true seeing]]

## Actions

***Multiattack.*** The warlock makes two Dagger attacks.

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 3` (`1d4 + 3`) piercing damage plus `dice: 3d6` (`3d6`) psychic damage.

***Howling Void.*** The warlock opens a momentary extraplanar rift within 60 feet of it. The rift is a scream-filled, 20-foot cube. Each creature in that area must make a DC 15 Wisdom saving throw. On a failed save, a creature takes `dice: 2d8` (`2d8`) psychic damage and is [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] of the warlock until the start of the warlock's next turn. On a successful save, a creature takes half as much damage and isn't [[6. Mechanics/Rules/conditions.md#frightened\|frightened]].
```
^statblock

## Environment

arctic, hill, mountain, underdark, urban