---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 
size: Large
tags:
- compendium/src/5e/tgs1
- monster/cr/3
- monster/size/large
- monster/type/undead
aliases: ["Tendril of Dendallen"]
---
# [Tendril of Dendallen](compendium\bestiary\undead/tendril-of-dendallen-tgs1.md)
*Source: The Griffon's Saddlebag, Book 1 p. 201*

```statblock
"name": "Tendril of Dendallen (tgs1)"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "3d10 + 6"
"stats":
- !!int "22"
- !!int "15"
- !!int "15"
- !!int "2"
- !!int "6"
- !!int "3"
"speed": "0 ft."
"skillsaves":
  "Athletics": !!int "8"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed),\
  \ [deafened](/compendium/rules/conditions.md#Deafened), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [grappled](/compendium/rules/conditions.md#Grappled),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [petrified](/compendium/rules/conditions.md#Petrified),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained), [stunned](/compendium/rules/conditions.md#Stunned),\
  \ [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "3"
"traits":
- "desc": "The tendril can occupy another creature's space and vice versa. The tendril\
    \ is immune to any spell or effect that would alter its form."
  "name": "Necromantic Form"
- "desc": "The tendril isn't affected by forced movement, and it doesn't need to make\
    \ a check to cling to difficult surfaces like walls or ceilings."
  "name": "Planted"
- "desc": "The tendril shares a psychic link with [the spirit](compendium/bestiary/undead/spirit-of-dendallen-tgs1.md)\
    \ as well as the host while it's controlled by the spirit. The tendril doesn't\
    \ provide cover to hostile creatures against attacks made through the tendril's\
    \ space by the spirit of Dendallen or its enthralled host."
  "name": "Will of Dendallen"
"actions":
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) force damage plus 9 (2d8) acid damage, and if the target is a creature,\
    \ it is [grappled](/compendium/rules/conditions.md#Grappled) (escape DC 16) and\
    \ must succeed on a DC 16 Strength saving throw or be pulled up to 5 feet toward\
    \ the tendril. Until this grapple ends, the tendril can't grasp another target."
  "name": "Grasp"
- "desc": "One Medium or smaller object or creature grappled by the tendril is thrown\
    \ up to 20 feet in a direction of the tendril's choice and knocked [prone](/compendium/rules/conditions.md#Prone).\
    \ If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning\
    \ damage for every 10 feet it was thrown. If the target is thrown at another creature,\
    \ that creature must succeed on a DC 16 Dexterity saving throw or take the same\
    \ damage and be knocked prone."
  "name": "Fling"
- "desc": "The tendril withdraws into the surface from which it appeared and emerges\
    \ elsewhere, teleporting to an unoccupied space of its choice within 120 feet\
    \ of Dendallen."
  "name": "Teleport"
"source":
- "tgs1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```