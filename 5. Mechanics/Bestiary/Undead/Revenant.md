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
# [[5. Mechanics\Bestiary\Undead\Revenant.md|Revenant]]
*Source: Monster Manual p. 259, Curse of Strahd, Eberron: Rising from the Last War*  

A revenant forms from the soul of a mortal who met a cruel and undeserving fate. It claws its way back into the world to seek revenge against the one who wronged it. The revenant reclaims its mortal body and superficially resembles a zombie. However, instead of lifeless eyes, a revenant's eyes burn with resolve and flare in the presence of its adversary. If the revenant's original body was destroyed or is otherwise unavailable, the spirit of the revenant enters another humanoid corpse. Regardless of the body the revenant uses as a vessel, its adversary always recognizes the revenant for what it truly is.

## Hunger for Revenge

A revenant has only one year to exact revenge. When its adversary dies, or if the revenant fails to kill its adversary before its time runs out, it crumbles to dust and its soul fades into the afterlife. If its foe is too powerful for the revenant to destroy on its own, it seeks worthy allies to help it fulfill its quest.

## Divine Justice

No magic can hide a creature pursued by a revenant, which always knows the direction and distance between it and the target of its vengeance. In cases where the revenant seeks revenge against more than one adversary, it pursues them one at a time, starting with the creature that dealt it the killing blow. If the revenant's body is destroyed, its soul flies forth to seek out a new corpse in which to resume its hunt.

## Undead Nature

A revenant doesn't require air, food, drink, or sleep.

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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]"
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
    \ existence and regains all its hit points. While the soul is bodiless, a [[5. Mechanics/Spells/Wish.md|wish]]\
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
    \ On a failure, the target is [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ until the revenant deals damage to it, or until the end of the revenant's next\
    \ turn. When the paralysis ends, the target is [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ of the revenant for 1 minute. The [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ target can repeat the saving throw at the end of each of its turns, with disadvantage\
    \ if it can see the revenant, ending the [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ condition on itself on a success."
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
"image": "5. Mechanics/Bestiary/Undead/token/revenant.png"
```
^statblock

## Environment

forest, swamp, hill, urban, desert, arctic
