---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/8
  - monster/size/large
  - monster/type/construct
aliases:
  - Refuse Golem
---
# [[5. Mechanics/Bestiary/Construct/Refuse Golem (GRIFFONSSADDLEBAG2).md|Refuse Golem]]
*Source: The Griffon's Saddlebag, Book 2 p. 361*

Many speak of trash becoming treasure, but trash is lifeblood for the refuse golem. Most common in areas with large amounts of magical food and drink, these beasts form when mounds of partially consumed waste are not disposed of properly. The resulting magical landfill develops an aggressive, sentient construct that is formidable in battle, most known for their poisonous stench and amorphous defenses.

```statblock
"name": "Refuse Golem (GRIFFONSSADDLEBAG2)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "19"
- !!int "9"
- !!int "18"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "25 ft."
"damage_vulnerabilities": "fire"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "8"
"traits":
- "desc": "While the golem remains motionless, it is indistinguishable from an ordinary\
    \ pile of garbage."
  "name": "False Appearance"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "Any creature other than a refuse golem that starts its turn within 10 feet\
    \ of the golem, must succeed on a DC 15 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
    \ until the start of the creature's next turn. On a successful saving throw, the\
    \ creature is immune to the stench of all refuse golems for 1 hour."
  "name": "Stench"
"actions":
- "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage, plus 9 (2d8) piercing or slashing damage (golem's choice)."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +7 to hit, range 60/240 ft., one target. Hit:\
    \ 26 (4d10 + 4) bludgeoning damage."
  "name": "Hurl Junk"
"reactions":
- "desc": "When the golem is hit by a ranged weapon attack, it absorbs the projectile\
    \ into its form. When it does so, the damage it takes from the attack is reduced\
    \ by 11 (2d10). A creature within 5 feet of the golem can take an action to pull\
    \ an absorbed projectile out of it with a successful DC 15 Strength check."
  "name": "Missile Absorption"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
