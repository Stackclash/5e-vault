---
cssclass: json5e-monster
tags:
- compendium/src/5e/dmg
- monster/size/medium
- monster/type/undead
aliases: ["Avatar of Death (DMG)"]
---
# Avatar of Death (DMG)
*Source: Dungeon Master's Guide p. 164. Available in the SRD.*  

Summoned by the "Skull" card from the [[5. Mechanics/Items/Deck Of Many Things.md\|Deck of Many Things]].

```statblock
"name": "Avatar of Death (DMG)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
"speed": "60 ft., fly 60 ft. (hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned, unconscious"
"senses": "darkvision 60 ft., truesight 60 ft., passive Perception 13"
"languages": "all languages known to its summoner"
"traits":
- "desc": "The avatar can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (dice: 1d10|avg (1d10)) force damage if it\
    \ ends its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "The avatar is immune to features that turn undead."
  "name": "Turn Immunity"
"actions":
- "desc": "The avatar sweeps its spectral scythe through a creature within 5 feet\
    \ of it, dealing 7 (dice: 1d8 + 3|avg (1d8 + 3)) slashing damage plus 4 (dice:\
    \ 1d8|avg (1d8)) necrotic damage."
  "name": "Reaping Scythe"
"source":
- "DMG"
- "TCE"
"image": "compendium/bestiary/undead/token/avatar-of-death.png"
```
^statblock