---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 14
environments: null
size: Huge
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/14
  - monster/size/huge
  - monster/type/plant
aliases:
  - Deathcap
---
# [[5. Mechanics\Bestiary\Plant\Deathcap (GRIFFONSSADDLEBAG3).md|Deathcap]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Found primarily in the Gilded Glade, deathcaps are walking fungal nightmares. These carnivorous and ambulatory mushrooms are apex predators in the Safire Wood. Like most creatures in such a position on the food chain, however, they hunt rarely and hibernate for long periods of time. Some folktales claim that the first deathcap was created when a long-forgotten elf became cursed by one of the [[5. Mechanics/Bestiary/Fey/Safire Hag (GRIFFONSSADDLEBAG3).md|Safire hags]]. Unfortunately, the only proven strategy to escape the spores and tendrils of a deathcap is to avoid catching their interest in the first place.

```statblock
"name": "Deathcap (GRIFFONSSADDLEBAG3)"
"size": "Huge"
"type": "plant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "180"
"hit_dice": "19d12 + 57"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "16"
  - !!int "7"
  - !!int "13"
  - !!int "5"
"speed": "30 ft., burrow 20 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 30 ft., tremorsense 60 ft., passive Perception 16"
"languages": "Sylvan"
"cr": "14"
"traits":
  - "desc": "A creature that touches the deathcap or hits it with a melee attack while\
      \ within 10 feet of it must succeed on a DC 13 Constitution saving throw or\
      \ be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success. If a creature's saving throw is successful\
      \ or the effect ends for it, the creature is immune to the Fungal Spores of\
      \ all deathcaps for 1 hour."
    "name": "Fungal Spores"
  - "desc": "The deathcap has advantage on ability checks and saving throws against\
      \ being pushed, pulled, or knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Rooted"
"actions":
  - "desc": "The deathcap makes three attacks: one with  its bite and two with its\
      \ tendrils. It can replace each of its tendril attacks with one use of Fling."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10\
      \ (1d12 + 4) piercing damage, and the target must make a DC 16 Constitution\
      \ saving throw, taking 21 (6d6) poison damage on a failed save, or half as much\
      \ damage on a successful one. If the saving throw fails by 5 or more, the target\
      \ is also diseased for d12 hours. While diseased, the target gains vulnerability\
      \ to necrotic damage. In addition, whenever the target regains hit points, the\
      \ amount of hit points it regains is halved, and if it is reduced to 0 hit points,\
      \ it dies."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 10\
      \ (1d12 + 4) bludgeoning damage plus 13 (2d12) necrotic damage, and if the target\
      \ is Medium or smaller, it is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 14). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
      \ and it takes 7 (2d6) necrotic damage at the start of each of its turns."
    "name": "Tendril"
  - "desc": "One Medium or smaller object held or creature grappled by the deathcap\
      \ is thrown up to 30 feet in a random direction and knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ If a thrown target strikes a solid surface, the target takes 3 (d6) bludgeoning\
      \ damage for every 10 feet it was thrown. If the target is thrown at another\
      \ creature, that creature must succeed on a DC 14 Dexterity saving throw or\
      \ take the same damage and be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Fling"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
