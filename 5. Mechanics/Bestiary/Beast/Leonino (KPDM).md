---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1-8
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Leonino
---
# [[5. Mechanics\Bestiary\Beast\Leonino (KPDM).md|Leonino]]
*Source: Deep Magic p. 298*

Appearing as a wild cat with hawk-like wings, the leonino is a much sought-after familiar by elf wizards, particularly those who have an affinity for air or wind. Acquiring a leonino familiar requires the casting of the [[5. Mechanics/Spells/Find Familiar.md|find familiar]] spell, with an additional offering of fine fish and at least 200 feet of dyed red yarn. Once the spell is cast, the wizard makes a Charisma check contested by the leonino's Charisma check. If the leonino wins the contest, the creature flies off and the wizard is hated and distrusted by all feline creatures for at least a month.

## Familiar

If a leonino agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the leonino senses, as long as they are within 1 mile of each other. While the leonino is within 10 feet of its master, the master gains the leonino's Evasion trait. If its master causes it physical harm, or if it simply chooses to do so, the leonino will abandon its service as a familiar, breaking the telepathic bond.

```statblock
"name": "Leonino (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d4 + 6"
"stats":
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "8"
- !!int "8"
- !!int "12"
"speed": "30 ft., fly 40 ft."
"saves":
  "Wisdom": !!int "1"
  "Dexterity": !!int "5"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "1"
  "Persuasion": !!int "3"
"senses": "darkvision 30 ft., passive Perception 11"
"languages": "Elvish"
"cr": "1/8"
"traits":
- "desc": "The leonino doesn't provoke [[/5. Mechanics/Rules/Actions.md#Opportunity%20Attack|opportunity attacks]]\
    \ when it flies out of an enemy's reach."
  "name": "Flyby"
- "desc": "If the leonino is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the leonino instead takes no damage if\
    \ it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "The flight of a leonino is especially silent and difficult to notice in\
    \ forests and urban settings. It has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks made while flying in these areas."
  "name": "Silent Wings"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) slashing damage. If this is the first time the leonino has hit the target\
    \ within the past 24 hours, the target must succeed on a DC 10 Wisdom saving throw\
    \ or be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] by the leonino for\
    \ 1 hour."
  "name": "Bite"
"source":
- "KPDM"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/CCodex/leonino_token.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
