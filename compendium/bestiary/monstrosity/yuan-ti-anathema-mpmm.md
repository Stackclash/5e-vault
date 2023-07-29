---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/forest
- monster/environment/underdark
- monster/size/huge
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Yuan-ti Anathema
ac: 16
hp: 189
hit_dice: 18d12 + 72
cr: '12'
stats: [
  23,
  13,
  19,
  19,
  17,
  20
]
source: [
  MPMM,
  VGM
]
aliases: ["Yuan-ti Anathema"]
---
# Yuan-ti Anathema
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 272, Volo's Guide to Monsters p. 202*  

As part of their quest for godhood, a yuan-ti abomination might perform a ritual that, if successful, transforms them into an even greater form: a yuan-ti anathema. This ritual demands the sacrifice of hundreds of snakes and requires the abomination to bathe in the blood of their enemies. The transformation is quick but painful.

Anathemas consider themselves demigods on the path to greater divinity. They demand obeisance from weaker creatures and use every resource at their disposal to war against neighbors, seeking the captives, sacrifices, glory, and riches the anathemas believe they need to achieve true divinity.

Anathemas don't age, allowing them to pursue their goals until the end of days. Truly powerful ones might rule multiple yuan-ti cities and bring entire regions under their control.

```ad-statblock
title: Yuan-ti Anathema
![](/compendium/bestiary/monstrosity/token/yuan-ti-anathema.png#token)
*Huge monstrosity, Neutral Evil*

- **Armor Class** 16 (natural armor)
- **Hit Points** `dice: 18d12 + 72|text(189)` (18d12 + 72) 
- **Speed** walk 40 ft., climb 40 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|23 (+6)|13 (+1)|19 (+4)|19 (+4)|17 (+3)|20 (+5)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** Perception +11, Stealth +5
- **Senses** blindsight 30 ft., darkvision 60 ft., passive Perception 21
- **Damage Resistances** acid, fire, lightning
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, Common, Draconic
- **Challenge** 12

## Traits

***Magic Resistance.*** The anathema has advantage on saving throws against spells and other magical effects.

***Ophidiophobia Aura.*** Any creature of the anathema's choice, other than a snake or a yuan-ti, that starts its turn within 30 feet of the anathema must succeed on a DC 17 Wisdom saving throw or become [frightened](compendium/rules/conditions.md#frightened) of snakes and yuan-ti. A [frightened](compendium/rules/conditions.md#frightened) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this anathama's aura for the next 24 hours.

***Six Heads.*** The anathema has advantage on saves against being [blinded](compendium/rules/conditions.md#blinded), [charmed](compendium/rules/conditions.md#charmed), [deafened](compendium/rules/conditions.md#deafened), [frightened](compendium/rules/conditions.md#frightened), [stunned](compendium/rules/conditions.md#stunned), or knocked [unconscious](compendium/rules/conditions.md#unconscious).

***Spellcasting (Anathema Form Only).*** The anathema casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 17):

**At will**: [animal friendship](/compendium/spells/animal-friendship.md) (snakes only)

**3/day each**: [darkness](/compendium/spells/darkness.md), [entangle](/compendium/spells/entangle.md), [fear](/compendium/spells/fear.md), [polymorph](/compendium/spells/polymorph.md), [suggestion](/compendium/spells/suggestion.md)

## Actions

***Multiattack (Anathema Form Only).*** The anathema makes two Claw attacks and one Flurry of Bites attack.

***Claw (Anathema Form Only).*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 10 ft., one target. Hit: `dice: 2d6 + 6|avg` (`2d6 + 6`) slashing damage.

***Flurry of Bites (Anathema Form Only).*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 10 ft., one creature. Hit: `dice: 6d6 + 6|avg` (`6d6 + 6`) piercing damage plus `dice: 4d6|avg` (`4d6`) poison damage.

***Constrict (Snake Form Only).*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 15 ft., one Large or smaller creature. Hit: `dice: 3d6 + 6|avg` (`3d6 + 6`) bludgeoning damage plus `dice: 2d6|avg` (`2d6`) acid damage, and the target is [grappled](compendium/rules/conditions.md#grappled) (escape DC 16). Until this grapple ends, the target is [restrained](compendium/rules/conditions.md#restrained), and it takes `dice: 3d6 + 6|avg` (`3d6 + 6`) bludgeoning damage plus `dice: 2d6|avg` (`2d6`) acid damage at the start of each of its turns. The anathema can constrict only one creature at a time.

## Bonus Actions

***Change Shape.*** The anathema transforms into a Huge constrictor snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed.
```
^statblock

## Environment

desert, forest, underdark