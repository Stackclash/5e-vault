---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/5
  - monster/size/medium
  - monster/type/fey
aliases:
  - Mantis Knight
---
# [[5. Mechanics\Bestiary\Fey\Mantis Knight (SAF).md|Mantis Knight]]
*Source: Strongholds and Followers p. 176*

The swashbuckling adventurers of the Arcadians, the Mantis Knights love dueling and drinking and terrible poetry. The greatest of them, like Lady Eweshtleth, keep an air of grave dignity about them, because they have known battle across the Myriad Worlds. But most Mantis Knights just want to show up, do something dashing and acrobatic, spit an enemy upon their sword, and then go carousing with the mortals who summoned them.

## Tactics

Their armor makes them very hard to grapple, and they enjoy showing this off by taunting enemies who rely on grappling. They bolster the spirits of their allies with heroism and shield of faith, making mortals almost the equals of an Arcadian! You're welcome!

Otherwise, they enjoy dancing around the battlefield, laying into enemies with their twin rapiers. Simple pleasures.

```statblock
"name": "Mantis Knight (SAF)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "14"
  - !!int "11"
  - !!int "13"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "strength": "+6"
  - "wisdom": "+4"
  - "charisma": "+4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+4"
"senses": "passive Perception 17"
"languages": "Common, Elvish, Sylvan"
"cr": "5"
"traits":
  - "desc": "The knight's innate spellcasting ability is Charisma (spell save DC 12).\
      \ The knight can innately cast the following spells, requiring no material components:\n\
      \nAt will: [[5. Mechanics/Spells/Heroism.md|heroism]], [[5. Mechanics/Spells/Shield Of Faith.md|shield of faith]]"
    "name": "Innate Spellcasting"
  - "desc": "The knight's armor is perpetually slick. Any attempts to grapple the\
      \ knight have disadvantage."
    "name": "Sunbeetle Armor"
  - "desc": "Magic cannot put the knight to sleep."
    "name": "Fey Ancestry"
  - "desc": "The knight has advantage on saving throws against magic and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "As a member of the Court of Arcadia, the knight can cast [[5. Mechanics/Spells/Dominate Monster.md|dominate monster]]\
      \ (DC 12) at will on any fey creature or elf."
    "name": "Command Fey"
"actions":
  - "desc": "The knight makes four attacks with its rapiers, or makes two attacks\
      \ and casts heroism or shield of faith on an ally."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) piercing damage."
    "name": "Rapier"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Mantis%20Knight.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
