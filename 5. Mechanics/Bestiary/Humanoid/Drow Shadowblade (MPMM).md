---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/11
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/elf
statblock: inline
aliases: ["Drow Shadowblade"]
---
# [[5. Mechanics/Bestiary/Humanoid/Drow Shadowblade (MPMM).md|Drow Shadowblade]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 105*  

Drow shadowblades steal down the dim passages of the Underdark, bound on errands of mayhem. They protect enclaves and Underdark cities from enemies and track down thieves who make off with prized treasures. In the city of Menzoberranzan in the Forgotten Realms, noble houses often employ shadowblades to eliminate rivals from other houses. In communities free of Lolth's sway, they serve as spies tasked with foiling the plots of that demon lord's cult. In any role they take on, they move undetected until the moment they attack—and then they are the last thing their victims see.

A shadowblade gains their powers over shadow via a ritual in which they kill a shadow demon and mystically prevent it from re-forming in the Abyss, siphoning its essence into themselves.

```statblock
"name": "Drow Shadowblade (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "14"
- !!int "21"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "13"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "11"
"traits":
- "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]], [[5. Mechanics/Spells/Darkness.md|darkness]]\n\
    \n1/day each: [[5. Mechanics/Spells/Faerie Fire.md|faerie fire]], [[5. Mechanics/Spells/Levitate.md|levitate]]\
    \ (self only)"
  "name": "spells"
- "desc": "Magical darkness doesn't impede the drow's [[/5. Mechanics/Rules/Senses.md#darkvision|darkvision]]."
  "name": "Devil's Sight"
- "desc": "The drow has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "The drow makes three Shadow Sword attacks. One of the attacks can be replaced\
    \ by a Hand Crossbow attack. The drow can also use Spellcasting to cast darkness."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft.\
    \ or range 30/60 ft., one target. Hit: dice: 7d6 + 5|avg (7d6 + 5) necrotic\
    \ damage."
  "name": "Shadow Sword"
- "desc": "Ranged Weapon Attack: dice: d20+9 (+9 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d6 + 5|avg (1d6 + 5) piercing damage, and the target\
    \ must succeed on a DC 13 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 hour. If the saving throw fails by 5 or more, the target is also [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way. The\
    \ target regains consciousness if it takes damage or if another creature takes\
    \ an action to shake it."
  "name": "Hand Crossbow"
"bonus_actions":
- "desc": "While in dim light or darkness, the drow teleports, along with any equipment\
    \ it is wearing or carrying, up to 60 feet to an unoccupied space it can see that\
    \ is also in dim light or darkness. It then has advantage on the first melee attack\
    \ it makes before the end of the turn."
  "name": "Shadow Step"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Humanoid/token/drow-shadowblade.png"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```