---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\6
  - monster\Size\Large
  - monster\Type\Construct
aliases:
  - Sentry Golem
---
# [[5. Mechanics\Bestiary\Construct\Sentry Golem (GRIFFONSSADDLEBAG3).md|Sentry Golem]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The sentry golems of Polaris are smaller and more easily produced than their larger constructed brethren, such as the iron golem or shield guardian. These city defenders and riot-controlling arcane machines are capable of limited flight, and can launch a salvo of flames or sleeping gas from its arm-mounted canister attachment.

```statblock
"name": "Sentry Golem (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "21"
- !!int "10"
- !!int "16"
- !!int "3"
- !!int "14"
- !!int "1"
"speed": "30 ft., fly 20 ft. (hover)"
"skillsaves":
  "Athletics": !!int "8"
  "Perception": !!int "8"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "fire, poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "understands the languages of its creator but can't speak"
"cr": "6"
"traits":
- "desc": "Whenever the golem is subjected to fire damage, it takes no damage and\
    \ instead regains a number of hit points equal to half the fire damage dealt.\
    \ In addition, if its Flamethrower is not charged, it immediately recharges."
  "name": "Fire Absorption"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem can only fly up to 15 feet off the ground."
  "name": "Restricted Propulsion"
- "desc": "The golem has advantage on ability checks and saving throws against effects\
    \ that would move it or knock it [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Sure-Footed"
"actions":
- "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 10 (1d10\
    \ + 5) bludgeoning damage."
  "name": "Slam"
- "desc": "The golem releases a burst of flames in a 30-foot cone. Each creature in\
    \ the area must make a DC 14 Dexterity saving throw, taking 21 (6d6) fire damage\
    \ on a failed save or half as much damage on a successful one.\n\nThe fire spreads\
    \ around corners, and it ignites flammable objects in the area that aren't being\
    \ worn or carried."
  "name": "Flamethrower (Recharge 5-6)"
- "desc": "The golem launches a canister of sleep-inducing gas to a point it can see\
    \ within 60 feet of it, which immediately expels its contents on impact. Each\
    \ creature within 20 feet of that point must succeed on a DC 14 Constitution saving\
    \ throw or fall [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]] for\
    \ 1 minute.\n\nThis effect ends for a creature if the creature takes damage or\
    \ someone uses an action to wake it."
  "name": "Knockout Gas (2/Day)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
