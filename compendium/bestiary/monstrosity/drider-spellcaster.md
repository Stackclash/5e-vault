---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: underdark
size: Large
tags:
- compendium/src/5e/mm
- monster/cr/6
- monster/environment/underdark
- monster/size/large
- monster/type/monstrosity
aliases: ["Drider Spellcaster"]
---
# [Drider Spellcaster](compendium\bestiary\monstrosity/drider-spellcaster.md)
*Source: Monster Manual p. 120, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Drider Spellcaster"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"stats":
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "12"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Elvish, Undercommon"
"cr": "6"
"traits":
- "desc": "The drider is a 7th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 14, +6 to hit with spell attacks). The drider has the following\
    \ spells prepared from the cleric spell list:\n\nCantrips (at will): [poison\
    \ spray](compendium/spells/poison-spray.md), [thaumaturgy](compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [bane](compendium/spells/bane.md), [detect magic](compendium/spells/detect-magic.md),\
    \ [sanctuary](compendium/spells/sanctuary.md)\n\n2nd level (3 slots): [hold\
    \ person](compendium/spells/hold-person.md), [silence](compendium/spells/silence.md)\n\
    \n3rd level (3 slots): [clairvoyance](compendium/spells/clairvoyance.md),\
    \ [dispel magic](compendium/spells/dispel-magic.md)\n\n4th level (2 slots):\
    \ [divination](compendium/spells/divination.md), [freedom of movement](compendium/spells/freedom-of-movement.md)"
  "name": "Spellcasting"
- "desc": "The drider has advantage on saving throws against being [charmed](/compendium/rules/conditions.md#Charmed),\
    \ and magic can't put the drider to sleep."
  "name": "Fey Ancestry"
- "desc": "The drider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in sunlight, the drider has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/compendium/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The drider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "The drider makes three attacks, either with its longsword or its longbow.\
    \ It can replace one of those attacks with a bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4)\
    \ piercing damage plus 9 (2d8) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage."
  "name": "Longbow"
"source":
- "MM"
- "VEoR"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```