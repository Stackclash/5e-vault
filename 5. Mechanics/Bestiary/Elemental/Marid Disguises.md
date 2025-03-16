---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: 'underwater, coastal'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/11
  - monster/environment/coastal
  - monster/environment/underwater
  - monster/size/large
  - monster/type/elemental
aliases:
  - Marid (Disguises)
---
# [[5. Mechanics/Bestiary/Elemental/Marid Disguises.md|Marid (Disguises)]]
*Source: Monster Manual p. 146, Tasha's Cauldron of Everything, Vecna: Eve of Ruin*

```statblock
"name": "Marid Disguises"
"size": "Large"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "229"
"hit_dice": "17d10 + 136"
"stats":
- !!int "22"
- !!int "12"
- !!int "26"
- !!int "18"
- !!int "17"
- !!int "18"
"speed": "30 ft., fly 60 ft., swim 90 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
"damage_resistances": "acid, cold, lightning"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 13"
"languages": "Aquan"
"cr": "11"
"traits":
- "desc": "The marid's innate spellcasting ability is Charisma (spell save DC 16,\
    \ +8 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [[5. Mechanics/Spells/Create Or Destroy Water.md|create or destroy water]],\
    \ [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Fog Cloud.md|fog cloud]], [[5. Mechanics/Spells/Purify Food And Drink.md|purify food and drink]],\
    \ [[5. Mechanics/Spells/Disguise Self.md|disguise self]] (often with a longer duration\
    \ than is normal for that spell; see Disguises)\n\n1/day each: [[5. Mechanics/Spells/Conjure Element(AL).md|conjure elemental]]\
    \ ([[5. Mechanics/Bestiary/Elemental/Water Element(AL).md|water elemental]] only),\
    \ [[5. Mechanics/Spells/Control Water.md|control water]], [[5. Mechanics/Spells/Gaseous Form.md|gaseous form]],\
    \ [[5. Mechanics/Spells/Invisibility.md|invisibility]], [[5. Mechanics/Spells/Plane Shift.md|plane shift]]\n\
    \n3/day each: [[5. Mechanics/Spells/Tongues.md|tongues]], [[5. Mechanics/Spells/Water Breathing.md|water breathing]],\
    \ [[5. Mechanics/Spells/Water Wa(LK).md|water walk]], [[5. Mechanics/Spells/True Polymorph.md|true polymorph]]\
    \ (mightier genies only; see Disguises)"
  "name": "Innate Spellcasting"
- "desc": "The marid can breathe air and water."
  "name": "Amphibious"
- "desc": "If the marid dies, its body disintegrates into a burst of water and foam,\
    \ leaving behind only equipment the marid was wearing or carrying."
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
- "desc": "The marid makes two trident attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +10 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 13 (2d6 + 6) piercing damage, or 15 (2d8 + 6) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Trident"
- "desc": "The marid magically shoots water in a 60-foot line that is 5 feet wide.\
    \ Each creature in that line must make a DC 16 Dexterity saving throw. On a failure,\
    \ a target takes 21 (6d6) bludgeoning damage and, if it is Huge or smaller, is\
    \ pushed up to 20 feet away from the marid and knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ On a success, a target takes half the bludgeoning damage, but is neither pushed\
    \ nor knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Water Jet"
"source":
- "MM"
- "TCE"
- "VEoR"
```
^statblock

## Environment

underwater, coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
