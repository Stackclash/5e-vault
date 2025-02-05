---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: 
size: Gargantuan
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/6
- monster/size/gargantuan
- monster/type/undead
aliases: ["Death Haze"]
---
# [Death Haze](compendium\bestiary\undead/death-haze-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

In the miasma of nightmares, either in the space of dreams or in the lands that touch them, the threat of a death haze is a constant worry. Death hazes create powerful illusions responsible for luring unexpecting dreamers into peril, convincing them of any manner of temptations or fears with their illusory appearances.

```statblock
"name": "Death Haze (GriffonsSaddlebag3)"
"size": "Gargantuan"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "75"
"hit_dice": "6d20 + 12"
"stats":
- !!int "6"
- !!int "19"
- !!int "14"
- !!int "10"
- !!int "15"
- !!int "17"
"speed": "0 ft., fly 60 ft. (hover)"
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "5"
  "Intelligence": !!int "3"
"skillsaves":
  "Deception": !!int "9"
  "Insight": !!int "5"
  "Persuasion": !!int "6"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [deafened](/compendium/rules/conditions.md#Deafened),\
  \ [exhaustion](/compendium/rules/conditions.md#Exhaustion), [frightened](/compendium/rules/conditions.md#Frightened),\
  \ [grappled](/compendium/rules/conditions.md#Grappled), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [poisoned](/compendium/rules/conditions.md#Poisoned),\
  \ [prone](/compendium/rules/conditions.md#Prone), [restrained](/compendium/rules/conditions.md#Restrained),\
  \ [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "blindsight 60 ft., passive Perception 12"
"languages": "telepathy 60 ft."
"cr": "6"
"traits":
- "desc": "The haze continuously projects the image of a humanoid in its space, which\
    \ it has total control of. To a creature who has not perceived the humanoid to\
    \ be an illusion, the haze's true smoky form is [invisible](/compendium/rules/conditions.md#Invisible),\
    \ and the creature rationalizes any illogical outcomes from interacting with the\
    \ humanoid, including believing it to be tangible. The illusion seems completely\
    \ real, including sounds, smells, and temperature appropriate to the humanoid\
    \ depicted. When the haze communicates telepathically with a creature, it can\
    \ do so through the illusion, as if the humanoid was speaking a language the creature\
    \ understands.\n\nA creature that uses its action to examine the humanoid can\
    \ determine that it is an illusion with a successful DC 17 Intelligence ([Investigation](/compendium/rules/skills.md#Investigation))\
    \ check. If a creature discerns the illusion for what it is, the creature can\
    \ see through the humanoid, its other sensory qualities become faint to the creature,\
    \ and the creature sees the haze's true form.\n\nWhile in the area of an [antimagic\
    \ field](compendium/spells/antimagic-field.md), the haze's true form is visible\
    \ to all creatures and its humanoid projection is suppressed. If targeted by [dispel\
    \ magic](compendium/spells/dispel-magic.md), the haze must succeed on a Constitution\
    \ saving throw against the caster's spell save DC or the projection vanishes for\
    \ 1 minute."
  "name": "Continual Projection"
- "desc": "The haze has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The haze can occupy another creature's space and vice versa, and it can\
    \ pass through small holes, narrow openings, and even mere cracks, though it treats\
    \ liquids as though they were solid surfaces. The haze's space is lightly obscured\
    \ to any creature that perceives the haze's true form."
  "name": "Smoke Form"
"actions":
- "desc": "The haze attempts to control the perceptions of a creature it can see within\
    \ 60 feet of it. The target must succeed on a DC 14 Wisdom saving throw or become\
    \ [charmed](/compendium/rules/conditions.md#Charmed) by the haze for 1 hour or\
    \ until its [concentration](/compendium/rules/conditions.md#Concentration) ends\
    \ (as if [concentrating](/compendium/rules/conditions.md#Concentration) on a spell).\
    \ While [charmed](/compendium/rules/conditions.md#Charmed) in this way, the target\
    \ doesn't perceive the effects of any damage it takes, it has disadvantage on\
    \ saving throws against the haze's Nightmarish Assault, and it is impossible for\
    \ the target to discern the haze's humanoid illusion for what it is, even if the\
    \ creature would otherwise see through illusions, such as via truesight."
  "name": "Delude (Recharge 5-6)"
- "desc": "The haze floods the mind of one creature in its space with visions of the\
    \ creature's deepest fears. The target must make a DC 14 Intelligence saving throw.\
    \ On a failed save, the creature takes 36 (8d8) psychic damage and becomes [frightened](/compendium/rules/conditions.md#Frightened)\
    \ until the end of the haze's next turn.\n\nWhile [frightened](/compendium/rules/conditions.md#Frightened)\
    \ in this way, the creature's speed is reduced to 0. On a successful save, the\
    \ creature takes half as much damage and isn't [frightened](/compendium/rules/conditions.md#Frightened)."
  "name": "Nightmarish Assault"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```