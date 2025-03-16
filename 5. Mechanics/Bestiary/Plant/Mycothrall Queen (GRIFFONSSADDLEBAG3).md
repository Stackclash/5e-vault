---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/4
  - monster/size/large
  - monster/type/plant
aliases:
  - Mycothrall Queen
---
# [[5. Mechanics/Bestiary/Plant/Mycothrall Queen (GRIFFONSSADDLEBAG3).md|Mycothrall Queen]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The prime consciousness of the collective Mycothrall Sovereignty. The Queen is stretched thin across the Lunar Sea after launching an all-out attack against Styggar's Preserver constructs. She hopes to eventually take complete control of the Lunar Sea and overrun it onto the planet below, further spreading her collective conscience.

Creatures that have been transformed by her spores and joined the Sovereignty gain a variety of additional traits, as listed in the document and again in the sidebar below the Queen's stat block.

```statblock
"name": "Mycothrall Queen (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "plant"
"alignment": "Lawful Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "11d10 + 44"
"stats":
- !!int "17"
- !!int "12"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "6"
  "Perception": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "telepathy 120 ft."
"cr": "4"
"traits":
- "desc": "When the queen dies, she releases a 10-foot-radius cloud of fungal spores.\
    \ A creature that starts its turn in the cloud must succeed on a DC 14 Constitution\
    \ saving throw or become [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
    \ for 1 minute. If the saving throw fails by 5 or more, the creature is also [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ and takes 5 (2d4) poison damage at the start of each of its turns until the\
    \ poison ends. The creature can repeat the saving throw at the end of each of\
    \ its turns, ending the effect on itself on a success."
  "name": "Death Spores"
- "desc": "The queen is a member of the Mycothrall Hivemind. She can communicate telepathically\
    \ with any other member of the Hivemind, as long as they are on the same plane\
    \ of existence."
  "name": "Hivemind"
- "desc": "The queen takes 5 (1d10) radiant damage if she starts her turn in sunlight.\
    \ While in sunlight, she has disadvantage on ability checks, attack rolls, and\
    \ saving throws."
  "name": "Sunlight Susceptibility"
"actions":
- "desc": "The queen uses her Eject Spores; before or after doing so, she makes one\
    \ clutch attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage plus 10 (4d4) poison damage. If the target is Medium\
    \ or smaller, it is also [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]."
  "name": "Clutch"
- "desc": "The queen ejects spores at one creature she can see within 15 feet of her,\
    \ subjecting it to one of the following effects."
  "name": "Eject Spores"
- "desc": "The target must succeed on a DC 14 Constitution saving throw or become\
    \ [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] for 1 minute. It can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Blinding Spores"
- "desc": "The target must succeed on a DC 14 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ for 1 minute. It can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Horrifying Spores"
- "desc": "The target must succeed on a DC 14 Constitution saving throw against disease\
    \ or become [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] until the disease\
    \ is cured. Every 24 hours that elapse, the diseased target must repeat the saving\
    \ throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease\
    \ is cured on a success. If the target dies while diseased in this way, it immediately\
    \ rises as a mycothrall (see the sidebar) and regains all its hit points.\n\n\
    The queen has total control of the mycothrall subject."
  "name": "Subjugating Spores (Recharge 5-6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
