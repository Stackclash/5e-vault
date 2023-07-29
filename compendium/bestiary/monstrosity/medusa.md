---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Medusa
ac: 15
hp: 127
hit_dice: 17d8 + 51
cr: '6'
stats: [
  10,
  15,
  16,
  12,
  13,
  15
]
source: [
  MM,
  WDMM,
  GoS,
  BGDIA,
  ERLW,
  IMR,
  MOT
]
aliases: ["Medusa"]
---
# Medusa
*Source: Monster Manual p. 214, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Mythic Odysseys of Theros*  

As deadly as they are ravishing, the serpent-haired medusas suffer an immortal curse brought on by their vanity. They lurk in quiet exile among the tumbled ruins of their former lives, surrounded by the petrified remains of past admirers and would-be heroes.

## Immortal Splendor

Men and women who desire eternal youth, beauty, and adoration might pray to malicious gods, beg dragons for ancient magic, or seek out powerful archmages to fulfill their wishes. Others make sacrifices to demon lords or archdevils, offering all in exchange for this gift, oblivious to the curse that accompanies it. Those who strike such bargains gain physical beauty, restored youth, immortality, and the adoration of all who behold them, granting them the influence and power they so desire. However, after years of the living like a demigod among mortals, the price for their vanity and hubris is exacted, and they are forever transformed into medusas. A medusa's hair turns into a nest of venomous serpents, and all who gaze upon the medusa are [petrified](compendium/rules/conditions.md#petrified), becoming stone monuments to its corruption.

## Medusa Lairs

Medusas live forever in seclusion, alienated from the world around them by their monstrous form and caprice. Their homes gradually fall into disrepair until they are little more than shadowy ruins covered with thorns and creepers, riddled with obstructions and hiding places. Foolhardy looters and adventurers who enter are often unaware of the medusa's presence until the creature is among them.

A medusa is subject to its own curse. By looking vainly on its reflection, it turns to stone as surely as any living mortal. As a result, a medusa destroys or removes any mirrors or reflective surfaces in its lair.

## Stat Block

```ad-statblock
title: Medusa
![](/compendium/bestiary/monstrosity/token/medusa.png#token)
*Medium monstrosity, Lawful Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 17d8 + 51|text(127)` (17d8 + 51) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|15 (+2)|16 (+3)|12 (+1)|13 (+1)|15 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Deception +5, Insight +4, Perception +4, Stealth +5
- **Senses** darkvision 60 ft., passive Perception 14
- **Languages** Common
- **Challenge** 6

## Traits

***Petrifying Gaze.*** When a creature that can see the medusa's eyes starts its turn within 30 feet of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't [incapacitated](compendium/rules/conditions.md#incapacitated) and can see the creature. If the saving throw fails by 5 or more, the creature is instantly [petrified](compendium/rules/conditions.md#petrified). Otherwise, a creature that fails the save begins to turn to stone and is [restrained](compendium/rules/conditions.md#restrained). The [restrained](compendium/rules/conditions.md#restrained) creature must repeat the saving throw at the end of its next turn, becoming [petrified](compendium/rules/conditions.md#petrified) on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the  [greater restoration](/compendium/spells/greater-restoration.md) spell or other magic.

Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.

If the medusa sees itself reflected on a polished surface within 30 feet of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze.

## Actions

***Multiattack.*** The medusa makes either three melee attacks—one with its snake hair and two with its shortsword—or two ranged attacks with its longbow.

***Snake Hair.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one creature. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage plus `dice: 4d6|avg` (`4d6`) poison damage.

***Shortsword.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage plus `dice: 2d6|avg` (`2d6`) poison damage.
```
^statblock

## Environment

desert