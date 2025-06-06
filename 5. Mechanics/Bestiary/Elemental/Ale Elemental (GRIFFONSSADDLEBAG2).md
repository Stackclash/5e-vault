---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/5
  - monster/size/large
  - monster/type/elemental
aliases:
  - Ale Elemental
---
# [[5. Mechanics\Bestiary\Elemental\Ale Elemental (GRIFFONSSADDLEBAG2).md|Ale Elemental]]
*Source: The Griffon's Saddlebag, Book 2 p. 358*

These swirling and frothy, caramel-colored creatures smell of honey and hops. The existence of ale elementals has brought about hours of intense research and debate about the possibility of an elemental plane of alcohol or the like. Planar travel has thus far proved impossible, although these elementals are occasionally summoned by inebriated mages purposefully or accidentally. Regardless of their means of arrival, these creatures swarm towards areas with high concentrations of alcoholic beverages. As they pursue their murky agendas, they usually end up causing terrible havoc and general mayhem.

```statblock
"name": "Ale Elemental (GRIFFONSSADDLEBAG2)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d10 + 60"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "20"
  - !!int "5"
  - !!int "10"
  - !!int "8"
"speed": "30 ft., swim 60 ft."
"damage_resistances": "cold"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Drunkenness|drunkenness]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan"
"cr": "5"
"traits":
  - "desc": "The elemental can enter a hostile creature's space and stop there. It\
      \ can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Alcohol Form"
  - "desc": "If the elemental takes cold damage, it partially freezes; its speed is\
      \ reduced by 20 feet until the end of its next turn."
    "name": "Freeze"
"actions":
  - "desc": "The elemental makes two slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) bludgeoning damage, plus 4 (d8) poison damage."
    "name": "Slam"
  - "desc": "Each creature in the elemental's space must make a DC 15 Strength saving\
      \ throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it\
      \ is Large or smaller, it is also [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 14). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
      \ and unable to breathe unless it can breathe water. If the saving throw is\
      \ successful, the target is pushed out of the elemental's space.\n\nThe elemental\
      \ can grapple one Large creature or up to two Medium or smaller creatures at\
      \ one time. At the start of each of the elemental's turns, each target [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ by it takes 8 (1d8 + 4) bludgeoning damage plus 4 (d8) poison damage and must\
      \ succeed on a Constitution saving throw or gain one level of [[/5. Mechanics/Rules/Conditions.md#Drunkenness|drunkenness]].\
      \ A creature within 5 feet of the elemental can pull a creature or object out\
      \ of it by taking an action to make a DC 14 Strength check and succeeding. Any\
      \ levels of [[/5. Mechanics/Rules/Conditions.md#Drunkenness|drunkenness]] caused\
      \ by this effect go away when the grapple ends."
    "name": "Whelm (Recharge 4-6)"
"source":
  - "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
