---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/1
  - monster/size/medium
  - monster/type/humanoid/orc
statblock: inline
aliases:
  - White Tusk Orc
---
# [[5. Mechanics\Bestiary\Humanoid\White Tusk Orc.md|White Tusk Orc]]
*Source: Strongholds and Followers p. 137*  

The rank and file of the White Tusk clan pride themselves on being larger and, thanks to Bonebreaker Dorokor's leadership since the investiture of Castle Rend, more devastating in combat than normal orcs.

They are a chaotic evil tribe who care only for strength and the subjugation of their enemies. They delight in cruelty. But Bonebreaker Dorokor is lawful, and has led them to triumph over the humanoids of the forest. So they obey her...for now.

```statblock
"name": "White Tusk Orc"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "9"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "2"
"skillsaves":
  "Intimidation": !!int "2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Orc"
"cr": "1"
"traits":
- "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ it can see."
  "name": "Aggressive"
- "desc": "After moving at least 20 feet in a straight line toward a creature, the\
    \ next attack the orc makes against that creature scores a critical hit on a roll\
    \ of 18-20."
  "name": "Minion: Savage Horde"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 3|avg (2d8 + 3) slashing damage, or dice: 2d10 + 3|avg\
    \ (2d10 + 3) slashing damage if used with two hands."
  "name": "Battleaxe"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 30/120 ft., one target. Hit: dice: 2d6 + 3|avg (2d6 + 3) piercing\
    \ damage."
  "name": "Javelin"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Humanoid/token/white-tusk-orc-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
