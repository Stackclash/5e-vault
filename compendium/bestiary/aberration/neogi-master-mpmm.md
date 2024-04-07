---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/4
- monster/environment/hill
- monster/environment/underdark
- monster/size/medium
- monster/type/aberration/warlock
statblock: inline
aliases: ["Neogi Master"]
---
# [Neogi Master](compendium/bestiary/aberration/neogi-master-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 192, Volo's Guide to Monsters p. 180*

Neogi masters use magic, as a result of a pact between neogi and aberrant entities they met during their journey from their home world. These entities—known by such names as Acamar, Caiphon, Gibbeth, and Hadar—resemble stars and embody the essence of evil.

## Neogi

> [!quote]- A quote from Mordenkainen  
> 
> Only the malevolent or the desperate do business with neogi. I generally advise against working with beings who view you as property or prey.

A neogi looks like an outsize spider with an eel's neck and head. It can poison the body and the mind of its targets and can subjugate even beings that are physically superior.

Neogi usually dwell in far-flung locations on the Material Plane, as well as in the Astral Plane and the Ethereal Plane. They left their home world long ago to conquer and devour creatures in other realms. During this era, they dominated umber hulks and used them to build sleek, spidery ships capable of traversing the multiverse.

```statblock
"name": "Neogi Master (MPMM)"
"size": "Medium"
"type": "aberration"
"subtype": "warlock"
"alignment": "Typically  Lawful Evil"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "6"
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "18"
"speed": "30 ft., climb 30 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Intimidation": !!int "6"
  "Deception": !!int "6"
  "Perception": !!int "3"
  "Arcana": !!int "5"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Common, Deep Speech, Undercommon, telepathy 30 ft."
"cr": "4"
"traits":
- "desc": "The neogi casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 14):\n\nAt will: [guidance](compendium/spells/guidance.md),\
    \ [mage hand](compendium/spells/mage-hand.md), [minor illusion](compendium/spells/minor-illusion.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md)\n\n1/day each:\
    \ [dimension door](compendium/spells/dimension-door.md), [hold person](compendium/spells/hold-person.md),\
    \ [hunger of Hadar](compendium/spells/hunger-of-hadar.md)"
  "name": "spells"
- "desc": "Magical darkness doesn't impede the neogi's [darkvision](/compendium/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- "desc": "The neogi has advantage on saving throws against being [charmed](/compendium/rules/conditions.md#charmed)\
    \ or [frightened](/compendium/rules/conditions.md#frightened), and magic can't\
    \ put the neogi to sleep."
  "name": "Mental Fortitude"
- "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "The neogi makes one Bite attack and one Claw attack, or it makes two Tentacle\
    \ of Hadar attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage plus dice: 4d6|avg\
    \ (4d6) poison damage, and the target must succeed on a DC 12 Constitution saving\
    \ throw or become [poisoned](/compendium/rules/conditions.md#poisoned) for 1 minute.\
    \ A target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 3|avg (2d4 + 3) piercing damage."
  "name": "Claw"
- "desc": "Ranged Spell Attack: dice: d20+6 (+6 to hit), range 120 ft., one target.\
    \ Hit: dice: 3d6 + 4|avg (3d6 + 4) necrotic damage, and the target can't\
    \ take reactions until the end of the neogi's next turn, as a spectral tentacle\
    \ clings to the target."
  "name": "Tentacle of Hadar"
"bonus_actions":
- "desc": "The neogi targets one creature it can see within 30 feet of it. The target\
    \ must succeed on a DC 14 Wisdom saving throw or be magically [charmed](/compendium/rules/conditions.md#charmed)\
    \ by the neogi for 1 day, or until the neogi dies or is more than 1 mile from\
    \ the target. The [charmed](/compendium/rules/conditions.md#charmed) target obeys\
    \ the neogi's commands and can't take reactions, and the neogi and the target\
    \ can communicate telepathically with each other at a distance of up to 1 mile.\
    \ Whenever the [charmed](/compendium/rules/conditions.md#charmed) target takes\
    \ damage, it can repeat the saving throw, ending the effect on itself on a success."
  "name": "Enslave (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/aberration/token/neogi-master-mpmm.webp"
```
^statblock

## Environment

hill, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```