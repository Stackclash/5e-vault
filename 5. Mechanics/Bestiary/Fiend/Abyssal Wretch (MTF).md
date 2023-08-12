---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mtf
- monster/size/medium
- monster/type/fiend/demon
statblock: inline
---
# Abyssal Wretch
*Source: Mordenkainen's Tome of Foes p. 136, Baldur's Gate: Descent Into Avernus*  

```statblock
"name": "Abyssal Wretch"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "9"
- !!int "12"
- !!int "11"
- !!int "5"
- !!int "8"
- !!int "5"
"speed": "walk 20 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 9"
"languages": "understands Abyssal but can't speak"
"cr": "1/4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 1|avg (1d8 + 1) slashing damage."
  "name": "Bite"
"source":
- "MTF"
- "BGDIA"
"image": "/compendium/bestiary/fiend/token/abyssal-wretch.png"
```
^statblock