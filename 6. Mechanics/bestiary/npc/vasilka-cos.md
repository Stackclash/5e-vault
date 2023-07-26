---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
name: Vasilka
ac: 9
hp: 93
hit_dice: 11d8 + 44
cr: '5'
stats: [
  19,
  9,
  18,
  6,
  10,
  5
]
source: [
  CoS
]
aliases: ["Vasilka"]
---
*Source: Curse of Strahd p. 151, Derived from Flesh Golem (MM)*  

```ad-statblock
title: Vasilka
![[token/vasilka.png#token]]
*Medium construct, Neutral*

- **Armor Class** 9 
- **Hit Points** `dice: 11d8 + 44|text(93)` (11d8 + 44) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)| 9 (-1)|18 (+4)| 6 (-2)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** lightning; poison; bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** understands the languages of its creator but can't speak
- **Challenge** 5

## Traits

***Berserk.*** Whenever Vasilka starts its turn with 40 hit points or fewer, roll a `dice: d6|avg` (`d6`). On a 6, Vasilka goes berserk. On each of its turns while berserk, Vasilka attacks the nearest creature it can see. If no creature is near enough to move to and attack, Vasilka attacks an object, with preference for an object smaller than itself. Once Vasilka goes berserk, it continues to do so until it is destroyed or regains all its hit points.

Vasilka's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. Vasilka must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, Vasilka ceases being berserk. If it takes damage while still at 40 hit points or fewer, Vasilka might go berserk again.

***Aversion of Fire.*** If Vasilka takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.

***Immutable Form.*** Vasilka is immune to any spell or effect that would alter its form.

***Lightning Absorption.*** Whenever Vasilka is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt.

***Magic Resistance.*** Vasilka has advantage on saving throws against spells and other magical effects.

***Magic Weapons.*** Vasilka's weapon attacks are magical.

## Actions

***Multiattack.*** Vasilka makes two slam attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 4|avg` (`2d8 + 4`) bludgeoning damage.
```
^statblock