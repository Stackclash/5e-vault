---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: underdark
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\2
  - monster\Environment\Underdark
  - monster\Size\Tiny
  - monster\Type\Aberration
aliases:
  - Intellect Devourer
---
# [[5. Mechanics\Bestiary\Aberration\Intellect Devourer.md|Intellect Devourer]]
*Source: Monster Manual p. 191*

An intellect devourer resembles a walking brain protected by a crusty covering and set on bestial clawed legs. This foul aberration feeds on the intelligence of sentient creatures, taking over a victim's body on behalf of its mind flayer masters.

## Illithid Creations

Mind flayers breed intellect devourers to serve as roaming hunters of the Underdark, creating an intellect devourer by taking the brain of a thrall and subjecting it to a horrible ritual. As it sprouts legs, the brain becomes an intelligent predator as twisted and evil as its masters.

## Deadly Puppet Masters

An intellect devourer consumes a creature's mind and memories, then turns the host body into a puppet under its control. An intellect devourer typically uses its puppet host to lure others into the domain of the mind flayers to be enthralled or consumed.

> [!quote] A quote from Qorik el-Slurrk, mind flayer  
> 
> Don't cry. We have no intention of eating your brain. In fact, your brain is going on a wonderful journey!


```statblock
"name": "Intellect Devourer"
"size": "Tiny"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "10"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 12"
"languages": "understands Deep Speech but can't speak, telepathy 60 ft."
"cr": "2"
"traits":
- "desc": "The intellect devourer can sense the presence and location of any creature\
    \ within 300 feet of it that has an Intelligence of 3 or higher, regardless of\
    \ interposing barriers, unless the creature is protected by a [[5. Mechanics/Spells/Mind Blank.md|mind blank]]\
    \ spell."
  "name": "Detect Sentience"
"actions":
- "desc": "The intellect devourer makes one attack with its claws and uses Devour\
    \ Intellect."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Claws"
- "desc": "The intellect devourer targets one creature it can see within 10 feet of\
    \ it that has a brain. The target must succeed on a DC 12 Intelligence saving\
    \ throw against this magic or take 11 (2d10) psychic damage. Also on a failure,\
    \ roll 3d6: If the total equals or exceeds the target's Intelligence score, that\
    \ score is reduced to 0. The target is [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
    \ until it regains at least one point of Intelligence."
  "name": "Devour Intellect"
- "desc": "The intellect devourer initiates an Intelligence contest with an [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
    \ humanoid within 5 feet of it that isn't protected by [[5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and\
    \ good]]. If it wins the contest,\
    \ the intellect devourer magically consumes the target's brain, teleports into\
    \ the target's skull, and takes control of the target's body. While inside a creature,\
    \ the intellect devourer has total cover against attacks and other effects originating\
    \ outside its host. The intellect devourer retains its Intelligence, Wisdom, and\
    \ Charisma scores, as well as its understanding of Deep Speech, its telepathy,\
    \ and its traits. It otherwise adopts the target's statistics. It knows everything\
    \ the creature knew, including spells and languages.\n\nIf the host body dies,\
    \ the intellect devourer must leave it. A [[5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]]\
    \ spell cast on the body drives the intellect devourer out. The intellect devourer\
    \ is also forced out if the target regains its devoured brain by means of a [[5. Mechanics/Spells/Wish.md|wish]].\
    \ By spending 5 feet of its movement, the intellect devourer can voluntarily leave\
    \ the body, teleporting to the nearest unoccupied space within 5 feet of it. The\
    \ body then dies, unless its brain is restored within 1 round."
  "name": "Body Thief"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Aberration/token/intellect-devourer.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
