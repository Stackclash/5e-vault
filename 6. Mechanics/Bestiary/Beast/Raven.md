---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/hill
- monster/environment/swamp
- monster/environment/urban
- monster/size/tiny
- monster/type/beast
statblock: inline
---
# Raven
*Source: Monster Manual p. 335, Curse of Strahd, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, The Wild Beyond the Witchlight, Keys from the Golden Vault*  

```statblock
"name": "Raven"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "14"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The raven can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage."
  "name": "Beak"
"source":
- "MM"
- "CoS"
- "IDRotF"
- "CM"
- "WBtW"
- "KftGV"
"image": "6. Mechanics/Bestiary/Beast/token/raven.png"
```
^statblock

## Environment

swamp, hill, urban