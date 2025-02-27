---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/8
  - monster/size/large
  - monster/type/construct
aliases:
  - Vault Scanner
---
# [[5. Mechanics\Bestiary\Construct\Vault Scanner (GRIFFONSSADDLEBAG3).md|Vault Scanner]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Vault scanners are the mechanical constructs that patrol the vaults and hallways of the Mountain of Gold. Their purpose is to find intruders and validate any bank-going clientelle.

```statblock
"name": "Vault Scanner (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "18"
- !!int "14"
- !!int "19"
- !!int "6"
- !!int "20"
- !!int "3"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Perception": !!int "11"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "blindsight 60 ft., passive Perception 21"
"languages": "Common"
"cr": "8"
"traits":
- "desc": "The vault scanner has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The vault scanner's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "The vault scanner deals double damage to objects and structures."
  "name": "Siege Monster"
- "desc": "The vault scanner can't be [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]].\
    \ In addition, it can take the Search action as a bonus action on each of its\
    \ turns."
  "name": "Vigilant"
"actions":
- "desc": "The vault scanner uses its Aim Lock. It then makes two attacks with its\
    \ slam or beam."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 18 (4d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- "desc": "Ranged Spell Attack: +7 to hit, range 60 ft., one target. Hit: 13 (2d12)\
    \ radiant damage."
  "name": "Beam"
- "desc": "The vault scanner attempts to lock onto a creature it can see within 60\
    \ feet of it. The target must make a DC 16 Dexterity saving throw. On a failed\
    \ save, the vault scanner has advantage on attack rolls against the target until\
    \ the start of its next turn."
  "name": "Aim Lock"
- "desc": "The vault scanner charges its cannon and unleashes a single massive beam\
    \ of energy in a 5-foot-wide line that is 60 feet long. Each creature in the area\
    \ must make a DC 15 Dexterity saving throw, taking 32 (5d12) radiant damage on\
    \ a failed save, or half as much damage on a successful one. A target is disintegrated\
    \ if this damage leaves it with 0 hit points."
  "name": "Laser Cannon (Recharge 5-6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
