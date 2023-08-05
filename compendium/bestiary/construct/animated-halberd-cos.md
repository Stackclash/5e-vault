---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/small
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
"name": "Animated Halberd"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "1"
- !!int "5"
- !!int "1"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"saves":
  "Dexterity": !!int "4"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, frightened, paralyzed, petrified,\
  \ poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sword is [incapacitated](compendium/rules/conditions.md#incapacitated)\
    \ while in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the sword\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](compendium/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the sword remains motionless and isn't flying, it is indistinguishable\
    \ from a normal sword."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 1|avg (1d10 + 1) slashing damage."
  "name": "Halberd"
"source":
- "CoS"
"image": "/compendium/bestiary/construct/token/animated-halberd.png"
aliases: ["Animated Halberd"]
---
# Animated Halberd
*Source: Curse of Strahd p. 59, Derived from Flying Sword (MM)*  

```ad-statblock
title: Animated Halberd
![](/compendium/bestiary/construct/token/animated-halberd.png#token)
*Small construct, Unaligned*

- **Armor Class** 15 (natural armor)
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

***Halberd.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d10 + 1|avg` (`1d10 + 1`) slashing damage.
```
^statblock