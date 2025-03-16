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
  - Dao (Disguises)
---
# [[5. Mechanics/Bestiary/Elemental/Dao Disguises.md|Dao (Disguises)]]
*Source: Monster Manual p. 143, Tasha's Cauldron of Everything*

```statblock
"name": "Dao Disguises"
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
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Stone Shape.md|stone shape]],\
    \ [[5. Mechanics/Spells/Disguise Self.md|disguise self]] (often with a longer duration\
    \ than is normal for that spell; see Disguises)\n\n1/day each: [[5. Mechanics/Spells/Conjure Element(AL).md|conjure elemental]]\
    \ ([[5. Mechanics/Bestiary/Elemental/Earth Element(AL).md|earth elemental]] only),\
    \ [[5. Mechanics/Spells/Gaseous Form.md|gaseous form]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
    \ [[5. Mechanics/Spells/Phantasmal Killer.md|phantasmal killer]], [[5. Mechanics/Spells/Plane Shift.md|plane shift]],\
    \ [[5. Mechanics/Spells/Wall Of Stone.md|wall of stone]]\n\n3/day each: [[5. Mechanics/Spells/Passwall.md|passwall]],\
    \ [[5. Mechanics/Spells/Move Earth.md|move earth]], [[5. Mechanics/Spells/Tongues.md|tongues]],\
    \ [[5. Mechanics/Spells/True Polymorph.md|true polymorph]] (mightier genies only;\
    \ see Disguises)"
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
- "desc": "Some genies can veil themselves in illusion to pass as other similarly\
    \ shaped creatures. Such genies can innately cast the [[5. Mechanics/Spells/Disguise Self.md|disguise self]]\
    \ spell at will, often with a longer duration than is normal for that spell. Mightier\
    \ genies can cast the [[5. Mechanics/Spells/True Polymorph.md|true polymorph]] spell\
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
