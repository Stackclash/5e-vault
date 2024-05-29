---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/10
- monster/size/medium
- monster/type/aberration/artillery
statblock: inline
aliases: ["Voiceless Talker Artillerist"]
---
# [[5. Mechanics/Bestiary/Aberration/Voiceless Talker Artillerist.md|Voiceless Talker Artillerist]]
*Source: Flee, Mortals! (Packet 1) p. 11*

```statblock
"name": "Voiceless Talker Artillerist"
"size": "Medium"
"type": "aberration"
"subtype": "Artillery"
"alignment": "typically  Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "12"
- !!int "16"
- !!int "16"
- !!int "21"
- !!int "17"
- !!int "16"
"speed": "30 ft., fly 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Constitution": !!int "7"
"skillsaves":
  "Deception": !!int "7"
  "Stealth": !!int "7"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Arcana": !!int "9"
  "Persuasion": !!int "7"
"damage_resistances": "bludgeoning"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "10"
"traits":
- "desc": "When the artillerist hits a target with their Psionic Rifle attack, the\
    \ artillerist can attempt to teleport the target (no action required). The target\
    \ must succeed on a DC 17 Wisdom saving throw or be teleported to an unoccupied\
    \ space of the artillerist's choice they can see within 60 feet of the artillerist.\
    \ The chosen space must be on a surface or in a liquid that can support the target\
    \ without squeezing."
  "name": "Phasing Rifle (1/Turn)"
"actions":
- "desc": "The artillerist makes two Psionic Rifle attacks, or they manifest a power\
    \ and make a Tentacle attack."
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: +9 to hit, range 150/600 ft., one target. Hit:\
    \ 21 (3d10 + 5) force damage."
  "name": "Psionic Rifle"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 21 (3d10\
    \ + 5) psychic damage, and the artillerist can choose one of the following effects:\
    \ the target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] (escape DC\
    \ 17) or teleported up to 15 feet to an unoccupied space the artillerist can see."
  "name": "Phasing Tentacles"
- "desc": "The artillerist psionically plunders the mind of a creature they can see\
    \ within 30 feet of them. The target must make a DC 17 Intelligence saving throw.\n\
    \nOn a failed save, the target takes 33 (6d10) psychic damage, and until they\
    \ finish a long rest or die, their proficiency bonus is lowered by 1 and the artillerist\
    \ gains a cumulative +2 bonus to damage rolls. On a successful save, a target\
    \ takes half as much damage and doesn't have their proficiency bonus reduced.\n\
    \nA creature whose proficiency bonus drops to 0 can't form new thoughts or speak,\
    \ and they have disadvantage on ability checks, attack rolls, and saving throws."
  "name": "Memory Thief (5th-Order Power)"
- "desc": "The artillerist projects a psionic image over their body, transforming\
    \ their appearance for 1 hour into that of a Medium creature they have seen. When\
    \ they manifest this power, they can also change the appearance of any equipment\
    \ they carry for the duration.\n\nThe changes wrought by this power fail to hold\
    \ up to physical inspection. A creature can use an action to inspect the artillerist's\
    \ appearance and make a DC 17 Intelligence (Investigation) check, noticing the\
    \ image is a projection on a success."
  "name": "Guise (3rd-Order Power)"
"bonus_actions":
- "desc": "The artillerist cloaks themself from the sight of a creature the artillerist\
    \ can see within 60 feet of them. The creature must succeed on a DC 17 Wisdom\
    \ saving throw or the artillerist becomes [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]]\
    \ to the creature for 1 minute (save ends at end of turn). This effect ends early\
    \ if the artillerist attacks the creature, deals damage to them, or creates an\
    \ effect that forces them to make a saving throw."
  "name": "Vanish for One (3/Day; 3rd-Order Power; Concentration)"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```