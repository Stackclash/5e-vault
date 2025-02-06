---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: Unknown
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(SAF)
  - monster\Cr\Unknown
  - monster\Size\Medium
  - monster\Type\Humanoid\Any Race
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
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "3"
  "Wisdom": !!int "6"
  "Intelligence": !!int "3"
  "Strength": !!int "3"
  "Constitution": !!int "3"
"skillsaves":
  "Nature": !!int "5"
  "History": !!int "5"
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
