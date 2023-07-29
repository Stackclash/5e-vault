---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/swamp
- monster/size/small
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
name: Vegepygmy Chief
ac: 14
hp: 33
hit_dice: 6d6 + 12
cr: '2'
stats: [
  14,
  14,
  14,
  7,
  12,
  9
]
source: [
  MPMM,
  VGM
]
aliases: ["Vegepygmy Chief"]
---
# Vegepygmy Chief
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 253, Volo's Guide to Monsters p. 197*  

As a [vegepygmy](/compendium/bestiary/plant/vegepygmy-mpmm.md) ages, it grows tougher and develops spore clusters on its body. Other vegepygmies defer to these so-called chiefs. A chief can expel its spores in a burst, infecting nearby creatures. If a creature dies while infected, its corpse produces vegepygmies the same way russet mold does.

## Vegepygmies

Vegepygmies are fungus creatures that live in simple bands, hunting for sustenance and spreading the spores by which they reproduce. Also called mold folk or moldies, vegepygmies inhabit dark, moist areas, so they're most commonly found underground or in forests where little sunlight penetrates. A vegepygmy feels kinship with other plant and fungus creatures, and thus vegepygmy bands coexist well with creatures such as [myconid adults](/compendium/bestiary/plant/myconid-adult.md), [shriekers](/compendium/bestiary/plant/shrieker.md), and [violet fungi](/compendium/bestiary/plant/violet-fungus.md).

Although they prefer to eat fresh meat, bone, and blood, vegepygmies can absorb nutrients from soil and many sorts of organic matter, so they rarely go hungry. A vegepygmy can hiss and make other noises by forcing air through its mouth, but it can't speak in a conventional sense. Among themselves, vegepygmies communicate by hissing, gestures, and tapping. Vegepygmies build and craft little; any gear they have is acquired from other creatures or built by copying simple construction they have witnessed.

## Stat Block

```ad-statblock
title: Vegepygmy Chief
![](/compendium/bestiary/plant/token/vegepygmy-chief.png#token)
*Small plant, Neutral*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 6d6 + 12|text(33)` (6d6 + 12) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|14 (+2)|14 (+2)| 7 (-2)|12 (+1)| 9 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 13
- **Damage Resistances** lightning, piercing
- **Languages** Vegepygmy
- **Challenge** 2

## Traits

***Plant Camouflage.*** The vegepygmy has advantage on Dexterity ([Stealth](compendium/rules/skills.md#Stealth)) checks it makes in any terrain with ample obscuring vegetation.

***Regeneration.*** The vegepygmy regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate.

## Actions

***Multiattack.*** The vegepygmy makes two Claw attacks or two melee Spear attacks.

***Claws.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) slashing damage.

***Spear.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage, or 6 (`dice: 1d8 + 2|avg` (`1d8 + 2`)) piercing damage if used with two hands to make a melee attack.

***Spores (1/Day).*** A 15-foot-radius cloud of toxic spores extends out from the vegepygmy. The spores spread around corners. Each creature in that area that isn't a Plant must succeed on a DC 12 Constitution saving throw or be [poisoned](compendium/rules/conditions.md#poisoned). While [poisoned](compendium/rules/conditions.md#poisoned) in this way, a target takes `dice: 2d8|avg` (`2d8`) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock

## Environment

forest, swamp