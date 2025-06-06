---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: 'arctic, everglacier'
size: Medium
tags:
  - compendium/src/5e/tgs1
  - monster/cr/8
  - monster/environment/arctic
  - monster/environment/everglacier
  - monster/size/medium
  - monster/type/humanoid/any-race
  - monster/type/humanoid/shapechanger
aliases:
  - Weremammoth
---
# [[5. Mechanics\Bestiary\Humanoid\Weremammoth (TGS1).md|Weremammoth]]
*Source: The Griffon's Saddlebag, Book 1 p. 176*

```statblock
"name": "Weremammoth (TGS1)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race, shapechanger"
"alignment": "Neutral"
"ac": !!int "10"
"ac_class": "13 from natural armor in mammoth or hybrid form"
"hp": !!int "114"
"hit_dice": "12d8 + 60"
"modifier": !!int "0"
"stats":
  - !!int "24"
  - !!int "10"
  - !!int "21"
  - !!int "11"
  - !!int "12"
  - !!int "11"
"speed": "30 ft. (40 ft. in mammoth or hybrid form)"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
"damage_immunities": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common (can't speak in mammoth form)"
"cr": "8"
"traits":
  - "desc": "The weremammoth can use its action to polymorph into a Large mammoth-humanoid\
      \ hybrid or into a Huge mammoth, or back into its true form, which is humanoid.\
      \ Its statistics, other than its size and AC, are the same in each form. Any\
      \ equipment it is wearing or carrying isn't transformed. It reverts to its true\
      \ form if it dies."
    "name": "Shapechanger"
  - "desc": "The weremammoth can tolerate temperatures as low as −50 degrees Fahrenheit\
      \ without protection."
    "name": "Adapted"
  - "desc": "If the weremammoth moves at least 20 feet straight toward a creature\
      \ and then hits it with a gore attack on the same turn, that target must succeed\
      \ on a DC 18 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ If the target is prone, the weremammoth can make one stomp attack against\
      \ it as a bonus action."
    "name": "Trampling Charge (Mammoth or Hybrid Form Only)"
"actions":
  - "desc": "In mammoth form, the weremammoth makes two gore attacks. In humanoid\
      \ form, it makes two attacks with its maul or three attacks with its spears.\
      \ In hybrid form, it can attack like a mammoth or a humanoid."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 16\
      \ (2d8 + 7) piercing damage."
    "name": "Gore (Mammoth or Hybrid Form Only)"
  - "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one prone creature. Hit:\
      \ 16 (2d8 + 7) bludgeoning damage."
    "name": "Stomp (Mammoth or Hybrid Form Only)"
  - "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 18\
      \ (2d10 + 7) bludgeoning damage."
    "name": "Maul (Humanoid or Hybrid Form Only)"
  - "desc": "Melee  or Ranged Weapon Attack: +10 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 10 (1d6 + 7) piercing damage, or 11 (1d8 + 7) piercing\
      \ damage if used with two hands to make a melee attack."
    "name": "Spear (Humanoid or Hybrid Form Only)"
"source":
  - "tgs1"
```
^statblock

## Environment

arctic, everglacier

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
