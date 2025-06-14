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
  - Efreeti (Disguises)
---
# [[5. Mechanics\Bestiary\Elemental\Efreeti Disguises.md|Efreeti (Disguises)]]
*Source: Monster Manual p. 145, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Efreeti Disguises"
"size": "Large"
"type": "elemental"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"modifier": !!int "1"
"stats":
  - !!int "22"
  - !!int "12"
  - !!int "24"
  - !!int "16"
  - !!int "15"
  - !!int "16"
"speed": "40 ft., fly 60 ft."
"saves":
  - "intelligence": "+7"
  - "wisdom": "+6"
  - "charisma": "+7"
"damage_immunities": "fire"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Ignan"
"cr": "11"
"traits":
  - "desc": "The efreeti's innate spellcasting ability is Charisma (spell save DC\
      \ 15, +7 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring no material components:\n\nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
      \ [[5. Mechanics/Spells/Disguise Self.md|disguise self]] (often with a longer duration\
      \ than is normal for that spell; see Disguises)\n\n3/day each: [[5. Mechanics/Spells/Enlarge Reduce.md|enlarge/reduce]],\
      \ [[5. Mechanics/Spells/Tongues.md|tongues]], [[5. Mechanics/Spells/True Polymorph.md|true polymorph]]\
      \ (mightier genies only; see Disguises)\n\n1/day each: [[5. Mechanics/Spells/Conjure Element(AL).md|conjure elemental]]\
      \ ([[5. Mechanics/Bestiary/Elemental/Fire Element(AL).md|fire elemental]] only),\
      \ [[5. Mechanics/Spells/Gaseous Form.md|gaseous form]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
      \ [[5. Mechanics/Spells/Major Image.md|major image]], [[5. Mechanics/Spells/Plane Shift.md|plane shift]],\
      \ [[5. Mechanics/Spells/Wall Of Fire.md|wall of fire]]"
    "name": "Innate Spellcasting"
  - "desc": "If the efreeti dies, its body disintegrates in a flash of fire and puff\
      \ of smoke, leaving behind only equipment the efreeti was wearing or carrying."
    "name": "Elemental Demise"
  - "desc": "Some genies can veil themselves in illusion to pass as other similarly\
      \ shaped creatures. Such genies can innately cast the [[5. Mechanics/Spells/Disguise Self.md|disguise self]]\
      \ spell at will, often with a longer duration than is normal for that spell.\
      \ Mightier genies can cast the [[5. Mechanics/Spells/True Polymorph.md|true polymorph]]\
      \ spell one to three times per day, possibly with a longer duration than normal.\
      \ Such genies can change only their own shape, but a rare few can use the spell\
      \ on other creatures and objects as well."
    "name": "Disguises"
"actions":
  - "desc": "The efreeti makes two scimitar attacks or uses its Hurl Flame twice."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d6 + 6) slashing damage plus 7 (2d6) fire damage."
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
