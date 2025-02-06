---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: null
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(KPDM)
  - monster\Cr\1 8
  - monster\Size\Tiny
  - monster\Type\Beast
aliases:
  - Wharfling
---
# [[5. Mechanics\Bestiary\Beast\Wharfling (KPDM).md|Wharfling]]
*Source: Deep Magic p. 294*

Tiny, doglike creatures with slippery, hairless skin and webbed claws, wharflings are occasionally chosen as familiars by spellcasters who are unconcerned about their personal appearance, who frequently engage in acts of larceny, or who dwell in watery conditions.

```statblock
"name": "Wharfling (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "6"
"hit_dice": "4d4 - 4"
"stats":
- !!int "4"
- !!int "16"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "8"
"speed": "30 ft., climb 30 ft., swim 20 ft."
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/8"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 10). Until this grapple ends, the wharfling can't use its bite on\
    \ another target. While the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
    \ the wharfling's bite attack hits it automatically."
  "name": "Bite"
- "desc": "A wharfling that has an opponent [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ at the start of its turn can make a Dexterity (Sleight of Hand) check as a bonus\
    \ action against a DC equal to 10 + the [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ target's Dexterity modifier. On a successful check, the wharfling steals a small\
    \ metallic object from the target, and the theft is unnoticed if the check result\
    \ equals or exceeds the target's passive Perception. A wharfling flees with its\
    \ treasure."
  "name": "Pilfer"
"source":
- "KPDM"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/ToB/token/Wharfling.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
