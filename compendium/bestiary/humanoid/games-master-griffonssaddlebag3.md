---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/5
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Games Master"]
---
# [Games Master](compendium\bestiary\humanoid/games-master-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Creatures that spend enough time playing games eventually come to understand them in strange and powerful ways, seeing them in a way unlike their fellow players. These masters can easily win at cards, chess, or dice because of their staggering experience and uncanny luck, but can also bring out the bizarre magical powers hidden within such trinkets.

```statblock
"name": "Games Master (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "[leather](compendium/items/leather-armor.md)"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "10"
- !!int "18"
- !!int "12"
- !!int "17"
- !!int "15"
- !!int "15"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "7"
  "Intelligence": !!int "6"
"skillsaves":
  "Sleight of Hand": !!int "7"
  "Deception": !!int "5"
  "Insight": !!int "5"
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Common, Thieves' cant"
"cr": "5"
"traits":
- "desc": "When the master makes an ability check, attack roll, or saving throw and\
    \ rolls a 1 on the d20, it can choose to treat the roll as a 20 instead."
  "name": "Ace in the Hole (1/Day)"
- "desc": "The master has advantage on any ability check it makes that involves a\
    \ gaming set."
  "name": "Gaming Adept"
- "desc": "As a bonus action, the master spreads a flurry of dice on the ground in\
    \ a 15-foot cone. The area becomes difficult terrain until cleared, with each\
    \ 5-foot-square portion requiring at least 1 minute to clear by hand. When a creature\
    \ moves into the area and each time it moves 5 feet within the area, it must succeed\
    \ on a DC 15 Dexterity ([Acrobatics](/compendium/rules/skills.md#Acrobatics))\
    \ check or fall [prone](/compendium/rules/conditions.md#Prone) and take 3 (1d6)\
    \ bludgeoning damage."
  "name": "Scatter Dice"
- "desc": "When the master makes an attack roll, if the d20 roll is a 7, the attack\
    \ hits regardless of any modifiers or the target's AC, and the attack is a critical\
    \ hit."
  "name": "Wildcard"
"actions":
- "desc": "The master makes three fling card attacks."
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. Hit:\
    \ 6 (1d4 + 4) slashing damage."
  "name": "Fling Card"
- "desc": "The master throws a dragonchess piece into an unoccupied space the master\
    \ can see within 30 feet of it, magically summoning the creature represented by\
    \ the piece. The creature disappears when it drops to 0 hit points or after 10\
    \ minutes.\n\nThe creature is friendly to the master and its companions for the\
    \ duration. Roll initiative for the creature, which has its own turns. It obeys\
    \ any verbal commands that the master issues to it (no action required by the\
    \ master). If the master doesn't issue any commands to the creature, it defends\
    \ itself from hostile creatures but otherwise takes no actions.\n\nRoll a d6 to\
    \ determine the creature the master summons."
  "name": "Dragonchess Summon (1/Day)"
- "desc": "Griffon"
  "name": "1"
- "desc": "Basilisk"
  "name": "2"
- "desc": "Red dragon wyrmling"
  "name": "3"
- "desc": "Unicorn"
  "name": "4"
- "desc": "Earth elemental"
  "name": "5"
- "desc": "Mammoth"
  "name": "6"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```