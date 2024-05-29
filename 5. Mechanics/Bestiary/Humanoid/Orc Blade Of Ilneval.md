---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/vgm
  - monster/cr/4
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/humanoid/orc
statblock: inline
aliases:
  - Orc Blade of Ilneval
---
# [[5. Mechanics/Bestiary/Humanoid/Orc Blade Of Ilneval.md|Orc Blade of Ilneval]]
*Source: Volo's Guide to Monsters p. 183*

To the common folk of the world, an orc is an orc. They know that any one of these savages can tear an ordinary person to pieces, so no further distinction is necessary.

Orcs know better. Different groups of orcs exist within a tribe, the actions of each dictated by the deity they pay homage to. To complement the various kinds of warriors that spill forth to ravage the countryside, each tribe has members that remain deep inside the lair, seldom if ever seeing what lies outside the darkness of their den.

In addition, orcs have special relationships with two creatures that are sometimes found in their company: the aurochs, a great bull that serves as a mount for warriors that revere Bahgtru, and the tanarukk, a demon-orc crossbreed that is so depraved and destructive that even orcs seek to kill it. The aurochs is described in appendix A. The tanarukk is described below.

## Orc Blade of Ilneval

Ilneval is Gruumsh's battle captain, a devious strategist who directs Gruumsh's soldiers with boldness. Among orcs, warriors that venerate Ilneval emulate their deity. Such orcs learn to command their fellows in ways that are unpredictable but help to ensure victory.

The wisest among these leaders gain Ilneval's favor and rise to become known as blades, tactical experts who advise their chief in matters of war. Blades lead from the front, wading into combat fearlessly while barking orders at lesser soldiers. A blade knows how to use orcish ferocity to best advantage, and helps the ordinary warriors to work together against their adversaries.

```statblock
"name": "Orc Blade Of Ilneval"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Chain Mail.md|chain mail]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "17"
- !!int "11"
- !!int "17"
- !!int "10"
- !!int "12"
- !!int "14"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Intimidation": !!int "4"
  "Insight": !!int "3"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Orc"
"cr": "4"
"traits":
- "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
- "desc": "The orc deals an extra die of damage when it hits with a longsword attack\
    \ (included in the attack)."
  "name": "Foe Smiter of Ilneval"
"actions":
- "desc": "The orc makes two melee attacks with its longsword or two ranged attacks\
    \ with its javelins. If Ilneval's Command is available to use, the orc can use\
    \ it after these attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage, or 14 (2d10 + 3) slashing damage when used with two hands."
  "name": "Longsword"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  "name": "Javelin"
- "desc": "Up to three allied orcs within 120 feet of this orc that can hear it can\
    \ use their reactions to each make one weapon attack."
  "name": "Ilneval's Command (Recharge 4-6)"
"source":
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/orc-blade-of-ilneval-vgm.webp"
```
^statblock

## Environment

underdark, mountain, grassland, forest, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
