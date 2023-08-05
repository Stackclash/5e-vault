---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
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
    \ has the following wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)"
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
    \ Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed)\
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
    \ or become [frightened](compendium/rules/conditions.md#frightened) for 1 minute.\
    \ The [frightened](compendium/rules/conditions.md#frightened) target can repeat\
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
"image": "/compendium/bestiary/npc/token/exethanter.png"
aliases: ["Exethanter"]
---
# Exethanter
*Source: Curse of Strahd p. 189, Derived from Lich (MM)*  

```ad-statblock
title: Exethanter
![](/compendium/bestiary/npc/token/exethanter.png#token)
*Medium undead, Any Evil Alignment*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 18d8 + 54|text(99)` (18d8 + 54) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|16 (+3)|16 (+3)|20 (+5)|14 (+2)|16 (+3)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +10, Intelligence +12, Wisdom +9
- **Skills** Arcana +19, History +12, Insight +9, Perception +9
- **Senses** truesight 120 ft., passive Perception 19
- **Damage Resistances** cold, lightning, necrotic
- **Damage Immunities** poison; bludgeoning, piercing, slashing from nonmagical attacks
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, poisoned
- **Languages** Common plus up to five other languages
- **Challenge** 10

## Traits

***Legendary Resistance (3/Day).*** If Exethanter fails a saving throw, it can choose to succeed instead.

***Rejuvenation.*** If it has a phylactery, a destroyed lich gains a new body in `dice: 1d10|avg` (`1d10`) days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery.

***Turn Resistance.*** Exethanter has advantage on saving throws against any effect that turns undead.

***Spellcasting.*** Exethanter is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, `dice: d20+12` (+12 to hit) with spell attacks). Exethanter has the following wizard spells prepared:

**Cantrips (at will)**: [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)

## Actions

***Paralyzing Touch.*** *Melee Spell Attack:* `dice: d20+12` (+12 to hit), reach 5 ft., one creature. Hit: `dice: 3d6|avg` (`3d6`) cold damage. The target must succeed on a DC 18 Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

## Legendary Actions

***Cantrip.*** Exethanter casts a cantrip.

***Paralyzing Touch (Costs 2 Actions).*** Exethanter uses its Paralyzing Touch.

***Frightening Gaze (Costs 2 Actions).*** Exethanter fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become [frightened](compendium/rules/conditions.md#frightened) for 1 minute. The [frightened](compendium/rules/conditions.md#frightened) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to Exethanter's gaze for the next 24 hours.

***Disrupt Life (Costs 3 Actions).*** Each non-undead creature within 20 feet of Exethanter must make a DC 18 Constitution saving throw against this magic, taking 21 (`dice: 6d6|avg` (`6d6`)) necrotic damage on a failed save, or half as much damage on a successful one.

## Lair actions

On initiative count 20 (losing initiative ties), the lich can take a lair action to cause one of the following magical effects; the lich can't use the same effect two rounds in a row:

- The lich rolls a `dice: d8|avg` (`d8`) and regains a spell slot of that level or lower. If it has no spent spell slots of that level or lower, nothing happens.  
- The lich targets one creature it can see within 30 feet of it. A crackling cord of negative energy tethers the lich to the target. Whenever the lich takes damage, the target must make a DC 18 Constitution saving throw. On a failed save, the lich takes half the damage (rounded down), and the target takes the remaining damage. This tether lasts until initiative count 20 on the next round or until the lich or the target is no longer in the lich's lair.  
- The lich calls forth the spirits of creatures that died in its lair. These apparitions materialize and attack one creature that the lich can see within 60 feet of it. The target must succeed on a DC 18 Constitution saving throw, taking 52 (`dice: 15d6|avg` (`15d6`)) necrotic damage on a failed save, or half as much damage on a success. The apparitions then disappear.  
```
^statblock