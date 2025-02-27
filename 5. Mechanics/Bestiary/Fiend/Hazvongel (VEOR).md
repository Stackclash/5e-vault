---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 14
environments: null
size: Huge
tags:
  - compendium/src/5e/veor
  - monster/cr/14
  - monster/size/huge
  - monster/type/fiend/demon
aliases:
  - Hazvongel
---
# [[5. Mechanics\Bestiary\Fiend\Hazvongel (VEOR).md|Hazvongel]]
*Source: Vecna: Eve of Ruin p. 222*

> [!quote] A quote from The Demon Lord Pazuzu  
> 
> They make excellent scouts and are capable aerial attackers, but their attention span is frustratingly wanting.

Avian demons called hazvongels haunt the windswept skies of Pandemonium, preying on lost and weary travelers. Hazvongels resemble enormous, crimson crows with tattered feathers and a dozen legs. Their wings constantly drip blood, which they gather in their many talons and fling in a gruesome rain.

Hazvongels sometimes soar in the skies of the Abyss, where they originate, but they migrate to and from Pandemonium throughout their existence. More powerful demons, especially the demon lord Pazuzu, use hazvongels as scouts, but hazvongels' wanderlust makes them ill-suited for extended missions.

```statblock
"name": "Hazvongel (VEOR)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "typically  Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "237"
"hit_dice": "25d12 + 75"
"stats":
- !!int "21"
- !!int "20"
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "11"
"speed": "20 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 17"
"languages": "Abyssal, telepathy 120 ft."
"cr": "14"
"traits":
- "desc": "The hazvongel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The hazvongel makes three Talon attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 18\
    \ (3d8 + 5) piercing damage."
  "name": "Talon"
- "desc": "The hazvongel launches a spray of blood in a 90-foot cone. Each creature\
    \ in that area must make a DC 18 Dexterity saving throw, taking 27 (6d8) necrotic\
    \ damage on a failed save or half as much damage on a successful one."
  "name": "Blood Barrage (Recharge 5-6)"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Fiend/token/hazvongel-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
