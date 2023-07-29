---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Lich
ac: 17
hp: 135
hit_dice: 18d8 + 54
cr: '21'
stats: [
  11,
  16,
  16,
  20,
  14,
  16
]
source: [
  MM,
  CoS,
  GoS,
  IDRotF,
  TCE
]
aliases: ["Lich"]
---
# Lich
*Source: Monster Manual p. 202, Curse of Strahd, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything*  

```ad-statblock
title: Lich
![](/compendium/bestiary/undead/token/lich.png#token)
*Medium undead, Any Evil Alignment*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 18d8 + 54|text(135)` (18d8 + 54) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|16 (+3)|16 (+3)|20 (+5)|14 (+2)|16 (+3)|

- **Proficiency Bonus** +7
- **Saving Throws** Constitution +10, Intelligence +12, Wisdom +9
- **Skills** Arcana +19, History +12, Insight +9, Perception +9
- **Senses** truesight 120 ft., passive Perception 19
- **Damage Resistances** cold, lightning, necrotic
- **Damage Immunities** poison; bludgeoning, piercing, slashing from nonmagical attacks
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, poisoned
- **Languages** Common plus up to five other languages
- **Challenge** 21

## Traits

***Legendary Resistance (3/Day).*** If the lich fails a saving throw, it can choose to succeed instead.

***Rejuvenation.*** If it has a phylactery, a destroyed lich gains a new body in `dice: 1d10|avg` (`1d10`) days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery.

***Turn Resistance.*** The lich has advantage on saving throws against any effect that turns undead.

***Spellcasting.*** The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, `dice: d20+12` (+12 to hit) with spell attacks). The lich has the following wizard spells prepared:

**Cantrips (at will)**: mage hand, prestidigitation, ray of frost

**1st level (4 1st-level slots)**: detect magic, magic missile, shield, thunderwave

**2nd level (3 2nd-level slots)**: detect thoughts, invisibility, Melf's acid arrow, mirror image

**3rd level (3 3rd-level slots)**: animate dead, counterspell, dispel magic, fireball

**4th level (3 4th-level slots)**: blight, dimension door

**5th level (3 5th-level slots)**: cloudkill, scrying

**6th level (1 6th-level slots)**: disintegrate, globe of invulnerability

**7th level (1 7th-level slots)**: finger of death, plane shift

**8th level (1 8th-level slots)**: dominate monster, power word stun

**9th level (1 9th-level slots)**: power word kill

## Actions

***Paralyzing Touch.*** *Melee Spell Attack:* `dice: d20+12` (+12 to hit), reach 5 ft., one creature. Hit: `dice: 3d6|avg` (`3d6`) cold damage. The target must succeed on a DC 18 Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

## Legendary Actions

***Cantrip.*** The lich casts a cantrip.

***Paralyzing Touch (Costs 2 Actions).*** The lich uses its Paralyzing Touch.

***Frightening Gaze (Costs 2 Actions).*** The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become [frightened](compendium/rules/conditions.md#frightened) for 1 minute. The [frightened](compendium/rules/conditions.md#frightened) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours.

***Disrupt Life (Costs 3 Actions).*** Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (`dice: 6d6|avg` (`6d6`)) necrotic damage on a failed save, or half as much damage on a successful one.

## Lair actions

On initiative count 20 (losing initiative ties), the lich can take a lair action to cause one of the following magical effects; the lich can't use the same effect two rounds in a row:

- The lich rolls a `dice: d8|avg` (`d8`) and regains a spell slot of that level or lower. If it has no spent spell slots of that level or lower, nothing happens.  
- The lich targets one creature it can see within 30 feet of it. A crackling cord of negative energy tethers the lich to the target. Whenever the lich takes damage, the target must make a DC 18 Constitution saving throw. On a failed save, the lich takes half the damage (rounded down), and the target takes the remaining damage. This tether lasts until initiative count 20 on the next round or until the lich or the target is no longer in the lich's lair.  
- The lich calls forth the spirits of creatures that died in its lair. These apparitions materialize and attack one creature that the lich can see within 60 feet of it. The target must succeed on a DC 18 Constitution saving throw, taking 52 (`dice: 15d6|avg` (`15d6`)) necrotic damage on a failed save, or half as much damage on a success. The apparitions then disappear.  
```
^statblock