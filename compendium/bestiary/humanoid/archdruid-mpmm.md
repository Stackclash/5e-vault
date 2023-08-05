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
statblock: true
statblock-link: "#^statblock"
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
    \ ability (spell save DC 17):\n\nAt will: [beast sense](/compendium/spells/beast-sense.md),\
    \ [entangle](/compendium/spells/entangle.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n1/day each: [commune with nature](/compendium/spells/commune-with-nature.md)\
    \ (as an action), [mass cure wounds](/compendium/spells/mass-cure-wounds.md)\n\
    \n3/day each: [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [dominate beast](/compendium/spells/dominate-beast.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [tree stride](/compendium/spells/tree-stride.md)"
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
    \ Hit: dice: 6d6 + 5|avg (6d6 + 5) fire damage, and the target is [blinded](compendium/rules/conditions.md#blinded)\
    \ until the start of the druid's next turn."
  "name": "Wildfire"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The archdruid magically transforms into a Beast or an Elemental with a\
    \ challenge rating of 6 or less and can remain in that form for up to 9 hours.\
    \ The archdruid can choose whether its equipment falls to the ground, melds with\
    \ its new form, or is worn by the new form. The archdruid reverts to its true\
    \ form if it dies or falls [unconscious](compendium/rules/conditions.md#unconscious).\
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
"image": "/compendium/bestiary/humanoid/token/archdruid.png"
aliases: ["Archdruid"]
---
# Archdruid
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 48, Volo's Guide to Monsters p. 210*  

Archdruids watch over the natural wonders of their domains. They seldom interact with folk away from their druid groves and shrines, unless there is a great threat to the natural order or to a nearby community. An archdruid typically has one or more pupils who are [druids](/compendium/bestiary/humanoid/druid.md), and the archdruid's lair is usually guarded by loyal Beasts and Fey creatures.

When an archdruid uses their Change Shape action, you may choose the creature they turn into, abiding by the action's restrictions. Or you may roll on the Archdruid Favored Shapes table to determine the form the archdruid adopts.

**Archdruid Favored Shapes**

| dice: d8 | Favored Shape |
|----------|---------------|
| 1 | [Air elemental](/compendium/bestiary/elemental/air-elemental.md) |
| 2 | [Earth elemental](/compendium/bestiary/elemental/earth-elemental.md) |
| 3 | [Fire elemental](/compendium/bestiary/elemental/fire-elemental.md) |
| 4 | [Giant crocodile](/compendium/bestiary/beast/giant-crocodile.md) |
| 5 | [Mammoth](/compendium/bestiary/beast/mammoth.md) |
| 6 | [Flail snail](/compendium/bestiary/elemental/flail-snail-mpmm.md) |
| 7 | [Triceratops](/compendium/bestiary/beast/triceratops.md) |
| 8 | [Water elemental](/compendium/bestiary/elemental/water-elemental.md) |
^archdruid-favored-shapes

```ad-statblock
title: Archdruid
![](/compendium/bestiary/humanoid/token/archdruid.png#token)
*Medium humanoid(druid), Any alignment*

- **Armor Class** 14 ([hide armor](/compendium/items/hide-armor.md))
- **Hit Points** `dice: 28d8 + 28|text(154)` (28d8 + 28) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|14 (+2)|12 (+1)|12 (+1)|20 (+5)|11 (+0)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +5, Wisdom +9
- **Skills** Medicine +9, Nature +5, Perception +9
- **Senses** passive Perception 19
- **Languages** Druidic plus any two languages
- **Challenge** 12

***Spellcasting.*** The archdruid casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 17):

**At will**: [beast sense](/compendium/spells/beast-sense.md), [entangle](/compendium/spells/entangle.md), [speak with animals](/compendium/spells/speak-with-animals.md)

**1/day each**: [commune with nature](/compendium/spells/commune-with-nature.md) (as an action), [mass cure wounds](/compendium/spells/mass-cure-wounds.md)

**3/day each**: [animal messenger](/compendium/spells/animal-messenger.md), [dominate beast](/compendium/spells/dominate-beast.md), [faerie fire](/compendium/spells/faerie-fire.md), [tree stride](/compendium/spells/tree-stride.md)

## Actions

***Multiattack.*** The archdruid makes three Staff or Wildfire attacks. It can replace one attack with a use of Spellcasting.

***Staff.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) bludgeoning damage plus `dice: 6d6|avg` (`6d6`) poison damage.

***Wildfire.*** *Ranged Spell Attack:* `dice: d20+9` (+9 to hit), range 120 ft., one target. Hit: `dice: 6d6 + 5|avg` (`6d6 + 5`) fire damage, and the target is [blinded](compendium/rules/conditions.md#blinded) until the start of the druid's next turn.

## Bonus Actions

***Change Shape (2/Day).*** The archdruid magically transforms into a Beast or an Elemental with a challenge rating of 6 or less and can remain in that form for up to 9 hours. The archdruid can choose whether its equipment falls to the ground, melds with its new form, or is worn by the new form. The archdruid reverts to its true form if it dies or falls [unconscious](compendium/rules/conditions.md#unconscious). The archdruid can revert to its true form using a bonus action.

While in a new form, the archdruid's stat block is replaced by the stat block of that form, except the archdruid keeps its current hit points, its hit point maximum, this bonus action, its languages and ability to speak, and its Spellcasting action.

The new form's attacks count as magical for the purpose of overcoming resistances and immunity to nonmagical attacks.
```
^statblock

## Environment

forest, mountain, swamp, underwater