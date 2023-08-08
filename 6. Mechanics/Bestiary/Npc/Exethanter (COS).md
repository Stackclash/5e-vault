---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/undead
statblock: inline
---
# Exethanter
*Source: Curse of Strahd p. 189, Derived from Lich (MM)*  

```statblock
"name": "Exethanter"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil Alignment"
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
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "12"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
  "History": !!int "12"
  "Arcana": !!int "19"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Common plus up to five other languages"
"cr": "10"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Exethanter is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 20, dice: d20+12 (+12 to hit) with spell attacks). Exethanter\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[/6. Mechanics/Spells/Prestidigitation.md|prestidigitation]], [[/6. Mechanics/Spells/Ray Of Frost.md|ray of frost]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If Exethanter fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If it has a phylactery, a destroyed lich gains a new body in dice: 1d10|avg\
    \ (1d10) days, regaining all its hit points and becoming active again. The new\
    \ body appears within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Exethanter has advantage on saving throws against any effect that turns\
    \ undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Spell Attack: dice: d20+12 (+12 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 3d6|avg (3d6) cold damage. The target must succeed on a DC 18\
    \ Constitution saving throw or be [[6. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralyzing Touch"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Exethanter casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Exethanter uses its Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Exethanter fixes its gaze on one creature it can see within 10 feet of\
    \ it. The target must succeed on a DC 18 Wisdom saving throw against this magic\
    \ or become [[6. Mechanics/Rules/Conditions.md#frightened|frightened]] for 1 minute.\
    \ The [[6. Mechanics/Rules/Conditions.md#frightened|frightened]] target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. If a target's saving throw is successful or the effect ends for\
    \ it, the target is immune to Exethanter's gaze for the next 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each non-undead creature within 20 feet of Exethanter must make a DC 18\
    \ Constitution saving throw against this magic, taking 21 (dice: 6d6|avg (6d6))\
    \ necrotic damage on a failed save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "CoS"
"image": "6. Mechanics/Bestiary/Npc/token/exethanter.png"
```
^statblock