---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/2
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Crest City Druid (Wyrmling)"]
---
# [Crest City Druid (Wyrmling)](compendium\bestiary\humanoid/crest-city-druid-wyrmling-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2 p. 348*

Druids of the Circle of Dragons typically take a supportive role while in combat, utilizing their spells to heal and empower their allies. However, if they become injured or face a truly imminent threat, they will wild shape into their powerful draconic form and unleash their full might with tremendous fervor.

These special druids are labeled in ascending order below by their strength and ranking within the Order.

```statblock
"name": "Crest City Druid (Wyrmling) (GriffonsSaddlebag2)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"ac_class": "[hide armor](compendium/items/hide-armor.md); 15 from natural armor in\
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
    \ (at will): [druidcraft](compendium/spells/druidcraft.md), [poison spray](compendium/spells/poison-spray.md),\
    \ [shillelagh](compendium/spells/shillelagh.md) (can cast on sickles)\n\n1st\
    \ level (4 slots): [cure wounds](compendium/spells/cure-wounds.md), [entangle](compendium/spells/entangle.md),\
    \ [healing word](compendium/spells/healing-word.md)\n\n2nd level (3 slots):\
    \ [enhance ability](compendium/spells/enhance-ability.md), [locate object](compendium/spells/locate-object.md),\
    \ [spike growth](compendium/spells/spike-growth.md)"
  "name": "Spellcasting (Humanoid Form Only)"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit (+4 to hit with [shillelagh](compendium/spells/shillelagh.md)),\
    \ reach 5 ft., one target. Hit: 2 (1d4) slashing damage, or 6 (1d8 + 2) slashing\
    \ damage with [shillelagh](compendium/spells/shillelagh.md)."
  "name": "Sickle (Humanoid Form Only)"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 8 (1d12\
    \ + 2) piercing damage."
  "name": "Bite (Dragon Form Only)"
- "desc": "The druid exhales a plume of energy in a 15-foot cone. Each creature in\
    \ the area must make a DC 12 Dexterity saving throw, taking 7 (2d6) damage of\
    \ the type associated with the druid's dragon type (see the [Dragon Damage Type](compendium/tables/dragon-damage-type-griffonssaddlebag2.md)\
    \ table) on a failed save, or half as much damage on a successful one."
  "name": "Breath Weapon (Recharge 6-6) (Dragon Form Only)"
- "desc": "The druid can use its action to magically polymorph into a Medium dragon\
    \ of any type of its choice (see the [Dragon Damage Type](compendium/tables/dragon-damage-type-griffonssaddlebag2.md)\
    \ table), or back into its humanoid form. When the druid polymorphs, it gains\
    \ 40 temporary hit points, and it can choose whether its equipment falls to the\
    \ ground, melds into its new form, or is worn by the new form (if possible). It\
    \ reverts to its humanoid form after 2 hours, if it dies, or if it falls [unconscious](/compendium/rules/conditions.md#Unconscious).\
    \ Its statistics are the same in each form, other than its AC and speed, as noted."
  "name": "Change Shape (2/Day)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```