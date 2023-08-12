---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/underwater
- monster/size/medium
- monster/type/humanoid/druid
statblock: inline
---
# Archdruid
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 48, Volo's Guide to Monsters p. 210*  

Archdruids watch over the natural wonders of their domains. They seldom interact with folk away from their druid groves and shrines, unless there is a great threat to the natural order or to a nearby community. An archdruid typically has one or more pupils who are [[5. Mechanics/Bestiary/Humanoid/Druid|druids]], and the archdruid's lair is usually guarded by loyal Beasts and Fey creatures.

When an archdruid uses their Change Shape action, you may choose the creature they turn into, abiding by the action's restrictions. Or you may roll on the Archdruid Favored Shapes table to determine the form the archdruid adopts.

**Archdruid Favored Shapes**

| dice: d8 | Favored Shape |
|----------|---------------|
| 1 | [[/5. Mechanics/Bestiary/Elemental/Air Elemental.md|Air elemental]] |
| 2 | [[/5. Mechanics/Bestiary/Elemental/Earth Elemental.md|Earth elemental]] |
| 3 | [[/5. Mechanics/Bestiary/Elemental/Fire Elemental.md|Fire elemental]] |
| 4 | [[/5. Mechanics/Bestiary/Beast/Giant Crocodile.md|Giant crocodile]] |
| 5 | [[/5. Mechanics/Bestiary/Beast/Mammoth.md|Mammoth]] |
| 6 | [[/5. Mechanics/Bestiary/Elemental/Flail Snail (MPMM).md|Flail snail]] |
| 7 | [[/5. Mechanics/Bestiary/Beast/Triceratops.md|Triceratops]] |
| 8 | [[/5. Mechanics/Bestiary/Elemental/Water Elemental.md|Water elemental]] |
^archdruid-favored-shapes

```statblock
"name": "Archdruid"
"size": "Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "154"
"hit_dice": "28d8 + 28"
"stats":
- !!int "14"
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "20"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
"skillsaves":
  "Medicine": !!int "9"
  "Nature": !!int "5"
  "Perception": !!int "9"
"senses": "passive Perception 19"
"languages": "Druidic plus any two languages"
"cr": "12"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The archdruid casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 17):\n\nAt will: [[/5. Mechanics/Spells/Beast Sense.md|beast sense]],\
    \ [[/5. Mechanics/Spells/Entangle.md|entangle]], [[/5. Mechanics/Spells/Speak With Animals.md|speak with animals]]\n\
    \n1/day each: [[/5. Mechanics/Spells/Commune With Nature.md|commune with nature]]\
    \ (as an action), [[/5. Mechanics/Spells/Mass Cure Wounds.md|mass cure wounds]]\n\
    \n3/day each: [[/5. Mechanics/Spells/Animal Messenger.md|animal messenger]],\
    \ [[/5. Mechanics/Spells/Dominate Beast.md|dominate beast]], [[/5. Mechanics/Spells/Faerie Fire.md|faerie fire]],\
    \ [[/5. Mechanics/Spells/Tree Stride.md|tree stride]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The archdruid makes three Staff or Wildfire attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) bludgeoning damage plus dice: 6d6|avg\
    \ (6d6) poison damage."
  "name": "Staff"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+9 (+9 to hit), range 120 ft., one target.\
    \ Hit: dice: 6d6 + 5|avg (6d6 + 5) fire damage, and the target is [[5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ until the start of the druid's next turn."
  "name": "Wildfire"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The archdruid magically transforms into a Beast or an Elemental with a\
    \ challenge rating of 6 or less and can remain in that form for up to 9 hours.\
    \ The archdruid can choose whether its equipment falls to the ground, melds with\
    \ its new form, or is worn by the new form. The archdruid reverts to its true\
    \ form if it dies or falls [[5. Mechanics/Rules/Conditions.md#unconscious|unconscious]].\
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
"image": "5. Mechanics/Bestiary/Humanoid/token/archdruid.png"
```
^statblock

## Environment

forest, mountain, swamp, underwater