---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/hill
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/human
statblock: true
statblock-link: "#^statblock"
"name": "Luvash"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"senses": "passive Perception 10"
"languages": "any two languages"
"cr": "2"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Luvash makes three melee attacks: two with its scimitar and one with its\
    \ dagger. Or Luvash makes two ranged attacks with its daggers."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 3|avg (1d4 + 3) piercing\
    \ damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Luvash adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Luvash must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/luvash.png"
aliases: ["Luvash"]
---
# Luvash
*Source: Curse of Strahd p. 121, Derived from Bandit Captain (MM)*  

```ad-statblock
title: Luvash
![[/6. Mechanics/Bestiary/Npc/Token/luvash.png#token]]
*Medium humanoid(human), Chaotic Evil*

- **Armor Class** 15 ([[/6. Mechanics/Items/studded-leather-armor.md\|studded leather]])
- **Hit Points** `dice: 10d8 + 20|text(65)` (10d8 + 20) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|16 (+3)|14 (+2)|14 (+2)|11 (+0)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** Strength +4, Dexterity +5, Wisdom +2
- **Skills** Athletics +4, Deception +4
- **Senses** passive Perception 10
- **Languages** any two languages
- **Challenge** 2

## Actions

***Multiattack.*** Luvash makes three melee attacks: two with its scimitar and one with its dagger. Or Luvash makes two ranged attacks with its daggers.

***Scimitar.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3` (`1d6 + 3`) slashing damage.

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 3` (`1d4 + 3`) piercing damage.

## Reactions

***Parry.*** Luvash adds 2 to its AC against one melee attack that would hit it. To do so, Luvash must see the attacker and be wielding a melee weapon.
```
^statblock

## Environment

coastal, hill, arctic, urban, forest, desert