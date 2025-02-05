---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: 
size: Large
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/6
- monster/size/large
- monster/type/construct
aliases: ["Sentry Golem"]
---
# [Sentry Golem](compendium\bestiary\construct/sentry-golem-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The sentry golems of Polaris are smaller and more easily produced than their larger constructed brethren, such as the iron golem or shield guardian. These city defenders and riot-controlling arcane machines are capable of limited flight, and can launch a salvo of flames or sleeping gas from its arm-mounted canister attachment.

```statblock
"name": "Sentry Golem (GriffonsSaddlebag3)"
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
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [poisoned](/compendium/rules/conditions.md#Poisoned)"
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
    \ that would move it or knock it [prone](/compendium/rules/conditions.md#Prone)."
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
    \ throw or fall [unconscious](/compendium/rules/conditions.md#Unconscious) for\
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