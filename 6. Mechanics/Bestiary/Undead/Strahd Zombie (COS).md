---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
"name": "Strahd Zombie"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "13"
- !!int "6"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 20 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands the languages it knew in life but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Whenever the zombie takes at least 5 bludgeoning or slashing damage at\
    \ one time, roll a dice: d20|avg (d20) to determine what else happens to it:\n\
    \n1–8: One leg is severed from the zombie if it has any legs left.\n\n9–16: One\
    \ arm is severed from the zombie if it has any arms left.\n\n17–20: The zombie\
    \ is decapitated.\n\nIf the zombie is reduced to 0 hit points, all parts of it\
    \ die. Until then, a severed part acts on the zombie's initiative and has its\
    \ own action and movement. A severed part has AC 8. Any damage it takes is subtracted\
    \ from the zombie's hit points.\n\nA severed leg is unable to attack and has a\
    \ speed of 5 feet.\n\nA severed arm has a speed of 5 feet and can make one claw\
    \ attack on its turn, with disadvantage on the attack roll. Each time the zombie\
    \ loses an arm, it loses a claw attack.\n\nIf its head is severed, the zombie\
    \ loses its bite attack and its body is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]]\
    \ unless the head can see it. The severed head has a speed of 0 feet. It can make\
    \ a bite attack, but only against a target in its space.\n\nThe zombie's speed\
    \ is halved if it's missing a leg. If it loses both legs, it falls [[6. Mechanics/Rules/conditions.md#prone\|prone]].\
    \ If it has both arms, it can crawl. With only one arm, it can still crawl, but\
    \ its speed is halved. With no arms or legs, its speed is 0 feet, and it can't\
    \ benefit from bonuses to speed."
  "name": "Loathsome Limbs"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The zombie makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 1|avg (1d4 + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) slashing damage."
  "name": "Claw"
"source":
- "CoS"
"image": "/compendium/bestiary/undead/token/strahd-zombie.png"
aliases: ["Strahd Zombie"]
---
# Strahd Zombie
*Source: Curse of Strahd p. 241*  

Strahd zombies are undead that serve the vampire Strahd von Zarovich. Created from the long-dead guards of Castle Ravenloft, they were called into being through dark magic by Strahd himself.

## Loathsome Limbs

A Strahd zombie's gray-green flesh looks soft, and its bones seem brittle. Any good hit from a bludgeoning or slashing weapon severs part of the zombie's body. Strahd zombies are suffused with horrible necromantic magic that allows their severed body parts to continue to attack. All parts of a Strahd zombie are considered one and the same creature, so damage to any part damages the whole creature.

## Undead Nature

A Strahd zombie doesn't require air or sleep.

## Stat Block

```ad-statblock
title: Strahd Zombie
![[/6. Mechanics/Bestiary/Undead/Token/strahd-zombie.png#token]]
*Medium undead, Unaligned*

- **Armor Class** 8 
- **Hit Points** `dice: 4d8 + 12|text(30)` (4d8 + 12) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)| 6 (-2)|16 (+3)| 3 (-4)| 6 (-2)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom 0
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 8
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** understands the languages it knew in life but can't speak
- **Challenge** 1

## Traits

***Loathsome Limbs.*** Whenever the zombie takes at least 5 bludgeoning or slashing damage at one time, roll a `dice: d20` (`d20`) to determine what else happens to it:

1–8: One leg is severed from the zombie if it has any legs left.

9–16: One arm is severed from the zombie if it has any arms left.

17–20: The zombie is decapitated.

If the zombie is reduced to 0 hit points, all parts of it die. Until then, a severed part acts on the zombie's initiative and has its own action and movement. A severed part has AC 8. Any damage it takes is subtracted from the zombie's hit points.

A severed leg is unable to attack and has a speed of 5 feet.

A severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll. Each time the zombie loses an arm, it loses a claw attack.

If its head is severed, the zombie loses its bite attack and its body is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] unless the head can see it. The severed head has a speed of 0 feet. It can make a bite attack, but only against a target in its space.

The zombie's speed is halved if it's missing a leg. If it loses both legs, it falls [[6. Mechanics/Rules/conditions.md#prone\|prone]]. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0 feet, and it can't benefit from bonuses to speed.

## Actions

***Multiattack.*** The zombie makes three attacks: one with its bite and two with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 1` (`1d4 + 1`) piercing damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 1` (`1d6 + 1`) slashing damage.
```
^statblock