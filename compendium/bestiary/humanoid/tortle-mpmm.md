---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
"name": "Tortle"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "4"
  "Survival": !!int "3"
"senses": "passive Perception 11"
"languages": "Aquan, Common"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The tortle can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) slashing damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing\
    \ damage, or 6 (dice: 1d8 + 2|avg (1d8 + 2)) piercing damage if used with\
    \ two hands in melee."
  "name": "Spear"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+2 (+2 to hit), range 80/320 ft., one\
    \ target. Hit: dice: 1d8|avg (1d8) piercing damage."
  "name": "Light Crossbow"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus\
    \ to AC and has advantage on Strength and Constitution saving throws. While in\
    \ its shell, the tortle is [prone](compendium/rules/conditions.md#prone), its\
    \ speed is 0 and can't increase, it has disadvantage on Dexterity saving throws,\
    \ it can't take reactions, and the only action it can take is a bonus action to\
    \ emerge."
  "name": "Shell Defense"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/humanoid/token/tortle.png"
aliases: ["Tortle"]
---
# Tortle
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 244, Mordenkainen's Tome of Foes p. 242*  

The generic tortle stat block here represents a warrior, especially the sort who travels far and wide.

## Tortles

Tortles are omnivorous, turtle-like bipeds with shells that cover most of their bodies. Because they carry their homes on their backs, tortles feel little need to stay put for long.

Most tortles like to see how other folk live. A tortle can spend decades away from their native land without feeling homesick, often viewing their current companions as their family.

## Stat Block

```ad-statblock
title: Tortle
![](/compendium/bestiary/humanoid/token/tortle.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 4d8 + 4|text(22)` (4d8 + 4) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|10 (+0)|12 (+1)|11 (+0)|13 (+1)|12 (+1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Athletics +4, Survival +3
- **Senses** passive Perception 11
- **Languages** Aquan, Common
- **Challenge** 1/4

## Traits

***Hold Breath.*** The tortle can hold its breath for 1 hour.

## Actions

***Claw.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) slashing damage.

***Spear.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage, or 6 (`dice: 1d8 + 2|avg` (`1d8 + 2`)) piercing damage if used with two hands in melee.

***Light Crossbow.*** *Ranged Weapon Attack:* `dice: d20+2` (+2 to hit), range 80/320 ft., one target. Hit: `dice: 1d8|avg` (`1d8`) piercing damage.

***Shell Defense.*** The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus to AC and has advantage on Strength and Constitution saving throws. While in its shell, the tortle is [prone](compendium/rules/conditions.md#prone), its speed is 0 and can't increase, it has disadvantage on Dexterity saving throws, it can't take reactions, and the only action it can take is a bonus action to emerge.
```
^statblock

## Environment

coastal