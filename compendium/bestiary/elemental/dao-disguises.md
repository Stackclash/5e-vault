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
aliases: ["Dao (Disguises)"]
---
# [Dao (Disguises)](compendium\bestiary\elemental/dao-disguises.md)
*Source: Monster Manual p. 143, Tasha's Cauldron of Everything*

```statblock
"name": "Dao (Disguises)"
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
    \ [detect magic](compendium/spells/detect-magic.md), [stone shape](compendium/spells/stone-shape.md),\
    \ [disguise self](compendium/spells/disguise-self.md) (often with a longer duration\
    \ than is normal for that spell; see Disguises)\n\n1/day each: [conjure elemental](compendium/spells/conjure-elemental.md)\
    \ ([earth elemental](compendium/bestiary/elemental/earth-elemental.md) only),\
    \ [gaseous form](compendium/spells/gaseous-form.md), [invisibility](compendium/spells/invisibility.md),\
    \ [phantasmal killer](compendium/spells/phantasmal-killer.md), [plane shift](compendium/spells/plane-shift.md),\
    \ [wall of stone](compendium/spells/wall-of-stone.md)\n\n3/day each: [passwall](compendium/spells/passwall.md),\
    \ [move earth](compendium/spells/move-earth.md), [tongues](compendium/spells/tongues.md),\
    \ [true polymorph](compendium/spells/true-polymorph.md) (mightier genies only;\
    \ see Disguises)"
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
- "desc": "Some genies can veil themselves in illusion to pass as other similarly\
    \ shaped creatures. Such genies can innately cast the [disguise self](compendium/spells/disguise-self.md)\
    \ spell at will, often with a longer duration than is normal for that spell. Mightier\
    \ genies can cast the [true polymorph](compendium/spells/true-polymorph.md) spell\
    \ one to three times per day, possibly with a longer duration than normal. Such\
    \ genies can change only their own shape, but a rare few can use the spell on\
    \ other creatures and objects as well."
  "name": "Disguises"
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