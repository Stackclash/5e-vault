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
"name": "Lizard King"
"size": "Medium"
"type": "humanoid"
"subtype": "lizardfolk"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "11"
- !!int "15"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "4"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The lizardfolk can hold its breath for 15 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Once per turn, when the lizardfolk makes a melee attack with its trident\
    \ and hits, the target takes an extra 10 (dice: 3d6|avg (3d6)) damage, and\
    \ the lizardfolk gains temporary hit points equal to the extra damage dealt."
  "name": "Skewer"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The lizardfolk makes two attacks: one with its bite and one with its claws\
    \ or trident or two melee attacks with its trident."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing\
    \ damage, or 7 (dice: 1d8 + 3|avg (1d8 + 3)) piercing damage if used with\
    \ two hands to make a melee attack."
  "name": "Trident"
"source":
- "MM"
- "PotA"
- "GoS"
- "TCE"
"image": "/compendium/bestiary/humanoid/token/lizard-king.png"
aliases: ["Lizard King"]
---
# Lizard King
*Source: Monster Manual p. 205, Princes of the Apocalypse, Ghosts of Saltmarsh, Tasha's Cauldron of Everything*  

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
title: Lizard King
![[/6. Mechanics/Bestiary/Humanoid/Token/lizard-king.png#token]]
*Medium humanoid(lizardfolk), Chaotic Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 12d8 + 24|text(78)` (12d8 + 24) 
- **Speed** walk 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|12 (+1)|15 (+2)|11 (+0)|11 (+0)|15 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** Constitution +4, Wisdom +2
- **Skills** Perception +4, Stealth +5, Survival +4
- **Senses** darkvision 60 ft., passive Perception 14
- **Condition Immunities** frightened
- **Languages** Abyssal, Draconic
- **Challenge** 4

## Traits

***Hold Breath.*** The lizardfolk can hold its breath for 15 minutes.

***Skewer.*** Once per turn, when the lizardfolk makes a melee attack with its trident and hits, the target takes an extra 10 (`dice: 3d6` (`3d6`)) damage, and the lizardfolk gains temporary hit points equal to the extra damage dealt.

## Actions

***Multiattack.*** The lizardfolk makes two attacks: one with its bite and one with its claws or trident or two melee attacks with its trident.

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3` (`1d6 + 3`) piercing damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 3` (`1d4 + 3`) slashing damage.

***Trident.*** *Melee or Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d6 + 3` (`1d6 + 3`) piercing damage, or 7 (`dice: 1d8 + 3` (`1d8 + 3`)) piercing damage if used with two hands to make a melee attack.
```
^statblock

## Environment

forest, swamp