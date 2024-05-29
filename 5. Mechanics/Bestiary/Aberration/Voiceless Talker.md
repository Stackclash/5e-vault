---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/7
- monster/size/medium
- monster/type/aberration/controller
statblock: inline
aliases: ["Voiceless Talker"]
---
# [[5. Mechanics/Bestiary/Aberration/Voiceless Talker.md|Voiceless Talker]]
*Source: Flee, Mortals! (Packet 1) p. 11*

```statblock
"name": "Voiceless Talker"
"size": "Medium"
"type": "aberration"
"subtype": "Controller"
"alignment": "typically  Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "14"
"speed": "30 ft., fly 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
  "Constitution": !!int "5"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "6"
  "Insight": !!int "5"
  "Perception": !!int "5"
  "Arcana": !!int "7"
  "Persuasion": !!int "5"
"damage_resistances": "bludgeoning"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "7"
"actions":
- "desc": "The voiceless talker manifests a power and makes a Tentacle or Psionic\
    \ Pistol attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10\
    \ + 4) psychic damage, and the target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 15)."
  "name": "Tentacle"
- "desc": "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit:\
    \ 15 (2d10 + 4) force damage."
  "name": "Psionic Pistol"
- "desc": "The voiceless talker psionically plunders the mind of a creature they can\
    \ see within 30 feet of them. The target must make a DC 15 Intelligence saving\
    \ throw.\n\nOn a failed save, the target takes 22 (4d10) psychic damage, and until\
    \ they finish a long rest or die, their proficiency bonus is lowered by 1 and\
    \ the voiceless talker gains a cumulative +2 bonus to damage rolls. On a successful\
    \ save, a target takes half as much damage and doesn't have their proficiency\
    \ bonus reduced.\n\nA creature whose proficiency bonus drops to 0 can't form new\
    \ thoughts or speak, and they have disadvantage on ability checks, attack rolls,\
    \ and saving throws."
  "name": "Memory Thief (4th-Order Power)"
- "desc": "The voiceless talker shoots a 15- foot cone of psionic energy from their\
    \ eyes. Each creature in that area must make a DC 15 Intelligence saving throw,\
    \ taking 28 (8d6) psychic damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Flay (3/Day; 5th-Order Power)"
- "desc": "The voiceless talker projects a psionic image over their body, transforming\
    \ their appearance for 1 hour into that of a Medium creature they have seen. When\
    \ they manifest this power, they can also change the appearance of any equipment\
    \ they carry for the duration.\n\nThe changes wrought by this power fail to hold\
    \ up to physical inspection. A creature can use an action to inspect the voiceless\
    \ talker's appearance and make a DC 15 Intelligence (Investigation) check, noticing\
    \ the image is a projection on a success."
  "name": "Guise (3rd-Order Power)"
"reactions":
- "desc": "When a creature [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] by\
    \ the voiceless talker makes a saving throw against one of the voiceless talker's\
    \ powers, the voiceless talker momentarily weakens the creature and the creature\
    \ has disadvantage on the saving throw."
  "name": "Brain Drain"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```