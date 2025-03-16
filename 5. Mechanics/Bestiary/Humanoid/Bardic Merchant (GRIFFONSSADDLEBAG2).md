---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/1
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Bardic Merchant
---
# [[5. Mechanics/Bestiary/Humanoid/Bardic Merchant (GRIFFONSSADDLEBAG2).md|Bardic Merchant]]
*Source: The Griffon's Saddlebag, Book 2 p. 336. Available in the Basic Rules (2014)*

Individuals that practice the bardic art of mercantile magic can be found across the land with independent goals and occupations.The various departments of Antronec's Mercantile Guild government are composed of many such individuals, but most of them are completely unaware of the guild's larger machinations. Regardless, the core leadership of the Mercantile Guild is composed of charismatic and manipulative merchants such as this. Eminent storytellers, arcanists, and economists, these capable bards administrate the bureaucratic spiderweb of the city and tug the puppet strings necessary to ensure their success. For them, wealth is power rightfully earned—making them both deserving and rightful custodians of Antronec.

```statblock
"name": "Bardic Merchant (GRIFFONSSADDLEBAG2)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral"
"ac": !!int "13"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather]]"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "11"
- !!int "15"
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Investigation": !!int "4"
  "Persuasion": !!int "7"
"senses": "passive Perception 11"
"languages": "Common, plus up to two other languages"
"cr": "1"
"traits":
- "desc": "The merchant is a 3rd-level spellcaster. Their spellcasting ability is\
    \ Charisma (spell save DC 13). They know the following bard spells:\n\nCantrips\
    \ (at will): [[5. Mechanics/Spells/Mending.md|mending]], [[5. Mechanics/Spells/Message.md|message]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
    \ slots): [[5. Mechanics/Spells/Comprehend Languages.md|comprehend languages]],\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Identify.md|identify]],\
    \ [[5. Mechanics/Spells/Unseen Servant.md|unseen servant]]\n\n2nd level (2 slots):\
    \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Suggestion.md|suggestion]]"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one target. Hit: 1 bludgeoning\
    \ damage plus 6 (1d12) thunder damage."
  "name": "Magic Coin"
"reactions":
- "desc": "When a creature within 60 feet of the merchant makes an ability check,\
    \ attack roll, or saving throw, the merchant flips a coin. If it's heads, the\
    \ creature can roll a d6 and add the number rolled to the d20. If it's tails,\
    \ one random creature within 60 feet of the merchant gains a d6, which it can\
    \ roll and add to one ability check, attack roll, or saving throw it makes before\
    \ the end of its next turn."
  "name": "Chance (Recharge 5-6)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
