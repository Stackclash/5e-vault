---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/8
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Feathered Mask Leader (Daisy Z)"]
---
# [Feathered Mask Leader (Daisy Z)](compendium\bestiary\humanoid/feathered-mask-leader-daisy-z-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The current Feathered Mask leader, Daisy Z, is a powerful spellcaster and masterful socialite. Her work to establish a reknowned and respected organization of companions is nothing short of impressive, and is capable of defending herself and her own with or without force, as necessary.

```statblock
"name": "Feathered Mask Leader (Daisy Z) (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Chaotic alignment"
"ac": !!int "15"
"ac_class": "[studded leather armor](compendium/items/studded-leather-armor.md)"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"stats":
- !!int "13"
- !!int "16"
- !!int "14"
- !!int "17"
- !!int "16"
- !!int "20"
"speed": "30 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "6"
"skillsaves":
  "Insight": !!int "6"
  "Performance": !!int "11"
  "Acrobatics": !!int "6"
  "Persuasion": !!int "11"
"senses": "passive Perception 13"
"languages": "Common plus two other languages"
"cr": "8"
"traits":
- "desc": "The feathered mask leader is an 13th-level spellcaster. Its spellcasting\
    \ ability is Charisma (spell save DC 16). It knows the following bard spells:\n\
    \nCantrips (at will): [dancing lights](compendium/spells/dancing-lights.md),\
    \ [message](compendium/spells/message.md), [minor illusion](compendium/spells/minor-illusion.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ slots): [charm person](compendium/spells/charm-person.md), [command](compendium/spells/command.md),\
    \ [illusory script](compendium/spells/illusory-script.md), [unseen servant](compendium/spells/unseen-servant.md)\n\
    \n2nd level (3 slots): [calm emotions](compendium/spells/calm-emotions.md),\
    \ [enthrall](compendium/spells/enthrall.md), [shatter](compendium/spells/shatter.md)\n\
    \n3rd level (3 slots): [hypnotic pattern](compendium/spells/hypnotic-pattern.md),\
    \ [sending](compendium/spells/sending.md)\n\n4th level (2 slots): [compulsion](compendium/spells/compulsion.md),\
    \ [phantasmal killer](compendium/spells/phantasmal-killer.md)\n\n5th level (2\
    \ slots): [scrying](compendium/spells/scrying.md), [seeming](compendium/spells/seeming.md)\n\
    \n6th level (1 slots): [Otto's irresistible dance](compendium/spells/ottos-irresistible-dance.md),\
    \ [mass suggestion](compendium/spells/mass-suggestion.md)\n\n7th level (1 slots):\
    \ [prismatic spray](compendium/spells/prismatic-spray.md)"
  "name": "Spellcasting"
- "desc": "As a bonus action, the Feathered Mask leader can temporarily empower its\
    \ magical prowess. The next time the Feathered Mask leader casts a spell before\
    \ the end of its turn, it can give one target of the spell disadvantage on its\
    \ first saving throw against the spell."
  "name": "Emphatic Enchantment (2/Day)"
- "desc": "The guild leader has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The Feathered Mask leader makes two attacks with its rapier or hand crossbow.\
    \ It can cast a spell of 3rd level or lower in place of one attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Rapier"
- "desc": "Ranged Weapon Attack: +6 to hit, range 30/120 ft., one target. Hit:\
    \ 6 (1d6 + 3) piercing damage."
  "name": "Hand Crossbow"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```