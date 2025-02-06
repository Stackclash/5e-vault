---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: arctic
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\3
  - monster\Environment\Arctic
  - monster\Size\Large
  - monster\Type\Monstrosity
aliases:
  - Winter Wolf
---
# [[5. Mechanics\Bestiary\Monstrosity\Winter Wolf.md|Winter Wolf]]
*Source: Monster Manual p. 340. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

The arctic-dwelling winter wolf is as large as a dire wolf but has snow-white fur and pale blue eyes. Frost giants use these evil creatures as guards and hunting companions, putting the wolves' deadly breath weapon to use against their foes. Winter wolves communicate with one another using growls and barks, but they speak Common and Giant well enough to follow simple conversations.

```statblock
"name": "Winter Wolf"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "7"
- !!int "12"
- !!int "8"
"speed": "50 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "5"
"damage_immunities": "cold"
"senses": "passive Perception 15"
"languages": "Common, Giant, Winter Wolf"
"cr": "3"
"traits":
- "desc": "The wolf has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "The wolf has advantage on an attack roll against a creature if at least\
    \ one of the wolf's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
  "name": "Pack Tactics"
- "desc": "The wolf has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks made to hide in snowy terrain."
  "name": "Snow Camouflage"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage. If the target is a creature, it must succeed on a DC 14\
    \ Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Bite"
- "desc": "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature\
    \ in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Cold Breath (Recharge 5-6)"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/winter-wolf.webp"
```
^statblock

## Environment

arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
