---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/swamp
- monster/size/medium
- monster/type/humanoid/lizardfolk
statblock: true
statblock-link: "#^statblock"
name: Lizardfolk Shaman
ac: 13
hp: 27
hit_dice: 5d8 + 5
cr: '2'
stats: [
  15,
  10,
  13,
  10,
  15,
  8
]
source: [
  MM,
  PotA,
  ToA,
  GoS,
  IMR,
  EGW
]
aliases: ["Lizardfolk Shaman"]
---
*Source: Monster Manual p. 205, Princes of the Apocalypse, Tomb of Annihilation, Ghosts of Saltmarsh, Infernal Machine Rebuild, Explorer's Guide to Wildemount*  

Lizardfolk are primitive reptilian humanoids that lurk in the swamps and jungles of the world. Their hut villages thrive in forbidding grottos, half-sunken ruins, and watery caverns.

## Territorial Xenophobes

Lizardfolk deal and trade with other races only rarely. Fiercely territorial, they use camouflaged scouts to guard the perimeter of their domain. When unwelcome visitors are detected, a tribe sends a hunting band to harass or drive the trespassers off, or tricks them into blundering into the lairs of crocodiles and other dangerous creatures.

Lizardfolk have no notion of traditional morality, and they find the concepts of good and evil utterly alien. Truly neutral creatures, they kill when it is expedient and do whatever it takes to survive.

Lizardfolk rarely stray beyond their claimed hunting grounds. Any creature that enters their territory is fair game to be stalked, killed, and devoured. They make no distinction between humanoids, beasts, and monsters. Similarly, lizardfolk don't like reaching too far beyond their borders, where they could easily become the hunted instead of the hunters.

Occasions might arise when lizardfolk will form alliances with their neighbors. These lizardfolk usually learn firsthand that humans, dwarves, halflings, and elves can sometimes prove helpful or trustworthy. Once lizardfolk forge ties with outsiders, they are steadfast and fierce allies.

## Great Feasts and Sacrifices

Lizardfolk are omnivorous, but they have a taste for humanoid flesh. Prisoners are often taken back to their camps to become the centerpieces of great feasts and rites involving dancing, storytelling, and ritual combat.

Victims are either cooked and eaten by the tribe, or are sacrificed to Semuanya, the lizardfolk god.

## Canny Crafters

Though they aren't skilled artisans, lizardfolk craft tools and ornamental jewelry out of the bones of their kills, and they use the hides and shells of dead monsters to create shields.

## Lizardfolk Leaders

Lizardfolk respect and fear magic with a religious awe. Lizardfolk shamans lead their tribes, overseeing rites and ceremonies performed to honor Semuanya. From time to time, however, a lizardfolk tribe produces a powerful figure touched not by Semuanya but by Sess'inek-a reptilian demon lord who seeks to corrupt and control the lizardfolk.

Lizardfolk born in Sess'inek's image are larger and more cunning than other lizardfolk, and are thoroughly evil. These lizard kings and queens dominate lizardfolk tribes, usurping a shaman's authority and inspiring uncharacteristic aggression among their subjects.

## Dragon Worshipers

Lizardfolk speak Draconic, which they are thought to have learned from dragons in ancient times. A tribe that wanders into the territory of a dragon will offer it tribute to win its favor. An evil dragon might exploit lizardfolk for its own vile ends, turning them into raiders and plunderers.

> [!quote]- A quote from A merchant's account of his experience with the lizardfolk tribes of the Lizard Marsh  
> 
> In all my dealings with the lizardfolk, I was never able to tell what they were thinking. Their reptilian eyes belied no hint of their intentions. I gave them supplies. They gave me the willies.


## Stat Block

```ad-statblock
title: Lizardfolk Shaman
![[token/lizardfolk-shaman.png#token]]
*Medium humanoid(lizardfolk), Neutral*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 5d8 + 5|text(27)` (5d8 + 5) 
- **Speed** walk 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|10 (+0)|13 (+1)|10 (+0)|15 (+2)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +4, Stealth +4, Survival +6
- **Senses** passive Perception 14
- **Languages** Draconic
- **Challenge** 2

## Traits

***Hold Breath.*** The lizardfolk can hold its breath for 15 minutes.

***Spellcasting (Lizardfolk Form Only).*** The lizardfolk is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, `dice: d20+4` (+4 to hit) with spell attacks). The lizardfolk has the following druid spells prepared:

**Cantrips (at will)**: [druidcraft](/6. Mechanics/spells/druidcraft.md), [produce flame](/6. Mechanics/spells/produce-flame.md), [thorn whip](/6. Mechanics/spells/thorn-whip.md)

**1st level (4 1st-level slots)**: [entangle](/6. Mechanics/spells/entangle.md), [fog cloud](/6. Mechanics/spells/fog-cloud.md)

**2nd level (3 2nd-level slots)**: [heat metal](/6. Mechanics/spells/heat-metal.md), [spike growth](/6. Mechanics/spells/spike-growth.md)

**3rd level (2 3rd-level slots)**: [conjure animals](/6. Mechanics/spells/conjure-animals.md) (reptiles only), [plant growth](/6. Mechanics/spells/plant-growth.md)

## Actions

***Multiattack (Lizardfolk Form Only).*** The lizardfolk makes two attacks: one with its bite and one with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage, or 7 (`dice: 1d10 + 2|avg` (`1d10 + 2`)) piercing damage in [crocodile](/6. Mechanics/bestiary/beast/crocodile.md) form. If the lizardfolk is in crocodile form and the target is a Large or smaller creature, the target is [grappled](/6. Mechanics/rules/conditions.md#grappled) (escape DC 12). Until this grapple ends, the target is [restrained](/6. Mechanics/rules/conditions.md#restrained), and the lizardfolk can't bite another target. If the lizardfolk reverts to its true form, the grapple ends.

***Claws (Lizardfolk Form Only).*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) slashing damage.

***Change Shape (Recharges after a Short or Long Rest).*** The lizardfolk magically polymorphs into a [crocodile](/6. Mechanics/bestiary/beast/crocodile.md), remaining in that form for up to 1 hour. It can revert to its true form as a bonus action. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
```
^statblock

## Environment

forest, swamp