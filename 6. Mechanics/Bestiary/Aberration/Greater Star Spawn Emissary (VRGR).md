---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/huge
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
name: Greater Star Spawn Emissary
ac: 15
hp: 290
hit_dice: 20d12 + 160
cr: '21'
stats: [
  24,
  13,
  26,
  27,
  22,
  25
]
source: [
  VRGR
]
aliases: ["Greater Star Spawn Emissary"]
---
# Greater Star Spawn Emissary
*Source: Van Richten's Guide to Ravenloft p. 245*  

An emissary's greater form sheds all pretense of being part of a plane's reality and openly mocks it. A destructive titan, this form rises in a 25-foot-tall pillar of violent flesh amalgamating the meat and voices of every form the emissary has ever mimicked. Manifestations of alien hunger erupt from this horror in waves of ravenous organs and mind-breaking psychic assaults.

## Star Spawn Emissary

Few understand the full hungry hostility of the multiverse. Star spawn emissaries are the fingers of alien realms, digits that tip the scales of reality toward terror. Heralded by ominous astrological events, these ravenous invaders make worlds ready for unimaginable masters or distant, greater manifestations of themselves. Employing their malleable forms, emissaries work to undermine perceptions of order, trust, and reality on global scales, readying worlds for sanity-shattering revelations and cascading apocalypses. Only when truly threatened, or when their foes have lost all hope, do emissaries reveal their actual, impossible forms.

### Forms of the Emissary

Star spawn emissaries can assume two forms: a lesser form suited to infiltration and a greater, physically overwhelming form. To destroy an emissary, characters must reduce each of its forms to 0 hit points one after another. Typically, a star spawn emissary is initially encountered in its lesser form. When this form is destroyed, the emissary's body collapses into a gory slurry. It then instantly returns in its greater form. Only if the emissary is defeated in its greater form does the star spawn die.

After finishing a long rest, a greater star spawn emissary regains its lesser form if it was destroyed. When an emissary transitions from one form to another, it loses all the traits and actions of the previous form and gains those of the new form.

## Stat Block

```ad-statblock
title: Greater Star Spawn Emissary
![[/6. Mechanics/Bestiary/Aberration/Token/greater-star-spawn-emissary.png#token]]
*Huge aberration, Unaligned*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 20d12 + 160|text(290)` (20d12 + 160) 
- **Speed** walk 40 ft., fly 40 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)|13 (+1)|26 (+8)|27 (+8)|22 (+6)|25 (+7)|

- **Proficiency Bonus** +7
- **Saving Throws** Constitution +15, Intelligence +15, Wisdom +13, Charisma +14
- **Skills** Arcana +22, Perception +13
- **Senses** truesight 120 ft., passive Perception 23
- **Damage Resistances** acid, force, necrotic, psychic
- **Condition Immunities** charmed, frightened
- **Languages** all, telepathy 1,000 ft.
- **Challenge** 21

## Traits

***Legendary Resistance (4/Day).*** If the emissary fails a saving throw, it can choose to succeed instead.

***Unusual Nature.*** The emissary doesn't require air, food, drink, or sleep.

## Actions

***Multiattack.*** The emissary makes three attacks.

***Lashing Maw.*** *Melee Weapon Attack:* `dice: d20+14` (+14 to hit), reach 15 ft., one target. Hit: `dice: 2d10 + 7\|avg` (`2d10 + 7`) piercing damage plus `dice: 3d8\|avg` (`3d8`) acid damage.

***Psychic Orb.*** *Ranged Spell Attack:* `dice: d20+15` (+15 to hit), range 120 ft., one creature. Hit: `dice: 3d12 + 8\|avg` (`3d12 + 8`) psychic damage.

***Unearthly Bile (Recharge 5-6).*** The emissary expels bile that splashes all creatures in a 30-foot-radius sphere centered on a point within 120 feet of the emissary. Each creature in that area must make a DC 23 Dexterity saving throw, taking 55 (`dice: 10d10\|avg` (`10d10`)) acid damage on a failed save, or half as much damage on a successful one. For each creature that fails the saving throw, a [[/6. Mechanics/Bestiary/Aberration/Gibbering Mouther.md\|gibbering mouther]] (see its entry in the Monster Manual) appears in an unoccupied space on a surface that can support it within 30 feet of that creature. The gibbering mouthers act right after the emissary on the same initiative count, gaining a +7 bonus to their attack and damage rolls, and fighting until they are destroyed. They disappear when the emissary dies.

## Legendary Actions

***Attack.*** The emissary teleports up to 30 feet to an unoccupied space it can see and makes one attack.

***Warp Space (Costs 2 Actions).*** The emissary causes the ground in a 20-foot square that it can see within 90 feet of it to turn into teeth and maws until the start of its next turn. The area becomes difficult terrain for the duration. Any creature takes `dice: 3d6\|avg` (`3d6`) piercing damage for each 5 feet it moves on this terrain.

***Mind Cloud (Costs 3 Actions).*** The emissary unleashes a psychic wave. Each creature within 30 feet of the emissary must succeed on a DC 23 Wisdom saving throw or take `dice: 5d12\|avg` (`5d12`) psychic damage. In addition, every spell ends on creatures and objects of the emissary's choice in that area.
```
^statblock