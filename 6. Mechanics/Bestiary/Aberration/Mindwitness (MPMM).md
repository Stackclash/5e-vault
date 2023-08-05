---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/large
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
"name": "Mindwitness"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "15"
- !!int "15"
- !!int "10"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "8"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Deep Speech, Undercommon, telepathy 600 ft."
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the mindwitness receives a telepathic message, it can telepathically\
    \ share that message with up to seven other creatures within 600 feet of it that\
    \ it can see."
  "name": "Telepathic Hub"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mindwitness makes one Bite attack and one Tentacles attack, or it uses\
    \ Eye Ray three times."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 4d6 + 2|avg (4d6 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 4d8 + 2|avg (4d8 + 2) psychic damage. If the target is Large\
    \ or smaller, it is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape\
    \ DC 13), and it must succeed on a DC 13 Intelligence saving throw or be [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]\
    \ until this grapple ends."
  "name": "Tentacles"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mindwitness shoots one magical eye ray at random (roll a dice: d6|avg\
    \ (d6), and reroll if the ray has already been used this turn), choosing one\
    \ target it can see within 120 feet of it:\n\n- 1 Aversion Ray. The targeted\
    \ creature must make a DC 13 Charisma saving throw. On a failed save, the target\
    \ has disadvantage on attack rolls for 1 minute. The target can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success.\
    \  \n- 2 Fear Ray. The targeted creature must succeed on a DC 13 Wisdom saving\
    \ throw or be [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] for 1 minute.\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success.  \n- 3 Psychic Ray. The target must succeed\
    \ on a DC 13 Intelligence saving throw or take dice: 6d8|avg (6d8) psychic\
    \ damage.  \n- 4 Slowing Ray. The targeted creature must make a DC 13 Dexterity\
    \ saving throw. On a failed save, the target's speed is halved for 1 minute. In\
    \ addition, the creature can't take reactions, and it can take either an action\
    \ or a bonus action on its turn but not both. The creature can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success.\
    \  \n- 5 Stunning Ray. The targeted creature must succeed on a DC 13 Constitution\
    \ saving throw or be [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] for 1 minute.\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success.  \n- 6 Telekinetic Ray. If the target\
    \ is a creature, it must make a DC 13 Strength saving throw. On a failed save,\
    \ the mindwitness moves it up to 30 feet in any direction, and it is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]\
    \ by the ray's telekinetic grip until the start of the mindwitness's next turn\
    \ or until the mindwitness is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].\
    \  \n\n    If the target is an object weighing 300 pounds or less that isn't being\
    \ worn or carried, it is telekinetically moved up to 30 feet in any direction.\
    \ The mindwitness can also exert fine control on objects with this ray, such as\
    \ manipulating a simple tool or opening a door or a container.  "
  "name": "Eye Ray"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/aberration/token/mindwitness.png"
aliases: ["Mindwitness"]
---
# Mindwitness
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 181, Volo's Guide to Monsters p. 176*  

If a beholder is [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] and brought to the brine pool of an elder brain, the beholder can be converted into a mindwitness. This alters some of its eye rays and transforms four of its eyestalks into tentacles similar to a mind flayer's. The mindwitness is psychically imprinted with devotion to the elder brain and submission to illithid commands.

A mindwitness's primary function is to improve telepathic communication in a mind flayer colony. A creature in telepathic communication with a mindwitness can converse through it to as many as seven other creatures the mindwitness can see, rapidly disseminating commands and other information.

If separated from its illithid masters, a mindwitness seeks out other telepathic creatures to tell it what to do. Mindwitnesses have been known to ally with [[/6. Mechanics/Bestiary/Aberration/Flumph.md\|flumphs]] and planar beings such as demons, shifting their worldview and alignment to match those of their new masters.

```ad-statblock
title: Mindwitness
![[/6. Mechanics/Bestiary/Aberration/Token/mindwitness.png#token]]
*Large aberration, Lawful Neutral*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 10d10 + 20|text(75)` (10d10 + 20) 
- **Speed** walk 0 ft., fly 20 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|14 (+2)|14 (+2)|15 (+2)|15 (+2)|10 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +5, Wisdom +5
- **Skills** Perception +8
- **Senses** darkvision 120 ft., passive Perception 18
- **Condition Immunities** prone
- **Languages** Deep Speech, Undercommon, telepathy 600 ft.
- **Challenge** 5

## Traits

***Telepathic Hub.*** When the mindwitness receives a telepathic message, it can telepathically share that message with up to seven other creatures within 600 feet of it that it can see.

## Actions

***Multiattack.*** The mindwitness makes one Bite attack and one Tentacles attack, or it uses Eye Ray three times.

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 4d6 + 2` (`4d6 + 2`) piercing damage.

***Tentacles.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 10 ft., one creature. Hit: `dice: 4d8 + 2` (`4d8 + 2`) psychic damage. If the target is Large or smaller, it is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 13), and it must succeed on a DC 13 Intelligence saving throw or be [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] until this grapple ends.

***Eye Ray.*** The mindwitness shoots one magical eye ray at random (roll a `dice: d6` (`d6`), and reroll if the ray has already been used this turn), choosing one target it can see within 120 feet of it:

- **1 Aversion Ray.** The targeted creature must make a DC 13 Charisma saving throw. On a failed save, the target has disadvantage on attack rolls for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **2 Fear Ray.** The targeted creature must succeed on a DC 13 Wisdom saving throw or be [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **3 Psychic Ray.** The target must succeed on a DC 13 Intelligence saving throw or take `dice: 6d8` (`6d8`) psychic damage.  
- **4 Slowing Ray.** The targeted creature must make a DC 13 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn but not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **5 Stunning Ray.** The targeted creature must succeed on a DC 13 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **6 Telekinetic Ray.** If the target is a creature, it must make a DC 13 Strength saving throw. On a failed save, the mindwitness moves it up to 30 feet in any direction, and it is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] by the ray's telekinetic grip until the start of the mindwitness's next turn or until the mindwitness is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].  

    If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is telekinetically moved up to 30 feet in any direction. The mindwitness can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.  
```
^statblock

## Environment

underdark