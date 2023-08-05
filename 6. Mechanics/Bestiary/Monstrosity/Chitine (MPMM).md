---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/small
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Chitine"
"size": "Small"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "4"
  "Stealth": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Undercommon"
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The chitine has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]],\
    \ and magic can't put the chitine to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the chitine has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in contact with a web, the chitine knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The chitine ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The chitine makes three Dagger attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/monstrosity/token/chitine.png"
aliases: ["Chitine"]
---
# Chitine
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 75, Volo's Guide to Monsters p. 131*  

Dedicated to Lolth, chitines are multiarmed bipeds with arachnid qualities. Most live in colonies in the Underdark and fight the enemies of the Demon Queen of Spiders. Long ago, the cult of Lolth first subjected elf prisoners to horrible rituals that transformed them into creatures with both elven and spider traits, which their creators dubbed chitines. The intention was to create servile warriors dedicated first to the cult and then, only by association with it, to Lolth. The goddess found this arrangement unacceptable.

As punishment, the Spider Queen twisted her worshipers' rituals. The process usually transformed subjects into the spindly creatures her devotees expected, but occasionally, an elf changed into a choldrith: an arachnid Monstrosity able to command and create more chitines on its own. These choldriths soon led the chitines to rebel and abandon their creators, founding free colonies elsewhere in the Underdark. On occasion, though, colonies can be found in remote, gloomy areas of the surface world, warring against Lolth's enemies.

The cult of Lolth still creates chitines as the need arises. Outside the presence of a choldrith, chitines make good workers, and they can be useful if the cult finds an independent chitine colony and want to infiltrate it. If the creation process yields a choldrith, though, the cult destroys the creature.

As servants of Lolth, chitines love spiders. They rear spiders and similar arachnids, such as cave fishers (also in this book). Chitine colonies erect shrines to Lolth that serve as beacons, attracting spiders and other beings that serve her. Anywhere chitines set up a colony quickly becomes a webshrouded, gloomy, and treacherous place.

Chitines resemble spiders, but they behave more like social insects such as ants. They are divided into worker and warrior castes; choldriths, when present, occupy the top levels of a colony's hierarchy. Each chitine has a social position that comes with duties related to that rank, and all are expected to sacrifice themselves to protect the colony's choldriths. Every chitine has spinnerets and slowly produces webbing that is used to build floors, walls, structures, objects, and traps that benefit the colony. A warrior might be responsible for crafting web armor (which is as tough as hide or leather), while a group of workers might be tasked to dig pit traps and cover them with fragile webbing disguised with loose dirt to appear as a solid surface.

```ad-statblock
title: Chitine
![[/6. Mechanics/Bestiary/Monstrosity/Token/chitine.png#token]]
*Small monstrosity, Chaotic Evil*

- **Armor Class** 14 ([[/6. Mechanics/Items/hide-armor.md\|hide armor]])
- **Hit Points** `dice: 4d6 + 4|text(18)` (4d6 + 4) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|14 (+2)|12 (+1)|10 (+0)|10 (+0)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Athletics +4, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 10
- **Languages** Undercommon
- **Challenge** 1/2

## Traits

***Fey Ancestry.*** The chitine has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]], and magic can't put the chitine to sleep.

***Sunlight Sensitivity.*** While in sunlight, the chitine has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

***Web Sense.*** While in contact with a web, the chitine knows the exact location of any other creature in contact with the same web.

***Web Walker.*** The chitine ignores movement restrictions caused by webbing.

## Actions

***Multiattack.*** The chitine makes three Dagger attacks.

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) piercing damage.
```
^statblock

## Environment

underdark