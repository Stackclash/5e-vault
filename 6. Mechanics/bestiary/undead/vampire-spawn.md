---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Vampire Spawn
ac: 15
hp: 82
hit_dice: 11d8 + 33
cr: '5'
stats: [
  16,
  16,
  16,
  11,
  10,
  12
]
source: [
  MM,
  CoS,
  HotDQ,
  PotA,
  RoT,
  TftYP,
  WDMM,
  GoS,
  DIP,
  SLW,
  EGW,
  TCE
]
aliases: ["Vampire Spawn"]
---
# Vampire Spawn
*Source: Monster Manual p. 298, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything*  

```ad-statblock
title: Vampire Spawn
![](/compendium/bestiary/undead/token/vampire-spawn.png#token)
*Medium undead, Neutral Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 11d8 + 33|text(82)` (11d8 + 33) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|16 (+3)|16 (+3)|11 (+0)|10 (+0)|12 (+1)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +6, Wisdom +3
- **Skills** Perception +3, Stealth +6
- **Senses** darkvision 60 ft., passive Perception 13
- **Damage Resistances** necrotic; bludgeoning, piercing, slashing from nonmagical attacks
- **Languages** the languages it knew in life
- **Challenge** 5

## Traits

***Regeneration.*** The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.

***Spider Climb.*** The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Vampire Weaknesses.*** The vampire has the following flaws:

_Forbiddance._ The vampire can't enter a residence without an invitation from one of the occupants.

_Harmed by Running Water._ The vampire takes 20 acid damage when it ends its turn in running water.

_Stake to the Heart._ The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is [[compendium/rules/conditions.md#incapacitated|incapacitated]] in its resting place.

_Sunlight Hypersensitivity._ The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.

## Actions

***Multiattack.*** The vampire makes two attacks, only one of which can be a bite attack.

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one willing creature, or a creature that is [[compendium/rules/conditions.md#grappled|grappled]] by the vampire, [[compendium/rules/conditions.md#incapacitated|incapacitated]], or [[compendium/rules/conditions.md#restrained|restrained]]. Hit: 1d6 + 3\|avg (`1d6 + 3`) piercing damage plus 2d6\|avg (`2d6`) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.

***Claws.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one creature. Hit: 2d4 + 3\|avg (`2d4 + 3`) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13).
```
^statblock

## Environment

underdark, urban