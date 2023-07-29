---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Bodak
ac: 15
hp: 58
hit_dice: 9d8 + 18
cr: '6'
stats: [
  15,
  16,
  15,
  7,
  12,
  12
]
source: [
  MPMM,
  VGM
]
aliases: ["Bodak"]
---
# Bodak
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 64, Volo's Guide to Monsters p. 127*  

A bodak is the undying remains of someone who revered Orcus. Devoid of life and soul, it exists only to cause death.

A worshiper of Orcus can take ritual vows while carving the demon lord's symbol on their chest over the heart. Orcus's power flays body, mind, and soul, leaving behind a sentient husk that consumes life energy near it. Most bodaks come into being in this way, then are unleashed to spread death in Orcus's name.

Bodaks are extensions of Orcus's will outside the Abyss, serving the demon prince's aims and other minions. Orcus can recall anything a bodak sees or hears. If he so chooses, he can speak through a bodak to address his enemies and followers directly.

A bodak retains vague impressions of its past life. It seeks out its former allies and enemies alike to destroy them, as its warped soul seeks to erase anything connected to its former life. Minions of Orcus are the one exception to this compulsion; a bodak recognizes them as kindred souls and spares them from its wrath. Anyone who knew the individual before its transformation into a bodak can recognize mannerisms or other subtle clues to its original identity.

```ad-statblock
title: Bodak
![](/compendium/bestiary/undead/token/bodak.png#token)
*Medium undead, Chaotic Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 9d8 + 18|text(58)` (9d8 + 18) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|16 (+3)|15 (+2)| 7 (-2)|12 (+1)|12 (+1)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Perception +4, Stealth +6
- **Senses** darkvision 120 ft., passive Perception 14
- **Damage Resistances** cold; fire; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** necrotic, poison
- **Condition Immunities** charmed, frightened, poisoned
- **Languages** Abyssal, the languages it knew in life
- **Challenge** 6

## Traits

***Death Gaze.*** When a creature that can see the bodak's eyes starts its turn within 30 feet of the bodak, the bodak can force it to make a DC 13 Constitution saving throw if the bodak isn't [incapacitated](compendium/rules/conditions.md#incapacitated) and can see the creature. If the saving throw fails by 5 or more, the creature is reduced to 0 hit points unless it is immune to the [frightened](compendium/rules/conditions.md#frightened) condition. Otherwise, a creature takes `dice: 3d10|avg` (`3d10`) psychic damage on a failed save.

Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it has disadvantage on attack rolls against the bodak until the start of its next turn. If the creature looks at the bodak in the meantime, that creature must immediately make the saving throw.

***Sunlight Hypersensitivity.*** The bodak takes 5 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.

***Unusual Nature.*** The bodak doesn't require air, food, drink, or sleep.

## Actions

***Fist.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) bludgeoning damage plus `dice: 2d8|avg` (`2d8`) necrotic damage.

***Withering Gaze.*** One creature that the bodak can see within 60 feet of it must make a DC 13 Constitution saving throw, taking 22 (`dice: 4d10|avg` (`4d10`)) necrotic damage on a failed save, or half as much damage on a successful one.

## Bonus Actions

***Aura of Annihilation.*** The bodak activates or deactivates this deathly aura. While active, the aura deals 5 necrotic damage to any creature that ends its turn within 30 feet of the bodak. Undead and Fiends ignore this effect.
```
^statblock

## Environment

swamp, underdark, urban