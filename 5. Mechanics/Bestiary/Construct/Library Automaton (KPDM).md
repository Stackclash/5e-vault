---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: null
size: Small
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1-2
  - monster/size/small
  - monster/type/construct
aliases:
  - Library Automaton
---
# [[5. Mechanics\Bestiary\Construct\Library Automaton (KPDM).md|Library Automaton]]
*Source: Deep Magic p. 298*

These strange-looking constructs are unusually intelligent for creatures of their type and will sometimes serve a lawful or neutral spellcaster (though never a chaotic one) as a familiar.

## Familiar

If a library automaton agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the library automaton senses, as long as they are within 1 mile of each other. While the automaton is within 10 feet of its master, the master gains the automaton's immunity to poison damage and the [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] condition. If its master causes it physical harm, or if it simply chooses to do so, the automaton will abandon its service as a familiar, breaking the telepathic bond.

```statblock
"name": "Library Automaton (KPDM)"
"size": "Small"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "1"
"stats":
  - !!int "8"
  - !!int "13"
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft., truesight 10 ft., passive Perception 11"
"languages": "Common"
"cr": "1/2"
"traits":
  - "desc": "A small door on the chest of the library automaton opens into an extradimensional\
      \ bookcase. This bookcase functions exactly as a bag of holding, except that\
      \ it can store only written materials, such as books, scrolls, tomes, parchment,\
      \ folders, notebooks, spellbooks, and the like."
    "name": "Extradimensional Book Repository"
"actions":
  - "desc": "The library automaton chooses one creature it can see within 40 feet.\
      \ The target must succeed on a DC 12 Intelligence saving throw or take 9 (3d4\
      \ + 2) psychic damage and have disadvantage on Intelligencebased checks, saving\
      \ throws, and attack rolls until the end of its next turn. On a successful save,\
      \ the target takes half as much damage and suffers no other effect."
    "name": "Gaze of Confusion"
  - "desc": "This ability functions as the [[5. Mechanics/Spells/Mage Hand.md|mage hand]]\
      \ cantrip but can be used only on books, scrolls, maps, and other printed or\
      \ written materials."
    "name": "Bibliotelekinesis"
"source":
  - "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
