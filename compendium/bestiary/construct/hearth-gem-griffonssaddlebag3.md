---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 14
environments: 
size: Tiny
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/14
- monster/size/tiny
- monster/type/construct
aliases: ["Hearth Gem"]
---
# [Hearth Gem](compendium\bestiary\construct/hearth-gem-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Hearth gems are exceptionally rare gemstones that have been granted sentience by magic, divine intervention, or an unusual proximity to the Elemental Plane of Earth. Hearth gems grow over millenia, and only rarely speak to creatures—thereby masking their true nature. Renowned hearth gems include the one at the center of the Emberheart forge, as well as the one at the center of the H'rethi desert.

```statblock
"name": "Hearth Gem (GriffonsSaddlebag3)"
"size": "Tiny"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "165"
"hit_dice": "22d4 + 110"
"stats":
- !!int "6"
- !!int "13"
- !!int "20"
- !!int "18"
- !!int "17"
- !!int "11"
"speed": "0 ft., fly 60 ft. (hover)"
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "8"
  "Intelligence": !!int "9"
"skillsaves":
  "Insight": !!int "8"
  "Perception": !!int "8"
  "History": !!int "9"
"damage_resistances": "psychic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [deafened](/compendium/rules/conditions.md#Deafened),\
  \ [exhaustion](/compendium/rules/conditions.md#Exhaustion), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [poisoned](/compendium/rules/conditions.md#Poisoned),\
  \ [prone](/compendium/rules/conditions.md#Prone), [stunned](/compendium/rules/conditions.md#Stunned),\
  \ [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 18"
"languages": "understands all but can't speak, telepathy 60 ft."
"cr": "14"
"traits":
- "desc": "The gem's innate spellcasting ability is Intelligence (spell save DC 17).\
    \ The gem can innately cast the following spells, requiring no components:\n\n\
    At will: [light](compendium/spells/light.md), [mending](compendium/spells/mending.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md)\n\n1/day: [sunbeam](compendium/spells/sunbeam.md),\
    \ [wall of fire](compendium/spells/wall-of-fire.md)\n\n3/day: [continual flame](compendium/spells/continual-flame.md),\
    \ [enhance ability](compendium/spells/enhance-ability.md), [heat metal](compendium/spells/heat-metal.md)"
  "name": "Innate Spellcasting"
- "desc": "While the gem remains motionless, it is indistinguishable from an inanimate\
    \ gemstone."
  "name": "False Appearance"
- "desc": "The gem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The gem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The gem has advantage on Constitution saving throws made to maintain [concentration](/compendium/rules/conditions.md#Concentration)\
    \ on a spell."
  "name": "Stonemind"
- "desc": "The gem doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The gem makes four light ray attacks. It can cast a spell in place of two\
    \ attacks."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: +10 to hit, range 60 ft., one target. Hit: 10\
    \ (3d6) fire damage plus 9 (2d8) radiant damage."
  "name": "Light Ray"
"reactions":
- "desc": "When the gem is hit by a melee attack, it emits a blinding flash of light.\
    \ Each creature within 10 feet of the gem must succeed on a DC 18 Constitution\
    \ saving throw or be [blinded](/compendium/rules/conditions.md#Blinded) until\
    \ the end of its next turn."
  "name": "Brilliant Spark"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```