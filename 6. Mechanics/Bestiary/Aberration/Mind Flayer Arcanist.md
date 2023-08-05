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
"name": "Mind Flayer Arcanist"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "19"
- !!int "17"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Arcana": !!int "7"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mind flayer's innate spellcasting ability is Intelligence (spell save\
    \ DC 15). It can innately cast the following spells, requiring no components:\n\
    \nAt will: [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/levitate.md\|levitate]]\n\
    \n1/day each: [[/6. Mechanics/Spells/dominate-monster.md\|dominate monster]],\
    \ [[/6. Mechanics/Spells/plane-shift.md\|plane shift]] (self only)"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mind flayer is a 10th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (save DC 15, dice: d20+7 (+7 to hit) with spell attacks). The\
    \ mind flayer has the following wizard spells prepared:\n\nCantrips (at will):\
    \ [[/6. Mechanics/Spells/blade-ward.md\|blade ward]], [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]],\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/shocking-grasp.md\|shocking grasp]]\n\
    \n1st level (4 1st-level slots): [[/6. Mechanics/Spells/detect-magic.md\|detect magic]],\
    \ [[/6. Mechanics/Spells/disguise-self.md\|disguise self]], [[/6. Mechanics/Spells/shield.md\|shield]],\
    \ [[/6. Mechanics/Spells/sleep.md\|sleep]]\n\n2nd level (3 2nd-level slots): [[/6. Mechanics/Spells/blur.md\|blur]],\
    \ [[/6. Mechanics/Spells/invisibility.md\|invisibility]], [[/6. Mechanics/Spells/ray-of-enfeeblement.md\|ray of enfeeblement]]\n\
    \n3rd level (3 3rd-level slots): [[/6. Mechanics/Spells/clairvoyance.md\|clairvoyance]],\
    \ [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]], [[/6. Mechanics/Spells/sending.md\|sending]]\n\
    \n4th level (3 4th-level slots): [[/6. Mechanics/Spells/confusion.md\|confusion]],\
    \ [[/6. Mechanics/Spells/hallucinatory-terrain.md\|hallucinatory terrain]]\n\n5th\
    \ level (2 5th-level slots): [[/6. Mechanics/Spells/telekinesis.md\|telekinesis]],\
    \ [[/6. Mechanics/Spells/wall-of-force.md\|wall of force]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mind flayer has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d10 + 4|avg (2d10 + 4) psychic damage. If the target is Medium\
    \ or smaller, it is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape\
    \ DC 15) and must succeed on a DC 15 Intelligence saving throw or be [[6. Mechanics/Rules/conditions.md#stunned\|stunned]]\
    \ until this grapple ends."
  "name": "Tentacles"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]\
    \ humanoid [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] by the mind flayer.\
    \ Hit: The target takes dice: 10d10|avg (10d10) piercing damage. If this damage\
    \ reduces the target to 0 hit points, the mind flayer kills the target by extracting\
    \ and devouring its brain."
  "name": "Extract Brain"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mind flayer magically emits psychic energy in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 15 Intelligence saving throw or take\
    \ dice: 4d8 + 4|avg (4d8 + 4) psychic damage and be [[6. Mechanics/Rules/conditions.md#stunned\|stunned]]\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "MM"
- "WDMM"
"image": "/compendium/bestiary/aberration/token/mind-flayer-arcanist.png"
aliases: ["Mind Flayer Arcanist"]
---
# Mind Flayer Arcanist
*Source: Monster Manual p. 222, Waterdeep: Dungeon of the Mad Mage*  

A few mind flayers supplement their psionic power with arcane spells. However, they are regarded as deviants by their illithid peers and usually shunned.

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
title: Mind Flayer Arcanist
![[/6. Mechanics/Bestiary/Aberration/Token/mind-flayer-arcanist.png#token]]
*Medium aberration, Lawful Evil*

- **Armor Class** 15 ([[/6. Mechanics/Items/breastplate.md\|breastplate]])
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
- **Challenge** 8

## Traits

***Magic Resistance.*** The mind flayer has advantage on saving throws against spells and other magical effects.

***Innate Spellcasting (Psionics).*** The mind flayer's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components:

**At will**: [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/levitate.md\|levitate]]

**1/day each**: [[/6. Mechanics/Spells/dominate-monster.md\|dominate monster]], [[/6. Mechanics/Spells/plane-shift.md\|plane shift]] (self only)

***Spellcasting.*** The mind flayer is a 10th-level spellcaster. Its spellcasting ability is Intelligence (save DC 15, `dice: d20+7` (+7 to hit) with spell attacks). The mind flayer has the following wizard spells prepared:

**Cantrips (at will)**: [[/6. Mechanics/Spells/blade-ward.md\|blade ward]], [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/shocking-grasp.md\|shocking grasp]]

**1st level (4 1st-level slots)**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/disguise-self.md\|disguise self]], [[/6. Mechanics/Spells/shield.md\|shield]], [[/6. Mechanics/Spells/sleep.md\|sleep]]

**2nd level (3 2nd-level slots)**: [[/6. Mechanics/Spells/blur.md\|blur]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]], [[/6. Mechanics/Spells/ray-of-enfeeblement.md\|ray of enfeeblement]]

**3rd level (3 3rd-level slots)**: [[/6. Mechanics/Spells/clairvoyance.md\|clairvoyance]], [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]], [[/6. Mechanics/Spells/sending.md\|sending]]

**4th level (3 4th-level slots)**: [[/6. Mechanics/Spells/confusion.md\|confusion]], [[/6. Mechanics/Spells/hallucinatory-terrain.md\|hallucinatory terrain]]

**5th level (2 5th-level slots)**: [[/6. Mechanics/Spells/telekinesis.md\|telekinesis]], [[/6. Mechanics/Spells/wall-of-force.md\|wall of force]]

## Actions

***Tentacles.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one creature. Hit: `dice: 2d10 + 4` (`2d10 + 4`) psychic damage. If the target is Medium or smaller, it is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] until this grapple ends.

***Extract Brain.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]] humanoid [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] by the mind flayer. Hit: The target takes `dice: 10d10` (`10d10`) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain.

***Mind Blast (Recharge 5-6).*** The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take `dice: 4d8 + 4` (`4d8 + 4`) psychic damage and be [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock

## Environment

underdark