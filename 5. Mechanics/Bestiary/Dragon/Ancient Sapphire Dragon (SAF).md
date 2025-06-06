---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 24
environments: null
size: Gargantuan
tags:
  - compendium/src/5e/saf
  - monster/cr/24
  - monster/size/gargantuan
  - monster/type/dragon
aliases:
  - Ancient Sapphire Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Ancient Sapphire Dragon (SAF).md|Ancient Sapphire Dragon]]
*Source: Strongholds and Followers p. 213*

Eldest, first, the sapphire dragons inspire awe in any who see them. They guard the knowledge of past and future and the power that lets one shift between them. They approve of the dwarves, who imposed the rigid rules of causality on the world, and consider the remnant domains of the elves, the wodes, as a danger. Not a threat per se, because they know it is in the elves' nature to ignore past and future, but when mortals exploit this or discover the means to move through time, or summon creatures from the past and future, then the sapphire dragons get riled up.

Of course, because they guard this knowledge, they are also experts on it and thus are sometimes the best sages to seek out if you are in dire need. They will aid adventurers, using their knowledge to bend the rules of the timescape if they feel the danger warrants it.

Being oldest, they are also the most reserved, taciturn. Even the young sapphires are aware of their species' place in history and expect to be treated with respect. They talk like old university professors who know they have tenure and expect everyone to hang on their every word.

```statblock
"name": "Ancient Sapphire Dragon (SAF)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "23"
"ac_class": "natural armor"
"hp": !!int "350"
"hit_dice": "28d20 + 56"
"modifier": !!int "8"
"stats":
  - !!int "24"
  - !!int "27"
  - !!int "14"
  - !!int "26"
  - !!int "19"
  - !!int "24"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  - "dexterity": "+15"
  - "intelligence": "+15"
  - "wisdom": "+11"
  - "charisma": "+14"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+15"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+11"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+11"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+15"
"damage_vulnerabilities": "psychic"
"damage_resistances": "bludgeoning, slashing, piercing from nonmagical weapons"
"damage_immunities": "fire, lightning"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 28"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "24"
"traits":
  - "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Psionics]].\
      \ Charges: 28 • Recharge: d10 • Fracture: 35"
    "name": ""
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "All creatures within 30 feet must make a DC 22 Charisma saving throw\
      \ in order to attack this dragon. On a failed save, the attacking creature's\
      \ turn ends immediately. On a success, that creature is immune to the Awe Aura\
      \ of all gemstone dragons for 1 week."
    "name": "Awe Aura"
"actions":
  - "desc": "The dragon makes three attacks: one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 18\
      \ (2d10 + 7) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 14\
      \ (2d6 + 7) slashing damage."
    "name": "Claw"
  - "desc": "Melee Weapon Attack: +14 to hit; reach 20 ft., one target. Hit: 16\
      \ (2d8 + 7) bludgeoning damage."
    "name": "Tail"
"legendary_actions":
  - "desc": "The dragon makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ Check."
    "name": "Detect"
  - "desc": "The dragon uses a [[5. Mechanics/Lists/List Optfeaturetype Psi Man.md|psionic ability]]."
    "name": "Psionics"
  - "desc": "The dragon releases a wave of telekinetic energy from its mind. Every\
      \ creature within 15 feet must make a DC 24 Intelligence saving throw or take\
      \ 15 (2d6 + 8) force damage and be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ The dragon then can move up to half its movement speed."
    "name": "Psionic Shift (Costs 2 Actions)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the dragon takes a lair\
      \ action to cause one of the following effects. The dragon can't use the same\
      \ effect two rounds in a row."
    "name": ""
  - "desc": "- The dragon manifests [[5. Mechanics/Optional Features/Flay (SAF).md|flay]]\
      \ in a 120-foot cone, doing 1d6 damage per charge spent.  \n- The dragon manifests\
      \ [[5. Mechanics/Optional Features/Reflection (SAF).md|reflection]] at no cost. It\
      \ cannot use this action again for a week.  \n- The dragon casts [[5. Mechanics/Spells/Plane Shift.md|plane shift]]\
      \ with DC 22.  "
    "name": ""
"regional_effects":
  - "desc": "Intelligent creatures who sleep within 12 miles of a sapphire dragon's\
      \ lair dream of the past and future. They know the things they see in these\
      \ dreams are real events that have, or will, occur."
    "name": ""
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Large%20Sapphire%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
