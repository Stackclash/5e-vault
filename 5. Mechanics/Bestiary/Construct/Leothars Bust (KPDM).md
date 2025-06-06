---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/3
  - monster/size/tiny
  - monster/type/construct
aliases:
  - Leothar's Bust
---
# [[5. Mechanics\Bestiary\Construct\Leothars Bust (KPDM).md|Leothar's Bust]]
*Source: Deep Magic p. 286*

*Floating before you is an exquisitely-crafted bust of a middle-aged man with a balding pate and a well-cropped beard. The bust appears to be constructed out of white marble. Its features are animated, and the entity is watching you with an expectant expression. Close behind the bust are two maids' uniforms, suspended in the air as though being worn by unseen creatures.*

The archmage Leothar Wickerfrost is a noted explorer and adventurer, and as such is often away from home for long periods of time. During some of these absences, thieves raided his tower, and after he surprised them on his return, he ended up spending a lot of time cleaning up their corpses. To rid himself of this chore, the wizard decided to create the perfect servant, a bust in his own magnificent image endowed with magical power.

Leothar's bust shares many traits with its creator. It has the same haughty and egomaniacal attitude and looks down on those who cannot wield magic. The construct is scrupulous in its duties and is in command of the tower's many servants, including a pair of modified unseen servants wearing maid outfits. Leothar's bust welcomes visitors with the same abrasive manner its creator displays, whether they are legitimate guests or intruders, but will not take hostile action against creatures until it can discern the details of their intentions.

```statblock
"name": "Leothars Bust (KPDM)"
"size": "Tiny"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "42"
"hit_dice": "12d4 + 12"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "12"
  - !!int "18"
  - !!int "10"
  - !!int "8"
"speed": "5 ft., fly 40 ft. (hover)"
"saves":
  - "dexterity": "+5"
  - "intelligence": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]"
    "desc": "+6"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing damage\
  \ from nonmagical attacks"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Draconic, Elvish"
"cr": "3"
"traits":
  - "desc": "The bust's spellcasting ability is Intelligence (spell save DC 14). It\
      \ can innately cast the following spells, requiring no material components:\n\
      \nAt will: [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Mending.md|mending]],\
      \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n5/day each:\
      \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Tensers Floating Disk.md|floating disk]]\n\
      \n3/day each: [[5. Mechanics/Spells/Knock.md|knock]], [[5. Mechanics/Spells/Suggestion.md|suggestion]]\n\
      \n1/day each: [[5. Mechanics/Spells/Fear.md|fear]], [[5. Mechanics/Spells/Sending.md|sending]]"
    "name": "Innate Spellcasting"
  - "desc": "The bust has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The bust makes two ray attacks or a single slam attack."
    "name": "Multiattack"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 120 ft., one target. Hit:\
      \ 14 (4d4 + 4) force damage."
    "name": "Arcane Ray"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 60 ft., one target. Hit: The\
      \ target must succeed on a DC 15 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
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
