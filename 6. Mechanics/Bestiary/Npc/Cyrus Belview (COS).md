---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/humanoid/mongrelfolk
statblock: true
statblock-link: "#^statblock"
"name": "Cyrus Belview"
"size": "Medium"
"type": "humanoid"
"subtype": "mongrelfolk"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "12"
- !!int "9"
- !!int "15"
- !!int "9"
- !!int "10"
- !!int "6"
"speed": "walk 20 ft."
"skillsaves":
  "Deception": !!int "2"
  "Stealth": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mongrelfolk has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Cyrus can mimic any sounds it has heard, including voices. A creature that\
    \ hears the sounds can tell they are imitations with a successful DC 12 Wisdom\
    \ (Insight) check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Cyrus makes two attacks: one with its bite and one with its claw or dagger."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 1|avg (1d4 + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 1|avg (1d4 + 1) slashing damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 1|avg (1d4 + 1) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/cyrus-belview.png"
aliases: ["Cyrus Belview"]
---
# Cyrus Belview
*Source: Curse of Strahd p. 77, Derived from Mongrelfolk (CoS)*  

```ad-statblock
title: Cyrus Belview
![[/6. Mechanics/Bestiary/Npc/Token/cyrus-belview.png#token]]
*Medium humanoid(mongrelfolk), Any alignment*

- **Armor Class** 11 (natural armor)
- **Hit Points** `dice: 4d8 + 8|text(26)` (4d8 + 8) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)| 9 (-1)|15 (+2)| 9 (-1)|10 (+0)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Deception +2, Perception +2, Stealth +3
- **Senses** passive Perception 12
- **Languages** Common
- **Challenge** 1/4

## Traits

***Keen Hearing and Smell.*** The mongrelfolk has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on hearing or smell.

***Mimicry.*** Cyrus can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 12 Wisdom (Insight) check.

## Actions

***Multiattack.*** Cyrus makes two attacks: one with its bite and one with its claw or dagger.

***Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 1` (`1d4 + 1`) piercing damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 1` (`1d4 + 1`) slashing damage.

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 1` (`1d4 + 1`) piercing damage.
```
^statblock