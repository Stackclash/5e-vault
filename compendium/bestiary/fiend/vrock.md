---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/large
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
name: Vrock
ac: 15
hp: 104
hit_dice: 11d10 + 44
cr: '6'
stats: [
  17,
  15,
  18,
  8,
  13,
  8
]
source: [
  MM,
  CoS,
  PotA,
  TftYP,
  WDMM,
  GoS,
  BGDIA,
  TCE,
  CM,
  CRCotN
]
aliases: ["Vrock"]
---
# Vrock
*Source: Monster Manual p. 64, Curse of Strahd, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Tasha's Cauldron of Everything, Candlekeep Mysteries, Critical Role: Call of the Netherdeep*  

```ad-statblock
title: Vrock
![](/compendium/bestiary/fiend/token/vrock.png#token)
*Large fiend(demon), Chaotic Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 11d10 + 44|text(104)` (11d10 + 44) 
- **Speed** walk 40 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|15 (+2)|18 (+4)| 8 (-1)|13 (+1)| 8 (-1)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +5, Wisdom +4, Charisma +2
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 11
- **Damage Resistances** cold; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, telepathy 120 ft.
- **Challenge** 6

## Traits

***Magic Resistance.*** The vrock has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The vrock makes two attacks: one with its beak and one with its talons.

***Beak.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3|avg` (`2d6 + 3`) piercing damage.

***Talons.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d10 + 3|avg` (`2d10 + 3`) slashing damage.

***Spores (Recharge 6).*** A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become [poisoned](compendium/rules/conditions.md#poisoned). While [poisoned](compendium/rules/conditions.md#poisoned) in this way, a target takes `dice: 1d10|avg` (`1d10`) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.

***Stunning Screech (1/Day).*** The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be [stunned](compendium/rules/conditions.md#stunned) until the end of the vrock's next turn.
```
^statblock