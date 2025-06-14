---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 14
environments: null
size: Huge
tags:
  - compendium/src/5e/saf
  - monster/cr/14
  - monster/size/huge
  - monster/type/dragon
aliases:
  - Adult Topaz Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Adult Topaz Dragon (SAF).md|Adult Topaz Dragon]]
*Source: Strongholds and Followers p. 218*

The youngest species, the most enthusiastic about the world, the one you're most likely to meet, topaz dragons study magic obsessively, and their older kin consider this juvenile. When you're older you'll realize magic is just ambient interference from overlapping manifolds constrained by oblique functions. Well, poo on that, look, I made a fireball!

They're fascinated by it, and they collect scrolls and tomes like other dragons hoard gold pieces and gemstones, which the topaz dragons find vaguely threatening. Why the obsession with gemstones in particular? Why would you sleep on a bed of them if you weren't trying to make a statement? I don't sleep on a bed of scales. Harumph.

They all seem like absentminded professors. They accumulate so much lore that they spend all their time categorizing it, and just when they have everything neatly filed away they realize this one treatise doesn't fit any classification and the whole thing must be redone from scratch. Ugh. It will take millennia at this rate.

They're approachable and easy to talk to as long as you don't mind never getting a straight answer. You'd think they'd be experts on everything, considering how many books they have, but the opposite is true. They can imagine anything and defend it with references, many of which contradict each other.

```statblock
"name": "Adult Topaz Dragon (SAF)"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "16d12 + 0"
"modifier": !!int "5"
"stats":
  - !!int "18"
  - !!int "21"
  - !!int "10"
  - !!int "18"
  - !!int "15"
  - !!int "18"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  - "dexterity": "+10"
  - "intelligence": "+9"
  - "wisdom": "+7"
  - "charisma": "+9"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+9"
"damage_vulnerabilities": "psychic"
"damage_resistances": "bludgeoning, slashing, piercing from nonmagical weapons"
"damage_immunities": "fire, lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "14"
"traits":
  - "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Psionics]].\
      \ Charges: 16 • Recharge: d8 • Fracture: 13"
    "name": ""
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "All allies within 30 feet gain +4 on Intelligence checks and saving throws."
    "name": "Uplift Aura"
"actions":
  - "desc": "The dragon makes three attacks: one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15\
      \ (2d10 + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claw"
  - "desc": "Melee Weapon Attack: +9 to hit; reach 15 ft., one target. Hit: 13\
      \ (2d8 + 4) bludgeoning damage."
    "name": "Tail"
"legendary_actions":
  - "desc": "The dragon makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ Check."
    "name": "Detect"
  - "desc": "The dragon uses a [[5. Mechanics/Lists/List Optfeaturetype Psi Man.md|psionic ability]]."
    "name": "Psionics"
  - "desc": "The dragon releases a wave of telekinetic energy from its mind. Every\
      \ creature within 15 feet must make a DC 24 Intelligence saving throw or take\
      \ 11 (2d6 + 4) force damage and be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ The dragon then can move up to half its movement speed."
    "name": "Psionic Shift (Costs 2 Actions)"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Large%20Topaz%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
