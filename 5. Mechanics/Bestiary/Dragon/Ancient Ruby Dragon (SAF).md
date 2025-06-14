---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 23
environments: null
size: Gargantuan
tags:
  - compendium/src/5e/saf
  - monster/cr/23
  - monster/size/gargantuan
  - monster/type/dragon
aliases:
  - Ancient Ruby Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Ancient Ruby Dragon (SAF).md|Ancient Ruby Dragon]]
*Source: Strongholds and Followers p. 203*

The rubies protect the knowledge of reality, which they call realitas, the essential thing that separates real things from illusion.

They alone understand the danger that illusionists present to the Mundane World, because they alone know what even the most powerful spellcasters do not: illusion magic, properly applied, could replace this reality. Starve it until it withers, replace it with a phantasm. They are happy to sequester themselves from the world, locking their knowledge away. But should a sufficiently powerful illusionist catch a glimpse of the power contained within their spells, they will wake, seeking mortals to help them prevent the end of the Real. They believe that illusions are manifestations in this world of beings, objects, and power from other worlds—and that, given the chance, those alien worlds would attack ours.

They are measured and formal, slow to give trust. They like seeing things done properly, traditions obeyed and upheld. If you approach one with respect and introduce yourself properly and do not saw the air too much with your hands, then they will listen and grant you the opportunity to impress them.

```statblock
"name": "Ancient Ruby Dragon (SAF)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "23"
"ac_class": "natural armor"
"hp": !!int "299"
"hit_dice": "26d20 + 26"
"modifier": !!int "8"
"stats":
  - !!int "23"
  - !!int "26"
  - !!int "12"
  - !!int "26"
  - !!int "18"
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
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 28"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "23"
"traits":
  - "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Psionics]].\
      \ Charges: 26 • Recharge: d10 • Fracture: 32"
    "name": ""
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Allies' spells cast within 30 feet have their saving throw DC increased\
      \ by 4."
    "name": "Amplification Aura"
"actions":
  - "desc": "The dragon makes three attacks: one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17\
      \ (2d10 + 6) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 13\
      \ (2d6 + 6) slashing damage."
    "name": "Claw"
  - "desc": "Melee Weapon Attack: +13 to hit; reach 20 ft., one target. Hit: 15\
      \ (2d8 + 6) bludgeoning damage."
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
  - "desc": "- The dragon manifests [[5. Mechanics/Optional Features/Amplify (SAF).md|amplify]]\
      \ at no cost.  \n- The dragon manifests [[5. Mechanics/Optional Features/The Real (SAF).md|the real]]\
      \ at no cost. It does not require concentration and lasts for 10 minutes.  \n\
      - The dragon casts [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]]. The spell\
      \ automatically ends spells of 5th level or lower. For each spell of 6th level\
      \ or higher on the target, make an ability check using the dragon's Intelligence\
      \ as its spellcasting ability. The DC equals 10 + the spell's leveI. On a successful\
      \ check, the spell ends.  "
    "name": ""
"regional_effects":
  - "desc": "Intelligent creatures who sleep within 12 miles of a ruby dragon's lair\
      \ dream of people they know transforming into other people, of places they've\
      \ been dissolving to reveal barren wastelands. "
    "name": ""
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Large%20Ruby%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
