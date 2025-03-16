---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Swarm of Lux Moths
---
# [[5. Mechanics/Bestiary/Monstrosity/Swarm Of Lux Moths (GRIFFONSSADDLEBAG3).md|Swarm of Lux Moths]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Having absorbed a portion of energy from the region's crystals, these moths exhibit an increased sense of awareness and group cohesion, acting more like drones of a beehive to protect and supply their queen. They seem to prefer utilizing their silhouette to deter threats from afar, but can also charm or blind foes in closer quarters. Some cavern denizens even use the phrase "beware the beauties" as both literal warning of these creatures, and as metaphorical advice against similarly dangerous illusory threats.

```statblock
"name": "Swarm Of Lux Moths (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "2"
- !!int "12"
- !!int "10"
- !!int "1"
- !!int "5"
- !!int "1"
"speed": "5 ft., fly 20 ft. (hover)"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "blindsight 10 ft., passive Perception 7"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The swarm sheds dim light in a 5-foot radius."
  "name": "Illumination"
- "desc": "Creatures behind the swarm are heavily obscured. Other creatures are [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
    \ while they are within the swarm's space."
  "name": "Obscuring Shroud"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny moth. The swarm can't regain\
    \ hit points or gain temporary hit points."
  "name": "Swarm"
- "desc": "As a bonus action, the swarm can shape itself to assume any Medium-sized\
    \ silhouette, including that of any creature the swarm has seen. While a creature\
    \ is further than 30 feet from the swarm, it must succeed on a DC 10 Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ check to identify the nature of the silhouette."
  "name": "Intimidating Facade"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target. Hit: 6 (2d4\
    \ + 1) radiant damage, or 3 (1d4 + 1) radiant damage if the swarm has half of\
    \ its hit points or fewer."
  "name": "Disrupting Flashes"
- "desc": "The swarm illuminates their bodies and swirls in a mesmerizing pattern.\
    \ Each other creature within 30 feet of the swarm that can see it and isn't a\
    \ moth must make a DC 11 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ by the swarm for 1 minute. A creature [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ by the swarm can perceive no creatures other than the swarm, and is only minimally\
    \ aware of their surroundings.\n\nA creature [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ by the swarm can repeat the save at the end of each of its turns, ending the\
    \ condition for it on a success. The condition ends immediately if the creature\
    \ starts its turn without line of sight to the swarm, or starts its turn more\
    \ than 60 feet from it."
  "name": "Entrancing Pattern (Recharge 6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
