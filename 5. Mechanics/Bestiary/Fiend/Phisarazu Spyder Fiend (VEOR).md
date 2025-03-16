---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 13
environments: null
size: Large
tags:
  - compendium/src/5e/veor
  - monster/cr/13
  - monster/size/large
  - monster/type/fiend/demon
aliases:
  - Phisarazu Spyder-Fiend
---
# [[5. Mechanics/Bestiary/Fiend/Phisarazu Spyder Fiend (VEOR).md|Phisarazu Spyder-Fiend]]
*Source: Vecna: Eve of Ruin p. 235*

Phisarazu spyder-fiends have a pair of muscular arms sprouting beneath their wolf heads. They are resentful and suspicious of all other creatures, which makes them useful for corralling kakkuus or standing guard.

Phisarazus can magically change their form, but only into shapes that have ten limbs, such as driders and crabs. They use this ability to establish ambushes, infiltrate enemy camps, or appear innocuous while on guard duty.

## Spyder-Fiends

Demonic beasts that combine the worst attributes of wolves and spiders, spyder-fiends scuttle about with bloated, spiderlike bodies and gnash with wolflike heads. Spyder-fiends are usually coated with gore, as brutal killing is their favorite pursuit. They spin durable webs and are ingenious in how they employ their webs against prey.

Spyder-fiends are organized into a hierarchy based on might and cunning, with higher-ranked spyder-fiends dominating lower ranks. Spyder-fiends of equivalent rank scheme against each other for advancement and eagerly turn against one another if treachery can improve their position.

Spyder-fiends loyally serve their general, Miska the Wolf-Spider. While they were rarely seen during Miska's imprisonment in Pandemonium, they have become increasingly active as Miska struggles to free himself in Pandesmos.

```statblock
"name": "Phisarazu Spyder Fiend (VEOR)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "typically  Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "170"
"hit_dice": "20d10 + 60"
"stats":
- !!int "19"
- !!int "14"
- !!int "17"
- !!int "11"
- !!int "14"
- !!int "13"
"speed": "40 ft., climb 40 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "Abyssal, Common, telepathy 120 ft."
"cr": "13"
"traits":
- "desc": "The phisarazu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The phisarazu can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "When in contact with a web, the phisarazu knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The phisarazu ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "The phisarazu makes one Bite attack and two Claw attacks. It can replace\
    \ one of these attacks with Scintillating Spray if available."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 15 (2d10\
    \ + 4) piercing damage plus 9 (2d8) poison damage, and the target has the [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
    \ condition until the start of the phisarazu's next turn."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (4d8\
    \ + 4) slashing damage."
  "name": "Claw"
- "desc": "The phisarazu expels shimmering webs in a 60-foot cone. Creatures and objects\
    \ in that area are outlined by the glittering webs for 1 minute, during which\
    \ time they emit dim light for 10 feet and can't benefit from the [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
    \ condition. Additionally, creatures in that area must succeed on a DC 16 Wisdom\
    \ saving throw or have the [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
    \ condition for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Scintillating Spray (Recharge 5-6)"
"bonus_actions":
- "desc": "The phisarazu transforms into a crab, drider, or giant crab, or returns\
    \ to its true form. Its game statistics, except for its size, are the same in\
    \ each form. Any equipment it is wearing or carrying isn't transformed."
  "name": "Change Shape"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Fiend/token/phisarazu-spyder-fiend-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
