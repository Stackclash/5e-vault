---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/small
- monster/type/fey
statblock: inline
---
# Fey Spirit (4th-level Spell)
*Source: Tasha's Cauldron of Everything p. 112*  

```statblock
"name": "Fey Spirit (4th-level Spell)"
"size": "Small"
"type": "fey"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "40"
"stats":
- !!int "13"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "16"
"speed": "walk 40 ft."
"condition_immunities": "charmed"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Sylvan, understands the languages you speak"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The fey makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d6 + 3 + summonSpellLevel piercing damage dice:\
    \ + 1d6|avg (+ 1d6) force damage."
  "name": "Shortsword"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The fey magically teleports up to 30 feet to an unoccupied space it can\
    \ see. Then one of the following effects occurs, based on the fey's chosen mood:\n\
    \n- Fuming. The fey has advantage on the next attack roll it makes before\
    \ the end of this turn.  \n- Mirthful. The fey can force one creature it can\
    \ see within 10 feet of it to make a Wisdom saving throw against your spell save\
    \ DC. Unless the save succeeds, the target is [[6. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ by you and the fey for 1 minute or until the target takes any damage.  \n- Tricksy.\
    \ The fey can fill a 5-foot cube within 5 feet of it with magical darkness, which\
    \ lasts until the end of its next turn.  "
  "name": "Fey Step"
"source":
- "TCE"
"image": "6. Mechanics/Bestiary/Fey/token/fey-spirit.png"
```
^statblock