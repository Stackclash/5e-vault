---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1-2
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Tsuchinoko
---
# [[5. Mechanics\Bestiary\Beast\Tsuchinoko (KPDM).md|Tsuchinoko]]
*Source: Deep Magic p. 294*

A snakelike creature with a fondness for alcohol that lurks in forests, the tsuchinoko is more capable than a typical standard familiar, and as such at least 50 gp worth of wine or spirits must be expended as part of the casting of the [[5. Mechanics/Spells/Find Familiar.md|find familiar]] spell.

```statblock
"name": "Tsuchinoko (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "14"
"hit_dice": "4d4 + 4"
"stats":
- !!int "5"
- !!int "18"
- !!int "12"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 10 ft., passive Perception 13"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The tsuchinoko has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The tsuchinoko has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks it makes in any terrain with ample obscuring plant life."
  "name": "Plant Camouflage"
- "desc": "The tsuchinoko's long jump is up to 15 feet and its high jump is up to\
    \ 5 feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "The tsuchinoko makes two Leaping Bite attacks. The second attack is made\
    \ with disadvantage and must be against the same target as the first."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 1 piercing\
    \ damage plus 5 (2d4) poison damage."
  "name": "Leaping Bite"
- "desc": "The tsuchinoko bites its tail, forming a hoop with its body. While in hoop\
    \ formation, the tsuchinoko has a walking speed of 60 feet and can't use its Leaping\
    \ Bite. The tsuchinoko can end its Hoop Formation as a bonus action."
  "name": "Hoop Formation"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
