---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/arctic
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Gnoll Flesh Gnawer"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Gnoll"
"cr": "1"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The gnoll makes one Bite attack and two Shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Until the end of the turn, the gnoll's speed increases by 60 feet and it\
    \ doesn't provoke opportunity attack||opportunity attacks."
  "name": "Sudden Rush"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "After the gnoll reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the gnoll moves up to half its speed and makes a Bite attack."
  "name": "Rampage"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/monstrosity/token/gnoll-flesh-gnawer.png"
aliases: ["Gnoll Flesh Gnawer"]
---
# Gnoll Flesh Gnawer
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 144, Volo's Guide to Monsters p. 154*  

These gnolls eschew the use of ranged weapons in favor of short blades that they wield with great speed and efficiency. In the thick of a fight, they dash across the battlefield, slashing and snarling as they run down stragglers and finish off wounded foes.

## Gnolls

The first gnolls were hyenas transformed by magic. Many of them were then corrupted by the demon lord Yeenoghu. Whether in service to Yeenoghu or dedicated to the survival of their kin, gnoll war bands seek to soften up foes with surprise attacks and to leave no survivors alive.

## Stat Block

```ad-statblock
title: Gnoll Flesh Gnawer
![[/6. Mechanics/Bestiary/Monstrosity/Token/gnoll-flesh-gnawer.png#token]]
*Medium monstrosity, Chaotic Evil*

- **Armor Class** 14 ([[/6. Mechanics/Items/studded-leather-armor.md\|studded leather]])
- **Hit Points** `dice: 4d8 + 4|text(22)` (4d8 + 4) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|14 (+2)|12 (+1)| 8 (-1)|10 (+0)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +4
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Languages** Gnoll
- **Challenge** 1

## Actions

***Multiattack.*** The gnoll makes one Bite attack and two Shortsword attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) piercing damage.

***Shortsword.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2` (`1d6 + 2`) piercing damage.

***Sudden Rush.*** Until the end of the turn, the gnoll's speed increases by 60 feet and it doesn't provoke opportunity attack||opportunity attacks.

## Bonus Actions

***Rampage.*** After the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll moves up to half its speed and makes a Bite attack.
```
^statblock

## Environment

arctic, forest, grassland, hill