---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'desert, mountain, urban'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\1
  - monster\Environment\Desert
  - monster\Environment\Mountain
  - monster\Environment\Urban
  - monster\Size\Medium
  - monster\Type\Construct
aliases:
  - Stone Cursed
---
# [[5. Mechanics\Bestiary\Construct\Stone Cursed (MPMM).md|Stone Cursed]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 233, Mordenkainen's Tome of Foes p. 240*

Stone cursed are spawned through a foul alchemical ritual performed on a Humanoid that has been turned to stone. The ritual, which requires a mixture of basilisk blood and the ashes from the burned feathers of a cockatrice, awakens a dim echo of the [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]] victim's spirit, animating the statue and turning it into a useful guardian.

Stone cursed possess a malevolent drive to slay the living, yet they are utterly loyal to whoever performed the ritual to animate them, and they obey that being's orders to the best of their ability. In combat, stony claws that drip with thick, gray sludge emerge from a stone cursed's fingers. This alchemical sludge transforms those slashed by the claws into statues.

As part of the ritual used to create a stone cursed, a fist-sized obsidian skull forms within the creature's torso. The skull isn't visible while the stone cursed is active, but when it is slain, the statue shatters and the skull clatters to the ground. Because it is the nexus for the alchemy used to create these horrors, a faint echo of the original victim's memories resonates within the skull. A skilled magic-wielder can attempt to extract memories from it to gain insight into the victim's past or find lore that otherwise would be lost.

## Cryptic Whispers

Even though a creature transformed into a stone cursed is long dead, a vague whisper of their memories lives on in the obsidian skull embedded within the stone cursed's body. At the end of a short rest, a character can make a DC 20 Intelligence ([[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]) check to attempt to extract a memory from the skull that is a response to a verbal question posed to the skull by the character. Once this check is made, whether it succeeds or fails, the skull can't be used in this manner again.

```statblock
"name": "Stone Cursed (MPMM)"
"size": "Medium"
"type": "construct"
"alignment": "Typically  Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "16"
- !!int "5"
- !!int "14"
- !!int "5"
- !!int "8"
- !!int "7"
"speed": "10 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "passive Perception 9"
"languages": "the languages it knew in life"
"cr": "1"
"traits":
- "desc": "The stone cursed has advantage on the attack rolls of [[/5. Mechanics/Rules/Actions.md#Opportunity%20Attack|opportunity attacks]]."
  "name": "Cunning Opportunist"
- "desc": "If the stone cursed is motionless at the start of combat, it has advantage\
    \ on its initiative roll. Moreover, if a creature hasn't observed the stone cursed\
    \ move or act, that creature must succeed on a DC 18 Intelligence ([[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]])\
    \ check to discern that the stone cursed isn't a statue."
  "name": "False Appearance"
- "desc": "The stone cursed doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage. If the target is a creature, it must succeed on a DC 12\
    \ Constitution saving throw, or it begins to turn to stone and is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
    \ until the end of its next turn, when it must repeat the saving throw. The effect\
    \ ends if the second save is successful; otherwise the target is [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]]\
    \ for 24 hours."
  "name": "Petrifying Claws"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Construct/token/stone-cursed-mpmm.webp"
```
^statblock

## Environment

desert, mountain, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
