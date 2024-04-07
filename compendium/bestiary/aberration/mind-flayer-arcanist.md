---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/8
- monster/environment/underdark
- monster/size/medium
- monster/type/aberration
statblock: inline
aliases: ["Mind Flayer Arcanist"]
---
# [Mind Flayer Arcanist](compendium/bestiary/aberration/mind-flayer-arcanist.md)
*Source: Monster Manual p. 222*

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

> [!note] Qualith
> 
> On the rare occasion that mind flayers need to write something down, they do so in Qualith. This system of tactile writing (similar to braille) is read by an illithid's tentacles. Qualith is written in four-line stanzas and is so alien in construction that non-illithids must resort to magic to discern its meaning. Though Qualith can be used to keep records, illithids most often use it to mark portals or other surfaces with warnings or instructions.
^qualith

```statblock
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
"speed": "30 ft."
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
- "desc": "The mind flayer's innate spellcasting ability is Intelligence (spell save\
    \ DC 15). It can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect thoughts](compendium/spells/detect-thoughts.md), [levitate](compendium/spells/levitate.md)\n\
    \n1/day each: [dominate monster](compendium/spells/dominate-monster.md), [plane\
    \ shift](compendium/spells/plane-shift.md) (self only)"
  "name": "innate"
- "desc": "The mind flayer is a 10th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (save DC 15, dice: d20+7 (+7 to hit) with spell attacks). The\
    \ mind flayer has the following wizard spells prepared:\n\nCantrips (at will):\
    \ [blade ward](compendium/spells/blade-ward.md), [dancing lights](compendium/spells/dancing-lights.md),\
    \ [mage hand](compendium/spells/mage-hand.md), [shocking grasp](compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 slots): [detect magic](compendium/spells/detect-magic.md),\
    \ [disguise self](compendium/spells/disguise-self.md), [shield](compendium/spells/shield.md),\
    \ [sleep](compendium/spells/sleep.md)\n\n2nd level (3 slots): [blur](compendium/spells/blur.md),\
    \ [invisibility](compendium/spells/invisibility.md), [ray of enfeeblement](compendium/spells/ray-of-enfeeblement.md)\n\
    \n3rd level (3 slots): [clairvoyance](compendium/spells/clairvoyance.md),\
    \ [lightning bolt](compendium/spells/lightning-bolt.md), [sending](compendium/spells/sending.md)\n\
    \n4th level (3 slots): [confusion](compendium/spells/confusion.md), [hallucinatory\
    \ terrain](compendium/spells/hallucinatory-terrain.md)\n\n5th level (2 slots):\
    \ [telekinesis](compendium/spells/telekinesis.md), [wall of force](compendium/spells/wall-of-force.md)"
  "name": "spells"
- "desc": "The mind flayer has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d10 + 4|avg (2d10 + 4) psychic damage. If the target is Medium\
    \ or smaller, it is [grappled](/compendium/rules/conditions.md#grappled) (escape\
    \ DC 15) and must succeed on a DC 15 Intelligence saving throw or be [stunned](/compendium/rules/conditions.md#stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one [incapacitated](/compendium/rules/conditions.md#incapacitated)\
    \ humanoid [grappled](/compendium/rules/conditions.md#grappled) by the mind flayer.\
    \ Hit: The target takes dice: 10d10|avg (10d10) piercing damage. If this\
    \ damage reduces the target to 0 hit points, the mind flayer kills the target\
    \ by extracting and devouring its brain."
  "name": "Extract Brain"
- "desc": "The mind flayer magically emits psychic energy in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 15 Intelligence saving throw or take\
    \ dice: 4d8 + 4|avg (4d8 + 4) psychic damage and be [stunned](/compendium/rules/conditions.md#stunned)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "MM"
- "WDMM"
- "SatO"
"image": "compendium/bestiary/aberration/token/mind-flayer-arcanist.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```