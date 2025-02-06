---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: null
size: Huge
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\6
  - monster\Size\Huge
  - monster\Type\Monstrosity
aliases:
  - Swarm of Cacophony Crows
---
# [[5. Mechanics\Bestiary\Monstrosity\Swarm Of Cacophony Crows (GRIFFONSSADDLEBAG3).md|Swarm of Cacophony Crows]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Cacophony crows are dark, but brassy in color and can imitate the sound and even resonance of temple bells. Some crows are trained to take the place of bells in buildings with limited space or resources, and can even be used to tell time, with enough patience, in much the same way that a belltower chimes throughout the day.

In the wild, the crows use their raucous calls to startle and disarm potential prey, or even mislead wandering travelers with a false promise of faraway civilization. A group of cacophony crows is called a crashing.

```statblock
"name": "Swarm Of Cacophony Crows (GRIFFONSSADDLEBAG3)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"stats":
- !!int "18"
- !!int "14"
- !!int "17"
- !!int "3"
- !!int "14"
- !!int "7"
"speed": "20 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, thunder, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "6"
"traits":
- "desc": "The swarm doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Medium cacophony crow. The swarm\
    \ can't regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 0 ft., one target. Hit: 25 (6d6\
    \ + 4) piercing damage, or 18 (4d6 + 4) piercing damage if the swarm has half\
    \ of its hit points or fewer."
  "name": "Beaks"
- "desc": "Melee Weapon Attack: +7 to hit, reach 0 ft., one target. Hit: 19 (6d4\
    \ + 4) piercing damage, or 14 (4d4 + 4) piercing damage if the swarm has half\
    \ of its hit points or fewer. If the target is a Large or smaller creature, it\
    \ is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] (escape DC 17). Until\
    \ this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
    \ and the swarm can't use its talons on another target."
  "name": "Talons"
- "desc": "The swarm emits a thunderous screech. Each creature within 90 feet of the\
    \ swarm must make a DC 15 Constitution saving throw. On a failed save, a creature\
    \ takes 27 (5d10) thunder damage and is [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
    \ for 1 minute; a [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]] creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. On a successful save, a creature takes half as much\
    \ damage and isn't [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]."
  "name": "Screech (Recharge 4-6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
