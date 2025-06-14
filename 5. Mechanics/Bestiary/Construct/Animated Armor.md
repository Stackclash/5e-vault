---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/size/medium
  - monster/type/construct
aliases:
  - Animated Armor
---
# [[5. Mechanics\Bestiary\Construct\Animated Armor.md|Animated Armor]]
*Source: Monster Manual p. 19, Curse of Strahd, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.

To add to its menace, animated armor is frequently enchanted with scripted speech, so the armor can utter warnings, demand passwords, or deliver riddles. Rare suits of animated armor are able to carry on an actual conversation.

## Animated Objects

Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.

### Constructed Nature

An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

```statblock
"name": "Animated Armor"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "11"
  - !!int "13"
  - !!int "1"
  - !!int "3"
  - !!int "1"
"speed": "25 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The armor is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ while in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
      \ If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the armor\
      \ must succeed on a Constitution saving throw against the caster's spell save\
      \ DC or fall [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]] for\
      \ 1 minute."
    "name": "Antimagic Susceptibility"
  - "desc": "While the armor remains motionless, it is indistinguishable from a normal\
      \ suit of armor."
    "name": "False Appearance"
"actions":
  - "desc": "The armor makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) bludgeoning damage."
    "name": "Slam"
"source":
  - "MM"
  - "CoS"
  - "TCE"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Construct/token/animated-armor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
