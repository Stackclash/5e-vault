---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/large
- monster/type/celestial
statblock: inline
---
# Celestial Spirit (5th-level Spell)
*Source: Tasha's Cauldron of Everything p. 110*  

```statblock
"name": "Celestial Spirit (5th-level Spell)"
"size": "Large"
"type": "celestial"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "40"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., fly 40 ft."
"damage_resistances": "radiant"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Celestial, understands the languages you speak"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The celestial makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: the summoner's spell attack modifier to hit, range\
    \ 150/600 ft., one target. Hit: 2d6 + 2 + summonSpellLevel radiant damage."
  "name": "Radiant Bow (Avenger Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d10 + 3 + summonSpellLevel radiant damage, and the\
    \ celestial can choose itself or another creature it can see within 10 feet of\
    \ the target. The chosen creature gains dice: 1d10|avg (1d10) temporary hit\
    \ points."
  "name": "Radiant Mace (Defender Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The celestial touches another creature. The target magically regains hit\
    \ points equal to 2d8 + summonSpellLevel."
  "name": "Healing Touch (1/Day)"
"source":
- "TCE"
"image": "6. Mechanics/Bestiary/Celestial/token/celestial-spirit.png"
```
^statblock