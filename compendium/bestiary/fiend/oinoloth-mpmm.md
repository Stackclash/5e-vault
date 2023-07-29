---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/underdark
- monster/size/medium
- monster/type/fiend/yugoloth
statblock: true
statblock-link: "#^statblock"
name: Oinoloth
ac: 17
hp: 119
hit_dice: 14d8 + 56
cr: '12'
stats: [
  19,
  17,
  18,
  17,
  16,
  19
]
source: [
  MPMM,
  MTF
]
aliases: ["Oinoloth"]
---
# Oinoloth
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 202, Mordenkainen's Tome of Foes p. 251*  

Grim specters of death, oinoloths bring pestilence wherever they go. When armies recognize their awful forms, their mere appearance causes soldiers to break ranks and flee, lest they succumb to one of the awful plagues that oinoloths let loose.

Oinoloths solve thorny problems by killing everyone involved. They are typically hired as a last resort when a siege has gone on too long or an army has proven too strong to overcome. Once summoned, oinoloths stalk the killing field, poisoning the ground and sickening creatures they encounter. Sometimes they might be hired to lift the very plagues they spread, but the price for such work is high, and the effort turns the creatures they save into debilitated wrecks.

```ad-statblock
title: Oinoloth
![](/compendium/bestiary/fiend/token/oinoloth.png#token)
*Medium fiend(yugoloth), Neutral Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 14d8 + 56|text(119)` (14d8 + 56) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|17 (+3)|18 (+4)|17 (+3)|16 (+3)|19 (+4)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +8, Wisdom +7
- **Skills** Deception +8, Intimidation +8, Perception +7
- **Senses** blindsight 60 ft., darkvision 60 ft., passive Perception 17
- **Damage Resistances** cold; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** acid, poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, Infernal, telepathy 60 ft.
- **Challenge** 12

## Traits

***Magic Resistance.*** The oinoloth has advantage on saving throws against spells and other magical effects.

***Spellcasting.*** The oinoloth casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 16):

**At will**: [darkness](/compendium/spells/darkness.md), [detect magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md), [hold monster](/compendium/spells/hold-monster.md), [invisibility](/compendium/spells/invisibility.md) (self only)

**1/day each**: [feeblemind](/compendium/spells/feeblemind.md), [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)

## Actions

***Multiattack.*** The oinoloth makes two Claw attacks, and it uses Spellcasting or Teleport.

***Claw.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 3d6 + 4|avg` (`3d6 + 4`) slashing damage plus `dice: 4d10|avg` (`4d10`) necrotic damage.

***Corrupted Healing (Recharge 6).*** The oinoloth touches one willing creature within 5 feet of it. The target regains all its hit points. In addition, the oinoloth can end one disease on the target or remove one of the following conditions from it: [blinded](compendium/rules/conditions.md#blinded), [deafened](compendium/rules/conditions.md#deafened), [paralyzed](compendium/rules/conditions.md#paralyzed), or [poisoned](compendium/rules/conditions.md#poisoned). The target then gains 1 level of [exhaustion](compendium/rules/conditions.md#exhaustion), and its hit point maximum is reduced by 7 (`dice: 2d6|avg` (`2d6`)). This reduction can be removed only by a [wish](/compendium/spells/wish.md) spell or by casting [greater restoration](/compendium/spells/greater-restoration.md) on the target three times within the same hour. The target dies if its hit point maximum is reduced to 0.

***Teleport.*** The oinoloth teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see.

## Bonus Actions

***Bringer of Plagues (Recharge 5-6).*** The oinoloth blights the area in a 30-foot-radius sphere centered on itself. The blight lasts for 24 hours. While the area is blighted, all normal plants there wither and die.

Furthermore, when a creature moves into the blighted area or starts its turn there, that creature must make a DC 16 Constitution saving throw. On a failed save, the creature takes `dice: 4d6|avg` (`4d6`) poison damage and is [poisoned](compendium/rules/conditions.md#poisoned). On a successful save, the creature is immune to the oinoloth's Bringer of Plagues for the next 24 hours.

The [poisoned](compendium/rules/conditions.md#poisoned) creature can't regain hit points. After every 24 hours that elapse, the [poisoned](compendium/rules/conditions.md#poisoned) creature can repeat the saving throw. On a failed save, the creature's hit point maximum is reduced by 5 (`dice: 1d10|avg` (`1d10`)). This reduction lasts until the poison ends, and the target dies if its hit point maximum is reduced to 0. The poison ends after the creature successfully saves against it three times.
```
^statblock

## Environment

desert, underdark