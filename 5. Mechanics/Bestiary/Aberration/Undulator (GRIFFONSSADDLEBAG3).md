---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 15
environments: null
size: Huge
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/15
  - monster/size/huge
  - monster/type/aberration
aliases:
  - Undulator
---
# [[5. Mechanics/Bestiary/Aberration/Undulator (GRIFFONSSADDLEBAG3).md|Undulator]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The Terror of the Deep, the Shadow's Tentacles, the Droning Kraken—all of these are names used to describe the horrific undulator. Eyeless yet ever-watching, this inscrutable, aberrant entity of unknown origins lurks within the deepest shadowy recesses of the earth. Just to be near the monstrous thing is to risk shattering the psyche, as its suckered physical and shadowy magical tendrils lash out indiscriminately. To make matters worse, it even possesses potent, mind-altering magic that imposes its own will over its prey, charming them into submission and obedience. In some parts of Ilridun, even speaking its name is taboo, seen as a potential invitation of its presence.

```statblock
"name": "Undulator (GRIFFONSSADDLEBAG3)"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]"
"senses": "blindsight 300 ft. (blind beyond this radius), passive Perception 18"
"languages": "Deep Speech"
"cr": "15"
"traits":
- "desc": "The undulator deals double damage to objects and structures."
  "name": "Siege Monster"
- "desc": "The ground within 60 feet of the undulator is filled with mindless, writhing\
    \ tentacles made of shadow that extend 5 feet into the air. A hostile creature's\
    \ speed is halved in the area, it has disadvantage on ability checks and saving\
    \ throws made to avoid or escape being [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], and opportunity\
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
    \ (3d6 + 5) bludgeoning damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 15). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]].\
    \ The undulator has twelve tentacles, each of which can grapple one target."
  "name": "Tentacle"
- "desc": "The undulator emits a sonorous, mind-altering tone. Each creature within\
    \ 60 feet of the undulator that can hear it must make a DC 18 Wisdom saving throw.\
    \ On a failed save, a creature becomes [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ by the undulator for 1 hour. While [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ in this way, the undulator has a telepathic link with the creature and always\
    \ knows the creature's location as long as it and the creature are on the same\
    \ plane of existence.\n\nWhenever the undulator or one of its allies deals damage\
    \ to the [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] creature, the creature\
    \ can repeat the saving throw, ending the effect on itself on a success. If a\
    \ creature's saving throw is successful or the effect ends for it, the creature\
    \ is immune to the undulator's Resonate for the next 24 hours."
  "name": "Resonate (Recharge 5-6)"
"legendary_actions":
- "desc": "The undulator makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ check.\n\nIt can do so using its senses, or using the senses of one creature\
    \ of its choice that is [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] by\
    \ it."
  "name": "Detect"
- "desc": "The undulator moves up to its speed."
  "name": "Move"
- "desc": "The undulator magically forces one creature [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ by it to use its reaction, if available, to make an attack against a target\
    \ of the undulator's choice that it can see."
  "name": "Compelled Strike (Cost 2 Actions)"
- "desc": "The undulator slams creatures [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ by it into each other or a solid surface. Each creature must succeed on a DC\
    \ 18 Constitution saving throw or take 19 (4d6 + 5) bludgeoning damage and be\
    \ [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]] until the end of the undulator's\
    \ next turn. On a successful save, the target takes half the bludgeoning damage\
    \ and isn't [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]."
  "name": "Tentacle Slam (Costs 3 Actions)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
