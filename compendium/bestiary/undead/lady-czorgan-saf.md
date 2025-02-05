---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 
size: Medium
tags:
- compendium/src/5e/saf
- monster/cr/12
- monster/size/medium
- monster/type/undead
aliases: ["Lady Czorgan"]
---
# [Lady Czorgan](compendium\bestiary\undead/lady-czorgan-saf.md)
*Source: Strongholds and Followers p. 258*

```statblock
"name": "Lady Czorgan (SaF)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "[plate armor](compendium/items/plate-armor.md)"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "16"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, Common"
"cr": "12"
"traits":
- "desc": "Lady Czorgan is a 13th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 15, +8 to hit with spell attacks). She has the following spells\
    \ prepared:\n\n1st level (4 slots): [command](compendium/spells/command.md),\
    \ [hunter's mark](compendium/spells/hunters-mark.md), [inflict wounds](compendium/spells/inflict-wounds.md)\n\
    \n2nd level (3 slots): [hold person](compendium/spells/hold-person.md), [magic\
    \ weapon](compendium/spells/magic-weapon.md)\n\n3rd level (3 slots): [dispel\
    \ magic](compendium/spells/dispel-magic.md), [vampiric touch](compendium/spells/vampiric-touch.md)\n\
    \n4th level (1 slots): [banishment](compendium/spells/banishment.md), [blight](compendium/spells/blight.md)"
  "name": "Spellcasting"
- "desc": "Lady Czorgan has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Unless Lady Czorgan is [incapacitated](/compendium/rules/conditions.md#Incapacitated),\
    \ she and undead creatures of her choice within 30 feet have advantage on saving\
    \ throws against features that turn undead."
  "name": "Unholy Aura"
"actions":
- "desc": "Lady Czorgan makes two longsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 10 (1d10 + 4) slashing damage if used with two hands,\
    \ plus 13 (3d8) necrotic damage."
  "name": "Longsword"
- "desc": "Lady Czorgan points at a location she can see and corruption explodes from\
    \ the ground within 60 feet of her. Each creature in a 20-foot-radius sphere centered\
    \ on that point must make a DC 15 Constitution saving throw. The corrupted ground\
    \ spreads around corners. A creature takes 52 (15d6) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Decaying Ground (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```