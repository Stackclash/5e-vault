---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
"name": "Elise"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "9"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_immunities": "cold; lightning; poison; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Elise is immune to any spell or effect that would alter her form."
  "name": "Immutable Form"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Whenever Elise is subjected to lightning damage, she takes no damage and\
    \ instead regains a number of hit points equal to the lightning damage dealt."
  "name": "Lightning Absorption"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Elise has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Elise's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Elise makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "VRGR"
"image": "/compendium/bestiary/npc/token/elise.png"
aliases: ["Elise"]
---
# Elise
*Source: Van Richten's Guide to Ravenloft p. 143*  

Dr. Mordenheim's supposed beloved and greatest achievement, Elise is a confused, frustrated soul who never wished for her current circumstances.

Elise's heart has been replaced with the Unbreakable Heart. If this device is removed, Elise dies, even if it is replaced with another heart. Elise is horrified by what Dr. Mordenheim did to her and tries to avoid the doctor and all strangers, fearing they might kill her to learn the Unbreakable Heart's secrets. She roams without destination but keeps a hidden sanctuary at Hope's Heart on the Isles of Agony. Although she has tried to leave Lamordia, the Mists prevent her from doing so.

```ad-statblock
title: Elise
![[/6. Mechanics/Bestiary/Npc/Token/elise.png#token]]
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
- **Damage Immunities** cold; lightning; poison; bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** understands the languages of its creator but can't speak
- **Challenge** 5

## Traits

***Immutable Form.*** Elise is immune to any spell or effect that would alter her form.

***Lightning Absorption.*** Whenever Elise is subjected to lightning damage, she takes no damage and instead regains a number of hit points equal to the lightning damage dealt.

***Magic Resistance.*** Elise has advantage on saving throws against spells and other magical effects.

***Magic Weapons.*** Elise's weapon attacks are magical.

## Actions

***Multiattack.*** Elise makes two slam attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 4` (`2d8 + 4`) bludgeoning damage.
```
^statblock