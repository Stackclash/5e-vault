---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: 
size: Huge
tags:
- compendium/src/5e/veor
- monster/cr/8
- monster/size/huge
- monster/type/undead
aliases: ["Bone Roc"]
---
# [Bone Roc](compendium\bestiary\undead/bone-roc-veor.md)
*Source: Vecna: Eve of Ruin p. 211*

A bone roc is a birdlike Undead that can incorporate the bones of multiple flying creatures. Despite their name, bone rocs aren't always reanimated skeletons of rocs. You may customize a bone roc by rolling on the Bone Roc Sources table to determine the type of bones used and how that affects its stat block.

`dice: [](bone-roc-veor.md#^bone-source)`

| dice: d6 | Bone Source |
|----------|-------------|
| 1 | Axe Beak. The bone roc's walking speed is 50 feet. |
| 2 | Cockatrice. A creature hit by the bone roc's Beak attack must succeed on a DC 14 Constitution saving throw or have its speed reduced by 10 feet until the start of the bone roc's next turn. |
| 3 | Giant Owl. The bone roc's modifier for Dexterity ([Stealth](/compendium/rules/skills.md#Stealth)) checks is +8. |
| 4 | Peryton. The bone roc has resistance to slashing damage from nonmagical attacks. |
| 5 | Pteranodon. The bone roc doesn't provoke an opportunity attack when it flies out of an enemy's reach. |
| 6 | Roc. The bone roc's size is Gargantuan, and its flying speed is 120 feet. Its Hit Dice remain unchanged. |
^bone-source

```statblock
"name": "Bone Roc (VEoR)"
"size": "Huge"
"type": "undead"
"alignment": "typically  Neutral Evil"
"ac": !!int "15"
"hp": !!int "133"
"hit_dice": "14d12 + 42"
"stats":
- !!int "18"
- !!int "20"
- !!int "16"
- !!int "2"
- !!int "17"
- !!int "10"
"speed": "15 ft., fly 90 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "6"
"skillsaves":
  "Perception": !!int "6"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": ""
"cr": "8"
"actions":
- "desc": "The bone roc makes one Beak attack and two Talons attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 10 (3d6) necrotic damage."
  "name": "Talons"
"source":
- "VEoR"
"image": "compendium/bestiary/undead/token/bone-roc-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```