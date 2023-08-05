---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/human
statblock: true
statblock-link: "#^statblock"
"name": "Parriwimple"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "14"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "6"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "10"
"senses": "passive Perception 11"
"languages": "any one language (usually Common)"
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Parriwimple has advantage on saving throws against being [frightened](compendium/rules/conditions.md#frightened)."
  "name": "Brave"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A melee weapon deals one extra die of its damage when Parriwimple hits\
    \ with it (included in the attack)."
  "name": "Brute"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Parriwimple makes three melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft.\
    \ and range 20/60 ft., one target. Hit: dice: 2d6 + 4|avg (2d6 + 4) piercing\
    \ damage, or 13 (dice: 2d8 + 4|avg (2d8 + 4)) piercing damage if used with\
    \ two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d4 + 4|avg (2d4 + 4) bludgeoning damage. If the target is a\
    \ Medium or smaller creature, it must succeed on a DC 15 Strength saving throw\
    \ or be knocked [prone](compendium/rules/conditions.md#prone)."
  "name": "Shield Bash"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Parriwimple adds 3 to its AC against one melee attack that would hit it.\
    \ To do so, Parriwimple must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/parriwimple.png"
aliases: ["Parriwimple"]
---
# Parriwimple
*Source: Curse of Strahd p. 43, Derived from Gladiator (MM)*  

```ad-statblock
title: Parriwimple
![](/compendium/bestiary/npc/token/parriwimple.png#token)
*Medium humanoid(human), Lawful Good*

- **Armor Class** 14 ([studded leather](/compendium/items/studded-leather-armor.md))
- **Hit Points** `dice: 15d8 + 45|text(112)` (15d8 + 45) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|15 (+2)|16 (+3)| 6 (-2)|12 (+1)|15 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** Strength +7, Dexterity +5, Constitution +6
- **Skills** Athletics +10, Intimidation +5
- **Senses** passive Perception 11
- **Languages** any one language (usually Common)
- **Challenge** 5

## Traits

***Brave.*** Parriwimple has advantage on saving throws against being [frightened](compendium/rules/conditions.md#frightened).

***Brute.*** A melee weapon deals one extra die of its damage when Parriwimple hits with it (included in the attack).

## Actions

***Multiattack.*** Parriwimple makes three melee attacks or two ranged attacks.

***Spear.*** *Melee or Ranged Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft. and range 20/60 ft., one target. Hit: `dice: 2d6 + 4|avg` (`2d6 + 4`) piercing damage, or 13 (`dice: 2d8 + 4|avg` (`2d8 + 4`)) piercing damage if used with two hands to make a melee attack.

***Shield Bash.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one creature. Hit: `dice: 2d4 + 4|avg` (`2d4 + 4`) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).

## Reactions

***Parry.*** Parriwimple adds 3 to its AC against one melee attack that would hit it. To do so, Parriwimple must see the attacker and be wielding a melee weapon.
```
^statblock

## Environment

urban