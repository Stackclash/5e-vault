---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/small
- monster/type/beast
statblock: inline
---
# Bestial Spirit (Air, 5th-Level Spell)
*Source: Tasha's Cauldron of Everything p. 109*  

```statblock
"name": "Bestial Spirit (Air, 5th-Level Spell)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "35"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "4"
- !!int "14"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft. (land only), fly 60 ft. (air only), swim 30 ft.\
  \ (water only)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast can breathe only underwater."
  "name": "Water Breathing (Water Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby (Air Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast has advantage on an attack roll against a creature if at least\
    \ one of the beast's allies is within 5 feet of the creature and the ally isn't\
    \ [[5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics (Land and Water Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d8 + 4 + summonSpellLevel piercing damage."
  "name": "Maul"
"source":
- "TCE"
"image": "5. Mechanics/Bestiary/Beast/token/bestial-spirit.png"
```
^statblock