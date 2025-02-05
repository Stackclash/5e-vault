---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/7
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Valiant
---
# [[5. Mechanics\Bestiary\Humanoid\Valiant (GRIFFONSSADDLEBAG3).md|Valiant]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Valiants are stoic warlocks that form a pact with creatures like Fey Knights, righteous spirits, or other famed warriors of ages long past and ageless power. Sometimes, valiants find themselves confused or conflated with paladins or clerics, but these warriors draw their magic through an arcane pact with an entity of great renown, rather than via divine methods. Warriors of truth, justice, and other similar heroic ideals, valiants make stalwart and trustworthy companions.

```statblock
"name": "Valiant (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Evil alignment"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Half Plate Armor.md|half plate]], [[5. Mechanics/Items/Shield.md|shield]]"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "passive Perception 14"
"languages": "Common plus one other language"
"cr": "7"
"traits":
- "desc": "The valiant's innate spellcasting ability is Charisma. It can innately\
    \ cast the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Speak With Dead.md|speak with\
    \ dead]]\n\n1/day each: [[5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]],\
    \ [[5. Mechanics/Spells/Slow.md|slow]]"
  "name": "Innate Spellcasting"
- "desc": "The valiant is a 12th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\nCantrips (at will): [[5. Mechanics/Spells/Eldritch Blast.md|eldritch blast]]\
    \ (3 beams, +4 to each damage roll), [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]], [[5. Mechanics/Spells/True Strike.md|true strike]]\n\
    \n1st-5th level (3 slots): [[5. Mechanics/Spells/Banishment.md|banishment]],\
    \ [[5. Mechanics/Spells/Beacon Of Hope.md|beacon of hope]], [[5. Mechanics/Spells/Blur.md|blur]],\
    \ [[5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]], [[5. Mechanics/Spells/Find Steed.md|find steed]],\
    \ [[5. Mechanics/Spells/Fire Shield.md|fire shield]], [[5. Mechanics/Spells/Fly.md|fly]],\
    \ [[5. Mechanics/Spells/Healing Word.md|healing word]], [[5. Mechanics/Spells/Heroism.md|heroism]],\
    \ [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]]"
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
- "desc": "When the valiant is hit by an attack, it casts the [[5. Mechanics/Spells/Shield.md|shield]]\
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
