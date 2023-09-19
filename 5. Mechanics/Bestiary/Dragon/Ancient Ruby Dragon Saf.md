---
cssclass: json5e-monster
tags:
- compendium/src/5e/saf
- monster/size/gargantuan
- monster/type/dragon
aliases: ["Ancient Ruby Dragon"]
---
# Ancient Ruby Dragon
*Source: Strongholds and Followers p. 203*  

The rubies protect the knowledge of reality, which they call realitas, the essential thing that separates real things from illusion.

They alone understand the danger that illusionists present to the Mundane World, because they alone know what even the most powerful spellcasters do not: illusion magic, properly applied, could replace this reality. Starve it until it withers, replace it with a phantasm. They are happy to sequester themselves from the world, locking their knowledge away. But should a sufficiently powerful illusionist catch a glimpse of the power contained within their spells, they will wake, seeking mortals to help them prevent the end of the Real. They believe that illusions are manifestations in this world of beings, objects, and power from other worlds—and that, given the chance, those alien worlds would attack ours.

They are measured and formal, slow to give trust. They like seeing things done properly, traditions obeyed and upheld. If you approach one with respect and introduce yourself properly and do not saw the air too much with your hands, then they will listen and grant you the opportunity to impress them.

```statblock
"name": "Ancient Ruby Dragon"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "23"
"hp": !!int "299"
"hit_dice": "26d20 + 26"
"stats":
- !!int "23"
- !!int "26"
- !!int "12"
- !!int "26"
- !!int "18"
- !!int "24"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": "+14"
  "Dexterity": "+15"
  "Wisdom": "+11"
  "Intelligence": "+15"
"skillsaves":
  "Religion": "+15"
  "Insight": "+11"
  "Perception": "+11"
  "Arcana": "+15"
"damage_vulnerabilities": "psychic"
"damage_resistances": "bludgeoning, slashing, piercing from nonmagical weapons"
"damage_immunities": "fire, lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 28"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "23"
"traits":
- "desc": ". . [[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics Saf.md|Gemstone Dragon Psionics]].\
    \ Charges: 26 • Recharge: dice: 1d10|avg (1d10) • Fracture: 32"
  "name": ""
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Allies' spells cast within 30 feet have their saving throw DC increased\
    \ by 4."
  "name": "Amplification Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d10 + 6|avg (2d10 + 6) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d6 + 6|avg (2d6 + 6) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit); reach 20 ft., one target.\
    \ Hit: dice: 2d8 + 6|avg (2d8 + 6) bludgeoning damage."
  "name": "Tail"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ Check."
  "name": "Detect"
- "desc": "The dragon uses a [[5. Mechanics/Optional Features/List Psionic Manifestation Saf.md|psionic ability]]."
  "name": "Psionics"
- "desc": "The dragon releases a wave of telekinetic energy from its mind. Every creature\
    \ within 15 feet must make a DC 24 Intelligence saving throw or take dice: 2d6\
    \ + 8|avg (2d6 + 8) force damage and be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ The dragon then can move up to half its movement speed."
  "name": "Psionic Shift (Costs 2 Actions)"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Large%20Ruby%20Dragon.png"
```
^statblock