---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: null
size: Large
tags:
  - compendium/src/5e/veor
  - monster/cr/11
  - monster/size/large
  - monster/type/fiend/demon
aliases:
  - Degloth
---
# [[5. Mechanics/Bestiary/Fiend/Degloth (VEOR).md|Degloth]]
*Source: Vecna: Eve of Ruin p. 218*

Degloths are massive, blue, bipedal demons with razor-studded fists. They are commonly used as shock troops on the front lines of wars waged in the Abyss and other Outer Planes. Degloths gravitate toward violence and mayhem without caring about the reasons behind the bloodshed. They enjoy ripping their enemies limb from limb using their razor-studded fists, which are equally adept at slashing foes and crushing the life from them.

```statblock
"name": "Degloth (VEOR)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "typically  Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "133"
"hit_dice": "14d10 + 56"
"stats":
- !!int "23"
- !!int "17"
- !!int "18"
- !!int "6"
- !!int "11"
- !!int "9"
"speed": "40 ft., climb 40 ft."
"saves":
  "Strength": !!int "10"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "10"
  "Perception": !!int "4"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Abyssal, telepathy 120 ft."
"cr": "11"
"traits":
- "desc": "The degloth has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The degloth makes two Razor Fist attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17\
    \ (2d10 + 6) slashing damage, and if the target is a Medium or smaller creature,\
    \ the target has the [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] condition\
    \ (escape DC 18). Until this grapple ends, the target has the [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
    \ condition, and the degloth can't use this fist to grapple another target. The\
    \ degloth has two fists."
  "name": "Razor Fist"
"bonus_actions":
- "desc": "The degloth targets one creature currently [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ by it. The target must make a DC 18 Strength saving throw, taking 15 (2d8 +\
    \ 6) bludgeoning damage on a failed save or half as much damage on a successful\
    \ one."
  "name": "Crush"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Fiend/token/degloth-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
