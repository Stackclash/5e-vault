---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: underdark, urban
size: Medium
tags:
- compendium/src/5e/mpmm
- monster/cr/5
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/aberration
aliases: ["Swarm of Cranium Rats"]
---
# [Swarm of Cranium Rats](compendium\bestiary\aberration/swarm-of-cranium-rats-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 83, Volo's Guide to Monsters p. 133*

## Cranium Rat

Mind flayers create cranium rats by bombarding rats with psionic energy. Cranium rats are somewhat smarter than ordinary rats and behave as such. If enough cranium rats come together to form a swarm, they merge their minds into a single intelligence with the accumulated memories of all the swarm's constituents. The rats become smarter as a result, and retain their heightened intelligence for as long as the swarm persists. The swarm also awakens latent psionic abilities implanted within each cranium rat by its mind flayer creators, bestowing upon the swarm psionic powers.

A single cranium rat uses its natural telepathy to communicate hunger, fear, and other base emotions. A swarm of cranium rats communicating telepathically "speaks" as one creature, often referring to itself using the collective pronouns "we" and "us." Some mind flayer colonies use cranium rats as spies. The rats invade communities and act as eyes and ears for the colony's elder brain, transmitting their thoughts when they swarm and are within range of the elder brain's telepathy.

```statblock
"name": "Swarm of Cranium Rats (MPMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Typically  Lawful Evil"
"ac": !!int "12"
"hp": !!int "76"
"hit_dice": "17d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "10"
- !!int "15"
- !!int "11"
- !!int "14"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [frightened](/compendium/rules/conditions.md#Frightened),\
  \ [grappled](/compendium/rules/conditions.md#Grappled), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained), [stunned](/compendium/rules/conditions.md#Stunned)"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "telepathy 30 ft."
"cr": "5"
"traits":
- "desc": "As long as it has more than half of its hit points remaining, the swarm\
    \ casts one of the following spells, requiring no spell components and using Intelligence\
    \ as the spellcasting ability (spell save DC 13):\n\nAt will: [command](compendium/spells/command.md),\
    \ [comprehend languages](compendium/spells/comprehend-languages.md), [detect thoughts](compendium/spells/detect-thoughts.md)\n\
    \n1/day each: [confusion](compendium/spells/confusion.md), [dominate monster](compendium/spells/dominate-monster.md)"
  "name": "Spellcasting (Psionics)"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny rat. The swarm can't regain\
    \ hit points or gain temporary hit points."
  "name": "Swarm"
- "desc": "The swarm is immune to any effect that would sense its emotions or read\
    \ its thoughts, as well as to all divination spells."
  "name": "Telepathic Shroud"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm\
    \ has half of its hit points or fewer, plus 22 (5d8) psychic damage."
  "name": "Bites"
"bonus_actions":
- "desc": "The swarm sheds dim light from its brains in a 5-foot radius, increases\
    \ the illumination to bright light in a 5- to 20-foot radius (and dim light for\
    \ an additional number of feet equal to the chosen radius), or extinguishes the\
    \ light."
  "name": "Illumination"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/aberration/token/swarm-of-cranium-rats-mpmm.webp"
```
^statblock

## Environment

underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```