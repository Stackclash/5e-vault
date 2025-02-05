---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 
size: Large
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/3
- monster/size/large
- monster/type/construct
aliases: ["Animated Boulder"]
---
# [Animated Boulder](compendium\bestiary\construct/animated-boulder-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Animated constructs created by the archmage Oglexarth. These boulders remain motionless when not defending the city from attack. While active, they use their considerable weight to crash through and crush enemy lines.

```statblock
"name": "Animated Boulder (GriffonsSaddlebag3)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "19"
- !!int "13"
- !!int "18"
- !!int "3"
- !!int "3"
- !!int "1"
"speed": "40 ft. (20 ft. when moving uphill 60 ft. when moving downhill)"
"damage_vulnerabilities": "bludgeoning, thunder"
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed),\
  \ [deafened](/compendium/rules/conditions.md#Deafened), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [poisoned](/compendium/rules/conditions.md#Poisoned),\
  \ [prone](/compendium/rules/conditions.md#Prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "3"
"traits":
- "desc": "The boulder is incapacitated while in the area of an [antimagic field](compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](compendium/spells/dispel-magic.md), the boulder\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall unconscious for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "If the boulder moves at least 20 feet straight toward a target and then\
    \ hits it with a slam attack on the same turn, the target takes an extra 3 (1d6)\
    \ bludgeoning damage. If the target is a creature, it must succeed on a DC 14\
    \ Strength saving throw or be knocked [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Charge"
- "desc": "The boulder doesn't require air, food, drink, or sleep."
  "name": "Constructed Nature"
- "desc": "If the boulder moves at least 20 feet across rocky ground on its turn,\
    \ it regains 10 hit points."
  "name": "Earthen Vigor"
- "desc": "While the boulder remains motionless, it is indistinguishable from a normal\
    \ boulder."
  "name": "False Appearance"
- "desc": "Difficult terrain composed of earth or stone doesn't cost the boulder extra\
    \ movement."
  "name": "Rocky Roll"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- "desc": "The boulder moves up to 30 feet in a straight line without provoking opportunity\
    \ attacks. Each creature in the line must make a DC 14 Dexterity saving throw.\
    \ On a failed save, a creature takes 21 (6d6) bludgeoning damage and is knocked\
    \ [prone](/compendium/rules/conditions.md#Prone). On a successful save, the creature\
    \ is pushed 5 feet to an unoccupied space of its choice outside the path of the\
    \ boulder's movement."
  "name": "Rollout (Recharge 5-6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```