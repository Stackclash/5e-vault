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
name: Grung Elite Warrior
ac: 13
hp: 49
hit_dice: 9d6 + 18
cr: '2'
stats: [
  7,
  16,
  15,
  10,
  11,
  12
]
source: [
  MPMM,
  VGM
]
aliases: ["Grung Elite Warrior"]
---
# Grung Elite Warrior
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 150, Volo's Guide to Monsters p. 157*  

A grung elite warrior typically leads a group of grung and other warriors into battle and is often accompanied by a grung wildling.

## Grungs

Grungs are frog-like folk found in rain forests and tropical jungles. These amphibians prefer shade and live in trees, but they maintain hatcheries for their offspring in well-guarded ground-level pools. About three months after hatching, a grung tadpole takes on the shape of an adult, and after another six months, the grung reaches maturity.

Born in a wide range of colors, grungs most often appear in shades of green, blue, purple, red, orange, and gold. All grungs secrete a substance that is harmless to them but poisonous to other creatures, and sometimes that substance has a special effect based on the grung's color (see "Variant: Grung Poison"). They also use this venom to poison their weapons.

## Stat Block

```ad-statblock
title: Grung Elite Warrior
![](/compendium/bestiary/humanoid/token/grung-elite-warrior.png#token)
*Small humanoid, Any alignment*

- **Armor Class** 13 
- **Hit Points** `dice: 9d6 + 18|text(49)` (9d6 + 18) 
- **Speed** walk 25 ft., climb 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|16 (+3)|15 (+2)|10 (+0)|11 (+0)|12 (+1)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +5
- **Skills** Athletics +2, Perception +2, Stealth +5, Survival +2
- **Senses** passive Perception 12
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Grung
- **Challenge** 2

## Traits

***Amphibious.*** The grung can breathe air and water.

***Poisonous Skin.*** Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a DC 12 Constitution saving throw or become [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute. A [poisoned](compendium/rules/conditions.md#poisoned) creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Standing Leap.*** The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start.

***Water Dependency.*** If the grung isn't immersed in water for at least 1 hour during a day, it suffers 1 level of [exhaustion](compendium/rules/conditions.md#exhaustion) at the end of that day. The grung can recover from this [exhaustion](compendium/rules/conditions.md#exhaustion) only through magic or by immersing itself in water for at least 1 hour.

## Actions

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 3|avg` (`1d4 + 3`) piercing damage plus `dice: 2d4|avg` (`2d4`) poison damage.

***Shortbow.*** *Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), range 80/320 ft., one target. Hit: `dice: 1d6 + 3|avg` (`1d6 + 3`) piercing damage plus `dice: 2d4|avg` (`2d4`) poison damage.

***Mesmerizing Chirr (Recharge 6).*** The grung makes a chirring noise to which grungs are immune. Each Humanoid or Beast that is within 15 feet of the grung and able to hear it must succeed on a DC 12 Wisdom saving throw or be [stunned](compendium/rules/conditions.md#stunned) until the end of the grung's next turn.
```
^statblock

## Environment

forest