---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: 
size: Large
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/8
- monster/size/large
- monster/type/construct
aliases: ["Preserver Hulk"]
---
# [Preserver Hulk](compendium\bestiary\construct/preserver-hulk-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A lumbering construct of pure strength and built for the Hollow Moon's most demanding tasks.

```statblock
"name": "Preserver Hulk (GriffonsSaddlebag3)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "9d10 + 36"
"stats":
- !!int "19"
- !!int "14"
- !!int "19"
- !!int "6"
- !!int "10"
- !!int "9"
"speed": "40 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Perception": !!int "3"
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "understands the languages of its creator but can't speak"
"cr": "8"
"traits":
- "desc": "The hulk has advantage on ability checks and saving throws against effects\
    \ that would push it, pull it, or knock it [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Grounded"
- "desc": "The hulk is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The hulk deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The hulk makes three attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 17 (2d12\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +5 to hit, range 60 ft., one target. Hit: 13\
    \ (2d10 + 2) force damage, and the target must succeed on a DC 15 Dexterity saving\
    \ throw or become [restrained](/compendium/rules/conditions.md#Restrained) by\
    \ energy bindings. A creature can use its action to make a DC 15 Strength check,\
    \ freeing itself or another creature within its reach from the bindings on a success."
  "name": "Laser"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```