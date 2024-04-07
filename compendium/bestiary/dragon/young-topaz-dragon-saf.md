---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/7
- monster/size/large
- monster/type/dragon
statblock: inline
aliases: ["Young Topaz Dragon"]
---
# [Young Topaz Dragon](compendium/bestiary/dragon/young-topaz-dragon-saf.md)
*Source: Strongholds and Followers p. 219*

The youngest species, the most enthusiastic about the world, the one you're most likely to meet, topaz dragons study magic obsessively, and their older kin consider this juvenile. When you're older you'll realize magic is just ambient interference from overlapping manifolds constrained by oblique functions. Well, poo on that, look, I made a fireball!

They're fascinated by it, and they collect scrolls and tomes like other dragons hoard gold pieces and gemstones, which the topaz dragons find vaguely threatening. Why the obsession with gemstones in particular? Why would you sleep on a bed of them if you weren't trying to make a statement? I don't sleep on a bed of scales. Harumph.

They all seem like absentminded professors. They accumulate so much lore that they spend all their time categorizing it, and just when they have everything neatly filed away they realize this one treatise doesn't fit any classification and the whole thing must be redone from scratch. Ugh. It will take millennia at this rate.

They're approachable and easy to talk to as long as you don't mind never getting a straight answer. You'd think they'd be experts on everything, considering how many books they have, but the opposite is true. They can imagine anything and defend it with references, many of which contradict each other.

```statblock
"name": "Young Topaz Dragon (SaF)"
"size": "Large"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "17"
"hp": !!int "71"
"hit_dice": "13d10 + 0"
"stats":
- !!int "15"
- !!int "15"
- !!int "11"
- !!int "15"
- !!int "12"
- !!int "15"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Religion": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 17"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "7"
"traits":
- "desc": ". . [Gemstone Dragon Psionics](/compendium/rules/variant-rules/gemstone-dragon-psionics-saf.md).\
    \ Charges: 13 • Recharge: dice: 1d6|avg (1d6) • Fracture: 10"
  "name": ""
- "desc": "All allies within 30 feet gain +2 on Intelligence checks and saving throws."
  "name": "Uplift Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d10 + 2|avg (2d10 + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) slashing damage."
  "name": "Claw"
"source":
- "SaF"
"image": "compendium/bestiary/dragon/token/topaz-wyrmling-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```