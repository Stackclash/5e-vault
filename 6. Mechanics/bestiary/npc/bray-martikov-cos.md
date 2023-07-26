---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/small
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
statblock: true
statblock-link: "#^statblock"
name: Bray Martikov
ac: 12
hp: 7
hit_dice: 2d6
cr: '2'
stats: [
  10,
  15,
  11,
  13,
  15,
  14
]
source: [
  CoS
]
aliases: ["Bray Martikov"]
---
*Source: Curse of Strahd p. 98, Derived from Young Wereraven (CoS)*  

```ad-statblock
title: Bray Martikov
![[token/bray-martikov.png#token]]
*Small humanoid(human, shapechanger), Lawful Good*

- **Armor Class** 12 
- **Hit Points** `dice: 2d6|text(7)` (2d6) 
- **Speed** walk 30 ft. (fly 50 ft. in raven and hybrid forms)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|15 (+2)|11 (+0)|13 (+1)|15 (+2)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Insight +4, Perception +6
- **Senses** passive Perception 16
- **Languages** Common (can't speak in raven form)
- **Challenge** 2

## Traits

***Shapechanger.*** Bray can use its action to polymorph into a raven-humanoid hybrid or into a raven, or back into its human form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its human form if it dies.

***Mimicry.*** Bray can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.

***Regeneration.*** Bray regains 10 hit points at the start of its turn. If Bray takes damage from a silvered weapon or a spell, this trait doesn't function at the start of Bray's next turn. Bray dies only if it starts its turn with 0 hit points and doesn't regenerate.

## Actions

***Multiattack (Human or Hybrid Form Only).*** Bray makes two weapon attacks, one of which can be with its hand crossbow.

***Beak (Raven or Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: 1 piercing damage in raven form, or 4 (`dice: 1d4 + 2|avg` (`1d4 + 2`)) piercing damage in hybrid form. If the target is humanoid, it must succeed on a DC 10 Constitution saving throw or be cursed with wereraven lycanthropy.

***Shortsword (Human or Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.

***Hand Crossbow (Human or Hybrid Form Only).*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 30/120 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.
```
^statblock