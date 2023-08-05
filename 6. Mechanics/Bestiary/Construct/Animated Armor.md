---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/medium
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
"name": "Animated Armor"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "walk 25 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The armor is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]\
    \ while in the area of an [[/6. Mechanics/Spells/antimagic-field.md\|antimagic field]].\
    \ If targeted by [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], the armor\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]] for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the armor remains motionless, it is indistinguishable from a normal\
    \ suit of armor."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The armor makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) bludgeoning damage."
  "name": "Slam"
"source":
- "MM"
- "CoS"
- "RoT"
- "SKT"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "KftGV"
"image": "/compendium/bestiary/construct/token/animated-armor.png"
aliases: ["Animated Armor"]
---
# Animated Armor
*Source: Monster Manual p. 19, Curse of Strahd, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Keys from the Golden Vault*  

This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.

To add to its menace, animated armor is frequently enchanted with scripted speech, so the armor can utter warnings, demand passwords, or deliver riddles. Rare suits of animated armor are able to carry on an actual conversation.

## Animated Objects

Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.

### Constructed Nature

An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

## Stat Block

```ad-statblock
title: Animated Armor
![[/6. Mechanics/Bestiary/Construct/Token/animated-armor.png#token]]
*Medium construct, Unaligned*

- **Armor Class** 18 (natural armor)
- **Hit Points** `dice: 6d8 + 6|text(33)` (6d8 + 6) 
- **Speed** walk 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|11 (+0)|13 (+1)| 1 (-5)| 3 (-4)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 6
- **Damage Immunities** poison, psychic
- **Condition Immunities** blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** —
- **Challenge** 1

## Traits

***Antimagic Susceptibility.*** The armor is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]] while in the area of an [[/6. Mechanics/Spells/antimagic-field.md\|antimagic field]]. If targeted by [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]] for 1 minute.

***False Appearance.*** While the armor remains motionless, it is indistinguishable from a normal suit of armor.

## Actions

***Multiattack.*** The armor makes two melee attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2` (`1d6 + 2`) bludgeoning damage.
```
^statblock