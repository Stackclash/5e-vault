---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'underdark, forest, swamp, urban, desert'
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Swamp
  - monster\Environment\Underdark
  - monster\Environment\Urban
  - monster\Size\Large
  - monster\Type\Beast
aliases:
  - Giant Spider
---
# [[5. Mechanics\Bestiary\Beast\Giant Spider.md|Giant Spider]]
*Source: Monster Manual p. 328, Curse of Strahd, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

To snare its prey, a giant spider spins elaborate webs or shoots sticky strands of webbing from its abdomen. Giant spiders are most commonly found underground, making their lairs on ceilings or in dark, web-filled crevices. Such lairs are often festooned with web cocoons holding past victims.

```statblock
"name": "Giant Spider"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"stats":
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "2"
- !!int "11"
- !!int "4"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "7"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in contact with a web, the spider knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8\
    \ + 3) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful\
    \ one. If the poison damage reduces the target to 0 hit points, the target is\
    \ stable but [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for 1 hour,\
    \ even after regaining hit points, and is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] in this way."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit:\
    \ The target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] by webbing.\
    \ As an action, the [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] target\
    \ can make a DC 12 Strength check, bursting the webbing on a success. The webbing\
    \ can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage;\
    \ immunity to bludgeoning, poison, and psychic damage)."
  "name": "Web (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "TCE"
- "VEoR"
"image": "5. Mechanics/Bestiary/Beast/token/giant-spider.webp"
```
^statblock

## Environment

underdark, forest, swamp, urban, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
