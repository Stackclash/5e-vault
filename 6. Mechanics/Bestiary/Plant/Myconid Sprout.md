---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/small
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
"name": "Myconid Sprout"
"size": "Small"
"type": "plant"
"alignment": "Lawful Neutral"
"ac": !!int "10"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "8"
- !!int "11"
- !!int "5"
"speed": "walk 10 ft."
"senses": "darkvision 120 ft., passive Perception 10"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the myconid takes damage, all other myconids within 240 feet of it\
    \ can sense its pain."
  "name": "Distress Spores"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the myconid has disadvantage on ability checks, attack\
    \ rolls, and saving throws. The myconid dies if it spends more than 1 hour in\
    \ direct sunlight."
  "name": "Sun Sickness"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+1 (+1 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 - 1|avg (1d4 - 1) bludgeoning damage plus dice: 1d4|avg\
    \ (1d4) poison damage."
  "name": "Fist"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A 10-foot radius of spores extends from the myconid. These spores can go\
    \ around corners and affect only creatures with an Intelligence of 2 or higher\
    \ that aren't undead, constructs, or elementals. Affected creatures can communicate\
    \ telepathically with one another while they are within 30 feet of each other.\
    \ The effect lasts for 1 hour."
  "name": "Rapport Spores (3/Day)"
"source":
- "MM"
- "WDMM"
- "DoSI"
"image": "/compendium/bestiary/plant/token/myconid-sprout.png"
aliases: ["Myconid Sprout"]
---
# Myconid Sprout
*Source: Monster Manual p. 230, Waterdeep: Dungeon of the Mad Mage, Dragons of Stormwreck Isle*  

Myconids are intelligent, ambulatory fungi that live in the Underdark, seek enlightenment, and deplore violence. If approached peacefully, myconids gladly provide shelter or allow safe passage through their colonies.

## Circles and Melds

The largest myconid in a colony is its sovereign, which presides over one or more social groups called circles. A circle consists of twenty or more myconids that work, live, and meld together.

A meld is a form of communal meditation that allows myconids to transcend their dull subterranean existence. The myconids' rapport spores bind the participants into a group consciousness. Hallucination spores then induce a shared dream that provides entertainment and social interaction. Myconids consider melding to be the purpose of their existence. They use it in the pursuit of higher consciousness, collective union, and spiritual apotheosis. Myconids also use their rapport spores to communicate telepathically with other sentient creatures.

## Myconid Reproduction

Like other fungi, myconids reproduce by mundane sporing. They carefully control their spores' release to avoid overpopulation.

## Stat Block

```ad-statblock
title: Myconid Sprout
![[/6. Mechanics/Bestiary/Plant/Token/myconid-sprout.png#token]]
*Small plant, Lawful Neutral*

- **Armor Class** 10 
- **Hit Points** `dice: 2d6|text(7)` (2d6) 
- **Speed** walk 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|10 (+0)|10 (+0)| 8 (-1)|11 (+0)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 10
- **Languages** —
- **Challenge** 0

## Traits

***Distress Spores.*** When the myconid takes damage, all other myconids within 240 feet of it can sense its pain.

***Sun Sickness.*** While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight.

## Actions

***Fist.*** *Melee Weapon Attack:* `dice: d20+1` (+1 to hit), reach 5 ft., one target. Hit: `dice: 1d4 - 1|avg` (`1d4 - 1`) bludgeoning damage plus `dice: 1d4` (`1d4`) poison damage.

***Rapport Spores (3/Day).*** A 10-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour.
```
^statblock

## Environment

underdark