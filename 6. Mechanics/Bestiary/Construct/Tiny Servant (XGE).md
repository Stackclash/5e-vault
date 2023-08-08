---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/xge
- monster/size/tiny
- monster/type/construct
statblock: inline
---
# Tiny Servant
*Source: Xanathar's Guide to Everything p. 169*  

```statblock
"name": "Tiny Servant"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "4"
- !!int "16"
- !!int "10"
- !!int "2"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft., climb 30 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) bludgeoning damage."
  "name": "Slam"
"source":
- "XGE"
"image": "6. Mechanics/Bestiary/Construct/token/tiny-servant.png"
```
^statblock