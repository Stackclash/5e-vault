---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 
size: Medium
tags:
- compendium/src/5e/da:gic
- monster/cr/3
- monster/size/medium
- monster/type/fiend/devil
aliases: ["Bagger"]
---
# [Bagger](compendium\bestiary\fiend/bagger-da-gic.md)
*Source: Devil's Advocate: A Guide to Infernal Contracts p. 20*

Baggers are tall, gangly devils charged with transporting uncooperative signees to the Nine Hells. They get their name by stuffing writhing signees into claustrophobic, cursed sacks. Oftentimes, these bags contain nightmares - a taste of the horrors awaiting the signee at their destination.

```statblock
"name": "Bagger (DA:GIC)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "17"
- !!int "15"
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "6"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "3"
  "Strength": !!int "5"
  "Constitution": !!int "4"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with silvered weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Infernal, telepathy 120 ft."
"cr": "3"
"traits":
- "desc": "Magical darkness doesn't impede the bagger's darkvision."
  "name": "Devil's Sight"
- "desc": "The bagger has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The bagger makes two attacks: one with its fork and one with its bag."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 3) piercing damage."
  "name": "Fork"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 3) bludgeoning damage. The creature is [grappled](/compendium/rules/conditions.md#Grappled)\
    \ (escape DC 16). Until this grapple ends, the creature is [restrained](/compendium/rules/conditions.md#Restrained)\
    \ inside a bag filled with nightmarish visions. At the start of each of its turns,\
    \ a creature inside the bag must make a DC 12 Wisdom saving throw, taking 7 (2d6)\
    \ psychic damage on a failed save or haIf as much on a success.\n\nThe bag can\
    \ only hold one creature at a time. A creature who escapes the Bag of Horrors\
    \ exits [prone](/compendium/rules/conditions.md#Prone) in an unoccupied space\
    \ within 5 ft. of the bagger. Additionally, the creature is [frightened](/compendium/rules/conditions.md#Frightened)\
    \ of the bagger until the end of their next turn."
  "name": "Bag of Horrors"
"source":
- "DA:GIC"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```