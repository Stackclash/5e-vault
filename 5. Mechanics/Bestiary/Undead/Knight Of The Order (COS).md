---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cos
- monster/cr/5
- monster/size/medium
- monster/type/undead
statblock: inline
aliases: ["Knight of the Order"]
---
# [[5. Mechanics/Bestiary/Undead/Knight Of The Order (COS).md|Knight of the Order]]
*Source: Curse of Strahd p. 139*  

```statblock
"name": "Knight of the Order (CoS)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
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
- "desc": "The knight regains 10 hit points at the start of its turn. If the knight\
    \ takes fire or radiant damage, this trait doesn't function at the start of the\
    \ knight's next turn. The knight's body is destroyed only if it starts its turn\
    \ with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- "desc": "When the knight's body is destroyed, its soul lingers. After 24 hours,\
    \ the soul inhabits and animates another humanoid corpse on the same plane of\
    \ existence and regains all its hit points. While the soul is bodiless, a [[5. Mechanics/Spells/Wish.md|wish]]\
    \ spell can be used to force the soul to go to the afterlife and not return."
  "name": "Rejuvenation"
- "desc": "The knight is immune to effects that turn undead."
  "name": "Turn Immunity"
- "desc": "The knight knows the distance to and direction of any creature against\
    \ which it seeks revenge, even if the creature and the knight are on different\
    \ planes of existence. If the creature being tracked by the knight dies, the knight\
    \ knows."
  "name": "Vengeful Tracker"
"actions":
- "desc": "The knight makes two longsword attacks or two fist attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d10 + 4|avg (2d10 + 4) slashing damage. If the target is a\
    \ creature against which the knight has sworn vengeance, the target takes an extra\
    \ dice: 4d6|avg (4d6) slashing damage."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) bludgeoning damage. If the target is\
    \ a creature against which the knight has sworn vengeance, the target takes an\
    \ extra dice: 4d6|avg (4d6) bludgeoning damage. Instead of dealing damage,\
    \ the knight can grapple the target (escape DC 14) provided the target is Large\
    \ or smaller."
  "name": "Fist"
- "desc": "The knight targets one creature it can see within 30 feet of it and against\
    \ which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw.\
    \ On a failure, the target is [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ until the knight deals damage to it, or until the end of the knight's next turn.\
    \ When the paralysis ends, the target is [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ of the knight for 1 minute. The [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ target can repeat the saving throw at the end of each of its turns, with disadvantage\
    \ if it can see the knight, ending the [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ condition on itself on a success."
  "name": "Vengeful Glare"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Undead/token/knight-of-the-order.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```