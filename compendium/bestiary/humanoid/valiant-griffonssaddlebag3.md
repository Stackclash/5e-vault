---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/7
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Valiant"]
---
# [Valiant](compendium\bestiary\humanoid/valiant-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Valiants are stoic warlocks that form a pact with creatures like Fey Knights, righteous spirits, or other famed warriors of ages long past and ageless power. Sometimes, valiants find themselves confused or conflated with paladins or clerics, but these warriors draw their magic through an arcane pact with an entity of great renown, rather than via divine methods. Warriors of truth, justice, and other similar heroic ideals, valiants make stalwart and trustworthy companions.

```statblock
"name": "Valiant (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Evil alignment"
"ac": !!int "18"
"ac_class": "[half plate](compendium/items/half-plate-armor.md), [shield](compendium/items/shield.md)"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "15"
- !!int "13"
- !!int "16"
- !!int "11"
- !!int "12"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "Intimidation": !!int "7"
  "Perception": !!int "4"
  "History": !!int "4"
"damage_resistances": "see heroic resistance trait"
"condition_immunities": "[frightened](/compendium/rules/conditions.md#Frightened)"
"senses": "passive Perception 14"
"languages": "Common plus one other language"
"cr": "7"
"traits":
- "desc": "The valiant's innate spellcasting ability is Charisma. It can innately\
    \ cast the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [detect magic](compendium/spells/detect-magic.md), [speak with\
    \ dead](compendium/spells/speak-with-dead.md)\n\n1/day each: [mass suggestion](compendium/spells/mass-suggestion.md),\
    \ [slow](compendium/spells/slow.md)"
  "name": "Innate Spellcasting"
- "desc": "The valiant is a 12th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\nCantrips (at will): [eldritch blast](compendium/spells/eldritch-blast.md)\
    \ (3 beams, +4 to each damage roll), [minor illusion](compendium/spells/minor-illusion.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md), [true strike](compendium/spells/true-strike.md)\n\
    \n1st-5th level (3 slots): [banishment](compendium/spells/banishment.md),\
    \ [beacon of hope](compendium/spells/beacon-of-hope.md), [blur](compendium/spells/blur.md),\
    \ [dispel evil and good](compendium/spells/dispel-evil-and-good.md), [find steed](compendium/spells/find-steed.md),\
    \ [fire shield](compendium/spells/fire-shield.md), [fly](compendium/spells/fly.md),\
    \ [healing word](compendium/spells/healing-word.md), [heroism](compendium/spells/heroism.md),\
    \ [hold person](compendium/spells/hold-person.md), [protection from evil and good](compendium/spells/protection-from-evil-and-good.md)"
  "name": "Spellcasting"
- "desc": "Whenever the valiant finishes a short or long rest, it can choose either\
    \ bludgeoning, piercing, or slashing damage. The valiant has resistance to that\
    \ damage type until it chooses a different one with this trait."
  "name": "Heroic Resistance"
- "desc": "When the valiant hits a creature with eldritch blast or its Eldritch Blade,\
    \ it can push the creature up to 10 feet away from it in a straight line."
  "name": "Repelling Blast"
"actions":
- "desc": "The valiant makes three Eldritch Blade attacks.\n\nIt can make an attack\
    \ with its longsword in place of one Eldritch Blade attack."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) force damage."
  "name": "Eldritch Blade"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands,\
    \ plus 4 necrotic damage."
  "name": "Longsword"
"reactions":
- "desc": "When the valiant is hit by an attack, it casts the [shield](compendium/spells/shield.md)\
    \ spell, without expending a spell slot and requiring no components.\n\nFor the\
    \ duration of the spell, whenever a creature attacks the valiant (including the\
    \ triggering attacker), that creature takes 10 force damage."
  "name": "Vengeful Shield (Recharges after a Short or Long Rest)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```