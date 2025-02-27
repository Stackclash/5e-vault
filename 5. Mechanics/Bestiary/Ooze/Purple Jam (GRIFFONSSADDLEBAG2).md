---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Small
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/1
  - monster/size/small
  - monster/type/ooze
aliases:
  - Purple Jam
---
# [[5. Mechanics\Bestiary\Ooze\Purple Jam (GRIFFONSSADDLEBAG2).md|Purple Jam]]
*Source: The Griffon's Saddlebag, Book 2 p. 360*

A small and yet pernicious ooze, the purple jam looks like a mushy globule of smashed grapes or dark berries. They mindlessly consume plantlife, leading some to speculate that they originated from a goodberry spell gone wrong. Their wanderings often lead them to spaces like taverns where their natural camouflage is uniquely suited, and food is plentiful. A persistent creature, it's surprisingly difficult to destroy—especially for the type of magical practitioners typically found in the small towns and cities they prefer.

```statblock
"name": "Purple Jam (GRIFFONSSADDLEBAG2)"
"size": "Small"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "30"
"hit_dice": "4d6 + 16"
"stats":
- !!int "13"
- !!int "10"
- !!int "18"
- !!int "3"
- !!int "6"
- !!int "3"
"speed": "20 ft., climb 20 ft., swim 20 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": "understands Druidic but can't speak"
"cr": "1"
"traits":
- "desc": "The jam can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "While the jam remains motionless, it is indistinguishable from a mass of\
    \ grape jam."
  "name": "False Appearance"
- "desc": "The jam has advantage on saving throws against spells of 1st level or lower."
  "name": "Limited Spell Resistance"
- "desc": "The jam regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point. If the jam takes necrotic damage, this trait doesn't function at\
    \ the start of the jam's next turn."
  "name": "Regeneration"
- "desc": "If the jam dies, it regains all its hit points and becomes active again\
    \ in 24 hours unless its remains are eaten, destroyed, or targeted by a [[5. Mechanics/Spells/Dispel Magic.md|dispel\
    \ magic]] spell."
  "name": "Rejuvenation"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage, plus 3 (1d6) poison damage."
  "name": "Pseudopod"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
