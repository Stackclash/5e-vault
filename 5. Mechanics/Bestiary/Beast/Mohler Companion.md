---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/
- monster/size/small
- monster/type/beast/companion
statblock: inline
aliases: ["Mohler Companion"]
---
# [[5. Mechanics/Bestiary/Beast/Mohler Companion.md|Mohler Companion]]
*Source: Flee, Mortals! (Packet 1) p. 9*

```statblock
"name": "Mohler Companion"
"size": "Small"
"type": "beast"
"subtype": "Companion"
"alignment": "Unaligned"
"ac_class": "13 plus pb (natural armor)"
"stats":
- !!int "7"
- !!int "16"
- !!int "14"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "20 ft., burrow 40 ft."
"saves":
  "Dexterity": !!int "3"
  "Constitution": !!int "2"
"skillsaves":
  "Stealth": !!int "0"
  "Acrobatics": !!int "0"
"senses": "blindsight 20 ft., tremorsense 40 ft., passive Perception 11"
"languages": ""
"actions":
- "desc": "Melee Weapon Attack: +3 plus PB to hit, reach 5 ft., one target. Hit:\
    \ 1d6 plus PB slashing damage."
  "name": "Signature Attack (Claw)"
- "desc": "Earth Bump (2 Ferocity). The mohler burrows up to their speed and chooses\
    \ one Large or smaller creature they come within 5 feet of during the move. The\
    \ target must succeed on a DC 10 plus PB Dexterity saving throw or be knocked\
    \ [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "1st Level"
- "desc": "Sinkhole (5 Ferocity). The mohler burrows up to their speed and targets\
    \ a creature they can sense on the surface within 10 feet of them. The target\
    \ must succeed on a DC 10 plus PB Strength saving throw or be [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ by the ground until the start of the mohler's next turn."
  "name": "3rd Level"
- "desc": "Terranova (8 Ferocity). Each creature on the ground within 10 feet of the\
    \ mohler must succeed on a DC 10 plus PB Strength saving throw or take 1d6 plus\
    \ PB bludgeoning damage and be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ A creature who fails this saving throw by 5 or more is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ by the ground (save ends at end of turn).\n\nA creature can use their action\
    \ to free themself or another creature within their reach, ending the effect."
  "name": "5th Level"
"reactions":
- "desc": "If the mohler's caregiver fails a Dexterity saving throw while they are\
    \ within 10 feet of the mohler and the mohler isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]], the mohler pulls\
    \ the caregiver out of danger. The caregiver succeeds on the saving throw instead."
  "name": "Quick Pit (1/Day)"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```