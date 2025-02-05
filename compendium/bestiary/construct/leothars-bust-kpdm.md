---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 
size: Tiny
tags:
- compendium/src/5e/kpdm
- monster/cr/3
- monster/size/tiny
- monster/type/construct
aliases: ["Leothar's Bust"]
---
# [Leothar's Bust](compendium\bestiary\construct/leothars-bust-kpdm.md)
*Source: Deep Magic p. 286*

*Floating before you is an exquisitely-crafted bust of a middle-aged man with a balding pate and a well-cropped beard. The bust appears to be constructed out of white marble. Its features are animated, and the entity is watching you with an expectant expression. Close behind the bust are two maids' uniforms, suspended in the air as though being worn by unseen creatures.*

The archmage Leothar Wickerfrost is a noted explorer and adventurer, and as such is often away from home for long periods of time. During some of these absences, thieves raided his tower, and after he surprised them on his return, he ended up spending a lot of time cleaning up their corpses. To rid himself of this chore, the wizard decided to create the perfect servant, a bust in his own magnificent image endowed with magical power.

Leothar's bust shares many traits with its creator. It has the same haughty and egomaniacal attitude and looks down on those who cannot wield magic. The construct is scrupulous in its duties and is in command of the tower's many servants, including a pair of modified unseen servants wearing maid outfits. Leothar's bust welcomes visitors with the same abrasive manner its creator displays, whether they are legitimate guests or intruders, but will not take hostile action against creatures until it can discern the details of their intentions.

```statblock
"name": "Leothar's Bust (KPDM)"
"size": "Tiny"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "42"
"hit_dice": "12d4 + 12"
"stats":
- !!int "8"
- !!int "16"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "8"
"speed": "5 ft., fly 40 ft. (hover)"
"saves":
  "Dexterity": !!int "5"
  "Intelligence": !!int "6"
"skillsaves":
  "Investigation": !!int "6"
  "History": !!int "6"
  "Arcana": !!int "6"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing damage\
  \ from nonmagical attacks"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [poisoned](/compendium/rules/conditions.md#Poisoned),\
  \ [stunned](/compendium/rules/conditions.md#Stunned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Draconic, Elvish"
"cr": "3"
"traits":
- "desc": "The bust's spellcasting ability is Intelligence (spell save DC 14). It\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [light](compendium/spells/light.md), [mending](compendium/spells/mending.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md)\n\n1/day each:\
    \ [fear](compendium/spells/fear.md), [sending](compendium/spells/sending.md)\n\
    \n3/day each: [knock](compendium/spells/knock.md), [suggestion](compendium/spells/suggestion.md)\n\
    \nUnknown: [detect magic](compendium/spells/detect-magic.md), [floating disk](compendium/spells/tensers-floating-disk.md)"
  "name": "Innate Spellcasting"
- "desc": "The bust has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The bust makes two ray attacks or a single slam attack."
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: +5 to hit, range 120 ft., one target. Hit: 14\
    \ (4d4 + 4) force damage."
  "name": "Arcane Ray"
- "desc": "Ranged Weapon Attack: +5 to hit, range 60 ft., one target. Hit: The\
    \ target must succeed on a DC 15 Constitution saving throw or be [paralyzed](/compendium/rules/conditions.md#Paralyzed)\
    \ for 1 minute. A creature can repeat this save at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Paralysis Ray"
- "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Slam"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```