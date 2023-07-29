---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Vampiric Mind Flayer
ac: 15
hp: 85
hit_dice: 10d8 + 40
cr: '5'
stats: [
  18,
  18,
  18,
  5,
  15,
  18
]
source: [
  VRGR
]
aliases: ["Vampiric Mind Flayer"]
---
# Vampiric Mind Flayer
*Source: Van Richten's Guide to Ravenloft p. 252*  

When the mind flayers of Bluetspur (see chapter 3) could find no cure for their overlord's affliction, their degenerating elder brain turned to radical methods to stave off dementia and death. The results were vampiric mind flayers, feral atrocities spawned from mind flayer tadpoles infected with vampirism. These specialized but flawed terrors serve a single purpose: to drain the cerebral fluids from sapient minds. After doing so, they return to the Elder Brain of Bluetspur, which liquefies them into its pool and releases their stolen essences amid a hormone brine. This grotesque balm stalls the elder brain's degeneration but is far from a cure.

Vampiric mind flayers are physically and mentally unstable beings. Ghoulish creatures, they let nothing stand between them and their existential imperatives. Although they possess the telepathic abilities of mind flayers, their brains aren't equipped to employ them. Instead, they bombard nearby creatures with a mental static of visceral visions. While these ravenous creatures are horrifying to behold, they unsettle none more than other mind flayers, which consider them abominations.

```ad-statblock
title: Vampiric Mind Flayer
![](/compendium/bestiary/undead/token/vampiric-mind-flayer.png#token)
*Medium undead, Unaligned*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 10d8 + 40|text(85)` (10d8 + 40) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|18 (+4)|18 (+4)| 5 (-3)|15 (+2)|18 (+4)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +7, Intelligence 0, Wisdom +5, Charisma +7
- **Skills** Perception +5, Stealth +7
- **Senses** darkvision 120 ft., passive Perception 15
- **Damage Resistances** necrotic, psychic
- **Condition Immunities** charmed, exhaustion, frightened
- **Languages** telepathy 120 ft. but can only project emotions
- **Challenge** 5

## Traits

***Spider Climb.*** The mind flayer can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Sunlight Sensitivity.*** While in sunlight, the mind flayer has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.

***Unusual Nature.*** The mind flayer doesn't require air, food, or sleep.

## Actions

***Multiattack.*** The mind flayer makes two Claw attacks or one Claw attack and one Tentacles attack.

***Claw.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4|avg` (`1d8 + 4`) slashing damage plus `dice: 3d6|avg` (`3d6`) necrotic damage.

***Tentacles.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one creature. Hit: `dice: 1d6 + 4|avg` (`1d6 + 4`) piercing damage, and if the target is a creature, it is [grappled](compendium/rules/conditions.md#grappled) (escape DC 15).

***Drink Sapience.*** The mind flayer targets one creature it is grappling. The target must succeed on a DC 15 Wisdom saving throw or take `dice: 4d6|avg` (`4d6`) psychic damage and gain 1 level of [exhaustion](compendium/rules/conditions.md#exhaustion). The mind flayer regains a number of hit points equal to the psychic damage dealt. A creature reduced to 0 hit points by the psychic damage dies.

## Bonus Actions

***Disrupt Psyche (Recharge 5-6).*** The mind flayer magically emits psionic energy in a 30-foot-radius sphere centered on itself. Each creature in that area must succeed on a DC 15 Intelligence saving throw or be [incapacitated](compendium/rules/conditions.md#incapacitated) for 1 minute. The [incapacitated](compendium/rules/conditions.md#incapacitated) creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock