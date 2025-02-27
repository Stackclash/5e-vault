---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1-4
  - monster/size/tiny
  - monster/type/monstrosity
aliases:
  - Wolpertinger
---
# [[5. Mechanics\Bestiary\Monstrosity\Wolpertinger (KPDM).md|Wolpertinger]]
*Source: Deep Magic p. 300*

Woodland-dwelling monstrosities, wolpertingers are popular familiars among gnomish wizards but will serve just about any spellcaster if they are treated with care and respect. Since these creatures are more powerful than a standard familiar, 25 gp worth of holly berries must also be expended as part of the casting of the [[5. Mechanics/Spells/Find Familiar.md|find familiar]] spell.

## Familiar

If a wolpertinger agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the wolpertinger senses, as long as they are within 1 mile of each other. While the wolpertinger is within 10 feet of its master, the master gains the wolpertinger's Standing Leap trait. If its master causes it physical harm, or if it simply chooses to do so, the wolpertinger will abandon its service as a familiar, breaking the telepathic bond.

```statblock
"name": "Wolpertinger (KPDM)"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "9"
"hit_dice": "2d4 + 4"
"stats":
- !!int "6"
- !!int "16"
- !!int "14"
- !!int "5"
- !!int "12"
- !!int "6"
"speed": "30 ft., burrow 10 ft., fly 30 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "If the wolpertinger moves at least 10 feet straight toward a target and\
    \ then hits it with a gore attack on the same turn, the target takes an extra\
    \ 2 (1d4) piercing damage."
  "name": "Charge"
- "desc": "The wolpertinger doesn't provoke an [[/5. Mechanics/Rules/Actions.md#Opportunity%20Attack|opportunity attack]]\
    \ when it flies out of an enemy's reach."
  "name": "Flyby"
- "desc": "The wolpertinger's long jump is up to 20 feet and its high jump is up to\
    \ 10 feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage."
  "name": "Gore"
- "desc": "The wolpertinger emits a piercing shriek. Each creature within 30 feet\
    \ that can hear the wolpertinger must succeed on a DC 13 Constitution saving throw\
    \ or be [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]] for 1 minute. A beast\
    \ with an Intelligence of 4 or lower that is in the area must also succeed on\
    \ a DC 13 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ until the start of its next turn."
  "name": "Keening (Recharge 6)"
"source":
- "KPDM"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/CCodex/wolpertinger_token.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
