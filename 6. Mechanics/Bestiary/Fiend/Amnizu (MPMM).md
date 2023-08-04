---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/fiend/devil
statblock: true
statblock-link: "#^statblock"
name: Amnizu
ac: 21
hp: 202
hit_dice: 27d8 + 81
cr: '18'
stats: [
  11,
  13,
  16,
  20,
  12,
  18
]
source: [
  MPMM,
  MTF
]
aliases: ["Amnizu"]
---
# Amnizu
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 46, Mordenkainen's Tome of Foes p. 164*  

Amnizus lead infernal legions into battle and command guardians at the gateways to the Hells. Amnizus are arrogant, bullying, and ruthless, but they're also highly intelligent tacticians and unfailingly loyal—qualities the hellish archdukes value.

Some amnizus perform the critical task of watching over the River Styx from fortresses along the river's blighted banks, where it flows through Dis and Stygia. They collect the souls arriving in the form of [[/6. Mechanics/Bestiary/Fiend/lemure.md\|lemures]]. Lemures have no personalities or memories; they're driven only by the desire to commit evil. The amnizus that patrol here drill the rules of the Nine Hells into the new arrivals' minds and marshal them into legions.

```ad-statblock
title: Amnizu
![[/6. Mechanics/Bestiary/Fiend/Token/amnizu.png#token]]
*Medium fiend(devil), Lawful Evil*

- **Armor Class** 21 (natural armor)
- **Hit Points** `dice: 27d8 + 81|text(202)` (27d8 + 81) 
- **Speed** walk 30 ft., fly 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|13 (+1)|16 (+3)|20 (+5)|12 (+1)|18 (+4)|

- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +7, Constitution +9, Wisdom +7, Charisma +10
- **Skills** Perception +7
- **Senses** darkvision 120 ft., passive Perception 17
- **Damage Resistances** cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** fire, poison
- **Condition Immunities** charmed, poisoned
- **Languages** Common, Infernal, telepathy 1,000 ft.
- **Challenge** 18

## Traits

***Devil's Sight.*** Magical darkness doesn't impede the amnizu's [[6. Mechanics/Rules/senses.md#darkvision\|darkvision]].

***Magic Resistance.*** The amnizu has advantage on saving throws against spells and other magical effects.

***Spellcasting.*** The amnizu casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save DC 19):

**At will**: [[/6. Mechanics/Spells/command.md\|command]]

**1/day**: [[/6. Mechanics/Spells/feeblemind.md\|feeblemind]]

**3/day**: [[/6. Mechanics/Spells/dominate-monster.md\|dominate monster]]

## Actions

***Multiattack.*** The amnizu uses Blinding Rot or Forgetfulness, if available. It also makes two Taskmaster Whip attacks.

***Taskmaster Whip.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 10 ft., one target. Hit: `dice: 1d8 + 5\|avg` (`1d8 + 5`) slashing damage plus `dice: 3d10\|avg` (`3d10`) force damage.

***Blinding Rot.*** The amnizu targets one or two creatures that it can see within 60 feet of it. Each target must succeed on a DC 19 Wisdom saving throw or take `dice: 4d12\|avg` (`4d12`) necrotic damage and be [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] until the start of the amnizu's next turn.

***Forgetfulness (Recharge 6).*** The amnizu targets one creature it can see within 60 feet of it. That creature must succeed on a DC 18 Intelligence saving throw or take `dice: 4d12\|avg` (`4d12`) psychic damage and become [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] for 1 minute. A [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target is [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] for the full minute, it forgets everything it sensed, experienced, and learned during the last 5 hours.

## Reactions

***Instinctive Charm.*** When a creature within 60 feet of the amnizu makes an attack roll against it, and another creature is within the attack's range, the attacker must make a DC 19 Wisdom saving throw. On a failed save, the attacker must target the creature that is closest to it, not including the amnizu or itself. If multiple creatures are closest, the attacker chooses which one to target. If the saving throw is successful, the attacker is immune to the amnizu's Instinctive Charm for 24 hours.
```
^statblock