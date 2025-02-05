---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: 
size: Large
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/10
- monster/size/large
- monster/type/giant
aliases: ["Cave Troll Mage"]
---
# [Cave Troll Mage](compendium\bestiary\giant/cave-troll-mage-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Cave trolls, like normal trolls, are tall and lanky giantkin. Cave trolls, in particular, are more gray and hunched over. They have a penchant for crystals and often collect them for trade or crafting. They form small communities within their cave networks, and at times make the transition to larger society.

```statblock
"name": "Cave Troll Mage (GriffonsSaddlebag3)"
"size": "Large"
"type": "giant"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d10 + 60"
"stats":
- !!int "17"
- !!int "13"
- !!int "20"
- !!int "18"
- !!int "15"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Investigation": !!int "8"
  "Perception": !!int "6"
  "Arcana": !!int "8"
"damage_resistances": "nonmagical bludgeoning, piercing, slashing (from stoneskin)"
"senses": "tremorsense 30 ft., darkvision 120 ft., passive Perception 16"
"languages": "Common, Giant, Undercommon"
"cr": "10"
"traits":
- "desc": "The troll is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 16). The troll has the following wizard spells prepared:\n\n\
    Cantrips (at will): [acid splash](compendium/spells/acid-splash.md), [light](compendium/spells/light.md),\
    \ [mending](compendium/spells/mending.md), [prestidigitation](compendium/spells/prestidigitation.md)\n\
    \n1st level (4 slots): [false life](compendium/spells/false-life.md) , [Tenser's\
    \ floating disk](compendium/spells/tensers-floating-disk.md), [shield](compendium/spells/shield.md),\
    \ [thunderwave](compendium/spells/thunderwave.md)\n\n2nd level (3 slots):\
    \ [locate object](compendium/spells/locate-object.md), [mirror image](compendium/spells/mirror-image.md),\
    \ [shatter](compendium/spells/shatter.md), [spider climb](compendium/spells/spider-climb.md)\n\
    \n3rd level (3 slots): [dispel magic](compendium/spells/dispel-magic.md),\
    \ [lightning bolt](compendium/spells/lightning-bolt.md), [slow](compendium/spells/slow.md)\n\
    \n4th level (3 slots): [stone shape](compendium/spells/stone-shape.md), [stoneskin](compendium/spells/stoneskin.md)\
    \ \n\n*5th level (2 slots): [cone of cold](compendium/spells/cone-of-cold.md)\n\
    \nThe troll casts these spells on itself before combat."
  "name": "Spellcasting"
- "desc": "The troll has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The troll has advantage on an attack roll against a creature if at least\
    \ one of the troll's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/compendium/rules/conditions.md#Incapacitated)."
  "name": "Pack Tactics"
- "desc": "The troll regains 10 hit points at the start of its turn. If the troll\
    \ takes fire or radiant damage, this trait doesn't function at the start of the\
    \ troll's next turn.\n\nThe troll dies only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The troll makes three attacks: one with its bite and two with its staff."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, or 12 (2d8 + 3) bludgeoning damage if used with two\
    \ hands."
  "name": "Staff"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```