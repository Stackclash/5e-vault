---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/erlw
  - monster/cr/2
  - monster/size/medium
  - monster/type/humanoid/human
statblock: inline
aliases:
  - Inspired
---
# [[5. Mechanics\Bestiary\Humanoid\Inspired.md|Inspired]]
*Source: Eberron: Rising from the Last War p. 294*

The rulers of distant Sarlona are known as the Inspired. These noble families are said to be bound to celestial spirits that guide and empower them, but the truth is far darker. The Inspired are the mortal hosts of the nightmare spirits of Dal Quor, and they carry out the foul agenda of the Dreaming Dark.

Any humanoid who can dream can volunteer to serve as a quori vessel. But the Inspired of Sarlona are humans bred to be such vessels. They have no choice in this destiny, since they can't resist quori possession. Physically, Inspired resemble the kalashtar, possessing an almost supernatural beauty.

Most of the people of the Five Nations have heard of the Inspired lords in Riedra—never realizing that Inspired are spread throughout Khorvaire as well. Beggars and generals, mayors and merchants might all be secret servants of the Dreaming Dark. Such Inspired have to willingly accept quori possession, but the Dreaming Dark has long experience in weaving dreams that can convince mortals to surrender their bodies.

```statblock
"name": "Inspired"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "11"
- !!int "14"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "2"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "2"
  "Persuasion": !!int "7"
"damage_resistances": "psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "passive Perception 10"
"languages": "Common, Quori"
"cr": "2"
"traits":
- "desc": "The Inspired's spellcasting ability is Intelligence (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Vicious Mockery.md|vicious mockery]]\
    \ (see \"Actions\" below)\n\n1/day each: [[5. Mechanics/Spells/Charm Person.md|charm person]],\
    \ [[5. Mechanics/Spells/Dissonant Whispers.md|dissonant whispers]], [[5. Mechanics/Spells/Hex.md|hex]],\
    \ [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
  "name": "innate"
- "desc": "The Inspired has advantage on Wisdom saving throws."
  "name": "Dual Mind"
"actions":
- "desc": "The Inspired makes two crysteel dagger attacks. It can replace one attack\
    \ with vicious mockery."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing damage plus dice: 3d6|avg\
    \ (3d6) force damage."
  "name": "Crysteel Dagger"
- "desc": "The Inspired unleashes a string of insults laced with subtle enchantments\
    \ at one creature it can see within 60 feet of it. If the target can hear the\
    \ Inspired, the target must succeed on a DC 13 Wisdom saving throw or take dice:\
    \ 1d4|avg (1d4) psychic damage and have disadvantage on the next attack roll\
    \ it makes before the end of its next turn."
  "name": "Vicious Mockery (Cantrip)"
"source":
- "ERLW"
"image": "5. Mechanics/Bestiary/Humanoid/token/inspired-erlw.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
