---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/small
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
name: Flying Sword
ac: 17
hp: 17
hit_dice: 5d6
cr: 1/4
stats: [
  12,
  15,
  11,
  1,
  5,
  1
]
source: [
  MM,
  CoS,
  PotA,
  SKT,
  TftYP,
  ToA,
  WDH,
  WDMM,
  GoS,
  BGDIA,
  EGW,
  IDRotF,
  TCE,
  CM,
  KftGV
]
aliases: ["Flying Sword"]
---
# Flying Sword
*Source: Monster Manual p. 20, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, Keys from the Golden Vault*  

A flying sword dances through the air, fighting with the confidence of a warrior that can't be injured. Swords are the most common weapons animated with magic. Axes, clubs, daggers, maces, spears, and even self-loading crossbows are also known to exist in animated object form.

> [!quote]- A quote from Levity Quickstitch, halfling rogue  
> 
> Lyin' next to the chest were the bones of Cap'n Scornblade himself, still clutchin' his rusty sword. Imagine my surprise when the blade flew from his bony grasp! Still go the scar.

## Animated Objects

Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.

### Constructed Nature

An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

## Stat Block

```ad-statblock
title: Flying Sword
![](/compendium/bestiary/construct/token/flying-sword.png#token)
*Small construct, Unaligned*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 5d6|text(17)` (5d6) 
- **Speed** walk 0 ft., fly 50 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|15 (+2)|11 (+0)| 1 (-5)| 5 (-3)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +4
- **Skills** ⏤
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 7
- **Damage Immunities** poison, psychic
- **Condition Immunities** blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned
- **Languages** —
- **Challenge** 1/4

## Traits

***Antimagic Susceptibility.*** The sword is [incapacitated](compendium/rules/conditions.md#incapacitated) while in the area of an [antimagic field](/compendium/spells/antimagic-field.md). If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall [unconscious](compendium/rules/conditions.md#unconscious) for 1 minute.

***False Appearance.*** While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.

## Actions

***Longsword.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 1|avg` (`1d8 + 1`) slashing damage.
```
^statblock