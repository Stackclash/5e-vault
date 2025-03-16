---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: desert
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/11
  - monster/environment/desert
  - monster/size/large
  - monster/type/elemental
aliases:
  - Efreeti (Wishes)
---
# [[5. Mechanics/Bestiary/Elemental/Efreeti Wishes.md|Efreeti (Wishes)]]
*Source: Monster Manual p. 145, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Efreeti Wishes"
"size": "Large"
"type": "elemental"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "22"
- !!int "12"
- !!int "24"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "40 ft., fly 60 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"damage_immunities": "fire"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Ignan"
"cr": "11"
"traits":
- "desc": "The efreeti's innate spellcasting ability is Charisma (spell save DC 15,\
    \ +7 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]]\n\
    \n1/day each: [[5. Mechanics/Spells/Conjure Element(AL).md|conjure elemental]]\
    \ ([[5. Mechanics/Bestiary/Elemental/Fire Element(AL).md|fire elemental]] only), [[5. Mechanics/Spells/Gaseous Form.md|gaseous\
    \ form]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
    \ [[5. Mechanics/Spells/Major Image.md|major image]], [[5. Mechanics/Spells/Plane Shift.md|plane shift]],\
    \ [[5. Mechanics/Spells/Wall Of Fire.md|wall of fire]]\n\n3/day each: [[5. Mechanics/Spells/Enlarge Reduce.md|enlarge/reduce]],\
    \ [[5. Mechanics/Spells/Tongues.md|tongues]]"
  "name": "Innate Spellcasting"
- "desc": "If the efreeti dies, its body disintegrates in a flash of fire and puff\
    \ of smoke, leaving behind only equipment the efreeti was wearing or carrying."
  "name": "Elemental Demise"
- "desc": "The genie power to grant wishes is legendary among mortals. Only the most\
    \ potent genies, such as those among the nobility, can do so. A particular genie\
    \ that has this power can grant one to three wishes to a creature that isn't a\
    \ genie. Once a genie has granted its limit of wishes, it can't grant wishes again\
    \ for some amount of time (usually 1 year), and cosmic law dictates that the same\
    \ genie can expend its limit of wishes on a specific creature only once in that\
    \ creature's existence.\n\nTo be granted a wish, a creature within 60 feet of\
    \ the genie states a desired effect to it. The genie can then cast the [[5. Mechanics/Spells/Wish.md|wish]]\
    \ spell on the creature's behalf to bring about the effect. Depending on the genie's\
    \ nature, the genie might try to pervert the intent of the wish by exploiting\
    \ the wish's poor wording. The perversion of the wording is usually crafted to\
    \ be to the genie's benefit."
  "name": "Wishes"
"actions":
- "desc": "The efreeti makes two scimitar attacks or uses its Hurl Flame twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage plus 7 (2d6) fire damage."
  "name": "Scimitar"
- "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17\
    \ (5d6) fire damage."
  "name": "Hurl Flame"
"source":
- "MM"
- "TCE"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
