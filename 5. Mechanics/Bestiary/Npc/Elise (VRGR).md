---
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/construct
aliases: ["Elise"]
---
# Elise
*Source: Van Richten's Guide to Ravenloft p. 143*  

Dr. Mordenheim's supposed beloved and greatest achievement, Elise is a confused, frustrated soul who never wished for her current circumstances.

Elise's heart has been replaced with the Unbreakable Heart. If this device is removed, Elise dies, even if it is replaced with another heart. Elise is horrified by what Dr. Mordenheim did to her and tries to avoid the doctor and all strangers, fearing they might kill her to learn the Unbreakable Heart's secrets. She roams without destination but keeps a hidden sanctuary at Hope's Heart on the Isles of Agony. Although she has tried to leave Lamordia, the Mists prevent her from doing so.

```statblock
"name": "Elise"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "9"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "30 ft."
"damage_immunities": "cold; lightning; poison; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- "desc": "Elise is immune to any spell or effect that would alter her form."
  "name": "Immutable Form"
- "desc": "Whenever Elise is subjected to lightning damage, she takes no damage and\
    \ instead regains a number of hit points equal to the lightning damage dealt."
  "name": "Lightning Absorption"
- "desc": "Elise has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "Elise's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "Elise makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "VRGR"
"image": "5. Mechanics/Bestiary/Npc/token/elise.png"
```
^statblock