---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 13
environments: null
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/13
  - monster/size/medium
  - monster/type/fiend/devil
aliases:
  - Narzugon
---
# [[5. Mechanics\Bestiary\Fiend\Narzugon (MPMM).md|Narzugon]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 190, Mordenkainen's Tome of Foes p. 167*

Paladins who make deals with devils and carry their twisted sense of honor into the afterlife are especially valuable to the archdukes of the Nine Hells. These narzugons act as horrific perversions of knights errant, carrying out their masters' will.

Narzugons wield hell-forged lances that shunt the souls of any they killed to the River Styx for rebirth as [[5. Mechanics/Bestiary/Fiend/Lemure.md|lemures]]. Every lance bears the marks of both a narzugon and its master.

Each narzugon claims a [[5. Mechanics/Bestiary/Fiend/Nightmare.md|nightmare]] as its mount. These steeds are bound by [[5. Mechanics/Items/Infernal Tack (MTF).md|infernal tack]] and must respond to the summons and commands of the spurs' wearer.

```statblock
"name": "Narzugon (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "20"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate armor]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "17"
  - !!int "16"
  - !!int "14"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "dexterity": "+5"
  - "constitution": "+8"
  - "charisma": "+9"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+12"
"damage_resistances": "acid; cold; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Common, Infernal, telepathy 120 ft."
"cr": "13"
"traits":
  - "desc": "The narzugon wears spurs that are part of [[5. Mechanics/Items/Infernal Tack (MTF).md|infernal tack]],\
      \ which allow it to summon its [[5. Mechanics/Bestiary/Fiend/Nightmare.md|nightmare]]\
      \ companion as an action."
    "name": "Infernal Tack"
  - "desc": "The narzugon has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The narzugon makes three Hellfire Lance attacks. It also uses Infernal\
      \ Command or Terrifying Command."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 11\
      \ (1d12 + 5) piercing damage plus 16 (3d10) fire damage. If this damage kills\
      \ a creature with a soul, the soul rises from the River Styx as a [[5. Mechanics/Bestiary/Fiend/Lemure.md|lemure]]\
      \ in Avernus in d4 hours. If the creature isn't revived before then, only a\
      \ [[5. Mechanics/Spells/Wish.md|wish]] spell or killing the lemure and casting\
      \ true resurrection on the creature's original body can restore it to life.\
      \ Constructs and devils are immune to this effect."
    "name": "Hellfire Lance"
  - "desc": "Each ally of the narzugon within 60 feet of it can't be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ or [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] until the end\
      \ of the narzugon's next turn."
    "name": "Infernal Command"
  - "desc": "Each creature within 60 feet of the narzugon that isn't a Fiend must\
      \ succeed on a DC 17 Charisma saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ of the narzugon for 1 minute. A creature can repeat the saving throw at the\
      \ end of each of its turns, ending the effect on itself on a success. A creature\
      \ that makes a successful saving throw is immune to this narzugon's Terrifying\
      \ Command for 24 hours."
    "name": "Terrifying Command"
  - "desc": "The narzugon, or one creature it touches, regains 100 hit points."
    "name": "Healing (1/Day)"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/narzugon-mpmm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
