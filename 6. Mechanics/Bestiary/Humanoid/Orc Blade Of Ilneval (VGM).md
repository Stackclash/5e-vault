---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/orc
statblock: true
statblock-link: "#^statblock"
"name": "Orc Blade of Ilneval"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "17"
- !!int "11"
- !!int "17"
- !!int "10"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Intimidation": !!int "4"
  "Insight": !!int "3"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Orc"
"cr": "4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The orc deals an extra die of damage when it hits with a longsword attack\
    \ (included in the attack)."
  "name": "Foe Smiter of Ilneval"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The orc makes two melee attacks with its longsword or two ranged attacks\
    \ with its javelins. If Ilneval's Command is available to use, the orc can use\
    \ it after these attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 3|avg (2d8 + 3) slashing damage, or 14 (dice: 2d10 + 3|avg\
    \ (2d10 + 3)) slashing damage when used with two hands."
  "name": "Longsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 30/120 ft., one target. Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing\
    \ damage."
  "name": "Javelin"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Up to three allied orcs within 120 feet of this orc that can hear it can\
    \ use their reactions to each make one weapon attack."
  "name": "Ilneval's Command (Recharge 4-6)"
"source":
- "VGM"
"image": "/compendium/bestiary/humanoid/token/orc-blade-of-ilneval.png"
aliases: ["Orc Blade of Ilneval"]
---
# Orc Blade of Ilneval
*Source: Volo's Guide to Monsters p. 183*  

To the common folk of the world, an orc is an orc. They know that any one of these savages can tear an ordinary person to pieces, so no further distinction is necessary.

Orcs know better. Different groups of orcs exist within a tribe, the actions of each dictated by the deity they pay homage to. To complement the various kinds of warriors that spill forth to ravage the countryside, each tribe has members that remain deep inside the lair, seldom if ever seeing what lies outside the darkness of their den.

In addition, orcs have special relationships with two creatures that are sometimes found in their company: the aurochs, a great bull that serves as a mount for warriors that revere Bahgtru, and the tanarukk, a demon-orc crossbreed that is so depraved and destructive that even orcs seek to kill it. The aurochs is described in appendix A. The tanarukk is described below.

## Orc Blade of Ilneval

Ilneval is Gruumsh's battle captain, a devious strategist who directs Gruumsh's soldiers with boldness. Among orcs, warriors that venerate Ilneval emulate their deity. Such orcs learn to command their fellows in ways that are unpredictable but help to ensure victory.

The wisest among these leaders gain Ilneval's favor and rise to become known as blades, tactical experts who advise their chief in matters of war. Blades lead from the front, wading into combat fearlessly while barking orders at lesser soldiers. A blade knows how to use orcish ferocity to best advantage, and helps the ordinary warriors to work together against their adversaries.

## Stat Block

```ad-statblock
title: Orc Blade of Ilneval
![[/6. Mechanics/Bestiary/Humanoid/Token/orc-blade-of-ilneval.png#token]]
*Medium humanoid(orc), Chaotic Evil*

- **Armor Class** 18 ([[/6. Mechanics/Items/chain-mail.md\|chain mail]], [[/6. Mechanics/Items/shield.md\|shield]])
- **Hit Points** `dice: 8d8 + 24|text(60)` (8d8 + 24) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|11 (+0)|17 (+3)|10 (+0)|12 (+1)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +3
- **Skills** Insight +3, Intimidation +4, Perception +3
- **Senses** darkvision 60 ft., passive Perception 13
- **Languages** Common, Orc
- **Challenge** 4

## Traits

***Aggressive.*** As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.

***Foe Smiter of Ilneval.*** The orc deals an extra die of damage when it hits with a longsword attack (included in the attack).

## Actions

***Multiattack.*** The orc makes two melee attacks with its longsword or two ranged attacks with its javelins. If Ilneval's Command is available to use, the orc can use it after these attacks.

***Longsword.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 3` (`2d8 + 3`) slashing damage, or 14 (`dice: 2d10 + 3` (`2d10 + 3`)) slashing damage when used with two hands.

***Javelin.*** *Melee or Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft. or range 30/120 ft., one target. Hit: `dice: 1d6 + 3` (`1d6 + 3`) piercing damage.

***Ilneval's Command (Recharge 4-6).*** Up to three allied orcs within 120 feet of this orc that can hear it can use their reactions to each make one weapon attack.
```
^statblock

## Environment

underdark, mountain, grassland, forest, hill