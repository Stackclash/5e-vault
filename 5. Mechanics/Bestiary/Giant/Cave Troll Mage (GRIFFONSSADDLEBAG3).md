---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/10
  - monster/size/large
  - monster/type/giant
aliases:
  - Cave Troll Mage
---
# [[5. Mechanics\Bestiary\Giant\Cave Troll Mage (GRIFFONSSADDLEBAG3).md|Cave Troll Mage]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Cave trolls, like normal trolls, are tall and lanky giantkin. Cave trolls, in particular, are more gray and hunched over. They have a penchant for crystals and often collect them for trade or crafting. They form small communities within their cave networks, and at times make the transition to larger society.

```statblock
"name": "Cave Troll Mage (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "giant"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d10 + 60"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "20"
  - !!int "18"
  - !!int "15"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
"damage_resistances": "nonmagical bludgeoning, piercing, slashing (from stoneskin)"
"senses": "tremorsense 30 ft., darkvision 120 ft., passive Perception 16"
"languages": "Common, Giant, Undercommon"
"cr": "10"
"traits":
  - "desc": "The troll is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 16). The troll has the following wizard spells prepared:\n\n\
      Cantrips (at will): [[5. Mechanics/Spells/Acid Splash.md|acid splash]], [[5. Mechanics/Spells/Light.md|light]],\
      \ [[5. Mechanics/Spells/Mending.md|mending]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
      \n1st level (4 slots): [[5. Mechanics/Spells/False Life.md|false life]] ,\
      \ [[5. Mechanics/Spells/Tensers Floating Disk.md|Tenser's floating disk]], [[5. Mechanics/Spells/Shield.md|shield]],\
      \ [[5. Mechanics/Spells/Thunderwave.md|thunderwave]]\n\n2nd level (3 slots):\
      \ [[5. Mechanics/Spells/Locate Object.md|locate object]], [[5. Mechanics/Spells/Mirror Image.md|mirror image]],\
      \ [[5. Mechanics/Spells/Shatter.md|shatter]], [[5. Mechanics/Spells/Spider Climb.md|spider climb]]\n\
      \n3rd level (3 slots): [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
      \ [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]], [[5. Mechanics/Spells/Slow.md|slow]]\n\
      \n4th level (3 slots): [[5. Mechanics/Spells/Stone Shape.md|stone shape]],\
      \ [[5. Mechanics/Spells/Stoneskin.md|stoneskin]] \n\n*5th level (2 slots):\
      \ [[5. Mechanics/Spells/Cone Of Cold.md|cone of cold]]\n\nThe troll casts these\
      \ spells on itself before combat."
    "name": "Spellcasting"
  - "desc": "The troll has advantage on Wisdom (Perception) checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The troll has advantage on an attack roll against a creature if at least\
      \ one of the troll's allies is within 5 feet of the creature and the ally isn't\
      \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Pack Tactics"
  - "desc": "The troll regains 10 hit points at the start of its turn. If the troll\
      \ takes fire or radiant damage, this trait doesn't function at the start of\
      \ the troll's next turn.\n\nThe troll dies only if it starts its turn with 0\
      \ hit points and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "The troll makes three attacks: one with its bite and two with its staff."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) bludgeoning damage, or 12 (2d8 + 3) bludgeoning damage if used with\
      \ two hands."
    "name": "Staff"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
