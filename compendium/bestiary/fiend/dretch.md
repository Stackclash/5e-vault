---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/small
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
name: Dretch
ac: 11
hp: 18
hit_dice: 4d6 + 4
cr: 1/4
stats: [
  11,
  11,
  12,
  5,
  8,
  3
]
source: [
  MM,
  CoS,
  GoS,
  BGDIA,
  IMR,
  EGW,
  WBtW
]
aliases: ["Dretch"]
---
# Dretch
*Source: Monster Manual p. 57, Curse of Strahd, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, The Wild Beyond the Witchlight*  

```ad-statblock
title: Dretch
![](/compendium/bestiary/fiend/token/dretch.png#token)
*Small fiend(demon), Chaotic Evil*

- **Armor Class** 11 (natural armor)
- **Hit Points** `dice: 4d6 + 4|text(18)` (4d6 + 4) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|11 (+0)|12 (+1)| 5 (-3)| 8 (-1)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 9
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)
- **Challenge** 1/4

## Actions

***Multiattack.*** The dretch makes two attacks: one with its bite and one with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. Hit: `dice: 1d6|avg` (`1d6`) piercing damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. Hit: `dice: 2d4|avg` (`2d4`) slashing damage.

***Fetid Cloud (1/Day).*** A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be [poisoned](compendium/rules/conditions.md#poisoned) until the start of its next turn. While [poisoned](compendium/rules/conditions.md#poisoned) in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions.
```
^statblock