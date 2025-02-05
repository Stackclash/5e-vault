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
aliases: ["Dao (Wishes)"]
---
# [Dao (Wishes)](compendium\bestiary\elemental/dao-wishes.md)
*Source: Monster Manual p. 143, Tasha's Cauldron of Everything*

```statblock
"name": "Dao (Wishes)"
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
"condition_immunities": "[petrified](/compendium/rules/conditions.md#Petrified)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Terran"
"cr": "11"
"traits":
- "desc": "The dao's innate spellcasting ability is Charisma (spell save DC 14, +6\
    \ to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect evil and good](compendium/spells/detect-evil-and-good.md),\
    \ [detect magic](compendium/spells/detect-magic.md), [stone shape](compendium/spells/stone-shape.md)\n\
    \n1/day each: [conjure elemental](compendium/spells/conjure-elemental.md)\
    \ ([earth elemental](compendium/bestiary/elemental/earth-elemental.md) only),\
    \ [gaseous form](compendium/spells/gaseous-form.md), [invisibility](compendium/spells/invisibility.md),\
    \ [phantasmal killer](compendium/spells/phantasmal-killer.md), [plane shift](compendium/spells/plane-shift.md),\
    \ [wall of stone](compendium/spells/wall-of-stone.md)\n\n3/day each: [passwall](compendium/spells/passwall.md),\
    \ [move earth](compendium/spells/move-earth.md), [tongues](compendium/spells/tongues.md)"
  "name": "Innate Spellcasting"
- "desc": "The dao can burrow through nonmagical, unworked earth and stone. While\
    \ doing so, the dao doesn't disturb the material it moves through."
  "name": "Earth Glide"
- "desc": "If the dao dies, its body disintegrates into crystalline powder, leaving\
    \ behind only equipment the dao was wearing or carrying."
  "name": "Elemental Demise"
- "desc": "The dao has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Sure-Footed"
- "desc": "The genie power to grant wishes is legendary among mortals. Only the most\
    \ potent genies, such as those among the nobility, can do so. A particular genie\
    \ that has this power can grant one to three wishes to a creature that isn't a\
    \ genie. Once a genie has granted its limit of wishes, it can't grant wishes again\
    \ for some amount of time (usually 1 year), and cosmic law dictates that the same\
    \ genie can expend its limit of wishes on a specific creature only once in that\
    \ creature's existence.\n\nTo be granted a wish, a creature within 60 feet of\
    \ the genie states a desired effect to it. The genie can then cast the [wish](compendium/spells/wish.md)\
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
    \ succeed on a DC 18 Strength check or be knocked [prone](/compendium/rules/conditions.md#Prone)."
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