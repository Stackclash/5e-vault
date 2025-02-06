---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\3
  - monster\Size\Medium
  - monster\Type\Humanoid\Any Race
aliases:
  - Polaris Elite Knight
---
# [[5. Mechanics\Bestiary\Humanoid\Polaris Elite Knight (GRIFFONSSADDLEBAG3).md|Polaris Elite Knight]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The knights of Polaris are qualified enforcement agents in their own right, but the elite knights of the city stand head and shoulders above the rest in terms of raw strength and tactical know-how. Polaris elite knights are usually left to manage groups of other knights or mind the wellfare and daily tasks of the Magistrates.

```statblock
"name": "Polaris Elite Knight (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"ac_class": "[[5. Mechanics/Items/Splint Armor.md|splint armor]]"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "14"
- !!int "13"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "3"
  "Insight": !!int "4"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- "desc": "The knight has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]."
  "name": "Brave"
- "desc": "Hostile creatures provoke opportunity attacks from the knight when they\
    \ enter its reach. If the knight takes the Dodge or Search action, it has advantage\
    \ on opportunity attacks until the start of its next turn."
  "name": "Defensive Combatant"
"actions":
- "desc": "The knight makes two glaive attacks. It can take the Dodge or Search action\
    \ in place of one attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) slashing damage."
  "name": "Glaive"
"reactions":
- "desc": "The knight adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the knight must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
