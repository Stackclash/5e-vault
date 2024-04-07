---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/5
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/ooze
statblock: inline
aliases:
  - Adult Oblex
---
# [[5. Mechanics/Bestiary/Ooze/Adult Oblex.md|Adult Oblex]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 198, Mordenkainen's Tome of Foes p. 218*

Older oblexes, called adults and elders, have eaten so many memories that they can form duplicates of the creatures they have devoured from the substance of their bodies, sending these copies off to lure prey into their clutches while remaining tethered to the slime by long tendrils of goo. These duplicated creatures are indistinguishable from their victims except for a faint sulfurous smell. Oblexes use these duplicates to lead prey into danger or to infiltrate settlements so they can feed on superior victims.

## Oblexes

> [!quote]- A quote from Mordenkainen  
> 
> Mind flayers unleash all manner of foul experiments upon the planes with little thought for the consequences. Here, though, I suspect another influence: Juiblex.

> [!quote]- A quote from Mordenkainen  
> 
> An oblex wants memories, but not to serve any end of its own making. Oblexes are hungry for memories and personalities because they are empty without such nourishment. In this way they serve their creators, the illithids. An oblex in the range of an elder brain's powers provides everything necessary for the mind flayers to find choice victims.

By experimenting on the slimes, jellies, and puddings that infest the depths of the Underdark, mind flayers created a special breed of Ooze, the oblex—a slime capable of assaulting the minds of other creatures. These pools of jelly are cunning hunters that feed on thoughts and memories. The sharper the mind, the better the meal, so oblexes hunt targets more likely to be intelligent, such as wizards and other spellcasters. When suitable fare comes within reach, an oblex draws its body up to engulf its victim. As it withdraws, it plunders the creature's mind, leaving its prey befuddled and confused—or dead.

When oblexes feed on thoughts, they can form weird copies of their prey to use as lures, which helps them harvest even more victims for their mind flayer masters.

```statblock
"name": "Adult Oblex"
"size": "Medium"
"type": "ooze"
"alignment": "Typically  Lawful Evil"
"ac": !!int "14"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "8"
- !!int "19"
- !!int "16"
- !!int "19"
- !!int "12"
- !!int "15"
"speed": "20 ft."
"saves":
  "Charisma": !!int "5"
  "Intelligence": !!int "7"
"skillsaves":
  "Nature": !!int "7"
  "Deception": !!int "5"
  "Religion": !!int "7"
  "Perception": !!int "4"
  "History": !!int "7"
  "Arcana": !!int "7"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#prone|prone]]"
"senses": "blindsight 60 ft. (blind beyond this distance), passive Perception 14"
"languages": "Common plus two more languages"
"cr": "5"
"traits":
- "desc": "The oblex casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\n3/day\
    \ each: [[5. Mechanics/Spells/Charm Person.md|charm person]] (as 5th-level spell),\
    \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Hypnotic Pattern.md|hypnotic pattern]]"
  "name": "spells"
- "desc": "The oblex can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "If the oblex takes fire damage, it has disadvantage on attack rolls and\
    \ ability checks until the end of its next turn."
  "name": "Aversion to Fire"
- "desc": "The oblex doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The oblex makes two pseudopod attacks, and it uses Eat Memories."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) bludgeoning damage plus dice:2d6|text(7)\
    \ (2d6) psychic damage."
  "name": "Pseudopod"
- "desc": "The oblex targets one creature it can see within 5 feet of it. The target\
    \ must succeed on a DC 15 Wisdom saving throw or take dice:4d8|text(18) (4d8)\
    \ psychic damage and become memory drained until it finishes a short or long rest\
    \ or until it benefits from the [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
    \ or [[5. Mechanics/Spells/Heal.md|heal]] spell. Constructs, Oozes, Plants, and Undead\
    \ succeed on the save automatically.\n\nWhile memory drained, the target must\
    \ roll a dice: d4|avg|noform (d4) and subtract the number rolled from its\
    \ ability checks and attack rolls. Each time the target is memory drained beyond\
    \ the first, the die size increases by one: the dice: d4|avg|noform (d4) becomes\
    \ a dice: d6|avg|noform (d6), the dice: d6|avg|noform (d6) becomes a dice:\
    \ d8|avg|noform (d8), and so on until the die becomes a dice: d20|avg|noform\
    \ (d20), at which point the target becomes [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]\
    \ for 1 hour. The effect then ends.\n\nThe oblex learns all the languages a memory-drained\
    \ target knows and gains all its skill proficiencies."
  "name": "Eat Memories"
"bonus_actions":
- "desc": "The oblex extrudes a piece of itself that assumes the appearance of one\
    \ Medium or smaller creature whose memories it has stolen. This simulacrum appears,\
    \ feels, and sounds exactly like the creature it impersonates, though it smells\
    \ faintly of sulfur. The oblex can impersonate dice: 1d4 + 1|avg|noform (1d4\
    \ + 1) different creatures, each one tethered to its body by a strand of slime\
    \ that can extend up to 120 feet away. The simulacrum is an extension of the oblex,\
    \ meaning that the oblex occupies its space and the simulacrum's space simultaneously.\
    \ The tether is immune to damage, but it is severed if there is no opening at\
    \ least 1 inch wide between the oblex and the simulacrum. The simulacrum disappears\
    \ if the tether is severed."
  "name": "Sulfurous Impersonation"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Ooze/token/adult-oblex-mpmm.webp"
```
^statblock

## Environment

swamp, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
