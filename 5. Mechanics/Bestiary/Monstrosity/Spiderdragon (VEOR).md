---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: null
size: Huge
tags:
  - 5. Mechanics\Src\5e\(VEOR)
  - monster\Cr\11
  - monster\Size\Huge
  - monster\Type\Monstrosity
aliases:
  - Spiderdragon
---
# [[5. Mechanics\Bestiary\Monstrosity\Spiderdragon (VEOR).md|Spiderdragon]]
*Source: Vecna: Eve of Ruin p. 233*

The terrors known as spiderdragons were first found in the deepest corners of the Underdark and trace their origins to black dragon wyrmlings who ate a steady diet of spiders. Though spiderdragons were not created in the Abyss or by Lolth's faithful, worshipers of the Spider Queen claim that spiderdragons are a gift from their deity, as spiderdragons are most numerous in Underdark areas that Lolth's faithful claim as their own. Lolth worshipers might employ spiderdragons as guards or treat them as venerated guests. The creatures aren't as powerful as their black dragon progenitors, though, and they often drain the enclaves' resources with their selfish demands.

Uninterested in building lairs, spiderdragons weave powerful webs and eat an abundance of prey before losing interest in an area and moving on, even when they're treated like beloved guests. Unlike their black dragon progenitors, spiderdragons aren't particularly clever, though some of them understand their significance to Lolth worshipers and exploit their positions for as long as possible.

```statblock
"name": "Spiderdragon (VEOR)"
"size": "Huge"
"type": "monstrosity"
"alignment": "typically  Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "152"
"hit_dice": "16d12 + 48"
"stats":
- !!int "21"
- !!int "18"
- !!int "16"
- !!int "7"
- !!int "14"
- !!int "18"
"speed": "50 ft., climb 60 ft."
"saves":
  "Dexterity": !!int "8"
  "Strength": !!int "9"
"skillsaves":
  "Intimidation": !!int "8"
  "Perception": !!int "6"
"damage_resistances": "poison, psychic"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Abyssal, Draconic, Undercommon"
"cr": "11"
"traits":
- "desc": "The spiderdragon has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The spiderdragon can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "The spiderdragon ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "The spiderdragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) piercing damage plus 13 (2d12) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claw"
- "desc": "The spiderdragon exhales venomous spiderlings in a 30-foot cone. Each creature\
    \ in that area must make a DC 15 Dexterity saving throw, taking 33 (6d10) piercing\
    \ damage and 33 (6d10) poison damage on a failed save or half as much damage on\
    \ a successful one."
  "name": "Spiderling Breath (Recharge 5-6)"
"bonus_actions":
- "desc": "The spiderdragon spins a 30-foot cube of strong, sticky webbing in an area\
    \ adjacent to itself. The webbing lasts for 1 minute, is difficult terrain, and\
    \ lightly obscures its area. A creature that starts its turn in the webbing or\
    \ enters the webbing for the first time on its turn must succeed on a DC 15 Dexterity\
    \ saving throw or have the [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
    \ condition while in the web. As an action, a creature can free itself or another\
    \ creature from the web by succeeding on a DC 15 Strength check.\n\nA 5-foot cube\
    \ of the web is destroyed if it takes at least 10 acid, fire, or slashing damage\
    \ on a single turn."
  "name": "Stifling Webs (Recharge 5-6)"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/spiderdragon-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
