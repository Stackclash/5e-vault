---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 'forest, mountain, swamp, underwater'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/12
  - monster/environment/forest
  - monster/environment/mountain
  - monster/environment/swamp
  - monster/environment/underwater
  - monster/size/medium
  - monster/type/humanoid/druid
aliases:
  - Archdruid
---
# [[5. Mechanics\Bestiary\Humanoid\Archdruid (MPMM).md|Archdruid]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 48, Volo's Guide to Monsters p. 210*

Archdruids watch over the natural wonders of their domains. They seldom interact with folk away from their druid groves and shrines, unless there is a great threat to the natural order or to a nearby community. An archdruid typically has one or more pupils who are [[5. Mechanics/Bestiary/Humanoid/Druid.md|druids]], and the archdruid's lair is usually guarded by loyal Beasts and Fey creatures.

When an archdruid uses their Change Shape action, you may choose the creature they turn into, abiding by the action's restrictions. Or you may roll on the Archdruid Favored Shapes table to determine the form the archdruid adopts.

**Archdruid Favored Shapes**

`dice: [[Archdruid (MPMM).md#^archdruid-favored-shapes]]`

| dice: d8 | Favored Shape |
|----------|---------------|
| 1 | [[5. Mechanics/Bestiary/Elemental/Air Element(AL).md|Air elemental]] |
| 2 | [[5. Mechanics/Bestiary/Elemental/Earth Element(AL).md|Earth elemental]] |
| 3 | [[5. Mechanics/Bestiary/Elemental/Fire Element(AL).md|Fire elemental]] |
| 4 | [[5. Mechanics/Bestiary/Beast/Giant Crocodile.md|Giant crocodile]] |
| 5 | [[5. Mechanics/Bestiary/Beast/Mammoth.md|Mammoth]] |
| 6 | [[5. Mechanics/Bestiary/Elemental/Flail Snail (MPMM).md|Flail snail]] |
| 7 | [[5. Mechanics/Bestiary/Beast/Triceratops.md|Triceratops]] |
| 8 | [[5. Mechanics/Bestiary/Elemental/Water Element(AL).md|Water elemental]] |
^archdruid-favored-shapes

```statblock
"name": "Archdruid (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Hide Armor.md|hide armor]]"
"hp": !!int "154"
"hit_dice": "28d8 + 28"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "12"
  - !!int "12"
  - !!int "20"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": "+5"
  - "wisdom": "+9"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Medicine|Medicine]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+9"
"senses": "passive Perception 19"
"languages": "Druidic plus any two languages"
"cr": "12"
"actions":
  - "desc": "The archdruid makes three Staff or Wildfire attacks. It can replace one\
      \ attack with a use of Spellcasting."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) bludgeoning damage plus 21 (6d6) poison damage."
    "name": "Staff"
  - "desc": "Ranged Spell Attack: +9 to hit, range 120 ft., one target. Hit: 26\
      \ (6d6 + 5) fire damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
      \ until the start of the druid's next turn."
    "name": "Wildfire"
  - "desc": "The archdruid casts one of the following spells, using Wisdom as the\
      \ spellcasting ability (spell save DC 17):\n\nAt will: [[5. Mechanics/Spells/Beast Sense.md|beast sense]],\
      \ [[5. Mechanics/Spells/Entangle.md|entangle]], [[5. Mechanics/Spells/Speak With Animals.md|speak with animals]]\n\
      \n3/day each: [[5. Mechanics/Spells/Animal Messenger.md|animal messenger]],\
      \ [[5. Mechanics/Spells/Dominate Beast.md|dominate beast]], [[5. Mechanics/Spells/Faerie Fire.md|faerie fire]],\
      \ [[5. Mechanics/Spells/Tree Stride.md|tree stride]]\n\n1/day each: [[5. Mechanics/Spells/Commune With Nature.md|commune\
      \ with nature]] (as an action), [[5. Mechanics/Spells/Mass Cure Wounds.md|mass\
      \ cure wounds]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The archdruid magically transforms into a Beast or an Elemental with\
      \ a challenge rating of 6 or less and can remain in that form for up to 9 hours.\
      \ The archdruid can choose whether its equipment falls to the ground, melds\
      \ with its new form, or is worn by the new form. The archdruid reverts to its\
      \ true form if it dies or falls [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]].\
      \ The archdruid can revert to its true form using a bonus action.\n\nWhile in\
      \ a new form, the archdruid's stat block is replaced by the stat block of that\
      \ form, except the archdruid keeps its current hit points, its hit point maximum,\
      \ this bonus action, its languages and ability to speak, and its Spellcasting\
      \ action.\n\nThe new form's attacks count as magical for the purpose of overcoming\
      \ resistances and immunity to nonmagical attacks."
    "name": "Change Shape (2/Day)"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/archdruid-mpmm.webp"
```
^statblock

## Environment

forest, mountain, swamp, underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
