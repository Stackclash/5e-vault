---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
name: Podling
ac: 10
hp: 26
hit_dice: 4d8 + 8
cr: 1/2
stats: [
  15,
  11,
  14,
  10,
  10,
  10
]
source: [
  VRGR
]
aliases: ["Podling"]
---
# Podling
*Source: Van Richten's Guide to Ravenloft p. 227*  

Bodytaker plants either capture unsuspecting victims with their vines or accept captives brought to them by their podling servants. In either case, they drag creatures into their central pod, where potent chemicals render the captive comatose. Over the course of hours, the creature is dissolved and its body repurposed into a podling duplicate.

Podlings are near-perfect mimics of the creatures they replace. Despite having the knowledge of those they mimic, podlings frequently miss the nuances of interactions between sapient beings. These duplicates make excuses about their odd behavior, but those familiar with an individual replaced by a podling can often tell something's amiss. Roll on the Podling Behavior table to see what unusual habits a podling might demonstrate.

**Podling Behavior**

| dice: d6 | Behavior |
|----------|----------|
| 1 | The podling abandons the habits and hobbies of the creature it's mimicking. |
| 2 | The podling lavishes affection on plants and views houseplants with excessive sympathy. |
| 3 | The podling relishes exposing its skin to the sun. It resents clothing and hair. |
| 4 | The podling often reacts as if some unseen force is speaking to it, staring into the distance or nodding. |
| 5 | The podling often communicates to other podlings using Deep Speech. |
| 6 | The podling no longer understands the nuances of a relationship, system, or instrument. |
^podling-behavior

```ad-statblock
title: Podling
![[/6. Mechanics/Bestiary/Plant/Token/podling.png#token]]
*Medium plant, Unaligned*

- **Armor Class** 10 
- **Hit Points** `dice: 4d8 + 8|text(26)` (4d8 + 8) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|11 (+0)|14 (+2)|10 (+0)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 30 ft., passive Perception 10
- **Condition Immunities** charmed, frightened
- **Languages** Deep Speech, the languages the creature knew in life
- **Challenge** 1/2

## Traits

***Semblance of Life.*** The podling is a physical copy of a creature digested by a bodytaker plant. The podling has the digested creature's memories and behaves like that creature, but with occasional lapses. An observer familiar with the digested creature can recognize the discrepancies with a successful DC 20 Wisdom (Insight) check, or automatically if the podling does something in direct contradiction to the digested creature's established beliefs or behavior. The podling melts into a slurry when it dies, when the bodytaker plant that created it dies, or when the bodytaker plant dismisses it (no action required).

***Unusual Nature.*** The podling doesn't require sleep.

## Actions

***Slam.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2\|avg` (`1d6 + 2`) bludgeoning damage.
```
^statblock