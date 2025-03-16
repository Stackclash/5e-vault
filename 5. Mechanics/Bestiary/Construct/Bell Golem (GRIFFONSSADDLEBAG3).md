---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: null
size: Huge
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/12
  - monster/size/huge
  - monster/type/construct
aliases:
  - Bell Golem
---
# [[5. Mechanics/Bestiary/Construct/Bell Golem (GRIFFONSSADDLEBAG3).md|Bell Golem]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A bell golem is an enormous, four-legged golem in the form of a temple or similar sort of belltower. These golems often lie dormant until needed, typically at the behest of their creators or some other means of activation. Bell golems are frequently used as meeting places for cults, often without the cultists even knowing of the golem's existence.

```statblock
"name": "Bell Golem (GRIFFONSSADDLEBAG3)"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "212"
"hit_dice": "17d12 + 102"
"stats":
- !!int "20"
- !!int "9"
- !!int "22"
- !!int "3"
- !!int "11"
- !!int "3"
"speed": "30 ft."
"damage_immunities": "poison; psychic; thunder; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "12"
"traits":
- "desc": "The golem's lower body resembles a small temple.\n\nUp to eight Medium\
    \ or smaller creatures can ride in it without squeezing. Any creatures inside\
    \ the golem can't make melee attacks against creatures outside it, but several\
    \ openings allow them to make ranged attacks and create other ranged effects at\
    \ a distance. Creatures in the golem have three-quarters cover against attacks\
    \ and effects from outside it, and they are immune to effects created by the golem.\
    \ If the golem dies, creatures in the golem are placed in unoccupied spaces within\
    \ 5 feet of it."
  "name": "Bastion"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "Whenever the golem is subjected to thunder damage, it takes no damage and\
    \ its bell reverberates with a thunderous ring. Each creature within 30 feet of\
    \ the golem must succeed on a DC 18 Constitution saving throw or take thunder\
    \ damage equal to half the damage dealt by the attack or effect."
  "name": "Sympathetic Vibrations"
"actions":
- "desc": "The golem makes two stomp attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) bludgeoning damage."
  "name": "Stomp"
- "desc": "The golem causes its bell to ring out in a discordant clattering of tones.\
    \ Each creature within 60 feet of the golem that can hear it must make a DC 18\
    \ Wisdom saving throw. On a failed save, the target takes 18 (4d8) psychic damage\
    \ and time is altered around it, causing it to suffer the effects of the [[5. Mechanics/Spells/Slow.md|slow]]\
    \ spell for 1 minute. A target can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success."
  "name": "Time Cacophony (Recharge 6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
