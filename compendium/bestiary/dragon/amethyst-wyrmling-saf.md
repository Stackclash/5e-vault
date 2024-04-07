---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/3
- monster/size/medium
- monster/type/dragon
statblock: inline
aliases: ["Amethyst Wyrmling"]
---
# [Amethyst Wyrmling](compendium/bestiary/dragon/amethyst-wyrmling-saf.md)
*Source: Strongholds and Followers p. 223*

The renegades of the jeweled dragons, the amethyst dragons seek new knowledge and so manipulate mortals to do dangerous, even deadly things in order to push the boundary of the known.

The other gemstone dragons are aware of this dangerous obsession but turn a blind eye to it. Perhaps they're afraid of meddling, or perhaps they look forward to benefitting from the new lore produced this way, without having to get their hands dirty.

The amethyst are sinister, manipulating, and scheming. They enjoy using the psionic manifestation form (Not all known manifestations are listed here.) to disguise themselves as mortals and infiltrate colleges of wizardry and sorcery. They have no feeling or remorse for mortals and willingly drive them and ultimately sacrifice them if it means learning something new about the fabric of the timescape.

When encountered, they are often conciliatory, deferent. They want to put you at ease to catch you off guard. They are helpful, they love helping mortals, they love making mortals trust them, because it is a short path from trust to dependence. They cannot be trusted.

```statblock
"name": "Amethyst Wyrmling (SaF)"
"size": "Medium"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "36"
"hit_dice": "8d8 + 0"
"stats":
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "13"
- !!int "13"
"speed": "30 ft., fly 60 ft. (hover)"
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
  "Intelligence": !!int "4"
"skillsaves":
  "Insight": !!int "3"
  "Perception": !!int "3"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 15"
"languages": "Common, Draconic"
"cr": "3"
"traits":
- "desc": ". . [Gemstone Dragon Psionics](/compendium/rules/variant-rules/gemstone-dragon-psionics-saf.md).\
    \ Charges: 8 • Recharge: dice: 1d4|avg (1d4) • Fracture: 7"
  "name": ""
- "desc": "Each time the dragon takes damage, all creatures within 30 feet must succeed\
    \ on a DC 12 Intelligence saving throw or else take dice: 1d6|avg (1d6) psychic\
    \ damage."
  "name": "Feedback Aura"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) piercing damage."
  "name": "Bite"
"source":
- "SaF"
"image": "compendium/bestiary/dragon/token/amethyst-wyrmling-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```