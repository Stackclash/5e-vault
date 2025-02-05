---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 28
environments: 
size: Gargantuan
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/28
- monster/size/gargantuan
- monster/type/monstrosity/titan
aliases: ["Cosmos-Kraken"]
---
# [Cosmos-Kraken](compendium\bestiary\monstrosity/cosmos-kraken-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A space-faring kraken of scarcely-imaginable proportions. Few things have been known to stand, swim, or float in its way throughout known time. Fleets of cosmos-ready ships have crumbled under their might.

```statblock
"name": "Cosmos-Kraken (GriffonsSaddlebag3)"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "518"
"hit_dice": "28d20 + 224"
"stats":
- !!int "30"
- !!int "12"
- !!int "27"
- !!int "24"
- !!int "18"
- !!int "21"
"speed": "20 ft., fly 60 ft. (hover), swim 60 ft."
"saves":
  "Charisma": !!int "14"
  "Dexterity": !!int "10"
  "Wisdom": !!int "13"
  "Intelligence": !!int "16"
  "Constitution": !!int "17"
"skillsaves":
  "Insight": !!int "13"
  "Perception": !!int "13"
  "Persuasion": !!int "14"
"damage_resistances": "cold, radiant"
"damage_immunities": "lightning; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[frightened](/compendium/rules/conditions.md#Frightened),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed)"
"senses": "truesight 300 ft., passive Perception 23"
"languages": "understands all languages but can't speak, telepathy 300 ft."
"cr": "28"
"traits":
- "desc": "The kraken's innate spellcasting ability is Intelligence (spell save DC\
    \ 24). It can innately cast the following spells, requiring no components:\n\n\
    At will: [command](compendium/spells/command.md), [detect thoughts](compendium/spells/detect-thoughts.md),\
    \ [magic missile](compendium/spells/magic-missile.md)\n\n1/day each: [dominate\
    \ monster](compendium/spells/dominate-monster.md), [mass suggestion](compendium/spells/mass-suggestion.md),\
    \ [wall of force](compendium/spells/wall-of-force.md)\n\n3/day each: [hold\
    \ person](compendium/spells/hold-person.md), [nondetection](compendium/spells/nondetection.md),\
    \ [sanctuary](compendium/spells/sanctuary.md)"
  "name": "Innate Spellcasting (Psionics)"
- "desc": "The kraken ignores difficult terrain, and magical effects can't reduce\
    \ its speed or cause it to be [restrained](/compendium/rules/conditions.md#Restrained).\
    \ It can spend 5 feet of movement to escape from nonmagical restraints or being\
    \ [grappled](/compendium/rules/conditions.md#Grappled)."
  "name": "Freedom of Movement"
- "desc": "The kraken is immune to any effect that would sense its emotions or read\
    \ its thoughts, as well as any divination spell that it refuses. Wisdom ([Insight](/compendium/rules/skills.md#Insight))\
    \ checks made to ascertain its intentions or sincerity have disadvantage."
  "name": "Inscrutable"
- "desc": "When the kraken fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The kraken deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The kraken makes three telekinetic tentacle attacks, each of which it can\
    \ replace with one use of Fling."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +19 to hit, reach 5 ft., one target. Hit: 23 (3d8\
    \ + 10) piercing damage plus 13 (3d8) psychic damage. If the target is a Large\
    \ or smaller creature [grappled](/compendium/rules/conditions.md#Grappled) by\
    \ the kraken, that creature is swallowed, and the grapple ends. While swallowed,\
    \ the creature is [blinded](/compendium/rules/conditions.md#Blinded) and [restrained](/compendium/rules/conditions.md#Restrained),\
    \ it has total cover against attacks and other effects outside the kraken, and\
    \ it takes 28 (8d6) acid damage and 28 (8d6) psychic damage at the start of each\
    \ of the kraken's turns.\n\nIf the kraken takes 60 damage or more on a single\
    \ turn from a creature inside it, the kraken must succeed on a DC 27 Constitution\
    \ saving throw at the end of that turn or regurgitate all swallowed creatures,\
    \ which fall [prone](/compendium/rules/conditions.md#Prone) in a space within\
    \ 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer\
    \ [restrained](/compendium/rules/conditions.md#Restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +19 to hit, reach 60 ft., one target. Hit: 20\
    \ (3d6 + 10) force damage, and the target is [grappled](/compendium/rules/conditions.md#Grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/compendium/rules/conditions.md#Restrained).\
    \ The kraken has an unlimited number of telekinetic tentacles with which it can\
    \ grapple targets."
  "name": "Telekinetic Tentacle"
- "desc": "One Large or smaller object held or creature [grappled](/compendium/rules/conditions.md#Grappled)\
    \ by the kraken is thrown up to 60 feet in a random direction and knocked [prone](/compendium/rules/conditions.md#Prone).\
    \ If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning\
    \ damage for every 10 feet it was thrown. If the target is thrown at another creature,\
    \ that creature must succeed on a DC 18 Dexterity saving throw or take the same\
    \ damage and be knocked [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Fling"
- "desc": "The kraken magically emits a flurry of psionic energy affecting each creature\
    \ within 120 feet of it that has an Intelligence score of 3 or higher. A target\
    \ must make a DC 24 Intelligence saving throw, taking 44 (8d10) psychic damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Psychic Storm"
"legendary_actions":
- "desc": "The kraken casts one of its at will spells."
  "name": "Quick Cast"
- "desc": "The kraken makes one tentacle attack or uses its Fling."
  "name": "Tentacle Attack or Fling"
- "desc": "The kraken uses Psychic Storm."
  "name": "Psychic Storm (Costs 2 Actions)"
- "desc": "The kraken expels an ink cloud in a 60-foot-radius sphere around itself.\
    \ The cloud spreads around corners, and that area is heavily obscured to creatures\
    \ other than the kraken. Each creature other than the kraken that ends its turn\
    \ there must succeed on a DC 25 Constitution saving throw, taking 22 (4d10) poison\
    \ damage on a failed save, or half as much damage on a successful one. A strong\
    \ wind or current disperses the cloud, which otherwise disappears at the end of\
    \ the kraken's next turn."
  "name": "Ink Cloud (Costs 3 Actions)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```