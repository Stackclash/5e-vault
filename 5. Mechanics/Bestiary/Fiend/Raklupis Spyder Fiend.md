---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/veor
  - monster/cr/19
  - monster/size/large
  - monster/type/fiend/demon
statblock: inline
aliases:
  - Raklupis Spyder-Fiend
---
# [[5. Mechanics/Bestiary/Fiend/Raklupis Spyder Fiend.md|Raklupis Spyder-Fiend]]
*Source: Vecna: Eve of Ruin p. 236*

Raklupis spyder-fiends have hard, smooth shells and gleaming spines. With luxuriantly furry wolf heads, powerful arms, and alluring voices, raklupises are the only spyder-fiends that might be called majestic. They create delicate web globes, which they fill with their venom and hurl at foes. Raklupises are keen strategists, and most of them command legions of lesser spyder-fiends.

## Spyder-Fiends

Demonic beasts that combine the worst attributes of wolves and spiders, spyder-fiends scuttle about with bloated, spiderlike bodies and gnash with wolflike heads. Spyder-fiends are usually coated with gore, as brutal killing is their favorite pursuit. They spin durable webs and are ingenious in how they employ their webs against prey.

Spyder-fiends are organized into a hierarchy based on might and cunning, with higher-ranked spyder-fiends dominating lower ranks. Spyder-fiends of equivalent rank scheme against each other for advancement and eagerly turn against one another if treachery can improve their position.

Spyder-fiends loyally serve their general, Miska the Wolf-Spider. While they were rarely seen during Miska's imprisonment in Pandemonium, they have become increasingly active as Miska struggles to free himself in Pandesmos.

```statblock
"name": "Raklupis Spyder Fiend"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "typically  Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "210"
"hit_dice": "28d10 + 56"
"stats":
- !!int "17"
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "16"
- !!int "23"
"speed": "40 ft., climb 40 ft."
"saves":
  "Dexterity": !!int "11"
  "Wisdom": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "11"
  "Perception": !!int "9"
"damage_immunities": "cold, fire, lightning, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Abyssal, Common, telepathy 120 ft."
"cr": "19"
"traits":
- "desc": "The raklupis casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 20).\n\nAt will:\
    \ [[5. Mechanics/Spells/Disguise Self.md|Disguise Self]], [[5. Mechanics/Spells/Invisibility.md|Invisibility]]\
    \ (self only), [[5. Mechanics/Spells/Mage Hand.md|Mage Hand]], [[5. Mechanics/Spells/Minor Illusion.md|Minor Illusion]]\n\
    \n2/day each: [[5. Mechanics/Spells/Darkness.md|Darkness]], [[5. Mechanics/Spells/Dominate Monster.md|Dominate Monster]],\
    \ [[5. Mechanics/Spells/Mass Suggestion.md|Mass Suggestion]], [[5. Mechanics/Spells/Telekinesis.md|Telekinesis]],\
    \ [[5. Mechanics/Spells/Teleport.md|Teleport]]"
  "name": "Spellcasting"
- "desc": "The raklupis has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The raklupis can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "When in contact with a web, the raklupis knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The raklupis ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "The raklupis makes a Bite attack and two Serrated Sword attacks. It can\
    \ use Venom Globe in place of one of these attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage plus 18 (4d8) poison damage. If the target is a creature,\
    \ it must succeed on a DC 20 Constitution saving throw or have the [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ condition for 1 minute. While [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ in this way, a creature has the [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ condition and can't regain hit points. A [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 19 (4d6\
    \ + 5) slashing damage plus 18 (4d8) poison damage."
  "name": "Serrated Sword"
- "desc": "Ranged Weapon Attack: +11 to hit, range 60/180 ft., one target. Hit:\
    \ 45 (10d8) poison damage."
  "name": "Venom Globe"
"bonus_actions":
- "desc": "The raklupis magically ends the [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ and [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] conditions on itself\
    \ and on any number of allies within 60 feet of itself."
  "name": "Demand Loyalty"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Fiend/token/raklupis-spyder-fiend-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
