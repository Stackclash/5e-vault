---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 'arctic, forest, mountain, swamp, urban'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\4
  - monster\Environment\Arctic
  - monster\Environment\Forest
  - monster\Environment\Mountain
  - monster\Environment\Swamp
  - monster\Environment\Urban
  - monster\Size\Medium
  - monster\Type\Humanoid
aliases:
  - Warlock of the Archfey
---
# [[5. Mechanics\Bestiary\Humanoid\Warlock Of The Archfey (MPMM).md|Warlock of the Archfey]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 255, Volo's Guide to Monsters p. 219*

Warlocks of the Archfey gain their powers through magical pacts forged with lords of the Feywild. These warlocks commonly associate with lesser Fey creatures such as [[5. Mechanics/Bestiary/Fey/Boggle (MPMM).md|boggles]], [[5. Mechanics/Bestiary/Fey/Quickling (MPMM).md|quicklings]], and [[5. Mechanics/Bestiary/Fey/Redcap (MPMM).md|redcaps]] (all appear in "this book") or even [[5. Mechanics/Bestiary/Fey/Satyr.md|satyrs]] and [[5. Mechanics/Bestiary/Fey/Sprite.md|sprites]].

## Warlocks

Warlocks gain arcane might through magical pacts with mysterious entities. While some use their abilities to serve the sources of their power, others use them to undermine or even destroy these entities.

```statblock
"name": "Warlock Of The Archfey (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "16 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "67"
"hit_dice": "15d8"
"stats":
- !!int "9"
- !!int "16"
- !!int "11"
- !!int "11"
- !!int "12"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Nature": !!int "2"
  "Deception": !!int "6"
  "Arcana": !!int "2"
  "Persuasion": !!int "6"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]"
"senses": "passive Perception 11"
"languages": "any two languages (usually Sylvan)"
"cr": "4"
"traits":
- "desc": "The warlock casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 14): \n\nAt will: [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
    \ [[5. Mechanics/Spells/Disguise Self.md|disguise self]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]]\
    \ (self only), [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]], [[5. Mechanics/Spells/Speak With Animals.md|speak with animals]]\n\
    \n1/day each: [[5. Mechanics/Spells/Charm Person.md|charm person]], [[5. Mechanics/Spells/Dimension Door.md|dimension\
    \ door]], [[5. Mechanics/Spells/Hold Monster.md|hold monster]]"
  "name": "Spellcasting"
"actions":
- "desc": "The warlock makes two Rapier attacks, or it uses Bewildering Word twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 7 (2d6) force damage."
  "name": "Rapier"
- "desc": "The warlock utters a magical bewilderment, targeting one creature it can\
    \ see within 60 feet of it. The target must succeed on a DC 14 Wisdom saving throw\
    \ or take 9 (2d8) psychic damage and have disadvantage on attack rolls until the\
    \ end of the warlock's next turn."
  "name": "Bewildering Word"
"reactions":
- "desc": "In response to taking damage, the warlock turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
    \ and teleports, along with any equipment it is wearing or carrying, up to 60\
    \ feet to an unoccupied space it can see. It remains [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
    \ until the start of its next turn or until it attacks, makes a damage roll, or\
    \ casts a spell."
  "name": "Misty Escape (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/warlock-of-the-archfey-mpmm.webp"
```
^statblock

## Environment

arctic, forest, mountain, swamp, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
