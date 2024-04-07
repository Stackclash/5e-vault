---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/14
- monster/size/huge
- monster/type/dragon
statblock: inline
aliases: ["Adult Topaz Dragon"]
---
# [Adult Topaz Dragon](compendium/bestiary/dragon/adult-topaz-dragon-saf.md)
*Source: Strongholds and Followers p. 218*

The youngest species, the most enthusiastic about the world, the one you're most likely to meet, topaz dragons study magic obsessively, and their older kin consider this juvenile. When you're older you'll realize magic is just ambient interference from overlapping manifolds constrained by oblique functions. Well, poo on that, look, I made a fireball!

They're fascinated by it, and they collect scrolls and tomes like other dragons hoard gold pieces and gemstones, which the topaz dragons find vaguely threatening. Why the obsession with gemstones in particular? Why would you sleep on a bed of them if you weren't trying to make a statement? I don't sleep on a bed of scales. Harumph.

They all seem like absentminded professors. They accumulate so much lore that they spend all their time categorizing it, and just when they have everything neatly filed away they realize this one treatise doesn't fit any classification and the whole thing must be redone from scratch. Ugh. It will take millennia at this rate.

They're approachable and easy to talk to as long as you don't mind never getting a straight answer. You'd think they'd be experts on everything, considering how many books they have, but the opposite is true. They can imagine anything and defend it with references, many of which contradict each other.

```statblock
"name": "Adult Topaz Dragon (SaF)"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "19"
"hp": !!int "104"
"hit_dice": "16d12 + 0"
"stats":
- !!int "18"
- !!int "21"
- !!int "10"
- !!int "18"
- !!int "15"
- !!int "18"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "10"
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
"skillsaves":
  "Religion": !!int "9"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Arcana": !!int "9"
"damage_vulnerabilities": "psychic"
"damage_resistances": "bludgeoning, slashing, piercing from nonmagical weapons"
"damage_immunities": "fire, lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "14"
"traits":
- "desc": ". . [Gemstone Dragon Psionics](/compendium/rules/variant-rules/gemstone-dragon-psionics-saf.md).\
    \ Charges: 16 • Recharge: dice: 1d8|avg (1d8) • Fracture: 13"
  "name": ""
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "All allies within 30 feet gain +4 on Intelligence checks and saving throws."
  "name": "Uplift Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d10 + 4|avg (2d10 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit); reach 15 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) bludgeoning damage."
  "name": "Tail"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ Check."
  "name": "Detect"
- "desc": "The dragon uses a [psionic ability](compendium/optional-features/list-psionic-manifestation-saf.md)."
  "name": "Psionics"
- "desc": "The dragon releases a wave of telekinetic energy from its mind. Every creature\
    \ within 15 feet must make a DC 24 Intelligence saving throw or take dice: 2d6\
    \ + 4|avg (2d6 + 4) force damage and be knocked [prone](/compendium/rules/conditions.md#prone).\
    \ The dragon then can move up to half its movement speed."
  "name": "Psionic Shift (Costs 2 Actions)"
"source":
- "SaF"
"image": "compendium/bestiary/dragon/token/adult-topaz-dragon-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```