---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
name: Stone Cursed
ac: 17
hp: 19
hit_dice: 3d8 + 6
cr: '1'
stats: [
  16,
  5,
  14,
  5,
  8,
  7
]
source: [
  MPMM,
  MTF
]
aliases: ["Stone Cursed"]
---
# Stone Cursed
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 233, Mordenkainen's Tome of Foes p. 240*  

Stone cursed are spawned through a foul alchemical ritual performed on a Humanoid that has been turned to stone. The ritual, which requires a mixture of basilisk blood and the ashes from the burned feathers of a cockatrice, awakens a dim echo of the [petrified](compendium/rules/conditions.md#petrified) victim's spirit, animating the statue and turning it into a useful guardian.

Stone cursed possess a malevolent drive to slay the living, yet they are utterly loyal to whoever performed the ritual to animate them, and they obey that being's orders to the best of their ability. In combat, stony claws that drip with thick, gray sludge emerge from a stone cursed's fingers. This alchemical sludge transforms those slashed by the claws into statues.

As part of the ritual used to create a stone cursed, a fist-sized obsidian skull forms within the creature's torso. The skull isn't visible while the stone cursed is active, but when it is slain, the statue shatters and the skull clatters to the ground. Because it is the nexus for the alchemy used to create these horrors, a faint echo of the original victim's memories resonates within the skull. A skilled magic-wielder can attempt to extract memories from it to gain insight into the victim's past or find lore that otherwise would be lost.

## Cryptic Whispers

Even though a creature transformed into a stone cursed is long dead, a vague whisper of their memories lives on in the obsidian skull embedded within the stone cursed's body. At the end of a short rest, a character can make a DC 20 Intelligence ([Arcana](compendium/rules/skills.md#Arcana)) check to attempt to extract a memory from the skull that is a response to a verbal question posed to the skull by the character. Once this check is made, whether it succeeds or fails, the skull can't be used in this manner again.

## Stat Block

```ad-statblock
title: Stone Cursed
![](/compendium/bestiary/construct/token/stone-cursed.png#token)
*Medium construct, Lawful Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 3d8 + 6|text(19)` (3d8 + 6) 
- **Speed** walk 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)| 5 (-3)|14 (+2)| 5 (-3)| 8 (-1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 9
- **Damage Vulnerabilities** bludgeoning
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, frightened, petrified, poisoned
- **Languages** the languages it knew in life
- **Challenge** 1

## Traits

***Cunning Opportunist.*** The stone cursed has advantage on the attack rolls of opportunity attack||opportunity attacks.

***False Appearance.*** If the stone cursed is motionless at the start of combat, it has advantage on its initiative roll. Moreover, if a creature hasn't observed the stone cursed move or act, that creature must succeed on a DC 18 Intelligence ([Investigation](compendium/rules/skills.md#Investigation)) check to discern that the stone cursed isn't a statue.

***Unusual Nature.*** The stone cursed doesn't require air, food, drink, or sleep.

## Actions

***Petrifying Claws.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 3|avg` (`2d8 + 3`) slashing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw, or it begins to turn to stone and is [restrained](compendium/rules/conditions.md#restrained) until the end of its next turn, when it must repeat the saving throw. The effect ends if the second save is successful; otherwise the target is [petrified](compendium/rules/conditions.md#petrified) for 24 hours.
```
^statblock

## Environment

desert, mountain, urban