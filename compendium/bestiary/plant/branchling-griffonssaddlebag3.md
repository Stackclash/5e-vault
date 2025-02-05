---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/1-2
- monster/size/medium
- monster/type/plant
aliases: ["Branchling"]
---
# [Branchling](compendium\bestiary\plant/branchling-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Viewed by some as a cousin of the treant, branchlings are close to the size of a sapling. In the Safire Wood, they often rove about in small packs, avoiding the attention of larger threats and searching for food. Their willowy, stick-thin limbs are surprisingly hardy, making them quite popular as animated helpers and protectors among both [hedge mages](compendium/bestiary/humanoid/hedge-mage-griffonssaddlebag3.md) and hags. They fiercely protect their young [twiglings](compendium/bestiary/plant/twigling-griffonssaddlebag3.md), which often travel within their boughs. Occasionally, a handful of branchlings will live long enough and grow large enough to finally merge with one another and become full-fledged [awakened trees](compendium/bestiary/plant/awakened-tree.md).

```statblock
"name": "Branchling (GriffonsSaddlebag3)"
"size": "Medium"
"type": "plant"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "15"
- !!int "11"
- !!int "14"
- !!int "5"
- !!int "12"
- !!int "10"
"speed": "30 ft., climb 30 ft."
"saves":
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
"damage_vulnerabilities": "fire"
"damage_resistances": "piercing"
"senses": "passive Perception 11"
"languages": "understands Druidic and Sylvan but can't speak"
"cr": "1/2"
"traits":
- "desc": "While the branchling remains motionless, it is indistinguishable from an\
    \ ordinary, thick tree branch."
  "name": "False Appearance"
"actions":
- "desc": "The branchling makes two slam attacks. Slam. Melee Weapon Attack: +4 to\
    \ hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage."
  "name": "Multiattack"
- "desc": "The branchling hurls a flurry Of the many predators that stalk the wood,\
    \ the spider-newt of seeds in a 15-foot cone. Each creature in the area must is\
    \ the most renowned. This arachnid-like reptile is uniquely suited to surviving\
    \ in such a hostile locale, protected by acid                   succeed on a DC\
    \ 10 Dexterity saving throw or take 5 (2d4) that oozes from its skin and from\
    \ glands in its throat and bludgeoning damage."
  "name": "Throw Seeds (Recharge 4-6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```