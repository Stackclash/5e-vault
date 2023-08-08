---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/large
- monster/type/fiend
statblock: inline
---
# Beucephalus
*Source: Curse of Strahd p. 93, Derived from Nightmare (MM)*  

```statblock
"name": "Beucephalus"
"size": "Large"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "104"
"hit_dice": "8d10 + 24"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "walk 60 ft., fly 90 ft."
"damage_immunities": "fire"
"senses": "passive Perception 11"
"languages": "understands Abyssal, Common, and Infernal but can't speak "
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Beucephalus can grant resistance to fire damage to anyone riding it."
  "name": "Confer Fire Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Beucephalus sheds bright light in a 10-foot radius and dim light for an\
    \ additional 10 feet."
  "name": "Illumination"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) bludgeoning damage plus dice: 2d6|avg\
    \ (2d6) fire damage."
  "name": "Hooves"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Beucephalus and up to three willing creatures within 5 feet of it magically\
    \ enter the Ethereal Plane from the Material Plane, or vice versa."
  "name": "Ethereal Stride"
"source":
- "CoS"
"image": "6. Mechanics/Bestiary/Npc/token/beucephalus.png"
```
^statblock