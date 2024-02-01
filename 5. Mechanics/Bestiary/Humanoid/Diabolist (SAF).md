---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Diabolist"]
---
# [[5. Mechanics/Bestiary/Humanoid/Diabolist (SAF).md|Diabolist]]
*Source: Strongholds and Followers p. 80*  

```statblock
"name": "Diabolist (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
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
  "Intimidation": !!int "5"
  "Deception": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The diabolist casts the [[5. Mechanics/Spells/Eldritch Blast.md|eldritch blast]]\
    \ cantrip (dice: d20+6 (+6 to hit)).\n\nAt 7th level, retainers can take two\
    \ signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe diabolist casts the [burning\
    \ hands](compendium/spells/burning-hands.md) spell (spell save DC 13 at 3rd level,\
    \ 14 at 5th level, and 15 at 7th level)."
  "name": "Burning Hands (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe diabolist casts the [[5. Mechanics/Spells/Fireball.md|fireball]]\
    \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
  "name": "Fireball (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe diabolist casts the [[5. Mechanics/Spells/Flame Strike.md|flame strike]]\
    \ spell (spell save DC 15)."
  "name": "Flame Strike (3/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```