---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/kuo-toa
statblock: true
statblock-link: "#^statblock"
"name": "Kuo-toa Monitor"
"size": "Medium"
"type": "humanoid"
"subtype": "kuo-toa"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Religion": !!int "5"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Undercommon"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The kuo-toa can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The kuo-toa can sense the presence of any creature within 30 feet of it\
    \ that is [invisible](compendium/rules/conditions.md#invisible) or on the Ethereal\
    \ Plane. It can pinpoint such a creature that is moving."
  "name": "Otherworldly Perception"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The kuo-toa has advantage on ability checks and saving throws made to escape\
    \ a grapple."
  "name": "Slippery"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The kuo-toa adds its Wisdom modifier to its armor class."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The kuo-toa makes one bite attack and two unarmed strikes."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) bludgeoning damage plus dice: 1d6|avg\
    \ (1d6) lightning damage, and the target can't take reactions until the end\
    \ of the kuo-toa's next turn."
  "name": "Unarmed Strike"
"source":
- "MM"
- "PotA"
- "GoS"
"image": "/compendium/bestiary/humanoid/token/kuo-toa-monitor.png"
aliases: ["Kuo-toa Monitor"]
---
# Kuo-toa Monitor
*Source: Monster Manual p. 198, Princes of the Apocalypse, Ghosts of Saltmarsh*  

Kuo-toa are degenerate fishlike humanoids that once inhabited the shores and islands of the surface world. Long ago humans and their ilk drove the kuo-toa underground, where they dwell in madness and everlasting night. Kuo-toa can no longer abide daylight.

## Mad Slaves

At the height of the illithid empire, the mind flayers captured kuo-toa by the thousands and forced them into bondage. The kuo-toa were simple creatures, never meant to endure the oppressive mental force the illithids unleashed against them. By the time the mind flayers abandoned them, the prolonged psychic subjugation endured by the kuo-toa had driven them mad.

Their minds shattered beyond repair, the kuo-toa adopted a religious fervor, inventing gods to protect them against threats. Most notable of these threats are the drow, which have slain the kuo-toa on sight since the days when the two races first met.

## God Makers

Kuo-toa worship gods of their own insane creation, but if enough kuo-toa believe that a god is real, the energy of their collective subconscious can cause that god to manifest as a physical entity. The form a kuo-toa god takes depends on the inspiration for its divine image, and is usually random or nonsensical.

One of the most revered gods of the kuo-toa is Blibdoolpoolp the Sea Mother, who takes the form of a female human with a crayfish head, a crayfish's claws, and an articulated shell covering her shoulders. Blibdoolpoolp was likely invented by a kuo-toa that improved on a broken human statue by adding the limbs and head of a crustacean. In sudden awe of its handiwork, it then named the resulting form a god.

Kuo-toa that cross paths with an aboleth often find themselves worshiping it as a god, their madness blinding them to the fact that the aboleth is merely using them for its own nefarious ends.

## Theocratic Rulers

Kuo-toa archpriests are surrounded by fanatical devotees of their faith. The archpriest of a kuo-toa domain demands that all its subjects worship a specific god. An archpriest's mad belief in its god is so fervent that it manifests the powers of a high cleric. The archpriest can also bestow spells to devout underlings called whips. One or more of these whips are also the archpriest's children, and their primary role in kuo-toan society is to fight to the death to claim the throne when the archpriest dies. If a whip displeases the archpriest, the archpriest can strip it of its spellcasting ability, if not its life.

The archpriest's decrees are enforced by monitors, devout kuo-toa that act as the archpriest's eyes and ears. Monitors are deadly hand-to-hand combatants, and lesser kuo-toa live in fear of them.

Kuo-toa Gear. Many weapons of the kuo-toa are designed to capture rather than kill. Nets are common, though some carry pincer staffs (also called mancatchers) designed to trap and immobilize foes. Kuo-toa warriors also treat their shields with a sticky goo that catches incoming weapons.

In general, kuo-toa don't like the weight of armor on their slippery bodies and rely on their natural rubbery hides for protection. However, they like to wear jewelry made from scavenged bones, shells, pearls, gems, and carapace fragments.

> [!quote] Variant: Kuo-toa Monitor
> 
> A kuo-toa monitor has a challenge rating of 3 (700 XP). It has the same statistics as a kuo-toa whip except that it adds its Wisdom modifier to its Armor Class (AC 13), loses the Spellcaster trait, and replaces the whip's action options with the following action options.
> 
> **Multiattack.** The kuo-toa makes one bite attack and two unarmed strikes.
> 
> **Bite.** Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (`dice: 1d4 + 2|avg` (`1d4 + 2`)) piercing damage.
> 
> **Unarmed Strike.** Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (`dice: 1d6 + 2|avg` (`1d6 + 2`)) bludgeoning damage + 3 (`dice: 1d6|avg` (`1d6`)) lightning damage, and the target can't take reactions until the end of the kuo-toa's next turn.
^variant-kuo-toa-monitor

> [!quote]- A quote from Sabal Mizzrym of Menzoberranzan  
> 
> They invent their own gods... the very definition of insanity.


## Stat Block

```ad-statblock
title: Kuo-toa Monitor
![](/compendium/bestiary/humanoid/token/kuo-toa-monitor.png#token)
*Medium humanoid(kuo-toa), Neutral Evil*

- **Armor Class** 13 (natural armor, Unarmored Defense)
- **Hit Points** `dice: 10d8 + 20|text(65)` (10d8 + 20) 
- **Speed** walk 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|10 (+0)|14 (+2)|12 (+1)|14 (+2)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +6, Religion +5
- **Senses** darkvision 120 ft., passive Perception 16
- **Languages** Undercommon
- **Challenge** 3

## Traits

***Amphibious.*** The kuo-toa can breathe air and water.

***Otherworldly Perception.*** The kuo-toa can sense the presence of any creature within 30 feet of it that is [invisible](compendium/rules/conditions.md#invisible) or on the Ethereal Plane. It can pinpoint such a creature that is moving.

***Slippery.*** The kuo-toa has advantage on ability checks and saving throws made to escape a grapple.

***Sunlight Sensitivity.*** While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight.

***Unarmored Defense.*** The kuo-toa adds its Wisdom modifier to its armor class.

## Actions

***Multiattack.*** The kuo-toa makes one bite attack and two unarmed strikes.

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage.

***Unarmed Strike.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) bludgeoning damage plus `dice: 1d6|avg` (`1d6`) lightning damage, and the target can't take reactions until the end of the kuo-toa's next turn.
```
^statblock

## Environment

underdark