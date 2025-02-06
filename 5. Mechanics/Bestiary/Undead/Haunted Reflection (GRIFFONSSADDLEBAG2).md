---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG2)
  - monster\Cr\3
  - monster\Size\Medium
  - monster\Type\Undead
aliases:
  - Haunted Reflection
---
# [[5. Mechanics\Bestiary\Undead\Haunted Reflection (GRIFFONSSADDLEBAG2).md|Haunted Reflection]]
*Source: The Griffon's Saddlebag, Book 2 p. 356*

When an eminently-wrathful soul is murdered within view of a mirror, it can sometimes become trapped within. This haunted reflection can only interact with the material plane in a very limited fashion, but is dangerous nonetheless. With concentrated rage as it's weapon, it hunts those that it deems undeserving of life, that still possess the joy it no longer can. Those who wish to confront a reflection should be especially wary of using magic against it, lest they find themselves suffering from the rebounded spell. They should also take care to destroy other reflective surfaces nearby, lest it escape.

## Undead Nature

A haunted reflection doesn't require air, food, drink, or sleep.

```statblock
"name": "Haunted Reflection (GRIFFONSSADDLEBAG2)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "2"
- !!int "3"
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "16"
"speed": "0 ft., fly 20 ft. (hover)"
"saves":
  "Constitution": !!int "5"
"skillsaves":
  "Deception": !!int "5"
  "Perception": !!int "4"
"damage_immunities": "poison, radiant"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "understands any languages it knew in life but can't speak"
"cr": "3"
"traits":
- "desc": "The reflection can magically communicate simple ideas, emotions, and images\
    \ telepathically with any creature within 100 feet of it that can understand a\
    \ language."
  "name": "Limited Telepathy"
- "desc": "If damage reduces the reflection to 0 hit points, it can make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is thunder\
    \ or from a critical hit. The reflection automatically fails this saving throw\
    \ if there are no other reflective surfaces within 60 feet of it. On a success,\
    \ the reflection regains 10 hit points and uses its Mirror Step (no action required)\
    \ as the previous reflective surface that contained it is destroyed."
  "name": "Death Shift"
- "desc": "When a creature that can see the reflection starts its turn within 60 feet\
    \ of the reflection, the reflection can force the creature to make a DC 13 Wisdom\
    \ saving throw if the reflection isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]].\
    \ A target automatically succeeds on this saving throw if it can't be [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]].\
    \ On a failed save, the creature has disadvantage on ability checks and its speed\
    \ is halved until the start of its next turn.\n\nUnless [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]],\
    \ a creature can avert its eyes to avoid the saving throw at the start of its\
    \ turn. If the creature does so, it can't see the reflection until the start of\
    \ its next turn, when it can avert its eyes again. If the creature looks at the\
    \ reflection in the meantime, it must immediately make the save."
  "name": "Unsettling Glare"
"actions":
- "desc": "The reflection focuses a wave of psychic fury at one creature it can see\
    \ within 120 feet of it. The target must make a DC 13 Wisdom saving throw, taking\
    \ 18 (4d8) psychic damage on a failed save, or half as much damage on a successful\
    \ one. A creature that has averted its eyes from the reflection has advantage\
    \ on this saving throw, and takes no damage if it succeeds on the save."
  "name": "Concentrated Ire"
- "desc": "The reflection teleports into another nonmagical, metallic reflective surface\
    \ of its choice that it can see within 60 feet of it."
  "name": "Mirror Step"
"reactions":
- "desc": "When the reflection is the only target of a spell or other magical effect\
    \ that misses it or whose saving throw it succeeds, the reflection reflects the\
    \ spell or effect back at its source. The source must be within 120 feet of the\
    \ reflection or this effect fails. The reflection uses the spell save DC, attack\
    \ bonus, and spellcasting ability of the original source."
  "name": "Magic Reflection"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
