---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tce
- monster/cr/
- monster/size/medium
- monster/type/construct
statblock: inline
aliases: ["Construct Spirit (8th-level Spell)"]
---
# [Construct Spirit (8th-level Spell)](compendium/bestiary/construct/construct-spirit-8th-level-spell-tce.md)
*Source: Tasha's Cauldron of Everything p. 111*

```statblock
"name": "Construct Spirit (8th-level Spell) (TCE)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "21"
"hp": !!int "100"
"stats":
- !!int "18"
- !!int "10"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "5"
"speed": "30 ft."
"damage_resistances": "poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed), [exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#frightened), [incapacitated](/compendium/rules/conditions.md#incapacitated),\
  \ [paralyzed](/compendium/rules/conditions.md#paralyzed), [petrified](/compendium/rules/conditions.md#petrified),\
  \ [poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- "desc": "A creature that touches the construct or hits it with a melee attack while\
    \ within 5 feet of it takes dice: 1d10|avg (1d10) fire damage."
  "name": "Heated Body (Metal Only)"
- "desc": "When a creature the construct can see starts its turn within 10 feet of\
    \ the construct, the construct can force it to make a Wisdom saving throw against\
    \ your spell save DC. On a failed save, the target can't use reactions and its\
    \ speed is halved until the start of its next turn."
  "name": "Stony Lethargy (Stone Only)"
"actions":
- "desc": "The construct makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d8 + 4 + summonSpellLevel bludgeoning damage."
  "name": "Slam"
"reactions":
- "desc": "When the construct takes damage, it makes a slam attack against a random\
    \ creature within 5 feet of it. If no creature is within reach, the construct\
    \ moves up to half its speed toward an enemy it can see, without provoking opportunity\
    \ attacks."
  "name": "Berserk Lashing (Clay Only)"
"source":
- "TCE"
"image": "compendium/bestiary/construct/token/construct-spirit-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```