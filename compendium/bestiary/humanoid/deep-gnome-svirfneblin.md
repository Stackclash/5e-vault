---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/small
- monster/type/humanoid/gnome
statblock: true
statblock-link: "#^statblock"
"name": "Deep Gnome (Svirfneblin)"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "16"
"hit_dice": "3d6 + 6"
"stats":
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "9"
"speed": "walk 20 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Investigation": !!int "3"
  "Perception": !!int "2"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Gnomish, Terran, Undercommon"
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The gnome's innate spellcasting ability is Intelligence (spell save DC\
    \ 11). It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [nondetection](/compendium/spells/nondetection.md) (self only)\n\
    \n1/day each: [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [blur](/compendium/spells/blur.md), [disguise self](/compendium/spells/disguise-self.md)"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws\
    \ against magic."
  "name": "Gnome Cunning"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "War Pick"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ creature. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing damage, and the target\
    \ must succeed on a DC 12 Constitution saving throw or be [poisoned](compendium/rules/conditions.md#poisoned)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success"
  "name": "Poisoned Dart"
"source":
- "MM"
- "PotA"
- "WDH"
- "WDMM"
- "KftGV"
"image": "/compendium/bestiary/humanoid/token/deep-gnome-svirfneblin.png"
aliases: ["Deep Gnome (Svirfneblin)"]
---
# Deep Gnome (Svirfneblin)
*Source: Monster Manual p. 164, Princes of the Apocalypse, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Keys from the Golden Vault*  

Deep gnomes, or svirfneblin, live far below the world's surface in twisting warrens and sculpted caverns. They survive by virtue of their stealth, cleverness, and tenacity. Their gray skin allows them to blend in with surrounding stonework. They are also surprisingly heavy and strong for their size. An average adult weighs 100 to 120 pounds and stands 3 feet tall.

A typical svirfneblin enclave contains several hundred deep gnomes and is strongly fortified. Secret tunnels lead to and from the settlement, and the deep gnomes use these as evacuation routes when the enclave comes under attack.

## Established Gender Roles

Male svirfneblin are bald, while females have stringy gray hair. Traditionally, females run the enclaves while males scour the outskirts in search of enemies and deposits of precious gemstones.

## Gemstone Harvesters

Svirfneblin cherish fine gemstones, especially rubies, which they harvest from mines deep in the Underdark. The hunt for gems often brings them into conflict with beholders, drow, kuo-toa, duergar, and mind flayers. Of all their natural enemies, deep gnomes fear and despise the murderous, demon worshiping drow the most.

## Earth Friends

Deep gnomes are often encountered in the company of creatures from the Elemental Plane of Earth. Some svirfneblin can summon such creatures. Earth creatures guard svirfneblin settlements, especially xorn enticed to service with the promise of gems to feed on.

## Stat Block

```ad-statblock
title: Deep Gnome (Svirfneblin)
![](/compendium/bestiary/humanoid/token/deep-gnome-svirfneblin.png#token)
*Small humanoid(gnome), Neutral Good*

- **Armor Class** 15 ([chain shirt](/compendium/items/chain-shirt.md))
- **Hit Points** `dice: 3d6 + 6|text(16)` (3d6 + 6) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|14 (+2)|14 (+2)|12 (+1)|10 (+0)| 9 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Investigation +3, Perception +2, Stealth +4
- **Senses** darkvision 120 ft., passive Perception 12
- **Languages** Gnomish, Terran, Undercommon
- **Challenge** 1/2

## Traits

***Stone Camouflage.*** The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.

***Gnome Cunning.*** The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.

***Innate Spellcasting.*** The gnome's innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components:

**At will**: [nondetection](/compendium/spells/nondetection.md) (self only)

**1/day each**: [blindness/deafness](/compendium/spells/blindness-deafness.md), [blur](/compendium/spells/blur.md), [disguise self](/compendium/spells/disguise-self.md)

## Actions

***War Pick.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage.

***Poisoned Dart.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 30/120 ft., one creature. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success
```
^statblock

## Environment

underdark