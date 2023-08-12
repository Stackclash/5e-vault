---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/medium
- monster/type/monstrosity
statblock: inline
---
# Shadow Spirit (4th-level Spell)
*Source: Tasha's Cauldron of Everything p. 114*  

```statblock
"name": "Shadow Spirit (4th-level Spell)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "50"
"stats":
- !!int "13"
- !!int "16"
- !!int "15"
- !!int "4"
- !!int "10"
- !!int "16"
"speed": "walk 40 ft."
"damage_resistances": "necrotic"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spirit has advantage on attack rolls against [[5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ creatures."
  "name": "Terror Frenzy (Fury Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Any creature, other than you, that starts its turn within 5 feet of the\
    \ spirit has its speed reduced by 20 feet until the start of that creature's next\
    \ turn."
  "name": "Weight of Sorrow (Despair Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spirit makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d12 + 3 + summonSpellLevel cold damage."
  "name": "Chilling Rend"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spirit screams. Each creature within 30 feet of it must succeed on\
    \ a Wisdom saving throw against your spell save DC or be [[5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ for 1 minute. The [[5. Mechanics/Rules/Conditions.md#frightened|frightened]] creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Dreadful Scream (1/Day)"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in dim light or darkness, the spirit takes the Hide action."
  "name": "Shadow Stealth (Fear Only)"
"source":
- "TCE"
"image": "5. Mechanics/Bestiary/Monstrosity/token/shadow-spirit.png"
```
^statblock