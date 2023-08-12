---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/medium
- monster/type/construct
statblock: inline
---
# Construct Spirit (7th-level Spell)
*Source: Tasha's Cauldron of Everything p. 111*  

```statblock
"name": "Construct Spirit (7th-level Spell)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "85"
"stats":
- !!int "18"
- !!int "10"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "5"
"speed": "walk 30 ft."
"damage_resistances": "poison"
"condition_immunities": "charmed, exhaustion, frightened, incapacitated, paralyzed,\
  \ petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A creature that touches the construct or hits it with a melee attack while\
    \ within 5 feet of it takes dice: 1d10|avg (1d10) fire damage."
  "name": "Heated Body (Metal Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When a creature the construct can see starts its turn within 10 feet of\
    \ the construct, the construct can force it to make a Wisdom saving throw against\
    \ your spell save DC. On a failed save, the target can't use reactions and its\
    \ speed is halved until the start of its next turn."
  "name": "Stony Lethargy (Stone Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The construct makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d8 + 4 + summonSpellLevel bludgeoning damage."
  "name": "Slam"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the construct takes damage, it makes a slam attack against a random\
    \ creature within 5 feet of it. If no creature is within reach, the construct\
    \ moves up to half its speed toward an enemy it can see, without provoking opportunity\
    \ attacks."
  "name": "Berserk Lashing (Clay Only)"
"source":
- "TCE"
"image": "5. Mechanics/Bestiary/Construct/token/construct-spirit.png"
```
^statblock