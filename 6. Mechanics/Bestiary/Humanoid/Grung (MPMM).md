---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/size/small
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
name: Grung
ac: 12
hp: 11
hit_dice: 2d6 + 4
cr: 1/4
stats: [
  7,
  14,
  15,
  10,
  11,
  10
]
source: [
  MPMM,
  VGM
]
aliases: ["Grung"]
---
# Grung
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 149, Volo's Guide to Monsters p. 156*  

The grung stat block represents a typical grung warrior or hunter, met either in a grung community or traveling elsewhere as a mercenary, game warden, guard, or bandit.

## Grungs

Grungs are frog-like folk found in rain forests and tropical jungles. These amphibians prefer shade and live in trees, but they maintain hatcheries for their offspring in well-guarded ground-level pools. About three months after hatching, a grung tadpole takes on the shape of an adult, and after another six months, the grung reaches maturity.

Born in a wide range of colors, grungs most often appear in shades of green, blue, purple, red, orange, and gold. All grungs secrete a substance that is harmless to them but poisonous to other creatures, and sometimes that substance has a special effect based on the grung's color (see "Variant: Grung Poison"). They also use this venom to poison their weapons.

## Stat Block

```ad-statblock
title: Grung
![[/6. Mechanics/Bestiary/Humanoid/Token/grung.png#token]]
*Small humanoid, Any alignment*

- **Armor Class** 12 
- **Hit Points** `dice: 2d6 + 4|text(11)` (2d6 + 4) 
- **Speed** walk 25 ft., climb 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|14 (+2)|15 (+2)|10 (+0)|11 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +4
- **Skills** Athletics +2, Perception +2, Stealth +4, Survival +2
- **Senses** passive Perception 12
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Grung
- **Challenge** 1/4

## Traits

***Amphibious.*** The grung can breathe air and water.

***Poisonous Skin.*** Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a DC 12 Constitution saving throw or become [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] for 1 minute. A [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Standing Leap.*** The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start.

***Water Dependency.*** If the grung isn't immersed in water for at least 1 hour during a day, it suffers 1 level of [[6. Mechanics/Rules/conditions.md#exhaustion\|exhaustion]] at the end of that day. The grung can recover from this [[6. Mechanics/Rules/conditions.md#exhaustion\|exhaustion]] only through magic or by immersing itself in water for at least 1 hour.

## Actions

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 2\|avg` (`1d4 + 2`) piercing damage plus `dice: 2d4\|avg` (`2d4`) poison damage.
```
^statblock

## Environment

forest