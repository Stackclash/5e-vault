---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: underdark
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Piercer
---
# [[5. Mechanics\Bestiary\Monstrosity\Piercer.md|Piercer]]
*Source: Monster Manual p. 252*

Clinging to the ceilings of caverns and large subterranean passages, piercers blend in perfectly with natural rock, dropping in silence to impale unsuspecting foes on the ground below.

A piercer is the larval form of a roper, and the two creatures often attack in tandem. A rock-like shell encases a piercer's body, giving it the look and texture of a stalactite. That shell protects a soft, slug-like upper body that lets the piercer move across cavern walls and ceilings to position itself for prey. With its eye and mouth closed, the piercer is difficult to distinguish from ordinary rock formations.

## Patient Hunters

Piercers can see, but they can also respond to noise and heat, waiting for living creatures to pass beneath them, then falling to attack. A piercer that misses its chance to kill must make its slow way back to the ceiling. A fallen piercer excretes a foul-smelling slime when attacked, making most predators think twice about eating it.

Piercers gather in colonies to maximize the effectiveness of their attacks, dropping simultaneously to increase the odds of striking prey. After a piercer successfully slays a creature, the others slowly creep toward the corpse to join in the feast.

```statblock
"name": "Piercer"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"modifier": !!int "1"
"stats":
  - !!int "10"
  - !!int "13"
  - !!int "16"
  - !!int "1"
  - !!int "7"
  - !!int "3"
"speed": "5 ft., climb 5 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "While the piercer remains motionless on the ceiling, it is indistinguishable\
      \ from a normal stalactite."
    "name": "False Appearance"
  - "desc": "The piercer can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, one creature directly underneath the\
      \ piercer. Hit: 3 (d6) piercing damage per 10 feet fallen, up to 21 (6d6).\
      \ Miss: The piercer takes half the normal falling damage for the distance fallen."
    "name": "Drop"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/piercer.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
