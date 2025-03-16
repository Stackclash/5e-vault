---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/3
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Merchant Lord
---
# [[5. Mechanics/Bestiary/Humanoid/Merchant Lord (GRIFFONSSADDLEBAG2).md|Merchant Lord]]
*Source: The Griffon's Saddlebag, Book 2 p. 339*

Within the Mercantile Guild, the most powerful, skilled, and experienced members are known as Merchant Lords. They typically occupy a notable position in one of Antronec's public service departments, hold a government office, or are major players in their black market. These individuals are truly masters of deception and manipulation of commerce, working behind the scenes to direct the populace and maintain their city.

```statblock
"name": "Merchant Lord (GRIFFONSSADDLEBAG2)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "12"
- !!int "17"
- !!int "14"
- !!int "12"
- !!int "15"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "5"
"skillsaves":
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Arcana": !!int "3"
  "Persuasion": !!int "8"
"senses": "passive Perception 12"
"languages": "Common, plus up to three other languages"
"cr": "3"
"traits":
- "desc": "The merchant is a 7th-level spellcaster. Their spellcasting ability is\
    \ Charisma (spell save DC 14). They know the following bard spells:\n\nCantrips\
    \ (at will): [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Mending.md|mending]],\
    \ [[5. Mechanics/Spells/Message.md|message]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Comprehend Languages.md|comprehend languages]],\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Identify.md|identify]],\
    \ [[5. Mechanics/Spells/Unseen Servant.md|unseen servant]]\n\n2nd level (3 slots):\
    \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Locate Object.md|locate object]],\
    \ [[5. Mechanics/Spells/Suggestion.md|suggestion]]\n\n3rd level (3 slots): [[5. Mechanics/Spells/Glyph Of Warding.md|glyph\
    \ of warding]], [[5. Mechanics/Spells/Sending.md|sending]]\n\
    \n4th level (1 slots): [[5. Mechanics/Spells/Leomunds Secret Chest.md|secret chest]]"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Rapier"
- "desc": "Ranged Spell Attack: +6 to hit, range 60 ft., one target. Hit: 1 bludgeoning\
    \ damage plus 13 (2d12) thunder damage."
  "name": "Magic Coin"
- "desc": "The merchant enchants a coin in its hand with divination magic, which lasts\
    \ for 10 minutes or until the merchant ends the effect early (no action required).\
    \ For the duration, a creature holding the coin that knows at least one language\
    \ can understand the meaning of any word the merchant speaks, and when the merchant\
    \ speaks, that creature understands what the merchant says.\n\nAlternatively,\
    \ the merchant can use an action to see and hear through the enchanted coin until\
    \ the start of its next turn, using its own senses as if it were in the coin's\
    \ space. During this time, the merchant is [[/5. Mechanics/Rules/Conditions.md#Deafened|deaf]]\
    \ and [[/5. Mechanics/Rules/Conditions.md#Blinded|blind]] with regard to its own\
    \ senses."
  "name": "Money Talks (4/Day)"
"reactions":
- "desc": "When a creature within 60 feet of the merchant makes an ability check,\
    \ attack roll, or saving throw, the merchant flips a coin. If it's heads, the\
    \ creature can roll a d8 and add the number rolled to the d20. If it's tails,\
    \ one random creature within 60 feet of the merchant gains a d8, which it can\
    \ roll and add to one ability check, attack roll, or saving throw it makes before\
    \ the end of its next turn."
  "name": "Chance (Recharge 4-6)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
