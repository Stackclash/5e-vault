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
  - Chaos Mage
---
# [[5. Mechanics\Bestiary\Humanoid\Chaos Mage (SAF).md|Chaos Mage]]
*Source: Strongholds and Followers p. 79*

```statblock
"name": "Chaos Mage (SAF)"
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
  - "constitution": "+6"
  - "intelligence": "+3"
  - "wisdom": "+3"
  - "charisma": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Roll d4: 1 = [[5. Mechanics/Spells/Acid Splash.md|acid splash]], 2 = [[5. Mechanics/Spells/Fire Bolt.md|fire\
      \ bolt]], 3 = [[5. Mechanics/Spells/Poison Spray.md|poison spray]],\
      \ [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]] (+6 to hit, spell save DC\
      \ 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\nAt 7th level, retainers\
      \ can take two signature attacks per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nRoll d4: 1 = [[5. Mechanics/Spells/Blur.md|blur]],\
      \ 2 = [[5. Mechanics/Spells/Enhance Ability.md|enhance ability]], 3 = [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
      \ 4 = [[5. Mechanics/Spells/Mirror Image.md|mirror image]] (+6 to hit, spell save\
      \ DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
    "name": "Minor Chaos (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nRoll d4: 1 = [[5. Mechanics/Spells/Fireball.md|fireball]],\
      \ 2 = [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]], 3 = [[5. Mechanics/Spells/Sleet Storm.md|sleet storm]],\
      \ 4 = [[5. Mechanics/Spells/Stinking Cloud.md|stinking cloud]] (+6 to hit, spell\
      \ save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
    "name": "Chaos (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nRoll d4: 1 = [[5. Mechanics/Spells/Blight.md|blight]],\
      \ 2 = [[5. Mechanics/Spells/Ice Storm.md|ice storm]], 3 = [[5. Mechanics/Spells/Polymorph.md|polymorph]],\
      \ 4 = [[5. Mechanics/Spells/Wall Of Fire.md|fire wall]] (+6 to hit, spell save\
      \ DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
    "name": "Major Chaos (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
