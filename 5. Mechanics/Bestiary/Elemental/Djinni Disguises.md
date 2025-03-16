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
aliases:
  - Djinni (Disguises)
---
# [[5. Mechanics/Bestiary/Elemental/Djinni Disguises.md|Djinni (Disguises)]]
*Source: Monster Manual p. 144, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Djinni Disguises"
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
    \ no material components:\n\nAt will: [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]],\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Thunderwave.md|thunderwave]],\
    \ [[5. Mechanics/Spells/Disguise Self.md|disguise self]] (often with a longer duration\
    \ than is normal for that spell; see Disguises)\n\n1/day each: [[5. Mechanics/Spells/Conjure Element(AL).md|conjure elemental]]\
    \ ([[5. Mechanics/Bestiary/Elemental/Air Element(AL).md|air elemental]] only), [[5. Mechanics/Spells/Creation.md|creation]],\
    \ [[5. Mechanics/Spells/Gaseous Form.md|gaseous form]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
    \ [[5. Mechanics/Spells/Major Image.md|major image]], [[5. Mechanics/Spells/Plane Shift.md|plane shift]]\n\
    \n3/day each: [[5. Mechanics/Spells/Create Food And Water.md|create food and water]]\
    \ (can create wine instead of water), [[5. Mechanics/Spells/Tongues.md|tongues]],\
    \ [[5. Mechanics/Spells/Wind Wa(LK).md|wind walk]], [[5. Mechanics/Spells/True Polymorph.md|true polymorph]]\
    \ (mightier genies only; see Disguises)"
  "name": "Innate Spellcasting"
- "desc": "If the djinni dies, its body disintegrates into a warm breeze, leaving\
    \ behind only equipment the djinni was wearing or carrying."
  "name": "Elemental Demise"
- "desc": "Some genies can veil themselves in illusion to pass as other similarly\
    \ shaped creatures. Such genies can innately cast the [[5. Mechanics/Spells/Disguise Self.md|disguise self]]\
    \ spell at will, often with a longer duration than is normal for that spell. Mightier\
    \ genies can cast the [[5. Mechanics/Spells/True Polymorph.md|true polymorph]] spell\
    \ one to three times per day, possibly with a longer duration than normal. Such\
    \ genies can change only their own shape, but a rare few can use the spell on\
    \ other creatures and objects as well."
  "name": "Disguises"
"actions":
- "desc": "The djinni makes three scimitar attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice)."
  "name": "Scimitar"
- "desc": "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms\
    \ on a point the djinni can see within 120 feet of it. The whirlwind lasts as\
    \ long as the djinni maintains [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
    \ (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]] on a spell).\
    \ Any creature but the djinni that enters the whirlwind must succeed on a DC 18\
    \ Strength saving throw or be [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
    \ by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures\
    \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] by the whirlwind move\
    \ with it. The whirlwind ends if the djinni loses sight of it.\n\nA creature can\
    \ use its action to free a creature [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
    \ by the whirlwind, including itself, by succeeding on a DC 18 Strength check.\
    \ If the check succeeds, the creature is no longer [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
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
