---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/small
- monster/type/beast
statblock: inline
---
# Beast of the Sky
*Source: Tasha's Cauldron of Everything p. 61*  

```statblock
"name": "Beast of the Sky"
"size": "Small"
"type": "beast"
"alignment": "Neutral"
"stats":
- !!int "6"
- !!int "16"
- !!int "13"
- !!int "8"
- !!int "14"
- !!int "11"
"speed": "walk 10 ft., fly 60 ft."
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "You can add your proficiency bonus to any ability check or saving throw\
    \ that the beast makes."
  "name": "Primal Bond"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d4 + 3 + PB slashing damage"
  "name": "Shred"
"source":
- "TCE"
"image": "5. Mechanics/Bestiary/Beast/token/beast-of-the-sky.png"
```
^statblock