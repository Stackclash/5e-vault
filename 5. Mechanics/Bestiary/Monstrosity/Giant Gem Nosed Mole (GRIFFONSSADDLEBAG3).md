---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\3
  - monster\Size\Large
  - monster\Type\Monstrosity
aliases:
  - Giant Gem-nosed Mole
---
# [[5. Mechanics\Bestiary\Monstrosity\Giant Gem Nosed Mole (GRIFFONSSADDLEBAG3).md|Giant Gem-nosed Mole]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

With claws of diamond-cutting adamantine and a particularly sensitive olfactory organ made of some sort of living crystal, the giant gem-nosed mole is another creature that seeks out gems and mineral growths for nutrients, but are generally much less aggressive than geode wurms are. Their gemstone noses are capable of detecting both light and smell, allowing it to navigate to nearby mineral deposits and detect even the slightest hint of light from a crystal or gem.

```statblock
"name": "Giant Gem Nosed Mole (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"stats":
- !!int "17"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "13"
- !!int "5"
"speed": "30 ft., burrow 10 ft."
"skillsaves":
  "Perception": !!int "3"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]"
"senses": "blindsight 30 ft., tremorsense 60 ft. (blind beyond this radius), passive\
  \ Perception 13"
"languages": ""
"cr": "3"
"traits":
- "desc": "The mole's claw attacks are magical and deal an extra 4 (1d8) force damage\
    \ on a hit (included in the attack)."
  "name": "Adamantine Claws"
- "desc": "The mole has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The mole can sense the presence of dim and bright light within 60 feet\
    \ of it. This sense doesn't extend through opaque obstructions, but can travel\
    \ around corners and through openings that aren't airtight. Furthermore, the mole\
    \ can detect and identify any crystals or gemstones lit by dim or bright light\
    \ that it can sense."
  "name": "Light Sense"
- "desc": "The mole can burrow through solid rock at half its burrowing speed and\
    \ leaves a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- "desc": "The mole makes two attacks with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage plus 4 (1d8) force damage."
  "name": "Adamantine Claws"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
