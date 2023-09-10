---
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/undead
aliases: ["Exethanter"]
---
# Exethanter
*Source: Curse of Strahd p. 189, Derived from Lich (MM)*  

```statblock
"name": "Exethanter"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil alignment"
"ac": !!int "17"
"hp": !!int "99"
"hit_dice": "18d8 + 54"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "20"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": "+9"
  "Intelligence": "+12"
  "Constitution": "+10"
"skillsaves":
  "Insight": "+9"
  "Perception": "+9"
  "History": "+12"
  "Arcana": "+19"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Common plus up to five other languages"
"cr": "10"
"traits":
- "desc": "Exethanter is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 20, dice: d20+12 (+12 to hit) with spell attacks). Exethanter\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Mage Hand.md\|mage hand]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md\|prestidigitation]], [[5. Mechanics/Spells/Ray Of Frost.md\|ray of frost]]"
  "name": "spells"
- "desc": "If Exethanter fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "If it has a phylactery, a destroyed lich gains a new body in dice: 1d10|avg\
    \ (1d10) days, regaining all its hit points and becoming active again. The new\
    \ body appears within 5 feet of the phylactery."
  "name": "Rejuvenation"
- "desc": "Exethanter has advantage on saving throws against any effect that turns\
    \ undead."
  "name": "Turn Resistance"
"actions":
- "desc": "Melee Spell Attack: dice: d20+12 (+12 to hit), reach 5 ft., one creature.\
    \ Hit: 10 (dice: 3d6|avg (3d6)) cold damage. The target must succeed on\
    \ a DC 18 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#paralyzed\|paralyzed]]\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralyzing Touch"
"legendary_actions":
- "desc": "Exethanter casts a cantrip."
  "name": "Cantrip"
- "desc": "Exethanter uses its Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- "desc": "Exethanter fixes its gaze on one creature it can see within 10 feet of\
    \ it. The target must succeed on a DC 18 Wisdom saving throw against this magic\
    \ or become [[/5. Mechanics/Rules/Conditions.md#frightened\|frightened]] for 1 minute.\
    \ The [[/5. Mechanics/Rules/Conditions.md#frightened\|frightened]] target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. If a target's saving throw is successful or the effect ends for\
    \ it, the target is immune to Exethanter's gaze for the next 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- "desc": "Each non-undead creature within 20 feet of Exethanter must make a DC 18\
    \ Constitution saving throw against this magic, taking 21 (dice: 6d6|avg (6d6))\
    \ necrotic damage on a failed save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/exethanter.png"
```
^statblock