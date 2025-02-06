---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(SAF)
  - monster\Cr\1
  - monster\Size\Medium
  - monster\Type\Humanoid\Orc
aliases:
  - White Tusk Orc
---
# [[5. Mechanics\Bestiary\Humanoid\White Tusk Orc (SAF).md|White Tusk Orc]]
*Source: Strongholds and Followers p. 137*

The rank and file of the White Tusk clan pride themselves on being larger and, thanks to Bonebreaker Dorokor's leadership since the investiture of Castle Rend, more devastating in combat than normal orcs.

They are a chaotic evil tribe who care only for strength and the subjugation of their enemies. They delight in cruelty. But Bonebreaker Dorokor is lawful, and has led them to triumph over the humanoids of the forest. So they obey her...for now.

```statblock
"name": "White Tusk Orc (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather armor]]"
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
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage, or 14 (2d10 + 3) slashing damage if used with two hands."
  "name": "Battleaxe"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 10 (2d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/White%20Tusk%20Orc.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
