---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 14
environments: grassland
size: Large
tags:
  - compendium/src/5e/mpmm
  - monster/cr/14
  - monster/environment/grassland
  - monster/size/large
  - monster/type/construct
aliases:
  - Cadaver Collector
---
# [[5. Mechanics/Bestiary/Construct/Cadaver Collector (MPMM).md|Cadaver Collector]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 68, Mordenkainen's Tome of Foes p. 122, Vecna: Eve of Ruin*

The ancient war machines known as cadaver collectors lumber aimlessly across the blasted plains of Acheron until they are called upon by a necromancer to bolster the ranks of a conquering army on the Material Plane. These fearsome Constructs obey their summoners until they are dismissed back to Acheron, but if a summoner comes to a bad end, a cadaver collector might wander the Material Plane for centuries, collecting corpses while searching for a way to return home.

Cadaver collectors respond to a summons from a mortal only when they are called to the scene of a great battle—either where one is in progress, where one is imminent, or where one once took place. They encase themselves in the armor and weapons of fallen warriors and impale the corpses of those warriors on the lances and other weapons embedded in their salvaged armor.

Corpses that accumulate on a cadaver collector's shell aren't just grisly battle trophies. A cadaver collector can summon the spirits of these cadavers to battle against its enemies. Although these specters are individually weak, a cadaver collector can call up an almost endless supply of them, if given enough time.

```statblock
"name": "Cadaver Collector (MPMM)"
"size": "Large"
"type": "construct"
"alignment": "Typically  Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "21"
- !!int "14"
- !!int "20"
- !!int "5"
- !!int "11"
- !!int "8"
"speed": "30 ft."
"damage_immunities": "necrotic; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages but can't speak"
"cr": "14"
"traits":
- "desc": "The collector has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The collector doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The collector makes two Slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 18 (3d8\
    \ + 5) bludgeoning damage plus 16 (3d10) necrotic damage."
  "name": "Slam"
- "desc": "The collector releases paralyzing gas in a 30-foot cone. Each creature\
    \ in that area must make a successful DC 18 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]] creature\
    \ repeats the saving throw at the end of each of its turns, ending the effect\
    \ on itself with a success."
  "name": "Paralyzing Breath (Recharge 5-6)"
"bonus_actions":
- "desc": "The collector calls up the enslaved spirits of those it has slain; 1d4\
    \ [[5. Mechanics/Bestiary/Undead/Specter.md|specters]] (without Sunlight Sensitivity)\
    \ arise in unoccupied spaces within 15 feet of it. The specters act right after\
    \ the collector on the same initiative count and fight until they're destroyed.\
    \ They disappear when the collector is destroyed."
  "name": "Summon Specters (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
- "VEoR"
"image": "5. Mechanics/Bestiary/Construct/token/cadaver-collector-mpmm.webp"
```
^statblock

## Environment

grassland

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
