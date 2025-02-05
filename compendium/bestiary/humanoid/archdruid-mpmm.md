---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: forest, mountain, swamp, underwater
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
aliases: ["Archdruid"]
---
# [Archdruid](compendium\bestiary\humanoid/archdruid-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 48, Volo's Guide to Monsters p. 210*

Archdruids watch over the natural wonders of their domains. They seldom interact with folk away from their druid groves and shrines, unless there is a great threat to the natural order or to a nearby community. An archdruid typically has one or more pupils who are [druids](compendium/bestiary/humanoid/druid.md), and the archdruid's lair is usually guarded by loyal Beasts and Fey creatures.

When an archdruid uses their Change Shape action, you may choose the creature they turn into, abiding by the action's restrictions. Or you may roll on the Archdruid Favored Shapes table to determine the form the archdruid adopts.

**Archdruid Favored Shapes**

`dice: [](archdruid-mpmm.md#^archdruid-favored-shapes)`

| dice: d8 | Favored Shape |
|----------|---------------|
| 1 | [Air elemental](compendium/bestiary/elemental/air-elemental.md) |
| 2 | [Earth elemental](compendium/bestiary/elemental/earth-elemental.md) |
| 3 | [Fire elemental](compendium/bestiary/elemental/fire-elemental.md) |
| 4 | [Giant crocodile](compendium/bestiary/beast/giant-crocodile.md) |
| 5 | [Mammoth](compendium/bestiary/beast/mammoth.md) |
| 6 | [Flail snail](compendium/bestiary/elemental/flail-snail-mpmm.md) |
| 7 | [Triceratops](compendium/bestiary/beast/triceratops.md) |
| 8 | [Water elemental](compendium/bestiary/elemental/water-elemental.md) |
^archdruid-favored-shapes

```statblock
"name": "Archdruid (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[hide armor](compendium/items/hide-armor.md)"
"hp": !!int "154"
"hit_dice": "28d8 + 28"
"stats":
- !!int "14"
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "20"
- !!int "11"
"speed": "30 ft."
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
- "desc": "The archdruid casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 17):\n\nAt will: [beast sense](compendium/spells/beast-sense.md),\
    \ [entangle](compendium/spells/entangle.md), [speak with animals](compendium/spells/speak-with-animals.md)\n\
    \n1/day each: [commune with nature](compendium/spells/commune-with-nature.md)\
    \ (as an action), [mass cure wounds](compendium/spells/mass-cure-wounds.md)\n\n\
    3/day each: [animal messenger](compendium/spells/animal-messenger.md), [dominate\
    \ beast](compendium/spells/dominate-beast.md), [faerie fire](compendium/spells/faerie-fire.md),\
    \ [tree stride](compendium/spells/tree-stride.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The archdruid makes three Staff or Wildfire attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage plus 21 (6d6) poison damage."
  "name": "Staff"
- "desc": "Ranged Spell Attack: +9 to hit, range 120 ft., one target. Hit: 26\
    \ (6d6 + 5) fire damage, and the target is [blinded](/compendium/rules/conditions.md#Blinded)\
    \ until the start of the druid's next turn."
  "name": "Wildfire"
"bonus_actions":
- "desc": "The archdruid magically transforms into a Beast or an Elemental with a\
    \ challenge rating of 6 or less and can remain in that form for up to 9 hours.\
    \ The archdruid can choose whether its equipment falls to the ground, melds with\
    \ its new form, or is worn by the new form. The archdruid reverts to its true\
    \ form if it dies or falls [unconscious](/compendium/rules/conditions.md#Unconscious).\
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
"image": "compendium/bestiary/humanoid/token/archdruid-mpmm.webp"
```
^statblock

## Environment

forest, mountain, swamp, underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```