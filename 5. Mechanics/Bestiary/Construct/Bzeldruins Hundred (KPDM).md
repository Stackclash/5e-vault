---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Medium
tags:
  - compendium/src/5e/kpdm
  - monster/cr/7
  - monster/size/medium
  - monster/type/construct
aliases:
  - Bzeldruin's Hundred
---
# [[5. Mechanics\Bestiary\Construct\Bzeldruins Hundred (KPDM).md|Bzeldruin's Hundred]]
*Source: Deep Magic p. 286*

*Spread out across the ground before you is an impressive collection of close to a hundred wooden miniatures. Each figure resembles an adult male, an adult female, or a child. Most seem to be human, but you can see elves, dwarves, halflings, and even a few centaurs and other creatures scattered among them. As soon as you notice them, the figures begin to mimic your every movement.*

Bzeldruin's Hundred is a group of one hundred wooden miniature figures created by the gnomish transmuter Bzeldruin Tiwaskar to represent his friends and family. Bzeldruin created them in celebration of his life's many achievements, but their creation was flawed and they became inhabited by an evil spirit that sought to slay the very people they were modeled after. Unable to bring himself to destroy them, Bzeldruin tried to seal them away in the depths of his tower—and although he succeeded, the effort cost him his life. Now his tower lies deserted, enticing explorers with the promise of powerful magic if they can overcome the horrors within.

```statblock
"name": "Bzeldruins Hundred (KPDM)"
"size": "Medium"
"type": "construct"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "88"
"hit_dice": "16d4 + 48"
"stats":
- !!int "1"
- !!int "20"
- !!int "16"
- !!int "5"
- !!int "10"
- !!int "1"
"speed": "10 ft."
"damage_resistances": "fire, lightning, necrotic, radiant"
"damage_immunities": "cold; poison; psychic; bludgeoning, piercing, slashing damage\
  \ from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]], [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages but can't speak"
"cr": "7"
"traits":
- "desc": "Bzeldruin's Hundred is immune to any spell or effect that would alter its\
    \ form."
  "name": "Immutable Form"
- "desc": "Bzeldruin's Hundred has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "Weapon attacks made by Bzeldrin's Hundred are magical."
  "name": "Magic Weapons"
- "desc": "The scores of individual figures that make up the swarm can perfectly mimic\
    \ the actions of a single humanoid creature within 30 feet as an action. The swarm\
    \ can mimic only one creature at a time, and the act of doing so grants the construct\
    \ advantage on attack rolls and saving throws it makes involving the mimicked\
    \ creature until the start of the construct's next turn."
  "name": "Perfect Mimicry"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny figurine. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
- "desc": "If Bzeldruin's Hundred is reduced to 0 hit points, it collapses and disintegrates\
    \ into dust, then re-forms 24 hours later in the same location with its full hit\
    \ points. There is no way to stop this rejuvenation from happening, short of a\
    \ carefully worded [[5. Mechanics/Spells/Wish.md|wish]] spell or divine intervention."
  "name": "Rejuvenation"
"actions":
- "desc": "Melee Weapon Attack: +8 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 33 (8d6 + 5) bludgeoning damage. If the swarm is reduced to half\
    \ its hit points or fewer, the bludgeoning damage from its slam attack is 19 (4d6\
    \ + 5)."
  "name": "Slam"
- "desc": "Any Medium or smaller creature damaged by the swarm must make a DC 15 Strength\
    \ saving throw. On a failed save, several of the figures cling to its body, reducing\
    \ its speed by 10 feet and giving it disadvantage on Dexterity saving throws and\
    \ Dexterity checks. A creature can repeat the save at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Hindering Strike"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
