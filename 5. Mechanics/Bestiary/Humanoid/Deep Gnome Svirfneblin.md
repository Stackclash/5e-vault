---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/underdark
  - monster/size/small
  - monster/type/humanoid/gnome
statblock: inline
aliases:
  - Deep Gnome (Svirfneblin)
---
# [[5. Mechanics\Bestiary\Humanoid\Deep Gnome Svirfneblin.md|Deep Gnome (Svirfneblin)]]
*Source: Monster Manual p. 164. Available in the SRD.*

Deep gnomes, or svirfneblin, live far below the world's surface in twisting warrens and sculpted caverns. They survive by virtue of their stealth, cleverness, and tenacity. Their gray skin allows them to blend in with surrounding stonework. They are also surprisingly heavy and strong for their size. An average adult weighs 100 to 120 pounds and stands 3 feet tall.

A typical svirfneblin enclave contains several hundred deep gnomes and is strongly fortified. Secret tunnels lead to and from the settlement, and the deep gnomes use these as evacuation routes when the enclave comes under attack.

## Established Gender Roles

Male svirfneblin are bald, while females have stringy gray hair. Traditionally, females run the enclaves while males scour the outskirts in search of enemies and deposits of precious gemstones.

## Gemstone Harvesters

Svirfneblin cherish fine gemstones, especially rubies, which they harvest from mines deep in the Underdark. The hunt for gems often brings them into conflict with beholders, drow, kuo-toa, duergar, and mind flayers. Of all their natural enemies, deep gnomes fear and despise the murderous, demon worshiping drow the most.

## Earth Friends

Deep gnomes are often encountered in the company of creatures from the Elemental Plane of Earth. Some svirfneblin can summon such creatures. Earth creatures guard svirfneblin settlements, especially xorn enticed to service with the promise of gems to feed on.

```statblock
"name": "Deep Gnome Svirfneblin"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
"alignment": "Neutral Good"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Chain Shirt.md|chain shirt]]"
"hp": !!int "16"
"hit_dice": "3d6 + 6"
"stats":
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "9"
"speed": "20 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Investigation": !!int "3"
  "Perception": !!int "2"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Gnomish, Terran, Undercommon"
"cr": "1/2"
"traits":
- "desc": "The gnome's innate spellcasting ability is Intelligence (spell save DC\
    \ 11). It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [[5. Mechanics/Spells/Nondetection.md|nondetection]] (self only)\n\
    \n1/day each: [[5. Mechanics/Spells/Blindness Deafness.md|blindness/deafness]],\
    \ [[5. Mechanics/Spells/Blur.md|blur]], [[5. Mechanics/Spells/Disguise Self.md|disguise self]]"
  "name": "Innate Spellcasting"
- "desc": "The gnome has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks made to hide in rocky terrain."
  "name": "Stone Camouflage"
- "desc": "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws\
    \ against magic."
  "name": "Gnome Cunning"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage."
  "name": "War Pick"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit:\
    \ 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution\
    \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] for\
    \ 1 minute. The target can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success"
  "name": "Poisoned Dart"
"source":
- "MM"
- "PotA"
- "WDH"
- "WDMM"
- "KftGV"
- "PaBTSO"
"image": "5. Mechanics/Bestiary/Humanoid/token/deep-gnome-svirfneblin.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
