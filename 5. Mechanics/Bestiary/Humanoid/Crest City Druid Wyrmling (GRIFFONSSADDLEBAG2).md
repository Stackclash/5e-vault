---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/2
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Crest City Druid (Wyrmling)
---
# [[5. Mechanics/Bestiary/Humanoid/Crest City Druid Wyrmling (GRIFFONSSADDLEBAG2).md|Crest City Druid (Wyrmling)]]
*Source: The Griffon's Saddlebag, Book 2 p. 348*

Druids of the Circle of Dragons typically take a supportive role while in combat, utilizing their spells to heal and empower their allies. However, if they become injured or face a truly imminent threat, they will wild shape into their powerful draconic form and unleash their full might with tremendous fervor.

These special druids are labeled in ascending order below by their strength and ranking within the Order.

```statblock
"name": "Crest City Druid Wyrmling (GRIFFONSSADDLEBAG2)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"ac_class": "[[5. Mechanics/Items/Hide Armor.md|hide armor]]; 15 from natural armor in\
  \ dragon form"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "15"
- !!int "11"
"speed": "30 ft., climb 30 ft. in dragon form"
"skillsaves":
  "Nature": !!int "3"
  "Stealth": !!int "3"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Common, Draconic, Druidic"
"cr": "2"
"traits":
- "desc": "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12). It has the following druid spells prepared:\n\nCantrips\
    \ (at will): [[5. Mechanics/Spells/Druidcraft.md|druidcraft]], [[5. Mechanics/Spells/Poison Spray.md|poison spray]],\
    \ [[5. Mechanics/Spells/Shillelagh.md|shillelagh]] (can cast on sickles)\n\n1st\
    \ level (4 slots): [[5. Mechanics/Spells/Cure Wounds.md|cure wounds]], [[5. Mechanics/Spells/Entangle.md|entangle]],\
    \ [[5. Mechanics/Spells/Healing Word.md|healing word]]\n\n2nd level (3 slots):\
    \ [[5. Mechanics/Spells/Enhance Ability.md|enhance ability]], [[5. Mechanics/Spells/Locate Object.md|locate object]],\
    \ [[5. Mechanics/Spells/Spike Growth.md|spike growth]]"
  "name": "Spellcasting (Humanoid Form Only)"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit (+4 to hit with [[5. Mechanics/Spells/Shillelagh.md|shillelagh]]),\
    \ reach 5 ft., one target. Hit: 2 (1d4) slashing damage, or 6 (1d8 + 2) slashing\
    \ damage with [[5. Mechanics/Spells/Shillelagh.md|shillelagh]]."
  "name": "Sickle (Humanoid Form Only)"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 8 (1d12\
    \ + 2) piercing damage."
  "name": "Bite (Dragon Form Only)"
- "desc": "The druid exhales a plume of energy in a 15-foot cone. Each creature in\
    \ the area must make a DC 12 Dexterity saving throw, taking 7 (2d6) damage of\
    \ the type associated with the druid's dragon type (see the [[5. Mechanics/Tables/Dragon Damage Type (GRIFFONSSADDLEBAG2).md|Dragon Damage Type]]\
    \ table) on a failed save, or half as much damage on a successful one."
  "name": "Breath Weapon (Recharge 6-6) (Dragon Form Only)"
- "desc": "The druid can use its action to magically polymorph into a Medium dragon\
    \ of any type of its choice (see the [[5. Mechanics/Tables/Dragon Damage Type (GRIFFONSSADDLEBAG2).md|Dragon Damage Type]]\
    \ table), or back into its humanoid form. When the druid polymorphs, it gains\
    \ 40 temporary hit points, and it can choose whether its equipment falls to the\
    \ ground, melds into its new form, or is worn by the new form (if possible). It\
    \ reverts to its humanoid form after 2 hours, if it dies, or if it falls [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]].\
    \ Its statistics are the same in each form, other than its AC and speed, as noted."
  "name": "Change Shape (2/Day)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
