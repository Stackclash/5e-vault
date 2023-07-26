---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Death Dog
ac: 12
hp: 39
hit_dice: 6d8 + 12
cr: '1'
stats: [
  15,
  14,
  14,
  3,
  13,
  6
]
source: [
  MM,
  SKT,
  WDH,
  WDMM,
  MOT,
  LoX
]
aliases: ["Death Dog"]
---
*Source: Monster Manual p. 321, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Mythic Odysseys of Theros, Light of Xaryxis*  

A death dog is an ugly two-headed hound that roams plains, deserts, and the Underdark. Hate burns in a death dog's heart, and a taste for humanoid flesh drives it to attack travelers and explorers. Death dog saliva carries a foul disease that causes a victim's flesh to slowly rot off the bone.

```ad-statblock
title: Death Dog
![[token/death-dog.png#token]]
*Medium monstrosity, Neutral Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 6d8 + 12|text(39)` (6d8 + 12) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|14 (+2)|14 (+2)| 3 (-4)|13 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +5, Stealth +4
- **Senses** darkvision 120 ft., passive Perception 15
- **Languages** —
- **Challenge** 1

## Traits

***Two-Headed.*** The dog has advantage on Wisdom ([Perception](/6. Mechanics/rules/skills.md#Perception)) checks and on saving throws against being [blinded](/6. Mechanics/rules/conditions.md#blinded), [charmed](/6. Mechanics/rules/conditions.md#charmed), [deafened](/6. Mechanics/rules/conditions.md#deafened), [frightened](/6. Mechanics/rules/conditions.md#frightened), [stunned](/6. Mechanics/rules/conditions.md#stunned), or knocked [unconscious](/6. Mechanics/rules/conditions.md#unconscious).

## Actions

***Multiattack.*** The dog makes two bite attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become [poisoned](/6. Mechanics/rules/conditions.md#poisoned) until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (`dice: 1d10|avg` (`1d10`)) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.
```
^statblock

## Environment

desert