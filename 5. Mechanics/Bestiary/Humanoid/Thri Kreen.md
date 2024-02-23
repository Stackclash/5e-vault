---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/environment/desert
  - monster/environment/grassland
  - monster/size/medium
  - monster/type/humanoid/thri-kreen
statblock: inline
aliases:
  - Thri-kreen
---
# [[5. Mechanics\Bestiary\Humanoid\Thri Kreen.md|Thri-kreen]]
*Source: Monster Manual p. 288*

Thri-kreen wander the deserts and savannas of the world, avoiding all other races.

## Thri-Kreen Communication

Thri-kreen employ a language without words. To show emotion and reaction, a thri-kreen clacks its mandibles and waves its antennae, giving other thri-kreen a sense of what it is thinking and feeling. Other creatures find this manner of communication difficult to interpret and impossible to duplicate.

When forced to interact with creatures of other intelligent species, thri-kreen employ alternative methods of communication, such as drawing pictures in sand or making pictures out of twigs or blades of grass.

## Limited Emotions

Thri-kreen experience the full range of emotions but aren't as prone to emotional outbursts as humans. Thri-kreen with psionic ability often demonstrate a wider range of emotions, particularly if they live near or interact with humans or other highly emotional creatures.

## Isolationists and Wanderers

Thri-kreen consider all other living creatures as potential nourishment, and they love the taste of elf flesh in particular. If a creature might be useful for something other than food, the thri-kreen aren't likely to attack it on sight. Thri-kreen kill to survive, never for sport.

## Sleepless

Thri-kreen don't require sleep and can rest while remaining alert and performing light tasks. Their inability to sleep is thought to be the reason why thri-kreen have such short lifespans, the average thri-kreen life expectancy being only thirty years.

```statblock
"name": "Thri Kreen"
"size": "Medium"
"type": "humanoid"
"subtype": "thri-kreen"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "12"
- !!int "15"
- !!int "13"
- !!int "8"
- !!int "12"
- !!int "7"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Thri-kreen"
"cr": "1"
"traits":
- "desc": "The thri-kreen can change the color of its carapace to match the color\
    \ and texture of its surroundings. As a result, it has advantage on Dexterity\
    \ ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]) checks made to hide."
  "name": "Chameleon Carapace"
- "desc": "The thri-kreen's long jump is up to 30 feet and its high jump is up to\
    \ 15 feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "The thri-kreen makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing damage, and the target must\
    \ succeed on a DC 11 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 minute. If the saving throw fails by 5 or more, the target is also [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way. The\
    \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] target can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 1|avg (2d4 + 1) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "JttRC"
- "LoX"
"image": "5. Mechanics/Bestiary/Humanoid/token/thri-kreen.webp"
```
^statblock

## Environment

grassland, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
