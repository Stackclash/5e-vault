---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: null
size: Gargantuan
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/6
  - monster/size/gargantuan
  - monster/type/undead
aliases:
  - Death Haze
---
# [[5. Mechanics\Bestiary\Undead\Death Haze (GRIFFONSSADDLEBAG3).md|Death Haze]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

In the miasma of nightmares, either in the space of dreams or in the lands that touch them, the threat of a death haze is a constant worry. Death hazes create powerful illusions responsible for luring unexpecting dreamers into peril, convincing them of any manner of temptations or fears with their illusory appearances.

```statblock
"name": "Death Haze (GRIFFONSSADDLEBAG3)"
"size": "Gargantuan"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "75"
"hit_dice": "6d20 + 12"
"modifier": !!int "4"
"stats":
  - !!int "6"
  - !!int "19"
  - !!int "14"
  - !!int "10"
  - !!int "15"
  - !!int "17"
"speed": "0 ft., fly 60 ft. (hover)"
"saves":
  - "dexterity": "+7"
  - "intelligence": "+3"
  - "wisdom": "+5"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+6"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "blindsight 60 ft., passive Perception 12"
"languages": "telepathy 60 ft."
"cr": "6"
"traits":
  - "desc": "The haze continuously projects the image of a humanoid in its space,\
      \ which it has total control of. To a creature who has not perceived the humanoid\
      \ to be an illusion, the haze's true smoky form is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]],\
      \ and the creature rationalizes any illogical outcomes from interacting with\
      \ the humanoid, including believing it to be tangible. The illusion seems completely\
      \ real, including sounds, smells, and temperature appropriate to the humanoid\
      \ depicted. When the haze communicates telepathically with a creature, it can\
      \ do so through the illusion, as if the humanoid was speaking a language the\
      \ creature understands.\n\nA creature that uses its action to examine the humanoid\
      \ can determine that it is an illusion with a successful DC 17 Intelligence\
      \ ([[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]) check. If a creature\
      \ discerns the illusion for what it is, the creature can see through the humanoid,\
      \ its other sensory qualities become faint to the creature, and the creature\
      \ sees the haze's true form.\n\nWhile in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]],\
      \ the haze's true form is visible to all creatures and its humanoid projection\
      \ is suppressed. If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
      \ the haze must succeed on a Constitution saving throw against the caster's\
      \ spell save DC or the projection vanishes for 1 minute."
    "name": "Continual Projection"
  - "desc": "The haze has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The haze can occupy another creature's space and vice versa, and it can\
      \ pass through small holes, narrow openings, and even mere cracks, though it\
      \ treats liquids as though they were solid surfaces. The haze's space is lightly\
      \ obscured to any creature that perceives the haze's true form."
    "name": "Smoke Form"
"actions":
  - "desc": "The haze attempts to control the perceptions of a creature it can see\
      \ within 60 feet of it. The target must succeed on a DC 14 Wisdom saving throw\
      \ or become [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] by the haze for\
      \ 1 hour or until its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
      \ ends (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]]\
      \ on a spell). While [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] in this\
      \ way, the target doesn't perceive the effects of any damage it takes, it has\
      \ disadvantage on saving throws against the haze's Nightmarish Assault, and\
      \ it is impossible for the target to discern the haze's humanoid illusion for\
      \ what it is, even if the creature would otherwise see through illusions, such\
      \ as via truesight."
    "name": "Delude (Recharge 5-6)"
  - "desc": "The haze floods the mind of one creature in its space with visions of\
      \ the creature's deepest fears. The target must make a DC 14 Intelligence saving\
      \ throw. On a failed save, the creature takes 36 (8d8) psychic damage and becomes\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] until the end of\
      \ the haze's next turn.\n\nWhile [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ in this way, the creature's speed is reduced to 0. On a successful save, the\
      \ creature takes half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]."
    "name": "Nightmarish Assault"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
