---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 16
environments: null
size: Huge
tags:
  - compendium/src/5e/saf
  - monster/cr/16
  - monster/size/huge
  - monster/type/dragon
aliases:
  - Adult Ruby Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Adult Ruby Dragon (SAF).md|Adult Ruby Dragon]]
*Source: Strongholds and Followers p. 204*

The rubies protect the knowledge of reality, which they call realitas, the essential thing that separates real things from illusion.

They alone understand the danger that illusionists present to the Mundane World, because they alone know what even the most powerful spellcasters do not: illusion magic, properly applied, could replace this reality. Starve it until it withers, replace it with a phantasm. They are happy to sequester themselves from the world, locking their knowledge away. But should a sufficiently powerful illusionist catch a glimpse of the power contained within their spells, they will wake, seeking mortals to help them prevent the end of the Real. They believe that illusions are manifestations in this world of beings, objects, and power from other worlds—and that, given the chance, those alien worlds would attack ours.

They are measured and formal, slow to give trust. They like seeing things done properly, traditions obeyed and upheld. If you approach one with respect and introduce yourself properly and do not saw the air too much with your hands, then they will listen and grant you the opportunity to impress them.

```statblock
"name": "Adult Ruby Dragon (SAF)"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "18d12 + 18"
"stats":
- !!int "20"
- !!int "22"
- !!int "12"
- !!int "20"
- !!int "16"
- !!int "20"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "11"
  "Wisdom": !!int "8"
  "Intelligence": !!int "10"
"skillsaves":
  "Religion": !!int "10"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Arcana": !!int "10"
"damage_vulnerabilities": "psychic"
"damage_resistances": "bludgeoning, slashing, piercing from nonmagical weapons"
"damage_immunities": "fire, lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "16"
"traits":
- "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Gemstone Dragon Psionics]].\
    \ Charges: 18 • Recharge: 1d8 • Fracture: 22"
  "name": ""
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Allies' spells cast within 30 feet have their saving throw DC increased\
    \ by 3."
  "name": "Amplification Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 16\
    \ (2d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +10 to hit; reach 15 ft., one target. Hit: 14\
    \ (2d8 + 5) bludgeoning damage."
  "name": "Tail"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ Check."
  "name": "Detect"
- "desc": "The dragon uses a [[5. Mechanics/Lists/List Optfeaturetype Psi Man.md|psionic ability]]."
  "name": "Psionics"
- "desc": "The dragon releases a wave of telekinetic energy from its mind. Every creature\
    \ within 15 feet must make a DC 24 Intelligence saving throw or take 12 (2d6 +\
    \ 5) force damage and be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ The dragon then can move up to half its movement speed."
  "name": "Psionic Shift (Costs 2 Actions)"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Large%20Ruby%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
