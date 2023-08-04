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
name: Archdruid
ac: 14
hp: 154
hit_dice: 28d8 + 28
cr: '12'
stats: [
  14,
  14,
  12,
  12,
  20,
  11
]
source: [
  MPMM,
  VGM
]
aliases: ["Archdruid"]
---
# Archdruid
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 48, Volo's Guide to Monsters p. 210*  

Archdruids watch over the natural wonders of their domains. They seldom interact with folk away from their druid groves and shrines, unless there is a great threat to the natural order or to a nearby community. An archdruid typically has one or more pupils who are [[/6. Mechanics/Bestiary/Humanoid/druid.md\|druids]], and the archdruid's lair is usually guarded by loyal Beasts and Fey creatures.

When an archdruid uses their Change Shape action, you may choose the creature they turn into, abiding by the action's restrictions. Or you may roll on the Archdruid Favored Shapes table to determine the form the archdruid adopts.

**Archdruid Favored Shapes**

| dice: d8 | Favored Shape |
|----------|---------------|
| 1 | [[/6. Mechanics/Bestiary/Elemental/Air Elemental.md\|Air elemental]] |
| 2 | [[/6. Mechanics/Bestiary/Elemental/Earth Elemental.md\|Earth elemental]] |
| 3 | [[/6. Mechanics/Bestiary/Elemental/Fire Elemental.md\|Fire elemental]] |
| 4 | [[/6. Mechanics/Bestiary/Beast/Giant Crocodile.md\|Giant crocodile]] |
| 5 | [[/6. Mechanics/Bestiary/Beast/Mammoth.md\|Mammoth]] |
| 6 | [[/6. Mechanics/Bestiary/Elemental/Flail Snail (MPMM).md\|Flail snail]] |
| 7 | [[/6. Mechanics/Bestiary/Beast/Triceratops.md\|Triceratops]] |
| 8 | [[/6. Mechanics/Bestiary/Elemental/Water Elemental.md\|Water elemental]] |
^archdruid-favored-shapes

```ad-statblock
title: Archdruid
![[/6. Mechanics/Bestiary/Humanoid/Token/archdruid.png#token]]
*Medium humanoid(druid), Any alignment*

- **Armor Class** 14 ([[/6. Mechanics/Items/hide-armor.md\|hide armor]])
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

**At will**: [[/6. Mechanics/Spells/beast-sense.md\|beast sense]], [[/6. Mechanics/Spells/entangle.md\|entangle]], [[/6. Mechanics/Spells/speak-with-animals.md\|speak with animals]]

**1/day each**: [[/6. Mechanics/Spells/commune-with-nature.md\|commune with nature]] (as an action), [[/6. Mechanics/Spells/mass-cure-wounds.md\|mass cure wounds]]

**3/day each**: [[/6. Mechanics/Spells/animal-messenger.md\|animal messenger]], [[/6. Mechanics/Spells/dominate-beast.md\|dominate beast]], [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]], [[/6. Mechanics/Spells/tree-stride.md\|tree stride]]

## Actions

***Multiattack.*** The archdruid makes three Staff or Wildfire attacks. It can replace one attack with a use of Spellcasting.

***Staff.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2\|avg` (`1d6 + 2`) bludgeoning damage plus `dice: 6d6\|avg` (`6d6`) poison damage.

***Wildfire.*** *Ranged Spell Attack:* `dice: d20+9` (+9 to hit), range 120 ft., one target. Hit: `dice: 6d6 + 5\|avg` (`6d6 + 5`) fire damage, and the target is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] until the start of the druid's next turn.

## Bonus Actions

***Change Shape (2/Day).*** The archdruid magically transforms into a Beast or an Elemental with a challenge rating of 6 or less and can remain in that form for up to 9 hours. The archdruid can choose whether its equipment falls to the ground, melds with its new form, or is worn by the new form. The archdruid reverts to its true form if it dies or falls [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]]. The archdruid can revert to its true form using a bonus action.

While in a new form, the archdruid's stat block is replaced by the stat block of that form, except the archdruid keeps its current hit points, its hit point maximum, this bonus action, its languages and ability to speak, and its Spellcasting action.

The new form's attacks count as magical for the purpose of overcoming resistances and immunity to nonmagical attacks.
```
^statblock

## Environment

forest, mountain, swamp, underwater