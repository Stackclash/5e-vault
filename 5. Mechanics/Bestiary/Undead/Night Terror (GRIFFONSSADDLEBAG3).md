---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\8
  - monster\Size\Large
  - monster\Type\Undead\Shapechanger
aliases:
  - Night Terror
---
# [[5. Mechanics\Bestiary\Undead\Night Terror (GRIFFONSSADDLEBAG3).md|Night Terror]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Shapeshifting specters made of protomatter themselves, night terrors are aptly named. These undead harbingers of misery emanate fear wherever they go and cause their prey to wither and lose all sense of hope in their wake. When invading the dreams of creatures, a terror transforms any dream into a horrifying experience.

```statblock
"name": "Night Terror (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "undead"
"subtype": "shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "115"
"hit_dice": "11d10 + 55"
"stats":
- !!int "13"
- !!int "18"
- !!int "21"
- !!int "12"
- !!int "17"
- !!int "19"
"speed": "30 ft., fly 20 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "10"
  "Stealth": !!int "7"
  "Perception": !!int "6"
"damage_resistances": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Common, telepathy 60 ft."
"cr": "8"
"traits":
- "desc": "The night terror's spellcasting ability is Charisma (spell save DC 15).\
    \ The night terror can innately cast the following spells, requiring no material\
    \ components:\n\nAt will: [[5. Mechanics/Spells/Silent Image.md|silent image]],\
    \ [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n1/day: [[5. Mechanics/Spells/Fear.md|fear]]\n\
    \n3/day each: [[5. Mechanics/Spells/Bane.md|bane]], [[5. Mechanics/Spells/Command.md|command]]\
    \ (as a 2nd-level spell)"
  "name": "Innate Spellcasting"
- "desc": "The night terror can use its action to polymorph into a Small or Medium\
    \ humanoid, or back into its true form. Its statistics, other than its size, are\
    \ the same in each form, but it can only use its flying speed in humanoid form\
    \ if it's polymorphed into a race that is able to fly. Any equipment it is wearing\
    \ or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "Creatures within 30 feet of the night terror have disadvantage on saving\
    \ throws against being [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
    \ and [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] creatures in the\
    \ aura have disadvantage on saving throws against the night terror's spells and\
    \ effects. In addition, the night terror gains 5 temporary hit points at the start\
    \ of each of its turns for each creature within this aura that is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]].\
    \ 14 THE GRIFFON'S SADDLEBAG"
  "name": "Aura of Fear"
- "desc": "The night terror can move through other creatures and objects as if they\
    \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement (True Form Only)"
- "desc": "The night terror has advantage on saving throws against any effect that\
    \ turns undead."
  "name": "Turn Resistance"
"actions":
- "desc": "The night terror makes two attacks with its Nightmarish Touch. It can cast\
    \ a spell in place of one attack."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +7 to hit (with advantage if the target is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]),\
    \ reach 5 ft., one target. Hit: 9 (2d8) psychic damage plus 14 (4d6) necrotic\
    \ damage, and the target must make a DC 15 Constitution saving throw. On a failed\
    \ save, the target's hit point maximum is reduced by an amount equal to the necrotic\
    \ damage taken. This reduction lasts until the target finishes a long rest. The\
    \ target dies if this effect reduces its hit point maximum to 0."
  "name": "Nightmarish Touch"
- "desc": "Each creature within 60 feet of the night terror must succeed on a DC 15\
    \ Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ as it is flooded with horrific visions of its deepest fears. While [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ in this way, the creature's speed is reduced to 0, and it takes 11 (2d10) psychic\
    \ damage if it starts its turn within 30 feet of the night terror. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Torrent of Terror (Recharge 5-6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
