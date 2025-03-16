---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Medium
tags:
  - compendium/src/5e/veor
  - monster/cr/5
  - monster/size/medium
  - monster/type/fiend/demon
aliases:
  - Kakkuu Spyder-Fiend
---
# [[5. Mechanics/Bestiary/Fiend/Kakkuu Spyder Fiend (VEOR).md|Kakkuu Spyder-Fiend]]
*Source: Vecna: Eve of Ruin p. 234*

Resembling enormous spiders, kakkuus are the most numerous and least intelligent spyder-fiends. In large conflicts, they serve as foot soldiers, but they prefer to avoid more powerful Fiends, who boss them around. Left on their own, kakkuus lurk in ambush and use their webs to snare prey.

## Spyder-Fiends

Demonic beasts that combine the worst attributes of wolves and spiders, spyder-fiends scuttle about with bloated, spiderlike bodies and gnash with wolflike heads. Spyder-fiends are usually coated with gore, as brutal killing is their favorite pursuit. They spin durable webs and are ingenious in how they employ their webs against prey.

Spyder-fiends are organized into a hierarchy based on might and cunning, with higher-ranked spyder-fiends dominating lower ranks. Spyder-fiends of equivalent rank scheme against each other for advancement and eagerly turn against one another if treachery can improve their position.

Spyder-fiends loyally serve their general, Miska the Wolf-Spider. While they were rarely seen during Miska's imprisonment in Pandemonium, they have become increasingly active as Miska struggles to free himself in Pandesmos.

```statblock
"name": "Kakkuu Spyder Fiend (VEOR)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "17"
- !!int "15"
- !!int "14"
- !!int "6"
- !!int "10"
- !!int "10"
"speed": "30 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "3"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "understands Abyssal but can't speak"
"cr": "5"
"traits":
- "desc": "The kakkuu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The kakkuu can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "When in contact with a web, the kakkuu knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The kakkuu ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "The kakkuu makes a Web Snare attack, uses Reel, and makes a Bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10\
    \ + 3) piercing damage plus 10 (3d6) poison damage."
  "name": "Bite"
- "desc": "The kakkuu pulls each creature within 60 feet of itself that is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ by its Web Snare up to 30 feet straight toward itself."
  "name": "Reel"
- "desc": "Ranged Weapon Attack: +6 to hit, reach 30/60 ft., one Large or smaller\
    \ creature. Hit: The target has the [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ condition (escape DC 13). While [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
    \ the target also has the [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
    \ condition. A web snare grappling a creature can be attacked and destroyed (AC\
    \ 10; 10 hit points; immunity to bludgeoning, poison, and psychic damage)."
  "name": "Web Snare"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Fiend/token/kakkuu-spyder-fiend-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
