---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/8
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Feathered Mask Leader (Daisy Z)
---
# [[5. Mechanics\Bestiary\Humanoid\Feathered Mask Leader Daisy Z (GRIFFONSSADDLEBAG3).md|Feathered Mask Leader (Daisy Z)]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The current Feathered Mask leader, Daisy Z, is a powerful spellcaster and masterful socialite. Her work to establish a reknowned and respected organization of companions is nothing short of impressive, and is capable of defending herself and her own with or without force, as necessary.

```statblock
"name": "Feathered Mask Leader Daisy Z (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Chaotic alignment"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather armor]]"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "14"
  - !!int "17"
  - !!int "16"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "dexterity": "+6"
  - "wisdom": "+6"
  - "charisma": "+8"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Performance|Performance]]"
    "desc": "+11"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+11"
"senses": "passive Perception 13"
"languages": "Common plus two other languages"
"cr": "8"
"traits":
  - "desc": "The feathered mask leader is an 13th-level spellcaster. Its spellcasting\
      \ ability is Charisma (spell save DC 16). It knows the following bard spells:\n\
      \nCantrips (at will): [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
      \ [[5. Mechanics/Spells/Message.md|message]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
      \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
      \ slots): [[5. Mechanics/Spells/Charm Person.md|charm person]], [[5. Mechanics/Spells/Command.md|command]],\
      \ [[5. Mechanics/Spells/Illusory Script.md|illusory script]], [[5. Mechanics/Spells/Unseen Servant.md|unseen servant]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Calm Emotions.md|calm emotions]],\
      \ [[5. Mechanics/Spells/Enthrall.md|enthrall]], [[5. Mechanics/Spells/Shatter.md|shatter]]\n\
      \n3rd level (3 slots): [[5. Mechanics/Spells/Hypnotic Pattern.md|hypnotic pattern]],\
      \ [[5. Mechanics/Spells/Sending.md|sending]]\n\n4th level (2 slots): [[5. Mechanics/Spells/Compulsion.md|compulsion]],\
      \ [[5. Mechanics/Spells/Phantasmal Killer.md|phantasmal killer]]\n\n5th level\
      \ (2 slots): [[5. Mechanics/Spells/Scrying.md|scrying]], [[5. Mechanics/Spells/Seeming.md|seeming]]\n\
      \n6th level (1 slots): [[5. Mechanics/Spells/Ottos Irresistible Dance.md|Otto's irresistible dance]],\
      \ [[5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]]\n\n7th level (1\
      \ slots): [[5. Mechanics/Spells/Prismatic Spray.md|prismatic spray]]"
    "name": "Spellcasting"
  - "desc": "As a bonus action, the Feathered Mask leader can temporarily empower\
      \ its magical prowess. The next time the Feathered Mask leader casts a spell\
      \ before the end of its turn, it can give one target of the spell disadvantage\
      \ on its first saving throw against the spell."
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
