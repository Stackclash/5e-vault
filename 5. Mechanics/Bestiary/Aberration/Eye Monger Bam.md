---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/bam
  - monster/cr/10
  - monster/size/large
  - monster/type/aberration
statblock: inline
aliases:
  - Eye Monger
---
# [[5. Mechanics/Bestiary/Aberration/Eye Monger Bam.md|Eye Monger]]
*Source: Boo's Astral Menagerie p. 21, Vecna: Eve of Ruin*

```statblock
"name": "Eye Monger Bam"
"size": "Large"
"type": "aberration"
"alignment": "typically  Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "149"
"hit_dice": "13d10 + 78"
"stats":
- !!int "21"
- !!int "6"
- !!int "23"
- !!int "7"
- !!int "13"
- !!int "7"
"speed": "0 ft., fly 20 ft. (hover)"
"senses": "darkvision 120 ft., blindsight 120 ft. while the eye monger's eye is closed,\
  \ passive Perception 11"
"languages": "Deep Speech"
"cr": "10"
"traits":
- "desc": "Magical effects, including those produced by spells and magic items but\
    \ excluding those created by artifacts or deities, are suppressed inside the eye\
    \ monger's gullet. Any spell slot or charge expended by a creature in the gullet\
    \ to cast a spell or activate a property of a magic item is wasted. While an effect\
    \ is suppressed, it doesn't function, but the time it spends suppressed counts\
    \ against its duration. No spell or magical effect that originates outside the\
    \ eye monger's gullet, except one created by an artifact or a deity, can affect\
    \ a creature or an object inside the gullet."
  "name": "Antimagic Gullet"
- "desc": "If the eye monger is motionless and has its eye and mouth closed at the\
    \ start of combat, it has advantage on its initiative roll. Moreover, if a creature\
    \ hasn't observed the eye monger move or act, that creature must succeed on a\
    \ DC 18 Intelligence ([[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]])\
    \ check to discern that the eye monger is animate."
  "name": "False Appearance"
- "desc": "The eye monger doesn't require air."
  "name": "Unusual Nature"
"actions":
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage, and if the target is a Medium or smaller creature, it\
    \ must succeed on a DC 18 Dexterity saving throw or be swallowed by the eye monger\
    \ and deposited in the eye monger's gullet (see Antimagic Gullet). The eye monger\
    \ can swallow one creature at a time. A swallowed creature is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ and [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]], has total cover\
    \ against attacks and other effects originating outside the eye monger, and takes\
    \ 35 (10d6) acid damage at the start of each of its turns.\n\nIf the eye monger\
    \ takes 25 damage or more on a single turn from a creature inside its gullet,\
    \ the eye monger regurgitates the swallowed creature, which falls [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ in a space within 10 feet of the eye monger. If the eye monger dies, a swallowed\
    \ creature is no longer [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ by it and can escape from the corpse by using 10 feet of movement, exiting [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Bite"
"source":
- "BAM"
- "VEoR"
"image": "5. Mechanics/Bestiary/Aberration/token/eye-monger-bam.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
