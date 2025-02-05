---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: 
size: Large
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/5
- monster/size/large
- monster/type/elemental
aliases: ["Ale Elemental"]
---
# [Ale Elemental](compendium\bestiary\elemental/ale-elemental-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2 p. 358*

These swirling and frothy, caramel-colored creatures smell of honey and hops. The existence of ale elementals has brought about hours of intense research and debate about the possibility of an elemental plane of alcohol or the like. Planar travel has thus far proved impossible, although these elementals are occasionally summoned by inebriated mages purposefully or accidentally. Regardless of their means of arrival, these creatures swarm towards areas with high concentrations of alcoholic beverages. As they pursue their murky agendas, they usually end up causing terrible havoc and general mayhem.

```statblock
"name": "Ale Elemental (GriffonsSaddlebag2)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d10 + 60"
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
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [drunkenness](/compendium/rules/conditions.md#Drunkenness),\
  \ [exhaustion](/compendium/rules/conditions.md#Exhaustion), [frightened](/compendium/rules/conditions.md#Frightened),\
  \ [grappled](/compendium/rules/conditions.md#Grappled), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [poisoned](/compendium/rules/conditions.md#Poisoned),\
  \ [prone](/compendium/rules/conditions.md#Prone), [restrained](/compendium/rules/conditions.md#Restrained),\
  \ [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan"
"cr": "5"
"traits":
- "desc": "The elemental can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Alcohol Form"
- "desc": "If the elemental takes cold damage, it partially freezes; its speed is\
    \ reduced by 20 feet until the end of its next turn."
  "name": "Freeze"
"actions":
- "desc": "The elemental makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) bludgeoning damage, plus 4 (1d8) poison damage."
  "name": "Slam"
- "desc": "Each creature in the elemental's space must make a DC 15 Strength saving\
    \ throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is\
    \ Large or smaller, it is also [grappled](/compendium/rules/conditions.md#Grappled)\
    \ (escape DC 14). Until this grapple ends, the target is [restrained](/compendium/rules/conditions.md#Restrained)\
    \ and unable to breathe unless it can breathe water. If the saving throw is successful,\
    \ the target is pushed out of the elemental's space.\n\nThe elemental can grapple\
    \ one Large creature or up to two Medium or smaller creatures at one time. At\
    \ the start of each of the elemental's turns, each target [grappled](/compendium/rules/conditions.md#Grappled)\
    \ by it takes 8 (1d8 + 4) bludgeoning damage plus 4 (1d8) poison damage and must\
    \ succeed on a Constitution saving throw or gain one level of [drunkenness](/compendium/rules/conditions.md#Drunkenness).\
    \ A creature within 5 feet of the elemental can pull a creature or object out\
    \ of it by taking an action to make a DC 14 Strength check and succeeding. Any\
    \ levels of [drunkenness](/compendium/rules/conditions.md#Drunkenness) caused\
    \ by this effect go away when the grapple ends."
  "name": "Whelm (Recharge 4-6)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```