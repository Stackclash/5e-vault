---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/5
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Festus Battlechef"]
---
# [Festus Battlechef](compendium\bestiary\humanoid/festus-battlechef-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2 p. 359*

A veteran of both cuisine and combat, the battlechef is a devout warrior and an exemplary cook. Renowned for their magical prowess and strength of will, a battlechef goes where their deity and culinary sense of purpose lead. They are found most often behind the bar, within the bustling kitchen, slicing through enemies, or providing much-needed succor to those in need.

```statblock
"name": "Festus Battlechef (GriffonsSaddlebag2)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[chain mail](compendium/items/chain-mail.md), [shield](compendium/items/shield.md)"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "11"
- !!int "16"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "6"
  "Nature": !!int "3"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Common, plus two other languages"
"cr": "5"
"traits":
- "desc": "The battlechef is an 8th-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 14, +6 to hit with spell attacks). It has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](compendium/spells/guidance.md),\
    \ [mending](compendium/spells/mending.md), [sacred flame](compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](compendium/spells/thaumaturgy.md)\n\n1st level (4 slots):\
    \ [bless](compendium/spells/bless.md), [goodberry](compendium/spells/goodberry.md),\
    \ [purify food and drink](compendium/spells/purify-food-and-drink.md)\n\n2nd\
    \ level (3 slots): [heat metal](compendium/spells/heat-metal.md), [protection\
    \ from poison](compendium/spells/protection-from-poison.md), [spiritual weapon](compendium/spells/spiritual-weapon.md)\n\
    \n3rd level (3 slots): [create food and water](compendium/spells/create-food-and-water.md),\
    \ [mass healing word](compendium/spells/mass-healing-word.md), [stinking cloud](compendium/spells/stinking-cloud.md)\n\
    \n4th level (2 slots): [blight](compendium/spells/blight.md), [control water](compendium/spells/control-water.md)"
  "name": "Spellcasting"
- "desc": "When the battlechef hits a creature with a weapon attack, the battlechef\
    \ can cause the attack to deal an extra 4 (1d8) acid or poison damage (battlechef's\
    \ choice) to the target."
  "name": "Divine Strike (1/Turn)"
- "desc": "The battlechef has advantage on saving throws against [poison](/compendium/rules/conditions.md#Poisoned)."
  "name": "Poison Resilience"
- "desc": "While the battlechef is [drunk](/compendium/rules/conditions.md#Drunkenness),\
    \ it can choose to magically suppress the alcohol's effects for 1 minute."
  "name": "Strong Stomach (Recharges after a Short or Long Rest)"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) slashing damage."
  "name": "Handaxe"
- "desc": "The battlechef creates a magical potion in its free hand or at its feet\
    \ (battlechef's choice). A creature that drinks this potion regains 15 (2d6 +\
    \ 8) hit points. The potion turns to dust and is lost if the battlechef finishes\
    \ a short or long rest before it is consumed."
  "name": "Create Healing Draft (Recharges after a Short or Long Rest)"
"reactions":
- "desc": "When the battlechef is hit by an attack from a creature within 5 feet of\
    \ it, the creature must make a DC 14 Constitution saving throw. On a failed save,\
    \ the creature takes 6 (1d12) poison damage and is [poisoned](/compendium/rules/conditions.md#Poisoned)\
    \ until the end of its next turn. On a successful save, the creature takes half\
    \ as much damage and isn't [poisoned](/compendium/rules/conditions.md#Poisoned)."
  "name": "Table-Turner (3/Day)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```