---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/7
- monster/size/large
- monster/type/aberration/brute
statblock: inline
aliases: ["Hulking Brain"]
---
# [[5. Mechanics/Bestiary/Aberration/Hulking Brain.md|Hulking Brain]]
*Source: Flee, Mortals! (Packet 1) p. 12*

```statblock
"name": "Hulking Brain"
"size": "Large"
"type": "aberration"
"subtype": "Brute"
"alignment": "typically  Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d10 + 60"
"stats":
- !!int "21"
- !!int "10"
- !!int "20"
- !!int "8"
- !!int "6"
- !!int "12"
"speed": "30 ft."
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 8"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "7"
"traits":
- "desc": "The hulking brain is unaffected by psionic powers manifested by voiceless\
    \ talkers unless the brain wishes to be."
  "name": "Psionic Immunity"
- "desc": "When the brain drops to 0 hit points, each creature within 30 feet of them\
    \ must make a DC 16 Wisdom saving throw, taking 21 (6d6) psychic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Psychic Scream"
"actions":
- "desc": "The brain makes three Bash attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8\
    \ + 5) bludgeoning damage, and the target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 15). Until the grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ and has disadvantage on saving throws against psionic powers.\n\nThe brain can\
    \ grapple up to four creatures at once."
  "name": "Bash"
- "desc": "Each creature [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] by the\
    \ brain must make a DC 16 Strength saving throw, taking 22 (4d10) bludgeoning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Squeeze"
"bonus_actions":
- "desc": "Each willing voiceless talker within 60 feet of the brain regains the use\
    \ of one psionic power of the voiceless talker's choice, and the voiceless talker\
    \ has advantage on attack rolls until the end of the brain's next turn."
  "name": "Psionic Invigoration (1/Day)"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```