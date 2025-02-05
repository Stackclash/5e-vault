---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: underdark
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/11
  - monster/environment/underdark
  - monster/size/large
  - monster/type/elemental
aliases:
  - Dao (Wishes)
---
# [[5. Mechanics\Bestiary\Elemental\Dao Wishes.md|Dao (Wishes)]]
*Source: Monster Manual p. 143, Tasha's Cauldron of Everything*

```statblock
"name": "Dao Wishes"
"size": "Large"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "187"
"hit_dice": "15d10 + 105"
"stats":
- !!int "23"
- !!int "12"
- !!int "24"
- !!int "12"
- !!int "13"
- !!int "14"
"speed": "30 ft., burrow 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
  "Intelligence": !!int "5"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Terran"
"cr": "11"
"traits":
- "desc": "The dao's innate spellcasting ability is Charisma (spell save DC 14, +6\
    \ to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]],\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Stone Shape.md|stone shape]]\n\
    \n1/day each: [[5. Mechanics/Spells/Conjure Element(AL).md|conjure elemental]]\
    \ ([[5. Mechanics/Bestiary/Elemental/Earth Element(AL).md|earth elemental]] only),\
    \ [[5. Mechanics/Spells/Gaseous Form.md|gaseous form]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
    \ [[5. Mechanics/Spells/Phantasmal Killer.md|phantasmal killer]], [[5. Mechanics/Spells/Plane Shift.md|plane shift]],\
    \ [[5. Mechanics/Spells/Wall Of Stone.md|wall of stone]]\n\n3/day each: [[5. Mechanics/Spells/Passwall.md|passwall]],\
    \ [[5. Mechanics/Spells/Move Earth.md|move earth]], [[5. Mechanics/Spells/Tongues.md|tongues]]"
  "name": "Innate Spellcasting"
- "desc": "The dao can burrow through nonmagical, unworked earth and stone. While\
    \ doing so, the dao doesn't disturb the material it moves through."
  "name": "Earth Glide"
- "desc": "If the dao dies, its body disintegrates into crystalline powder, leaving\
    \ behind only equipment the dao was wearing or carrying."
  "name": "Elemental Demise"
- "desc": "The dao has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Sure-Footed"
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
- "desc": "The Dao makes two fist attacks or two maul attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 15 (2d8\
    \ + 6) bludgeoning damage."
  "name": "Fist"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 20 (4d6\
    \ + 6) bludgeoning damage. If the target is a Huge or smaller creature, it must\
    \ succeed on a DC 18 Strength check or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Maul"
"source":
- "MM"
- "TCE"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
