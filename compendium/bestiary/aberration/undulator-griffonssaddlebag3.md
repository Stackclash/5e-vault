---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 15
environments: 
size: Huge
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/15
- monster/size/huge
- monster/type/aberration
aliases: ["Undulator"]
---
# [Undulator](compendium\bestiary\aberration/undulator-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The Terror of the Deep, the Shadow's Tentacles, the Droning Kraken—all of these are names used to describe the horrific undulator. Eyeless yet ever-watching, this inscrutable, aberrant entity of unknown origins lurks within the deepest shadowy recesses of the earth. Just to be near the monstrous thing is to risk shattering the psyche, as its suckered physical and shadowy magical tendrils lash out indiscriminately. To make matters worse, it even possesses potent, mind-altering magic that imposes its own will over its prey, charming them into submission and obedience. In some parts of Ilridun, even speaking its name is taboo, seen as a potential invitation of its presence.

```statblock
"name": "Undulator (GriffonsSaddlebag3)"
"size": "Huge"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "256"
"hit_dice": "19d12 + 133"
"stats":
- !!int "21"
- !!int "14"
- !!int "23"
- !!int "18"
- !!int "17"
- !!int "20"
"speed": "0 ft., fly 20 ft. (hover)"
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "8"
  "Intelligence": !!int "9"
"skillsaves":
  "Deception": !!int "10"
  "Perception": !!int "8"
"damage_resistances": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed),\
  \ [deafened](/compendium/rules/conditions.md#Deafened), [frightened](/compendium/rules/conditions.md#Frightened),\
  \ [prone](/compendium/rules/conditions.md#Prone)"
"senses": "blindsight 300 ft. (blind beyond this radius), passive Perception 18"
"languages": "Deep Speech"
"cr": "15"
"traits":
- "desc": "The undulator deals double damage to objects and structures."
  "name": "Siege Monster"
- "desc": "The ground within 60 feet of the undulator is filled with mindless, writhing\
    \ tentacles made of shadow that extend 5 feet into the air. A hostile creature's\
    \ speed is halved in the area, it has disadvantage on ability checks and saving\
    \ throws made to avoid or escape being [grappled](/compendium/rules/conditions.md#Grappled)\
    \ or [restrained](/compendium/rules/conditions.md#Restrained), and opportunity\
    \ attacks against it are made with advantage."
  "name": "Tendrilous Aura"
"actions":
- "desc": "The undulator can use its Resonate. It then makes three attacks, only one\
    \ of which can be with its beak."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 18 (3d8\
    \ + 5) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 15\
    \ (3d6 + 5) bludgeoning damage, and the target is [grappled](/compendium/rules/conditions.md#Grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/compendium/rules/conditions.md#Restrained).\
    \ The undulator has twelve tentacles, each of which can grapple one target."
  "name": "Tentacle"
- "desc": "The undulator emits a sonorous, mind-altering tone. Each creature within\
    \ 60 feet of the undulator that can hear it must make a DC 18 Wisdom saving throw.\
    \ On a failed save, a creature becomes [charmed](/compendium/rules/conditions.md#Charmed)\
    \ by the undulator for 1 hour. While [charmed](/compendium/rules/conditions.md#Charmed)\
    \ in this way, the undulator has a telepathic link with the creature and always\
    \ knows the creature's location as long as it and the creature are on the same\
    \ plane of existence.\n\nWhenever the undulator or one of its allies deals damage\
    \ to the [charmed](/compendium/rules/conditions.md#Charmed) creature, the creature\
    \ can repeat the saving throw, ending the effect on itself on a success. If a\
    \ creature's saving throw is successful or the effect ends for it, the creature\
    \ is immune to the undulator's Resonate for the next 24 hours."
  "name": "Resonate (Recharge 5-6)"
"legendary_actions":
- "desc": "The undulator makes a Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ check.\n\nIt can do so using its senses, or using the senses of one creature\
    \ of its choice that is [charmed](/compendium/rules/conditions.md#Charmed) by\
    \ it."
  "name": "Detect"
- "desc": "The undulator moves up to its speed."
  "name": "Move"
- "desc": "The undulator magically forces one creature [charmed](/compendium/rules/conditions.md#Charmed)\
    \ by it to use its reaction, if available, to make an attack against a target\
    \ of the undulator's choice that it can see."
  "name": "Compelled Strike (Cost 2 Actions)"
- "desc": "The undulator slams creatures [grappled](/compendium/rules/conditions.md#Grappled)\
    \ by it into each other or a solid surface. Each creature must succeed on a DC\
    \ 18 Constitution saving throw or take 19 (4d6 + 5) bludgeoning damage and be\
    \ [stunned](/compendium/rules/conditions.md#Stunned) until the end of the undulator's\
    \ next turn. On a successful save, the target takes half the bludgeoning damage\
    \ and isn't [stunned](/compendium/rules/conditions.md#Stunned)."
  "name": "Tentacle Slam (Costs 3 Actions)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```