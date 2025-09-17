---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: Unknown
environments: 
size: Medium
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
aliases: 
- Exarch
---
# [Exarch](compendium/bestiary/humanoid/exarch-saf.md)
*Source: Strongholds and Followers p. 80*

```statblock
"name": "Exarch (SaF)"
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
  - "strength": !!int "3"
  - "dexterity": !!int "3"
  - "constitution": !!int "3"
  - "intelligence": !!int "3"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[History](/compendium/rules/skills.md#History)"
    "desc": "+5"
  - "name": "[Nature](/compendium/rules/skills.md#Nature)"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "The diabolist casts the [eldritch blast](/compendium/spells/eldritch-blast.md)\
      \ cantrip (+6 to hit).\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe diabolist casts the [blink](/compendium/spells/blink.md)\
      \ spell."
    "name": "Blink (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe diabolist casts the [greater\
      \ invisibility](/compendium/spells/greater-invisibility.md) spell."
    "name": "Greater Invisibility (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe diabolist casts the [dominate\
      \ person](/compendium/spells/dominate-person.md) spell (spell save DC 15)."
    "name": "Dominate Person (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```