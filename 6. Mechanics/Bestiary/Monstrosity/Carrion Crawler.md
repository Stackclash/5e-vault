---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Carrion Crawler
ac: 13
hp: 51
hit_dice: 6d10 + 18
cr: '2'
stats: [
  14,
  13,
  16,
  1,
  12,
  5
]
source: [
  MM,
  TftYP,
  ToA,
  WDH,
  WDMM,
  DIP,
  BGDIA,
  IDRotF
]
aliases: ["Carrion Crawler"]
---
# Carrion Crawler
*Source: Monster Manual p. 37, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden*  

Carrion crawlers scour putrid flesh from carcasses and gobble the slimy bones that remain. They aggressively attack any creature that trespasses on their territory or disturbs their feasting.

## Carrion Eaters

A carrion crawler follows the scent of death to its food, but it prefers not to compete with other scavengers. These foul creatures thus hunker down in territories where death is plentiful and other carrion eaters have limited mobility. Caves, sewers, dungeons, and forested marshes are their favored lairs, but carrion crawlers are also drawn to battlefields and cemeteries. A carrion crawler roams on the hunt, its tentacles probing the air for the scent of blood or decay. In tunnels or ruins, carrion crawlers scurry across the ceiling as they move toward food. In this way, they avoid contact with oozes, otyughs, and other dangerous inhabitants of the darkness, even as they surprise potential meals that don't think to look up.

## Patient Predators

Whether in subterranean darkness or while hunting at night, light signals a potential meal. A carrion crawler might follow a light source from a distance for hours, hoping to pick up the scent of blood. Despite their great size, carrion crawlers can also easily set up ambushes by waiting around blind corners for prey to come to them. When facing potential prey or intruders, a carrion crawler lets its poison do the work. Once a victim goes rigid with paralysis, the carrion crawler wraps it with its tentacles and drags it away to a high ledge or isolated passageway, where it can be killed safely. The monster then resumes patrolling its territory while waiting for its meal to ripen.

## Stat Block

```ad-statblock
title: Carrion Crawler
![[/6. Mechanics/Bestiary/Monstrosity/Token/carrion-crawler.png#token]]
*Large monstrosity, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 6d10 + 18|text(51)` (6d10 + 18) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|13 (+1)|16 (+3)| 1 (-5)|12 (+1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** darkvision 60 ft., passive Perception 13
- **Languages** —
- **Challenge** 2

## Traits

***Keen Smell.*** The carrion crawler has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on smell.

***Spider Climb.*** The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

## Actions

***Multiattack.*** The carrion crawler makes two attacks: one with its tentacles and one with its bite.

***Tentacles.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 10 ft., one creature. Hit: `dice: 1d4 + 2\|avg` (`1d4 + 2`) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] for 1 minute. Until this poison ends, the target is [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]]. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success.

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 2\|avg` (`2d4 + 2`) piercing damage.
```
^statblock

## Environment

underdark