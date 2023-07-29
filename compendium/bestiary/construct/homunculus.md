---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
name: Homunculus
ac: 13
hp: 5
hit_dice: 2d4
cr: '0'
stats: [
  4,
  15,
  11,
  10,
  10,
  7
]
source: [
  MM,
  WDMM,
  BGDIA,
  ERLW,
  IMR,
  MOT,
  CM
]
aliases: ["Homunculus"]
---
# Homunculus
*Source: Monster Manual p. 188, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Mythic Odysseys of Theros, Candlekeep Mysteries*  

Shaping a mixture of clay, ash, mandrake root, and blood, one can channel rare ritual magic to create a faithful, squirrel-sized companion.

A homunculus is a construct that acts as an extension of its creator, with the two sharing thoughts, senses, and language through a mystical bond. A master can have only one homunculus at a time (attempts to create another one always fail), and when its master dies, the homunculus also dies.

## Shared Mind

A homunculus knows everything its creator knows, including all the languages the creator can speak and read. Likewise, everything the construct senses is known to its master, even over great distances, provided both are on the same plane. Functioning as a spy, a scout, an emissary, or a messenger, a homunculus is an invaluable servant for a spellcaster engaged in secret experimentation or adventuring.

## Stat Block

```ad-statblock
title: Homunculus
![](/compendium/bestiary/construct/token/homunculus.png#token)
*Tiny construct, Neutral*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 2d4|text(5)` (2d4) 
- **Speed** walk 20 ft., fly 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 4 (-3)|15 (+2)|11 (+0)|10 (+0)|10 (+0)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** poison
- **Condition Immunities** charmed, poisoned
- **Languages** understands the languages of its creator but can't speak
- **Challenge** 0

## Traits

***Telepathic Bond.*** While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute. If the saving throw fails by 5 or more, the target is instead [poisoned](compendium/rules/conditions.md#poisoned) for 5 (`dice: 1d10|avg` (`1d10`)) minutes and [unconscious](compendium/rules/conditions.md#unconscious) while [poisoned](compendium/rules/conditions.md#poisoned) in this way.
```
^statblock