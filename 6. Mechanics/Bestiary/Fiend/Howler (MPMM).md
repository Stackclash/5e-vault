---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/grassland
- monster/environment/hill
- monster/environment/underdark
- monster/size/large
- monster/type/fiend
statblock: true
statblock-link: "#^statblock"
"name": "Howler"
"size": "Large"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "17"
- !!int "16"
- !!int "15"
- !!int "5"
- !!int "14"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Abyssal but can't speak"
"cr": "8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A howler has advantage on attack rolls against a creature if at least one\
    \ of the howler's allies is within 5 feet of the creature and the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The howler makes two Rending Bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) piercing damage, plus dice: 4d10|avg\
    \ (4d10) psychic damage if the target is [[6. Mechanics/Rules/conditions.md#frightened\|frightened]].\
    \ This attack ignores damage resistance."
  "name": "Rending Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The howler emits a keening howl in a 60-foot cone. Each creature in that\
    \ area must succeed on a DC 13 Wisdom saving throw or take dice: 3d10|avg (3d10)\
    \ psychic damage and be [[6. Mechanics/Rules/conditions.md#frightened\|frightened]]\
    \ until the end of the howler's next turn. While a creature is [[6. Mechanics/Rules/conditions.md#frightened\|frightened]]\
    \ in this way, its speed is halved, and it is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].\
    \ A target that successfully saves is immune to the Mind-Breaking Howl of all\
    \ howlers for the next 24 hours."
  "name": "Mind-Breaking Howl (Recharge 4-6)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/fiend/token/howler.png"
aliases: ["Howler"]
---
# Howler
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 155, Mordenkainen's Tome of Foes p. 210*  

> [!quote]- A quote from Mordenkainen  
> 
> Why does the howler sing? Doing so causes its prey to flee, and surely stealth would make for better hunting in howling Pandemonium. There is only one answer: the creature can taste fear.

A far-off wail precedes the sight of a howler. Even at a distance, listeners' minds cringe at the sound and fill with horror at the realization that the noise is drawing closer. When howlers go on the prowl, courage isn't enough to stand up against them.

These nightmare creatures are native to Pandemonium, but they can be found on most of the Lower Planes, where they are trained as war hounds. Howlers can be domesticated, after a fashion, but they respond only to brutal training in which they are forced to recognize the trainer as the pack's undisputed leader. A trained pack then follows its leader without hesitation. Howler packs course over the battlefields of the Blood War and also serve evil mortals powerful and vicious enough to command their loyalty.

Howlers rely on speed, numbers, and their mind-numbing howling to corner prey before they tear it apart. Their howls flood the minds of their victims, making complex thought impossible. Listeners can do little more than stare in horror and stumble around the battlefield in a search for safety. Fiends especially prize howlers for this reason, because for a few crucial moments in a battle, their howls can neutralize an enemy.

```ad-statblock
title: Howler
![[/6. Mechanics/Bestiary/Fiend/Token/howler.png#token]]
*Large fiend, Chaotic Evil*

- **Armor Class** 16 (natural armor)
- **Hit Points** `dice: 12d10 + 24|text(90)` (12d10 + 24) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|16 (+3)|15 (+2)| 5 (-3)|14 (+2)| 6 (-2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Perception +5
- **Senses** darkvision 60 ft., passive Perception 15
- **Damage Resistances** cold; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Condition Immunities** frightened
- **Languages** understands Abyssal but can't speak
- **Challenge** 8

## Traits

***Pack Tactics.*** A howler has advantage on attack rolls against a creature if at least one of the howler's allies is within 5 feet of the creature and the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

## Actions

***Multiattack.*** The howler makes two Rending Bite attacks.

***Rending Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3` (`2d6 + 3`) piercing damage, plus `dice: 4d10` (`4d10`) psychic damage if the target is [[6. Mechanics/Rules/conditions.md#frightened\|frightened]]. This attack ignores damage resistance.

***Mind-Breaking Howl (Recharge 4-6).*** The howler emits a keening howl in a 60-foot cone. Each creature in that area must succeed on a DC 13 Wisdom saving throw or take `dice: 3d10` (`3d10`) psychic damage and be [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] until the end of the howler's next turn. While a creature is [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] in this way, its speed is halved, and it is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]. A target that successfully saves is immune to the Mind-Breaking Howl of all howlers for the next 24 hours.
```
^statblock

## Environment

desert, grassland, hill, underdark