---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
name: Nothic
ac: 15
hp: 45
hit_dice: 6d8 + 18
cr: '2'
stats: [
  14,
  16,
  16,
  13,
  10,
  8
]
source: [
  MM,
  CoS,
  LMoP,
  PotA,
  ToA,
  WDMM,
  BGDIA,
  RMBRE,
  EGW,
  MOT,
  IDRotF,
  JttRC,
  KftGV
]
aliases: ["Nothic"]
---
# Nothic
*Source: Monster Manual p. 236, Curse of Strahd, Lost Mine of Phandelver, Princes of the Apocalypse, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, The Lost Dungeon of Rickedness: Big Rick Energy, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Journeys through the Radiant Citadel, Keys from the Golden Vault*  

A baleful eye peers out from the darkness, its gleam hinting at a weird intelligence and unnerving malevolence. Most times, a nothic is content to watch, weighing and assessing the creatures it encounters. When driven to violence, it uses its horrific gaze to rot the flesh from its enemies' bones.

## Cursed Arcanists

Rather than gaining the godlike supremacy they crave, some wizards who devote their lives to unearthing arcane secrets are reduced to creeping, tormented monsters by a dark curse left behind by Vecna, a powerful lich who, in some worlds, has transcended his undead existence to become a god of secrets. Nothics retain no awareness of their former selves, skulking amid the shadows and haunting places rich in magical knowledge, drawn by memories and impulses they can't quite understand.

## Dark Oracles

Nothics possess a strange magical insight that allows them to extract knowledge from other creatures. This grants them unique understanding of secret and forbidden lore, which they share for a price. A nothic covets magic items, greedily accepting such gifts from creatures that seek out its knowledge.

### Lurkers in Magical Places

Nothics are notorious for infiltrating arcane academies and other places rich in magical learning. They are driven by the vague knowledge that there exists a method to reverse their condition. This isn't a clear sense of purpose, but rather an obsessive tug at the end of the mind. Some nothics are clever enough to realize that this is merely part of the strange lesson for their folly, a false hope to drive them to seek out more arcane secrets.

## Stat Block

```ad-statblock
title: Nothic
![](/compendium/bestiary/aberration/token/nothic.png#token)
*Medium aberration, Neutral Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 6d8 + 18|text(45)` (6d8 + 18) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|16 (+3)|16 (+3)|13 (+1)|10 (+0)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Arcana +3, Insight +4, Perception +2, Stealth +5
- **Senses** truesight 120 ft., passive Perception 12
- **Languages** Undercommon
- **Challenge** 2

## Traits

***Keen Sight.*** The nothic has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight.

## Actions

***Multiattack.*** The nothic makes two claw attacks.

***Claw.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3|avg` (`1d6 + 3`) slashing damage.

***Rotting Gaze.*** The nothic targets one creature it can see within 30 feet of it. The target must succeed on a DC 12 Constitution saving throw against this magic or take `dice: 3d6|avg` (`3d6`) necrotic damage.

***Weird Insight.*** The nothic targets one creature it can see within 30 feet of it. The target must contest its Charisma (Deception) check against the nothic's Wisdom (Insight) check. If the nothic wins, it magically learns one fact or secret about the target. The target automatically wins if it is immune to being [charmed](compendium/rules/conditions.md#charmed).
```
^statblock

## Environment

underdark