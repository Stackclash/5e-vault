---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Beast of the Land
*Source: Tasha's Cauldron of Everything p. 61*  

```statblock
"name": "Beast of the Land"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"stats":
- !!int "14"
- !!int "14"
- !!int "15"
- !!int "8"
- !!int "14"
- !!int "11"
"speed": "walk 40 ft., climb 40 ft."
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the beast moves at least 20 feet straight toward a target and then hits\
    \ it with a maul attack on the same turn, the target takes an extra dice: 1d6|avg\
    \ (1d6) slashing damage. If the target is a creature, it must succeed on a Strength\
    \ saving throw against your spell save DC or be knocked [[5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Charge"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "You can add your proficiency bonus to any ability check or saving throw\
    \ that the beast makes."
  "name": "Primal Bond"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d8 + 2 + PB slashing damage."
  "name": "Maul"
"source":
- "TCE"
"image": "5. Mechanics/Bestiary/Beast/token/beast-of-the-land.png"
```
^statblock