---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1
  - monster/environment/forest
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/underdark
  - monster/size/small
  - monster/type/dragon
statblock: inline
aliases:
  - Kobold Dragonshield
---
# [[5. Mechanics\Bestiary\Dragon\Kobold Dragonshield.md|Kobold Dragonshield]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 163, Volo's Guide to Monsters p. 165*

> [!quote]- A quote from Mordenkainen  
> 
> Believe it or not, I like kobolds. I find their oscillation between bravery an cowardice endlessly entertaining. In fact,I'd say kobolds are proof of the universe's most fundamental lesson: there is always something bigger than you.

Kobold dragonshields are champions of their people. Almost all dragonshields begin life as normal kobolds, then are chosen by a dragon and invested with power for the purpose of protecting the dragon's eggs, but once every few years a kobold hatches with an innate version of the dragonshield's abilities. In either case, a dragonshield is skilled at hand-to-hand combat and bears a shield made of dragon scales, as well as scars from desperate fights.

Dragonshields know they have a place of honor among those who venerate dragons, but—being kobolds at heart—most of them feel unworthy of their status and are desperate to prove themselves deserving of it. But they also have the ability to rally in the face of certain death, inspiring others to follow them into battle.

```statblock
"name": "Kobold Dragonshield"
"size": "Small"
"type": "dragon"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "44"
"hit_dice": "8d6 + 16"
"stats":
- !!int "12"
- !!int "15"
- !!int "14"
- !!int "8"
- !!int "9"
- !!int "10"
"speed": "20 ft."
"skillsaves":
  "Perception": !!int "1"
"damage_resistances": "see Dragon's Resistance below"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Draconic"
"cr": "1"
"traits":
- "desc": "The kobold has resistance to a type of damage based on the color of dragon\
    \ that invested it with power (choose or roll a d10): 1–2, acid (black or copper);\
    \ 3–4, cold (silver or white); 5–6, fire (brass, gold, or red); 7–8, lightning\
    \ (blue or bronze); 9–10, poison (green)."
  "name": "Dragon's Resistance"
- "desc": "If the kobold is [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]] by an effect that\
    \ allows a saving throw, it can repeat the save at the start of its turn to end\
    \ the effect on itself and all kobolds within 30 feet of it. Any kobold that benefits\
    \ from this trait (including the dragonshield) has advantage on its next attack\
    \ roll."
  "name": "Heart of the Dragon"
- "desc": "The kobold has advantage on an attack roll against a creature if at least\
    \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
- "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "The kobold makes two Spear attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Dragon/token/kobold-dragonshield-mpmm.webp"
```
^statblock

## Environment

forest, hill, mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
