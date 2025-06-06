---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/5
  - monster/size/large
  - monster/type/ooze
aliases:
  - Prismatic Ooze
---
# [[5. Mechanics\Bestiary\Ooze\Prismatic Ooze (GRIFFONSSADDLEBAG3).md|Prismatic Ooze]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The prismatic ooze is particularly in tune with so-called prismatic energies like acid, cold, fire, lightning, necrotic, poison, and radiant damage; it gains additional defenses of that type when attacked, thus requiring other methods or a rotation cycle of elemental attacks. Such oozes have a small mirrorlight crystal at their center, and are usually found in close proximity or in contact with mirrorlight crystal formations. Proximity to the ooze can even activate mirrorlight illusions just like the crystals themselves (See the Example Mirrorlight Illusions table in this document). This also allows them to manipulate and reflect light in such a way that they can become invisible. Combined, these abilities heighten its threat as an ambush predator, making it lethal for the unwary or unprepared.

```statblock
"name": "Prismatic Ooze (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"modifier": !!int "-2"
"stats":
  - !!int "17"
  - !!int "6"
  - !!int "18"
  - !!int "1"
  - !!int "6"
  - !!int "1"
"speed": "25 ft., climb 25 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+1"
"damage_immunities": "one type determined by prismatic nature"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "5"
"traits":
  - "desc": "The ooze's Prismatic [[/5. Mechanics/Rules/Skills.md#Nature|Nature]] is\
      \ initially that of acid. Immediately after the ooze suffers acid, cold, fire,\
      \ lightning, necrotic, poison, or radiant damage, its nature changes to match\
      \ that type. When this occurs, the specified damage type in the ooze's damage\
      \ immunities, its Prismatic Form trait, and its pseudopod attack are each changed\
      \ to match the triggering damage type.\n\nIf the ooze suffers damage of two\
      \ or more of these types simultaneously, the ooze chooses which type to adopt.\
      \ The damage type for this property returns to acid when the ooze completes\
      \ a short or long rest."
    "name": "Prismatic Nature"
  - "desc": "The ooze has advantage on attack rolls against any creature it has [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]]."
    "name": "Ambusher"
  - "desc": "The ooze absorbs the optical qualities of crystals it touches. While\
      \ the ooze is touching a transparent or translucent crystal formation of its\
      \ size or larger, it is considered to be lightly obscured from any creatures\
      \ that might see it. If the ooze is touching such a crystal at the end of its\
      \ turn, and has not moved or taken an action since the start of its last turn,\
      \ it is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]] instead. The\
      \ invisibility lasts until the ooze moves, takes an action, or is no longer\
      \ touching the crystal formation."
    "name": "Crystal Transparency"
  - "desc": "A creature or object that touches the ooze or hits it with a melee attack\
      \ while within 5 feet of it takes 5 (d10) damage of the type associated with\
      \ the ooze's Prismatic [[/5. Mechanics/Rules/Skills.md#Nature|Nature]] trait."
    "name": "Prismatic Form"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) bludgeoning damage plus 18 (4d8) damage of the type associated with the\
      \ ooze's Prismatic [[/5. Mechanics/Rules/Skills.md#Nature|Nature]] trait."
    "name": "Pseudopod"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
