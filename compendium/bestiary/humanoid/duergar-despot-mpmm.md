---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/dwarf
statblock: true
statblock-link: "#^statblock"
name: Duergar Despot
ac: 21
hp: 119
hit_dice: 14d8 + 56
cr: '12'
stats: [
  20,
  5,
  19,
  15,
  14,
  13
]
source: [
  MPMM,
  MTF
]
aliases: ["Duergar Despot"]
---
# Duergar Despot
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 107, Mordenkainen's Tome of Foes p. 188*  

Duergar despots replace parts of their bodies with mechanical devices that they control through their psionic abilities.

## Duergar

> [!quote]- A quote from Mordenkainen  
> 
> Duergar architecture is remarkable for its brutalist grandeur. It is not a style I would use for my towers—I prefer gold, gems, and tracery—but I admire the boldness of dwarven stonework.

> [!quote]- A quote from Mordenkainen  
> 
> The mental power that duergar wield was given to them by illithids. But why would illithids create servants who could turn invisible or grow to ogre size?
> 
> Most likely because those servants would excel at herding their masters' other minions. In retrospect, it seems arguable that duergar escaped bondage because their jailers had given them the keys.

Duergar are dwarves of the deep reaches of the Underdark and other sunless realms. Their personalities and abilities have been deeply impacted by their ancestors' captivity and torment by mind flayers; they were infused with powerful psionic abilities but also a profound gloom. In some, this strain of sorrow inspires works of grand but melancholic beauty, while in others, it manifests as rage.

Like many who dwell in the Underdark, duergar must constantly be on guard against the raids and plots of their neighbors. To this end, duergar warriors fulfill a variety of combat roles, often marrying their fury in battle with their psionic abilities or training dangerous Underdark creatures as mounts.

Denigrated by some as joyless, duergar are in fact deeply passionate in all that they do—even if that passion rarely manifests as mirth. They bring an emotional intensity to their lives, whether they're exploring neighboring tunnels, defending their homes, engaging with their families, or crafting bold new works. The bonds of friendship and kinship are strong, though navigating the inevitable outbursts of frustration and despair is not always easy. Similarly, duergar tend to be very community-minded—in the Underdark, all must cooperate to survive.

Among the duergar of the Forgotten Realms, creation is a fiercely passionate process. They tend to favor works that are sturdy and grand, but in a bare, stripped-down fashion that favors geometric forms. The strongholds they design are blocky and stark, and the weapons they forge are blatantly tools of violence. While others may decry their creations as cold and bare of ornamentation to the point of austerity, duergar see them as honoring the materials used and honest about their purpose.

## Stat Block

```ad-statblock
title: Duergar Despot
![](/compendium/bestiary/humanoid/token/duergar-despot.png#token)
*Medium humanoid(dwarf), Any alignment*

- **Armor Class** 21 (natural armor)
- **Hit Points** `dice: 14d8 + 56|text(119)` (14d8 + 56) 
- **Speed** walk 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)| 5 (-3)|19 (+4)|15 (+2)|14 (+2)|13 (+1)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +8, Wisdom +6
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 12
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, poisoned
- **Languages** Dwarvish, Undercommon
- **Challenge** 12

## Traits

***Magic Resistance.*** The duergar has advantage on saving throws against spells and other magical effects.

***Psychic Engine.*** When the duergar suffers a critical hit or is reduced to 0 hit points, psychic energy erupts from its frame to deal 14 (`dice: 4d6|avg` (`4d6`)) psychic damage to each creature within 5 feet of it.

***Sunlight Sensitivity.*** While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight.

***Spellcasting (Psionics).*** The duergar casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 12):

**At will**: [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)

**1/day**: [stinking cloud](/compendium/spells/stinking-cloud.md)

## Actions

***Multiattack.*** The duergar makes two Iron Fist attacks and two Stomping Foot attacks. After one of the attacks, the duergar can move up to its speed without provoking opportunity attack||opportunity attacks. It can replace one of the attacks with a use of Flame Jet.

***Iron Fist.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 5 ft., one target. Hit: `dice: 4d8 + 5|avg` (`4d8 + 5`) bludgeoning damage. If the target is a Large or smaller creature, it must succeed on a DC 17 Strength saving throw or be pushed up to 30 feet away in a straight line and be knocked [prone](compendium/rules/conditions.md#prone).

***Stomping Foot.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 5 ft., one target. Hit: `dice: 1d10 + 5|avg` (`1d10 + 5`) bludgeoning damage, or 21 (`dice: 3d10 + 5|avg` (`3d10 + 5`)) to a [prone](compendium/rules/conditions.md#prone) target.

***Flame Jet.*** The duergar spews flames in a line 100 feet long and 5 feet wide. Each creature in the line must make a DC 16 Dexterity saving throw, taking 18 (`dice: 4d8|avg` (`4d8`)) fire damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

mountain, underdark