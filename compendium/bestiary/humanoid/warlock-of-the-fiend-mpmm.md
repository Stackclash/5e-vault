---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/arctic
- monster/environment/desert
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
name: Warlock of the Fiend
ac: 13
hp: 78
hit_dice: 12d8 + 24
cr: '7'
stats: [
  10,
  16,
  15,
  12,
  12,
  18
]
source: [
  MPMM,
  VGM
]
aliases: ["Warlock of the Fiend"]
---
# Warlock of the Fiend
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 255, Volo's Guide to Monsters p. 219*  

Warlocks of the Fiend gain their powers through magical pacts forged with archfiends of the Lower Planes. These warlocks often keep [imps](/compendium/bestiary/fiend/imp.md) or [quasits](/compendium/bestiary/fiend/quasit.md) as companions, and they tend toward philosophical extremes: consorting with fiendish cults or dedicating their lives to destroying such cults.

## Warlocks

Warlocks gain arcane might through magical pacts with mysterious entities. While some use their abilities to serve the sources of their power, others use them to undermine or even destroy these entities.

## Stat Block

```ad-statblock
title: Warlock of the Fiend
![](/compendium/bestiary/humanoid/token/warlock-of-the-fiend.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 13 (16 with [mage armor](/compendium/spells/mage-armor.md))
- **Hit Points** `dice: 12d8 + 24|text(78)` (12d8 + 24) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|16 (+3)|15 (+2)|12 (+1)|12 (+1)|18 (+4)|

- **Proficiency Bonus** +3
- **Saving Throws** Wisdom +4, Charisma +7
- **Skills** Arcana +4, Deception +7, Persuasion +7, Religion +4
- **Senses** darkvision 60 ft., passive Perception 11
- **Damage Resistances** fire
- **Languages** any two languages (usually Abyssal or Infernal)
- **Challenge** 7

## Traits

***Dark One's Own Luck (Recharges after a Short or Long Rest).*** When the warlock makes an ability check or saving throw, it can add a `dice: d10|avg` (`d10`) to the roll. It can do this after the roll is made but before any of the roll's effects occur.

***Spellcasting.*** The warlock casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 15): 

**At will**: [alter self](/compendium/spells/alter-self.md), [mage armor](/compendium/spells/mage-armor.md) (self only), [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md)

**1/day each**: [banishment](/compendium/spells/banishment.md), [plane shift](/compendium/spells/plane-shift.md), [suggestion](/compendium/spells/suggestion.md)

## Actions

***Multiattack.*** The warlock makes three Scimitar attacks.

***Scimitar.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3|avg` (`1d6 + 3`) slashing damage plus `dice: 4d6|avg` (`4d6`) fire damage.

***Hellfire.*** Green flame explodes in a 10-foot-radius sphere centered on a point within 120 feet of the warlock. Each creature in that area must make a DC 15 Dexterity saving throw, taking 16 (`dice: 3d10|avg` (`3d10`)) fire damage and 11 (`dice: 2d10|avg` (`2d10`)) necrotic damage on a failed save, or half as much damage on a successful one.

## Reactions

***Fiendish Rebuke (3/Day).*** In response to being damaged by a visible creature within 60 feet of it, the warlock forces that creature to make a DC 15 Constitution saving throw, taking 22 (`dice: 4d10|avg` (`4d10`)) necrotic damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

arctic, desert, underdark, urban