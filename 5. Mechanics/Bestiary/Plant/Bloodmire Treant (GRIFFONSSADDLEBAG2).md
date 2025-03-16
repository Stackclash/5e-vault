---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Huge
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/5
  - monster/size/huge
  - monster/type/plant
aliases:
  - Bloodmire Treant
---
# [[5. Mechanics/Bestiary/Plant/Bloodmire Treant (GRIFFONSSADDLEBAG2).md|Bloodmire Treant]]
*Source: The Griffon's Saddlebag, Book 2 p. 344*

The Syre Wood was home to numerous great trees and treants, but the swiftness of the Legion's assault left the forest's defense in the hands of Syre and his sprites. As such, the blood of Malfuriel has rapidly tainted the various treants of the swamp just as it altered the other wildlife. Those unlucky enough to draw a bloodmire treant's ire will face all of nature's wrath as well as the foul blood magic of Malfuriel, as these cursed treants possess the ability to animate pools of bloodwater into ooze-like forms as an additional means of defense.

```statblock
"name": "Bloodmire Treant (GRIFFONSSADDLEBAG2)"
"size": "Huge"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "92"
"hit_dice": "8d12 + 40"
"stats":
- !!int "19"
- !!int "8"
- !!int "21"
- !!int "12"
- !!int "16"
- !!int "12"
"speed": "30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, necrotic, piercing"
"senses": "passive Perception 13"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "5"
"traits":
- "desc": "The treant is immune to the diseases described in the [[5. Mechanics/Tables/Bloodmire Diseases (GRIFFONSSADDLEBAG2).md|Bloodmire Diseases]]\
    \ table."
  "name": "Bloodmire Adaptation"
- "desc": "While the treant remains motionless, it is indistinguishable from a normal\
    \ Bloodmire tree."
  "name": "False Appearance"
- "desc": "The treant deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The treant makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +7 to hit, range 60/180 ft., one target. Hit:\
    \ 20 (3d10 + 4) bludgeoning damage, and the target's speed is halved until the\
    \ start of the treant's next turn."
  "name": "Mudball"
- "desc": "The treant magically animates a pool of blood it can see within 60 feet\
    \ of it. The blood congeals into a viscous form and has the statistics of a [[5. Mechanics/Bestiary/Ooze/Gelatinous Cube.md|gelatinous\
    \ cube]], except its Ooze Cube, Pseudopod,\
    \ and Engulf trait and action options deal necrotic damage instead of acid damage,\
    \ and its Transparent trait doesn't function unless it's in blood or bloodwater.\n\
    \nThe animated blood acts as an ally of the treant. The blood remains animate\
    \ for 8 hours or until it dies; until the treant dies or is more than 120 feet\
    \ from the blood; or until the treant takes a bonus action to turn it back into\
    \ an inanimate pool of blood."
  "name": "Animate Blood (2/Day)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
