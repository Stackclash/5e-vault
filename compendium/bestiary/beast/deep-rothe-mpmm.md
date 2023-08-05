---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/medium
- monster/type/beast/cattle
statblock: true
statblock-link: "#^statblock"
"name": "Deep Rothé"
"size": "Medium"
"type": "beast"
"subtype": "cattle"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"stats":
- !!int "18"
- !!int "10"
- !!int "14"
- !!int "2"
- !!int "10"
- !!int "4"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The rothé is considered to be one size larger for the purpose of determining\
    \ its carrying capacity."
  "name": "Beast of Burden"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage. If the rothé moved at\
    \ least 20 feet straight toward the target immediately before the hit, the target\
    \ takes an extra 7 (dice: 2d6|avg (2d6)) piercing damage."
  "name": "Gore"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The rothé casts [dancing lights](/compendium/spells/dancing-lights.md),\
    \ requiring no spell components and using Wisdom as the spellcasting ability."
  "name": "Dancing Lights"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/beast/token/deep-rothe.png"
aliases: ["Deep Rothé"]
---
# Deep Rothé
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 71, Volo's Guide to Monsters p. 208*  

Deep rothe are Underdark cattle that communicate with one another using the dancing lights spell. Some scholars speculate that rothe came originally from the Feywild and brought the ability to cast the spell with them. Other sages attribute the ability to the centuries rothe have spent in the Underdark, where ambient magic slowly transforms everything.

## Cattle

Many kinds of cattle roam the multiverse, some of them domesticated and others feral. In many cultures, cattle are almost like family to the folk who tend to them.

## Stat Block

```ad-statblock
title: Deep Rothé
![](/compendium/bestiary/beast/token/deep-rothe.png#token)
*Medium beast(cattle), Unaligned*

- **Armor Class** 10 
- **Hit Points** `dice: 2d8 + 4|text(13)` (2d8 + 4) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|10 (+0)|14 (+2)| 2 (-4)|10 (+0)| 4 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Languages** —
- **Challenge** 1/4

## Traits

***Beast of Burden.*** The rothé is considered to be one size larger for the purpose of determining its carrying capacity.

## Actions

***Gore.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 4|avg` (`1d6 + 4`) piercing damage. If the rothé moved at least 20 feet straight toward the target immediately before the hit, the target takes an extra 7 (`dice: 2d6|avg` (`2d6`)) piercing damage.

***Dancing Lights.*** The rothé casts [dancing lights](/compendium/spells/dancing-lights.md), requiring no spell components and using Wisdom as the spellcasting ability.
```
^statblock

## Environment

underdark