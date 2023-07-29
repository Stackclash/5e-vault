---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
name: Spectator
ac: 14
hp: 39
hit_dice: 6d8 + 12
cr: '3'
stats: [
  8,
  14,
  14,
  13,
  14,
  11
]
source: [
  MM,
  LMoP,
  WDH,
  WDMM,
  RMBRE,
  IDRotF,
  SjA,
  KftGV
]
aliases: ["Spectator"]
---
# Spectator
*Source: Monster Manual p. 30, Lost Mine of Phandelver, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, The Lost Dungeon of Rickedness: Big Rick Energy, Icewind Dale: Rime of the Frostmaiden, Spelljammer Academy, Keys from the Golden Vault*  

A spectator is a lesser beholder that is summoned from another plane of existence by a magical ritual, the components of which include four beholder eyestalks that are consumed by the ritual's magic. Appropriately, a spectator has four eyestalks, two on each side of the wide eye at the center of its four-foot diameter body.

## Magical Guardians

A summoned spectator guards a location or a treasure of its summoner's choice for 101 years, allowing no creature but its summoner to enter the area or access the item, unless the summoner instructed otherwise. If the item is stolen or destroyed before the years have all passed, a summoned spectator vanishes. It otherwise never abandons its post.

## Glimmers of Madness

Though it can speak, a spectator communicates primarily by way of telepathy. It is civil while on guard, openly discussing its orders and its summoner. However, even a brief conversation with a spectator is enough to reveal quirks in its personality brought on by its years of isolation. It might invent imaginary enemies, refer to itself in the third person, or try to adopt the voice of its summoner.

Like any beholder, a spectator views itself as the epitome of its kind, and it has an intense hatred of other spectators. If two spectators encounter one another, they almost always fight to the death.

## Freed from Service

When a spectator has fulfilled its service, it is free to do as it pleases. Many take up residence in the places they previously guarded, especially if their summoners have died. With the spectator's loss of purpose, the flickers of madness it displayed during its servitude flourish.

## Stat Block

```ad-statblock
title: Spectator
![](/compendium/bestiary/aberration/token/spectator.png#token)
*Medium aberration, Lawful Neutral*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 6d8 + 12|text(39)` (6d8 + 12) 
- **Speed** walk 0 ft., fly 30 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|14 (+2)|14 (+2)|13 (+1)|14 (+2)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +6
- **Senses** darkvision 120 ft., passive Perception 16
- **Condition Immunities** prone
- **Languages** Deep Speech, Undercommon, telepathy 120 ft.
- **Challenge** 3

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+1` (+1 to hit), reach 5 ft., one target. Hit: `dice: 1d6 - 1|avg` (`1d6 - 1`) piercing damage.

***Eye Rays.*** The spectator shoots up to two of the following magical eye rays at one or two creatures it can see within 90 feet of it. It can use each ray only once on a turn.

- **1. Confusion Ray.** The target must succeed on a DC 13 Wisdom saving throw, or it can't take reactions until the end of its next turn. On its turn, the target can't move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If the target can't attack, it does nothing on its turn.  
- **2. Paralyzing Ray.** The target must succeed on a DC 13 Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **3. Fear Ray.** The target must succeed on a DC 13 Wisdom saving throw or be [frightened](compendium/rules/conditions.md#frightened) for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the spectator is visible to the target, ending the effect on itself on a success.  
- **4. Wounding Ray.** The target must make a DC 13 Constitution saving throw, taking 16 (`dice: 3d10|avg` (`3d10`)) necrotic damage on a failed save, or half as much damage on a successful one.  

***Create Food and Water.*** The spectator magically creates enough food and water to sustain itself for 24 hours.

## Reactions

***Spell Reflection.*** If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30 feet of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature.
```
^statblock

## Environment

underdark