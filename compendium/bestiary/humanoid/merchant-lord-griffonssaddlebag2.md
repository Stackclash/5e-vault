---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/3
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Merchant Lord"]
---
# [Merchant Lord](compendium\bestiary\humanoid/merchant-lord-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2 p. 339*

Within the Mercantile Guild, the most powerful, skilled, and experienced members are known as Merchant Lords. They typically occupy a notable position in one of Antronec's public service departments, hold a government office, or are major players in their black market. These individuals are truly masters of deception and manipulation of commerce, working behind the scenes to direct the populace and maintain their city.

```statblock
"name": "Merchant Lord (GriffonsSaddlebag2)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral"
"ac": !!int "16"
"ac_class": "[studded leather](compendium/items/studded-leather-armor.md)"
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
    \ (at will): [mage hand](compendium/spells/mage-hand.md), [mending](compendium/spells/mending.md),\
    \ [message](compendium/spells/message.md), [prestidigitation](compendium/spells/prestidigitation.md)\n\
    \n1st level (4 slots): [comprehend languages](compendium/spells/comprehend-languages.md),\
    \ [detect magic](compendium/spells/detect-magic.md), [identify](compendium/spells/identify.md),\
    \ [unseen servant](compendium/spells/unseen-servant.md)\n\n2nd level (3 slots):\
    \ [detect thoughts](compendium/spells/detect-thoughts.md), [locate object](compendium/spells/locate-object.md),\
    \ [suggestion](compendium/spells/suggestion.md)\n\n3rd level (3 slots): [glyph\
    \ of warding](compendium/spells/glyph-of-warding.md), [sending](compendium/spells/sending.md)\n\
    \n4th level (1 slots): [secret chest](compendium/spells/leomunds-secret-chest.md)"
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
    \ space. During this time, the merchant is [deaf](/compendium/rules/conditions.md#Deafened)\
    \ and [blind](/compendium/rules/conditions.md#Blinded) with regard to its own\
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