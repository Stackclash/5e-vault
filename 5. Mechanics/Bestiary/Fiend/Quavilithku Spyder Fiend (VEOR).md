---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 17
environments: null
size: Large
tags:
  - compendium/src/5e/veor
  - monster/cr/17
  - monster/size/large
  - monster/type/fiend/demon
aliases:
  - Quavilithku Spyder-Fiend
---
# [[5. Mechanics\Bestiary\Fiend\Quavilithku Spyder Fiend (VEOR).md|Quavilithku Spyder-Fiend]]
*Source: Vecna: Eve of Ruin p. 236*

Quavilithku spyder-fiends revel in destruction. Although they like to savage prey with their mangy wolf heads, they delight in destroying structures and art objects—the more beautiful, the better. The arms hanging below their wolf heads are physically frail but useful for employing tools of destruction or sabotage.

## Spyder-Fiends

Demonic beasts that combine the worst attributes of wolves and spiders, spyder-fiends scuttle about with bloated, spiderlike bodies and gnash with wolflike heads. Spyder-fiends are usually coated with gore, as brutal killing is their favorite pursuit. They spin durable webs and are ingenious in how they employ their webs against prey.

Spyder-fiends are organized into a hierarchy based on might and cunning, with higher-ranked spyder-fiends dominating lower ranks. Spyder-fiends of equivalent rank scheme against each other for advancement and eagerly turn against one another if treachery can improve their position.

Spyder-fiends loyally serve their general, Miska the Wolf-Spider. While they were rarely seen during Miska's imprisonment in Pandemonium, they have become increasingly active as Miska struggles to free himself in Pandesmos.

```statblock
"name": "Quavilithku Spyder Fiend (VEOR)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "typically  Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "256"
"hit_dice": "27d10 + 108"
"modifier": !!int "3"
"stats":
  - !!int "18"
  - !!int "16"
  - !!int "19"
  - !!int "17"
  - !!int "14"
  - !!int "12"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": "+9"
  - "constitution": "+10"
  - "wisdom": "+8"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+9"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "acid, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 18"
"languages": "Abyssal, Common, telepathy 120 ft."
"cr": "17"
"traits":
  - "desc": "The quavilithku has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The quavilithku can climb difficult surfaces, including upside down on\
      \ ceilings, without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "When in contact with a web, the quavilithku knows the exact location\
      \ of any other creature in contact with the same web."
    "name": "Web Sense"
  - "desc": "The quavilithku ignores movement restrictions caused by webbing."
    "name": "Web Walker"
"actions":
  - "desc": "The quavilithku makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 15\
      \ (2d10 + 4) piercing damage plus 17 (5d6) poison damage. If the target is a\
      \ creature, it must succeed on a DC 18 Constitution saving throw or have the\
      \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] condition for 1 minute.\
      \ While [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] in this way, a\
      \ creature can't regain hit points. A [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Bite"
  - "desc": "The quavilithku expels acid-drenched webs in a 90-foot cone. Each creature\
      \ in that area must make a DC 18 Constitution saving throw, taking 44 (8d10)\
      \ acid damage on a failed save or half as much damage on a successful one. Nonmagical\
      \ objects in the area that aren't being worn or carried take 44 (8d10) acid\
      \ damage."
    "name": "Dissolving Web (Recharge 5-6)"
"bonus_actions":
  - "desc": "The quavilithku sizes up a creature it can see within 40 feet of itself.\
      \ Until the start of the quavilithku's next turn, it has advantage on attack\
      \ rolls against the creature."
    "name": "Assess Weakness"
"source":
  - "VEoR"
"image": "5. Mechanics/Bestiary/Fiend/token/quavilithku-spyder-fiend-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
