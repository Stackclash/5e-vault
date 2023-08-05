---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
"name": "Bulezau"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "15"
- !!int "14"
- !!int "17"
- !!int "8"
- !!int "9"
- !!int "6"
"speed": "walk 40 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 9"
"languages": "Abyssal, telepathy 60 ft."
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When any creature that isn't a demon starts its turn within 30 feet of\
    \ the bulezau, that creature must succeed on a DC 13 Constitution saving throw\
    \ or take dice: 1d6|avg (1d6) necrotic damage."
  "name": "Rotting Presence"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bulezau's long jump is up to 20 feet and its high jump is up to 10\
    \ feet, with or without a running start."
  "name": "Standing Leap"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bulezau has advantage on Strength and Dexterity saving throws made\
    \ against effects that would knock it [prone](compendium/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d12 + 2|avg (1d12 + 2) piercing damage plus dice: 1d8|avg\
    \ (1d8) necrotic damage. If the target is a creature, it must succeed on a DC\
    \ 13 Constitution saving throw against disease or become [poisoned](compendium/rules/conditions.md#poisoned)\
    \ until the disease ends. While [poisoned](compendium/rules/conditions.md#poisoned)\
    \ in this way, the target sports festering boils, coughs up flies, and sheds rotting\
    \ skin, and the target must repeat the saving throw after every 24 hours that\
    \ elapse. On a successful save, the disease ends. On a failed save, the target's\
    \ hit point maximum is reduced by 4 (dice: 1d8|avg (1d8)). The target dies\
    \ if its hit point maximum is reduced to 0."
  "name": "Barbed Tail"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/fiend/token/bulezau.png"
aliases: ["Bulezau"]
---
# Bulezau
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 67, Mordenkainen's Tome of Foes p. 131*  

> [!quote]- A quote from Tasha  
> 
> Some ask why the bulezau, for all its rage and violence, has the head of a goat. I always respond, have you met a goat? They're stubborn, they're vicious, and they rarely go down without bashing you several times in the shins.
> 
> You might say, that's awfully specific. I say, don't pry.

Diseased manifestations of animalistic rage, bulezaus embody the violence of nature. Across the Abyss, these demons lurk in deep canyons and lofty crags, and many find a place in the ranks of demon lords' armies, serving as foot soldiers in the Abyss's endless warring.

Bulezaus crave violence. Their eagerness to kill and willingness to die make them common members of many demon lords' entourages. When not being corralled by larger and tougher demons, bulezaus gather into scrabbling mobs, wrestling and fighting among themselves until a better target comes along or until a stronger demon bullies them into subservience.

Disfiguring ailments plague bulezaus: crusted eyes, maggots wriggling in open sores, and a reek of rotten meat that follows them wherever they go.

```ad-statblock
title: Bulezau
![](/compendium/bestiary/fiend/token/bulezau.png#token)
*Medium fiend(demon), Chaotic Evil*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 7d8 + 21|text(52)` (7d8 + 21) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|14 (+2)|17 (+3)| 8 (-1)| 9 (-1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 9
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison
- **Condition Immunities** charmed, frightened, poisoned
- **Languages** Abyssal, telepathy 60 ft.
- **Challenge** 3

## Traits

***Rotting Presence.*** When any creature that isn't a demon starts its turn within 30 feet of the bulezau, that creature must succeed on a DC 13 Constitution saving throw or take `dice: 1d6|avg` (`1d6`) necrotic damage.

***Standing Leap.*** The bulezau's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start.

***Sure-Footed.*** The bulezau has advantage on Strength and Dexterity saving throws made against effects that would knock it [prone](compendium/rules/conditions.md#prone).

## Actions

***Barbed Tail.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d12 + 2|avg` (`1d12 + 2`) piercing damage plus `dice: 1d8|avg` (`1d8`) necrotic damage. If the target is a creature, it must succeed on a DC 13 Constitution saving throw against disease or become [poisoned](compendium/rules/conditions.md#poisoned) until the disease ends. While [poisoned](compendium/rules/conditions.md#poisoned) in this way, the target sports festering boils, coughs up flies, and sheds rotting skin, and the target must repeat the saving throw after every 24 hours that elapse. On a successful save, the disease ends. On a failed save, the target's hit point maximum is reduced by 4 (`dice: 1d8|avg` (`1d8`)). The target dies if its hit point maximum is reduced to 0.
```
^statblock