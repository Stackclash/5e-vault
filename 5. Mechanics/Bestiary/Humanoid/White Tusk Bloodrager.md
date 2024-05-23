---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/4
  - monster/size/medium
  - monster/type/humanoid/orc
statblock: inline
aliases:
  - White Tusk Bloodrager
---
# [[5. Mechanics\Bestiary\Humanoid\White Tusk Bloodrager.md|White Tusk Bloodrager]]
*Source: Strongholds and Followers p. 139*

Bloodragers of the White Tusk clan practice the art of death and express their mastery with precise strokes of their dual falchions. They are the most disciplined orcs in the White Tusk clan, and train daily with Bonebreaker Dorokor to hone their Skills.

Through constant training, orcish bloodragers have developed a state of pure focus. In this cold fury, their sword strokes rend flesh with preternatural ease and their powerful bodies simply refuse to die.

```statblock
"name": "White Tusk Bloodrager"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Breastplate.md|breastplate]]"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "11"
- !!int "12"
- !!int "9"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Orc"
"cr": "4"
"traits":
- "desc": "As a bonus action, the orc can enter a cold fury for 1 minute. While in\
    \ a fury, its melee weapon attacks deal an extra 3 (1d6) damage.\n\nAlso, if the\
    \ orc is reduced to 0 hit points while in a cold fury, unless it was dealt with\
    \ a critical hit, the orc makes a Constitution saving throw with a DC of 5 plus\
    \ the damage taken. On a success, the orc instead drops to 1 hit point and its\
    \ fury ends."
  "name": "Cold Fury (Recharges after a Short or Long Rest)"
- "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ it can see."
  "name": "Aggressive"
- "desc": "After moving at least 20 feet in a straight line toward a creature, the\
    \ next attack the orc makes against that creature scores a critical hit on a roll\
    \ of 18-20."
  "name": "Minion: Savage Horde"
"actions":
- "desc": "The White Tusk Bloodrager makes three falchion attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) slashing damage."
  "name": "Falchion"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/White%20Tusk%20Bloodrager.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
