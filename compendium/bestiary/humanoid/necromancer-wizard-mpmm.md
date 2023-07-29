---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
name: Necromancer Wizard
ac: 12
hp: 110
hit_dice: 20d8 + 20
cr: '9'
stats: [
  9,
  14,
  12,
  17,
  12,
  11
]
source: [
  MPMM,
  VGM
]
aliases: ["Necromancer Wizard"]
---
# Necromancer Wizard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 264, Volo's Guide to Monsters p. 217*  

Necromancers study the interaction of life, death, and undeath. Some necromancers dig up or purchase corpses to create Undead servitors. A few instead use their powers for good, hunting Undead.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Stat Block

```ad-statblock
title: Necromancer Wizard
![](/compendium/bestiary/humanoid/token/necromancer-wizard.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 12 (15 with [mage armor](/compendium/spells/mage-armor.md))
- **Hit Points** `dice: 20d8 + 20|text(110)` (20d8 + 20) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|14 (+2)|12 (+1)|17 (+3)|12 (+1)|11 (+0)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +7, Wisdom +5
- **Skills** Arcana +7, History +7
- **Senses** passive Perception 11
- **Damage Resistances** necrotic
- **Languages** any four languages
- **Challenge** 9

***Spellcasting.*** The necromancer casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 15):

**At will**: [dancing lights](/compendium/spells/dancing-lights.md), [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)

**1/day each**: [circle of death](/compendium/spells/circle-of-death.md)

**2/day each**: [bestow curse](/compendium/spells/bestow-curse.md), [dimension door](/compendium/spells/dimension-door.md), [mage armor](/compendium/spells/mage-armor.md), [web](/compendium/spells/web.md)

## Actions

***Multiattack.*** The necromancer makes three Arcane Burst attacks.

***Arcane Burst.*** *Melee or Ranged Spell Attack:* `dice: d20+7` (+7 to hit), reach 5 ft. or range 120 ft., one target. Hit: `dice: 4d10 + 3|avg` (`4d10 + 3`) necrotic damage.

## Bonus Actions

***Summon Undead (1/Day).*** The necromancer magically summons five [skeletons](/compendium/bestiary/undead/skeleton.md) or [zombies](/compendium/bestiary/undead/zombie.md). The summoned creatures appear in unoccupied spaces within 60 feet of the necromancer, whom they obey. They take their turns immediately after the necromancer. Each lasts for 1 hour, until it or the necromancer dies, or until the necromancer dismisses it as a bonus action.

## Reactions

***Grim Harvest (1/Turn).*** When the necromancer kills a creature with necrotic damage, the necromancer regains 9 (`dice: 2d8|avg` (`2d8`)) hit points. 
```
^statblock

## Environment

desert, urban