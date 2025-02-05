---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: 
size: Tiny
tags:
- compendium/src/5e/kpdm
- monster/cr/1-8
- monster/size/tiny
- monster/type/beast
aliases: ["Wharfling"]
---
# [Wharfling](compendium\bestiary\beast/wharfling-kpdm.md)
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
    \ + 3) piercing damage, and the target is [grappled](/compendium/rules/conditions.md#Grappled)\
    \ (escape DC 10). Until this grapple ends, the wharfling can't use its bite on\
    \ another target. While the target is [grappled](/compendium/rules/conditions.md#Grappled),\
    \ the wharfling's bite attack hits it automatically."
  "name": "Bite"
- "desc": "A wharfling that has an opponent [grappled](/compendium/rules/conditions.md#Grappled)\
    \ at the start of its turn can make a Dexterity (Sleight of Hand) check as a bonus\
    \ action against a DC equal to 10 + the [grappled](/compendium/rules/conditions.md#Grappled)\
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