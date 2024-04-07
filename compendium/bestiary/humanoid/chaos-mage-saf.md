---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Chaos Mage"]
---
# [Chaos Mage](compendium/bestiary/humanoid/chaos-mage-saf.md)
*Source: Strongholds and Followers p. 79*

```statblock
"name": "Chaos Mage (SaF)"
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
  "Wisdom": !!int "3"
  "Intelligence": !!int "3"
  "Strength": !!int "3"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "5"
  "Persuasion": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Roll dice: 1d4|avg (1d4): 1 = [acid splash](compendium/spells/acid-splash.md),\
    \ 2 = [fire bolt](compendium/spells/fire-bolt.md), 3 = [poison spray](compendium/spells/poison-spray.md),\
    \ [ray of frost](compendium/spells/ray-of-frost.md) (dice: d20+6 (+6 to hit),\
    \ spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\nAt\
    \ 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nRoll dice: 1d4|avg (1d4): 1 =\
    \ [blur](compendium/spells/blur.md), 2 = [enhance ability](compendium/spells/enhance-ability.md),\
    \ 3 = [invisibility](compendium/spells/invisibility.md), 4 = [mirror image](compendium/spells/mirror-image.md)\
    \ (dice: d20+6 (+6 to hit), spell save DC 13 at 3rd level, 14 at 5th level,\
    \ and 15 at 7th level)."
  "name": "Minor Chaos (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nRoll dice: 1d4|avg (1d4): 1 =\
    \ [fireball](compendium/spells/fireball.md), 2 = [lightning bolt](compendium/spells/lightning-bolt.md),\
    \ 3 = [sleet storm](compendium/spells/sleet-storm.md), 4 = [stinking cloud](compendium/spells/stinking-cloud.md)\
    \ (dice: d20+6 (+6 to hit), spell save DC 13 at 3rd level, 14 at 5th level,\
    \ and 15 at 7th level)."
  "name": "Chaos (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nRoll dice: 1d4|avg (1d4): 1 =\
    \ [blight](compendium/spells/blight.md), 2 = [ice storm](compendium/spells/ice-storm.md),\
    \ 3 = [polymorph](compendium/spells/polymorph.md), 4 = fire wall (dice: d20+6\
    \ (+6 to hit), spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
  "name": "Major Chaos (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```