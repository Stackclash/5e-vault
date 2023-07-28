---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/large
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
name: Iron Golem
ac: 20
hp: 210
hit_dice: 20d10 + 100
cr: '16'
stats: [
  24,
  9,
  20,
  3,
  11,
  1
]
source: [
  MM,
  CoS,
  SKT,
  WDMM,
  GoS,
  EGW,
  MOT,
  IDRotF
]
aliases: ["Iron Golem"]
---
# Iron Golem
*Source: Monster Manual p. 170, Curse of Strahd, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden*  

```ad-statblock
title: Iron Golem
![](/compendium/bestiary/construct/token/iron-golem.png#token)
*Large construct, Unaligned*

- **Armor Class** 20 (natural armor)
- **Hit Points** `dice: 20d10 + 100|text(210)` (20d10 + 100) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)| 9 (-1)|20 (+5)| 3 (-4)|11 (+0)| 1 (-5)|

- **Proficiency Bonus** +5
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 10
- **Damage Immunities** fire; poison; psychic; bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** understands the languages of its creator but can't speak
- **Challenge** 16

## Traits

***Fire Absorption.*** Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt.

***Immutable Form.*** The golem is immune to any spell or effect that would alter its form.

***Magic Resistance.*** The golem has advantage on saving throws against spells and other magical effects.

***Magic Weapons.*** The golem's weapon attacks are magical.

## Actions

***Multiattack.*** The golem makes two melee attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 5 ft., one target. Hit: `dice: 3d8 + 7|avg` (`3d8 + 7`) bludgeoning damage.

***Sword.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 10 ft., one target. Hit: `dice: 3d10 + 7|avg` (`3d10 + 7`) slashing damage.

***Poison Breath (Recharge 5-6).*** The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (`dice: 10d8|avg` (`10d8`)) poison damage on a failed save, or half as much damage on a successful one.
```
^statblock