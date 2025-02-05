---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: underdark
size: Large
tags:
- compendium/src/5e/mm
- monster/cr/4
- monster/environment/underdark
- monster/size/large
- monster/type/undead
aliases: ["Bone Naga (Spirit)"]
---
# [Bone Naga (Spirit)](compendium\bestiary\undead/bone-naga-spirit.md)
*Source: Monster Manual p. 233*

In response to the long history of conflict between the yuan-ti and the nagas, yuan-ti created a necromantic ritual that could halt a naga's resurrection by transforming the living naga into a skeletal undead servitor. A bone naga retains only a few of the spells it knew in life.

## Nagas

Nagas are intelligent serpents that inhabit the ruins of the past, amassing arcane treasures and knowledge.

The first nagas were created as immortal guardians by a humanoid race long lost to history. When this race died out, the nagas deemed themselves the rightful inheritors of their masters' treasures and magical lore. Industrious and driven, nagas occasionally venture out from their lairs to track down magic items or rare spellbooks.

Nagas never feel the ravages of time or succumb to sickness. Even if it is struck down, a naga's immortal spirit reforms in a new body in a matter of days, ready to continue its eternal work.

### Benevolent Dictators and Brutal Tyrants

A naga rules its domain with absolute authority. Whether it rules with compassion or by terrorizing its subjects, the naga believes itself the master of all other creatures that inhabit its domain.

### Rivalry

Nagas have a long-standing enmity with the yuan-ti, with each race seeing itself as the epitome of serpentine evolution. Though cooperation between them is rare, nagas and yuan-ti sometimes set aside their differences to work toward common objectives. However, yuan-ti always chafe under a naga's authority.

### Immortal Nature

A naga doesn't require air, food, drink, or sleep.

```statblock
"name": "Bone Naga (Spirit)"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "58"
"hit_dice": "9d10 + 9"
"stats":
- !!int "15"
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "15"
- !!int "16"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common plus one other language"
"cr": "4"
"traits":
- "desc": "The naga is a 5th-level spellcaster (spell save DC 12, +4 to hit with spell\
    \ attacks) that needs only verbal components to cast its spells. Its spellcasting\
    \ ability is Intelligence, and it has the following wizard spells prepared:\n\n\
    Cantrips (at will): [mage hand](compendium/spells/mage-hand.md), [minor illusion](compendium/spells/minor-illusion.md),\
    \ [ray of frost](compendium/spells/ray-of-frost.md)\n\n1st level (4 slots):\
    \ [charm person](compendium/spells/charm-person.md), [sleep](compendium/spells/sleep.md)\n\
    \n2nd level (3 slots): [detect thoughts](compendium/spells/detect-thoughts.md),\
    \ [hold person](compendium/spells/hold-person.md)\n\n3rd level (2 slots):\
    \ [lightning bolt](compendium/spells/lightning-bolt.md)"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 10\
    \ (2d6 + 3) piercing damage plus 10 (3d6) poison damage."
  "name": "Bite"
"source":
- "MM"
"image": "compendium/bestiary/undead/token/bone-naga-spirit.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```