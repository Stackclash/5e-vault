---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 
size: Medium
tags:
- compendium/src/5e/mm
- monster/cr/12
- monster/size/medium
- monster/type/fiend/devil
aliases: ["Erinyes (Rope of Entanglement)"]
---
# [Erinyes (Rope of Entanglement)](compendium\bestiary\fiend/erinyes-rope-of-entanglement.md)
*Source: Monster Manual p. 73, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Erinyes (Rope of Entanglement)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "[plate armor](compendium/items/plate-armor.md)"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"stats":
- !!int "18"
- !!int "16"
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "18"
"speed": "30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "Infernal, telepathy 120 ft."
"cr": "12"
"traits":
- "desc": "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison\
    \ damage on a hit (included in the attacks)."
  "name": "Hellish Weapons"
- "desc": "The erinyes has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The erinyes carries a [rope of entanglement](compendium/items/rope-of-entanglement.md)."
  "name": "Special Equipment"
"actions":
- "desc": "The erinyes makes three attacks. It can use its [rope of entanglement](compendium/items/rope-of-entanglement.md)\
    \ in place of two of the attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands,\
    \ plus 13 (3d8) poison damage."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must\
    \ succeed on a DC 14 Constitution saving throw or be [poisoned](/compendium/rules/conditions.md#Poisoned).\
    \ The poison lasts until it is removed by the [lesser restoration](compendium/spells/lesser-restoration.md)\
    \ spell or similar magic."
  "name": "Longbow"
"reactions":
- "desc": "The erinyes adds 4 to its AC against one melee attack that would hit it.\
    \ To do so, the erinyes must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "VEoR"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```