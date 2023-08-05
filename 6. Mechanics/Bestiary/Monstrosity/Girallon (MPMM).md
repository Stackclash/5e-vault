---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Girallon"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "5"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The girallon makes one Bite attack and four Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) slashing damage."
  "name": "Claw"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The girallon moves up to its speed toward a hostile creature that it can\
    \ see."
  "name": "Aggressive"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/monstrosity/token/girallon.png"
aliases: ["Girallon"]
---
# Girallon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 139, Volo's Guide to Monsters p. 152*  

A girallon looks like an oversized, four-armed ape with grayish-tan skin and white fur. Its vicious fangs and claws reveal it to be a monstrous predator.

Girallons are most common in temperate or warm forest environments abundant with life. They share apes' adeptness at climbing, although few trees can support the weight of these half-ton creatures. The ruins of cities, especially those found in deep forests and jungles, seem to attract girallons. They see a city's buildings as a superior sort of forest whose uppermost "branches" can safely support them. The creatures can easily scale walls and battlements, and they perch on tower tops and other high vantages to keep an eye on the surrounding area.

When girallons can't climb, they stalk the forest floor, lurk in narrow ravines or shallow caves, or hide in ruined sites while waiting for prey to come near. A girallon is surprisingly stealthy, considering its size and its lack of camouflage.

Girallons form loose bands of several individuals and their offspring, usually led by a dominant adult that also tends to be the oldest member of the group. When on the hunt away from their lair, girallons use roars and body language to communicate with one another over distance. Each individual typically hunts alone and widely separated from the others to ensure that everyone gets adequate fodder. The leader might organize members to work together to make a big kill, however. If they succeed, everyone in the group shares the spoils, with the best parts going to those caring for their young.

Girallons' strange appearance and attraction to ruins lead sages to believe they were created through magic to serve as guardians for some lost empire. When that empire fell ages ago, girallons turned feral and spread out across the world.

Numerous creatures have tried to tame, subjugate, or cooperate with the monsters. For instance, some forest-dwelling peoples capture girallons and train them to serve as sentinels. Recognizing that girallons are peaceful among their own kind, other folk have learned how to approach a group's leader, offering food and other gifts in hopes of establishing an alliance with the creatures.

Girallons that are well treated might be willing to serve as guards, though they lack the intelligence to take on tasks more complicated than attacking strangers who enter their domain. A girallon that's captured when young and carefully trained could end up in a seemingly unlikely place, such as guarding the entrance to a city's thieves' guild. Those who would keep a girallon must always be wary, however, because the creature could revert to its predatory nature at any time.

```ad-statblock
title: Girallon
![[/6. Mechanics/Bestiary/Monstrosity/Token/girallon.png#token]]
*Large monstrosity, Unaligned*

- **Armor Class** 13 
- **Hit Points** `dice: 7d10 + 21|text(59)` (7d10 + 21) 
- **Speed** walk 40 ft., climb 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|16 (+3)|16 (+3)| 5 (-3)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +5, Stealth +5
- **Senses** darkvision 60 ft., passive Perception 15
- **Languages** —
- **Challenge** 4

## Actions

***Multiattack.*** The girallon makes one Bite attack and four Claw attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one creature. Hit: `dice: 1d6 + 4` (`1d6 + 4`) piercing damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one target. Hit: `dice: 1d6 + 4` (`1d6 + 4`) slashing damage.

## Bonus Actions

***Aggressive.*** The girallon moves up to its speed toward a hostile creature that it can see.
```
^statblock

## Environment

forest