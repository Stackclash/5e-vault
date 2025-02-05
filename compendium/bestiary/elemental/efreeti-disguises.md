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
aliases: ["Efreeti (Disguises)"]
---
# [Efreeti (Disguises)](compendium\bestiary\elemental/efreeti-disguises.md)
*Source: Monster Manual p. 145, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Efreeti (Disguises)"
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
    \ no material components:\n\nAt will: [detect magic](compendium/spells/detect-magic.md),\
    \ [disguise self](compendium/spells/disguise-self.md) (often with a longer duration\
    \ than is normal for that spell; see Disguises)\n\n1/day each: [conjure elemental](compendium/spells/conjure-elemental.md)\
    \ ([fire elemental](compendium/bestiary/elemental/fire-elemental.md) only), [gaseous\
    \ form](compendium/spells/gaseous-form.md), [invisibility](compendium/spells/invisibility.md),\
    \ [major image](compendium/spells/major-image.md), [plane shift](compendium/spells/plane-shift.md),\
    \ [wall of fire](compendium/spells/wall-of-fire.md)\n\n3/day each: [enlarge/reduce](compendium/spells/enlarge-reduce.md),\
    \ [tongues](compendium/spells/tongues.md), [true polymorph](compendium/spells/true-polymorph.md)\
    \ (mightier genies only; see Disguises)"
  "name": "Innate Spellcasting"
- "desc": "If the efreeti dies, its body disintegrates in a flash of fire and puff\
    \ of smoke, leaving behind only equipment the efreeti was wearing or carrying."
  "name": "Elemental Demise"
- "desc": "Some genies can veil themselves in illusion to pass as other similarly\
    \ shaped creatures. Such genies can innately cast the [disguise self](compendium/spells/disguise-self.md)\
    \ spell at will, often with a longer duration than is normal for that spell. Mightier\
    \ genies can cast the [true polymorph](compendium/spells/true-polymorph.md) spell\
    \ one to three times per day, possibly with a longer duration than normal. Such\
    \ genies can change only their own shape, but a rare few can use the spell on\
    \ other creatures and objects as well."
  "name": "Disguises"
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