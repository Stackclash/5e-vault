---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 
size: Medium
tags:
- compendium/src/5e/kpdm
- monster/cr/2
- monster/size/medium
- monster/type/monstrosity
aliases: ["Shadow Mastiff"]
---
# [Shadow Mastiff](compendium\bestiary\monstrosity/shadow-mastiff-kpdm.md)
*Source: Deep Magic p. 247*

Shunning sunlight, these hounds are usually met as a pack. Some faiths devoted to deities of gloom and night, such as that of Shar in the Forgotten Realms, perform unholy rites to summon shadow mastiffs to work as temple sentinels and bodyguards.

## Shadow Mastiffs

Shadow mastiffs—hounds of the Shadowfell—move invisibly through the shadows, always on the hunt.

```statblock
"name": "Shadow Mastiff (KPDM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "17"
- !!int "13"
- !!int "17"
- !!int "4"
- !!int "12"
- !!int "13"
"speed": "50 ft."
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "6"
  "Survival": !!int "5"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "understands Common but does not speak"
"cr": "2"
"traits":
- "desc": "When a shadow mastiff howls, all creatures within a 300-foot radius who\
    \ are not evil monstrosities must succeed on a DC 13 Wisdom saving throw or be\
    \ panicked. On each of its turns, a panicked creature must take the [Dash](/compendium/rules/actions.md#Dash)\
    \ action and move away from the mastiff by the safest and shortest route, if such\
    \ a route exists. If the target moves out of range of this ability, the effect\
    \ ends."
  "name": "Bay"
- "desc": "The shadow mastiff has advantage on Wisdom checks that rely on their sense\
    \ of smell."
  "name": "Scent"
- "desc": "Shadow mastiffs can hide in any condition of illumination other than bright\
    \ light."
  "name": "Shadow Blend"
- "desc": "Whenever a shadow mastiff hits an opponent with a bite attack for the first\
    \ time on a turn, the opponent falls [prone](/compendium/rules/conditions.md#Prone)\
    \ unless it succeeds on a DC 15 Dexterity saving throw. On a failed save, the\
    \ shadow mastiff makes an immediate second bite attack as a bonus action."
  "name": "Trip"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```