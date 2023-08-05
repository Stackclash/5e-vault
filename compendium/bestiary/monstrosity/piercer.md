---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Piercer"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "10"
- !!int "13"
- !!int "16"
- !!int "1"
- !!int "7"
- !!int "3"
"speed": "walk 5 ft., climb 5 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the piercer remains motionless on the ceiling, it is indistinguishable\
    \ from a normal stalactite."
  "name": "False Appearance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The piercer can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), one creature directly\
    \ underneath the piercer. Hit: dice: 1d6|avg (1d6) piercing damage per 10\
    \ feet fallen, up to 21 (dice: 6d6|avg (6d6)). Miss: The piercer takes half\
    \ the normal falling damage for the distance fallen."
  "name": "Drop"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "WDMM"
- "IDRotF"
"image": "/compendium/bestiary/monstrosity/token/piercer.png"
aliases: ["Piercer"]
---
# Piercer
*Source: Monster Manual p. 252, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Icewind Dale: Rime of the Frostmaiden*  

Clinging to the ceilings of caverns and large subterranean passages, piercers blend in perfectly with natural rock, dropping in silence to impale unsuspecting foes on the ground below.

A piercer is the larval form of a roper, and the two creatures often attack in tandem. A rock-like shell encases a piercer's body, giving it the look and texture of a stalactite. That shell protects a soft, slug-like upper body that lets the piercer move across cavern walls and ceilings to position itself for prey. With its eye and mouth closed, the piercer is difficult to distinguish from ordinary rock formations.

## Patient Hunters

Piercers can see, but they can also respond to noise and heat, waiting for living creatures to pass beneath them, then falling to attack. A piercer that misses its chance to kill must make its slow way back to the ceiling. A fallen piercer excretes a foul-smelling slime when attacked, making most predators think twice about eating it.

Piercers gather in colonies to maximize the effectiveness of their attacks, dropping simultaneously to increase the odds of striking prey. After a piercer successfully slays a creature, the others slowly creep toward the corpse to join in the feast.

## Stat Block

```ad-statblock
title: Piercer
![](/compendium/bestiary/monstrosity/token/piercer.png#token)
*Medium monstrosity, Unaligned*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 3d8 + 9|text(22)` (3d8 + 9) 
- **Speed** walk 5 ft., climb 5 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|13 (+1)|16 (+3)| 1 (-5)| 7 (-2)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +5
- **Senses** blindsight 30 ft., darkvision 60 ft., passive Perception 8
- **Languages** —
- **Challenge** 1/2

## Traits

***False Appearance.*** While the piercer remains motionless on the ceiling, it is indistinguishable from a normal stalactite.

***Spider Climb.*** The piercer can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

## Actions

***Drop.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), one creature directly underneath the piercer. Hit: `dice: 1d6|avg` (`1d6`) piercing damage per 10 feet fallen, up to 21 (`dice: 6d6|avg` (`6d6`)). Miss: The piercer takes half the normal falling damage for the distance fallen.
```
^statblock

## Environment

underdark