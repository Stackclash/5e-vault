---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
name: Mind Flayer
ac: 15
hp: 71
hit_dice: 13d8 + 13
cr: '7'
stats: [
  11,
  12,
  12,
  19,
  17,
  17
]
source: [
  MM,
  TftYP,
  WDH,
  WDMM,
  ERLW,
  IMR,
  IDRotF,
  TCE,
  SjA,
  LoX,
  KftGV
]
aliases: ["Mind Flayer"]
---
# Mind Flayer
*Source: Monster Manual p. 222, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Eberron: Rising from the Last War, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Spelljammer Academy, Light of Xaryxis, Keys from the Golden Vault*  

Mind flayers, also called illithids, are the scourge of sentient creatures across countless worlds. Psionic tyrants, slavers, and interdimensional voyagers, they are insidious masterminds that harvest entire races for their own twisted ends. Four tentacles snake from their octopus-like heads, flexing in hungry anticipation when sentient creatures come near.

In eons past, illithids controlled empires that spanned many worlds. They subjugated and consequently warped whole races of humanoid slaves, including the githyanki and githzerai, the grimlocks, and the kuo-toa. Conjoined by a collective consciousness, the illithids hatch plots as far-reaching and evil as their fathomless minds can conceive.

Since the fall of their empires, illithid collectives on the Material Plane have resided in the Underdark.

## Psionic Commanders

Mind flayers possess psionic powers that enable them to control the minds of creatures such as troglodytes, grimlocks, quaggoths, and ogres. Illithids prefer to communicate via telepathy and use their telepathy when issuing commands to their thralls.

When an illithid meets strong resistance, it avoids initial combat as it orders its thralls to attack. Like physical extensions of the illithid's thoughts, these thralls interpose themselves between the mind flayer and its foes, sacrificing their lives so that their master can escape.

## Hive Mind Colonies

Solitary mind flayers are likely rogues and outcasts. Most illithids belong to a colony of sibling mind flayers devoted to an elder brain-a massive brain-like being that resides in a briny pool near the center of a mind flayer community. From its pool, an elder brain telepathically dictates its desires to each individual mind flayer within 5 miles of it, for it is able to hold multiple mental conversations at once.

## Hunger of the Mind

Illithids subsist on the brains of humanoids. The brains provide enzymes, hormones, and psychic energy necessary for their survival. An illithid healthy from a brain-rich diet secretes a thin glaze of mucus that coats its mauve skin.

An illithid experiences euphoria as it devours the brain of a humanoid, along with its memories, personality, and innermost fears. Mind flayers will sometimes harvest a brain rather than devour it, using it as part of some alien experiment or transforming it into an intellect devourer.

> [!quote] Qualith
> 
> On the rare occasion that mind flayers need to write something down, they do so in Qualith. This system of tactile writing (similar to braille) is read by an illithid's tentacles. Qualith is written in four-line stanzas and is so alien in construction that non-illithids must resort to magic to discern its meaning. Though Qualith can be used to keep records, illithids most often use it to mark portals or other surfaces with warnings or instructions.
^qualith

## Stat Block

```ad-statblock
title: Mind Flayer
![](/compendium/bestiary/aberration/token/mind-flayer.png#token)
*Medium aberration, Lawful Evil*

- **Armor Class** 15 ([breastplate](/compendium/items/breastplate.md))
- **Hit Points** `dice: 13d8 + 13|text(71)` (13d8 + 13) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|12 (+1)|12 (+1)|19 (+4)|17 (+3)|17 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +7, Wisdom +6, Charisma +6
- **Skills** Arcana +7, Deception +6, Insight +6, Perception +6, Persuasion +6, Stealth +4
- **Senses** darkvision 120 ft., passive Perception 16
- **Languages** Deep Speech, Undercommon, telepathy 120 ft.
- **Challenge** 7

## Traits

***Magic Resistance.*** The mind flayer has advantage on saving throws against spells and other magical effects.

***Innate Spellcasting (Psionics).*** The mind flayer's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components:

**At will**: [detect thoughts](/compendium/spells/detect-thoughts.md), [levitate](/compendium/spells/levitate.md)

**1/day each**: [dominate monster](/compendium/spells/dominate-monster.md), [plane shift](/compendium/spells/plane-shift.md) (self only)

## Actions

***Tentacles.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one creature. Hit: `dice: 2d10 + 4|avg` (`2d10 + 4`) psychic damage. If the target is Medium or smaller, it is [grappled](compendium/rules/conditions.md#grappled) (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be [stunned](compendium/rules/conditions.md#stunned) until this grapple ends.

***Extract Brain.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one [incapacitated](compendium/rules/conditions.md#incapacitated) humanoid [grappled](compendium/rules/conditions.md#grappled) by the mind flayer. Hit: The target takes `dice: 10d10|avg` (`10d10`) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain.

***Mind Blast (Recharge 5-6).*** The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take `dice: 4d8 + 4|avg` (`4d8 + 4`) psychic damage and be [stunned](compendium/rules/conditions.md#stunned) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock

## Environment

underdark