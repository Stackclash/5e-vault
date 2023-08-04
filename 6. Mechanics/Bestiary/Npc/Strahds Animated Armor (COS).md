---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
name: Strahd's Animated Armor
ac: 21
hp: 112
hit_dice: 15d8 + 45
cr: '6'
stats: [
  17,
  13,
  16,
  9,
  10,
  9
]
source: [
  CoS
]
aliases: ["Strahd's Animated Armor"]
---
# Strahd's Animated Armor
*Source: Curse of Strahd p. 227*  

The armor that Strahd wore into battle when he was alive lives on today as a headless, animated suit of plate armor. The armor is painted burgundy and adorned with golden angelic motifs.

## Thing of Evil

Strahd imbued his automaton with a sliver of his being, bequeathing unto his armor a malevolence not found in most animated objects. He also fortified his armor and placed a number of permanent spell effects on it to make the armor a better castle defender.

The armor understands Common but obeys only the commands of its master.

## Stat Block

```ad-statblock
title: Strahd's Animated Armor
![[/6. Mechanics/Bestiary/Npc/Token/strahds-animated-armor.png#token]]
*Medium construct, Lawful Evil*

- **Armor Class** 21 (natural armor)
- **Hit Points** `dice: 15d8 + 45|text(112)` (15d8 + 45) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|13 (+1)|16 (+3)| 9 (-1)|10 (+0)| 9 (-1)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 13
- **Damage Resistances** cold, fire
- **Damage Immunities** lightning, poison
- **Condition Immunities** blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** understands Common but can't speak
- **Challenge** 6

## Traits

***Constructed Nature.*** An animated object doesn't require air, food, drink, or sleep.

The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

***Antimagic Susceptibility.*** The armor is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]] while in the area of an [[/6. Mechanics/Spells/antimagic-field.md\|antimagic field]]. If targeted by [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]] for 1 minute.

***False Appearance.*** While the armor remains motionless, it is indistinguishable from a normal suit of armor.

## Actions

***Multiattack.*** The armor makes two melee attacks or uses Shocking Bolt twice.

***Greatsword.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3\|avg` (`2d6 + 3`) slashing damage plus `dice: 1d6\|avg` (`1d6`) lightning damage.

***Shocking Bolt.*** *Ranged Spell Attack:* `dice: d20+4` (+4 to hit) (with advantage on the attack roll if the target is wearing armor made of metal), range 60 ft., one target. Hit: `dice: 3d6\|avg` (`3d6`) lightning damage.
```
^statblock