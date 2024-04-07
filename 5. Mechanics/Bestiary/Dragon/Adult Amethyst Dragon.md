---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/16
  - monster/size/huge
  - monster/type/dragon
statblock: inline
aliases:
  - Adult Amethyst Dragon
---
# [[5. Mechanics/Bestiary/Dragon/Adult Amethyst Dragon.md|Adult Amethyst Dragon]]
*Source: Strongholds and Followers p. 220*

The renegades of the jeweled dragons, the amethyst dragons seek new knowledge and so manipulate mortals to do dangerous, even deadly things in order to push the boundary of the known.

The other gemstone dragons are aware of this dangerous obsession but turn a blind eye to it. Perhaps they're afraid of meddling, or perhaps they look forward to benefitting from the new lore produced this way, without having to get their hands dirty.

The amethyst are sinister, manipulating, and scheming. They enjoy using the psionic manifestation form (Not all known manifestations are listed here.) to disguise themselves as mortals and infiltrate colleges of wizardry and sorcery. They have no feeling or remorse for mortals and willingly drive them and ultimately sacrifice them if it means learning something new about the fabric of the timescape.

When encountered, they are often conciliatory, deferent. They want to put you at ease to catch you off guard. They are helpful, they love helping mortals, they love making mortals trust them, because it is a short path from trust to dependence. They cannot be trusted.

```statblock
"name": "Adult Amethyst Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "18d12 + 18"
"stats":
- !!int "20"
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "16"
- !!int "20"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "10"
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
- "desc": ". . [[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics.md|Gemstone Dragon Psionics]].\
    \ Charges: 18 • Recharge: dice: 1d8|avg|noform (1d8) • Fracture:\
    \ 21"
  "name": ""
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Each time the dragon takes damage, all creatures within 30 feet must succeed\
    \ on a DC 18 Intelligence saving throw or else take dice:3d6|text(10) (3d6)\
    \ psychic damage."
  "name": "Feedback Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d10 + 5|text(16) (2d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d6 + 5|text(12) (2d6 + 5) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit; reach 15 ft., one\
    \ target. Hit: dice:2d8 + 5|text(14) (2d8 + 5) bludgeoning damage."
  "name": "Tail"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ Check."
  "name": "Detect"
- "desc": "The dragon uses a [[5. Mechanics/Optional Features/List Psionic Manifestation.md|psionic ability]]."
  "name": "Psionics"
- "desc": "The dragon releases a wave of telekinetic energy from its mind. Every creature\
    \ within 15 feet must make a DC 24 Intelligence saving throw or take dice:2d6\
    \ + 5|text(12) (2d6 + 5) force damage and be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ The dragon then can move up to half its movement speed."
  "name": "Psionic Shift (Costs 2 Actions)"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Dragon/token/adult-amethyst-dragon-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
