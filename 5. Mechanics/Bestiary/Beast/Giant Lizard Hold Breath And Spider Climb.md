---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: 'underdark, forest, swamp, desert, coastal'
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1 4
  - monster\Environment\Coast(AL)
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Swamp
  - monster\Environment\Underdark
  - monster\Size\Large
  - monster\Type\Beast
aliases:
  - Giant Lizard (Hold Breath and Spider Climb)
---
# [[5. Mechanics\Bestiary\Beast\Giant Lizard Hold Breath And Spider Climb.md|Giant Lizard (Hold Breath and Spider Climb)]]
*Source: Monster Manual p. 326, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Lizard Hold Breath And Spider Climb"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "12"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "30 ft., climb 30 ft., swim 30 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The lizard can hold its breath for 15 minutes."
  "name": "Hold Breath"
- "desc": "The lizard can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "VEoR"
```
^statblock

## Environment

underdark, forest, swamp, desert, coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
