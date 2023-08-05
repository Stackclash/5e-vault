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
"name": "Grung Wildling"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "27"
"hit_dice": "5d6 + 10"
"stats":
- !!int "7"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "15"
- !!int "11"
"speed": "walk 25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 14"
"languages": "Grung"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The grung casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md)\n\
    \n2/day: [plant growth](/compendium/spells/plant-growth.md)\n\n3/day each:\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [spike growth](/compendium/spells/spike-growth.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The grung can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Any creature that grapples the grung or otherwise comes into direct contact\
    \ with the grung's skin must succeed on a DC 12 Constitution saving throw or become\
    \ [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute. A [poisoned](compendium/rules/conditions.md#poisoned)\
    \ creature no longer in direct contact with the grung can repeat the saving throw\
    \ at the end of each of its turns, ending the effect on itself on a success."
  "name": "Poisonous Skin"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The grung's long jump is up to 25 feet and its high jump is up to 15 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the grung isn't immersed in water for at least 1 hour during a day,\
    \ it suffers 1 level of [exhaustion](compendium/rules/conditions.md#exhaustion)\
    \ at the end of that day. The grung can recover from this [exhaustion](compendium/rules/conditions.md#exhaustion)\
    \ only through magic or by immersing itself in water for at least 1 hour."
  "name": "Water Dependency"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 3|avg (1d4 + 3) piercing\
    \ damage plus dice: 2d4|avg (2d4) poison damage."
  "name": "Dagger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+5 (+5 to hit), range 80/320 ft., one\
    \ target. Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage plus dice: 2d4|avg\
    \ (2d4) poison damage."
  "name": "Shortbow"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/humanoid/token/grung-wildling.png"
aliases: ["Grung Wildling"]
---
# Grung Wildling
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 150, Volo's Guide to Monsters p. 157*  

Gifted with druidic magic, a grung wildling typically serves as an advisor, a healer, and a nurturer of crops.

## Grungs

Grungs are frog-like folk found in rain forests and tropical jungles. These amphibians prefer shade and live in trees, but they maintain hatcheries for their offspring in well-guarded ground-level pools. About three months after hatching, a grung tadpole takes on the shape of an adult, and after another six months, the grung reaches maturity.

Born in a wide range of colors, grungs most often appear in shades of green, blue, purple, red, orange, and gold. All grungs secrete a substance that is harmless to them but poisonous to other creatures, and sometimes that substance has a special effect based on the grung's color (see "Variant: Grung Poison"). They also use this venom to poison their weapons.

## Stat Block

```ad-statblock
title: Grung Wildling
![](/compendium/bestiary/humanoid/token/grung-wildling.png#token)
*Small humanoid, Any alignment*

- **Armor Class** 16 (natural armor)
- **Hit Points** `dice: 5d6 + 10|text(27)` (5d6 + 10) 
- **Speed** walk 25 ft., climb 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|16 (+3)|15 (+2)|10 (+0)|15 (+2)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +5
- **Skills** Athletics +2, Perception +4, Stealth +5, Survival +4
- **Senses** passive Perception 14
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Grung
- **Challenge** 1

## Traits

***Amphibious.*** The grung can breathe air and water.

***Poisonous Skin.*** Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a DC 12 Constitution saving throw or become [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute. A [poisoned](compendium/rules/conditions.md#poisoned) creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Standing Leap.*** The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start.

***Water Dependency.*** If the grung isn't immersed in water for at least 1 hour during a day, it suffers 1 level of [exhaustion](compendium/rules/conditions.md#exhaustion) at the end of that day. The grung can recover from this [exhaustion](compendium/rules/conditions.md#exhaustion) only through magic or by immersing itself in water for at least 1 hour.

***Spellcasting.*** The grung casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 12):

**At will**: [druidcraft](/compendium/spells/druidcraft.md)

**2/day**: [plant growth](/compendium/spells/plant-growth.md)

**3/day each**: [cure wounds](/compendium/spells/cure-wounds.md), [spike growth](/compendium/spells/spike-growth.md)

## Actions

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 3|avg` (`1d4 + 3`) piercing damage plus `dice: 2d4|avg` (`2d4`) poison damage.

***Shortbow.*** *Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), range 80/320 ft., one target. Hit: `dice: 1d6 + 3|avg` (`1d6 + 3`) piercing damage plus `dice: 2d4|avg` (`2d4`) poison damage.
```
^statblock

## Environment

forest