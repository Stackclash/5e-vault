---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: desert
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/2
  - monster/environment/desert
  - monster/size/medium
  - monster/type/aberration
aliases:
  - Berbalang
---
# [[5. Mechanics\Bestiary\Aberration\Berbalang (MPMM).md|Berbalang]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 61, Mordenkainen's Tome of Foes p. 120*

Berbalangs creep across the [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]] remains of dead gods adrift on the Astral Plane. Obsessed with gathering secrets, both from the gods they inhabit and from the bones of dead creatures, they call forth the spirits of the dead and force them to divulge what they learned in life.

Berbalangs prefer to speak only to dead things, and specifically only to the spirits they call forth in the hope of learning secrets. They record their stories on the bones that once belonged to these creatures, thus preserving the information they gain.

Pursuit of knowledge drives everything berbalangs do. Although they mostly learn their secrets from the dead, they aren't above spying on the living to take knowledge from them as well. A berbalang can create a spectral duplicate of itself and send the duplicate out to gather information on other planes by watching places where the gods and their servants gather. When a berbalang is perceiving its environment through its duplicate, its actual body is [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]] and can't protect itself. Thus, a berbalang typically uses its duplicate for only a short time before returning its consciousness to its body.

The knowledge that berbalangs accumulate makes them great sources of information for powerful people traveling the planes. Berbalangs ignore petitioners, however, unless they come bearing a choice secret or the bones of a particularly interesting creature. Some githyanki have been able to strike deals with the creatures, using berbalangs to spy on their enemies and to watch over their creches on the Material Plane.

```statblock
"name": "Berbalang (MPMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Typically  Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "49"
"hit_dice": "14d8 - 14"
"modifier": !!int "3"
"stats":
  - !!int "9"
  - !!int "16"
  - !!int "9"
  - !!int "17"
  - !!int "11"
  - !!int "10"
"speed": "30 ft., fly 40 ft."
"saves":
  - "dexterity": "+5"
  - "intelligence": "+5"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+5"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "all"
"cr": "2"
"actions":
  - "desc": "The berbalang makes one Bite attack and one\n\nClaw attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10\
      \ + 3) piercing damage plus 4 (d8) psychic damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
      \ + 3) slashing damage."
    "name": "Claw"
  - "desc": "The berbalang casts one of the following spells, requiring no material\
      \ components and using Intelligence as the spellcasting ability:\n\nAt will:\
      \ [[5. Mechanics/Spells/Speak With Dead.md|speak with dead]]\n\n1/day: [[5. Mechanics/Spells/Plane Shift.md|plane\
      \ shift]] (self only)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The berbalang creates one spectral duplicate of itself in an unoccupied\
      \ space it can see within 60 feet of it. While the duplicate exists, the berbalang\
      \ is [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]. A berbalang\
      \ can have only one duplicate at a time. The duplicate disappears when it or\
      \ the berbalang drops to 0 hit points or when the berbalang dismisses it (no\
      \ action required).\n\nThe duplicate has the same statistics and knowledge as\
      \ the berbalang, and everything experienced by the duplicate is known by the\
      \ berbalang. All damage dealt by the duplicate's attacks is psychic damage."
    "name": "Spectral Duplicate (Recharges after a Short or Long Rest)"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Aberration/token/berbalang-mpmm.webp"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
