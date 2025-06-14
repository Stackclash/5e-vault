---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 18
environments: null
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/18
  - monster/size/medium
  - monster/type/fiend/devil
aliases:
  - Amnizu
---
# [[5. Mechanics\Bestiary\Fiend\Amnizu (MPMM).md|Amnizu]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 46, Mordenkainen's Tome of Foes p. 164*

Amnizus lead infernal legions into battle and command guardians at the gateways to the Hells. Amnizus are arrogant, bullying, and ruthless, but they're also highly intelligent tacticians and unfailingly loyal—qualities the hellish archdukes value.

Some amnizus perform the critical task of watching over the River Styx from fortresses along the river's blighted banks, where it flows through Dis and Stygia. They collect the souls arriving in the form of [[5. Mechanics/Bestiary/Fiend/Lemure.md|lemures]]. Lemures have no personalities or memories; they're driven only by the desire to commit evil. The amnizus that patrol here drill the rules of the Nine Hells into the new arrivals' minds and marshal them into legions.

```statblock
"name": "Amnizu (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "202"
"hit_dice": "27d8 + 81"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "13"
  - !!int "16"
  - !!int "20"
  - !!int "12"
  - !!int "18"
"speed": "30 ft., fly 40 ft."
"saves":
  - "dexterity": "+7"
  - "constitution": "+9"
  - "wisdom": "+7"
  - "charisma": "+10"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+7"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Common, Infernal, telepathy 1,000 ft."
"cr": "18"
"traits":
  - "desc": "Magical darkness doesn't impede the amnizu's [[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]]."
    "name": "Devil's Sight"
  - "desc": "The amnizu has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The amnizu uses Blinding Rot or Forgetfulness, if available. It also\
      \ makes two Taskmaster Whip attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 9\
      \ (1d8 + 5) slashing damage plus 16 (3d10) force damage."
    "name": "Taskmaster Whip"
  - "desc": "The amnizu targets one or two creatures that it can see within 60 feet\
      \ of it. Each target must succeed on a DC 19 Wisdom saving throw or take 26\
      \ (4d12) necrotic damage and be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
      \ until the start of the amnizu's next turn."
    "name": "Blinding Rot"
  - "desc": "The amnizu targets one creature it can see within 60 feet of it. That\
      \ creature must succeed on a DC 18 Intelligence saving throw or take 26 (4d12)\
      \ psychic damage and become [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
      \ for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]] creature\
      \ repeats the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success. If the target is [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
      \ for the full minute, it forgets everything it sensed, experienced, and learned\
      \ during the last 5 hours."
    "name": "Forgetfulness (Recharge 6)"
  - "desc": "The amnizu casts one of the following spells, requiring no material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 19):\n\n\
      At will: [[5. Mechanics/Spells/Command.md|command]]\n\n3/day: [[5. Mechanics/Spells/Dominate Monster.md|dominate\
      \ monster]]\n\n1/day: [[5. Mechanics/Spells/Feeblemind.md|feeblemind]]"
    "name": "Spellcasting"
"reactions":
  - "desc": "When a creature within 60 feet of the amnizu makes an attack roll against\
      \ it, and another creature is within the attack's range, the attacker must make\
      \ a DC 19 Wisdom saving throw. On a failed save, the attacker must target the\
      \ creature that is closest to it, not including the amnizu or itself. If multiple\
      \ creatures are closest, the attacker chooses which one to target. If the saving\
      \ throw is successful, the attacker is immune to the amnizu's Instinctive Charm\
      \ for 24 hours."
    "name": "Instinctive Charm"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/amnizu-mpmm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
