---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: underdark
size: Medium
tags:
  - compendium/src/5e/vgm
  - monster/cr/8
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/aberration
aliases:
  - Mind Flayer Psion
---
# [[5. Mechanics\Bestiary\Aberration\Mind Flayer Psion (VGM).md|Mind Flayer Psion]]
*Source: Volo's Guide to Monsters p. 71*

Mind flayers sometimes devote themselves to deeper study of psionic power, and many excel at using their innate psionic energy to duplicate the casting of spells.

## Mind Flayer

Mind flayers, also called illithids, are the scourge of sentient creatures across countless worlds. Psionic tyrants, slavers, and interdimensional voyagers, they are insidious masterminds that harvest entire races for their own twisted ends. Four tentacles snake from their octopus-like heads, flexing in hungry anticipation when sentient creatures come near.

In eons past, illithids controlled empires that spanned many worlds. They subjugated and consequently warped whole races of humanoid slaves, including the githyanki and githzerai, the grimlocks, and the kuo-toa. Conjoined by a collective consciousness, the illithids hatch plots as far-reaching and evil as their fathomless minds can conceive.

Since the fall of their empires, illithid collectives on the Material Plane have resided in the Underdark. Psionic Commanders. Mind flayers possess psionic powers that enable them to control the minds of creatures such as troglodytes, grimlocks, quaggoths, and ogres. Illithids prefer to communicate via telepathy and use their telepathy when issuing commands to their thralls.

When an illithid meets strong resistance, it avoids initial combat as it orders its thralls to attack. Like physical extensions of the illithid's thoughts, these thralls interpose themselves between the mind flayer and its foes, sacrificing their lives so that their master can escape.

### Hive Mind Colonies

Solitary mind flayers are likely rogues and outcasts. Most illithids belong to a colony of sibling mind flayers devoted to an elder brain-a massive brain-like being that resides in a briny pool near the center of a mind flayer community. From its pool, an elder brain telepathically dictates its desires to each individual mind flayer within 5 miles of it, for it is able to hold multiple mental conversations at once.

An illithid experiences euphoria as it devours the brain of a humanoid, along with its memories, personality, and innermost fears. Mind flayers will sometimes harvest a brain rather than devour it, using it as part of some alien experiment or transforming it into an intellect devourer.

Qualith

On the rare occasion that mind flayers need to write something down, they do so in Qualith. This system of tactile writing (similar to braille) is read by an illithid's tentacles. Qualith is written in four-line stanzas and is so alien in construction that non-illithids must resort to magic to discern its meaning. Though Qualith can be used to keep records, illithids most often use it to mark portals or other surfaces with warnings or instructions.

### Hunger of the Mind

Illithids subsist on the brains of humanoids. The brains provide enzymes, hormones, and psychic energy necessary for their survival. An illithid healthy from a brain-rich diet secretes a thin glaze of mucus that coats its mauve skin.

```statblock
"name": "Mind Flayer Psion (VGM)"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Breastplate.md|breastplate]]"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "19"
  - !!int "17"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "intelligence": "+7"
  - "wisdom": "+6"
  - "charisma": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "The mind flayer is a 10th-level spellcaster. Its innate spellcasting\
      \ ability is Intelligence (spell save DC 15; +7 to hit with spell attacks).\
      \ It can innately cast the following spells, requiring no components:\n\nAt\
      \ will: [[5. Mechanics/Spells/Guidance.md|guidance]], [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[5. Mechanics/Spells/Vicious Mockery.md|vicious mockery]], [[5. Mechanics/Spells/True Strike.md|true strike]],\
      \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Levitate.md|levitate]]\n\
      \n1/day each: [[5. Mechanics/Spells/Dominate Monster.md|dominate monster]],\
      \ [[5. Mechanics/Spells/Plane Shift.md|plane shift]] (self only)\n\n1st level\
      \ (4 slots): [[5. Mechanics/Spells/Charm Person.md|charm person]], [[5. Mechanics/Spells/Command.md|command]],\
      \ [[5. Mechanics/Spells/Comprehend Languages.md|comprehend languages]], [[5. Mechanics/Spells/Sanctuary.md|sanctuary]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Crown Of Madness.md|crown of madness]],\
      \ [[5. Mechanics/Spells/Phantasmal Force.md|phantasmal force]], [[5. Mechanics/Spells/See Invisibility.md|see invisibility]]\n\
      \n3rd level (3 slots): [[5. Mechanics/Spells/Clairvoyance.md|clairvoyance]],\
      \ [[5. Mechanics/Spells/Fear.md|fear]], [[5. Mechanics/Spells/Meld Into Stone.md|meld into stone]]\n\
      \n4th level (3 slots): [[5. Mechanics/Spells/Confusion.md|confusion]], [[5. Mechanics/Spells/Stone Shape.md|stone\
      \ shape]]\n\n5th level (2 slots): [[5. Mechanics/Spells/Scrying.md|scrying]],\
      \ [[5. Mechanics/Spells/Telekinesis.md|telekinesis]]"
    "name": "Innate Spellcasting (Psionics)"
  - "desc": "The mind flayer has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15\
      \ (2d10 + 4) psychic damage. If the target is Medium or smaller, it is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be\
      \ [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]] until this grapple ends."
    "name": "Tentacles"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ humanoid [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] by the mind\
      \ flayer. Hit: The target takes 55 (10d10) piercing damage. If this damage\
      \ reduces the target to 0 hit points, the mind flayer kills the target by extracting\
      \ and devouring its brain."
    "name": "Extract Brain"
  - "desc": "The mind flayer magically emits psychic energy in a 60-foot cone. Each\
      \ creature in that area must succeed on a DC 15 Intelligence saving throw or\
      \ take 22 (4d8 + 4) psychic damage and be [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Mind Blast (Recharge 5-6)"
"source":
  - "VGM"
"image": "5. Mechanics/Bestiary/Aberration/token/mind-flayer-psion-vgm.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
