---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: coastal
size: Large
tags:
- compendium/src/5e/mm
- monster/cr/11
- monster/environment/coastal
- monster/size/large
- monster/type/elemental
aliases: ["Djinni (Wishes)"]
---
# [Djinni (Wishes)](compendium\bestiary\elemental/djinni-wishes.md)
*Source: Monster Manual p. 144, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Djinni (Wishes)"
"size": "Large"
"type": "elemental"
"alignment": "Chaotic Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "161"
"hit_dice": "14d10 + 84"
"stats":
- !!int "21"
- !!int "15"
- !!int "22"
- !!int "15"
- !!int "16"
- !!int "20"
"speed": "30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
"damage_immunities": "lightning, thunder"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Auran"
"cr": "11"
"traits":
- "desc": "The djinni's innate spellcasting ability is Charisma (spell save DC 17,\
    \ +9 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect evil and good](compendium/spells/detect-evil-and-good.md),\
    \ [detect magic](compendium/spells/detect-magic.md), [thunderwave](compendium/spells/thunderwave.md)\n\
    \n1/day each: [conjure elemental](compendium/spells/conjure-elemental.md)\
    \ ([air elemental](compendium/bestiary/elemental/air-elemental.md) only), [creation](compendium/spells/creation.md),\
    \ [gaseous form](compendium/spells/gaseous-form.md), [invisibility](compendium/spells/invisibility.md),\
    \ [major image](compendium/spells/major-image.md), [plane shift](compendium/spells/plane-shift.md)\n\
    \n3/day each: [create food and water](compendium/spells/create-food-and-water.md)\
    \ (can create wine instead of water), [tongues](compendium/spells/tongues.md),\
    \ [wind walk](compendium/spells/wind-walk.md)"
  "name": "Innate Spellcasting"
- "desc": "If the djinni dies, its body disintegrates into a warm breeze, leaving\
    \ behind only equipment the djinni was wearing or carrying."
  "name": "Elemental Demise"
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
- "desc": "The djinni makes three scimitar attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice)."
  "name": "Scimitar"
- "desc": "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms\
    \ on a point the djinni can see within 120 feet of it. The whirlwind lasts as\
    \ long as the djinni maintains [concentration](/compendium/rules/conditions.md#Concentration)\
    \ (as if [concentrating](/compendium/rules/conditions.md#Concentration) on a spell).\
    \ Any creature but the djinni that enters the whirlwind must succeed on a DC 18\
    \ Strength saving throw or be [restrained](/compendium/rules/conditions.md#Restrained)\
    \ by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures\
    \ [restrained](/compendium/rules/conditions.md#Restrained) by the whirlwind move\
    \ with it. The whirlwind ends if the djinni loses sight of it.\n\nA creature can\
    \ use its action to free a creature [restrained](/compendium/rules/conditions.md#Restrained)\
    \ by the whirlwind, including itself, by succeeding on a DC 18 Strength check.\
    \ If the check succeeds, the creature is no longer [restrained](/compendium/rules/conditions.md#Restrained)\
    \ and moves to the nearest space outside the whirlwind."
  "name": "Create Whirlwind"
"source":
- "MM"
- "TCE"
```
^statblock

## Environment

coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```