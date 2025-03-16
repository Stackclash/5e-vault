---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/2
  - monster/size/medium
  - monster/type/dragon
aliases:
  - Topaz Wyrmling
---
# [[5. Mechanics/Bestiary/Dragon/Topaz Wyrmling (SAF).md|Topaz Wyrmling]]
*Source: Strongholds and Followers p. 219*

The youngest species, the most enthusiastic about the world, the one you're most likely to meet, topaz dragons study magic obsessively, and their older kin consider this juvenile. When you're older you'll realize magic is just ambient interference from overlapping manifolds constrained by oblique functions. Well, poo on that, look, I made a fireball!

They're fascinated by it, and they collect scrolls and tomes like other dragons hoard gold pieces and gemstones, which the topaz dragons find vaguely threatening. Why the obsession with gemstones in particular? Why would you sleep on a bed of them if you weren't trying to make a statement? I don't sleep on a bed of scales. Harumph.

They all seem like absentminded professors. They accumulate so much lore that they spend all their time categorizing it, and just when they have everything neatly filed away they realize this one treatise doesn't fit any classification and the whole thing must be redone from scratch. Ugh. It will take millennia at this rate.

They're approachable and easy to talk to as long as you don't mind never getting a straight answer. You'd think they'd be experts on everything, considering how many books they have, but the opposite is true. They can imagine anything and defend it with references, many of which contradict each other.

```statblock
"name": "Topaz Wyrmling (SAF)"
"size": "Medium"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "6d8 + 0"
"stats":
- !!int "12"
- !!int "13"
- !!int "10"
- !!int "13"
- !!int "11"
- !!int "12"
"speed": "30 ft., fly 60 ft. (hover)"
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "2"
  "Intelligence": !!int "3"
"skillsaves":
  "Religion": !!int "3"
  "Insight": !!int "2"
  "Perception": !!int "2"
  "Arcana": !!int "3"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 14"
"languages": "Common, Draconic, telepathy 60 ft."
"cr": "2"
"traits":
- "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Gemstone Dragon Psionics]].\
    \ Charges: 6 • Recharge: 1d4 • Fracture: 5"
  "name": ""
- "desc": "All allies within 30 feet gain +1 on Intelligence checks and saving throws."
  "name": "Uplift Aura"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (1d10\
    \ + 1) piercing damage."
  "name": "Bite"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Medium%20Topaz%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
