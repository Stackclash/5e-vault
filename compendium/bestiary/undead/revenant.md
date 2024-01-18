---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/5
- monster/environment/arctic
- monster/environment/desert
- monster/environment/forest
- monster/environment/hill
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: inline
aliases: ["Revenant"]
---
# [Revenant](compendium\bestiary\undead/revenant.md)
*Source: Monster Manual p. 259, Curse of Strahd*  

```statblock
"name": "Revenant"
"size": "Medium"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Strength": !!int "7"
  "Constitution": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- "desc": "The revenant regains 10 hit points at the start of its turn. If the revenant\
    \ takes fire or radiant damage, this trait doesn't function at the start of the\
    \ revenant's next turn. The revenant's body is destroyed only if it starts its\
    \ turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- "desc": "When the revenant's body is destroyed, its soul lingers. After 24 hours,\
    \ the soul inhabits and animates another humanoid corpse on the same plane of\
    \ existence and regains all its hit points. While the soul is bodiless, a wish\
    \ spell can be used to force the soul to go to the afterlife and not return."
  "name": "Rejuvenation"
- "desc": "The revenant is immune to effects that turn undead."
  "name": "Turn Immunity"
- "desc": "The revenant knows the distance to and direction of any creature against\
    \ which it seeks revenge, even if the creature and the revenant are on different\
    \ planes of existence. If the creature being tracked by the revenant dies, the\
    \ revenant knows."
  "name": "Vengeful Tracker"
"actions":
- "desc": "The revenant makes two fist attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) bludgeoning damage. If the target is\
    \ a creature against which the revenant has sworn vengeance, the target takes\
    \ an extra dice: 4d6|avg (4d6) bludgeoning damage. Instead of dealing damage,\
    \ the revenant can grapple the target (escape DC 14) provided the target is Large\
    \ or smaller."
  "name": "Fist"
- "desc": "The revenant targets one creature it can see within 30 feet of it and against\
    \ which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw.\
    \ On a failure, the target is paralyzed until the revenant deals damage to it,\
    \ or until the end of the revenant's next turn. When the paralysis ends, the target\
    \ is frightened of the revenant for 1 minute. The frightened target can repeat\
    \ the saving throw at the end of each of its turns, with disadvantage if it can\
    \ see the revenant, ending the frightened condition on itself on a success."
  "name": "Vengeful Glare"
"source":
- "MM"
- "CoS"
- "PotA"
- "ToA"
- "WDMM"
- "ERLW"
- "EGW"
- "MOT"
- "CRCotN"
- "JttRC"
- "PaBTSO"
- "SatO"
- "BMT"
"image": "compendium/bestiary/undead/token/revenant.png"
```
^statblock

## Environment

forest, swamp, hill, urban, desert, arctic