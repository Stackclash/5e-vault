---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/erlw
  - monster/cr/1
  - monster/size/medium
  - monster/type/humanoid/warforged
statblock: inline
aliases:
  - Warforged Soldier
---
# [[5. Mechanics\Bestiary\Humanoid\Warforged Soldier.md|Warforged Soldier]]
*Source: Eberron: Rising from the Last War p. 320*

Warforged soldiers are humanoids formed from wood and steel, then magically imbued with life and sentience. The warforged were created to fight in the Last War, and in the aftermath of that conflict, they struggle to understand their place in the world.

Most warforged soldiers still serve their former masters, often guarding dragonmarked houses or merchant caravans. Many warforged find it difficult to separate themselves from the soldiers they were made to be, seeking work as bouncers, bailiffs, and bodyguards. Others put their tireless strength to work as laborers, committed to the reconstruction of the towns and cities they defended or destroyed in the war.

```statblock
"name": "Warforged Soldier"
"size": "Medium"
"type": "humanoid"
"subtype": "warforged"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_resistances": "poison"
"senses": "passive Perception 14"
"languages": "Common"
"cr": "1"
"traits":
- "desc": "The warforged has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ and is immune to disease. Magic can't put it to sleep."
  "name": "Warforged Resilience"
"actions":
- "desc": "The warforged makes two armblade attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) slashing damage."
  "name": "Armblade"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 30/120 ft., one target. Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing\
    \ damage."
  "name": "Javelin"
"reactions":
- "desc": "When an attacker the warforged can see makes an attack roll against a creature\
    \ within 5 feet of the warforged, the warforged can impose disadvantage on the\
    \ attack roll."
  "name": "Protection"
"source":
- "ERLW"
"image": "5. Mechanics/Bestiary/Humanoid/token/warforged-soldier-erlw.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
