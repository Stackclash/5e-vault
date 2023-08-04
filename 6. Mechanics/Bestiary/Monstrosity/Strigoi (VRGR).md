---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Strigoi
ac: 16
hp: 52
hit_dice: 7d8 + 21
cr: '4'
stats: [
  17,
  14,
  16,
  11,
  17,
  10
]
source: [
  VRGR
]
aliases: ["Strigoi"]
---
# Strigoi
*Source: Van Richten's Guide to Ravenloft p. 246*  

The first strigoi were created by spellcasters who subjected swarms of stirges to transmutation spells. Other strigoi have emerged as the results of similar spellcraft, as the byproducts of outlandish scientific experiments, and from stirges draining well-fed vampires. When a strigoi arises, the unnatural creature is overwhelmed by instinctual hunger that drives it to undertake bloodthirsty rampages along with swarms of emboldened, bloodsucking pests.

Strigoi drain the blood, marrow, and soft tissues from their victims, leaving behind nothing but empty husks. Due to the horrifying nature of their deaths, those slain by strigoi occasionally reanimate as boneless.

Many strigoi seek ways to return to their former existence while being compelled to drain living victims. Others, though, embrace their new forms and mimic vampires. These would-be bloodsucker aristocrats create stirge courts amid scabrous husk-decorated villas and drain the life from any who balk at their grotesque gentility.

```ad-statblock
title: Strigoi
![[/6. Mechanics/Bestiary/Monstrosity/Token/strigoi.png#token]]
*Medium monstrosity, Unaligned*

- **Armor Class** 16 (natural armor)
- **Hit Points** `dice: 7d8 + 21|text(52)` (7d8 + 21) 
- **Speed** walk 30 ft., fly 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|14 (+2)|16 (+3)|11 (+0)|17 (+3)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** Strength +5, Dexterity +4, Wisdom +5
- **Skills** Perception +5, Stealth +6
- **Senses** darkvision 120 ft., passive Perception 15
- **Damage Resistances** necrotic
- **Condition Immunities** charmed, frightened
- **Languages** Common
- **Challenge** 4

## Traits

***Stirge Telepathy.*** The strigoi can magically command any [[/6. Mechanics/Bestiary/Beast/Stirge.md\|stirge]] within 120 feet of it, using a limited form of telepathy.

## Actions

***Multiattack.*** The strigoi makes one Claw attack and makes one Proboscis attack.

***Claw.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3\|avg` (`1d8 + 3`) slashing damage plus `dice: 1d12\|avg` (`1d12`) acid damage.

***Proboscis.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one creature. Hit: `dice: 1d10 + 3\|avg` (`1d10 + 3`) piercing damage plus `dice: 3d6\|avg` (`3d6`) necrotic damage, and the strigoi regains hit points equal to the amount of necrotic damage dealt. A creature reduced to 0 hit points from this attack dies and leaves nothing behind except its skin and its equipment.

***Ravenous Children (1/Day).*** The strigoi magically summons `dice: 1d4 + 2\|avg` (`1d4 + 2`) [[/6. Mechanics/Bestiary/Beast/Stirge.md\|stirges]] (see their entry in the Monster Manual) in unoccupied spaces it can see within 30 feet of it. The stirges are under the strigoi's control and act immediately after the strigoi in the initiative order. The stirges disappear after 1 hour, when the strigoi dies, or when the strigoi dismisses them (no action required).
```
^statblock