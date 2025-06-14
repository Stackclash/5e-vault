---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'desert, forest, underdark'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/2
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Yuan-ti Broodguard
---
# [[5. Mechanics\Bestiary\Monstrosity\Yuan Ti Broodguard (MPMM).md|Yuan-ti Broodguard]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 273, Volo's Guide to Monsters p. 203*

> [!quote] A quote from Mordekainen  
> 
> Tasha once likened histachii to the bees that tend to larvae in beehives. It is a fanciful view of a horrific process.

Broodguards were once Humanoids, but they have been transformed by yuan-ti into simpleminded, scaly Monstrosities that do their serpentine masters' bidding. The transformation process warps not only a subject's body but also their mind, making them instinctively obey any yuan-ti and filling them with a seething rage at the sight of non-reptilian creatures.

Although broodguards can no longer think as clearly as before their transformation, they are able to perform simple yet important tasks in the community, such as guarding eggs or patrolling for intruders. Yuan-ti refer to broodguards as "histachii," which means "egg-watchers."

Most broodguards are made from human captives forced to consume a magical brew that renders them helpless and unable to fight off the inevitable transformation. A human transformed into a broodguard loses all semblance of who they once were. A broodguard is hairless and emaciated, with scaly skin. They have a forked tongue, and they smell faintly of rotting meat. Broodguards can speak but rarely do so, preferring to communicate via snakelike hisses and guttural noises.

```statblock
"name": "Yuan Ti Broodguard (MPMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Typically  Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "14"
  - !!int "6"
  - !!int "11"
  - !!int "4"
"speed": "30 ft."
"saves":
  - "strength": "+4"
  - "dexterity": "+4"
  - "wisdom": "+2"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common, Draconic"
"cr": "2"
"traits":
  - "desc": "At the start of its turn, the broodguard can gain advantage on all melee\
      \ weapon attack rolls it makes during that turn, but attack rolls against it\
      \ have advantage until the start of its next turn."
    "name": "Reckless"
"actions":
  - "desc": "The broodguard makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
      \ + 2) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) slashing damage."
    "name": "Claw"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/yuan-ti-broodguard-mpmm.webp"
```
^statblock

## Environment

desert, forest, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
