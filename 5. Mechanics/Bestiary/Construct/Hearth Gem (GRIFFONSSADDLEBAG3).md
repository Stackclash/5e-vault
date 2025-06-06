---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 14
environments: null
size: Tiny
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/14
  - monster/size/tiny
  - monster/type/construct
aliases:
  - Hearth Gem
---
# [[5. Mechanics\Bestiary\Construct\Hearth Gem (GRIFFONSSADDLEBAG3).md|Hearth Gem]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Hearth gems are exceptionally rare gemstones that have been granted sentience by magic, divine intervention, or an unusual proximity to the Elemental Plane of Earth. Hearth gems grow over millenia, and only rarely speak to creatures—thereby masking their true nature. Renowned hearth gems include the one at the center of the Emberheart forge, as well as the one at the center of the H'rethi desert.

```statblock
"name": "Hearth Gem (GRIFFONSSADDLEBAG3)"
"size": "Tiny"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "165"
"hit_dice": "22d4 + 110"
"modifier": !!int "1"
"stats":
  - !!int "6"
  - !!int "13"
  - !!int "20"
  - !!int "18"
  - !!int "17"
  - !!int "11"
"speed": "0 ft., fly 60 ft. (hover)"
"saves":
  - "intelligence": "+9"
  - "wisdom": "+8"
  - "charisma": "+5"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+8"
"damage_resistances": "psychic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 18"
"languages": "understands all but can't speak, telepathy 60 ft."
"cr": "14"
"traits":
  - "desc": "The gem's innate spellcasting ability is Intelligence (spell save DC\
      \ 17). The gem can innately cast the following spells, requiring no components:\n\
      \nAt will: [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Mending.md|mending]],\
      \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n3/day: [[5. Mechanics/Spells/Continual Flame.md|continual\
      \ flame]], [[5. Mechanics/Spells/Enhance Ability.md|enhance ability]],\
      \ [[5. Mechanics/Spells/Heat Met(AL).md|heat metal]]\n\n1/day: [[5. Mechanics/Spells/Sunbeam.md|sunbeam]],\
      \ [[5. Mechanics/Spells/Wall Of Fire.md|wall of fire]]"
    "name": "Innate Spellcasting"
  - "desc": "While the gem remains motionless, it is indistinguishable from an inanimate\
      \ gemstone."
    "name": "False Appearance"
  - "desc": "The gem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The gem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The gem has advantage on Constitution saving throws made to maintain\
      \ [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]] on a spell."
    "name": "Stonemind"
  - "desc": "The gem doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The gem makes four light ray attacks. It can cast a spell in place of\
      \ two attacks."
    "name": "Multiattack"
  - "desc": "Ranged Spell Attack: +10 to hit, range 60 ft., one target. Hit: 10\
      \ (3d6) fire damage plus 9 (2d8) radiant damage."
    "name": "Light Ray"
"reactions":
  - "desc": "When the gem is hit by a melee attack, it emits a blinding flash of light.\
      \ Each creature within 10 feet of the gem must succeed on a DC 18 Constitution\
      \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] until\
      \ the end of its next turn."
    "name": "Brilliant Spark"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
