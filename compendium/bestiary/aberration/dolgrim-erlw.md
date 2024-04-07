---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/erlw
- monster/cr/1-2
- monster/size/small
- monster/type/aberration
statblock: inline
aliases: ["Dolgrim"]
---
# [Dolgrim](compendium/bestiary/aberration/dolgrim-erlw.md)
*Source: Eberron: Rising from the Last War p. 291*

Dolgrims are squat, deformed things. Warped by the daelkyr, a dolgrim is essentially two goblins crushed into one creature, their misshapen body boasting four arms and a pair of twisted mouths that gibber and slather at the front of a headless torso. The two mouths of a dolgrim sometimes carry on demented conversations with one another. However, a dolgrim has only a single personality—sadistic, bloodthirsty, and brutally dedicated to serving itself.

Small numbers of these creatures sometimes make their way to the surface, often under the command of dolgaunts, and undertaking missions advancing the inscrutable schemes of their malevolent masters. But great hordes of dolgrims remain clustered in Khyber with the daelkyr, dreaming of the day when they will be released into Eberron to feast and destroy.

```statblock
"name": "Dolgrim (ERLW)"
"size": "Small"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "10"
- !!int "8"
"speed": "30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Deep Speech, Goblin"
"cr": "1/2"
"traits":
- "desc": "The dolgrim has advantage on saving throws against being [blinded](/compendium/rules/conditions.md#blinded),\
    \ [charmed](/compendium/rules/conditions.md#charmed), [deafened](/compendium/rules/conditions.md#deafened),\
    \ [frightened](/compendium/rules/conditions.md#frightened), [stunned](/compendium/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/compendium/rules/conditions.md#unconscious)."
  "name": "Dual Consciousness"
"actions":
- "desc": "The dolgrim makes three attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "Morningstar"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing\
    \ damage, or dice: 1d8 + 2|avg (1d8 + 2) piercing damage if used with two\
    \ hands to make a melee attack."
  "name": "Spear"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
"source":
- "ERLW"
"image": "compendium/bestiary/aberration/token/dolgrim-erlw.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```