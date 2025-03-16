---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/7
  - monster/size/large
  - monster/type/elemental
aliases:
  - Crystal Golem
---
# [[5. Mechanics/Bestiary/Elemental/Crystal Golem (GRIFFONSSADDLEBAG3).md|Crystal Golem]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

These mighty elementals seem to form around mirrorlight crystal formations and are given life from any proximity to the Elemental Plane of Earth. Although their size is considerable, they often surprise travelers by blending in with the cave's mineral-strewn terrain. Much of their bulk is actual crystal, but a strange property of their animation allows them to sometimes nullify otherwise harmful frequencies and sonic attacks. The volume of crystal also makes them prime targets for miners and monsters that rely on the gems for sustenance, but these lumbering creatures display remarkable strength and ferocity against would-be predators.

```statblock
"name": "Crystal Golem (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "20"
- !!int "8"
- !!int "19"
- !!int "4"
- !!int "10"
- !!int "5"
"speed": "30 ft., climb 30 ft."
"saves":
  "Strength": !!int "8"
  "Constitution": !!int "7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison, radiant"
"senses": "darkvision 120 ft., tremorsense 60 ft., passive Perception 10"
"languages": "Terran"
"cr": "7"
"traits":
- "desc": "If an attack or effect would deal 14 or less thunder damage to the golem,\
    \ the golem ignores that thunder damage. Otherwise, the golem is considered to\
    \ be vulnerable to that thunder damage instead."
  "name": "Crystalline Resonance"
- "desc": "While the golem remains motionless, it is indistinguishable from an inanimate\
    \ crystal formation."
  "name": "False Appearance"
- "desc": "If the golem is knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
    \ roll a die.\n\nOn an odd result, the golem lands on its back and is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]].\
    \ At the end of each of its turns, the golem can make a DC 10 Dexterity saving\
    \ throw, righting itself and ending the [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
    \ condition if it succeeds."
  "name": "Prone Deficiency"
- "desc": "Whenever the golem is subjected to radiant damage, it takes no damage and\
    \ instead redirects it, forcing each other creature within 30 feet of the golem\
    \ to succeed on a DC 15 Dexterity saving throw or take an amount of radiant damage\
    \ equal to half the radiant damage dealt."
  "name": "Radiant Refraction (1/Turn)"
"actions":
- "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage."
  "name": "Slam"
- "desc": "While standing in an area of bright light, the golem refracts and focuses\
    \ the light into an intense beam.\n\nOne creature the golem can see within 60\
    \ feet of it must make a DC 15 Dexterity saving throw. On a failed save, the target\
    \ takes 18 (4d8) radiant damage, and if the target has eyes, it is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
    \ until the end of the golem's next turn. On a successful save, the target takes\
    \ half as much radiant damage and isn't [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]."
  "name": "Light Prism"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
