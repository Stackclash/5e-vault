---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: null
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(KPDM)
  - monster\Cr\1 8
  - monster\Size\Tiny
  - monster\Type\Monstrosity
aliases:
  - Stryx
---
# [[5. Mechanics\Bestiary\Monstrosity\Stryx (KPDM).md|Stryx]]
*Source: Deep Magic p. 299*

Owl-like monstrosities with vaguely human-like heads, stryx sometimes serve mortal spellcasters, particularly one of elven blood or one who has some tie to the fey, such as a half-elf [[5. Mechanics/Classes/Wizard School Of Enchantment.md|enchanter]] or a [[5. Mechanics/Classes/Warlock.md|warlock]] whose patron is the [[5. Mechanics/Classes/Warlock The Archfey.md|Archfey]].

## Familiar

If a stryx agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the stryx senses, as long as they are within 1 mile of each other. While the stryx is within 10 feet of its master, the master senses, the benefit of the spell whenever the stryx casts [[5. Mechanics/Spells/Comprehend Languages.md|comprehend languages]]. If its master causes it physical harm, or if it simply chooses to do so, the stryx will abandon its service as a familiar, breaking the telepathic bond.

```statblock
"name": "Stryx (KPDM)"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "3"
- !!int "17"
- !!int "11"
- !!int "8"
- !!int "15"
- !!int "6"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Common, Elvish"
"cr": "1/8"
"traits":
- "desc": "The stryx's innate spellcasting ability is Wisdom. It can cast the following\
    \ spell, requiring no components:\n\n3/day: [[5. Mechanics/Spells/Comprehend Languages.md|comprehend languages]]"
  "name": "Innate Spellcasting"
- "desc": "Until a stryx speaks or opens its mouth, it is indistinguishable from a\
    \ normal owl."
  "name": "False Appearance"
- "desc": "The stryx doesn't provoke [[/5. Mechanics/Rules/Actions.md#Opportunity%20Attack|opportunity attacks]]\
    \ when it flies out of an enemy's reach."
  "name": "Flyby"
- "desc": "The stryx has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Talons"
"source":
- "KPDM"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/ToB/token/Stryx.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
