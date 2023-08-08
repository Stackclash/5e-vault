---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/fiend/devil
statblock: inline
---
# Narzugon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 190, Mordenkainen's Tome of Foes p. 167*  

Paladins who make deals with devils and carry their twisted sense of honor into the afterlife are especially valuable to the archdukes of the Nine Hells. These narzugons act as horrific perversions of knights errant, carrying out their masters' will.

Narzugons wield hell-forged lances that shunt the souls of any they killed to the River Styx for rebirth as [[/6. Mechanics/Bestiary/Fiend/Lemure.md|lemures]]. Every lance bears the marks of both a narzugon and its master.

Each narzugon claims a [[/6. Mechanics/Bestiary/Fiend/Nightmare.md|nightmare]] as its mount. These steeds are bound by [[/6. Mechanics/Items/Infernal Tack (MTF).md|infernal tack]] and must respond to the summons and commands of the spurs' wearer.

```statblock
"name": "Narzugon"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "20"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "20"
- !!int "10"
- !!int "17"
- !!int "16"
- !!int "14"
- !!int "19"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "12"
"damage_resistances": "acid; cold; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Common, Infernal, telepathy 120 ft."
"cr": "13"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The narzugon wears spurs that are part of [[/6. Mechanics/Items/Infernal Tack (MTF).md|infernal tack]],\
    \ which allow it to summon its [[/6. Mechanics/Bestiary/Fiend/Nightmare.md|nightmare]]\
    \ companion as an action."
  "name": "Infernal Tack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The narzugon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The narzugon makes three Hellfire Lance attacks. It also uses Infernal\
    \ Command or Terrifying Command."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 10 ft., one target.\
    \ Hit: dice: 1d12 + 5|avg (1d12 + 5) piercing damage plus dice: 3d10|avg\
    \ (3d10) fire damage. If this damage kills a creature with a soul, the soul\
    \ rises from the River Styx as a [[/6. Mechanics/Bestiary/Fiend/Lemure.md|lemure]]\
    \ in Avernus in dice: 1d4|avg (1d4) hours. If the creature isn't revived before\
    \ then, only a [[/6. Mechanics/Spells/Wish.md|wish]] spell or killing the lemure\
    \ and casting true resurrection on the creature's original body can restore it\
    \ to life. Constructs and devils are immune to this effect."
  "name": "Hellfire Lance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each ally of the narzugon within 60 feet of it can't be [[6. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ or [[6. Mechanics/Rules/Conditions.md#frightened|frightened]] until the end of\
    \ the narzugon's next turn."
  "name": "Infernal Command"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each creature within 60 feet of the narzugon that isn't a Fiend must succeed\
    \ on a DC 17 Charisma saving throw or become [[6. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ of the narzugon for 1 minute. A creature can repeat the saving throw at the\
    \ end of each of its turns, ending the effect on itself on a success. A creature\
    \ that makes a successful saving throw is immune to this narzugon's Terrifying\
    \ Command for 24 hours."
  "name": "Terrifying Command"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The narzugon, or one creature it touches, regains 100 hit points."
  "name": "Healing (1/Day)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/fiend/token/narzugon.png"
```
^statblock