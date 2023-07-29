---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
name: Maurezhi
ac: 15
hp: 88
hit_dice: 16d8 + 16
cr: '7'
stats: [
  14,
  17,
  12,
  11,
  12,
  15
]
source: [
  MPMM,
  MTF
]
aliases: ["Maurezhi"]
---
# Maurezhi
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 175, Mordenkainen's Tome of Foes p. 133*  

When Doresain, the King of Ghouls, corrupted a society of elves, he created a new sort of demon—the maurezhi—to lead packs of [ghouls](/compendium/bestiary/undead/ghoul.md) and [ghasts](/compendium/bestiary/undead/ghast.md) on the Material Plane.

When a maurezhi consumes the corpse of a Humanoid it has slain—a process that takes about 10 minutes—it instantly assumes the creature's appearance as it was in life. The new appearance begins to rot away over the next few days, eventually revealing the demon's original form.

A maurezhi is contagion incarnate. Its bite can drain a victim's sense of self. If this affliction is allowed to go far enough, the victim is infected with an unholy hunger for flesh that overpowers their personality and transforms them into a ghoul.

```ad-statblock
title: Maurezhi
![](/compendium/bestiary/fiend/token/maurezhi.png#token)
*Medium fiend(demon), Chaotic Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 16d8 + 16|text(88)` (16d8 + 16) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|17 (+3)|12 (+1)|11 (+0)|12 (+1)|15 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Deception +5
- **Senses** darkvision 120 ft., passive Perception 11
- **Damage Resistances** cold; fire; lightning; necrotic; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, poisoned
- **Languages** Abyssal, Elvish, telepathy 120 ft.
- **Challenge** 7

## Traits

***Assume Form.*** The maurezhi can assume the appearance of any Medium Humanoid it eats. It remains in this form for `dice: 1d6|avg` (`1d6`) days, during which time the form gradually decays until, when the effect ends, the form sloughs from the demon's body.

***Magic Resistance.*** The maurezhi has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The maurezhi makes one Bite attack and one Claw attack.

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d10 + 3|avg` (`2d10 + 3`) piercing damage. If the target is a Humanoid, its Charisma score is reduced by `dice: 1d4|avg` (`1d4`). This reduction lasts until the target finishes a short or long rest. The target dies if this reduces its Charisma to 0. It rises 24 hours later as a [ghoul](/compendium/bestiary/undead/ghoul.md)  unless it has been revived or its corpse has been destroyed.

***Claw.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 3|avg` (`2d8 + 3`) slashing damage. If the target is a creature other than an Undead, it must succeed on a DC 12 Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Raise Ghoul (Recharge 5-6).*** The maurezhi targets one dead ghoul or [ghast](/compendium/bestiary/undead/ghast.md) it can see within 30 feet of it. The target is revived with all its hit points.
```
^statblock

## Environment

swamp, urban