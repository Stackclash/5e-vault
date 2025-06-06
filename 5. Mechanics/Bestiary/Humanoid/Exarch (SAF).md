---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: Unknown
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/unknown
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Exarch
---
# [[5. Mechanics\Bestiary\Humanoid\Exarch (SAF).md|Exarch]]
*Source: Strongholds and Followers p. 80*

```statblock
"name": "Exarch (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "Light"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": "+3"
  - "dexterity": "+3"
  - "constitution": "+3"
  - "intelligence": "+3"
  - "wisdom": "+6"
  - "charisma": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "The diabolist casts the [[5. Mechanics/Spells/Eldritch Blast.md|eldritch blast]]\
      \ cantrip (+6 to hit).\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe diabolist casts the [[5. Mechanics/Spells/Blink.md|blink]]\
      \ spell."
    "name": "Blink (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe diabolist casts the [[5. Mechanics/Spells/Greater Invisibility.md|greater\
      \ invisibility]] spell."
    "name": "Greater Invisibility (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe diabolist casts the [[5. Mechanics/Spells/Dominate Person.md|dominate\
      \ person]] spell (spell save DC 15)."
    "name": "Dominate Person (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
