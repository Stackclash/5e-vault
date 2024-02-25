---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/9
  - monster/size/large
  - monster/type/dragon
statblock: inline
aliases:
  - Young Amethyst Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Young Amethyst Dragon.md|Young Amethyst Dragon]]
*Source: Strongholds and Followers p. 223*

The renegades of the jeweled dragons, the amethyst dragons seek new knowledge and so manipulate mortals to do dangerous, even deadly things in order to push the boundary of the known.

The other gemstone dragons are aware of this dangerous obsession but turn a blind eye to it. Perhaps they're afraid of meddling, or perhaps they look forward to benefitting from the new lore produced this way, without having to get their hands dirty.

The amethyst are sinister, manipulating, and scheming. They enjoy using the psionic manifestation form (Not all known manifestations are listed here.) to disguise themselves as mortals and infiltrate colleges of wizardry and sorcery. They have no feeling or remorse for mortals and willingly drive them and ultimately sacrifice them if it means learning something new about the fabric of the timescape.

When encountered, they are often conciliatory, deferent. They want to put you at ease to catch you off guard. They are helpful, they love helping mortals, they love making mortals trust them, because it is a short path from trust to dependence. They cannot be trusted.

```statblock
"name": "Young Amethyst Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "97"
"hit_dice": "15d10 + 15"
"stats":
- !!int "16"
- !!int "16"
- !!int "13"
- !!int "16"
- !!int "14"
- !!int "17"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "7"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Insight": !!int "6"
  "Perception": !!int "6"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 20"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "9"
"traits":
- "desc": ". . [[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics.md|Gemstone Dragon Psionics]].\
    \ Charges: 15 • Recharge: dice: 1d6|avg (1d6) • Fracture: 18"
  "name": ""
- "desc": "Each time the dragon takes damage, all creatures within 30 feet must succeed\
    \ on a DC 15 Intelligence saving throw or else take dice: 2d6|avg (2d6) psychic\
    \ damage."
  "name": "Feedback Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d10 + 3|avg (2d10 + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) slashing damage."
  "name": "Claw"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Dragon/token/amethyst-wyrmling-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
